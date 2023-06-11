import React from 'react';
import { AiFillDelete } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'
import { GrFormSubtract } from 'react-icons/gr'
import styles from './CartPage.module.scss'

const CartItem = () => {
    return (
            <tr className={styles.cart_data}>
                <td></td>
                <td className='py-3'>
                    <p></p>
                    <p>Color:afdsdaf</p>
                </td>
                <td className='text-center py-3'>
                    <h5 className={styles.cart_data_price}>$ 100</h5>
                </td>
                <td className='d-flex align-items-center justify-content-center py-3 gap-3'>
                    <div className='d-flex align-items-center'>
                        <AiOutlinePlus style={{ cursor: "pointer" }} />
                        <input disabled type="text" className='form-control text-center' style={{ width: "60px" }} />
                        <GrFormSubtract style={{ cursor: "pointer" }} />
                    </div>
                    <div className={styles.icon_del}>
                        <AiFillDelete />
                    </div>
                </td>
                <td className='text-center py-3'>
                    <h5 className={styles.cart_data_price}>$ 100</h5>
                </td>
            </tr>
    );
};

export default CartItem;