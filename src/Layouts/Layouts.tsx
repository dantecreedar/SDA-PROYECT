import { BiCalendarEvent } from "react-icons/bi"; 
import { ImYoutube2 } from "react-icons/im"; 
import { AiFillInstagram } from "react-icons/ai"; 
import { BsFacebook } from "react-icons/bs"; 
import { FaBible } from "react-icons/fa"; 
import { Link, Outlet } from "react-router-dom"
import menu from "/src/Json/menu.json"
import HeaderB from "../Routes/HeaderB";

function Layouts() {
    return (
        <div>
            <div className="">
                <div className="flex justify-center"><h1 className="p-3">Jesus esta Buscandote!</h1></div>
                <div className="grid md:grid-cols-3 bg-black p-5 text-white ">
                    <div className="p-1"><div className="flex font-serif text-3xl">SDA <span className="pl-5 text-3xl"><FaBible /></span></div></div>
                        <ul className="flex justify-center flex-wrap">
                            {menu.map((item, index) => (
                                <li key={index} className="p-2 transition-all hover:underline hover:text-blue-500" id="#about">
                                    <Link to={item.path}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    <div className="p-2 flex gap-4 justify-end">
                        <a href="" className="md:text-md hover:underline hover:text-blue-500 cursor-pointer">Evento</a>
                        <a href="" className="text-xl cursor-pointer"><BsFacebook /></a>
                        <a href="" className="text-xl cursor-pointer"><AiFillInstagram /></a>
                        <a href="" className="text-xl cursor-pointer"><ImYoutube2 /></a>
                        
                    </div>
                </div>
                
            </div>
            
            <Outlet/>
            <HeaderB/>
        </div>
    )
}

export default Layouts