import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export function GroupCard(props) {
	let { title, description, buttonLabel, buttonURL, imgUrl } = props;
	return (
		<div className="col-lg-3 col-md-6 mb-4">
			<div className="card">
				<img
					className="card-img-top"
					src={imgUrl}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{description}</p>
					<a href={buttonURL} className="btn btn-primary">
						{buttonLabel}
					</a>
				</div>
			</div>
		</div>
	);
}

GroupCard.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string,
	imgUrl: PropTypes.string
};
