import { MenuEntry } from "./menuentry"

export class MenuManager {
    private static instance = new MenuManager()

    static getInstance() {
        return MenuManager.instance
    }


    entries: MenuEntry[] = [
        {
            key: "pancakes",
            label: "Pancakes mit Beeren",
            description: "5 leckere Pancakes mit einer Auswahl an Beeren. Serviert mit Sirup",
            image: "pancakes.jpg",
            price: 8.5
        },
        {
            key: "fries",
            label: "French Fries",
            description: "Hausgemachte Pommes Frites aus frischen Kartoffeln mit Yoppie Sauce",
            image: "fries.jpg",
            price: 3.5
        },
        {
            key: "penne",
            label: "Penne Nudeln",
            description: "Penne Nudeln in einer scharfen Sosse",
            image: "penne.jpg",
            price: 7.5
        },
        {
            key: "soup",
            label: "Kartoffel- und Kürbisuppe",
            description: "Suppe aus Kürbis und Kartoffeln, serviert mit Bauernbrot",
            image: "soup.jpg",
            price: 6.5
        },
        {
            key: "carpaccio",
            label: "Carpaccio vom Rind",
            description: "Carpaccio vom Rind, serviert mit Bauernbrot und Kapern",
            image: "carpaccio.jpg",
            price: 11.5
        },
        {
            key: "cheeseburger",
            label: "Cheeseburger",
            description: "200g Rindfleischpatty auf Brioche-Bunn, American-Cheese, Topics und Pommesfrites",
            image: "cheeseburger.jpg",
            price: 13.5
        },

    ]


}