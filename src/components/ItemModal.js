import React from "react";
import "../blocks/item-modal.css";
import "../blocks/modal.css";
import CurrentUserContext from "../contexts/CurrentUserContext";
import Modal from "./Modal";

function ItemModal({
  name,
  isOpen,
  onClose,
  onRemove,
  data,
  handleRemove,
  setRemovingCard,
}) {
  const user = React.useContext(CurrentUserContext);
  const isOwn = data.owner && data.owner === user._id;

  return (
    <Modal
      name={name}
      isOpen={isOpen}
      onClose={onClose}
      showTitle={false}
      containerClass="item-modal"
      closeBtnClass="item-modal__close-button"
    >
      <div
        className="item-modal__image"
        style={{
          backgroundImage: `url('${data.link}')`,
        }}
      ></div>
      <div className="item-modal__info">
        <div className="item-modal__description">
          <p className="item-modal__title">{data.name}</p>
          <p className="item-modal__weather">Weather: {data.weather}</p>
        </div>
        <button
          className={`item-modal__remove-button ${
            isOwn
              ? `item-modal__remove-button_visible`
              : `item-modal__remove-button_hidden`
          }`}
          onClick={() => {
            handleRemove();
            onRemove();
            setRemovingCard({
              id: data.id,
              card: data.card,
            });
          }}
        >
          Delete item
        </button>
      </div>
    </Modal>
  );
}

export default ItemModal;
