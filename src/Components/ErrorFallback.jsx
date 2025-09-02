import { motion } from "framer-motion";
// import PropTypes from "prop-types";

export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[50vh] w-full flex items-center justify-center p-4 sm:p-6"
    >
      <div className="max-w-md w-full mx-auto text-center">
        {/* Error Icon */}
        <div className="mb-6">
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="w-16 h-16 mx-auto bg-red-50 rounded-full flex items-center justify-center"
          >
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </motion.div>
        </div>

        {/* Error Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="space-y-3"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 cinzel">
            Something went wrong
          </h2>
          <p className="text-sm sm:text-base text-gray-600 bellefair">
            {error?.message ||
              "An unexpected error occurred. Please try again."}
          </p>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6"
        >
          <button
            onClick={resetErrorBoundary}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-200 bellefair"
          >
            Try again
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ErrorFallback.propTypes = {
//   error: PropTypes.shape({
//     message: PropTypes.string,
//   }),
//   resetErrorBoundary: PropTypes.func.isRequired,
// };
