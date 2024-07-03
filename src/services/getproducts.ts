import axios from "axios";

const axiosCreate = axios.create({
	baseURL: "https://fakestoreapi.com/",
	headers: {
		"Content-Type": "application/json",
	},
});

export const getAllProducts = axiosCreate.get("products");
export const getOneproduct = (id: number) => axiosCreate.get(`/products/${id}`);
