import { useState } from "react";
import ModalWithForm from "./ModalWithForm";

function LoginModal(props) {
  function handleSubmit(e) {
    e.preventDefault();
    e.target.closest("form").reset();
  }

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <ModalWithForm
      title="Log in"
      id="Login"
      buttonText="Log in"
      name="login"
      isModalOpen={props.isModalOpen}
      setIsModalOpen={props.setIsModalOpen}
      handleEscClose={props.handleEscClose}
      handleSubmit={(e) => {
        handleSubmit(e);
        props.setIsModalOpen(false);
      }}
    >
      <label className="form__field modal__label">
        <p className="form__input-title name-input">
          Email <span className="form__error-message name-input-error"></span>
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
          Password
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

export default LoginModal;
