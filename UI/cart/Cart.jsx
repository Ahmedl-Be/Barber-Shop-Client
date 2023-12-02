"use client"
import { useState } from "react";
import style from "./cart.module.css";
import useUserContext from '@/hooks/useUserContext';
import OverLayout from "../overLayout/OverLayout";

const Cart = ({ service,itemsByCategory }) => {
    const { items,addItem } = useUserContext();
    const [resMessage,SetResMessage] = useState("")
    const [overlayActive, setOverlayActive] = useState(false);


    const addItemHandler = (Item) => {
    const isObjectInArray = items.some(item => item._id === Item._id);
        if(items.length >= 4){
            setOverlayActive(true)
            SetResMessage("Only 4 Packges at time")
            return
        }
        if(isObjectInArray){
            setOverlayActive(true)
            SetResMessage("Package already added")
            return
        }
        addItem(Item)
    }

    return (
        <div>
            <OverLayout 
            res={resMessage}
            overlayActive={overlayActive}
            setOverlayActive={setOverlayActive}
            />
            {itemsByCategory[service]?.map((ele, index) => (
                <div className={style.container} key={index}>
                    <div className={style.head}>
                        <h1 className={style.title}>{ele?.name}</h1>
                        <span className={style.price}>${ele.price}</span>
                    </div>
                    <p>{ele.title}</p>
                    <button className={style.btn}
                        onClick={()=>addItemHandler(ele)}
                    >Book Now</button>
                </div>
            ))}
        </div>
    )
}

export default Cart;