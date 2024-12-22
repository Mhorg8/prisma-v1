export  interface NavItem {
    id : number;
    title : string;
    url : string;
    subLinks? : {
        title : string ,
        url : string ,
    }[]
}

export  interface HeroInfo {
    id : number ,
    title : string;
    subTitle : string;
    image : string;
}
export  interface Option  {
    label : string ,
    value : string ,
}