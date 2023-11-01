import React from "react";
import PropTypes from "prop-types";

export const Text = ({ value }) => {
	return <p>{value}</p>;
};

Text.propTypes = {
	value: PropTypes.number,
};
