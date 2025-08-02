"use client";

import { Control, ControllerRenderProps, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfileFormSchema, profileFormSchema } from "@/app/_shared/schema";
import {
	Button,
	Calendar,
	DatePickerField,
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Textarea,
} from "@/app/_shared/ui";
import { FC } from "react";

interface IRenderFormFieldProps<TFieldName extends keyof ProfileFormSchema> {
	control: Control<ProfileFormSchema>;
	fieldFormName: TFieldName;
	fieldLabel: string;
	FieldItem: FC<ControllerRenderProps<ProfileFormSchema, TFieldName>>;
	fieldDescription?: string;
}

const RenderFormField = <TFieldName extends keyof ProfileFormSchema>(props: IRenderFormFieldProps<TFieldName>) => {
	const { control, fieldFormName, fieldLabel, FieldItem, fieldDescription } = props;

	return (
		<FormField
			control={control}
			name={fieldFormName}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{fieldLabel}</FormLabel>
					<FormControl>
						<FieldItem {...field} />
					</FormControl>
					{fieldDescription && <FormDescription>{fieldDescription}</FormDescription>}
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export const ProfileForm = () => {
	const form = useForm<ProfileFormSchema>({
		resolver: zodResolver(profileFormSchema),
		defaultValues: {
			username: "",
		},
	});

	function onSubmit(values: ProfileFormSchema) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid grid-cols-1 md:grid-cols-2 gap-6"
			>
				<RenderFormField
					control={form.control}
					fieldFormName="username"
					fieldLabel="Username"
					FieldItem={(props) => (
						<Input
							placeholder="your_username"
							{...props}
						/>
					)}
					fieldDescription="This is your public display name."
				/>

				<RenderFormField
					control={form.control}
					fieldFormName="email"
					fieldLabel="Email"
					FieldItem={(props) => (
						<Input
							placeholder="you@example.com"
							type="email"
							{...props}
						/>
					)}
				/>

				<RenderFormField
					control={form.control}
					fieldFormName="password"
					fieldLabel="Password"
					FieldItem={(props) => (
						<Input
							placeholder="••••••••"
							type="password"
							{...props}
						/>
					)}
				/>

				<RenderFormField
					control={form.control}
					fieldFormName="confirmPassword"
					fieldLabel="Confirm Password"
					FieldItem={(props) => (
						<Input
							placeholder="••••••••"
							type="password"
							{...props}
						/>
					)}
				/>

				<RenderFormField
					control={form.control}
					fieldFormName="firstName"
					fieldLabel="First Name"
					FieldItem={(props) => (
						<Input
							placeholder="John"
							{...props}
						/>
					)}
				/>

				<RenderFormField
					control={form.control}
					fieldFormName="lastName"
					fieldLabel="Last Name"
					FieldItem={(props) => (
						<Input
							placeholder="Doe"
							{...props}
						/>
					)}
				/>

				<RenderFormField
					control={form.control}
					fieldFormName="gender"
					fieldLabel="Gender"
					FieldItem={({ onChange, value }) => (
						<Select
							onValueChange={onChange}
							value={value}
						>
							<SelectTrigger>
								<SelectValue placeholder="Select gender" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="male">Male</SelectItem>
								<SelectItem value="female">Female</SelectItem>
							</SelectContent>
						</Select>
					)}
				/>

				<RenderFormField
					control={form.control}
					fieldFormName="birthDate"
					fieldLabel="Birth Date"
					FieldItem={({ value, onChange }) => (
						<DatePickerField
							value={value}
							onChange={onChange}
						/>
					)}
				/>

				<RenderFormField
					control={form.control}
					fieldFormName="phoneNumber"
					fieldLabel="Phone Number"
					FieldItem={(props) => (
						<Input
							placeholder="+1234567890"
							{...props}
						/>
					)}
				/>

				<RenderFormField
					control={form.control}
					fieldFormName="profileImageUrl"
					fieldLabel="Profile Image URL"
					FieldItem={(props) => (
						<Input
							placeholder="https://..."
							{...props}
						/>
					)}
				/>

				<div className="md:col-span-2">
					<RenderFormField
						control={form.control}
						fieldFormName="bio"
						fieldLabel="Bio"
						FieldItem={(props) => (
							<Textarea
								placeholder="Tell us something about yourself"
								{...props}
							/>
						)}
						fieldDescription="Max 300 characters."
					/>
				</div>

				<div className="md:col-span-2 flex justify-end">
					<Button type="submit">Submit</Button>
				</div>
			</form>
		</Form>
	);
};
