import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Card } from "../../ui/Card";
import { Empty } from "../../ui/Empty";
import shopCart from "../../assets/cart.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Order = () => {
	const navigate = useNavigate();
	const { order } = useSelector((state) => state);
	const notify = () => {
		toast.success("Successfuly deleted", {
			autoClose: 800,
		});
	};

	const { language } = useSelector(state => state)
	const cart = useSelector(state => state.info[language].cart)
	const back = useSelector(state => state.info[language].back)
	const reset = useSelector(state => state.info[language].resLiked)
	const emptyCart = useSelector(state => state.info[language].emptyCart)
	const toHome = useSelector(state => state.info[language].toHome)
	return (
		
		<>
			<Header />
			<div className="my-10">
				<div className="flex justify-around items-center bg-white px-5 py-2 rounded-2xl">
					<h1 className="text-[20px] md:text-[40px] text-left text-gray-800">{cart}</h1>
					<div>
						<button
							onClick={() => navigate(-1)}
							className="bg-cyan-500 text-white py-2 px-3 rounded "
						>
							{back}
						</button>
						<button
							onClick={() => {
								localStorage.removeItem("Order");
								notify();
								setTimeout(() => {
									window.location.reload();
									window.location.replace("/");
								}, 1200);
							}}
							className="bg-cyan-500 text-white py-2 px-3 rounded ml-5"
						>
							{reset}
						</button>
					</div>
				</div>
				{order.length === 0 ? (
					<Empty img={shopCart} width="410px" title={emptyCart} home={toHome} />
				) : (
					<ul className="flex flex-wrap  gap-y-5 justify-around my-[70px]">
						{order?.map((item) => {
							return <Card key={item.id} item={item} />;
						})}
					</ul>
				)}
				<ToastContainer autoClose={800} />
			</div>
			<Footer />
		</>
	);
};
