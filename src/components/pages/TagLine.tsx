export default function TagLine() {
    return (
        <section className="relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0" />

            <div className="relative mx-auto flex min-h-[420px] max-w-[1600px] flex-col items-center px-6 py-2 sm:min-h-[480px] sm:px-10 lg:h-[530px] lg:flex-row lg:px-20 lg:py-0">

                {/* Left Content */}
                <div className="z-20 order-2 w-full text-center lg:order-1 lg:w-1/2 lg:text-left">
                    <h2
                        className="mx-auto w-[300px] text-[26px] leading-[1.3] font-normal text-[#E21175] sm:w-[480px] sm:text-[36px] md:max-w-[600px] md:text-[44px] lg:mx-0 lg:max-w-[700px] lg:text-[37px] lg:leading-[1.2]"
                    >
                        &quot;There is nothing like this..
                        <br />
                        Enjoy your nostalgia with us&quot;
                    </h2>
                </div>

                {/* Right Illustration */}
                <div className="relative order-1 flex h-[220px] w-full items-center justify-center sm:h-[300px] md:h-[360px] lg:absolute lg:right-0 lg:top-0 lg:order-2 lg:h-full lg:w-[62%]">
                    <img
                        src="/hero/tagline1.png"
                        alt="Bottle Illustration"
                        className="h-full w-auto object-contain select-none sm:h-[85%] lg:h-[92%]"
                        draggable={false}
                    />
                </div>
            </div>
        </section>
    );
}