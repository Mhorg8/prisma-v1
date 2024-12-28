import {HeroInfo, NavItem, Product} from "@/types";

export const menuLinks: NavItem[] = [
    {
        id: 1, title: "محصولات", url: "/products", subLinks: [
            {title: "میز و صندلی", url: "/products/tables"},
            {title: "کتاب", url: "/products/books"},
            {title: "شلف دیواری", url: "/products/shelfs"},
            {title: "آیینه", url: "/products/mirrors"},
            {title: "گل و گیاه", url: "/products/flowers"},
            {title: "قاب گوشی", url: "/products/phoneCases"},
            {title: "اکشن فیگور", url: "/products/actionFigors"},
            {title: "تابلو", url: "/products/posters"},
        ]
    },
    {
        id: 2, title: "ولنتاین", url: "/products/valentine", subLinks: [
            {title: "باکس کادو", url: "/products/valentine/boxes"},
            {title: "عطر و ادکلون", url: "/products/valentine/perfumes"},
            {title: "شکلات", url: "/products/valentine/shocolates"},
            {title: "خرس", url: "/products/valentine/bears"},
        ]
    },
    {id: 3, title: "کریسمس", url: "/products/holyDay"},
    {
        id: 4, title: "دکوراتیو", url: "/products/decor", subLinks: [
            {title: "میز و صندلی", url: "/products/decor/tables"},
            {title: "کتاب", url: "/products/decor/books"},
            {title: "آیینه", url: "/products/decor/mirrors"},
            {title: "گل و گیاه", url: "/products/decor/flowers"},
            {title: "تابلو", url: "/products/decor/posters"},
            {title: "امشن فیگور", url: "/products/decor/actionFigure"},
        ]
    },
    {id: 5, title: "روشنایی", url: "/products/lamps"},
]

export const heroInfo: HeroInfo[] = [
    {
        id: 1,
        title: "بهترین ها همه اینجان",
        subTitle: "جدیدتریم محصولات از بهترین برندها همشون اینجا جمع شدن تا بتونی راحتر انتخاب کنی",
        image: "/hero-1.jpg"
    },
    {
        id: 2,
        title: "ترند ترین آیتم ها",
        subTitle: "ترند رتین آتیم ها در سراسر اینترنت را برای شمت فراهم کردیم",
        image: "/hero-2.jpg"
    },
    {
        id: 3,
        title: "دیگ بازار نرو",
        subTitle: "ما با بیشترین تنوع در اینترنت این امکان رو برای شما فراهم کردیم که راحتر انتخاب کنید",
        image: "/hero-3.jpg"
    },
]

export const FilterOptions = [
    {
        id: 1, placeHolder: "براساس قیمت", title: "price", options: [
            {label: "گرانترین", value: "expansive"},
            {label: "ارزان ترین", value: "cheapest"},
            {label: "تخفیف ها", value: "offers"},
        ]
    },
    {
        id: 2, placeHolder: "نوع", title: "type", options: [
            {label: "تابلو", value: "posters"},
            {label: "میز و صندلی", value: "tables"},
            {label: "باکس کادو", value: "valentineBoxes"},
            {label: "قاب گوشی", value: "phoneCases"},
            {label: "لامپ", value: "lamps"},

        ]
    },
    {
        id: 3, placeHolder: "رنگ", title: "color", options: [
            {label: "سفید", value: "white"},
            {label: "مشکی", value: "black"},
            {label: "قرمز", value: "red"},
            {label: "آبی", value: "blue"},
            {label: "زرد", value: "yellow"},
            {label: "سبز", value: "green"},
            {label: "بنفش", value: "purple"},

        ]
    }
]

export const tempProducts: Product[] = [
    {
        id: 1,
        productName: "Rose and white flowerpot",
        founderName: "mohammad hosein",
        desc: "red rose with white flowerpot it's very good choices for you house.",
        price: 29,
        offerPercentage: null,
        rate: 4.5,
        category: "flowers",
        image: '/product1.jpg',
    },
    {
        id: 11,
        productName: "Rose and white flowerpot",
        founderName: "mohammad hosein",
        desc: "red rose with white flowerpot it's very good choices for you house.",
        price: 29,
        offerPercentage: null,
        rate: 4.5,
        category: "flowers",
        image: '/product2.jpg',
    },
    {
        id: 2,
        productName: "Rose and white flowerpot",
        founderName: "mohammad hosein",
        desc: "red rose with white flowerpot it's very good choices for you house.",
        price: 29,
        offerPercentage: null,
        rate: 4.5,
        category: "flowers",
        image: '/product1.jpg',
    },
    {
        id: 3,
        productName: "Rose and white flowerpot",
        founderName: "mohammad hosein",
        desc: "red rose with white flowerpot it's very good choices for you house.",
        price: 29,
        offerPercentage: null,
        rate: 4.5,
        category: "flowers",
        image: '/product2.jpg',
    },
    {
        id: 5,
        productName: "Rose and white flowerpot",
        founderName: "mohammad hosein",
        desc: "red rose with white flowerpot it's very good choices for you house.",
        price: 29,
        offerPercentage: null,
        rate: 4.5,
        category: "flowers",
        image: '/product1.jpg',
    },
    {
        id: 10,
        productName: "Rose and white flowerpot",
        founderName: "mohammad hosein",
        desc: "red rose with white flowerpot it's very good choices for you house.",
        price: 29,
        offerPercentage: null,
        rate: 4.5,
        category: "flowers",
        image: '/product2.jpg',
    },
]