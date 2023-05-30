'use client';
import LayoutPrincipal from "@/components/menu-principal/layout-principal";
import "./estilo-inicio-sesion.css"
import Link from "next/link";
import { useState } from "react";

export default function InicioSesion() {
    const [botonactivo, setbotonactivo] = useState({ usuario: "", contrasena: "" });

    const usuarios = [{ nombre: "camila", clave: "1234" }]

    const handleChange = (evento) => {
        console.log(evento.target.value);
        setbotonactivo({
            ...botonactivo,
            [evento.target.name]: evento.target.value
        })
    }

    const onSubmit = () => {
        console.log(botonactivo);
        //     return (
        //      ? <Link href="/subida-informacion/subida-informacion"></Link> : <h3>"CONTRASEÑA INVALIDA"</h3>
        //     )
    }

    const comparacion = () => {
        console.log(botonactivo);
        if (botonactivo.usuario == usuarios.nombre) {
            console.log(true)
        }
        //     return (
        //      ? <Link href="/subida-informacion/subida-informacion"></Link> : <h3>"CONTRASEÑA INVALIDA"</h3>
        //     )
    }


    return (
        <LayoutPrincipal>
            <>
                <div className="bg-white h-64"></div>
                <div className="bg-white flex items-baseline justify-center">
                    <div className="mt-100 rounded-lg bg-[#B799FF] w-2/5 py-10 px-10 shadow-2xl">
                        <div className="-mt-20 border border-[#B799FF]-600 bg-white rounded-lg  shadow-xl">
                            <form>
                                <h3 className="p-5 w-full text-center text-3xl font-bold text-gray-900">INICIAR SESIÓN</h3>

                                <label for="user">
                                    <h3 className="mx-10 my-1 text-lefth text-xl font-bold text-gray-900">USUARIO:</h3>
                                </label>
                                <input className=" mx-10 w-5/6 border to-black rounded-md bg-slate-200 p-1 "
                                    placeholder="Escriba su nombre de usuario" type="texto" id="" name="usuario" value={botonactivo.usuario} onChange={handleChange} required /><br /><br />
                            </form>

                            <label for="razon-social">
                                <h3 className="mx-10 my-1 text-lefth text-xl font-bold text-gray-900">CONTRASEÑA:</h3>
                            </label>
                            <input className=" mx-10 w-5/6 border to-black rounded-md bg-slate-200 p-1 "
                                    placeholder="Escriba su contraseña" type="password" id="contrasena" name="contrasena" value={botonactivo.contrasena} onChange={handleChange} required /><br /><br />

                            <div className="flex flex-row justify-center">
                                <p className="olvido-registro"><Link style={{
                                    textDecoration: 'underline', color: 'black',
                                }} href=" ">Olvidó su <br></br>contraseña?</

                                Link></p>
                                <p className="olvido-registro"><Link style={{
                                    textDecoration: 'underline', color: 'black',
                                }} href=" ">Registrarse?</Link></p>
                            </div>
                            <div className="flex justify-center ">
                                {/* <input className={`${botonactivo.button}  w-1/3 rounded-full bg-[#B799FF] text-white hover:bg-violet-200 hover:text-black p-4 my-2`} id="submit-botom" type="submit" value="Ingresar" on={onSubmit}
                                    onDoubleClick={comparacion}></input> */}
                                    <a href="/subida-informacion" className= "w-1/3 rounded-full bg-[#B799FF] text-white hover:bg-violet-200 hover:text-black p-4 my-2 text-center" id="submit-botom" type="submit" value="Ingresar" >Ingresar</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white h-64"></div>
            </>
        </LayoutPrincipal>
    )
}