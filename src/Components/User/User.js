import React from "react";
import Logo from "../Image/monitor.png";

function User() {
  return (
    <div className="User">
      <div className="Logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="Info">Sammy's Todo</div>
    </div>
  );
}

export default User;
