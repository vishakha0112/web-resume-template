import React from 'react';

export const Navbar = () => {
  let navStyle={
    display: "flex",
    flexBasis: "4%",
    height: "100%",
    // border: "2px solid red",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#161716"
    
  }
    return (
      <div style={navStyle}>
<ul className="nav flex-column">
  <li className="nav-item text-success p-2">
    <i className="fas fa-user-alt"></i>
  </li>
  <li className="nav-item p-2">
    <i className="fas fa-phone-alt"></i>
  </li>
  <li className="nav-item p-2">
  <i className="far fa-edit"></i>
  </li>
  <li className="nav-item p-2">
  <i className="fas fa-briefcase"></i>
  </li>
  <li className="nav-item p-2">
  <i className="fas fa-glasses"></i>
  </li>
</ul>
</div>
    )
}
