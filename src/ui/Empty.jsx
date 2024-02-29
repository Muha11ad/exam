import React from "react";
import { Link } from "react-router-dom";

export const Empty = ({ img, title, width,home }) => {
	return (
		<div className="my-10 flex flex-col items-center gap-10">
			<img style={{width: width}} src={img} alt={title} />
			<p className="text-[40px]">
				<strong>{title}</strong>
			</p>
			<Link to="/" className="bg-cyan-500 text-white py-2 px-3 rounded ">
				{home}
			</Link>
		</div>
	);
};
