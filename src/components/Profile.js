import SideBar from "./SideBar";

function Profile({
  children,
  setIsLoggedIn,
  setIsModalOpen,
  setCurrentUser,
  onError,
  setOnError,
}) {
  return (
    <section className="profile">
      <SideBar
        setIsLoggedIn={setIsLoggedIn}
        setIsModalOpen={setIsModalOpen}
        setCurrentUser={setCurrentUser}
        onError={onError}
        setOnError={setOnError}
      />
      {children}
    </section>
  );
}

export default Profile;
