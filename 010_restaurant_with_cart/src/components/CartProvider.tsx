"use client"
import { Cart } from '@/data/cart';
import { MenuEntry } from '@/data/menuentry';
import { MenuManager } from '@/data/menumanager';
import React, { ReactNode, createContext, useContext, useState } from 'react';


export type CartContextType = {
    content: Cart
    addToCart: (entry: MenuEntry, n: number, absoluteValue?: boolean) => void
    getTotalItemCount: () => number
    getTotal:() => number
}


export const CartContext = createContext<CartContextType>({} as any)

export function useCart() {
    return useContext(CartContext)
}

export function CartProvider(props: { children?: ReactNode }) {
    const c: Cart = {
        items: [
            /*
            {
                count: 5,
                menuEntry: MenuManager.getInstance().entries[2]
            }
            */
        ]
    }
    const [cart, setCart] = useState(c)

    const context: CartContextType = {

        content: cart,

        addToCart: (entry, n, absoluteValue?) => {
            const newCart: Cart = {
                items: [...cart.items]
            }
            let item = newCart.items.find(i => i.menuEntry.key == entry.key)
            if (!item) {
                item = {
                    count: 0,
                    menuEntry: entry
                }
                newCart.items.push(item)
            }
            if (absoluteValue) {
                item.count = n
            } else {
                item.count += n
                if (item.count < 0) {
                    item.count = 0
                }
            }
            //newCart.items = newCart.items.filter(i => i.count > 0)
            //console.table(newCart.items)
            setCart(newCart)
        },
        
        getTotalItemCount: () => {
            return cart.items.reduce((s, item) => s += item.count, 0)
        },

        getTotal: () => {
            return cart.items.reduce((s, item) => s += item.count * item.menuEntry.price, 0)
        }
    }

    return (
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    )
}

