import { useDispatch } from "react-redux";

export const Select = ({ data, type }) => {

	const dispath = useDispatch()

	return (
		<select
			onChange={(e)=>
				{
					if(type === "All"){

						dispath({type:"category", payload: e.target.value })
					} else{
						
						dispath({type:"language", payload: e.target.value })
					}
					
				}}
			id="default"
			className=" bg-slate-50 text-[17px] py-1 px-2 focus:ring-1"
		>
			<option selected>{type? type : "Choose"}</option>
			{
                data?.map((item,index)=>{
                   return <option key={index} value={item}>{item}</option>
                })
            }
		</select>
	);
};
