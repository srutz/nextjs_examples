"use client"
import { Cart } from '@/data/cart';
import { MenuEntry } from '@/data/menuentry';
import { MenuManager } from '@/data/menumanager';
import React, { ReactNode, createContext, useContext, useState } from 'react';



const CartContext = createContext({} as any)


export function CartProvider(props: { children?: ReactNode }) {
    const c: Cart = {
        items: [
            {
                count: 5,
                menuEntry: MenuManager.getInstance().entries[2]
            }
        ]
    }
    const [cart, setCart] = useState(c);

    const addToCart = (entry: MenuEntry, n: number) => {
        const newCart: Cart = {
            items: [...cart.items]
        }
        let item = newCart.items.find(i => i.menuEntry.key == entry.key)
        if (!item) {
            item = {
                count: 0,
                menuEntry: entry
            }
        }
        item.count += n
        newCart.items = newCart.items.filter(i => i.count > 0)
        setCart(newCart)
    }

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {props.children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}