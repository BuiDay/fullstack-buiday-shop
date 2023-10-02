
import { wrapper } from "@/redux/store";
import { GetServerSideProps } from "next";
import { setAudio, setLaptopProduct, setMobilesProduct, setProducts, setTabletProduct, setTivi, setWatchProduct } from "@/redux/features/products/productsSilce";
import productService from "@/redux/features/products/productsService";

import dynamic from 'next/dynamic';

const Meta = dynamic(() => import('@/components/Common/Meta/Meta'));
const HomePage = dynamic(() => import('@/components/HomePage/HomePage'));

const Home = () => {
  return (
    <>
      <Meta title={"Trang chủ"} />
      <HomePage />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => { 
  try {
    const resMobile = await productService.getMobileProducts({limit:12,sort:"-totalRating",fields:["images","title","price","discount","totalRating","display","ram","storage","slug"]});
    const resLaptop = await productService.getLaptopProducts({limit:12,sort:"-totalRating",fields:["images","title","price","discount","totalRating","display","ram","storage","slug"]});
    const resTablet= await productService.getTabletProducts({limit:12,sort:"-totalRating",fields:["images","title","price","discount","totalRating","display","ram","storage","slug"]});
    const resAudio= await productService.getAudioProducts({limit:12,sort:"-totalRating",fields:["images","title","price","discount","totalRating","display","ram","storage","slug"]});
    const resWatch= await productService.getWatchProducts({limit:12,sort:"-totalRating",fields:["images","title","price","discount","totalRating","display","ram","storage","slug"]});
    const resTivi= await productService.getTiviProducts({limit:12,sort:"-totalRating",fields:["images","title","price","discount","totalRating","display","ram","storage","slug"]});
    const resProducts= await productService.getProducts({limit:5,sort:"-totalRating",fields:["images","title","price","discount","totalRating","display","ram","storage","slug"]});
        store.dispatch(setMobilesProduct(resMobile));
        store.dispatch(setLaptopProduct(resLaptop));
        store.dispatch(setTabletProduct(resTablet));
        store.dispatch(setAudio(resAudio));
        store.dispatch(setTivi(resTivi));
        store.dispatch(setWatchProduct(resWatch));
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