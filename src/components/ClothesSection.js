function ClothesSection({ children, openModal }) {
  return (
    <div className="profile__card-section">
      <div className="profile__card-title">
        <p className="profile__card-text">Your items</p>
        <button className="profile__card-button" onClick={openModal}>
          + Add new
        </button>
      </div>
      {children}
    </div>
  );
}

export default ClothesSection;
