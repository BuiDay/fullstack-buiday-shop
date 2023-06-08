import React, {useState } from "react";
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
import { RootState, wrapper } from "@/redux/store";
import { useAppSelector } from "@/redux/hook";
import ShowOnLogin, { ShowOnLogout } from "../hiddenLink/hiddendLink";
import { logout } from "@/redux/features/auth/authSilce";
import { getUser } from "@/redux/features/user/userSilce";
import styles from "./Header.module.scss";
import { GetServerSideProps } from "next";
import appService from "@/redux/features/app/appService";
import { getCategories } from "@/redux/features/app/appSilce";


interface IProps {
  isLoggedIn?: boolean;
}

const Header: React.FC<IProps> = () => {
  const { isLoading, status, isError, isLoggedIn } = useAppSelector((state) => state?.auth || {});
  const { currentData } = useAppSelector((state) => state.user || {});
  // const {cartTotalAmount,totalQuantity} = useSelector(state=>state.cart)
  // const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.app.categories || []);
  const [isShowDropdown, setIsShowDropdown] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      isLoggedIn && dispatch(getUser());
    }, 1000);
  }, [isLoggedIn]);

  // useEffect(() => {
  //   if(Object.keys(currentData).length === 0)
  //   setTimeout(() => {
  //       dispatch(logout());
  //     }, 3000);
  // }, []);

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
                  />
                  <span className="input-group-text py-3">
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
                          {/* <Link className="dropdown_item" href="/profile">View Profile</Link>
                                                <Link className="dropdown_item" href="/history">History</Link>
                                                <Link className="dropdown_item" href="" onClick={()=>{handleLogout()}}>Sign out</Link> */}
                        </div>
                      </div>
                    </div>
                  </ShowOnLogin>
                  <div>
                    <Link
                      href="/cart"
                      className="d-flex align-items-center gap-10 text-white"
                    >
                      <Image src={Cart} alt="Cart Icon" />
                      <div className="d-flex flex-column">
                        {/* <span className='badge bg-white text-dark'>{totalQuantity ? totalQuantity : "0"}</span> */}
                        {/* <p>{cartTotalAmount ? cartTotalAmount :"0"}$</p> */}
                        <span className="badge bg-white text-dark">3</span>
                        <p>100</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center">
                <div className="dropdown me-5">
                  <div
                    className="title-categories"
                    role="button"
                    onClick={() => setIsShowDropdown(!isShowDropdown)}
                  >
                    <Image src={Menu} className="img fluid me-1" alt="" />
                    Shop categories
                  </div>
                  {isShowDropdown && (
                    <div className="dropdown_list">
                      {categories &&
                        categories?.map((item: any, index: number) => {
                          return (
                            <Link
                              key={index}
                              className="dropdown_item"
                              href={item.href ? `/${item.href}` : "#"}
                              onClick={() => setIsShowDropdown(!isShowDropdown)}
                            >
                              <Image
                                src={item.icon}
                                width={20}
                                height={20}
                                alt=""
                                className="dropdown_icon"
                              ></Image>
                              <span>{item.title}</span>
                            </Link>
                          );
                        })}
                    </div>
                  )}
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <Link href="/">Home</Link>
                    <Link href="product">Our Store</Link>
                    <Link href="blogs">Blogs</Link>
                    <Link href="contact">Contact</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => { 
  try {
    const resCategories = await appService.apiGetCategories();
    if(resCategories)
      store.dispatch(getCategories(resCategories));
    return {
      props: {
      }
    };
  } catch (error) {
    res.statusCode = 404;
    return {
      props: {
      }
    };
  }
});

export default Header;
