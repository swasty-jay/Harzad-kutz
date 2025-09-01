import { useState, useEffect } from "react";
import { FaCalendar, FaUser, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getBlogPosts } from "../services/contentful";
import BlogPostSkeleton from "./BlogPostSkeleton";

// const defaultPosts = [
//   {
//     id: 1,
//     title: "Top Men's Hairstyle Trends for 2025",
//     excerpt:
//       "Discover the latest trends in men's hairstyles, from modern fades to classic cuts that are making waves this year.",
//     image: "/photos/1.jpg",
//     author: "Emmanuel",
//     date: "July 15, 2025",
//     category: "Style Trends",
//   },
//   {
//     id: 2,
//     title: "The Art of Beard Maintenance",
//     excerpt:
//       "Expert tips and techniques for keeping your beard looking sharp, healthy, and perfectly groomed all year round.",
//     image: "/photos/2.jpg",
//     author: "Emmanuel",
//     date: "July 10, 2025",
//     category: "Grooming Tips",
//   },
//   {
//     id: 3,
//     title: "Choosing the Right Haircut for Your Face Shape",
//     excerpt:
//       "Learn how to select the perfect hairstyle that complements your face shape and enhances your features.",
//     image: "/photos/3.jpg",
//     author: "Emmanuel",
//     date: "July 5, 2025",
//     category: "Style Guide",
//   },
// ];

export default function BlogPreview() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await getBlogPosts({ limit: 3 });
        setPosts(result.posts);
      } catch (error) {
        console.error("Error fetching preview posts:", error);
        setPosts(defaultPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-900 to-transparent opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl -mr-48 -mb-48"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl -ml-48 -mt-48"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium tracking-widest text-amber-500 uppercase border border-amber-400 cinzel">
            Latest From Our Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold cinzel text-gray-900 mb-4">
            Grooming Insights & Tips
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-gray-600 bellefair text-lg max-w-2xl mx-auto">
            Stay up to date with the latest trends, styling tips, and expert
            advice from our master barbers.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <BlogPostSkeleton />
          ) : (
            posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                    <img
                      src={post.coverImage || "/photos/1.jpg"}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="px-3 py-1 bg-amber-400 text-black text-xs font-semibold rounded-full cinzel">
                        {post.tags}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 cinzel text-gray-900 group-hover:text-amber-500 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <div>
                      <p className="text-gray-600 bellefair mb-4 ">
                        {post.body}
                      </p>
                    </div>

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
            ))
          )}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 bg-amber-400 text-black font-bold uppercase cinzel tracking-wide rounded-sm hover:bg-amber-300 transition-all duration-300 shadow-lg hover:shadow-amber-400/25"
          >
            View All Posts
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
