import React from 'react';

const TopHeader = () => {
    return (
        <div className="w-full flex items-center justify-center bg-success h-[30px]">
            <h4 className="text-sm text-black font-semibold">تخفیف های مناسبتی رو از دست ندی تا <span
                className="underline font-extraboldbold">60%</span> تخفیف!!</h4>
        </div>
    );
};

export default TopHeader;