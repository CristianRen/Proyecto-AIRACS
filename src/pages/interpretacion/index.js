import "./globals.css";
import LayoutPrincipal from "@/components/menu-principal/layout-principal";
import radiografiasPacientes from "./array-objetos";

export default function Interpretacion() {
  return (
    <LayoutPrincipal login={true}>
      <div className="bg-white">
        <form action="/subida-informacion">
          <div>
            <strong className="flex justify-center uppercase underline py-4 text-2xl">
              Información del paciente
            </strong>
          </div>
          <section>
            <div className="border-2 border-violet-500 my-2 mx-20 p-2 ">
              <p className="mx-20 font-bold text-xl">
                Información del paciente:
              </p>
              <div className="flex justify-start space-x-6 mx-20 py-2 flex  md:flex-wrap sm:flex-wrap">
                <div>
                  <label className="uppercase font-bold" for="nombre">
                    Nombres:
                  </label>
                  <br />
                  <input
                    className="border to-black rounded-md bg-violet-100 p-1"
                    value={radiografiasPacientes[0].NOMBRES}
                  />
                  <br />
                </div>
                <div>
                  <label className="uppercase font-bold" for="apellido">
                    Apellidos:
                  </label>
                  <br />
                  <input
                    className="border to-black rounded-md bg-violet-100 p-1"
                    type="text"
                    value={radiografiasPacientes[0].APELLIDOS}
                  />
                  <br />
                </div>
                <div>
                  <label className="uppercase font-bold" for="id">
                    Tipo de identidad:
                  </label>
                  <br />

                  <select
                    className="border to-black bg-violet-100 p-1.5"
                    id="id"
                  >
                    <option value={radiografiasPacientes[0].TipoDocumento}>
                      Cedula
                    </option>
                    <option value="tj-id">Tarjeta de identidad</option>
                    <option value="Pasaporte">Pasaporte</option>
                    <option value="Otro">Otro Documento</option>
                  </select>
                </div>
                <div>
                  <label className="uppercase font-bold" for="#id">
                    Documento de identidad:
                  </label>
                  <br />
                  <input
                    className="border to-black rounded-md bg-violet-100 p-1"
                    type="number"
                    value={radiografiasPacientes[0].ID}
                  />
                  <br />
                </div>
                <div>
                  <label className="uppercase font-bold" for="sexo">
                    Sexo:
                  </label>
                  <br />
                  <select
                    className="border to-black bg-violet-100 p-1.5 "
                    id="id"
                  >
                    <option value="F">Femenino</option>
                    <option value="M">Másculino</option>
                  </select>
                </div>
              </div>

              <div
                name="Linea # 2"
                className="flex justify-start space-x-6  mx-20  flex md:flex-wrap sm:flex-wrap"
              >
                <div>
                  <label className="uppercase font-bold" for="edad">
                    Edad:
                  </label>
                  <br />
                  <input
                    type="number"
                    className="border to-black rounded-md bg-violet-100 p-1"
                    value={radiografiasPacientes[0].EDAD}
                  />
                  <br />
                </div>

                <div>
                  <label className="uppercase font-bold" for="altura">
                    Altura:
                  </label>
                  <br />
                  <input
                    type="number"
                    className="border to-black rounded-md bg-violet-100 p-1"
                    value={radiografiasPacientes[0].ALTURA}
                  />
                  <br />
                </div>

                <div>
                  <label className="uppercase font-bold" for="peso">
                    Peso:
                  </label>
                  <br />
                  <input
                    type="number"
                    className="border to-black rounded-md bg-violet-100 p-1"
                    value={radiografiasPacientes[0].PESO}
                  />
                  <br />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="border-2 border-violet-500 my-2 mx-20 p-2">
              <p className="mx-20 font-bold text-xl">
                Información del servicio:
              </p>
              <div className="flex justify-start space-x-6 mx-20 flex md:flex-wrap sm:flex-wrap">
                <div>
                  <label className="uppercase font-bold" for="servicio">
                    Servicio:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border to-black rounded-md bg-violet-100 p-1"
                    value={radiografiasPacientes[0].SERVICIO}
                  />
                  <br />
                </div>
                <div>
                  <label className="uppercase font-bold" for="procedimiento">
                    Procedimiento a realizar:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border to-black rounded-md bg-violet-100 p-1"
                    value={radiografiasPacientes[0].PROCEDIMIENTO}
                  />
                  <br />
                </div>
                <div>
                  <label className="uppercase font-bold" for="estudio">
                    Tipo de estudio:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border to-black rounded-md bg-violet-100 p-1"
                    value={radiografiasPacientes[0].ESTUDIO}
                  />
                  <br />
                </div>
                <div>
                  <label className="uppercase font-bold" for="servicio">
                    Servicio:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border to-black rounded-md bg-violet-100 p-1"
                    value={radiografiasPacientes[0].SERVICIO}
                  />
                  <br />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="border-2 border-violet-500 my-2 mx-20 p-2">
              <p className="mx-20 font-bold text-xl">Información del equipo:</p>
              <div className="flex justify-start space-x-6 mx-20 flex md:flex-wrap sm:flex-wrap">
                <div>
                  <label className="uppercase font-bold" for="equipo">
                    Equipo:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border to-black rounded-md bg-violet-100 p-1"
                    value={radiografiasPacientes[0].EQUIPO}
                  />
                  <br />
                </div>

                <div>
                  <label className="uppercase font-bold" for="marca">
                    Marca:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border to-black rounded-md bg-violet-100 p-1"
                    value={radiografiasPacientes[0].MARCA}
                  />
                  <br />
                </div>

                <div>
                  <label className="uppercase font-bold" for="modelo">
                    Modelo:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border to-black rounded-md bg-violet-100 p-1"
                    value={radiografiasPacientes[0].MODELO}
                  />
                  <br />
                </div>

                <div>
                  <label className="uppercase font-bold" for="serial">
                    Serial:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border to-black rounded-md bg-violet-100 p-1"
                    value={radiografiasPacientes[0].SERIAL}
                  />
                  <br />
                </div>

                <div>
                  <label className="uppercase font-bold" for="consultorio">
                    Consultorio:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border to-black rounded-md bg-violet-100 p-1"
                    value={radiografiasPacientes[0].CONSULTORIO}
                  />
                  <br />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="border-2 border-violet-500 my-2 mx-20 p-2 ">
              <p className="mx-20 font-bold text-xl">
                Información del estudio:
              </p>
              <div className="grid lg:grid-cols-4 gap-4 mx-20 grid md:grid-cols-1">
                <div>
                  <div>
                    <label className="uppercase font-bold" for="fecha">
                      Fecha Toma:
                    </label>
                    <br />
                    <input
                      type="text"
                      className="border to-black rounded-md bg-violet-100 p-1"
                      value={radiografiasPacientes[0].FECHA}
                    />
                    <br />
                  </div>
                  <div>
                    <label className="uppercase font-bold" for="dosis">
                      Dosis:
                    </label>
                    <br />
                    <input
                      type="number"
                      className="border to-black rounded-md bg-violet-100 p-1"
                      value={radiografiasPacientes[0].DOSIS}
                    />
                    <br />
                  </div>
                  <div>
                    <label className="uppercase font-bold" for="totalDosis">
                      Total Dosis:
                    </label>
                    <br />
                    <input
                      type="number"
                      className="border to-black rounded-md bg-violet-100 p-1"
                      value={radiografiasPacientes[0].totalDosis}
                    />
                    <br />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-lg">Tecnica de la imagen:</p>
                  <div>
                    <label className="uppercase font-bold" for="totalDosis">
                      KV :
                    </label>

                    <input
                      type="text"
                      className="border to-black rounded-md bg-violet-100 p-1"
                      value={radiografiasPacientes[0].KV}
                    />
                    <br />
                  </div>
                  <br />
                  <div>
                    <label className=" font-bold" for="ma">
                      mA :
                    </label>

                    <input
                      type="text"
                      className="border to-black rounded-md bg-violet-100 p-1"
                      value={radiografiasPacientes[0].MA}
                    />
                    <br />
                  </div>
                  <br />
                  <div>
                    <label className="font-bold" for="t(s)">
                      t(S) :
                    </label>

                    <input
                      type="text"
                      className="border to-black rounded-md bg-violet-100 p-1"
                      value={radiografiasPacientes[0].TIEMPO}
                    />
                    <br />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-lg">Número de tomas:</p>
                  <div>
                    <label className="uppercase font-bold" for="buenas">
                      Buenas :
                    </label>

                    <input
                      type="text"
                      className="border to-black rounded-md bg-violet-100 p-1"
                      value={radiografiasPacientes[0].tomasBuenas}
                    />
                    <br />
                  </div>
                  <br />
                  <div>
                    <label className="uppercase font-bold" for="mala">
                      Malas :
                    </label>

                    <input
                      type="text"
                      className="border to-black rounded-md bg-violet-100 p-1"
                      value={radiografiasPacientes[0].tomasMalas}
                    />
                    <br />
                  </div>
                  <br />
                  <div>
                    <label className="uppercase font-bold" for="Total">
                      Total :
                    </label>

                    <input
                      type="text"
                      className="border to-black rounded-md bg-violet-100 p-1"
                      value={radiografiasPacientes[0].TOTAL}
                    />
                    <br />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-lg">Causa repetición:</p>
                  <div>
                    <textarea
                      className="border to-black rounded-md bg-violet-100 p-1"
                      rows="6"
                      value={radiografiasPacientes[0].causaRepeticion}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="border-2 border-violet-500 my-2 mx-20 p-2 flex  md:flex-wrap sm:flex-wrap md:items-center 
            lg:justify-center xl:justify-center">
              <div className="">
                <div>
                  <p className="font-bold text-lg">
                    Información quien realizo la muestra
                  </p>
                  <div className="border-2 border-violet-500 p-4">
                    <div>
                      <label className="uppercase font-bold" for="nombre">
                        Nombre Completo:
                      </label>
                      <br />
                      <input
                        type="text"
                        className="border to-black rounded-md bg-violet-100 p-1"
                        value={radiografiasPacientes[0].NombreProfesional}
                      />
                      <br />
                    </div>
                    <div>
                      <label className="uppercase font-bold" for="cc">
                        Cedula:
                      </label>
                      <br />
                      <input
                        type="text"
                        className="border to-black rounded-md bg-violet-100 p-1"
                        value={radiografiasPacientes[0].documentoProfesional}
                      />
                      <br />
                    </div>
                    <div>
                      <label className="uppercase font-bold" for="cargo">
                        Cargo:
                      </label>
                      <br />
                      <input
                        type="text"
                        className="border to-black rounded-md bg-violet-100 p-1"
                        value={radiografiasPacientes[0].cargoProfesional}
                      />
                      <br />
                    </div>
                  </div>
                </div>
                <div >
                  <p className="font-bold text-lg ml-80" >Subir imagen</p>
                  <div className=" border-2 border-violet-500 ml-52">
                    <div>
                      <img
                        src={radiografiasPacientes[0].IMAGENES}
                        alt="Descripción de la imagen"
                        className="w-full h-52 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="flex justify-center">
            <button className="rounded-full bg-violet-500 text-white hover:bg-violet-200 hover:text-black p-4 my-2">
              Enviar información
            </button>
          </div>
        </form>
      </div>
    </LayoutPrincipal>
  );
}
