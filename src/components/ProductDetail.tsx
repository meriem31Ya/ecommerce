"use client";
import { ContextCart } from "@/context/contextCart";
import { actions, reducer } from "@/reducer/getonproduct";
import { getOneproduct } from "@/services/getproducts";
import {
	actionType,
	cartType,
	productType,
	stateType,
} from "@/utils/getprooducts";
import Image from "next/image";
import { useContext, useEffect, useReducer } from "react";

const ProductDetail = ({ id }: { id: number }) => {
	const { setcart } = useContext(ContextCart);
	const [state, dispatch] = useReducer<React.Reducer<stateType, actionType>>(
		reducer,
		{
			quantity: 1,
			product: null,
		}
	);
	useEffect(() => {
		const onproduct = async () => {
			const response = await getOneproduct(id);
			dispatch({ type: actions.FETCH_SUCCESS, payload: response.data });
		};
		onproduct();
	}, []);
	if (state.product) {
		return (
			<div className="w-full mx-auto px-4 sm:px-6 lg:px-0 ">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2 ">
					<div className="img">
						<div className="img-box h-full max-lg:mx-auto ">
							<Image
								src={state.product.image}
								alt="Yellow Tropical Printed Shirt image"
								className="max-lg:mx-auto lg:ml-auto h-[80%]"
								height={400}
								width={400}
							/>
						</div>
					</div>
					<div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
						<div className="data w-full max-w-xl">
							<p className="text-lg font-medium leading-8 text-indigo-600 mb-4">
								{state.product.category}
							</p>
							<h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
								{state.product.title}
							</h2>
							<div className="flex flex-col sm:flex-row sm:items-center mb-6">
								<h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
									$ {state.product.price}
								</h6>
								<div className="flex items-center gap-2">
									<div className="flex items-center gap-1">
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g clip-path="url(#clip0_12029_1640)">
												<path
													d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
													fill="#FBBF24"
												/>
											</g>
											<defs>
												<clipPath id="clip0_12029_1640">
													<rect width="20" height="20" fill="white" />
												</clipPath>
											</defs>
										</svg>
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g clip-path="url(#clip0_12029_1640)">
												<path
													d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
													fill="#FBBF24"
												/>
											</g>
											<defs>
												<clipPath id="clip0_12029_1640">
													<rect width="20" height="20" fill="white" />
												</clipPath>
											</defs>
										</svg>
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g clip-path="url(#clip0_12029_1640)">
												<path
													d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
													fill="#FBBF24"
												/>
											</g>
											<defs>
												<clipPath id="clip0_12029_1640">
													<rect width="20" height="20" fill="white" />
												</clipPath>
											</defs>
										</svg>
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g clip-path="url(#clip0_12029_1640)">
												<path
													d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
													fill="#FBBF24"
												/>
											</g>
											<defs>
												<clipPath id="clip0_12029_1640">
													<rect width="20" height="20" fill="white" />
												</clipPath>
											</defs>
										</svg>
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g clip-path="url(#clip0_8480_66029)">
												<path
													d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
													fill="#F3F4F6"
												/>
											</g>
											<defs>
												<clipPath id="clip0_8480_66029">
													<rect width="20" height="20" fill="white" />
												</clipPath>
											</defs>
										</svg>
									</div>
									<span className="pl-2 font-normal leading-7 text-gray-500 text-sm ">
										1624 review
									</span>
								</div>
							</div>
							<p className="text-gray-500 text-base font-normal mb-5">
								description
								<a href="#" className="text-indigo-600">
									More....
								</a>
							</p>
							<ul className="grid gap-y-4 mb-8">
								<li className="flex items-center gap-3">
									<svg
										width="26"
										height="26"
										viewBox="0 0 26 26"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect width="26" height="26" rx="13" fill="#4F46E5" />
										<path
											d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
											stroke="white"
											stroke-width="1.6"
											stroke-linecap="round"
										/>
									</svg>
									<span className="font-normal text-base text-gray-900 ">
										3 color shirt
									</span>
								</li>

								<li className="flex items-center gap-3">
									<svg
										width="26"
										height="26"
										viewBox="0 0 26 26"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect width="26" height="26" rx="13" fill="#4F46E5" />
										<path
											d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
											stroke="white"
											stroke-width="1.6"
											stroke-linecap="round"
										/>
									</svg>
									<span className="font-normal text-base text-gray-900 ">
										all size is available
									</span>
								</li>
							</ul>
							<p className="text-gray-900 text-lg leading-8 font-medium mb-4">
								Size
							</p>
							<div className="w-full pb-8 border-b border-gray-100 flex-wrap">
								<div className="grid grid-cols-3 min-[400px]:grid-cols-5 gap-3 max-w-md">
									<button className="bg-white text-center py-1.5 px-6 w-full font-semibold text-lg leading-8 text-gray-900 border border-gray-200 flex items-center rounded-full justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50">
										S
									</button>
									<button className="bg-white text-center py-1.5 px-6 w-full font-semibold text-lg leading-8 text-gray-900 border border-gray-200 flex items-center rounded-full justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50">
										M
									</button>
									<button className="bg-white text-center py-1.5 px-6 w-full font-semibold text-lg leading-8 text-gray-900 border border-gray-200 flex items-center rounded-full justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50">
										L
									</button>
									<button className="bg-white text-center py-1.5 px-6 w-full font-semibold text-lg leading-8 text-gray-900 border border-gray-200 flex items-center rounded-full justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50">
										XL
									</button>
									<button className="bg-white text-center py-1.5 px-6 w-full font-semibold text-lg leading-8 text-gray-900 border border-gray-200 flex items-center rounded-full justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50">
										XXL
									</button>
								</div>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-8">
								<div className="flex sm:items-center sm:justify-center w-full">
									<button
										className="group py-4 px-6 border border-gray-400 rounded-l-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300"
										title="button"
										onClick={() => {
											dispatch({
												type: actions.INC_QUANTITY,
												payload: "decrement",
											});
										}}
									>
										<svg
											className="stroke-gray-900 group-hover:stroke-black"
											width="22"
											height="22"
											viewBox="0 0 22 22"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M16.5 11H5.5"
												stroke=""
												stroke-width="1.6"
												stroke-linecap="round"
											/>
											<path
												d="M16.5 11H5.5"
												stroke=""
												stroke-opacity="0.2"
												stroke-width="1.6"
												stroke-linecap="round"
											/>
											<path
												d="M16.5 11H5.5"
												stroke=""
												stroke-opacity="0.2"
												stroke-width="1.6"
												stroke-linecap="round"
											/>
										</svg>
									</button>
									{/* mon input panier */}
									<input
										type="text"
										placeholder="1"
										className="font-semibold text-gray-900 cursor-pointer text-lg py-[13px] px-6 w-full sm:max-w-[118px] outline-0 border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50"
										defaultValue="1"
										value={state.quantity}
									/>
									<button
										title="another button"
										className="group py-4 px-6 border border-gray-400 rounded-r-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300"
										onClick={() => {
											dispatch({
												type: actions.INC_QUANTITY,
												payload: "increment",
											});
										}}
									>
										<svg
											className="stroke-gray-900 group-hover:stroke-black"
											width="22"
											height="22"
											viewBox="0 0 22 22"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M11 5.5V16.5M16.5 11H5.5"
												stroke="#9CA3AF"
												stroke-width="1.6"
												stroke-linecap="round"
											/>
											<path
												d="M11 5.5V16.5M16.5 11H5.5"
												stroke="black"
												stroke-opacity="0.2"
												stroke-width="1.6"
												stroke-linecap="round"
											/>
											<path
												d="M11 5.5V16.5M16.5 11H5.5"
												stroke="black"
												stroke-opacity="0.2"
												stroke-width="1.6"
												stroke-linecap="round"
											/>
										</svg>
									</button>
								</div>
								<button
									className="group py-4 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-indigo-100"
									// ajouter à ma carte
									onClick={() => {
										setcart((panier: cartType[]) => {
											return [
												...panier,
												{ product: state.product, quantity: state.quantity },
											];
										});
									}}
								>
									<svg
										className="stroke-indigo-600 "
										width="22"
										height="22"
										viewBox="0 0 22 22"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
											stroke=""
											stroke-width="1.6"
											stroke-linecap="round"
										/>
									</svg>
									Add to cart
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default ProductDetail;
