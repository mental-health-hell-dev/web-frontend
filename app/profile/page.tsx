import { ProfileForm } from "../_feature/profile-form";

const ProfilePage = () => {
	return (
		<div className="h-full w-full  bg-gradient-to-br from-white/60 via-white/30 to-white border border-white/20 shadow-xl p-8 text-xl">
			<h2 className="text-4xl font-bold">PROFILE</h2>
			<hr />

			<ProfileForm />
		</div>
	);
};

export default ProfilePage;
