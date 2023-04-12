import React, { useEffect, useState } from 'react'
// import { PageNumber } from './PageNumber'
import PageNumber from './PageNumber'
import { useAppSelector } from '@/redux/hook'
import { number } from 'yup'
import {GrLinkNext} from 'react-icons/gr'
import { useRouter } from 'next/router'

interface IProps{
    total:number,
    data:[]
}

const Pagination:React.FC<IProps> = ({total,data}) => {
    const [arrPage, setArrPage] = useState<number[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [isHideEnd, setIsHideEnd] = useState(false)
    const [isHideStart, setIsHideStart] = useState(false)
    const searchParams:any= useRouter().query
  
    useEffect(() => {
        let page:number = searchParams.page
        page && +page !== currentPage && setCurrentPage(+page)
        !page && setCurrentPage(1)
    }, [searchParams])

    useEffect(() => {
        let maxPage = total && Math.ceil(total / 20 ) || 1
        let end = (currentPage + 2) > maxPage ? maxPage : (currentPage + 2)
        let start = (currentPage - 2) <= 1 ? 1 : (currentPage - 2)
        let temp:number[] = []
        for (let i = start; i <= end; i++) temp.push(i)
        setArrPage(temp)
        currentPage >= (maxPage - 2) ? setIsHideEnd(true) : setIsHideEnd(false)
        currentPage <= 3 ? setIsHideStart(true) : setIsHideStart(false)
        // 3 => 1 2 3 (1 ... 2 3)

    }, [total, total, currentPage])

    return (
        <div className='d-flex w-100 align-items-center justify-content-center gap-2 py-5'>
             {!isHideStart && <PageNumber setCurrentPage={setCurrentPage} text={1} />}
            {(!isHideStart && currentPage !== 4) && <PageNumber text={'...'} />}
            {arrPage.length > 0 && arrPage.map(item => {
                return (
                    <PageNumber
                        key={item}
                        text={item}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                )
            })}
            {!isHideEnd && <PageNumber text={'...'} />}
            {!isHideEnd && <PageNumber icon={<GrLinkNext stroke='white' />} setCurrentPage={setCurrentPage} text={total && data && Math.floor(total / data.length)} />} 
        </div>
    )
}

export default Pagination