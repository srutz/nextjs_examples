
import Link from "next/link";
import { Spacer } from "./Spacer"
import { BsRecycle } from "react-icons/bs"


export function Navbar() {
    console.log("rendering navbar")
    return (
        <nav className="row-container gap centeritems padding">
            <div className="app-title">Meine App</div>
            <BsRecycle></BsRecycle>
            <Spacer width={16}></Spacer>
            <Link href="/">Main Page</Link>
        </nav>
    )
}
