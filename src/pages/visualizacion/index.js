import "./globals.css";
import Layout from "./layout";
import usuarios from "./array-objetos";
export default function UploadData() {
  return (
    <Layout>
      <section className="bg-[#F4FFFE]">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <ul className="grid gap-4 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {usuarios.map((user) => {
              return <Card user={user}></Card>;
            })}
          </ul>
        </div>
      </section>
    </Layout>
  );
}

function Card(props) {
  return (
    <li>
      <a
        href="#"
        className="bg-white block rounded-lg p-4 shadow-lg shadow-indigo-100"
      >
        <img
          alt="Home"
          src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-full rounded-md object-cover"
        />

        <div className="mt-2">
          <dl>
            <div>
              <dt className="sr-only">Address</dt>

              <dd className="text-black text-center font-medium">
                {props.user.NOMBRES}
              </dd>
            </div>
            <div>
              <dt className="sr-only">Price</dt>

              <dd className="text-sm text-gray-500 text-center">
                ID {props.user.ID}
              </dd>
            </div>
          </dl>

          <div className="mt-6 flex items-center gap-8 text-xs justify-center">
            <button className="rounded-full bg-violet-500 text-white hover:bg-violet-200 hover:text-black p-4 my-2">
              Visualizar paciente
            </button>
          </div>
        </div>
      </a>
    </li>
  );
}
