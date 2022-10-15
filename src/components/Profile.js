import SideBar from "./SideBar";

function Profile({ children }) {
  return (
    <section className="profile">
      <SideBar />
      {children}
    </section>
  );
}

export default Profile;
