export default function UploadData() {
  return (
    <div className="bg-[#F4FFFE] border-2 border-indigo-100 ">
      <form action="/action.php">
        <div>
          <strong className="flex justify-center uppercase underline my-2">
            Registro pacientes
          </strong>
        </div>
        <section>
          <div
           
            className="border-2 border-indigo-200 my-2 mx-20 p-2 "
          >
            <p className="mx-20 font-bold text-xl">Información del paciente:</p>
            <div className="flex justify-start space-x-6 mx-20 py-2">
              <div>
                <label className="uppercase font-bold" for="nombre">
                  Nombres:
                </label>
                <br />
                <input
                  type="text"
                  className=" border to-black  bg-slate-200 p-1 "
                  placeholder="Escribe tus nombres"
                />
                <br />
              </div>
              <div>
                <label className="uppercase font-bold" for="apellido">
                  Apellidos:
                </label>
                <br />
                <input
                  className="border to-black bg-slate-200 p-1"
                  type="text"
                  placeholder="Escribe tus apellidos"
                />
                <br />
              </div>
              <div>
                <label className="uppercase font-bold" for="id">
                  Tipo de identidad:
                </label>
                <br />

                <select className="border to-black bg-slate-200 p-1.5" id="id">
                  <option value="tj-id">Tarjeta de identidad</option>
                  <option value="cc">Cedula</option>
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
                  className="border to-black bg-slate-200 p-1"
                  type="number"
                  placeholder="Escribe tu documento"
                />
                <br />
              </div>
              <div>
                <label className="uppercase font-bold" for="sexo">
                  Sexo:
                </label>
                <br />
                <select className="border to-black bg-slate-200 p-1.5 " id="id">
                  <option value="F">Femenino</option>
                  <option value="M">Másculino</option>
                </select>
              </div>
            </div>

            <div
              name="Linea # 2"
              className="flex justify-start space-x-6  mx-20  "
            >
              <div>
                <label className="uppercase font-bold" for="edad">
                  Edad:
                </label>
                <br />
                <input
                  type="number"
                  className=" border to-black  bg-slate-200 p-1  "
                  placeholder="Escribe tu edad"
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
                  className=" border to-black  bg-slate-200 p-1  "
                  placeholder="Escribe tu altura"
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
                  className=" border to-black  bg-slate-200 p-1  "
                  placeholder="Escribe tu peso"
                />
                <br />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="border-2 border-indigo-200 my-2 mx-20 p-2">
            <p className="mx-20 font-bold text-xl">Información del servicio:</p>
            <div className="flex justify-start space-x-6 mx-20">
              <div>
                <label className="uppercase font-bold" for="servicio">
                  Servicio:
                </label>
                <br />
                <input
                  type="text"
                  className=" border to-black  bg-slate-200 p-1 "
                  placeholder="Escribe el servicio"
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
                  className=" border to-black  bg-slate-200 p-1 "
                  placeholder="Escribe el procedimiento"
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
                  className=" border to-black  bg-slate-200 p-1 "
                  placeholder="Escribe el tipo de estudio"
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
                  className=" border to-black  bg-slate-200 p-1 "
                  placeholder="Escribe tus nombres"
                />
                <br />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="border-2 border-indigo-200 my-2 mx-20 p-2">
            <p className="mx-20 font-bold text-xl">Información del equipo:</p>
            <div className="flex justify-start space-x-6 mx-20">
              <div>
                <label className="uppercase font-bold" for="equipo">
                  Equipo:
                </label>
                <br />
                <input
                  type="text"
                  className=" border to-black  bg-slate-200 p-1 "
                  placeholder="Nombre del equipo"
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
                  className=" border to-black  bg-slate-200 p-1 "
                  placeholder="Nombre de la marca"
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
                  className=" border to-black  bg-slate-200 p-1 "
                  placeholder="Nombre del modelo"
                />
                <br />
              </div>

              <div>
                <label className="uppercase font-bold" for="serial">
                  Serial:
                </label>
                <br />
                <input
                  type="number"
                  className=" border to-black  bg-slate-200 p-1 "
                  placeholder="Número serial"
                />
                <br />
              </div>

              <div>
                <label className="uppercase font-bold" for="consultorio">
                  Consultorio:
                </label>
                <br />
                <input
                  type="number"
                  className=" border to-black  bg-slate-200 p-1 "
                  placeholder="Número del consultorio"
                />
                <br />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="border-2 border-indigo-200 my-2 mx-20 p-2 ">
            <p className="mx-20 font-bold text-xl">Información del estudio:</p>
            <div className="grid grid-cols-4 gap-4 mx-20 ">
              <div>
                <div>
                  <label className="uppercase font-bold" for="fecha">
                    Fecha Toma:
                  </label>
                  <br />
                  <input
                    type="date"
                    className=" border to-black  bg-slate-200 p-1 "
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
                    className=" border to-black  bg-slate-200 p-1 "
                    placeholder="Cantidad dosis"
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
                    className=" border to-black  bg-slate-200 p-1 "
                    placeholder="Cantidad de dosis total"
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
                    className=" border to-black  bg-slate-200 p-1 "
                    placeholder="Cantidad de dosis total"
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
                    className=" border to-black  bg-slate-200 p-1 "
                    placeholder="Cantidad de dosis total"
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
                    className=" border to-black  bg-slate-200 p-1 "
                    placeholder="Cantidad de dosis total"
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
                    className=" border to-black  bg-slate-200 p-1 "
                    placeholder="Cantidad de tomas buenas"
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
                    className=" border to-black  bg-slate-200 p-1 "
                    placeholder="Cantidad de tomas malas"
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
                    className=" border to-black  bg-slate-200 p-1 "
                    placeholder="Cantidad de tomas total"
                  />
                  <br />
                </div>
              </div>
              <div>
                <p className="font-bold text-lg">Causa repetición:</p>
                <div>
                  <textarea className=" bg-slate-200" rows="6"></textarea>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="border-2 border-indigo-200 my-2 mx-20 p-2">
            <div className="flex justify-around">
              <div>
                <p className="font-bold text-lg">
                  Información quien realizo la muestra
                </p>
                <div className="border-2 border-black p-4">
                  <div>
                    <label className="uppercase font-bold" for="nombre">
                      Nombre Completo:
                    </label>
                    <br />
                    <input
                      type="text"
                      className=" border to-black  bg-slate-200 p-1 "
                      placeholder="Ingrese nombre completo"
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
                      className=" border to-black  bg-slate-200 p-1 "
                      placeholder="Ingrese Cedula"
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
                      className=" border to-black  bg-slate-200 p-1 "
                      placeholder="Ingrese su cargo"
                    />
                    <br />
                  </div>
                </div>
              </div>
              <div>
                <p className="font-bold text-lg">Subir imagen</p>
                <div className="border-2 border-black p-20">
                  <input
                    type="file"
                    class="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                       file:bg-violet-200 file:text-violet-700
                       hover:file:bg-violet-100
                       p-2
                        "
                  />
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
  );
}
