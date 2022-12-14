import React, { FormEventHandler } from "react";
import { IProject } from "../../types";
import { Dispatch, SetStateAction } from "react";
import { InputItem } from "./input";
const AddItemForm = ({
	setModal,
	onSubmit,
	state,
	setState,
	setImage,
}: {
	onSubmit: FormEventHandler;
	setModal: Dispatch<SetStateAction<boolean>>;
	state: IProject | undefined;
	setState: Dispatch<SetStateAction<IProject | undefined>>;
	setImage: Dispatch<SetStateAction<Blob | undefined>>;
}) => {
	return (
		<>
			<div className="inset-0 fixed min-h-full h-screen items-center justify-center p-4 text-center overflow-y-auto bg-black bg-opacity-25" />
			<div className="overflow-y-auto overflow-x-hidden fixed z-50 w-full inset-0 h-modal ">
				<div
					className="z-100  overflow-y-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                backdrop-filter backdrop-blur-lg bg-opacity-70 overflow-visible rounded-2xl bg-white dark:bg-gray-800 dark:bg-opacity-50 p-6 text-left shadow-xl transition-all relative w-full max-w-3xl h-auto"
				>
					<h3 className="heading-2">Add Project</h3>
					<form onSubmit={onSubmit} encType="multipart/form-data">
						<div className=" my-4 pb-6 rounded-lg">
							<div>
								<div className="bg-white dark:bg-black my-8 rounded-lg">
									<div className="relative bg-inherit my-4">
										<input
											type="text"
											id="Name NL"
											name="Name NL"
											key="Name NL"
											className="peer bg-transparent h-10 w-full rounded-lg text-black dark:text-white placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
											placeholder="Name Eng"
											autoComplete="off"
											value={state?.name?.nl}
											onChange={(e) =>
												setState({
													...state,
													name: {
														eng: state?.name?.eng!,
														nl: e.target.value,
													},
												})
											}
											required={true}
										/>
										<label
											htmlFor="Name NL"
											className="absolute cursor-text left-0 -top-5 text-sm text-gray-500 mx-1 px-1 
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
										>
											Name NL
										</label>
									</div>
								</div>
								<div className="bg-white dark:bg-black my-8 rounded-lg">
									<div className="relative bg-inherit my-4">
										<input
											type="text"
											id="Name Eng"
											name="Name Eng"
											key="Name Eng"
											className="peer bg-transparent h-10 w-full rounded-lg text-black dark:text-white placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
											placeholder="Name Eng"
											autoComplete="off"
											value={state?.name?.eng}
											onChange={(e) =>
												setState({
													...state,
													name: {
														eng: e.target.value,
														nl: state?.name?.nl!,
													},
												})
											}
											required={true}
										/>
										<label
											htmlFor="Name Eng"
											className="absolute cursor-text left-0 -top-5 text-sm text-gray-500 mx-1 px-1 
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
										>
											Name Eng
										</label>
									</div>
								</div>
								<div className="bg-white dark:bg-black my-8 rounded-lg">
									<div className="relative bg-inherit my-4">
										<input
											type="text"
											id="Description NL"
											name="Description NL"
											key="Description NL"
											className="peer bg-transparent h-10 w-full rounded-lg text-black dark:text-white placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
											placeholder="Description NL"
											autoComplete="off"
											value={state?.description?.nl}
											onChange={(e) =>
												setState({
													...state,
													description: {
														nl: e.target.value,
														eng: state?.description
															?.eng!,
													},
												})
											}
											required={true}
										/>
										<label
											htmlFor="Description NL"
											className="absolute cursor-text left-0 -top-5 text-sm text-gray-500 mx-1 px-1 
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
										>
											Description NL
										</label>
									</div>
								</div>
								<div className="bg-white dark:bg-black my-8 rounded-lg">
									<div className="relative bg-inherit my-4">
										<input
											type="text"
											id="Description ENG"
											name="Description ENG"
											key="Description ENG"
											className="peer bg-transparent h-10 w-full rounded-lg text-black dark:text-white placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
											placeholder="Description NL"
											autoComplete="off"
											value={state?.description?.eng}
											onChange={(e) =>
												setState({
													...state,
													description: {
														eng: e.target.value,
														nl: state?.description
															?.nl!,
													},
												})
											}
											required={true}
										/>
										<label
											htmlFor="Description ENG"
											className="absolute cursor-text left-0 -top-5 text-sm text-gray-500 mx-1 px-1 
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
										>
											Description ENG
										</label>
									</div>
								</div>
								<InputItem
									placeholder="Link"
									valueToUpdate="link"
									state={state}
									setState={setState}
								/>
								<input
									type="file"
									name="image"
									id="image"
									className="text-sm text-grey-500
									file:mr-5 file:py-2 file:px-6
									file:rounded-md file:border-0
									w-full
									file:text-sm file:font-medium
									file:bg-accent-500/25 file:text-accent-700
									hover:file:cursor-pointer hover:file:bg-accent-500/50
									hover:file:text-accent-900"
									onChange={(e) =>
										setImage(e.target.files![0])
									}
								/>
								<div className="absolute block right-0 mx-6 mb-6">
									<button
										type="submit"
										value="sumbit"
										className="px-6 py-3 bg-red-500/80 text-white rounded-lg hover:cursor-pointer hover:scale-105 duration-500 "
										onClick={() => setModal(false)}
									>
										Sluit
									</button>
									<button
										type="submit"
										value="sumbit"
										className="px-6 py-3 ml-4 right-0 mb-6 bg-accent-500 text-white rounded-lg hover:cursor-pointer hover:scale-105 duration-500 "
									>
										Submit
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default AddItemForm;
