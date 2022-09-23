import Link from "next/link";

function Button({
	buttonText,
	to,
	extraStyle,
}: {
	buttonText: string;
	to: string;
	extraStyle: string;
}) {
	return (
		<Link href={to}>
			<div
				className={
					"absolute px-6 py-3 bg-accent-500 text-white rounded-lg hover:cursor-pointer hover:scale-105 duration-500 " +
					extraStyle
				}
			>
				{buttonText}
			</div>
		</Link>
	);
}

export default Button;
