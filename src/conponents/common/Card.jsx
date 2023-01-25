import React from "react";
import styles from "./Card.module.css";

const Card = ({ children, bgColor = "red" }) => {
  return <div style={{ backgroundColor: bgColor }}>{children}</div>;
};

export default Card;

// These is function which mean can accept something and return something

// Line number 5 children contains jxs

// Reusuable component
