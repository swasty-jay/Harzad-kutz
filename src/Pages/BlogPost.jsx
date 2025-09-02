// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaCalendar, FaUser, FaClock } from "react-icons/fa";
// import { getBlogPost } from "../services/contentful";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { BLOCKS, MARKS } from "@contentful/rich-text-types";
// import BlogPostSkeleton from "../Components/BlogPostSkeleton";

// export default function BlogPost() {
//   const { slug } = useParams();
//   const [post, setPost] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Rich text rendering options
//   const richTextOptions = {
//     renderMark: {
//       [MARKS.BOLD]: (text) => <strong className="font-semibold">{text}</strong>,
//       [MARKS.ITALIC]: (text) => <em className="italic">{text}</em>,
//       [MARKS.UNDERLINE]: (text) => <u className="underline">{text}</u>,
//     },
//     renderNode: {
//       [BLOCKS.PARAGRAPH]: (node, children) => (
//         <p className="mb-4 sm:mb-6 leading-relaxed text-gray-700">{children}</p>
//       ),
//       [BLOCKS.HEADING_1]: (node, children) => (
//         <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 mt-8 sm:mt-12 cinzel">
//           {children}
//         </h1>
//       ),
//       [BLOCKS.HEADING_2]: (node, children) => (
//         <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 mt-6 sm:mt-10 cinzel">
//           {children}
//         </h2>
//       ),
//       [BLOCKS.HEADING_3]: (node, children) => (
//         <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 mt-5 sm:mt-8 cinzel">
//           {children}
//         </h3>
//       ),
//       [BLOCKS.HEADING_4]: (node, children) => (
//         <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 mt-4 sm:mt-6 cinzel">
//           {children}
//         </h4>
//       ),
//       [BLOCKS.HEADING_5]: (node, children) => (
//         <h5 className="text-sm sm:text-base font-bold text-gray-900 mb-2 mt-3 sm:mt-4 cinzel">
//           {children}
//         </h5>
//       ),
//       [BLOCKS.HEADING_6]: (node, children) => (
//         <h6 className="text-sm font-bold text-gray-900 mb-2 mt-3 cinzel">
//           {children}
//         </h6>
//       ),
//       [BLOCKS.UL_LIST]: (node, children) => (
//         <ul className="mb-4 sm:mb-6 space-y-2 pl-4 sm:pl-6 list-disc bellefair">
//           {children}
//         </ul>
//       ),
//       [BLOCKS.OL_LIST]: (node, children) => (
//         <ol className="mb-4 sm:mb-6 space-y-2 pl-4 sm:pl-6 list-decimal bellefair">
//           {children}
//         </ol>
//       ),
//       [BLOCKS.LIST_ITEM]: (node, children) => (
//         <li className="text-gray-700 leading-relaxed">{children}</li>
//       ),
//       [BLOCKS.QUOTE]: (node, children) => (
//         <blockquote className="border-l-4 border-amber-400 pl-4 sm:pl-6 py-3 sm:py-4 mb-4 sm:mb-6 italic text-gray-700 bg-gray-50 rounded-r-lg bellefair">
//           {children}
//         </blockquote>
//       ),
//       [BLOCKS.HR]: () => <hr className="my-8 sm:my-12 border-gray-200" />,
//       // Handle embedded entries if you have any
//       [BLOCKS.EMBEDDED_ENTRY]: (node) => {
//         // You can customize this based on your content types
//         return (
//           <div className="my-4 p-4 bg-gray-50 rounded-lg">Embedded content</div>
//         );
//       },
//       // Handle embedded assets (images, etc.)
//       [BLOCKS.EMBEDDED_ASSET]: (node) => {
//         const { title, description, file } = node.data.target.fields;
//         return (
//           <div className="my-6 sm:my-8">
//             <img
//               src={file.url}
//               alt={description || title}
//               className="w-full h-auto rounded-lg shadow-sm"
//             />
//             {description && (
//               <p className="text-sm text-gray-600 mt-2 text-center italic">
//                 {description}
//               </p>
//             )}
//           </div>
//         );
//       },
//     },
//   };

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const result = await getBlogPost(slug);
//         setPost(result);
//         setError(null);
//       } catch (err) {
//         setError("Failed to load blog post. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPost();
//   }, [slug]);

//   if (loading) {
//     return <BlogPostSkeleton />;
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center px-6">
//         <div className="max-w-md mx-auto text-center">
//           <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
//             <div className="w-8 h-8 bg-red-500 rounded-full"></div>
//           </div>
//           <h2 className="text-xl font-semibold text-gray-900 mb-2">
//             Unable to load post
//           </h2>
//           <p className="text-gray-600 mb-6 text-sm leading-relaxed">{error}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (!post) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center px-6">
//         <div className="max-w-md mx-auto text-center">
//           <div className="w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center">
//             <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
//           </div>
//           <h2 className="text-xl font-semibold text-gray-900 mb-2">
//             Post not found
//           </h2>
//           <p className="text-gray-600 text-sm leading-relaxed">
//             The blog post you're looking for doesn't exist or has been removed.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <article className="min-h-screen bg-white overflow-x-hidden">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-br from-gray-50 to-white">
//         <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-24 sm:pt-8 pb-4 sm:pb-6">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="text-center"
//           >
//             {/* Title */}
//             <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-1 leading-tight cinzel px-2">
//               {post.title}
//             </h1>
//           </motion.div>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//         >
//           {/* Article Content */}
//           <div className="prose prose-sm sm:prose-base md:prose-lg prose-gray max-w-none bellefair">
//             <div className="text-base sm:text-lg leading-relaxed text-gray-700">
//               {typeof post.body === "string" ? (
//                 // Handle plain string content
//                 <p className="first-letter:text-4xl sm:first-letter:text-5xl md:first-letter:text-6xl first-letter:font-bold first-letter:text-gray-900 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
//                   {post.body}
//                 </p>
//               ) : post.body && post.body.nodeType === "document" ? (
//                 // Handle rich text document from Contentful
//                 <div className="rich-text-content">
//                   {documentToReactComponents(post.body, richTextOptions)}
//                 </div>
//               ) : post.body && post.body.content ? (
//                 // Fallback for other content structures
//                 post.body.content.map((content, index) => {
//                   if (content.nodeType === "paragraph") {
//                     const text = content.content?.[0]?.value || "";
//                     if (index === 0) {
//                       return (
//                         <p
//                           key={index}
//                           className="first-letter:text-4xl sm:first-letter:text-5xl md:first-letter:text-6xl first-letter:font-bold first-letter:text-gray-900 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none mb-4 sm:mb-6"
//                         >
//                           {text}
//                         </p>
//                       );
//                     }
//                     return (
//                       <p key={index} className="mb-3 sm:mb-4 leading-relaxed">
//                         {text}
//                       </p>
//                     );
//                   }
//                   return null;
//                 })
//               ) : (
//                 <p className="text-gray-500 italic">No content available.</p>
//               )}
//             </div>
//           </div>

//           {/* Author Section */}
//           <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
//             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
//               {/* Meta Information */}
//               <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-600 bellefair ml-0 sm:ml-4">
//                 <div className="flex items-center gap-2">
//                   <FaUser className="text-gray-400 text-xs" />
//                   <span className="font-medium">{post.author}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FaCalendar className="text-gray-400 text-xs" />
//                   <span>{post.date}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FaClock className="text-gray-400 text-xs" />
//                   <span>{post.readingtime} min read</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Navigation Hint */}
//           <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
//             <div className="text-center">
//               <p className="text-xs sm:text-sm text-gray-500 bellefair">
//                 Thank you for reading
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </article>
//   );
// }

import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCalendar, FaUser, FaClock } from "react-icons/fa";
import { getBlogPost } from "../services/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import BlogPostSkeleton from "../Components/BlogPostSkeleton";

// Reading time calculation function
const calculateReadingTime = (content, wordsPerMinute = 200) => {
  if (!content) return 0;

  let text = "";

  // Extract text from different content types
  if (typeof content === "string") {
    text = content;
  } else if (content.nodeType === "document" && content.content) {
    // Handle Contentful rich text document
    text = extractTextFromRichText(content);
  } else if (content.content) {
    // Handle other structured content
    text = extractTextFromStructuredContent(content);
  }

  // Clean the text and count words
  const cleanText = text.replace(/\s+/g, " ").trim();
  const wordCount = cleanText
    .split(" ")
    .filter((word) => word.length > 0).length;

  // Calculate reading time
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);

  return readingTimeMinutes;
};

// Extract text from Contentful rich text document
const extractTextFromRichText = (document) => {
  const processNode = (node) => {
    if (!node) return "";

    switch (node.nodeType) {
      case "text":
        return node.value || "";

      case "paragraph":
      case "heading-1":
      case "heading-2":
      case "heading-3":
      case "heading-4":
      case "heading-5":
      case "heading-6":
      case "list-item":
      case "blockquote":
        if (node.content) {
          return node.content.map(processNode).join("") + " ";
        }
        return "";

      case "unordered-list":
      case "ordered-list":
        if (node.content) {
          return node.content.map(processNode).join("");
        }
        return "";

      case "document":
        if (node.content) {
          return node.content.map(processNode).join("");
        }
        return "";

      case "embedded-asset-block":
      case "embedded-entry-block":
      case "hr":
        return "";

      default:
        if (node.content) {
          return node.content.map(processNode).join("");
        }
        return "";
    }
  };

  return processNode(document);
};

// Extract text from other structured content formats
const extractTextFromStructuredContent = (content) => {
  let text = "";

  if (content.content && Array.isArray(content.content)) {
    content.content.forEach((item) => {
      if (item.nodeType === "paragraph" && item.content) {
        item.content.forEach((textNode) => {
          if (textNode.nodeType === "text") {
            text += textNode.value + " ";
          }
        });
      }
    });
  }

  return text;
};

// Format reading time for display
const formatReadingTime = (minutes) => {
  if (minutes < 1) return "Less than 1 min read";
  if (minutes === 1) return "1 min read";
  return `${minutes} min read`;
};

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Calculate reading time when post changes
  const readingTime = useMemo(() => {
    if (!post?.body) return { minutes: 0, text: "0 min read" };

    const minutes = calculateReadingTime(post.body);
    return {
      minutes,
      text: formatReadingTime(minutes),
    };
  }, [post?.body]);

  // Rich text rendering options
  const richTextOptions = {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong className="font-semibold">{text}</strong>,
      [MARKS.ITALIC]: (text) => <em className="italic">{text}</em>,
      [MARKS.UNDERLINE]: (text) => <u className="underline">{text}</u>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="mb-4 sm:mb-6 leading-relaxed text-gray-700">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 mt-8 sm:mt-12 cinzel">
          {children}
        </h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 mt-6 sm:mt-10 cinzel">
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 mt-5 sm:mt-8 bellefair">
          {children}
        </h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 mt-4 sm:mt-6 cinzel">
          {children}
        </h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 className="text-sm sm:text-base font-bold text-gray-900 mb-2 mt-3 sm:mt-4 cinzel">
          {children}
        </h5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h6 className="text-sm font-bold text-gray-900 mb-2 mt-3 cinzel">
          {children}
        </h6>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="mb-4 sm:mb-6 space-y-2 pl-4 sm:pl-6 list-disc bellefair">
          {children}
        </ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="mb-4 sm:mb-6 space-y-2 pl-4 sm:pl-6 list-decimal bellefair">
          {children}
        </ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="text-gray-700 leading-relaxed">{children}</li>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className="border-l-4 border-amber-400 pl-4 sm:pl-6 py-3 sm:py-4 mb-4 sm:mb-6 italic text-gray-700 bg-gray-50 rounded-r-lg bellefair">
          {children}
        </blockquote>
      ),
      [BLOCKS.HR]: () => <hr className="my-8 sm:my-12 border-gray-200" />,
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        return (
          <div className="my-4 p-4 bg-gray-50 rounded-lg">Embedded content</div>
        );
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, description, file } = node.data.target.fields;
        return (
          <div className="my-6 sm:my-8">
            <img
              src={file.url}
              alt={description || title}
              className="w-full h-auto rounded-lg shadow-sm"
            />
            {description && (
              <p className="text-sm text-gray-600 mt-2 text-center italic">
                {description}
              </p>
            )}
          </div>
        );
      },
    },
  };

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
    return <BlogPostSkeleton />;
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
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-24 sm:pt-8 pb-4 sm:pb-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
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
            <div className="text-base sm:text-lg leading-relaxed text-gray-700">
              {typeof post.body === "string" ? (
                <p className="first-letter:text-4xl sm:first-letter:text-5xl md:first-letter:text-6xl first-letter:font-bold first-letter:text-gray-900 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
                  {post.body}
                </p>
              ) : post.body && post.body.nodeType === "document" ? (
                <div className="rich-text-content">
                  {documentToReactComponents(post.body, richTextOptions)}
                </div>
              ) : post.body && post.body.content ? (
                post.body.content.map((content, index) => {
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
              ) : (
                <p className="text-gray-500 italic">No content available.</p>
              )}
            </div>
          </div>

          {/* Author Section */}
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
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
                  <span>{readingTime.text}</span>
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
