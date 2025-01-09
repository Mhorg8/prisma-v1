import {Accordion} from "@/components/ui/accordion";
import {accordionItems} from "@/constants";
import AccordionItemView from "@/components/accordion/AccordionItemView";

const AccordionView = () => {


    return (
        <div
            className="container mt-10 flex items-center justify-center w-full">
            <Accordion type="single" collapsible className='w-full md:w-[70%] lg:w-[60%]'>
                {accordionItems.map((item, i) => (
                    <AccordionItemView item={item} index={i} key={i}/>
                ))}
            </Accordion>
        </div>
    );
};

export default AccordionView;