import SecondaryHeroBanner from "@/components/SecondaryHeroBanner";

interface DecorItemInterface {
    params: Promise<{ slug: string }>
}

const DecorItem = async ({params}: DecorItemInterface) => {
    const {slug} = await params;

    const headingDetail = {
        image: "/action-fiqure.png",
        title: <span>
            اکشن فیگورهای منحصربه‌فرد<br/> جادوی شخصیت‌ها در دستان شما
        </span>,
        subTitle: `با مجموعه اکشن فیگورهای جذاب ما، دنیای هیجان‌انگیز شخصیت‌های محبوبتان را به خانه بیاورید. از قهرمانان افسانه‌ای و ضدقهرمان‌های جذاب گرفته تا شخصیت‌های نمادین فیلم‌ها و بازی‌ها، هر اکشن فیگور با جزئیات بی‌نظیر طراحی شده تا علاقه‌مندان را شگفت‌زده کند`
    }
    return (
        <div>
            <div className="container">
                <SecondaryHeroBanner
                    image={headingDetail.image} imageStyle="object-cover" bgColor="bg-[#9F8170]"
                    title={headingDetail.title} titleColor="text-white" subtitleColor="text-white"
                    subtitle={headingDetail.subTitle} buttonText="اطلاعات بیشتر"/>
            </div>
        </div>
    );
};

export default DecorItem;
