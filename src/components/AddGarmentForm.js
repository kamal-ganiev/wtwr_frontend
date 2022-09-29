function AddGarmentForm() {
  /// List of Radio Buttons \\\

  const radioList = document.querySelectorAll(".form__radio");

  /// Setting Opacity of Checked and Non-checked Radio Buttons \\\

  function isChecked() {
    radioList.forEach((radio) => {
      if (radio.checked) {
        radio.closest("li").style.opacity = 1;
      } else {
        radio.closest("li").style.opacity = 0.5;
      }
    });
  }

  return (
    <>
      <label className="form__field modal__label">
        <p className="form__input-title name-input">
          Name <span className="form__error-message name-input-error"></span>
        </p>
        <input
          className="form__input modal__field"
          id="name-input"
          type="text"
          name="name"
          placeholder="Name"
          minLength="2"
          maxLength="40"
          required
        />
      </label>
      <label className="form__field modal__label">
        <p className="form__input-title link-input">
          Image <span className="form__error-message link-input-error"></span>
        </p>
        <input
          className="form__input modal__field"
          id="link-input"
          name="link"
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
                required
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
                required
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
                required
              ></input>
              <span className="form__checkmark"></span>
            </label>
            <p className="form__radio-text">Cold</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default AddGarmentForm;
