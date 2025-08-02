import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { MainRoutes } from "../const";
import Link from "next/link";

export const Header = () => {
	return (
		<header className="w-full flex items-center h-full relative ">
			<nav className="absolute w-full h-full isolate aspect-video rounded bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-blur-xl hidden z-10 sm:flex sm:items-center sm:px-8 justify-between">
				<div className="">hell</div>
				<div className="">main,</div>
				<Link
					href={MainRoutes.PROFILE_PAGE}
					className="flex items-center gap-2 cursor-pointer"
				>
					<h2 className="font-bold text-xl">User</h2>
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>U</AvatarFallback>
					</Avatar>
				</Link>
			</nav>
		</header>
	);
};
