import LandingHeader from "../components/header/LandingHeader"

export function AboutPage() {

  return (
    <>
      <LandingHeader />
      <body style={{ overflow: 'hidden' }}>
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">

        {/* Sección de "Acerca de nosotros" */}
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Acerca de nosotros</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 mb-4">En Acarreos Appa, combinamos la magia y el poder de la naturaleza con la tecnología para ofrecerte una experiencia de transporte única y majestuosa. Inspirados por el icónico Bisonte Volador de la serie "Avatar: La leyenda de Aang", hemos creado un servicio de acarreos que une a las cuatro naciones: Aire, Agua, Fuego y Tierra, con la ayuda de estos magníficos seres y sus dedicados cuidadores.</p>
                      <p className="font-normal text-base leading-6 text-gray-600">En Acarreos Appa, nuestros Bisontes Voladores no solo transportan tus pertenencias, sino que también llevan consigo la esencia de los valores que han unido a las naciones: la armonía, el respeto y la sostenibilidad. Con un equipo de expertos cuidadores, nos aseguramos de que cada viaje sea seguro, cómodo y memorable, tanto para ti como para nuestros queridos Bisontes.</p>
                </div>
                <div className="w-full lg:w-8/12">
                    <img className="w-full h-full" src="https://i.pinimg.com/564x/71/f4/6c/71f46c575f49b2e399ed3964025aaccc.jpg" alt="Mapa del mundo de Avatar" />
                </div>
            </div>

        {/* Sección de "Nuestra historia" */}
            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Nuestra historia</h1>
                    <p className="font-normal text-base leading-6 text-gray-600">Después de la derrota del Señor del Fuego, el mundo entró en una era de paz y colaboración. A medida que las naciones comenzaron a reconstruir y fortalecer sus lazos, la necesidad de un transporte seguro, eficiente y respetuoso con el medio ambiente se hizo evidente. Así nació Acarreos Appa, una empresa que se compromete a conectar a las personas y sus bienes de una manera que honra a la naturaleza y la tradición.</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center items-center">
                    <div className="p-4 pb-6 flex flex-col justify-center items-center">
                      <img className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full" src="https://media.licdn.com/dms/image/v2/C4D03AQHDDzmJEZNASg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1584502344167?e=1729123200&v=beta&t=swSUE1N3Pg8Kqavcw_lt3IU7KsuDeSbJ6-qJZ28_hWo" alt="Sebastián Valencia Zapata" />
                      <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Sebastián Valencia Zapata</p>
                      <p className="font-normal text-base leading-5 text-gray-600">Ingeniería de Sistemas e Informática</p>
                      <p className="font-normal text-base leading-5 text-gray-600">Universidad Nacional de Colombia</p>
                    </div>
                    <div className="p-4 pb-6 flex flex-col justify-center items-center">
                      <img className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full" src="https://media.licdn.com/dms/image/v2/D4E03AQGHF1gLkJq2kg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723481508775?e=1729123200&v=beta&t=zTd_tjUR5OQplzXj21jJ5xS3aQHm8PsC6QPhiLMtbkc" alt="Alejandra Uribe Sierra" />
                      <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Alejandra Uribe Sierra</p>
                      <p className="font-normal text-base leading-5 text-gray-600">Ingeniería de Sistemas e Informática</p>
                      <p className="font-normal text-base leading-5 text-gray-600">Universidad Nacional de Colombia</p>
                    </div>
                  </div>
                </div>
            </div>

        </div>
    </body>
    </>
  )
}