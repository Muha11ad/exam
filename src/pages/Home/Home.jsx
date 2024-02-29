import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components/Header/Header";
import { Intro } from "../../components/Intro/Intro";
import { Section } from "../../components/Section/Section";
import { posts } from "../../api/api";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
	let { category } = useSelector((state) => state);
	let { data } = useSelector((state) => state);
	const dispath = useDispatch();

	async function fetchData() {
		try {
			const response =
				category == "All"
					? await posts.getProducts()
					: await posts.getCategory(category);
			const result = await response.data;
			if (result) {
				
				setTimeout(() => {
					dispath({ type: "FETCH_DATA_SUCCESS", payload: result });
				}, 500);
			}
		} catch (e) {
			dispath({ type: "FETCH_DATA_ERROR", payload: e });
			console.log(e);
		}
	}

	useEffect(() => {
		fetchData();
	}, [category]);

	return (
		<>
			<Header />
			<Intro />
			<main>
				<Section data={data} />
			</main>
			<Footer />
		</>
	);
};
