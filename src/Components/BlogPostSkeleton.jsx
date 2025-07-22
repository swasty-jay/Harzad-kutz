const BlogPostSkeleton = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 animate-pulse">
      <div className="h-48 bg-gray-200"></div>
      <div className="p-6">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-4">
            <div className="h-4 bg-gray-200 rounded w-24"></div>
            <div className="h-4 bg-gray-200 rounded w-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostSkeleton;
