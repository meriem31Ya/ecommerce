"use client";
import Cartproduct from "@/components/CartProduct";
import Checkout from "@/components/Checkout";
import Total from "@/components/Total";
import { ContextCart } from "@/context/contextCart";
import { useContext } from "react";

const Cart = () => {
	const { cart } = useContext(ContextCart);
	return (
		<section className="py-24 relative">
			<div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
				<h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
					Shopping Cart
				</h2>

				{cart &&
					cart.map((article: any) => {
						return <Cartproduct key={article.product.id} article={article} />;
					})}
				<Total />
				<Checkout />
			</div>
		</section>
	);
};

export default Cart;
