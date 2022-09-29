function ItemModal(props) {
  return (
    <div
      className={`modal modal_type_${props.name}`}
      onClick={props.onClose.handleOutsideClickClose}
    >
      <div className="item-modal">
        <div
          className="item-modal__image"
          style={{
            backgroundImage: `url('${props.image}')`,
          }}
        ></div>
        <p className="item-modal__title">{props.title}</p>
        <p className="item-modal__description">Weather: {props.description}</p>
        <button
          className="item-modal__close-button"
          type="button"
          onClick={props.onClose.handleModalClose}
        ></button>
      </div>
    </div>
  );
}

export default ItemModal;