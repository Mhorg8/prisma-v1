"use client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Option } from "@/types";
import { useRouter } from "next/navigation";

interface FilterSelectProps {
    item: {
        title: string;
        id: number;
        placeHolder: string;
        options: Option[];
    };
}

export const FilterSelect = ({ item }: FilterSelectProps) => {
    const { options, placeHolder, title } = item;
    const router = useRouter();

    const handleChange = (value: string): void => {
        const searchParams = new URLSearchParams(window.location.search);
        const currentValue = searchParams.get(title);
        const pathname = window.location.pathname;

        // If the selected value is the same as the current value, remove it from the URL
        if (currentValue === value) {
            searchParams.delete(title);


        } else {
            searchParams.set(title, value);
        }

        // // Update the URL
        router.push(`${pathname}?${searchParams.toString()}`);
    };

    return (
        <Select onValueChange={handleChange}>
            <SelectTrigger defaultValue={placeHolder} className="w-[120px] bg-zinc-200">
                <SelectValue placeholder={placeHolder} />
            </SelectTrigger>
            <SelectContent>
                {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default FilterSelect;
