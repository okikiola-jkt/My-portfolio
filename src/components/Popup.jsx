import React from 'react';

const Popup = ({ onClose }) => {
  const handleClose = () => {
    onClose();
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 bg-gray-900">
      <div className="bg-white rounded-lg p-6">
        <p className="text-center text-lg font-semibold mb-4">Message sent successfully!</p>
        <button
          className="block w-full text-center bg-[#0a192f] text-white py-2 rounded-lg hover:bg-blue-800"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
