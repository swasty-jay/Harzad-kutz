import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCalendar, FaUser, FaClock } from "react-icons/fa";
import { getBlogPost } from "../services/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
    return <span>loading</span>;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-red-500 rounded-full"></div>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Unable to load post
          </h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Post not found
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-50 to-white">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-4 sm:pb-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            {/* Featured Image */}
            {/* {post.featuredImage && (
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative max-w-xl mx-auto px-1 mb-6"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
              </motion.div>
            )} */}

            {/* Title */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-1 leading-tight cinzel px-2">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {/* Article Content */}
          <div className="prose prose-sm sm:prose-base md:prose-lg prose-gray max-w-none bellefair">
            <div className="text-base sm:text-lg leading-relaxed text-gray-700 space-y-4 sm:space-y-6">
              {typeof post.body === "string" ? (
                <p className="first-letter:text-4xl sm:first-letter:text-5xl md:first-letter:text-6xl first-letter:font-bold first-letter:text-gray-900 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
                  {documentToReactComponents(post.body)}
                </p>
              ) : (
                post.body?.content?.map((content, index) => {
                  if (content.nodeType === "paragraph") {
                    const text = content.content?.[0]?.value || "";
                    if (index === 0) {
                      return (
                        <p
                          key={index}
                          className="first-letter:text-4xl sm:first-letter:text-5xl md:first-letter:text-6xl first-letter:font-bold first-letter:text-gray-900 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none mb-4 sm:mb-6"
                        >
                          {text}
                        </p>
                      );
                    }
                    return (
                      <p key={index} className="mb-3 sm:mb-4 leading-relaxed">
                        {text}
                      </p>
                    );
                  }
                  return null;
                })
              )}
            </div>
          </div>

          {/* Author Section */}
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                  <FaUser className="text-white text-xs sm:text-sm" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 cinzel text-sm sm:text-base">
                    Written by
                  </p>
                </div>
              </div>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-600 bellefair ml-0 sm:ml-4">
                <div className="flex items-center gap-2">
                  <FaUser className="text-gray-400 text-xs" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-gray-400 text-xs" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-gray-400 text-xs" />
                  <span>5 min read</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Hint */}
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
            <div className="text-center">
              <p className="text-xs sm:text-sm text-gray-500 bellefair">
                Thank you for reading
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
