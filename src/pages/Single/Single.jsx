import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { posts } from "../../api/api";
import { Card } from "../../ui/Card";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

export const Single = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const dispatch = useDispatch();
	const { single } = useSelector((state) => state);
	const { language } = useSelector(state => state)
	const singleTitle = useSelector(state => state.info[language].singleCart)
	const back = useSelector(state => state.info[language].back)
	const buy = useSelector(state => state.info[language].buy)
	const cart = useSelector(state => state.info[language].cart)

	async function fetchData() {
		try {
			const response = await posts.getSingle(id);
			const result = await response.data;
			if (result) {
				console.log(result);
				dispatch({ type: "Single", payload: result });
			}
		} catch (e) {
			console.log(e);
		}
	}

	useEffect(() => {
		fetchData();
		console.log(single);
	}, []);

	return (
		<>
		<Header/>
			<div className="my-5">
				<div className="flex justify-between items-center bg-white rounded-2xl py-2 px-5">
					<h1 className="text-[20px] md:text-[40px] text-left text-gray-800">{singleTitle}</h1>

					<button
						onClick={() => navigate(-1)}
						className="bg-cyan-500 text-white py-2 px-3 rounded "
					>
						{back}
					</button>
				</div>
				<div className="flex flex-wrap xl:flex-row justify-around gap-y-10 my-[100px]">
					<Card item={single} key={single.id} />
					<div className="more-info flex flex-col  gap-3 items-start  h-[520px] w-[400px] p-6 bg-white border  rounded-lg shadow  dark:hover:bg-gray-100">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
							{single ? single.title : "Full title of item"}
						</h5>
						<p>
							<strong>Category: </strong>
							{single ? single.category : "Category of item"}
						</p>
						<p>
							<strong>Sold: </strong>
							{single ? single?.rating?.count : "Number of sales"}
						</p>
						<p class="font-normal text-gray-700 dark:text-gray-400">
							{single ? single.description : "Full description of item"}
						</p>
					</div>

					<div className="flex flex-col ">
						<div className="relative overflow-hidden bg-cover bg-no-repeat w-[400px] md:w-[500px] h-[450px] 2xl:w-[750px] bg-white shadow-lg py-3 px-5 rounded-lg transition duration-300 ease-in-out hover:scale-90g ">
							<div className="flex items-center mb-3">
								<i class="bx bx-current-location"></i>
								<h5 className="location-adress font-bold">
									Аксай-3а, 62ф, Алматы, Казахстан
								</h5>
							</div>
							<img
								className=" w-100 transition duration-300 ease-in-out hover:scale-95"
								src="https://i.stack.imgur.com/HILmr.png"
								alt="lOCATION"
							/>
						</div>

						<div className="flex gap-10 mt-5">
							<button className="bg-black text-white px-10 py-3 rounded-lg">
								<Link to="/purchase">{buy}</Link>
							</button>
							<button
								onClick={() => {
									dispatch({ type: "Order", payload: single });
								}}
								className="bg-black text-white px-10 py-3 rounded-lg"
							>
								{cart}
							</button>
						</div>
					</div>
				</div>
			</div>
			<Footer/>
		</>
	);
};
