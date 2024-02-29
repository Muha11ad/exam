import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Select } from "../../ui/select";

export const Header = () => {
	const categories = useSelector((state) => state.categories);
	let { liked } = useSelector((state) => state);
	let { order } = useSelector((state) => state);
	let { languages } = useSelector((state) => state);

	return (
		<>
			<header>
				<div className="my-5 flex items-center justify-between gap-5">
					<div className="flex gap-5">

					<Link to="/" className="logo font-extrabold uppercase text-[30px]">
						fakestore
					</Link>
					<Select type="All" data={categories} />
					<Select type="Language" data={languages} />
					</div>
					<div className="span flex gap-3 ">
						<Link to="/liked" className="relative">
							<i className="bx bx-heart text-[30px]"></i>
							<span
								className="bg-yellow-500 rounded-full px-[6px]
                            absolute text-[10px] start-[16px] bottom-[25px]
                            "
							>
								{liked.length}
							</span>
						</Link>

						<Link to="/order" className="relative">
							<i className="bx bx-cart-alt text-[30px]"></i>
							<span
								className="bg-yellow-500 rounded-full px-[6px]
                            absolute text-[10px] start-[16px] bottom-[25px]
                            "
							>
								{order.length}
							</span>
						</Link>
					</div>
				</div>
			</header>
		</>
	);
};
