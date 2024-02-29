import React from "react";
import { Card } from "../../ui/Card";
import {useSelector} from "react-redux"
import { Loading }  from "../../ui/Loading"

export const Section = ({data }) => {
	let {category} = useSelector(state=>state)
	let {loading} = useSelector(state=>state)

	if(loading){
		return <Loading/>
	}

	return (
		<section className="my-10">
			<h2 className="text-gray-800 text-[25px] font-bold text-left my-5 uppercase">
				{category? category :"All categories"}
			</h2>
			<ul className="flex items-center justify-around gap-x-2  flex-wrap gap-y-6">
				{ data?.map((item) => {
					return <Card  key={item.id} item={item} />
				})}
			</ul>
		</section>
	);
};
