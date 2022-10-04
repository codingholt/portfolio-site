import React, { FormEventHandler } from "react";
import { IProject } from "../../types";
import { Dispatch, SetStateAction } from "react";
import { InputItem } from "./input";
const AddItemForm = ({
	onSubmit,
	state,
	setState,
}: {
	onSubmit: FormEventHandler;
	state: IProject | undefined;
	setState: Dispatch<SetStateAction<IProject | undefined>>;
}) => {
	const fileToDataUri = async (file: File) => {
		new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = (event) => {
				resolve(event.target?.result);
			};
			reader.readAsDataURL(file);
		});
	};
	return (
		<div className="inset-0 fixed overflow-y-auto z-10 bg-black bg-opacity-25">
			<div className="flex min-h-full items-center justify-center p-4 text-center ">
				<div
					className="w-full  max-w-md transform 
                backdrop-filter backdrop-blur-lg bg-opacity-70 overflow-visible rounded-2xl bg-white dark:bg-gray-800 dark:bg-opacity-50 p-6 text-left align-middle shadow-xl transition-all"
				>
					<h3 className="heading-2">Add Project</h3>
					<form onSubmit={onSubmit} encType="multipart/form-data">
						<div className=" my-4 pb-4 rounded-lg">
							<div>
								<InputItem
									placeholder="Naam"
									valueToUpdate="name"
									state={state}
									setState={setState}
								/>
								<InputItem
									placeholder="Description"
									valueToUpdate="description"
									state={state}
									setState={setState}
								/>

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
									file:text-sm file:font-medium
									file:bg-accent-500/25 file:text-accent-700
									hover:file:cursor-pointer hover:file:bg-accent-500/50
									hover:file:text-accent-900"
									onChange={
										async (e) =>
											console.log(
												await fileToDataUri(
													e.target.files![0]
												)
											)
										// setState({
										// 	...state,
										// 	img: await getBase64(
										// 		e.target.files![0]
										// 	),
										// })
									}
								/>

								<button
									type="submit"
									value="sumbit"
									className="absolute px-6 py-3 bg-accent-500 text-white rounded-lg hover:cursor-pointer hover:scale-105 duration-500 "
								>
									Submit
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddItemForm;
