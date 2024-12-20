
interface SingleItemProps {
    params : Promise<{ slug: string }>
}
export default async function SingleProduct({params}:SingleItemProps) {
    const {slug} = await  params

    return (
        <>{slug}</>
    );
}
