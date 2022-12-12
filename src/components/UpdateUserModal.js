import { useState } from "react";
import ModalWithForm from "./ModalWithForm";

function UpdateUserModal({
  isModalOpen,
  setIsModalOpen,
  handleEscClose,
  updateUser,
}) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    updateUser(name, avatar);
  }

  return (
    <ModalWithForm
      title="Change profile data"
      id="Update"
      name="update"
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
          Name* <span className="form__error-message name-input-error"></span>
        </p>
        <input
          className="form__input modal__field"
          id="name-input"
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
      </label>
      <label className="form__field modal__label">
        <p className="form__input-title link-input">
          Avatar
          <span className="form__error-message link-input-error"></span>
        </p>
        <input
          className="form__input modal__field"
          id="Avatar-input"
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
          className="form__button modal__button modal-update-button"
          type="submit"
        >
          Save changes
        </button>
      </div>
    </ModalWithForm>
  );
}

export default UpdateUserModal;
