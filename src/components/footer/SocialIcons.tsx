import {FaInstagram, FaTelegram, FaTwitter, FaYoutube} from "react-icons/fa6";
import React from "react";

const SocialIcons = () => {
    return (
        <div>
            <h3 className="text-2xl font-bold text-black">شبکه های مجازی</h3>
            <ul className="flex flex-row md:flex-col  gap-6 md:gap-4 md:items-center justify-center mt-2">
                <li className="social__icon"><FaInstagram size={25}/></li>
                <li className="social__icon"><FaTelegram size={25}/></li>
                <li className="social__icon"><FaTwitter size={25}/></li>
                <li className="social__icon"><FaYoutube size={25}/></li>
            </ul>
        </div>
    )
}

export default SocialIcons