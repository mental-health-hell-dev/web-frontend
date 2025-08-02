"use client";

import * as React from "react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "./calendar";

interface DatePickerFieldProps {
	value?: Date;
	onChange: (date?: Date) => void;
	placeholder?: string;
	className?: string;
}

export const DatePickerField: React.FC<DatePickerFieldProps> = ({
	value,
	onChange,
	placeholder = "Select date",
	className,
}) => {
	const [open, setOpen] = React.useState(false);

	return (
		<Popover
			open={open}
			onOpenChange={setOpen}
		>
			<PopoverTrigger asChild>
				<Button
					variant="ghost"
					className={cn("w-full justify-between text-left font-normal", !value && "text-muted-foreground", className)}
				>
					{value ? format(value, "PPP") : placeholder}
					<ChevronDownIcon className="ml-2 h-4 w-4 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent
				className="w-auto p-0"
				align="start"
			>
				<Calendar
					mode="single"
					captionLayout="dropdown"
					selected={value}
					onSelect={(date) => {
						onChange(date);
						setOpen(false);
					}}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	);
};
