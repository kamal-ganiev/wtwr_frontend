import { useEffect } from "react";

const Modal = ({
  isOpen,
  onClose,
  name,
  children,
  title,
  showTitle,
  containerClass,
  closeBtnClass,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal modal_type_${name} ${isOpen && "modal_opened"}`}
      onClick={handleOverlay}
    >
      <div
        className={containerClass}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {showTitle && <h3 className="modal__title">{title}</h3>}
        {children}
        <button
          className={`${closeBtnClass ? closeBtnClass : "modal__close-button"}`}
          type="button"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default Modal;
