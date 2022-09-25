import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";

const Protected: NextPage = (): JSX.Element => {
	const { status, data } = useSession();

	useEffect(() => {
		if (status === "unauthenticated") Router.replace("/login");
	}, [status]);

	if (status === "authenticated")
		return (
			<div>
				Deze pagina is alleen voor speciale mensen. zoals jij,
				{JSON.stringify(data.user?.name, null, 2)}
			</div>
		);

	return <div>loading</div>;
};

export default Protected;
