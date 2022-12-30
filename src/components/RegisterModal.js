import { useState } from "react";
import ModalWithForm from "./ModalWithForm";
import { auth } from "../utils/auth";

function RegisterModal({
  isModalOpen,
  setIsModalOpen,
  handleEscClose,
  redirectToLogModal,
  setIsLoggedIn,
}) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (password === passConfirm) {
      auth
        .register({ name, avatar, email, password })
        .then(() => {
          auth
            .login(email, password)
            .then((res) => {
              localStorage.setItem("jwt", res.token);
              setIsLoggedIn(true);
              window.location.reload();
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return console.log("Passwords should match!");
    }
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
          id="email-input registration-email"
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
          id="password-input registration-password"
          name="pass"
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
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
          id="name-input registration-name"
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
          id="url-input registration-url"
          name="avatar"
          placeholder="Avatar URL"
          type="url"
          onChange={(e) => {
            setAvatar(e.target.value);
          }}
        />
      </label>
      <div className="form__button-container modal__button-container modal__login-button-container">
        <button
          className="form__button modal__button modal-login-button"
          type="submit"
        >
          Sign Up
        </button>
        <button
          className="modal__login-register-button"
          onClick={() => {
            setIsModalOpen(false);
            redirectToLogModal(true);
          }}
          type="button"
        >
          or Log In
        </button>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
