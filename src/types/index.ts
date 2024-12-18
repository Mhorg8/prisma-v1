export  interface NavItem {
    id : number;
    title : string;
    url : string;
    subLinks? : {
        title : string ,
        url : string ,
    }[]
}