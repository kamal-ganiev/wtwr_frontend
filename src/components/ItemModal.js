import React from "react";
import "../blocks/item-modal.css";
import "../blocks/modal.css";
import CurrentUserContext from "../contexts/CurrentUserContext";

function ItemModal(props) {
  const user = React.useContext(CurrentUserContext);
  const isOwn = props.data.owner === user._id;

  return (
    <div
      className={`modal modal_type_${props.name} ${
        props.isOpen && "modal_opened"
      }`}
      onClick={() => {
        props.onClose();
      }}
    >
      <div
        className="item-modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className="item-modal__image"
          style={{
            backgroundImage: `url('${props.data.link}')`,
          }}
        ></div>
        <div className="item-modal__info">
          <div className="item-modal__description">
            <p className="item-modal__title">{props.data.name}</p>
            <p className="item-modal__weather">Weather: {props.data.weather}</p>
          </div>
          <button
            className={`item-modal__remove-button ${
              isOwn
                ? `item-modal__remove-button_visible`
                : `item-modal__remove-button_hidden`
            }`}
            onClick={() => {
              props.handleRemove(true);
              props.onClose();
              props.setRemovingCard({
                id: props.data.id,
                card: props.data.card,
              });
            }}
          >
            Delete item
          </button>
        </div>
        <button
          className="item-modal__close-button"
          type="button"
          onClick={() => {
            props.onClose();
          }}
        ></button>
      </div>
    </div>
  );
}

export default ItemModal;
