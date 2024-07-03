import { ReducerCartType, productType } from "@/utils/getprooducts";
import { createContext } from "react";

export const ContextCart = createContext<ReducerCartType>({
	cart: [],
	setcart: () => {},
});

