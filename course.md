---
title: Next.js
author: Stepan Rutz
date: 30.11.2023
fontsize: 9pt
...


# Next.js

- React + Serverside Rendering (SSR) + Static Website Generation 

- Based on
  - HTML
  - Javascript
  - Typescript
  - JSX
  - React
  - CSS
  - Webpack
  - HTTP


# Learning resources

- Javascript/CSS/HTML
  - [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)

- Typescript
  - [Typescript](https://www.typescriptlang.org/)
  - [Typescript-Playground](https://www.typescriptlang.org/play)

- React / JSX
  - [React.dev](https://react.dev/)
- Next.js
  - [Next.js Documentation](https://nextjs.org/docs)
  - [Next-Learn](https://github.com/vercel/next-learn/)

- Data
  - [Dummy Json Data](https://dummyjson.com/)
  

# Good Tutorials and Podcasts

## Tutorials
- [Net Ninja Modern React](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d)
- [12 React mistakes](https://www.youtube.com/watch?v=-yIsQPp31L0)
- [CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

## Podcasts
- [Syntax](https://www.syntax.fm/)
- [Podrocket](https://podrocket.logrocket.com/)




# Alternativen

- Zu React ... Angular, Vue.js, SvelteKit, Solid.js

# Erweiterungen, Gui Libs

- Rest/Http: Axios
- UI: Carbon, Chakra-UI, React-Bootstrap, TailwindCSS, Mantine, Bulma
- Fonts,Icons: React-Icons, Google-Fonts
- Testing: Jest, Cypress, Vitest
- Development: Eslint, Prettier

# Workshop 1, Typescript und React

Inhalte:

1. Komponenten in React und JSX erstellen
2. CSS-Klassen mit CSS-Modules
3. Wiederholung 
   - Destructuring, Spread und Rest
   - ?: Operator
   - && und ??
   - Arrays map, reduce, find
4. Typsichere Props (ReactNode, PropsWithChildren)
5. Typsichere Styles (CSSProperties)
6. Typisierung von States (Primitives und Objekte) (useState)
7. Typisierung von Event-Handlern
8. Typisierung von References (useRef)

# Typsichere Props

```
import { ReactNode } from "react"
export type ExampleProps = {
    stringValue: string
    numericValue: number
    booleanValue: boolean
    optionalValue?: string
	children: ReactNode
}
export function Example(props: ExampleProps) {
    const { 
        stringValue, 
        numericValue, 
        booleanValue, 
        optionalValue = "standard" // initialize default
    } = props
    return (
		<div>stringValue={stringValue}...
			<div>{props.children}</div>
		</div>
    )
}
```

# Typsichere Events

```
import { MouseEvent } from "react"

export function Example() {
    const divclick = (e: MouseEvent<HTMLDivElement>) => {
        const nativeEvent = e.nativeEvent
    }

    return (
        <div onClick={divclick}>Click me</div>
    )
}
```

# Typsichere Refs

```
import { useEffect, useRef } from "react"

export function Example() {

    const myref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        console.log(myref.current)
    }, [])

    return (
        <div ref={myref}>Click me</div>
    )
}
```

# Typsichere State-Objekte

```
import { MouseEvent, useState } from "react"

type UserForm = {
    firstname: string; lastname: string; email: string
}

export function Example() {
    const[userForm,setUserFrom] = useState<UserForm>()
    const onDivClick = (e: MouseEvent<HTMLDivElement>) => {
        const newUserForm: UserForm = {
            firstname: "Karl",
			lastname: "Hansen",
			email: "hans@karl.de"
        }
        setUserFrom(newUserForm)
    }
    return (<div onClick={onDivClick}>
        Email={userForm?.email??"nicht gesetzt"}</div>)
}
```


# Standalone React Projekte erstellen

Wenn man etwas einfach testen will oder nur React benötigt, dann
empfiehlt sich Vite. Hier Beispiel für Typescript
   
```
npm create vite@latest \
  001_helloworld -- --template react-ts
cd 001_helloworld
npm install
```

danach mit HMR entwickeln:

```
npm run dev
```


# Next.js

Was ist SSR und Next.js in a nutshell

Pseudocode
```
/* handle request on the server */
const app = express()
app.handleRequest(request => {
    const s = loadScript(request)
    if (is_serverside(s)) {
        /* here all of node.js is available
         * but nothing from the browser (=client) */
        return runAndRenderIntoString(s) 
    } else {
        /* script is not executed but send to the
         * browser (=client) */
        return s
    }
})
```


# Workshop 2, Next.js

Anlegen einer Next.js Anwendung mit

```
npx create-next-app@latest
```

```
npx next telemetry status
```

```
npx next telemetry disable
```


# Agenda Next.js Basics

- CSS Modules verwenden
- Routing
  - Erstellen eines Layouts (Flexbox)
  - Nagivation erstellen
  - Links verwenden
  - Routen definieren
  - Parallel Routes
  - Intercepting Routes
  - Special Pages (Error, Loading etc)

- Icons einbinden
- Font einbinden
- Bilder einbinden
- APIs mittels route.ts

# Workshop 2 (continued), Next.js


- Suspense (and fallback)
- Caching (prerendered static content)\
  ```export const dynamic = "force-dynamic"```\
  ```fetch option next.cache: "no-cache"```\
  ```fetch option next.revalidate: 3600```\
- There are 2 caches on the server
  - Full route cache
  - Data caches
- and 1 Cache for Routes on the client



# Workshop 3, Next.js und React

- Interaktion (useState, useEffect)
- Warenkorb implementieren (useContext)
- 3rd Party GUI Komponenten einbinden
- Modale Dialogs, Toasts


# Workshop 3, Next.js + Carbon

- Serverside Rendering
- Serverside Datafetching
- Markdown

# How to add carbon

Carbon benutzt SASS

Projekt anpassen:

```
npm i --save-dev sass
npm install -S @carbon/react
```

Styles inkludieren:

**globals.css** umbenennen zu **globals.scss** und oben folgendes einfügen:

```
@use '@carbon/react';
```

Und je nach Komponente eine Client-Boundary schaffen (```"use client"```)


# Workshop 4, Next.js

- APIs mittels route.ts (revisited)
- Serverside Rendering
- Serverside Datafetching
- Markdown















