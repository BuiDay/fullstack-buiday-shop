
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
    console.time('TIME_PROCESS');
    const resLaptop = productService.getLaptopProducts({ limit: 12, sort: "-totalRating", fields: ["images", "title", "price", "discount", "totalRating", "display", "ram", "storage", "slug"] });
    const resMobile = productService.getMobileProducts({ limit: 12, sort: "-totalRating", fields: ["images", "title", "price", "discount", "totalRating", "display", "ram", "storage", "slug"] });
    const resTablet = productService.getTabletProducts({ limit: 12, sort: "-totalRating", fields: ["images", "title", "price", "discount", "totalRating", "display", "ram", "storage", "slug"] });
    const resAudio = productService.getAudioProducts({ limit: 12, sort: "-totalRating", fields: ["images", "title", "price", "discount", "totalRating", "display", "ram", "storage", "slug"] });
    const resWatch = productService.getWatchProducts({ limit: 12, sort: "-totalRating", fields: ["images", "title", "price", "discount", "totalRating", "display", "ram", "storage", "slug"] });
    const resTivi = productService.getTiviProducts({ limit: 12, sort: "-totalRating", fields: ["images", "title", "price", "discount", "totalRating", "display", "ram", "storage", "slug"] });
    const resProducts = productService.getProducts({ limit: 5, sort: "-totalRating", fields: ["images", "title", "price", "discount", "totalRating", "display", "ram", "storage", "slug"] });

    Promise.all([resLaptop, resMobile, resTablet, resAudio, resWatch, resTivi, resProducts]).then(function (values) {
      store.dispatch(setLaptopProduct(values[0]));
      store.dispatch(setMobilesProduct(values[1]));
      store.dispatch(setTabletProduct(values[2]));
      store.dispatch(setAudio(values[3]));
      store.dispatch(setWatchProduct(values[4]));
      store.dispatch(setTivi(values[5]));
      store.dispatch(setProducts(values[6]));
    });

    console.timeEnd('TIME_PROCESS');
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