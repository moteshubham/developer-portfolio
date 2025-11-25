import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PaginationChallenge() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  // Sample data - in a real app, this would come from an API
  const allItems = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
    description: `This is the description for item number ${i + 1}. It contains some sample content to demonstrate pagination.`
  }));

  const totalPages = Math.ceil(allItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = allItems.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            to="/challenges"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            ← Back to Challenges
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Pagination Challenge</h1>
          <p className="text-gray-600">
            A reusable pagination component with page navigation, ellipsis handling, and responsive design.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-gray-200 mb-8">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Sample Data ({allItems.length} items)</h2>
            <div className="space-y-4">
              {currentItems.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Component */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <h3 className="text-lg font-semibold mb-4">Pagination Component</h3>
          
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing {startIndex + 1} to {Math.min(endIndex, allItems.length)} of {allItems.length} results
            </div>
            
            <div className="flex items-center space-x-1">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex items-center space-x-1">
                {getVisiblePages().map((page, index) => (
                  <React.Fragment key={index}>
                    {page === '...' ? (
                      <span className="px-3 py-2 text-sm text-gray-500">...</span>
                    ) : (
                      <button
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-2 text-sm font-medium rounded-md ${
                          currentPage === page
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="mt-8 bg-gray-900 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Code Example</h3>
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`// Pagination Component Usage
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 5;
const totalPages = Math.ceil(totalItems / itemsPerPage);

// Calculate visible items
const startIndex = (currentPage - 1) * itemsPerPage;
const currentItems = allItems.slice(startIndex, startIndex + itemsPerPage);

// Handle page changes
const handlePageChange = (page) => {
  if (page >= 1 && page <= totalPages) {
    setCurrentPage(page);
  }
};`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
