import Hero from "@/components/hero/Hero";
import Filter from "@/components/Filters/Filter";
import Pagination from "@/components/Pagination/Pagination";
import SmBanner from "@/components/SmBanner";
import Slider from "@/components/Slider";
import {tempProducts} from "@/constants";
import ProductCategories from "@/components/categories/ProductCategories";


export default function Home() {
    return (
        <div className="overflow-hidden">
            <Hero/>
            <Filter/>
            <Pagination/>
            <SmBanner imageOne="/smBanner1.jpg" imageTwo="/smBanner2.jpg"/>
            <Slider title="جدیدترین ها" products={tempProducts}/>
            <ProductCategories />
            <Slider title="پر فروش ترین ها" products={tempProducts}/>
            <SmBanner imageOne="/sm-banner4.jpg" imageTwo="/sm-banner3.jpg"/>
        </div>
    );
}
