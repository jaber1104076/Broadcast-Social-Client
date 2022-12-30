import React, { useEffect, useState } from 'react';
import AboutModal from '../AboutModal/AboutModal';

const About = () => {
    const [about, setAbout] = useState({})
    const [click, setClick] = useState(null)
    const [refresh, setRefresh] = useState(false)
    useEffect(() => {
        fetch('https://social-media-platform-server-five.vercel.app/about')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAbout(data[0])
            })
    }, [refresh])

    return (
        <div>
            <section className="bg-gray-600 text-gray-100">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className='flex justify-end'>
                        <label onClick={() => setClick(about)} htmlFor="booking-modal" className="hover:text-gray-100 bg-gradient-to-r from-[#00B4DB] to-[#0083B0] text-white px-5 py-3 rounded-md cursor-pointer">Edit</label>
                    </div>
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-400">
                                <h3 className="text-xl font-semibold">{about.name}</h3>
                                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Mern Stack Developer</span>
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                                    <h3 className="text-xl font-semibold tracking-wide">Email</h3>
                                    <p className="mt-3">{about.email}</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                                    <h3 className="text-xl font-semibold tracking-wide">University</h3>
                                    <p className="mt-3">{about.university}</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                                    <h3 className="text-xl font-semibold tracking-wide">Address</h3>
                                    <p className="mt-3">{about.Address}</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            {click &&
                <AboutModal
                    about={about}
                    setClick={setClick}
                    setRefresh={setRefresh}
                    refresh={refresh}
                ></AboutModal>}
        </div>
    );
};

export default About;