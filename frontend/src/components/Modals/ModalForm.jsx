import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

export default function ModalForm({
  isOpen,
  onClose,
  title,
  description,
  children,
  showDefaultActions = true,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          static
          open={isOpen}
          onClose={onClose}
          className="relative z-50"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/10"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel
              as={motion.div}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md  bg-white p-8 shadow-lg space-y-6"
            >
              <DialogTitle className="text-xl font-semibold text-gray-800">
                {title}
              </DialogTitle>

              {description && (
                <Description className="text-sm text-gray-500">
                  {description}
                </Description>
              )}

              {children}

              {/* Default Actions (only if not disabled) */}
              {showDefaultActions && (
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-sm rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm rounded-lg bg-green-600 text-white hover:bg-green-700"
                  >
                    Submit
                  </button>
                </div>
              )}
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
