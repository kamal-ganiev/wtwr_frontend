import React, { useEffect, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import ModalWithForm from "./ModalWithForm";

function UpdateUserModal({ isOpen, onClose, updateUser, setOnError }) {
  const user = React.useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    updateUser(name, avatar);
  }

  useEffect(() => {
    setOnError(false);

    if (isOpen === true) {
      setName(user.name);
      setAvatar(user.avatar);
    } else {
      setName("");
      setAvatar("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Change profile data"
      id="Update"
      name="update"
      buttonText="Save changes"
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label className="form__field modal__label">
        <p className="form__input-title name-input">
          Name* <span className="form__error-message name-input-error"></span>
        </p>
        <input
          className="form__input modal__field"
          id="name-input update-name"
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
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
          id="avatar-input update-avatar"
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

export default UpdateUserModal;
