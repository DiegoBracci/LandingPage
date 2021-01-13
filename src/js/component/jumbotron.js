import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export function Jumbotron(props) {
	let { title, description, buttonLabel, buttonURL } = props;
	return (
		<div className="jumbotron">
			<h1 className="display-4">{title}</h1>
			<p className="lead">{description}</p>
			<a
				className="btn btn-primary btn-lg"
				href={buttonURL}
				role="button">
				{buttonLabel}
			</a>
		</div>
	);
}

Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string
};
