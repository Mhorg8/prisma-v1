interface DecorItemInterface {
    params: Promise<{ product: string }>
}

const DecorItem = async ({ params }: DecorItemInterface) => {
    const { product } = await params;
    return (
        <div>{product}</div>
    );
};

export default DecorItem;
