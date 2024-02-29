import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Card } from "../../ui/Card";
import { Footer } from "../../components/Footer/Footer"
import { Empty } from "../../ui/Empty";
import baby from "../../assets/baby.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Liked = () => {
	const { language } = useSelector(state => state)
	const favtitle = useSelector(state => state.info[language].liked)
	const back = useSelector(state => state.info[language].back)
	const reset = useSelector(state => state.info[language].resLiked)
	const emptyTitle = useSelector(state => state.info[language].emptyTitle)
	const toHome = useSelector(state => state.info[language].toHome)
	const navigate = useNavigate();
	const { liked } = useSelector((state) => state);
	const notify = () => {
		toast.success("Successfuly deleted",{
			autoClose: 800
		});
	  };
	return (
		<>
		<Header/>
		<div className="my-10">
			<div className="flex justify-between items-center bg-white rounded-2xl py-2 px-5">
				<h1 className="text-[20px] md:text-[40px] text-left text-gray-800">{favtitle}</h1>
				<div>
					
				<button
					onClick={() => navigate(-1)}
					className="bg-cyan-500 text-white py-2 px-3 rounded "
					>
					{back}
				</button>
				<button
					onClick={() => {
						localStorage.removeItem("Liked")
						notify()
						setTimeout(()=>{
							window.location.reload()
							window.location.replace("/")
						},1200)
					}}
					className="bg-cyan-500 text-white py-2 px-3 rounded ml-5 "
					>
					{reset}
				</button>
				
			</div>
		</div>

		{
		liked.length === 0 ? <Empty img={baby} width="800px" title={emptyTitle} home={toHome}/> :
			<ul className="flex flex-wrap justify-around my-[70px] gap-y-5 ">
				{liked?.map((item) => {
					return <Card key={item.id} item={item} />;
				})}
			</ul>
			}
			<ToastContainer autoClose={800}/>
		</div>
		<Footer/>
	</>
	);
};
