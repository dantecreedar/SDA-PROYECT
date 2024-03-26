
function Home() {
    const bgImageStyle = {
        backgroundImage: 'url("/src/assets/corazon.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <div>
            <div className="p-5 text-white h-screen" style={bgImageStyle}>
                    <div>
                        <h2 className="text-7xl md:text-8xl p-5 font-semibold mt-24">
                        WE’RE <br />
                        STOKED <br />
                        YOU’RE HERE <br />
                        </h2>
                    </div>
                <div className="p-2">
                    <button className="p-5 border transition-all hover:bg-white hover:text-black hover:text-2xl">Involucrarse</button>
                    <button className="p-5 border transition-all hover:bg-white hover:text-black hover:text-2xl">See in Line</button>
                </div>
            </div>
            
            {/* segundo campo */}
            <div className='bg-white text-black grid  md:grid-cols-2'>
                <div className=''>
                    <div>
                        <h2 className="text-7xl md:text-8xl p-5 font-semibold mt-24">
                        You's <br />
                        100 % <br />
                        INVITATION! <br />
                        </h2>
                    </div>
                    <div className="p-5 mb-16">
                        <div className='text-xl p-5'>IS A HONOR YOU SELECTION A MOMENT IN THE WEEK FOR WE!</div>
                        <div className='text-xl p-5'>We a proposit heré is conocer a Jesús, permanecer curiosos sobre el mundo que nos rodea, y luego ir a vivir lo que Jesús nos enseñó.</div>
                    </div>
                </div>

                <div className='grid place-content-center pb-10'>
                    <div className='text-6xl p-5'>
                        UN LUGAR SEGURO <br />
                        PARA <br />
                        EXPLORA TU FE <br />
                    </div>
                </div>
            </div>

            {/* Tercer campo */}
            <div className='bg-black text-white grid  md:grid-cols-1'>
                <div className=''>
                    <div className='grid md:grid-cols-2'>
                        <div className='mt-20 grid place-items-center '>
                        <img src="/src/assets/flor.jpg" alt="Image" className='w-9/12 '/>
                        </div>
                        <h2 className="text-7xl md:text-6xl font-semibold mt-24 grid place-content-center">
                        ¿QUE SIGUE PARA TI? <br />
                        VER..<br />
                        HACER AMIGOS... <br />
                        </h2>
                        <br />
                        <div className='flex md:justify-center justify-start'>
                            <button className='p-5 border transition-all hover:bg-white hover:text-black'>Muestrame</button>
                            <button className='p-5 border transition-all hover:bg-white hover:text-black'>Quiero ver mas</button>
                        </div>
                    </div>
                    <div className="p-5 mb-16">
                        <div className='text-3xl p-5 text-center'>¡ES UN HONOR QUE ELIJA PASAR UNA HORA DE SU FIN DE SEMANA CON NOSOTROS!</div>
                        <div className='text-xl p-5 text-center'>Nuestro propósito aquí es conocer a Jesús,<br /> permanecer curiosos sobre el mundo que nos rodea, <br />y luego ir a vivir lo que Jesús nos enseñó.</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;