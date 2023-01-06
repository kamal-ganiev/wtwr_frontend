import React, { useEffect, useState } from "react";
import ModalWithForm from "./ModalWithForm";

function LoginModal({
  isModalOpen,
  setIsModalOpen,
  handleEscClose,
  redirectToRegModal,
  loginHandler,
}) {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  useEffect(() => {
    setEmail("");
    setPass("");
  }, [isModalOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    loginHandler(email, password);
  }

  return (
    <ModalWithForm
      title="Log in"
      id="Login"
      buttonText="Log in"
      name="login"
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      handleEscClose={handleEscClose}
      handleSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label className="form__field modal__label">
        <p className="form__input-title name-input">
          Email <span className="form__error-message name-input-error"></span>
        </p>
        <input
          className="form__input modal__field"
          id="email-input login-email"
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
          Password
          <span className="form__error-message link-input-error"></span>
        </p>
        <input
          className="form__input modal__field"
          id="password-input login-password"
          name="pass"
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
          required
        />
      </label>
      <div className="form__button-container modal__button-container modal__login-button-container">
        <button
          className="form__button modal__button modal-login-button"
          type="submit"
        >
          Log in
        </button>
        <button
          className="modal__login-register-button"
          onClick={() => {
            setIsModalOpen(false);
            redirectToRegModal(true);
          }}
          type="button"
        >
          or Register
        </button>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
