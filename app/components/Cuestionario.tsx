import { Pregunta } from "./Pregunta";

const Preguntas = [
    {
        pregunta: "PREGUNTA 1?",
        respuesta: "RESPUESTA 1"
    },
    {
        pregunta: "PREGUNTA 2?",
        respuesta: "RESPUESTA 2"
    },
    {
        pregunta: "PREGUNTA 3?",
        respuesta: "RESPUESTA 3"
    },
    {
        pregunta: "PREGUNTA 4?",
        respuesta: "RESPUESTA 4"
    },
    {
        pregunta: "PREGUNTA 5?",
        respuesta: "RESPUESTA 5"
    }
];


export const Cuestionario = () => {
    return (
        <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
            <h1 className="text-center dark:text-white lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">Cuestionario</h1>
            <div className="lg:w-8/12 w-full mx-auto">
                {
                    Preguntas.map((pregunta, index) => (
                        <Pregunta key={index} id={index + 1} pregunta={pregunta.pregunta} respuesta={pregunta.respuesta} />
                    ))
                }
                <hr className="w-full lg:mt-10 my-8" />
            </div>
        </div>
    );
}