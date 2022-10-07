import "../blocks/item-modal.css";
import "../blocks/modal.css";

function ItemModal(props) {
  {
    props.isOpen && document.addEventListener("keydown", props.handleEscClose);
  }
  return (
    <div
      className={`modal modal_type_${props.name} ${
        props.isOpen && "modal_opened"
      }`}
      onClick={() => {
        props.onClose();
        document.removeEventListener("keydown", props.handleEscClose);
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
        <p className="item-modal__title">{props.data.name}</p>
        <p className="item-modal__description">Weather: {props.data.weather}</p>
        <button
          className="item-modal__close-button"
          type="button"
          onClick={() => {
            props.onClose();
            document.removeEventListener("keydown", props.handleEscClose);
          }}
        ></button>
      </div>
    </div>
  );
}

export default ItemModal;
