import React, { useEffect } from 'react';
import styles from './Color.module.scss'
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { RootState } from '@/redux';
import { getColors } from '@/redux/features/app/appSilce';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Color = () => {
    const dispatch = useAppDispatch();
    const colors = useAppSelector((state: RootState) => state.app.colors)
    useEffect(()=>{
        dispatch(getColors())
    },[])
    return (
        <div>
            <ul className={`${styles.colors} ps-0`}>
                {
                    colors && colors.map((item,index)=>{
                        return(
                            <li key={index} style={{background:`${item.code}`}} data-tooltip-id="my-tooltip"
                            data-tooltip-content={item.title}></li>
                        )
                    })
                }
                
            </ul>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default Color;