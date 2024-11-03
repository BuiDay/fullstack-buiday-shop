import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import Compare from "../../assets/images/compare.svg";
import Wishlist from "../../assets/images/wishlist.svg";
import User from "../../assets/images/user.svg";
import Cart from "../../assets/images/cart.svg";
import Menu from "../../assets/images/menu.svg";
import Logo from "../../assets/images/logo.png";
import { useAppDispatch } from "@/redux/hook";
import { useEffect } from "react";
import { RootState } from "@/redux/store";
import { useAppSelector } from "@/redux/hook";
import ShowOnLogin, { ShowOnLogout } from "../hiddenLink/hiddendLink";
import { logout } from "@/redux/features/auth/authSilce";
import styles from "../../styles/Header.module.scss";
import appService from "@/redux/features/app/appService";
import { getCategories } from "@/redux/features/app/appSilce";
import { getUser, getCart, addWishlist } from "@/redux/features/user/userSilce";
import { useRouter } from "next/router";
import userService from "@/redux/features/user/userService";
import toast from "react-hot-toast";
import { PiPhoneLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { CiShoppingCart } from "react-icons/ci";

interface IProps {
  isLoggedIn?: boolean;
}

const Header: React.FC<IProps> = () => {

  const [keyword, setKeyword] = useState("")
  const { isLoggedIn } = useAppSelector((state) => state?.auth || {});
  const { wishlist, carts, currentData } = useAppSelector(state => state.user)
  const categories = useAppSelector((state: RootState) => state.app.categories || []);
  const dropdownCateRef = useRef<any>(null);
  const dropdownProfile = useRef<any>(null);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const [isShowDropdown, setIsShowDropdown] = useState<boolean>(false);
  const [isShowProfileDropdown, setIsShowProfileDropdown] = useState<boolean>(false);

  const handleCategories = async () => {
    try {
      const resCategories = await appService.apiGetCategories();
      if (resCategories)
        dispatch(getCategories(resCategories));
    } catch (error) {
      console.log(error)
    };
  }

  useEffect(() => {
    handleCategories();
  }, [])

  const handleLogout = () => {
    dispatch(logout());
    location.reload()
    toast.success('Đăng xuất thành công!')
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

  useEffect(() => {
    const handleClick = (event: Event | any) => {
      if (event?.target?.id !== "title-profile") {
        if (dropdownProfile.current && !dropdownProfile?.current.contains(event.target)) {
          setIsShowProfileDropdown(false)
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
      isLoggedIn && dispatch(getUser()) && getCarts();
    }, 1000);
  }, [isLoggedIn]);

  useEffect(() => {
    if (currentData.status === "error")
      setTimeout(() => {
        dispatch(logout());
        getCarts();
      }, 1000);
  }, []);

  useEffect(() => {
    const handleAddWishList = async () => {
      if (isLoggedIn) {
        const res: any = await userService.getUser()
        if (res.code === 1) {
          dispatch(addWishlist(res.data.wishlist))

        }
      }
    }
    handleAddWishList()
  }, [])

  useEffect(() => {
    if (!isLoggedIn) {
      try {
        const cart = JSON.parse(localStorage?.getItem("carts" || " ") || " ")
        dispatch(getCart(cart))
      } catch (error) {
        console.log(error)
      }
    }
  }, [])


  const getCarts = async () => {
    if (isLoggedIn) {
      const res: { code?: number, data?: any } = await userService.apiGetCart() || ""
      if (res.code === 1) {
        dispatch(getCart(res.data))
      }
    }
  }

  return (
    <>
      {/* <header className="header-top-stric py-3 d-md-block d-none">
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
      </header> */}

      <header>
        <div className="header-top-upper" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70px", background: "white" }}>
          <div className="container-xxl">
            <div className="row align-items-center justify-content-between">
              <div className="col-3">
                <div style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                  <div className="" style={{ maxWidth: "50px", width: "100%", marginRight: "10px" }}>
                    <Image src={Logo} alt="logo" style={{ width: "100%", height: "100%" }} />
                  </div>
                  <h1 className="" style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"2px 10px",borderRadius:"8px",background:"white"}}>
                    <Link href="/" className="" style={{ whiteSpace: "nowrap",fontSize:"14px",fontWeight:"700",color:"#633bd4"}}>
                     TAO YAI TAO YOU
                    </Link>
                  </h1>
                </div>
              </div>
              <div className="col-9 row align-items-center justify-content-end">
                <div className="col-3 d-md-block d-none">
                  <div className="input-group py-1">
                    <input
                      type="text"
                      className="form-control "
                      placeholder="Tìm kiếm..."
                      style={{ height: "30px", }}
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                    <span className="input-group-text py-1" style={{ cursor: "pointer" }} onClick={handleSearch} >
                      <BsSearch className="fs-5" />
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 col-8">
                  <div className="header-top-upper d-flex align-items-center justify-content-end gap-3">
                    <div>
                      <Link
                        href="/compare-products"
                        prefetch={false}
                        className="align-items-center gap-10 compare-products d-lg-flex d-none text-black"
                      >
                        <PiPhoneLight size={24} color="#633bd4"/>
                        <div>
                          <p style={{ fontWeight: "400" ,color:"#633bd4"}}>So sánh</p>
                          <p style={{ fontWeight: "600" ,color:"#633bd4"}}>0908295283</p>
                        </div>
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="/wishlist"
                        prefetch={false}
                        className="d-flex align-items-center gap-1 wishlist d-lg-flex d-none text-black"
                      >
                        <CiLocationOn size={24} color="#633bd4"/>
                        <p style={{ fontWeight: "400",whiteSpace: "nowrap",color:"#633bd4"}}>Về chúng tôi</p>
                      </Link>
                    </div>
                    <ShowOnLogout isLoggedIn={isLoggedIn}>
                      <div>
                        <Link
                          href="/login"
                          prefetch={false}
                          className="align-items-center gap-1 user d-flex text-black"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          <LuUser color="#633bd4"/>
                          <p style={{ fontWeight: "400",whiteSpace: "nowrap",color:"#633bd4"}}>Đăng nhập</p>
                        </Link>
                      </div>
                    </ShowOnLogout>
                    <ShowOnLogin isLoggedIn={isLoggedIn}>
                      <div className="d-flex align-items-center gap-10  me-3 user dropdown" id="title-profile" ref={dropdownProfile} onClick={() => setIsShowProfileDropdown(!isShowProfileDropdown)}>
                        <Image src={User} alt="" width={40} height={40} />
                        <div className="">
                          <div className={styles.dropdown_btn}>
                            <p style={{ whiteSpace: "nowrap" }}>Xin chào,</p>
                            <p className="displayName">{currentData?.data?.name}</p>
                          </div>
                          {
                            isShowProfileDropdown &&
                            <div className="dropdown_list" style={{ top: "60px" }}>
                              <Link className="dropdown_item" href="/profile">View Profile</Link>
                              <Link className="dropdown_item" href="/history">History</Link>
                              <Link className="dropdown_item" href="#" onClick={() => { handleLogout() }}>Sign out</Link>
                            </div>
                          }
                        </div>
                      </div>
                    </ShowOnLogin>
                    <div className="position-relative">
                      <Link
                        href="/cart"
                        className="d-flex align-items-center gap-10 text-black"
                        prefetch={false}
                      >
                        {/* <Image src={Cart} alt="Cart Icon" /> */}
                        <CiShoppingCart size={25} color="#633bd4"/>
                        <div className="badge bg-danger text-white position-absolute bottom-50 start-50">{carts?.productsTotal ? carts?.productsTotal : 0}</div>
                      </Link>
                    </div>
                  </div>
                  {/* <div className="header-top-upper d-flex align-items-center justify-content-end gap-3">
                  <div>
                    <Link
                      href="/compare-products"
                      prefetch={false}
                      className="align-items-center gap-10 text-white compare-products d-lg-flex d-none"
                    >
                      <Image src={Compare} alt="Compare Icon" />
                      <p>So sánh</p>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/wishlist"
                      prefetch={false}
                      className="d-flex align-items-center gap-10 text-white wishlist d-lg-flex d-none"
                    >
                      <Image src={Wishlist} alt="Wishlist Icon" />
                      <p>Yêu thích</p>
                    </Link>
                  </div>
                  <ShowOnLogout isLoggedIn={isLoggedIn}>
                    <div>
                      <Link
                        href="/login"
                        prefetch={false}
                        className="align-items-center gap-10 text-white user d-flex"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <Image src={User} alt="User Icon" width={10} height={10} />
                        <p>Đăng nhập</p>
                      </Link>
                    </div>
                  </ShowOnLogout>
                  <ShowOnLogin isLoggedIn={isLoggedIn}>
                    <div className="d-flex align-items-center gap-10 text-white me-3 user dropdown" id="title-profile" ref={dropdownProfile} onClick={() => setIsShowProfileDropdown(!isShowProfileDropdown)}>
                      <Image src={User} alt="" width={40} height={40} />
                      <div className="">
                        <div className={styles.dropdown_btn}>
                          <p style={{ whiteSpace: "nowrap" }}>Xin chào,</p>
                          <p className="displayName">{currentData?.data?.name}</p>
                        </div>
                        {
                          isShowProfileDropdown &&
                          <div className="dropdown_list" style={{ top: "60px" }}>
                            <Link className="dropdown_item" href="/profile">View Profile</Link>
                            <Link className="dropdown_item" href="/history">History</Link>
                            <Link className="dropdown_item" href="#" onClick={() => { handleLogout() }}>Sign out</Link>
                          </div>
                        }
                      </div>
                    </div>
                  </ShowOnLogin>
                  <div className="position-relative">
                    <Link
                      href="/cart"
                      className="d-flex align-items-center gap-10 text-white"
                      prefetch={false}
                    >
                      <Image src={Cart} alt="Cart Icon" />
                      <div className="badge bg-white text-dark position-absolute bottom-50 start-50">{carts?.productsTotal ? carts?.productsTotal : 0}</div>
                      <div className="">
                        <span className='badge bg-white text-dark'>{totalQuantity ? totalQuantity : "0"}</span>
                        <p>{cartTotalAmount ? cartTotalAmount :"0"}$</p>
                      </div>
                    </Link>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <header className="header-bottom">
        <div className="container-xxl"> */}
          {/* <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center justify-content-between">
                <div className="menu-links w-100">
                  <div className="d-lg-flex d-none align-items-center gap-20">
                    <Link href="/">Trang chủ</Link>
                    {categories &&
                      categories?.map((item: any, index: number) => {
                        return (
                          <div key={index} className="dropdown categories">
                            <Link
                              className="dropdown_item"
                              href={item.href ? `/${item.href}` : "#"}
                              onClick={() => setIsShowDropdown(!isShowDropdown)}
                              prefetch={false}
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
                            <div className="dropdown_list list-brands" style={{ borderRadius: "5px" }}>
                              <p className="px-2 py-1 fw-bold" style={{ fontSize: "14px" }}>Chọn theo hãng</p>
                              {
                                item?.brands?.map((brand: { title: string, href: string }, index: number) => <>
                                  <Link prefetch={false} className="dropdown_item" style={{ padding: "5px", paddingLeft: "15px" }} href={brand.href || "#"}>{brand.title}</Link>
                                </>
                                )
                              }
                            </div>
                          </div>
                        );
                      })}
                  </div>
                  <div className="d-lg-none d-flex align-items-center gap-20 w-100" style={{ overflowY: "auto" }}>
                    <Link href="/">Trang chủ</Link>
                    {categories &&
                      categories?.map((item: any, index: number) => {
                        return (
                          <div key={index} className="dropdown categories">
                            <Link
                              className="dropdown_item"
                              href={item.href ? `/${item.href}` : "#"}
                              onClick={() => setIsShowDropdown(!isShowDropdown)}
                              prefetch={false}
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
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className="d-lg-none dropdown">
                  <div
                    className="title-categories"
                    id="title-categories"
                    role="button"
                    onClick={() => setIsShowDropdown(!isShowDropdown)}
                    ref={dropdownCateRef}
                  >
                    <Image src={Menu} className="img fluid me-1 p-1" alt="" />
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
          </div> */}
        {/* </div>
      </header > */}
    </>
  );
};

export default Header;
