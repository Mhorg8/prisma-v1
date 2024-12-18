import {NavItem} from "@/types";

export  const menuLinks:NavItem[] = [
    {id : 1 , title : "محصولات" , url : "/products" , subLinks : [
            {title : "میز و صندلی" , url : "/products/tables"},
            {title : "کتاب" , url : "/products/books"},
            {title : "شلف دیواری" , url : "/products/shelfs"},
            {title : "آیینه" , url : "/products/mirrors"},
            {title : "گل و گیاه" , url : "/products/flowers"},
            {title : "قاب گوشی" , url : "/products/phoneCases"},
            {title : "اکشن فیگور" , url : "/products/actionFigors"},
            {title : "تابلو" , url : "/products/posters"},
        ]},
    {id : 2 , title : "ولنتاین" , url : "/products/Valentine" , subLinks : [
            {title : "باکس کادو" , url :  "/products/Valentine/boxes"},
            {title : "عطر و ادکلون" , url :  "/products/Valentine/perfumes"},
            {title : "شکلات" , url :  "/products/Valentine/shocolates"},
            {title : "خرس" , url :  "/products/Valentine/bears"},
        ]},
    {id : 3 , title : "کریسمس" , url : "/products/holyDay"},
    {id : 4 , title : "دکوراتیو" , url : "/products/decor" , subLinks: [
            {title : "میز و صندلی" , url :"/products/decor/tables"},
            {title : "کتاب" , url :"/products/decor/books"},
            {title : "آیینه" , url :"/products/decor/mirrors"},
            {title : "گل و گیاه" , url :"/products/decor/flowers"},
            {title : "تابلو" , url :"/products/decor/posters"},
            {title : "امشن فیگور" , url :"/products/decor/actionFigure"},
        ]},
    {id : 5 , title : "روشنایی" , url : "/products/lamps"},
]