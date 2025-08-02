import { Button } from "./shared/ui/button";

export default function Home() {
	return (
		<section className="text-2xl flex items-center flex-col gap-4 text-center ">
			<p>
				It`s okay. Just breathe. <br /> I`m here with you.
			</p>
			<h1 className="text-4xl font-bold">AI Therapist</h1>
			<p>
				Let every day be <br />a little lighter
			</p>
			<div className="flex items-center gap-2 mt-2">
				<Button
					variant="secondary"
					size="lg"
					className="text-xl"
				>
					Start
				</Button>
				<Button
					variant="default"
					size="lg"
					className="text-xl"
				>
					About
				</Button>
			</div>
		</section>
	);
}
