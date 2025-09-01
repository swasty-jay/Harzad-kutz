import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID, // from .env
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN, // CDA key
  environment: "master", // change if you use another env
});

export async function getBlogPost(slug) {
  try {
    const response = await client.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
      limit: 1,
    });

    if (!response.items.length) {
      return null;
    }

    const item = response.items[0];
    const fields = item.fields;

    return {
      id: item.sys.id,
      title: fields.title || "Untitled",
      slug: fields.slug,
      body: fields.body,
      author: fields.author?.fields?.name || "Emmanuel",
      date: fields.publishedDate
        ? new Date(fields.publishedDate).toLocaleDateString()
        : "",
      category: fields.tags || "General",
      featuredImage: fields.coverImage
        ? "https:" + fields.coverImage.fields.file.url
        : null,
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    throw error;
  }
}

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
        author: fields.author?.fields?.name || "Emmanuel",
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
