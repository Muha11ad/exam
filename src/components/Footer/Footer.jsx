import React from "react";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";


export const Footer = () => {
    const { language } = useSelector(state => state)
	const liked  = useSelector(state => state.info[language].liked)
	const cart  = useSelector(state => state.info[language].cart)
	const service  = useSelector(state => state.info[language].service)
	return (
        <footer className="py-5  px-5 lg:px-10 rounded-lg bg-white">
		<div className="flex flex-col md:flex-row items-center justify-between">
			<Link to="/" className="logo font-extrabold uppercase text-[30px]">
				fakestore
			</Link>
            <ul className="flex gap-5 lg:gap-10">
                <li>
                    <Link to="/liked" className="text-[20px]">
                        {liked}
                    </Link>
                </li>
                <li>
                    <Link to="/order" className="text-[20px]">
                    {cart}
                    </Link>
                </li>
            </ul>

            <Link to="/">
            {service}
            </Link>

            <ul className="flex gap-5">
            <li>
                    <Link to="/">
                    <i class='bx bxl-instagram text-[30px]'></i>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    <i class='bx bxl-facebook text-[30px]' ></i>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    <i class='bx bxl-telegram text-[30px]' ></i>
                    </Link>
                </li>
            </ul>
		</div>
        </footer>
	);
};
