"use client";

import React, { useState } from "react";
import Modal from "@/myComponents/Modal";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Fancy Modal
      </Modal>
    </>
  );
}
