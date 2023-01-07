import React, { useEffect, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import ModalWithForm from "./ModalWithForm";

function AddGarmentForm({ isOpen, onClose, addNewCard }) {
  /// Calling Current User Context \\\

  const user = React.useContext(CurrentUserContext);

  /// Setting Opacity of Checked and Non-checked Radio Buttons \\\

  const [hot, setHot] = useState(false);
  const [cold, setCold] = useState(false);
  const [warm, setWarm] = useState(false);

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const [hotChecked, setHotChecked] = useState(false);
  const [coldChecked, setColdChecked] = useState(false);
  const [warmChecked, setWarmChecked] = useState(false);

  const checked = {
    cold: {
      opacity: cold ? "1" : "0.5",
    },
    hot: {
      opacity: hot ? "1" : "0.5",
    },
    warm: {
      opacity: warm ? "1" : "0.5",
    },
  };

  function handleSubmit(e) {
    e.preventDefault();
    addNewCard({ name, imageUrl, weather, likes: [], owner: user._id });
    setWarm(false);
    setCold(false);
    setHot(false);
  }

  useEffect(() => {
    setWarm(false);
    setCold(false);
    setHot(false);

    setName("");
    setImageUrl("");

    setColdChecked(false);
    setWarmChecked(false);
    setHotChecked(false);
  }, [isOpen]);

  return (
    <ModalWithForm
      title="New garment"
      id="AddingGarment"
      buttonText="Add garment"
      name="add"
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label className="form__field modal__label">
        <p className="form__input-title name-input">
          Name <span className="form__error-message name-input-error"></span>
        </p>
        <input
          className="form__input modal__field"
          id="name-input card-name"
          type="text"
          name="name"
          placeholder="Name"
          minLength="2"
          maxLength="30"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          required
        />
      </label>
      <label className="form__field modal__label">
        <p className="form__input-title link-input">
          Image <span className="form__error-message link-input-error"></span>
        </p>
        <input
          className="form__input modal__field"
          id="link-input card-link"
          name="link"
          placeholder="Image URL"
          type="url"
          onChange={(e) => {
            setImageUrl(e.target.value);
          }}
          value={imageUrl}
          required
        />
      </label>
      <div className="modal__radio">
        <h4 className="modal__radio-title radio__title">
          Select the weather type:
        </h4>
        <ul className="form__radio-list">
          <li className="form__radio-element" style={checked.hot}>
            <label className="form__radio-label modal__label">
              <input
                className="form__radio"
                type="radio"
                id="hot"
                value="hot"
                name="weather"
                checked={hotChecked}
                onClick={(e) => {
                  setWeather(e.target.value);
                }}
                onChange={() => {
                  setHot(!hot);
                  setCold(false);
                  setWarm(false);

                  setColdChecked(false);
                  setWarmChecked(false);
                  setHotChecked(true);
                }}
                required
              />
              <span className="form__checkmark" />
            </label>
            <p className="form__radio-text">Hot</p>
          </li>
          <li className="form__radio-element" style={checked.warm}>
            <label className="form__radio-label modal__label">
              <input
                className="form__radio"
                type="radio"
                id="warm"
                value="warm"
                name="weather"
                checked={warmChecked}
                onClick={(e) => {
                  setWeather(e.target.value);
                }}
                onChange={() => {
                  setWarm(!warm);
                  setCold(false);
                  setHot(false);

                  setColdChecked(false);
                  setWarmChecked(true);
                  setHotChecked(false);
                }}
                required
              />
              <span className="form__checkmark" />
            </label>
            <p className="form__radio-text">Warm</p>
          </li>
          <li className="form__radio-element" style={checked.cold}>
            <label className="form__radio-label modal__label">
              <input
                className="form__radio"
                type="radio"
                id="cold"
                value="cold"
                name="weather"
                checked={coldChecked}
                onClick={(e) => {
                  setWeather(e.target.value);
                }}
                onChange={() => {
                  setCold(!cold);
                  setWarm(false);
                  setHot(false);

                  setColdChecked(true);
                  setWarmChecked(false);
                  setHotChecked(false);
                }}
                required
              />
              <span className="form__checkmark" />
            </label>
            <p className="form__radio-text">Cold</p>
          </li>
        </ul>
      </div>
    </ModalWithForm>
  );
}

export default AddGarmentForm;
