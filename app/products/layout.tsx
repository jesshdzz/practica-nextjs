import { BarraLateral } from '../components/BarraLateral';
import { FaComputer } from "react-icons/fa6";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { BsSdCardFill } from "react-icons/bs";

const elementos = [
    {
        path: "/products/mostrador",
        titulo: "Contador",
        subtitulo: "Un contador de productos",
        icono: <BsArrowCounterclockwise />
    },
    {
        path: "/products/computers",
        titulo: "Computadoras",
        subtitulo: "Computadoras de escritorio",
        icono: <FaComputer />
    },
    {
        path: "/products/ssd",
        titulo: "SSD",
        subtitulo: "Discos duros de estado solido",
        icono: <BsSdCardFill />
    }
];

export default function MenuLayout({ children }: { children: React.ReactNode; }) {
    return (
        <div>
            <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
                <div className="flex flex-col relative w-screen">
                    <BarraLateral elementos={elementos} />
                    <div className='ml-64 p-4  text-slate-800'>
                        {children}
                    </div>

                </div>
            </div>
        </div>
    );
}

/*
snippets
https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets
https://marketplace.visualstudio.com/items?itemName=yuzu.snippets-next-13
*/