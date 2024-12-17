const Hero = () => {
    return (
        <>
            <section className="flex justify-center items-center w-full h-[88vh] bg-slate-600 bg-hero-background bg-cover">
                <div className="w-[60%] h-[30%] bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 rounded-md flex justify-center items-center text-white">
                    <div className="block text-center">
                    <h1 className="relative text-5xl text-white">Welcome and witness my shenanigans!</h1>
                    <h3 className="text-xl">Here I will demonstrate some magical concepts and libraries. Prepare yourself to be amazed</h3>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;