import {FaStar} from "react-icons/fa6";

const useGenerateStar = (rate = 0, maxStars = 5, size: number) => {
    return Array.from({length: maxStars}, (_, index: number) => (
        <FaStar
            size={size}
            key={index}
            color={index < rate ? "#FFD700" : "#D3D3D3"} // Gold for filled stars, Gray for empty stars
        />
    ));
};

export default useGenerateStar;
