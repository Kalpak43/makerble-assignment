import { X } from "lucide-react";
import React from "react";

export default function Modal({
  children,
  hidden,
  closeModal,
}: {
  children: React.ReactNode;
  hidden: boolean;
  closeModal: () => void;
}) {
  return (
    !hidden && (
      <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md z-50 flex items-center justify-center">
        <div className="max-w-[400px] w-full p-4 relative">
          {children}

          <button className="btn absolute top-0 right-0 m-4" onClick={closeModal}>
            <X />
          </button>
        </div>
      </div>
    )
  );
}
