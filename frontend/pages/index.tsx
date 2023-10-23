
import { wrapper } from "@/redux/store";
import { GetServerSideProps } from "next";
import { setAudio, setLaptopProduct, setMobilesProduct, setProducts, setTabletProduct, setTivi, setWatchProduct } from "@/redux/features/products/productsSilce";
import productService from "@/redux/features/products/productsService";

import dynamic from 'next/dynamic';
import { useAppDispatch } from "@/redux/hook";
import { useEffect } from "react";

const Meta = dynamic(() => import('@/components/Common/Meta/Meta'));
const HomePage = dynamic(() => import('@/components/HomePage/HomePage'));

const Home = (props: any) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const handleApi = async () => {
      const resLaptop = productService.getLaptopProducts({ limit: 11, sort: "-totalRating", fields: ["images", "title", "price", "discount", "totalRating", "display", "ram", "storage", "slug"] });
      const resMobile = productService.getMobileProducts({ limit: 11, sort: "-totalRating", fields: ["images", "title", "price", "discount", "totalRating", "display", "ram", "storage", "slug"] });
      const resTablet = productService.getTabletProducts({ limit: 11, sort: "-totalRating", fields: ["images", "title", "price", "discount", "totalRating", "display", "ram", "storage", "slug"] });
      const resAudio = productService.getAudioProducts({ limit: 11, sort: "-totalRating", fields: ["images", "title", "price", "discount", "totalRating", "display", "ram", "storage", "slug"] });
      const resWatch = productService.getWatchProducts({ limit: 11, sort: "-totalRating", fields: ["images", "title", "price", "discount", "totalRating", "display", "ram", "storage", "slug"] });
      const resTivi = productService.getTiviProducts({ limit: 11, sort: "-totalRating", fields: ["images", "title", "price", "discount", "totalRating", "display", "ram", "storage", "slug"] });
      const resProducts = productService.getProducts({ limit: 5, sort: "-totalRating", fields: ["images", "title", "price", "discount", "totalRating", "display", "ram", "storage", "slug"] });

      await Promise.all([resLaptop, resMobile, resTablet, resAudio, resWatch, resTivi, resProducts]).then(function (values) {
        dispatch(setLaptopProduct(values[0]));
        dispatch(setMobilesProduct(values[1]));
        dispatch(setTabletProduct(values[2]));
        dispatch(setAudio(values[3]));
        dispatch(setWatchProduct(values[4]));
        dispatch(setTivi(values[5]));
        dispatch(setProducts(values[6]));
      });
    }
    handleApi()
  }, [])

  return (
    <>
      <Meta title={"Trang chủ"} />
      <HomePage />
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
//   try {
//     res.setHeader(
//       'Cache-Control',
//       'public, s-maxage=10, stale-while-revalidate=59'
//     )
//     const resLaptop = await productService.getLaptopProducts({ limit: 11, sort: "-totalRating", fields: ["images", "title", "price", "discount", "totalRating", "display", "ram", "storage", "slug"] });
//     store.dispatch(setLaptopProduct(resLaptop));
//     // const resLaptop = productService.getLaptopProducts({ limit: 11, sort: "-totalRating", fields: ["images", "title", "price", "discount", "totalRating", "display", "ram", "storage", "slug"] });
//     // const resMobile = productService.getMobileProducts({ limit: 11, sort: "-totalRating", fields: ["images", "title", "price", "discount", "totalRating", "display", "ram", "storage", "slug"] });
//     // const resTablet = productService.getTabletProducts({ limit: 11, sort: "-totalRating", fields: ["images", "title", "price", "discount", "totalRating", "display", "ram", "storage", "slug"] });
//     // const resAudio = productService.getAudioProducts({ limit: 11, sort: "-totalRating", fields: ["images", "title", "price", "discount", "totalRating", "display", "ram", "storage", "slug"] });
//     // const resWatch = productService.getWatchProducts({ limit: 11, sort: "-totalRating", fields: ["images", "title", "price", "discount", "totalRating", "display", "ram", "storage", "slug"] });
//     // const resTivi = productService.getTiviProducts({ limit: 11, sort: "-totalRating", fields: ["images", "title", "price", "discount", "totalRating", "display", "ram", "storage", "slug"] });
//     // const resProducts = productService.getProducts({ limit: 5, sort: "-totalRating", fields: ["images", "title", "price", "discount", "totalRating", "display", "ram", "storage", "slug"] });

//     // await Promise.all([resLaptop, resMobile, resTablet, resAudio, resWatch, resTivi, resProducts]).then(function (values) {
//     //   store.dispatch(setLaptopProduct(values[0]));
//     //   store.dispatch(setMobilesProduct(values[1]));
//     //   store.dispatch(setTabletProduct(values[2]));
//     //   store.dispatch(setAudio(values[3]));
//     //   store.dispatch(setWatchProduct(values[4]));
//     //   store.dispatch(setTivi(values[5]));
//     //   store.dispatch(setProducts(values[6]));
//     // });

//     return {
//       props: {
//       }
//     };
//   } catch (error) {
//     res.statusCode = 404;
//     return {
//       props: {

//       }
//     };
//   }
// });


export default Home