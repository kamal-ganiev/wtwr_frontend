import "../blocks/modal.css";
import "../blocks/form.css";

function ModalWithForm({
  isModalOpen,
  setIsModalOpen,
  children,
  name,
  title,
  buttonText,
  handleEscClose,
}) {
  return (
    <div
      className={`modal modal_type_${name} ${isModalOpen && "modal_opened"}`}
      onClick={() => {
        setIsModalOpen(false);
      }}
    >
      <div
        className="modal__content modal__container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h3 className="modal__title">{title}</h3>
        <form className="form modal__form" name={`${name}`} noValidate>
          {children}
          <button
            className="form__button modal__button modal-add-button"
            type="submit"
            disabled
          >
            {buttonText}
          </button>
        </form>
        <button
          className="modal__close-button"
          type="button"
          onClick={() => {
            setIsModalOpen(false);
          }}
        ></button>
      </div>
    </div>
  );
}

export default ModalWithForm;
