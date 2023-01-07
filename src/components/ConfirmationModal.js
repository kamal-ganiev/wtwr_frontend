import "../blocks/confirmation.css";
import Modal from "./Modal";

function ConfirmationModal({ name, isOpen, onClose, card, handleCardDelete }) {
  return (
    <Modal
      name={name}
      isOpen={isOpen}
      onClose={onClose}
      containerClass="confirmation"
    >
      <p className="confirmation__title">
        Are you sure you want to delete this item? This action is irreversible.
      </p>
      <button
        className="confirmation__accept-button"
        onClick={() => {
          handleCardDelete(card.id);
        }}
      >
        Yes, delete item
      </button>
      <button className="confirmation__deny-button" onClick={onClose}>
        Cancel
      </button>
      <button
        className="confirmation__close-button"
        type="button"
        onClick={onClose}
      />
    </Modal>
  );
}

export default ConfirmationModal;
