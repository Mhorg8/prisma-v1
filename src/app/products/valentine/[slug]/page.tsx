interface ValentineItemProps { params: Promise<{ product: string }> }
const ValentineItem = async ({params} : ValentineItemProps) => {
        const { product } = await params;
    return (
        <div>
            {product}
        </div>
    );
};

export  default  ValentineItem
