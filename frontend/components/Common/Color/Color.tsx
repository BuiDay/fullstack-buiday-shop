import React, { useEffect } from 'react';
import styles from './Color.module.scss'
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { RootState } from '@/redux/store';
import { getColors } from '@/redux/features/app/appSilce';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import appService from '@/redux/features/app/appService';

const Color = () => {
    const dispatch = useAppDispatch();
    const colors = useAppSelector((state) => state.app?.colors || {})

    const handleColors = async () => {
        try {
            const resCategories = await appService.apiGetColors();
            if (resCategories)
                dispatch(getColors(resCategories));
        } catch (error) {
            console.log(error)
        };
    }
    useEffect(() => {
        handleColors()
    }, [])
    return (
        <div>
            <ul className={`${styles.colors} ps-0`}>
                {
                    colors && colors.map((item:any,index:number)=>{
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