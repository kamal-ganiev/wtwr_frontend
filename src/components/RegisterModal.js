import React, { useEffect, useState } from "react";
import ModalWithForm from "./ModalWithForm";

function RegisterModal({
  isOpen,
  onClose,
  registerHandler,
  redirectToLogModal,
  isLoading,
}) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");

  useEffect(() => {
    setEmail("");
    setName("");
    setAvatar("");
    setPassword("");
    setPassConfirm("");
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    if (password === passConfirm) {
      registerHandler({ name, avatar, email, password });
    } else {
      return console.log("Passwords should match!");
    }
  }

  return (
    <ModalWithForm
      title="Sign Up"
      id="Registration"
      buttonText={`${isLoading ? "Save..." : "Next"}`}
      redirectButton="or Log in"
      showRedirectButton={true}
      name="registration"
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={(e) => {
        handleSubmit(e);
      }}
      redirectFunction={redirectToLogModal}
    >
      <label className="form__field modal__label">
        <p className="form__input-title name-input">
          Email* <span className="form__error-message name-input-error"></span>
        </p>
        <input
          className="form__input modal__field"
          id="email-input registration-email"
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
          Password*
          <span className="form__error-message link-input-error"></span>
        </p>
        <input
          className="form__input modal__field"
          id="password-input registration-password"
          name="pass"
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
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
          value={passConfirm}
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
          id="name-input registration-name"
          name="name"
          placeholder="Name"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </label>
      <label className="form__field modal__label">
        <p className="form__input-title link-input">
          Avatar URL
          <span className="form__error-message link-input-error"></span>
        </p>
        <input
          className="form__input modal__field"
          id="url-input registration-url"
          name="avatar"
          placeholder="Avatar URL"
          type="url"
          onChange={(e) => {
            setAvatar(e.target.value);
          }}
          value={avatar}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
