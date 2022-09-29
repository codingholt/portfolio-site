import React, { FormEventHandler } from "react";
import { IProject } from "../../types";
import { Dispatch, SetStateAction } from "react";
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
								<div className="relative bg-inherit my-4">
									<input
										type="text"
										id="naam"
										name="naam"
										key={"naam"}
										className="peer bg-transparent h-10 w-full rounded-lg text-black dark:text-white placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
										placeholder="Naam"
										autoComplete="off"
										value={state?.name}
										onChange={(e) =>
											setState({
												...state,
												name: e.target.value,
											})
										}
									/>
									<label
										htmlFor="naam"
										className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 
											peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
									>
										Naam.
									</label>
								</div>
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
