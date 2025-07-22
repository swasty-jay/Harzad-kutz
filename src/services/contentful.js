import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export const getBlogPosts = async (options = {}) => {
  try {
    const response = await client.getEntries({
      content_type: "blogPost",
      ...options,
      order: "-sys.createdAt",
    });

    const posts = response.items.map((item) => ({
      id: item.sys.id,
      title: item.fields.title,
      slug: item.fields.slug,
      excerpt: item.fields.excerpt,
      content: item.fields.content,
      featuredImage: item.fields.featuredImage?.fields?.file?.url,
      author: item.fields.author?.fields?.name || "Eden Hazard",
      category: item.fields.category,
      date: new Date(item.sys.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    }));

    return {
      posts,
      total: response.total,
      skip: response.skip,
      limit: response.limit,
    };
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return {
      posts: [],
      total: 0,
      skip: 0,
      limit: 0,
    };
  }
};
