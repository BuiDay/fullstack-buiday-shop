import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import Compare from "../../assets/images/compare.svg";
import Wishlist from "../../assets/images/wishlist.svg";
import User from "../../assets/images/user.svg";
import Cart from "../../assets/images/cart.svg";
import Menu from "../../assets/images/menu.svg";
import { useAppDispatch } from "@/redux/hook";
import { useEffect } from "react";
import { RootState } from "@/redux/store";
import { useAppSelector } from "@/redux/hook";
import ShowOnLogin, { ShowOnLogout } from "../hiddenLink/hiddendLink";
import { logout } from "@/redux/features/auth/authSilce";
import styles from "./Header.module.scss";
import appService from "@/redux/features/app/appService";
import { getCategories } from "@/redux/features/app/appSilce";
import { getUser } from "@/redux/features/user/userSilce";
import { useRouter } from "next/router";
import userService from "@/redux/features/user/userService";

interface IProps {
  isLoggedIn?: boolean;
}

const Header: React.FC<IProps> = () => {
  const [keyword, setKeyword] = useState("")
  const { isLoggedIn } = useAppSelector((state) => state?.auth || {});
  const dropdownCateRef = useRef<any>(null);
  const { currentData } = useAppSelector((state) => state.user || {});

  const dispatch = useAppDispatch();
  const router = useRouter();
  const categories = useAppSelector((state: RootState) => state.app.categories || []);
  const [isShowDropdown, setIsShowDropdown] = useState<boolean>(false);
  const { wishlist, carts } = useAppSelector(state => state.user)

  const handleCategories = async () => {
    try {
      const resCategories = await appService.apiGetCategories();
      if (resCategories)
        dispatch(getCategories(resCategories));
    } catch (error) {
      console.log(error)
    };
  }

  // useEffect(()=>{
  //   const handleCartApi = async () =>{
  //     if(carts.ProductsCarts.length > 0){
  //      const res = await userService.apiAddCart(carts)
  //      console.log(res)
  //     }
  //   }
   
  // },[carts])

  useEffect(() => {
    handleCategories();
  }, [])

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    const handleClick = (event: Event | any) => {
      if (event?.target?.id !== "title-categories") {
        if (dropdownCateRef.current && !dropdownCateRef?.current.contains(event.target)) {
          setIsShowDropdown(false)
        }
      }
    }
    document.addEventListener('click', (e) => handleClick(e));
    return document.removeEventListener('click', (e) => handleClick(e));
  }, [])


  const handleSearch = () => {
    if (keyword) {
      router.push(
        {
          pathname: "/search",
          query: {
            page: 1,
            result: keyword,
          }
        }
      )
    }
  }

  useEffect(() => {
    setTimeout(() => {
      isLoggedIn && dispatch(getUser());
    }, 1000);
  }, [isLoggedIn]);

  useEffect(() => {
    if (currentData.status === "error")
      setTimeout(() => {
        dispatch(logout());
      }, 3000);
  }, []);

  return (
    <>
      <header className="header-top-stric py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white m-0">
                Free Shipping Over 100$ & Free Return
              </p>
            </div>
            <div className="col-6">
              <p className="text-end m-0 text-white">Hot line: 0933 804 785</p>
            </div>
          </div>
        </div>
      </header>
      <header>
        <div className="header-top-upper py-3">
          <div className="container-xxl">
            <div className="row align-items-center">
              <div className="col-2">
                <h1>
                  <Link href="/" className="text-white">
                    NHAT BUI
                  </Link>
                </h1>
              </div>
              <div className="col-5">
                <div className="input-group py-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search product here..."
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <span className="input-group-text py-3" style={{ cursor: "pointer" }} onClick={handleSearch} >
                    <BsSearch className="fs-6" />
                  </span>
                </div>
              </div>
              <div className="col-5">
                <div className="header-top-upper d-flex align-items-center justify-content-end gap-3">
                  <div>
                    <Link
                      href="/compare-products"
                      className="d-flex align-items-center gap-10 text-white compare-products"
                    >
                      <Image src={Compare} alt="Compare Icon" />
                      <p>So sánh</p>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/wishlist"
                      className="d-flex align-items-center gap-10 text-white wishlist"
                    >
                      <Image src={Wishlist} alt="Wishlist Icon" />
                      <p>Yêu thích</p>
                    </Link>
                  </div>
                  <ShowOnLogout isLoggedIn={isLoggedIn}>
                    <div>
                      <Link
                        href="/login"
                        className="d-flex align-items-center gap-10 text-white user"
                      >
                        <Image src={User} alt="User Icon" />
                        <p>Đăng nhập</p>
                      </Link>
                    </div>
                  </ShowOnLogout>
                  <ShowOnLogin isLoggedIn={isLoggedIn}>
                    <div className="d-flex align-items-center gap-10 text-white me-3">
                      <Image src={User} alt="" width={40} height={40} />
                      <div className="dropdown">
                        <div className={styles.dropdown_btn}>
                          <p>Xin chào,</p>
                          <p className="displayName">{currentData?.data?.name}</p>
                        </div>
                        <div className={styles.dropdown_content}>
                          <Link className="dropdown_item" href="/profile">View Profile</Link>
                          <Link className="dropdown_item" href="/history">History</Link>
                          <Link className="dropdown_item" href="" onClick={() => { handleLogout() }}>Sign out</Link>
                        </div>
                      </div>
                    </div>
                  </ShowOnLogin>
                  <div className="position-relative">
                    <Link
                      href="/cart"
                      className="d-flex align-items-center gap-10 text-white"
                    >
                      <Image src={Cart} alt="Cart Icon" />
                      <div className="badge bg-white text-dark position-absolute bottom-50 start-50">{carts.productsTotal && carts.productsTotal}</div>
                      {/* <div className="">
                        <span className='badge bg-white text-dark'>{totalQuantity ? totalQuantity : "0"}</span>
                        <p>{cartTotalAmount ? cartTotalAmount :"0"}$</p>
                      </div> */}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center justify-content-between">
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-20">
                    <Link href="/">Trang chủ</Link>
                    {categories &&
                      categories?.map((item: any, index: number) => {
                        return (
                          <div  key={index} className="dropdown categories">
                            <Link
                              className="dropdown_item"
                              href={item.href ? `/${item.href}` : "#"}
                              onClick={() => setIsShowDropdown(!isShowDropdown)}
                            >
                              <Image
                                src={item.icon}
                                width={25}
                                height={25}
                                alt=""
                                className="dropdown_icon img fluid"
                              ></Image>
                              <span>{item.title}</span>
                            </Link>
                            <div className="dropdown_list list-brands" style={{borderRadius:"5px"}}>
                              <p className="px-2 py-1 fw-bold" style={{fontSize:"14px"}}>Chọn theo hãng</p>
                                {
                                  item?.brands?.map((brand: { title: string, href: string }, index: number) => <>
                                    <Link className="dropdown_item" style={{padding:"5px",paddingLeft:"15px"}} href={brand.href}>{brand.title}</Link>
                                  </>
                                  )
                                }
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className="dropdown">
                  <div
                    className="title-categories"
                    id="title-categories"
                    role="button"
                    onClick={() => setIsShowDropdown(!isShowDropdown)}
                    ref={dropdownCateRef}
                  >
                    <Image src={Menu} className="img fluid me-1" alt="" />
                    Shop
                  </div>
                  {isShowDropdown && (
                    <div className="dropdown_list">
                      <Link className="dropdown_item" href="product">Our Store</Link>
                      <Link className="dropdown_item" href="blogs">Blogs</Link>
                      <Link className="dropdown_item" href="contact">Contact</Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header >
    </>
  );
};

export default Header;
