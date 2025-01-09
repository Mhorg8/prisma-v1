const useUpdateParams =

    (value: string, title: string): string => {
        const searchParams = new URLSearchParams(window.location.search)
        const currentValue = searchParams.get(title);
        const pathname = window.location.pathname;

        if (currentValue === value) {
            searchParams.delete(title)
        } else {
            searchParams.set(title, value);
        }

        return `${pathname}?${searchParams.toString()}`
    }

export default useUpdateParams