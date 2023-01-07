import React, { useEffect, useState } from "react";
import ModalWithForm from "./ModalWithForm";

function LoginModal({ isOpen, onClose, redirectToRegModal, loginHandler }) {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  useEffect(() => {
    setEmail("");
    setPass("");
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    loginHandler(email, password);
  }

  return (
    <ModalWithForm
      title="Log in"
      id="Login"
      buttonText="Log in"
      redirectButton="or Register"
      showRedirectButton={true}
      name="login"
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={(e) => {
        handleSubmit(e);
      }}
      redirectFunction={redirectToRegModal}
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
          value={email}
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
          value={password}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
