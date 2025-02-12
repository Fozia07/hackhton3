export interface Product{
    _id:string;
    name:string;
    title:string;
    _type:"product";
    productImage? :{
        asset:{
            _ref:string;
            _type:"image";
        }
    };
    price:number;
    description?:string;
    tags:string[];
    discountpercentage:number;
    isNew:boolean;
    slug:{
        _type:"slug"
        current:string;
    }
    quantity:number

}