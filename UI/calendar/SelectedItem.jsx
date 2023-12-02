"use client"
import React from 'react'
import useUserContext from '@/hooks/useUserContext';
import style from "./Calendar.module.css"

const SelectedItem = () => {
    const { items,removeItem } = useUserContext();
    const totalPriceArr = items.map((ele)=>{
            return ele.price
        })

    const totalPrice = () => {
        if(totalPriceArr.length < 1){
            return 0
        }
        return totalPriceArr.reduce((acc,current)=>acc+current)
    }

    return (
        <section className={style.package}>
            <h1 className={style.packageHeader}>YOUR PACKAGE</h1>
            {items.length > 0 ?
            <div className={style.packageItems}>
                {items.map((ele, index) => (
                    <div key={index} className={style.singlePackage}>
                        <div className={style.singlePackageHeader}>
                            <h1>{ele.name}</h1>
                            <span>${ele.price}</span>
                        </div>
                        <button className={style.packageDeleteBtn}
                        onClick={()=>removeItem(ele._id)}
                        >Delete</button>
                    </div>))}
            </div> :
            <h1 className={style.emptyPackage}>Please Select a package </h1>}
            <p className={style.packagePrice}>Total Price : ${totalPrice()}
            </p>
        </section>
    )
}

export default SelectedItem;