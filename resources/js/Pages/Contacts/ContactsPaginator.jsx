import React from 'react';

const Paginator = ({ contacts }) => {
    return (
        <div className="mt-4 flex justify-between">
            {/* Previous Button */}
            <button
                disabled={!contacts.links.prev}
                onClick={() => contacts.links.prev && visit(contacts.links.prev)}
                className={`px-3 py-1 text-sm font-medium rounded-md focus:outline-none ${contacts.links.prev ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-600'}`}
            >
                &laquo; Previous
            </button>

            {/* Page Numbers */}
            <div className="flex">
                {Object.entries(contacts.links.pages).map(([pageNumber, url]) => (
                    <button
                        key={pageNumber}
                        onClick={() => visit(url)}
                        className={`px-3 py-1 ml-2 text-sm font-medium rounded-md focus:outline-none ${contacts.current_page == pageNumber ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-600'}`}
                    >
                        {pageNumber}
                    </button>
                ))}
            </div>

            {/* Next Button */}
            <button
                disabled={!contacts.links.next}
                onClick={() => contacts.links.next && visit(contacts.links.next)}
                className={`px-3 py-1 text-sm font-medium rounded-md focus:outline-none ${contacts.links.next ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-600'}`}
            >
                Next &raquo;
            </button>
        </div>
    );
};

export default Paginator;
