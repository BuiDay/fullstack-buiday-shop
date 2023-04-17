import HomePage from "@/components/HomePage/HomePage";
import { RootState } from "@/redux";
import { getAllProducts, getLaptopProducts, getMobileProducts, getTabletProducts } from "@/redux/features/products/productsSilce";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect } from "react";

export default function Home() {
  
  const {mobile,laptop,tablet, isLoading,products} = useAppSelector((state: RootState) => state.products)
  const dispatch = useAppDispatch();
  useEffect(() => {
        dispatch(getMobileProducts({limit:20,sort:"-totalRating"}))
        dispatch(getLaptopProducts({limit:20,sort:"-totalRating"}))
        dispatch(getTabletProducts({limit:20,sort:"-totalRating"}))
        dispatch(getAllProducts ({limit:20,sort:""}))
  },[])

  return (
    <>
      <HomePage mobile={mobile} laptop={laptop} tablet={tablet} products={products}/>
    </>
  )
}
