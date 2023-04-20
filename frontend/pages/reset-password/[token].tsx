import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import ResetPassword from '@/components/ResetPassword/ResetPassword';
import React from 'react';

const resetPassword = ({ query }:any) => {
    return (
        <div>
            <Meta title={"Reset Password"} />
            <Breadcrumb title={"Reset Password"} />
            <ResetPassword token={query.token}/>
        </div>
    );
};
export async function getServerSideProps(context:any) {
    const query = context.query
    return { props: { query } }
  }
export default resetPassword;