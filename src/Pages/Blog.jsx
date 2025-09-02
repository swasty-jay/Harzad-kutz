import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCalendar,
  FaUser,
  FaArrowRight,
  FaSpinner,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { getBlogPosts } from "../services/contentful";
import BlogPostSkeleton from "../Components/BlogPostSkeleton";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const postsPerPage = 9;

  const fetchPosts = async () => {
    try {
      const skip = (page - 1) * postsPerPage;
      const result = await getBlogPosts({
        skip,
        limit: postsPerPage,
      });

      if (page === 1) {
        setPosts(result.posts);
      } else {
        setPosts((prev) => [...prev, ...result.posts]);
      }

      setHasMore(result.total > skip + postsPerPage);
      setError(null);
    } catch {
      setError("Failed to load blog posts. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  return (
    <section className="pt-22 sm:py-4 bg-gray-100 min-h-screen relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-900 to-transparent opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl -mr-48 -mb-48"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl -ml-48 -mt-48"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-1 mb-2 text-sm font-medium tracking-widest text-amber-500 uppercase border border-amber-400 cinzel">
            Our Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold cinzel text-gray-900 mb-1">
            Latest Articles & News
          </h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-2"></div>
          <p className="text-gray-600 bellefair text-lg max-w-2xl mx-auto">
            Discover the latest trends, expert tips, and insights from the world
            of men's grooming and style.
          </p>
        </motion.div>

        {/* Error Message */}
        {error && (
          <div className="text-center mb-3">
            <p className="text-red-500 bellefair">{error}</p>
            <button
              onClick={() => {
                setLoading(true);
                fetchPosts();
              }}
              className="mt-4 px-6 py-2 bg-amber-400 text-black rounded-sm hover:bg-amber-300 transition-colors duration-300 cinzel"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Loading Skeletons */}
          {loading &&
            page === 1 &&
            [...Array(6)].map((_, i) => <BlogPostSkeleton key={i} />)}

          {/* Blog Posts */}
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <img
                    src={post.featuredImage || "/photos/1.jpg"}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 bg-amber-400 text-black text-xs font-semibold rounded-full cinzel">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 cinzel text-gray-900 group-hover:text-amber-500 transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 bellefair mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-500 bellefair">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <FaUser className="text-amber-400" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendar className="text-amber-400" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Read More Link */}
                <div className="px-6 pb-6">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-600 transition-colors duration-300 cinzel text-sm font-semibold"
                  >
                    Read More
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {!loading && hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-amber-400 text-black font-bold uppercase cinzel tracking-wide rounded-sm hover:bg-amber-300 transition-all duration-300 shadow-lg hover:shadow-amber-400/25"
              disabled={loading}
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  Load More
                  <FaArrowRight />
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
