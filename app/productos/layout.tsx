import React from "react";
import { BarraLateral } from "../components/BarraLateral";

import { FaBox } from "react-icons/fa";
import { BiPackage } from "react-icons/bi";
import { PiBeachBallFill } from "react-icons/pi";
import { CgPokemon } from "react-icons/cg";

const elementos = [
    {
        path: "/productos/cajas",
        titulo: "Cajas",
        subtitulo: "Cajas de carton",
        icono: <FaBox />
    },
    {
        path: "/productos/paquete",
        titulo: "paquetes",
        subtitulo: "Agarra tu paquete",
        icono: <BiPackage />
    },
    {
        path: "/productos/balones",
        titulo: "Balones",
        subtitulo: "Balones de futbol",
        icono: <PiBeachBallFill />
    },
    {
        path: "/productos/pokemon",
        titulo: "Pokemon",
        subtitulo: "Pokemones aleatorios",
        icono: <CgPokemon />
    }
];

export default function ProductosLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased selection:bg-blue-600 selection:text-white">
            <div className="flex flex-col relative w-screen">
                <BarraLateral elementos={elementos} />
                <div className="ml-64 p-4 text-red">
                    {children}
                </div>
            </div>
        </div>
    )
}