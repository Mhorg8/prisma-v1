import SecondaryHeroBanner from "@/components/SecondaryHeroBanner";
import ProductCategories from "@/components/categories/ProductCategories";
import PaginationProducts from "@/components/Pagination/PaginationProducts";
import Filters from "@/components/Filters/Filter";
import SmBanner from "@/components/SmBanner";
import Slider from "@/components/Slider";
import {tempProducts} from "@/constants";
import AccordionView from "@/components/accordion/AccordionView";

interface Props {
    searchParams: Promise<{ color?: string, type?: string, price?: string }>
}

const Page = async ({searchParams}: Props) => {
    const {price, type, color} = await searchParams

    console.log(type, price, color)

    const subtitle = `  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
    گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است`

    return (
        <div className="w-full overflow-hidden h-full">
            {/* products page banner */}
            <div className="container w-full h-full md:h-[calc(65dvh-90px)] ">
                <SecondaryHeroBanner
                    image="/sofa.png"
                    subtitle={subtitle}
                    title="خانه خود را با اکسسوری‌های منحصر‌به‌فرد ما به خانه‌ای رویایی تبدیل کنید"
                    buttonText="درباره ما"/>
            </div>

            {/* product categories */}
            <ProductCategories/>

            {/* product pagination */}
            <div className="my-20 container">
                <Filters/>
                <PaginationProducts/>
            </div>

            {/*Small banner*/}
            <SmBanner imageOne="/banner-4.jpg" imageTwo="/banner-3.jpg"/>

            {/* product slider */}
            <Slider title="جدیدترین صندلی ها" products={tempProducts}/>
            {/* product slider */}
            <Slider title="جدیدترین تابلو ها" products={tempProducts}/>
            {/*  accordion  */}
            <AccordionView/>
        </div>
    )
};

export default Page;