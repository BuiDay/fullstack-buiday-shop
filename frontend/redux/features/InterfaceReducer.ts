export interface IAuth{
    isLoggedIn?: boolean,
    token?:string,
    msg?:string,
    isError?:boolean,
    isLoading?:boolean,
    isSuccess?:boolean,
    _persist?:object
}
//////////////////////////////////////
export interface ICategory{
  title: string,
  icon:string,
  id:string
  href?:string
}

export interface IColor{
  title: string,
  code:string
}

export interface IApp{
  categories?:ICategory[],
  colors?:IColor[]
}

export interface ICategoriesPaypload{
  status?:string,
  code?:number
  data?:[]
}
//////////////////////////////////////


export interface Irating{
  name?:string,
  date?:string,
  comment?:string,
  rating?:string,
}


export interface IProducts{
  products?:[],
  mobile?:{},
  tablet?:{},
  product?:{
    title?:string,
    images?:any,
    technicalInfo?:any,
    price?:any,
    description?:any,
    discount?:any,
    ratings?:Irating[],
    totalRating?:number,
    color?:[]
  },
  isLoading?:boolean,
  isSuccess?:boolean,
}


export interface IProductsPaypload{
  status?:string,
  code?:number
  data?:[]
}


////////////////////////////////////////

export interface IAuthRegister{
  name?:string,
  phone?:string,
  password?:string
}

export interface IAuthLogin{
  phone?:string,
  password?:string
}

export interface IPost{
  posts?: any[],
  postsAdmin?: any[],
  msg?:string,
  count?:number,
  newPosts?: any[],
  isLoading?:boolean,
  isSuccess?:boolean
}

export interface IPostPayload{
  err?:string,
  msg?:string,
  response?:{
    count?:number,
    rows?:object[]
  }
}

export interface IAppPayload{
  msg?:string,
  response:object[]
}

export interface IUser{
  currentData:{
    id?:string,
    name?:string,
    phone?:string,
    zalo?:string,
    fbUrl?:string,
    avatar?:string,
  }
  error?:string,
}

export interface IUserPayload{
  err:string,
  msg:string,
  response:{},
}