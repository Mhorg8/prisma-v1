interface DecorItemInterface {
    params: Promise<{ slug: string }>
}

const DecorItem = async ({ params }: DecorItemInterface) => {
    const { slug } = await params;
    return (
        <div>{slug}</div>
    );
};

export default DecorItem;
