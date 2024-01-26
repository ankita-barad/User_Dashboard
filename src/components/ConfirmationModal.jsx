export const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  // If the modal is not open, do not render anything
  if (!isOpen) return null;

  return (
    // Modal backdrop
    <div className="fixed inset-0 z-50 flex items-center bg-black bg-opacity-60 justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative max-w-md mx-auto my-6 ">
        <div className="bg-white rounded-md shadow-lg p-6">
          <p className="text-lg font-semibold mb-4">
            Are you sure you want to delete this user?
          </p>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 px-4 py-2 mr-2 border border-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
