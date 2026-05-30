import Profile from "../assets/Profile.png";
function Sidebar() {
  return (
    <aside className="sidebar">
      <img
        src={Profile}
        alt="Mao Sreypich"
        className="avatar"
      />

      <h2>Mao Sreypich</h2>
      <p>Web Developer</p>

      <hr />

      <div>
        <h4>Email</h4>
        <p>maosreypich771@gmail.com</p>

        <h4>Phone</h4>
        <p>+855 078230401</p>

        <h4>Birthday</h4>
        <p>August 16, 2006</p>

        <h4>Location</h4>
        <p>St271. SANGKAT STEOUNG MEAN CHEY.II KHAN MEAN CHEY, PNHOM PENH, CAMBODIA</p>
      </div>
    </aside>
  );
}

export default Sidebar;