interface ValentineItemProps { params: Promise<{ slug: string }> }
const ValentineItem = async ({params} : ValentineItemProps) => {
        const { slug } = await params;
    return (
        <div>
            {slug}
        </div>
    );
};

export  default  ValentineItem
