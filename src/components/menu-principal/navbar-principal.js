import Imagen from "next/image";
import Link from "next/link";
export default function NavbarPrincipal() {
    return (
        <header aria-label="Site Header" className="bg-white">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">


                
                <a className="block text-teal-600" href="/">
                    <span className="sr-only">Inicio</span>
                    <div className="flex flex-row justify-center items-center text-5xl">
                     <div>   
                    <Imagen className="logo-compania" src="/imagenes/logo.avif" alt="logo" width={65} height={65}></Imagen>
                    </div>
                    <div>
                    <h1 className="text-[#B799FF] font-bold">AIRACS</h1>
                    </div>
                    </div>
                </a>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Site Nav" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <Link
                                    className="text-gray-500 transition hover:text-[#ACBCFF]"
                                    href="/"
                                >
                                    Inicio
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-gray-500 transition hover:text-[#ACBCFF]"
                                    href="/#quienes"
                                >
                                ¿Quiénes Somos?
                                </Link>
                            </li>

                            <li>
                                <a
                                    className="text-gray-500 transition hover:text-[#ACBCFF]"
                                    href="/#nuestros"
                                >
                                    Nuestros servicios
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-500 transition hover:text-[#ACBCFF]"
                                    href="/#img1-div"
                                >
                                    Contáctanos
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <a
                                className="block rounded-md bg-[#B799FF] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#ACBCFF]"
                                href="/inicio-sesion"
                            >
                                Iniciar sesión
                            </a>

                            <a
                                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#B799FF] transition hover:text-[#ACBCFF] sm:block"
                                href="/"
                            >
                                Registrarse
                            </a>
                        </div>

                        <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                            <span className="sr-only">Toggle menu</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}