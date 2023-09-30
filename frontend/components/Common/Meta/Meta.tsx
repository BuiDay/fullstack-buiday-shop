import React from 'react';
import {Helmet} from "react-helmet";
interface Iprops{
    title?:string
}
const Meta = (props:Iprops) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{props.title}</title>
            <meta name="description" content="Helmet application" />
        </Helmet>
    );
};

export default Meta;