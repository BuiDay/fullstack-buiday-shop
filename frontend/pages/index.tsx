import HomePage from "@/components/HomePage/HomePage";
import { RootState, wrapper } from "@/redux/store";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import Meta from '@/components/Common/Meta/Meta';
import { NextPage } from "next";
import { GetServerSideProps } from "next";
import { setLaptopProduct, setMobilesProduct, setProducts, setTabletProduct } from "@/redux/features/products/productsSilce";
import productService from "@/redux/features/products/productsService";


const Home: NextPage = ({props}:any) => {
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
    const resMobile = await productService.getMobileProducts({limit:15,sort:"-totalRating",fields:["images","title","price","discount","totalRating","display","ram","storage"]});
    const resLaptop = await productService.getLaptopProducts({limit:15,sort:"-totalRating",fields:["images","title","price","discount","totalRating","display","ram","storage"]});
    const resTablet= await productService.getTabletProducts({limit:15,sort:"-totalRating",fields:["images","title","price","discount","totalRating","display","ram","storage"]});
    const resProducts= await productService.getProducts({limit:10,sort:"-totalRating",fields:["images","title","price","discount","totalRating","display","ram","storage"]});
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