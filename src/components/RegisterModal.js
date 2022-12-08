import { useState } from "react";
import ModalWithForm from "./ModalWithForm";

function RegisterModal({ isModalOpen, setIsModalOpen, handleEscClose }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passConfirm, setPassConfirm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    e.target.closest("form").reset();
  }

  return (
    <ModalWithForm
      title="Sign Up"
      id="Registration"
      buttonText="Next"
      name="registration"
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      handleEscClose={handleEscClose}
      handleSubmit={(e) => {
        handleSubmit(e);
        setIsModalOpen(false);
      }}
    >
      <label className="form__field modal__label">
        <p className="form__input-title name-input">
          Email* <span className="form__error-message name-input-error"></span>
        </p>
        <input
          className="form__input modal__field"
          id="email-input"
          type="email"
          name="name"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
      </label>
      <label className="form__field modal__label">
        <p className="form__input-title link-input">
          Password*
          <span className="form__error-message link-input-error"></span>
        </p>
        <input
          className="form__input modal__field"
          id="password-input"
          name="pass"
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
          required
        />
      </label>
      <label className="form__field modal__label">
        <p className="form__input-title link-input">
          Confirm password*
          <span className="form__error-message link-input-error"></span>
        </p>
        <input
          className="form__input modal__field"
          id="password-confirmation-input"
          name="passConfirm"
          placeholder="Confirm password"
          type="password"
          onChange={(e) => {
            setPassConfirm(e.target.value);
          }}
          required
        />
      </label>
      <label className="form__field modal__label">
        <p className="form__input-title link-input">
          Name
          <span className="form__error-message link-input-error"></span>
        </p>
        <input
          className="form__input modal__field"
          id="name-input"
          name="name"
          placeholder="Name"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <label className="form__field modal__label">
        <p className="form__input-title link-input">
          Avatar URL
          <span className="form__error-message link-input-error"></span>
        </p>
        <input
          className="form__input modal__field"
          id="url-input"
          name="avatar"
          placeholder="Avatar URL"
          type="url"
          onChange={(e) => {
            setLink(e.target.value);
          }}
        />
      </label>
      <div className="form__button-container modal__button-container modal__login-button-container">
        <button
          className="form__button modal__button modal-login-button"
          type="submit"
        >
          Log in
        </button>
        <button className="modal__login-register-button" type="button">
          or Register
        </button>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
