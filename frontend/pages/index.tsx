
import { RootState, wrapper } from "@/redux/store";
import { useAppSelector } from "@/redux/hook";
import { GetServerSideProps } from "next";
import { setLaptopProduct, setMobilesProduct, setProducts, setTabletProduct } from "@/redux/features/products/productsSilce";
import productService from "@/redux/features/products/productsService";

import dynamic from 'next/dynamic';
const HomePage = dynamic(() => import('@/components/HomePage/HomePage'));
const Meta = dynamic(() => import('@/components/Common/Meta/Meta'));

const Home = () => {
  const {mobile,laptop,tablet,products}= useAppSelector((state: RootState) => state.products)
  return (
    <>
      <Meta title={"Trang chủ"} />
      <HomePage mobile={mobile} laptop={laptop} tablet={tablet} products={products}/>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => { 
  try {
    const resMobile = await productService.getMobileProducts({limit:9,sort:"-totalRating",fields:["images","title","price","discount","totalRating","display","ram","storage","slug"]});
    const resLaptop = await productService.getLaptopProducts({limit:9,sort:"-totalRating",fields:["images","title","price","discount","totalRating","display","ram","storage","slug"]});
    const resTablet= await productService.getTabletProducts({limit:9,sort:"-totalRating",fields:["images","title","price","discount","totalRating","display","ram","storage","slug"]});
    const resProducts= await productService.getProducts({limit:5,sort:"-totalRating",fields:["images","title","price","discount","totalRating","display","ram","storage","slug"]});
        store.dispatch(setMobilesProduct(resMobile));
        store.dispatch(setLaptopProduct(resLaptop));
        store.dispatch(setTabletProduct(resTablet));
        store.dispatch(setProducts(resProducts));
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

export default Home