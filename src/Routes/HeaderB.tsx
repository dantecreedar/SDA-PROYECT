import { AiFillInstagram } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { ImYoutube2 } from "react-icons/im"


function HeaderB() {
    return (
        <div className="p-10 bg-black">
            <div className="">
                <div className="bg-black text-white p-2">
                    <hr className="" />
                    <br />
                    <div className="p-3">
                        <ul className="flex flex-wrap justify-around">
                            <li className="p-2">
                                <div className="text-3xl font-semibold">Encuentranos</div>
                                <p className="text-sm">Iglesia de Hill City 2101 Maywill St.Va Richmond, 23230</p>
                            </li>
                            <li className="p-2">
                                <div className="text-3xl font-semibold">Envianos un correo</div>
                                <p className="text-sm">info@hillcityrva.com</p>
                            </li>
                            <li className="p-2">
                                <div className="text-3xl font-semibold">Cultos</div>
                                <p className="text-sm">Miercoles, Sabados y Domingos</p>
                            </li>
                        </ul>
                    </div>
                    <br />
                    <hr />
                </div>
                    <div className="bg-black text-white text-end text-md p-5">
                        <div className="text-3xl">SDA encuentranos siempre</div>
                        <div className="flex justify-center gap-4 p-2">
                            <a href="" className="text-3xl cursor-pointer"><BsFacebook /></a>
                            <a href="" className="text-3xl cursor-pointer"><AiFillInstagram /></a>
                            <a href="" className="text-3xl cursor-pointer"><ImYoutube2 /></a>
                        </div>
                    </div>
            </div>

            <footer className="bg-black text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                    <div className="text-sm">
                        <p className="">Hill City Church es una iglesia no confesional en Richmond, Virginia.</p>
                        <p className="">Iglesia de Hill City 2101 Maywill St.Va Richmon 23230 </p>
                    </div>
                    <div className="text-sm p-2">
                        &copy; 2022 SDA. Todos los derechos reservados.
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default HeaderB
