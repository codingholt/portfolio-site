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
				className="inset-0 fixed min-h-full h-screen items-center justify-center p-4 text-center overflow-y-auto bg-black bg-opacity-25"
				onClick={() => setModal(false)}
			/>
			<div className="overflow-y-auto overflow-x-hidden fixed z-50 w-full inset-0 h-modal ">
				<div
					className="z-100  overflow-y-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                backdrop-filter backdrop-blur-lg bg-opacity-70 overflow-visible rounded-2xl bg-white dark:bg-gray-800 dark:bg-opacity-50 p-6 text-left shadow-xl transition-all relative w-full max-w-3xl h-auto"
				>
					<h3 className="heading-2">Add Project</h3>
					<form onSubmit={onSubmit} encType="multipart/form-data">
						<div className=" my-4 pb-6 rounded-lg">
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
									w-full
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
									className="px-6 py-3 absolute block right-0 mx-6 mb-6 bg-accent-500 text-white rounded-lg hover:cursor-pointer hover:scale-105 duration-500 "
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
