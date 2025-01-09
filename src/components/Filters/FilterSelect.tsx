"use client";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Option} from "@/types";
import {useRouter} from "next/navigation";
import useUpdateParams from "@/app/hooks/useUpdateParams";

interface FilterSelectProps {
    item: {
        title: string;
        id: number;
        placeHolder: string;
        options: Option[];
    };
}

export const FilterSelect = ({item}: FilterSelectProps) => {
    const {options, placeHolder, title} = item;
    const router = useRouter();

    const handleChange = (value: string): void => {
        const url = useUpdateParams(value as string, title as string)
        router.push(url, {scroll: false});
    };

    return (
        <Select onValueChange={handleChange}>
            <SelectTrigger defaultValue={placeHolder} className="w-[120px] bg-zinc-200">
                <SelectValue placeholder={placeHolder}/>
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
