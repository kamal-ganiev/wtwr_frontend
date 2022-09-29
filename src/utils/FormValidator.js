export default class FormValidator {
  constructor(validationSettings, form) {
    this._settings = validationSettings;
    this._form = form;
    this._inputList = Array.from(
      this._form.querySelectorAll(this._settings.inputSelector)
    );
    this._buttonElement = this._form.querySelector(
      this._settings.submitButtonSelector
    );
  }

  _showValidationMessage(inputElement, formElement, errorElement) {
    const errorMessage = formElement.querySelector(`.${inputElement.id}-error`);
    const errorInputTitle = formElement.querySelector(`.${inputElement.id}`);
    const errorInput = formElement.querySelector(`#${inputElement.id}`);
    errorInputTitle.style.color = "red";
    errorInput.style.color = "red";
    errorMessage.textContent = `(${errorElement})`;
    errorMessage.classList.add(this._settings.errorClass);
    inputElement.classList.add(this._settings.inputErrorClass);
  }

  _hideValidationMessage(inputElement, formElement) {
    const errorMessage = formElement.querySelector(`.${inputElement.id}-error`);
    const errorInputTitle = formElement.querySelector(`.${inputElement.id}`);
    const errorInput = formElement.querySelector(`#${inputElement.id}`);
    errorInputTitle.style.color = "black";
    errorInput.style.color = "black";
    errorMessage.textContent = "";
    errorMessage.classList.remove(this._settings.errorClass);
    inputElement.classList.remove(this._settings.inputErrorClass);
  }

  _isValid(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showValidationMessage(
        inputElement,
        formElement,
        inputElement.validationMessage,
        this._settings
      );
    } else {
      this._hideValidationMessage(inputElement, formElement);
    }
  }

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _hasValid() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(this._settings.inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  _setEventListeners() {
    this.toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(this._form, inputElement, this._settings);
        this.toggleButtonState();
      });
    });
  }

  resetValidation() {
    this.toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideValidationMessage(inputElement, this._form);
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }
}
