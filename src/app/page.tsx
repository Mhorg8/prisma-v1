import Hero from "@/components/hero/Hero";
import Filter from "@/components/Filters/Filter";
import Pagination from "@/components/Pagination/Pagination";
import SmBanner from "@/components/SmBanner";
import Slider from "@/components/Slider";
import {tempProducts} from "@/constants";
import ProductCategories from "@/components/ProductCategories";


export default function Home() {
    return (
        <div className="overflow-hidden">
            <Hero/>
            <Filter/>
            <Pagination/>
            <SmBanner imageOne="/smBanner1.jpg" imageTwo="/smBanner2.jpg"/>
            <Slider products={tempProducts}/>
            <ProductCategories />
        </div>
    );
}
