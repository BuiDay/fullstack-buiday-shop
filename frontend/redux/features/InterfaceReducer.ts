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

export interface ICategories{
  categories?:ICategory[],
}

export interface ICategoriesPaypload{
  status?:string,
  code?:number
  data?:[]
}
//////////////////////////////////////




export interface IProducts{
  products?:[],
  mobile?:[],
  product?:{
    title?:string,
    images?:any,
    technicalInfo?:string,
    price?:any,
    description?:any,
    discount?:any
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