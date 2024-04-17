"use client";

import React, { useState } from "react";

const MyModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Escape" && isOpen) {
      closeModal();
    }
  };

  return (
    <div>
      <button onClick={openModal} className="btn btn-primary">
        Open Modal
      </button>

      {isOpen && (
        <div className="modal opacity-100">
          <div className="modal-open" onClick={closeModal}></div>
          <div className="modal-container">
            <div className="modal-content">
              <h2 className="text-lg font-semibold">Modal Title</h2>
              <p>This is the content of the modal.</p>
              <button
                onClick={closeModal}
                className="btn btn-primary cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyModal;
