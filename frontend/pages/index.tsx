import HomePage from "@/components/HomePage/HomePage";
import { RootState, wrapper } from "@/redux/store";
import { getAllProducts, getLaptopProducts, getMobileProducts, getTabletProducts } from "@/redux/features/products/productsSilce";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import Meta from '@/components/Common/Meta/Meta';
import { connect } from "react-redux";
import { NextPage } from "next";
import { GetServerSideProps } from "next";

const Home:NextPage=(props)=>{
  
  const {mobile,laptop,tablet, isLoading,products} = useAppSelector((state: RootState) => state.products)
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //       dispatch(getMobileProducts({limit:20,sort:"-totalRating"}))
  //       // dispatch(getLaptopProducts({limit:20,sort:"-totalRating"}))
  //       // dispatch(getTabletProducts({limit:20,sort:"-totalRating"}))
  //       // dispatch(getAllProducts ({limit:20,sort:""}))
  // },[])
  console.log(props)
  return (
    <>
        <Meta title={"Trang chủ"} />
        {/* <HomePage mobile={mobile} laptop={laptop} tablet={tablet} products={products}/> */}
        <HomePage mobile={mobile}/> 
    </>
  ) 
}


export const getServerSideProps:GetServerSideProps = wrapper.getServerSideProps(store => async({req, res, ...etc}) => {
  console.log('2. Page.getServerSideProps uses the store to dispatch things');
   store.dispatch(getMobileProducts({limit:20,sort:"-totalRating"}));
   return {props:{mobile:1}}
});

function mapStateToProps(state:RootState) {
  return {
    data: state.products,
  };
}

// export default connect((state: RootState) => state.products)(Home);
export default connect(mapStateToProps)(Home);
