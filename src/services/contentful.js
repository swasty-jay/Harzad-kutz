// import { createClient } from "contentful";

// const client = createClient({
//   space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
//   accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
// });

// export const getBlogPosts = async (options = {}) => {
//   try {
//     const response = await client.getEntries({
//       content_type: "blogPost",
//       ...options,
//       order: "-sys.createdAt",
//     });

//     const posts = response.items.map((item) => ({
//       id: item.sys.id,
//       title: item.fields.title,
//       slug: item.fields.slug,
//       // excerpt: item.fields.excerpt,
//       body: item.fields.body,
//       coverImage: item.fields.coverImage?.fields?.file?.url,
//       author: item.fields.author?.fields?.name || "Emmanuel",
//       Tags: item.fields.Tags,
//       date: new Date(item.sys.createdAt).toLocaleDateString("en-US", {
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//       }),
//     }));

//     return {
//       posts,
//       total: response.total,
//       skip: response.skip,
//       limit: response.limit,
//     };
//   } catch (error) {
//     console.error("Error fetching blog posts:", error);
//     return {
//       posts: [],
//       total: 0,
//       skip: 0,
//       limit: 0,
//     };
//   }
// };

// src/services/contentful.js
import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID, // from .env
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN, // CDA key
  environment: "master", // change if you use another env
});

export async function getBlogPosts({ skip = 0, limit = 9 }) {
  try {
    const response = await client.getEntries({
      content_type: "blogPost", // must match Contentful content type ID
      order: "-fields.publishedDate",
      skip,
      limit,
    });

    const posts = response.items.map((item) => {
      const fields = item.fields;

      return {
        id: item.sys.id,
        title: fields.title || "Untitled",
        slug: fields.slug,
        excerpt:
          fields.body?.content?.[0]?.content?.[0]?.value?.slice(0, 150) +
            "..." || "", // take first 150 chars of body as excerpt
        body: fields.body, // full rich text if needed
        author: fields.author?.fields?.name || "Unknown",
        date: fields.publishedDate
          ? new Date(fields.publishedDate).toLocaleDateString()
          : "",
        category: fields.tags || "General",
        featuredImage: fields.coverImage
          ? "https:" + fields.coverImage.fields.file.url
          : null,
      };
    });

    return {
      posts,
      total: response.total,
    };
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
}
