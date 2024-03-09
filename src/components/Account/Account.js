const Account = ({ name = "Carla" }) => {
  return (
    <div className="account d-flex">
      <div className="profile">
        <img src="account.png" />
      </div>
      <p>{name}</p>
      <div style={{ width: "90px" }}></div>
      <div className="cog-wheel">
        <img src="cogwheel.png" />
      </div>
    </div>
  );
};

export default Account;
