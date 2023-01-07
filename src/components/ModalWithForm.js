import "../blocks/modal.css";
import "../blocks/form.css";
import Modal from "./Modal";

function ModalWithForm({
  onClose,
  isOpen,
  children,
  name,
  title,
  handleSubmit,
  showRedirectButton,
  redirectButton,
  redirectFunction,
  buttonText,
}) {
  return (
    <Modal
      onClose={onClose}
      name={name}
      title={title}
      isOpen={isOpen}
      showTitle={true}
      containerClass="modal__content modal__container"
    >
      <form
        className="form modal__form"
        name={`${name}`}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        {children}
        <div className="form__button-container modal__button-container modal__login-button-container">
          <button
            className="form__button modal__button modal-login-button"
            type="submit"
          >
            {buttonText}
          </button>
          <button
            className="modal__login-register-button"
            style={
              showRedirectButton ? { display: "block" } : { display: "none" }
            }
            onClick={redirectFunction}
            type="button"
          >
            {redirectButton ? redirectButton : ""}
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default ModalWithForm;
