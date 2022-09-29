import { IProject } from "../../types";
import { Dispatch, SetStateAction } from "react";
export const InputItem = ({
	placeholder,
	valueToUpdate,
	state,
	setState,
}: {
	placeholder: string;
	valueToUpdate: string;
	state: IProject | undefined;
	setState: Dispatch<SetStateAction<IProject | undefined>>;
}) => {
	return (
		<div className="bg-white dark:bg-black my-4 rounded-lg">
			<div className="relative bg-inherit my-4">
				<input
					type="text"
					id={placeholder}
					name={placeholder}
					key={placeholder}
					className="peer bg-transparent h-10 w-full rounded-lg text-black dark:text-white placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
					placeholder="Naam"
					autoComplete="off"
					value={state?.name}
					onChange={(e) =>
						setState({
							...state,
							[`${valueToUpdate}`]: e.target.value,
						})
					}
				/>
				<label
					htmlFor="naam"
					className="absolute cursor-text left-0 -top-5 text-sm text-gray-500 mx-1 px-1 
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
				>
					{placeholder}
				</label>
			</div>
		</div>
	);
};
