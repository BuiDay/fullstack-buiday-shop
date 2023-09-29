import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import React from 'react';
import { useAppSelector } from '@/redux/hook';
import { RootState, wrapper } from '@/redux/store';
import { GetServerSideProps, NextPage } from 'next';
import productService from '@/redux/features/products/productsService';
import {setSearchProducts } from '@/redux/features/products/productsSilce';
import dynamic from 'next/dynamic';
import { setLoading } from '@/redux/features/loading/loadingSilce';
import SearchPage from '@/components/SearchPage/SearchPage';

const MobilePage = dynamic(() => import('@/components/MobilePage/MobilePage'), {
  loading: () => <p>Loading...</p>,
});

 
const Search: NextPage = ({ query }: any) => {

  const {searchProducts} = useAppSelector((state: RootState) => state.products || {})
  const {isLoading} = useAppSelector((state: RootState) => state || {})
  return ( 
    <div>
      <Meta title={"Search"} />
      <Breadcrumb title={`Search`} />
      <SearchPage data={searchProducts}/>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
  const query = etc.query 
  if (query) {
    const res = await productService.getSearchProducts(query);
    if (res) {
      store.dispatch(setSearchProducts(res));
    }
  }
  return {
    props: {
      query
    }
  };
});

// export default wrapper.withRedux(Mobile);
export default Search;
