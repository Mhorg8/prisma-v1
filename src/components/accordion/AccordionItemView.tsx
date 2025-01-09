"use client"
import {motion} from "framer-motion";
import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {AccordionItem as AccordionItemType} from "@/types"


interface AccordionItemProps {
    item: AccordionItemType,
    index: number
}

const AccordionItemView = ({item, index}: AccordionItemProps) => {

    const animationVariants = {
        hidden: {
            opacity: 0,
            y: -200,
        },
        visible: (index: number) => ({
            opacity: [0, 0.3, 1],
            y: 0,
            transition: {
                delay: index * 0.2,
                duration: 0.4
            }
        })
    }

    return (
        <motion.div
            variants={animationVariants}
            initial="hidden"
            key={`accordion-item-${index}`}
            whileInView="visible"
            // viewport={{ once: true }}
            custom={index}>
            <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>
                    {item.content}
                </AccordionContent>
            </AccordionItem>
        </motion.div>
    );
};

export default AccordionItemView;