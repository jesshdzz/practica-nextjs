import Image from "next/image";
import { ElementoLateral } from "./ElementoLateral";
import { GiMouse } from "react-icons/gi";
import { ReactElement } from "react";


interface Props {
    elementos : { path: string; titulo: string; subtitulo: string; icono: ReactElement; }[]
}

export const BarraLateral = ({elementos} : Props) => {
    return (
        <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed left-0 h-screen overflow-y-scroll">
            <div id="logo" className="my-4 px-6">
                <GiMouse />
                <h1 className="text-lg md:text-2xl font-bold text-white">Dash<span className="text-blue-500">8</span>.</h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Bienvenido de nuevo,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image
                            width={40}
                            height={40}
                            className="rounded-full w-8 h-8"
                            src="https://pbs.twimg.com/media/Ft9C7ZeacAEapIY.jpg:large"
                            alt="" />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Chuchin
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">
                {
                    elementos.map((elemento, index) => (
                        <ElementoLateral    // (...elemento)
                            key = {index}
                            path = {elemento.path}
                            icon = {elemento.icono}
                            title = {elemento.titulo}
                            subtitle = {elemento.subtitulo} />
                    ))
                }
            </div>
        </div>
    );
}