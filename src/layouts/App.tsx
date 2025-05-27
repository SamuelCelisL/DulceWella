import Carrusel from "../components/Carrusel/Carrusel"
import Social from "../ui/Social"

function App() {
  return (
    <>
      <nav className="text-center bg-[#fbe3bf] py-2">
        <div className="flex justify-center items-center">
          <img className="size-15" src="./logo.png" alt="" />
          <h1 className="text-4xl font-bold">DULCE WELLA</h1>
        </div>
        <h2 className="text-2xl cursive text-gray-800">"Dulces detalles, grandes recuerdos"</h2>
      </nav>
      <main>
        <div className="flex justify-center">
          <Carrusel />
        </div>
        <div className="flex flex-col items-center" >    
          <h1 className="bg-[#f5ca88] text-center font-bold text-2xl p-3 w-full">Descripcion</h1>
          <p className="text-justify max-w-[700px] text-lg py-5 px-3"><span className="font-bold"> Dulce Wella </span>Es una marca artesanal que transforma lo simple en irresistible. Nuestro producto estrella, <span className="font-bold"> arroz de chocolate </span> para cualquier momento del día</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="bg-[#f5ca88] text-center font-bold text-2xl p-3 w-full">Video</h1>
          <iframe 
            className="w-full h-[500px] max-w-[700px]" 
            src="https://www.youtube.com/embed/MPkSITpHpfQ" 
            title="YouTube video player" 
            // frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>

        </div>
      </main>
      <footer className="">
        <h1 className="bg-[#f5ca88] text-center text-3xl font-bold p-3">CONTACTANOS</h1>
        <Social />
      </footer>
    </>
  )
}

export default App
