import Link from 'next/link';
import React,{memo} from 'react';


interface IPropsButton{
    btnId?:string,
    text?:string, 
    fontSize?:string,
    bgColor?:string, 
    textColor?:string,
    icon?:any,
    onClick?:any,
    fullWidth?:any,
    link?:string,
    py?:string,
    px?:string,
    target?:string
}
// outline-none rounded-md hover:underline justify-center flex items-center gap-1


const Button:React.FC<IPropsButton> = ({text, bgColor, textColor,icon,onClick,fullWidth,link,py,px,fontSize,target,btnId}) => {
    const styles = `
    #${btnId}{
        outline:none;
        border-radius:10px;
        display:flex;
        justify-content:center;
        align-items:center;
        gap:10px;
        border:none;
        background:${bgColor};
        font-size:${fontSize};
        color: ${textColor}
    }
    .btn_link{
        color:#fff;
    }
    .btn_link:hover{
        color:#fff;
    }
`
    return (
        <>
        <style>{styles}</style>
        <button type="button" 
            id={btnId}
            className={`${py? py :"py-1"} ${px ? px :"px-1 xl:px-4"} ${fullWidth && "w-100"}`} 
            onClick={onClick}   
            >
            {
                icon ?  <span className='mt-0.5'>{icon}</span> :""
            }
            {link ? <Link className='btn_link' target={target} href={link || "#"}>{text} </Link> :text}
        </button>
        </>
    );
};
export default memo(Button);