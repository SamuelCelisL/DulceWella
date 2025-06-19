import Carrusel from "../components/Carrusel/Carrusel"


function App() {
  return (
    <>
      <nav className="text-center bg-[#ff9800] py-2">
        <div className="flex justify-center items-center">
          <img className="size-15" src="./logo.png" alt="" />
          <h1 className="text-4xl font-bold">Dulce Wella</h1>
        </div>
        <h2 className="text-2xl cursive text-gray-800">"Dulces detalles, grandes recuerdos"</h2>
      </nav>
      <main>
        <div className="flex justify-center">
          <Carrusel />
        </div>
        <div className="flex flex-col items-center" >    
          <h1 className="bg-[#ff9800] text-center font-bold text-2xl p-3 w-full">Descripcion</h1>
            <div className="bg-orange-200 hover:bg-orange-300 p-4 m-8 rounded-4xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
              <p className="text-justify max-w-[500px] text-lg py-5 px-3 font-mono"><span className="font-bold">Dulce Wella</span> es una marca artesanal que transforma lo simple en irresistible. Nuestro producto estrella, <span className="font-bold"> arroz de chocolate </span> para cualquier momento del día.</p>
            </div>
        </div>
      </main>
    </>
  )
}

export default App
