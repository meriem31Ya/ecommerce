"use client";
import Header from "@/components/Header";
import { ContextCart } from "@/context/contextCart";
import { cartType } from "@/utils/getprooducts";
import { useState } from "react";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [cart, setcart] = useState<cartType[]>([]);

	return (
		<div>
			<ContextCart.Provider value={{ cart, setcart }}>
				<Header />
				{children}
			</ContextCart.Provider>
		</div>
	);
}
