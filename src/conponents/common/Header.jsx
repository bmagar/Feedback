import React from "react";
import Proptypes from "prop-types";
import styles from "./Header.module.css";

function Header({ text = "Default", textColor = "purple", bgColor = "white" }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <>
      <header>
        <div>
          <h1 className={styles.container}>{text}</h1>
        </div>
      </header>
    </>
  );
}

// Let's use these proptype to header component
Header.propTypes = {
  text: Proptypes.string.isRequired,
  textColor: Proptypes.string, //it will accept string and number
  bgColor: Proptypes.string,
};
// These code will tell that I can only pass the string value
export default Header;

// Restrict and only always pass the string
