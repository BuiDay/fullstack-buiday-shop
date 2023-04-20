import React from 'react';
import ItemCompare from './ItemCompare';
import { useAppSelector } from '@/redux/hook';
import Loading from '../Common/Loading/Loading';

interface IProps {
    listIdProducts?: []
}

const CompareProductsPage: React.FC<IProps> = ({ listIdProducts }) => {
    const { isLoading } = useAppSelector(state => state.app)
    console.log(isLoading)
    return (
        <>
            <div className="compare-products-wrapper home_wrapper_2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        {
                            isLoading ? <>
                                <div className='d-flex w-100 justify-content-center'> <Loading /></div>
                            </> :
                                <>
                                    {
                                        listIdProducts && listIdProducts.length > 0 ? listIdProducts.map((item, index) => {
                                            return (
                                                <ItemCompare key={index} id={item} />
                                            )
                                        }) :
                                            <div className='text-center' style={{ height: "400px" }}>
                                                <span> Không có sản phẩm nào</span>
                                            </div>
                                    }
                                </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default CompareProductsPage;