import "../blocks/modal.css";
import "../blocks/form.css";

function ModalWithForm(props) {
  const radioList = document.querySelectorAll(".form__radio");

  function isChecked() {
    radioList.forEach((radio) => {
      if (radio.checked) {
        radio.closest("li").style.opacity = 1;
      } else {
        radio.closest("li").style.opacity = 0.5;
      }
    });
  }

  function handleModalClose(evt) {
    evt.target
      .closest(`.modal_type_${props.name}`)
      .classList.remove("modal_opened");
  }

  return (
    <div className={`modal modal_type_${props.name}`}>
      <div className="modal__content modal__container">
        <h3 className="modal__title">{props.title}</h3>
        <form className="form modal__form" name={`${props.name}`} noValidate>
          <label className="form__field modal__label">
            Name
            <input
              className="form__input modal__field"
              id="name-input"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </label>
          <label className="form__field modal__label">
            Image
            <input
              className="form__input modal__field"
              id="link-input"
              name="URL"
              placeholder="Image URL"
              type="url"
              required
            />
          </label>
          <div className="modal__radio">
            <h4 className="modal__radio-title radio__title">
              Select the weather type:
            </h4>
            <ul className="form__radio-list">
              <li className="form__radio-element">
                <label className="form__radio-label modal__label">
                  <input
                    className="form__radio"
                    type="radio"
                    id="hot"
                    value="hot"
                    name="weather"
                    onChange={isChecked}
                  ></input>
                  <span className="form__checkmark"></span>
                </label>
                <p className="form__radio-text">Hot</p>
              </li>
              <li className="form__radio-element">
                <label className="form__radio-label modal__label">
                  <input
                    className="form__radio"
                    type="radio"
                    id="warm"
                    value="warm"
                    name="weather"
                    onChange={isChecked}
                  ></input>
                  <span className="form__checkmark"></span>
                </label>
                <p className="form__radio-text">Warm</p>
              </li>
              <li className="form__radio-element">
                <label className="form__radio-label modal__label">
                  <input
                    className="form__radio"
                    type="radio"
                    id="cold"
                    value="cold"
                    name="weather"
                    onChange={isChecked}
                  ></input>
                  <span className="form__checkmark"></span>
                </label>
                <p className="form__radio-text">Cold</p>
              </li>
            </ul>
          </div>
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
          onClick={handleModalClose}
        ></button>
      </div>
    </div>
  );
}

function handleModalOpen(name) {
  document.querySelector(`.modal_type_${name}`).classList.add("modal_opened");
}

function test() {
  console.log("hello");
}

export default ModalWithForm;
export { handleModalOpen, test };
