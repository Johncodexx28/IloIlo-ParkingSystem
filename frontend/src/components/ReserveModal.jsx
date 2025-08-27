import React, { useState } from "react";
import Modal from "react-modal";
import { MapPin, X } from "lucide-react";

Modal.setAppElement("#root"); // accessibility

const ReserveModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Reserve Parking Spot"
        className="bg-white p-6 rounded-lg max-w-md mx-auto mt-20 shadow-lg relative"
        overlayClassName="fixed inset-0 bg-transparent flex items-start justify-center"
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={() => setModalIsOpen(false)}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <MapPin className="w-5 h-5 mr-2" />
          Reserve Your Spot
        </h2>
        <p className="mb-4 text-gray-600">
          Fill in your vehicle details to reserve a parking spot.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Vehicle Plate Number"
            className="input input-bordered w-full"
          />
          <select className="select select-bordered w-full">
            <option disabled selected>
              Select Vehicle Type
            </option>
            <option>Motorcycle</option>
            <option>4-Wheel Car</option>
            <option>Bicycle</option>
            <option>6-Wheel or Above</option>
          </select>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setModalIsOpen(false)}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Reserve
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ReserveModal;
