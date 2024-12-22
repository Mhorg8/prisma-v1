import {HeroSlider} from "@/components/HeroSlider";

export const Hero = () => {
    return (
        <section id="hero">
            <div className="w-full h-[60dvh] md:h-[80dvh] ">
                <HeroSlider/>
            </div>
        </section>
    );
};
export default Hero
