import React from 'react';
import {LuMinus, LuPlus} from "react-icons/lu";

const QuantityView = () => {
    return (
        <div className="bg-zinc-200 p-1 flex items-center gap-3 rounded-sm">
            <button className=""><LuMinus/></button>
            <p>1</p>
            <button><LuPlus/></button>
        </div>
    );
};

export default QuantityView;