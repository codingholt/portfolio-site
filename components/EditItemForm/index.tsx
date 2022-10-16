import React, { FormEventHandler } from "react";
import { IProject } from "../../types";
import { Dispatch, SetStateAction } from "react";
import { InputItem } from "../AddItemForm/input";
import Projects from "../Projects";
interface EditIProject {
	show: boolean;
	idx: number;
}

const EditItemFrom = ({
	setModal,
	onSubmit,
	idx,
	state,
	setState,
	onDelete,
	setImage,
}: {
	onSubmit: FormEventHandler;
	onDelete: (idx: number) => Promise<JSON>;
	idx: number;
	setModal: Dispatch<SetStateAction<EditIProject>>;
	state: IProject | undefined;
	setState: Dispatch<SetStateAction<IProject | undefined>>;
	setImage: Dispatch<SetStateAction<Blob | undefined>>;
}) => {
	return (
		<>
			<div className="inset-0 fixed min-h-full h-screen items-center justify-center p-4 text-center overflow-y-auto bg-black bg-opacity-25" />
			<div className="overflow-y-auto overflow-x-hidden fixed z-50 w-full inset-0 h-modal ">
				<div
					className="z-100  overflow-y-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 h-5/6
                backdrop-filter backdrop-blur-lg bg-opacity-70 overflow-visible rounded-2xl bg-white dark:bg-gray-800 dark:bg-opacity-50 p-6 text-left shadow-xl transition-all relative"
				>
					<h3 className="heading-2">Edit Project</h3>
					<form onSubmit={onSubmit} encType="multipart/form-data">
						<div className=" my-4 pb-6 rounded-lg">
							<div className="block">
								{/* CONTENT */}
								<Projects
									name={state?.name}
									link={state?.link}
									image={state?.image}
									description={state?.description}
								/>
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

								<div className="absolute block right-0 mx-6 mb-6">
									<button
										type="button"
										className="px-6 py-3 bg-red-500/50 
										hover:bg-red-500 text-white rounded-lg hover:cursor-pointer hover:scale-105 duration-500 "
										onClick={() => onDelete(idx)}
									>
										Delete
									</button>
									<button
										type="button"
										className="px-6 py-3 mx-4 bg-red-500/80 text-white rounded-lg 
										hover:bg-red-500 hover:cursor-pointer hover:scale-105 duration-500 "
										onClick={() =>
											setModal({
												idx: idx,
												show: false,
											})
										}
									>
										Sluit
									</button>
									<button
										type="submit"
										value="sumbit"
										className="px-6 py-3 bg-accent-500 text-white rounded-lg hover:cursor-pointer hover:scale-105 duration-500 "
										onClick={() => onSubmit}
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

export default EditItemFrom;
