import React, { memo } from 'react'
import { useRouter } from 'next/router';
import styles from './Pagination.module.scss'


interface IProps{
    text?:string | number, 
    currentPage?:number, 
    icon?:JSX.Element, 
    setCurrentPage?:any
    type?:string
}

const PageNumber:React.FC<IProps> = ({ text, currentPage, icon, setCurrentPage, type }) => {
    const Router = useRouter()

    const handleChangePage = (text:any) => {
        console.log(text)
        if (!(text === '...')) {
            setCurrentPage(Number(text))
            Router.push({
                pathname: location?.pathname,
                query: {page:text}
            });
        }
    }
    return (
        <div
            style={{cursor:` ${text === '...' ? 'text' : 'pointer'}`}}
            className={text && currentPage && +text === +currentPage ? `${styles.active}` : `${styles.notActive} shadow`}
            onClick={()=>handleChangePage(text)}
        >
            {icon || text}
        </div>
    )
}

export default memo(PageNumber)