import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCalendar, FaUser } from "react-icons/fa";
import { getBlogPost } from "../services/contentful";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const result = await getBlogPost(slug);
        setPost(result);
        setError(null);
      } catch (err) {
        setError("Failed to load blog post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-amber-400 text-black rounded-sm hover:bg-amber-300 transition-colors duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-4">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <article className="py-20 bg-gray-100 min-h-screen relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-900 to-transparent opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl -mr-48 -mb-48"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl -ml-48 -mt-48"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold cinzel text-gray-900 mb-4">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex items-center gap-6 mb-8 text-sm text-gray-500 bellefair">
            <div className="flex items-center gap-2">
              <FaUser className="text-amber-400" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendar className="text-amber-400" />
              <span>{post.date}</span>
            </div>
            {post.category && (
              <span className="px-3 py-1 bg-amber-400 text-black text-xs font-semibold rounded-full cinzel">
                {post.category}
              </span>
            )}
          </div>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="mb-8 rounded-xl overflow-hidden">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none bellefair">
            {typeof post.body === "string" ? (
              <p>{post.body}</p>
            ) : (
              post.body?.content?.map((content, index) => {
                if (content.nodeType === "paragraph") {
                  return (
                    <p key={index} className="mb-4">
                      {content.content?.[0]?.value || ""}
                    </p>
                  );
                }
                return null;
              })
            )}
          </div>
        </motion.div>
      </div>
    </article>
  );
}
