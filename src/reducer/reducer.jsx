function toLocalStr(title, something) {
	return window.localStorage.setItem(title, JSON.stringify(something));
}

const initialState = {
	liked: JSON.parse(localStorage.getItem("Liked")) || [],
	data: [],
	setLocal: toLocalStr(),
	loading: true,
	categories: ["men's clothing", "jewelery", "electronics", "women's clothing"],
	languages: ["uzb", "rus", "en"],
	language: JSON.parse(localStorage.getItem("Language")) || "en",
	info: {
		uzb: {
			intro: "Sizning ishonchli va xamyonbop online marketingiz",
			liked: "Tanlanganlar",
			cart:"Savatcha",
			service:"Xizmat ko'rsatish shartlari", 
			emptyTitle: "Siz tovar tanlamadingiz",
			back:"Orqaga",
			resLiked: "Ochirish",
			toHome: "Uyga qaytish",
			emptyCart: "Savatchangiz bo'sh",
			buy: "Sotib olish",
			singleCart:"Yagonayu bir dona"

			},
		en: {
			intro: "Your reliable and affordable online marketing",
			liked: "Favourite ones",
			cart:"Shopping cart",
			service:"Terms of Service", 
			emptyTitle: "You have not selected a product",
			back:"Back",
			resLiked: "Reset",
			toHome: "Back Home",
			emptyCart: "Your shopping cart is empty",
			buy: "Purchase",
			singleCart:"Single item"

			
		},
		rus: {
			intro: "Ваш надежный и доступный интернет-маркетинг",
			liked: "Избранные",
			cart:"Корзинка",
			service:"Условия использования", 
			emptyTitle: "Вы не выбрали товар",
			back:"Назад",
			resLiked: "Очистить",
			toHome: "Назад домой",
			emptyCart: "Ваша корзина пуста",
			buy: "Купить",
			singleCart:"Индивидуально"
		},
	},
	category: "All",
	single: {},
	order: JSON.parse(localStorage.getItem("Order")) || [],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_DATA_SUCCESS":
			return {
				...state,
				loading: false,
				data: action.payload,
			};
		case "FETCH_DATA_ERROR":
			return { ...state, loading: false };
		case "category":
			return { ...state, category: action.payload };
		case "Liked":
			return {
				...state,
				setLocal: toLocalStr("Liked", [...state.liked, action.payload]),
				liked: JSON.parse(localStorage.getItem("Liked")),
			};
		case "Single":
			return {
				...state,
				single: action.payload,
			};
		case "Order":
			return {
				...state,
				setLocal: toLocalStr("Order", [...state.order, action.payload]),
				order: JSON.parse(localStorage.getItem("Order")),
			};
		case "language":
			return {
				...state,
				setLocal: toLocalStr("Language", action.payload),
				language: JSON.parse(localStorage.getItem("Language")),
			};
		default:
			return { ...state };
	}
};
