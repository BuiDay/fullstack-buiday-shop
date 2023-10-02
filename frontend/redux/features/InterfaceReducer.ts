export interface IAuth{
    isLoggedIn?: boolean,
    token?:string,
    idUser?:string,
    isError?:boolean,
    isLoading?:boolean,
    isSuccess?:boolean,
    _persist?:object,
    status?:string,
}

export interface IAuthPayload{
  data?:{
    status?:string
    email?:string,
    firstName?:string,
    lastName?:string,
    mobile?:string,
    token?:string,
  },
  status?:string,
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
  categories?:Array<ICategory>,
  colors?:IColor[],
  compare_products?:{
    id?:string[],
    total?:number,
  }
  isLoading?:boolean,
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
  searchProducts?:{},
  audio?:{},
  speakers?:{},
  headphones?:{},
  products?:{
    data?:[],
    code?:number
    status?:string,
    total?:number,
  },
  mobile?:{
    data?:[],
    code?:number
    status?:string,
    total?:number,
  },
  tablet?:{
    data?:[],
    code?:number
    status?:string,
    total?:number,
  },
  laptop?:{
    data?:[],
    code?:number
    status?:string,
    total?:number,
  },
  watch?:{},
  tivi?:{},
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
  "firstName"?:string,
  "lastName"?:string,
  "email"?:string,
  "mobile"?:string,
  "password"?:string,
}


export interface IAuthLogin{
  email?:string,
  password?:string
}

export interface IForgotPassword{
  email?:string,
}

export interface IResetPassword{
  token?:string,
  values?:any
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

export interface ILoading{
 isLoading?:boolean
}

export interface IAppPayload{
  msg?:string,
  response:object[]
}

export interface ICart{
  id:string,
  count:number,
  color:string,
  price:number
}

export interface IUser{
  currentData:{
    status?:string,
    code?:1
    data?:{
      name?:string,
      email?:string,
      mobile?:string,
      role?:string,
      cartId?:{},
      isBlock?:boolean,
      wishlist?:[],
    }
  },
  wishlist?:string[],
  carts:{
    products:ICart[],
    productsTotal?:number,        
    cartTotal?:number
  },
}

export interface IUserPayload{
  err:string,
  msg:string,
  response:{},
}