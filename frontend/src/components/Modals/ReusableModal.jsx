import Modal from "react-modal";
import { X } from "lucide-react";
import { motion } from "framer-motion";

Modal.setAppElement("#root");

const ReusableModal = ({ isOpen, onClose, title, icon: Icon, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={title}
      className="bg-transparent outline-none"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-transparent"
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-screen w-full bg-white bg-opacity-80 backdrop-filter backdrop-blur-xl rounded-lg shadow-2xl overflow-hidden"
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="p-8">
          {title && (
            <h2 className="text-3xl mb-6 text-center text-gray-600 flex items-center justify-center">
              {Icon && <Icon className="w-6 h-6 mr-2" />}
              {title}
            </h2>
          )}

          {/* Content (form or anything you pass as children) */}
          {children}
        </div>
      </motion.div>
    </Modal>
  );
};

export default ReusableModal;
