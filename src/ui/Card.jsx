import React from "react";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";

export const Card = ({ item }) => {
	const truncateText = (text, maxLength) => {
		return text.length > maxLength
			? text.substring(0, maxLength) + "..."
			: text;
	};

	const dispatch = useDispatch();
	const [isLiked, setIsLiked] = useState(false);
	return (
		<li
			key={item.id}
			className="
			relative max-w-xs overflow-hidden bg-cover bg-no-repeat
			card-wrapper h-[520px] w-[350px] bg-white shadow-lg p-4 rounded-lg transition duration-300 ease-in-out hover:scale-90g"
		>
			<button
				className="bg-none"
				onClick={() => {
					setIsLiked(!isLiked);
					dispatch({ type: "Liked", payload: item });
				}}
			>
				{isLiked ? (
					<i class="bx bxs-heart text-[30px]"></i>
				) : (
					<i className="bx bx-heart text-[30px]"></i>
				)}
			</button>
			<Link to={`/products/${item.id}`} className="flex flex-col gap-10">
				<img
					className=" mx-auto h-[250px]
				transition duration-300 ease-in-out hover:scale-95"
					src={item?.image}
					alt={item?.category}
				/>
				<div className="card-body flex  gap-6">
					<p className=" text-ellipsis overflow-hidden item">
						{truncateText(item?.title ? item.title : "Title", 50)}
					</p>
					<span className="text-green-700">
						{item.price ? item.price + "$" : "Price$"}
					</span>
				</div>
				<div className="rate flex text-start">
					<i class="bx bxs-star text-yellow-400"></i>
					<span>{item?.rating?.rate ? item.rating.rate : "rating"}</span>
				</div>
			</Link>
		</li>
	);
};
