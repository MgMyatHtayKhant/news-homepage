import { desktop, mobile } from "./assets/images";
import { devices, news } from "./data";

const Hero = () => {

    return (
        <>
            <main className="my-12 px-3 sm:px-6">
                <section className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-3">
                    <div className="justify-self-center md:col-start-1 md:col-end-3">
                        <picture>
                            <source media="(min-width: 40em)" srcSet={desktop} />
                            <img className="max-h-80 sm:max-h-none sm:w-full sm:h-full sm:object-cover sm:object-center" src={mobile} alt="Hero Image" />
                        </picture>
                    </div>
                    <div>
                        <h1 className="font-extrabold text-2xl md:text-4xl">
                            <span>The Bright</span> <span>Future of</span> Web 3.0?
                        </h1>
                    </div>
                    <div>
                        <p className="text-dark-grayish-blue text-[15px]">
                            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                            But is it really fulfilling its promise?
                        </p>
                        <button className="mt-4 text-[15px] bg-soft-red text-slate-50 font-semibold py-2 px-5 hover:bg-very-dark-blue">
                            READ MORE
                        </button>
                    </div>
                    <div className="bg-very-dark-blue pt-6 px-4 pb-2 mt-8 
                md:mt-0 md:col-start-3 md:row-start-1 md:row-end-3">
                        <h2 className="text-soft-orange font-bold mb-5 text-xl md:text-3xl">New</h2>
                        {
                            news.map((each, index) => (
                                <div key={each.title} className={`
                                ${index != 0 ?
                                        'pt-4 border-slate-50 border-t-2' : null
                                    } pb-4 space-y-2
                            `}>
                                    <a href="#" className="text-white font-semibold hover:text-soft-orange">{each.title}</a>
                                    <p className="text-grayish-blue text-[15px]">{each.paragraph}</p>
                                </div>
                            ))
                        }
                    </div>
                </section>
                <section className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
                    {
                        devices.map(device => (
                            <div key={device.id} className="flex gap-4">
                                <div>
                                    <img className="max-h-40 lg:max-h-28" src={device.imgURL} alt="" />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <h3 className="text-2xl font-bold text-grayish-blue">{device.id}</h3>
                                    <a href="#" className="text-[15px] font-bold hover:text-soft-red">{device.title}</a>
                                    <p className="text-[15px] text-dark-grayish-blue">{device.paragraph}</p>
                                </div>
                            </div>
                        ))
                    }
                </section>
            </main>
            <footer className="text-center text-sm px-3">
                Challenge by <a className="font-semibold" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a className="font-semibold" href="https://github.com/MgMyatHtayKhant?tab=repositories" target="_blank">Saul</a>.
            </footer>
        </>
    );
};

export default Hero;