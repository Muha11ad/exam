import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { useSelector } from "react-redux";

export const Purchase = () => {
	const { single } = useSelector((state) => state);


	return (
		<>
			<Header />
			<div className="my-10 flex gap-10">
				<div className="flex flex-col w-[500px] h-[600px] bg-white p-5 shadow-lg rounded-xl">
					<div className="title-body flex justify-between mb-5">
						<p className="font-bold text-[20px]">Kuryer yetkazib berish</p>
						<p className="font-bold text-green-600 text-[20px]">$168</p>
					</div>
					<img src="https://i.stack.imgur.com/HILmr.png" alt="lOCATION" />
					<select
						className="bg-gray-50 rounded-xl px-3 py-2  my-6"
						defaultValue="Toshkent"
					>
						<option selected>Shahar</option>
						<option value="toshkent">Toshkent</option>
					</select>
					<form action="#">
						<input
							className="bg-gray-50 px-3 py-2 rounded-xl w-full"
							type="text"
							placeholder="Tuman"
						/>
						<div className="my-6 flex justify-between">
							<input
								className="bg-gray-50 px-3 py-2 rounded-xl"
								type="text"
								placeholder="Kocha/Maxalla"
							/>
							<input
								className="bg-gray-50 px-3 py-2 rounded-xl"
								type="text"
								placeholder="Uy/Kvartira №"
							/>
						</div>
						<input
							className="bg-gray-50 px-3 py-2 rounded-xl w-full"
							type="text"
							placeholder="Qoshimcha joy nomi"
						/>
					</form>
				</div>
				<div className="pay flex flex-col gap-5">
					<div className="order-name w-[500px] flex flex-col gap-3 bg-white p-5 shadow-lg rounded-xl">
						<h5 className="text-[20px]">
							<strong>Sizning buyurtmangiz</strong>
						</h5>
						<p>
							<strong>Buyurtma nomi: </strong>
							{single.title}
						</p>
						<p>
							{" "}
							<strong>Tolash: </strong>
							{single.price} $
						</p>
						<p>
							<strong>Yetkazib berish:</strong>{" "}
							<span className="text-green-600">bepul</span>
						</p>
					</div>
					<div className="pay-method w-[500px] bg-white p-5 shadow-lg rounded-xl">
						<h5 className="text-[20px]">
							{" "}
							<strong>To'lov usullari</strong>
						</h5>
						<div className="flex gap-5 my-3 text-[25px]">
							<i class="bx bxl-visa"></i>
							<i class="bx bxl-mastercard"></i>
							<i class="bx bx-wallet"></i>
							<i class="bx bx-credit-card"></i>
						</div>
						<label htmlFor="#" className="flex items-center gap-3">
							<i class="bx bxs-discount text-[25px]"></i>
							<input
								className="bg-gray-50 px-3 py-2 rounded-xl w-full"
								type="text"
								placeholder="Promo-kod bormi?"
							/>
						</label>
					</div>
					<div className="phone-number w-[500px] bg-white p-5 shadow-lg rounded-xl">
						<h5 className="text-[20px]">
							{" "}
							<strong>Qabul qiluvchining raqami</strong>
						</h5>

						<input
							className="bg-gray-50 px-2 py-1 rounded-xl w-full my-5"
							type="tel"
							value="+998"
						/>
					</div>
					<button className="bg-gray-900 text-white rounded-2xl py-2 text-[20px]">
					
						Buyurtma berish
					</button>
				</div>
			</div>
			<Footer />
		</>
	);
};
