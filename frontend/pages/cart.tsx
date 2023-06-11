import CartPage from '@/components/CartPage/CartPage';
import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import { useAppSelector } from '@/redux/hook';
import { wrapper } from '@/redux/store';
import { GetServerSideProps } from 'next';
import React from 'react';

const Cart = () => {
    const {wishlist,carts} = useAppSelector(state=>state.user)
    return (
        <div>
            <Meta title={"Giỏ hàng"} />
            <Breadcrumb title={"Giỏ hàng"} />
            <CartPage carts={carts}/>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
    const {wishlist,carts} = useAppSelector(state=>state.user)
    console.log(carts)
    const query = etc.query 
    // if (query) {
    //   const resMobile = await productService.getMobileProducts(query);
    //   if (resMobile) {
    //     store.dispatch(setMobilesProduct(resMobile));
    //   }
    // }
    return {
      props: {
        query
      }
    };
  });

export default Cart;