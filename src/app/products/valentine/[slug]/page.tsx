import SecondaryHeroBanner from "@/components/SecondaryHeroBanner";

interface ValentineItemProps {
    params: Promise<{ slug: string }>
}

const ValentineItem = async ({params}: ValentineItemProps) => {
    const {slug} = await params;

    const subTitle =
        `عشق خود را در روز ولنتاین با جعبه‌های هدیه‌ای که با دقت و عشق آماده شده‌اند، جشن بگیرید. هر جعبه پر از اکسسوری‌های منحصر‌به‌فرد و سورپرایزهای جذاب است که لحظاتی به‌یادماندنی برای عزیزتان خلق می‌کند. چه به دنبال لمس‌های رمانتیک، جواهرات ظریف یا یادگاری‌های شخصی‌سازی شده باشید`

    const title = <span>
        جعبه‌های هدیه ولنتاین بی‌نقص:  <br/> &#34;عشق خود را با سبک  خود ابراز کنید&#34;
    </span>
    return (
        <>
            <div className="container">
                <SecondaryHeroBanner
                    bgColor="bg-[#E23D28]"
                    titleColor="text-white"
                    subtitleColor="text-white"
                    image="/box1.png" buttonText="خرید"
                    title={title} subtitle={subTitle} imageStyle="object-cover "/>
            </div>
        </>
    );
};

export default ValentineItem
