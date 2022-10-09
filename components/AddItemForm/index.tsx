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
			<div
				className="inset-0 fixed min-h-full items-center justify-center p-4 text-center overflow-y-auto bg-black bg-opacity-25"
				onClick={() => setModal(false)}
			/>
			<div className="flex">
				<div
					className=" w-full -translate-y-1/2
                backdrop-filter backdrop-blur-lg bg-opacity-70 overflow-visible rounded-2xl bg-white dark:bg-gray-800 dark:bg-opacity-50 p-6 text-left shadow-xl transition-all"
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
									onChange={(e) =>
										setImage(e.target.files![0])
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
		</>
	);
};

export default AddItemForm;
