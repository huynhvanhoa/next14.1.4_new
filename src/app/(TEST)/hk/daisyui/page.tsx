"use client";

import React, { useState } from "react";

export default function DaisyUI() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleEscKey = (e: any) => {
    if (e.key === "Escape" && isOpen) {
      closeModal();
    }
  };

  // Lắng nghe sự kiện nhấn phím Esc để đóng modal
  React.useEffect(() => {
    window.addEventListener("keydown", handleEscKey);

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen]);

  return (
    <>
      <div>
        <button className="btn btn-wide">Wide Button</button>
        <button className="btn">Button</button>
        <button className="btn btn-group-horizontal">
          group-horizontal Button
        </button>
        <button className="btn btn-group-vertical">
          group-vertical Button
        </button>
        <button className="btn btn-block">Secondary Button</button>
        <button className="btn btn-primary">Primary Button</button>
        <button className="btn btn-secondary">Secondary Button</button>
        <button className="btn btn-warning">Warning Button</button>
        <button className="btn btn-error">Error Button</button>
        <button className="btn btn-success btn-sm">Success Button</button>
        <button className="btn btn-info btn-lg">Info Button</button>
        <button className="btn btn-circle">C</button>
        <button className="btn btn-neutral">N</button>
        <button className="btn btn-accent">A</button>
        <button className="btn btn-ghost">G</button>
        <button className="btn btn-link">L</button>
        <button className="btn btn-outline">O</button>
        <button className="btn btn-active">A</button>
        <div className="card shadow-lg p-6 m-5 w-[500px] h-20 text-gray-100">
          <p>This is a card.</p>
        </div>
        <div className="alert alert-success w-max">
          Alert : Success! Thông báo thành công.
        </div>
        <div className="alert alert-danger w-max">
          Alert : Danger! Thông báo lỗi.
        </div>
        <input
          className="input"
          type="text"
          placeholder="Input Type something..."
        />
        <input type="checkbox" />
        <input type="radio" />
        <div className="navbar gap-5">
          <a href="#" className="navbar-item">
            Home
          </a>
          <a href="#" className="navbar-item">
            About
          </a>
        </div>

        <div className="dropdown">
          <button className="btn">Dropdown</button>
          <div className="dropdown-menu">
            <a href="#" className="dropdown-item">
              Item 1
            </a>
            <a href="#" className="dropdown-item">
              Item 2
            </a>
          </div>
        </div>
        <div className="tabs gap-5">
          <div className="tab-item">Tab 1</div>
          <div className="tab-item">Tab 2</div>
        </div>
        <span className="tooltip" data-tooltip="This is a tooltip">
          Hover me
        </span>
        <span className="badge">New</span>
      </div>

      <div>
        <button onClick={openModal}>Open Modal</button>
        {isOpen && (
          <div className="modal">
            <div className="modal-open" onClick={closeModal}></div>
            <div className="modal-container">
              <div className="modal-content">
                <h2 className="text-lg font-semibold">Modal Title</h2>
                <p>This is the content of the modal.</p>
                <button className="btn btn-primary" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
