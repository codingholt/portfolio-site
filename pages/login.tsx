import { Computer, LockedWindow } from "iconoir-react";
import type { NextPage } from "next";
import Button from "../components/Button";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import { signIn } from "next-auth/react";

const LogIn: NextPage = () => {
	return (
		<Container>
			<div className="heading">
				<p className="mt-12">Login.</p>
			</div>
			<div className="inline-flex">
				<LockedWindow />
				<span className="ml-2">Toegang tot het geheime deel.</span>
			</div>
			<div className="">
				<div className="bg-white dark:bg-black my-4 rounded-lg">
					<div className="relative bg-inherit">
						<input
							type="text"
							id="username"
							name="username"
							className="peer bg-transparent h-10 w-full rounded-lg text-black dark:text-white placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
							placeholder="Gebruikersnaam"
						/>
						<label
							htmlFor="username"
							className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
						>
							Gebruikersnaam.
						</label>
					</div>
				</div>
				<div className="bg-white dark:bg-black my-4 rounded-lg">
					<div className="relative bg-inherit">
						<input
							type="text"
							id="username"
							name="username"
							className="peer bg-transparent h-10 w-full rounded-lg text-black dark:text-white placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
							placeholder="Gebruikersnaam"
						/>
						<label
							htmlFor="username"
							className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
						>
							Wachtwoord.
						</label>
					</div>
				</div>
			</div>
			<button onClick={() => signIn("email")}>Sign in with Email</button>
			<Button buttonText="Login" to="/" extraStyle="mt-2" />
		</Container>
	);
};

export default LogIn;
