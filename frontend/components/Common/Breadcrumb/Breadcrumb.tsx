import React from 'react';
import Link from "next/link"

interface IProps{
    title?:string,
}

const Breadcrumb:React.FC<IProps> = (props) => {
    const {title} = props
    return (
        <div className='breadcrumb m-0 py-4'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <p className='text-center'>
                            <Link href="/" className='text-dark'>
                                Trang chủ&nbsp;
                            </Link>
                            /&nbsp;{title}
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;