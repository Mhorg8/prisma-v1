// (value: string): void => {
//     const searchParams = new URLSearchParams(window.location.search);
//     const currentValue = searchParams.get(title);
//     const pathname = window.location.pathname;
//
//     // If the selected value is the same as the current value, remove it from the URL
//     if (currentValue === value) {
//         searchParams.delete(title);
//
//
//     } else {
//         searchParams.set(title, value);
//     }

const useUpdateParams =
    (value: string) => {
        const searchParams = new URLSearchParams(window.location.search)
        const currentValue = searchParams.get("title");
        const pathname = window.location.pathname;

        if (currentValue === value) {
            searchParams.delete("title")
        } else {
            searchParams.set("title", value);
        }
    }

export default useUpdateParams