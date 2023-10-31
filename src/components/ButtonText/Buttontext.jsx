import React from "react";
import PropTypes from "prop-types";

export const ButtonText = ({ value }) => {
  return <p>{value}</p>;
};

ButtonText.propTypes = {
  value: PropTypes.number,
};
