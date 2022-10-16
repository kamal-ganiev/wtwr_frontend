import "../blocks/confirmation.css";

function ConfirmationModal({ name, isOpen, onClose, card, handleCardDelete }) {
  return (
    <div
      className={`modal modal_type_${name} ${isOpen && "modal_opened"}`}
      onClick={() => {
        onClose();
      }}
    >
      <div
        className="confirmation"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p className="confirmation__title">
          Are you sure you want to delete this item? This action is
          irreversible.
        </p>
        <button
          className="confirmation__accept-button"
          onClick={() => {
            handleCardDelete(card.id);
            card.card.remove();
            onClose();
          }}
        >
          Yes, delete item
        </button>
        <button
          className="confirmation__deny-button"
          onClick={() => {
            onClose();
          }}
        >
          Cancel
        </button>
        <button
          className="confirmation__close-button"
          type="button"
          onClick={() => {
            onClose();
          }}
        />
      </div>
    </div>
  );
}

export default ConfirmationModal;
