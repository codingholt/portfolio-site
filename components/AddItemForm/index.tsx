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
	return (
		<div className="inset-0 fixed overflow-y-auto z-10 bg-black bg-opacity-25">
			<div className="flex min-h-full items-center justify-center p-4 text-center ">
				<div
					className="w-full h-72 max-w-md transform 
                backdrop-filter backdrop-blur-lg bg-opacity-70 overflow-visible rounded-2xl bg-white dark:bg-gray-800 dark:bg-opacity-50 p-6 text-left align-middle shadow-xl transition-all"
				>
					<form onSubmit={onSubmit}>
						<div className="bg-white dark:bg-black my-4 rounded-lg">
							<div>
								<InputItem
									placeholder="Naam"
									valueToUpdate="name"
									state={state}
									setState={setState}
								/>
							</div>
							<div className="relative bg-inherit my-4">
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
