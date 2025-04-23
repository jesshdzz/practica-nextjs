'use client';
import React, { useState } from 'react';

interface Props {
    id: number;
    pregunta: string;
    respuesta: string;
}

export const Pregunta = ({ id, pregunta, respuesta }: Props) => {
    const [esVisible, setEsVisible] = useState(false);

    const cambiarVisibilidad = () => {
        setEsVisible(!esVisible);
    };

    return (
        <div>
            <hr className="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />
            <div className="w-full md:px-6">
                <div id="mainHeading" className="flex justify-between items-center w-full">
                    <div className="">
                        <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 md:leading-4 text-gray-800">
                            <span className="lg:mr-6 mr-4 dark:text-white lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                                Q{id}.
                            </span>
                            {pregunta}
                        </p>
                    </div>
                    <button onClick={cambiarVisibilidad} aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" data-menu>
                        {(esVisible)
                            ? <img className="transform rotate-180" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg" alt="toggler" />
                            : <img className="transform rotate-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg" alt="toggler" />}
                    </button>
                </div>
                {esVisible && (
                    <div id="menu" className=" mt-6 w-full">
                        <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">{respuesta}</p>
                    </div>
                )}
            </div>
        </div>
    );
}