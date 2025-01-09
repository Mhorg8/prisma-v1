"use client"
import {useRef} from "react";

const NewsLetter = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className="flex flex-col gap-1">
            <label className="text-sm font-bold">برای اطلاع از اخبار عضو شوید.</label>
            <input  className="input w-[95%]" type="text" placeholder="example@gmail.com" ref={inputRef}/>
        </form>
    );
};

export default NewsLetter;