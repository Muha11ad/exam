import React from "react";
import { useSelector } from "react-redux";

export const Intro = () => {
	const { language } = useSelector(state => state)
	const introMessage  = useSelector(state => state.info[language].intro)
	return (
		<div className="bg-gray-900 hidden md:flex  rounded-xl p-5  justify-around items-center">
			<h1 className="text-white md:text-[25px] xl:text-[45px] text-center w-[40%] ">
				{	
					introMessage
				}
			</h1>
			<img
				className="w-[400px] h-[300px]"
				src="https://www.powerreviews.com/wp-content/uploads/2022/07/wardrobe-22.png"
				alt="Wardrobe"
			/>
		</div>
	);
};

// Sizning ishonchli <br /> va xamyonbop <br /> online marketingiz