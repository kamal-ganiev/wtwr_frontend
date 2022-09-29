import "../blocks/modal.css";
import "../blocks/form.css";

function ModalWithForm(props) {
  return (
    <div
      className={`modal modal_type_${props.name}`}
      onClick={props.onClose.handleOutsideClickClose}
    >
      <div className="modal__content modal__container">
        <h3 className="modal__title">{props.title}</h3>
        <form className="form modal__form" name={`${props.name}`} noValidate>
          {props.children}
          <button
            className="form__button modal__button modal-add-button"
            type="submit"
            disabled
          >
            {props.buttonText}
          </button>
        </form>
        <button
          className="modal__close-button"
          type="button"
          onClick={props.onClose.handleModalClose}
        ></button>
      </div>
    </div>
  );
}

export default ModalWithForm;
