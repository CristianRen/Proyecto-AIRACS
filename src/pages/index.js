import LayoutPrincipal from "../components/menu-principal/layout-principal";
import quienesSomos from "../components/menu-principal/array-quienes";
import nuestrosServicios from "../components/menu-principal/array-servicios";
import "./estilo-principal.css"

export default function PaginaPrincipal() {
    return (
        <div className="">
            <LayoutPrincipal>
                <div>
                    <div className="bg-transparent h-64" id="img-div"></div>
                    <div className="h-auto p-5 flex flex-col items-center justify-between border border-gray-100 shadow-xl  bg-white" id="quienes">
                        <div className="mb-10 flex flex justify-center items-center mt-4 text-lg font-bold text-gray-900 text-4xl text-center" id="titulo-quienes-nuestros"><h1>QUIÉNES SOMOS?</h1></div>
                        <div className="flex flex-row justify-center justify-around grid gap-4 grid-cols-3 grid " id="bloques-quienes-nuestros">
                            {quienesSomos.map(elemento => {
                                return <QuienesSomos titulo={elemento.Titulo} descripcion={elemento.DESCRIPCION}></QuienesSomos>
                            })}
                        </div>
                    </div>
                    <div className="bg-transparent h-64" id="img-div" ></div>
                    <div className="p-5 flex flex-col items-center justify-between border border-gray-100 shadow-xl  bg-white" id="nuestros">
                        <div className="mb-10 flex flex justify-center items-center mt-4 text-lg font-bold text-gray-900 text-4xl text-center" id="titulo-quienes-nuestros"><h1>NUESTROS SERVICIOS</h1></div>
                        <div className="flex flex-row justify-center justify-around grid gap-4 grid-cols-3 grid " id="bloques-quienes-nuestros">
                            {nuestrosServicios.map(elemento => {
                                return <NuestrosServicios imagen1={elemento.imagen1} titulo1={elemento.Titulo1} descripcion1={elemento.descripcion1}></NuestrosServicios>
                            })}
                        </div>
                    </div>
                    <div className="bg-transparent h-64" id="img1-div" ></div>
                    <div className="bg-transparent flex items-baseline justify-center" id="img1-div">
                        <div className=" bg-[#ACBCFF] w-2/5 py-10 px-10 shadow-xl">
                            <div className="-mt-20 bg-white shadow-xl" id="contactanos">
                                <form>
                                    <h3 className=" p-5 w-full text-center text-3xl font-bold text-gray-900">CONTACTANOS</h3>

                                    <label for="nit">
                                        <h3 className="mx-10 my-1 text-lefth text-xl font-bold text-gray-900" >NIT:</h3>
                                    </label>
                                    <input className=" mx-10 w-5/6 border to-black rounded-md bg-slate-200 p-1 "
                                        placeholder="Escribe tu NIT" type="number" id="nit" name="nit" required /><br /><br />
                                </form>

                                <label for="razon-social">
                                    <h3 className="mx-10 my-1 text-lefth text-xl font-bold text-gray-900">RAZON SOCIAL:</h3>
                                </label>
                                <input className=" mx-10 w-5/6 border to-black rounded-md bg-slate-200 p-1 " placeholder="Escribe el nombre de la empresa" type="text" id="razon-social" name="razon-social" required /><br /><br />

                                <label for="ciudad">
                                    <h3 className="mx-10 my-1 text-lefth text-xl font-bold text-gray-900">CIUDAD:</h3>
                                </label>
                                <input className=" mx-10 w-5/6 border to-black rounded-md bg-slate-200 p-1 " placeholder="Escribe ciudad de residencia" type="text" id="ciudad" name="ciudad" required /><br /><br />

                                <label for="direccion">
                                    <h3 className=" mx-10 my-1 text-lefth text-xl font-bold text-gray-900">DIRECCIÓN:</h3>
                                </label>
                                <input className=" mx-10 w-5/6 border to-black rounded-md bg-slate-200 p-1 " placeholder="Escribe tu dirección" type="text" id="direccion" name="direccion" required /><br /><br />

                                <label for="telefono">
                                    <h3 className="mx-10 my-1 text-lefth text-xl font-bold text-gray-900">TELÉFONO:</h3>
                                </label>
                                <input className=" mx-10 w-5/6 border to-black rounded-md bg-slate-200 p-1 " placeholder="Escribe tu número de contacto" type="text" id="telefono" name="telefono" required /><br /><br />

                                <label for="correo">
                                    <h3 className="mx-10 my-1 text-lefth text-xl font-bold text-gray-900">CORREO ELECTRÓNICO:</h3>
                                </label>
                                <input className=" mx-10 w-5/6 to-black rounded-md bg-slate-200 p-1 " placeholder="Escribe tu correo corporativo" type="text" id="correo" name="correo" required /><br /><br />

                                <div className="flex flex-row">
                                    <input className=" mx-10 w-5 border to-black rounded-md bg-slate-200 p-1 " type="radio" id="agree" name="agree" required /><br /><br />
                                    <label className="mr-10 my-1 mt-2 text-justify text-l text-gray-500" for="agree" required>Aceptar políticas de tratamiento de datos</label>

                                </div>
                                <div className="flex justify-center">
                                    <input className=" w-1/3 rounded-full bg-violet-500 text-white hover:bg-violet-200 hover:text-black p-4 my-2" type="submit" value="Enviar"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </LayoutPrincipal>
        </div>
    )
}

function QuienesSomos(props) {
    return (
        <div
            className="bg-gradient-to-r from-pink-500 via-[#B799FF] to-[#B799FF] p-1 shadow-xl flex justify-center" id="bordeado"
        >
            <a className="block bg-white lg:p-8" href="">
                <div className="my-5 mx-2">
                    <h3 className="text-center text-2xl font-bold text-gray-900">
                        {props.titulo}
                    </h3>

                    <p className="mt-2 text-justify text-l text-gray-500">
                        {props.descripcion}
                    </p>
                </div>
            </a>
        </div>
    )
}

function NuestrosServicios(props) {
    return (

        <div className=" w-5/6 border-[#B799FF] border-x-[#B799FF] bg-white-800 border-4 border-[#B799FF] border-y-[#B799FF] p-4 flex items-center flex-col">
            <div className="flex items-center gap-4">
                <img
                    alt="rayosX"
                    src={props.imagen1}
                    className="flex h-24 w-24 rounded-full object-cover"
                />
            </div>

            <ul className="mt-4 space-y-2">
                <li>
                    <a
                        href="#"
                        className="block w-full h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
                    >
                        <p className="w-full text-center text-xl font-bold text-gray-900">{props.titulo1}</p>

                        <p className="w-full mt-2 text-justify text-l text-gray-500">
                            {props.descripcion1}
                        </p>
                    </a>
                </li>
            </ul>
        </div>
    )
}
  