import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <ul>
        {
          props.nav.map(x => {
            return <li><a>{x}</a></li>
          })
        }
      </ul>
    </div>
  );
};

export default Navbar;
