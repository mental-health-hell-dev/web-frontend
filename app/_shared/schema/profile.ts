"use client";

import { z } from "zod";
//TODO сделать в профиле кнопку которая показывает сколько дней пользователь был в системе подярд и эмоции за последние 7 днейя

export const profileFormSchema = z
	.object({
		username: z
			.string({ error: "Username is required" })
			.min(2, { error: "Username must be at least 2 characters" })
			.max(50, { error: "Username must be no more than 50 characters" }),

		email: z.email({ error: "Invalid email format" }),

		password: z.string({ error: "Password is required" }).min(8, { error: "Password must be at least 8 characters" }),

		confirmPassword: z.string({ error: "Please confirm your password" }),

		birthDate: z.date({ error: "Birth date is required" }),

		firstName: z
			.string({ error: "First name is required" })
			.min(1, { error: "First name must be at least 1 character" })
			.max(50, { error: "First name must be no more than 50 characters" }),

		lastName: z
			.string({ error: "Last name is required" })
			.min(1, { error: "Last name must be at least 1 character" })
			.max(50, { error: "Last name must be no more than 50 characters" }),

		gender: z.enum(["male", "female"], { error: "Please select male or female" }),

		phoneNumber: z
			.string()
			.regex(/^(\+\d{1,3})?\d{7,14}$/, {
				error: "Invalid phone number format",
			})
			.optional(),

		profileImageUrl: z.url({ error: "Invalid image URL format" }).optional(),

		bio: z.string().max(300, { error: "Bio must be 300 characters or less" }).optional(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		error: "Passwords do not match",
		path: ["confirmPassword"],
	});

export type ProfileFormSchema = z.infer<typeof profileFormSchema>;
