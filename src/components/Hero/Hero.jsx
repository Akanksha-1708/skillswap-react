

function Hero(){
    return(
        <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center justify-between px-6 py-16">
            <div className="max-w-xl">
                <h1 className="text-6xl font-extrabold leading-tight text-while">
                Exchange Skills.
                <br/>
                Learn Everything.
                </h1>

                <p className="mt-8 text-xl leading-9 text-blue-100">
                    Teach what you know and learn what you love.
                    <br/>
                    No money.
                    <br/>
                    Just skills.
                </p>

                <div className="mt-10 flex gap-5">
                    <button className="rounded-xl bg-blue-500 px-7 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:scale-105 hover:bg-blue-600">
                        Get Started Free
                    </button>
                    <button className="rounded-xl border-2 border-blue-400 px-7 py-4 font-semibold text-blue-300 transition duration-300 hover:bg-blue-500 hover:text-white">
                        Browse Skills
                    </button>
                </div>

            </div>

            <div>
                <img src="https://illustrations.popsy.co/gray/studying.svg" alt="Hero Illustration" className="w-[520px] animate-pulse"/>
            </div>
        </section>
    );
}

export default Hero;