import FilterSelect from "@/components/Filters/FilterSelect";
import {FilterOptions} from "@/constants";
import HeadingSection from "@/components/HeadingSection";

export const Filters = () => {
    return (
         <div className="flex flex-col md:flex-row items-cneter justify-between my-10 container space-y-5">
           <HeadingSection title="فیلتر ها" />
           <div className="flex items-center gap-x-5">
               {FilterOptions.map(item => <FilterSelect key={item.id} item={item}/>)}
           </div>
        </div>
    );
};

export default Filters;