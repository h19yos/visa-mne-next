'use client'

import {useEffect, useState} from "react";
import { countries } from "@/components/serviceson";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [showAllCountries, setShowAllCountries] = useState(false);

    // Проверяем ширину экрана
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize(); // Проверяем на начальной загрузке
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Ограничиваем список стран для мобильных
    const displayedCountries = isMobile && !showAllCountries ? countries.slice(0, 8) : countries;

    return (
        <section id="services" className="px-[7%]">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {displayedCountries.map((country, index) => (
                    <Link href={`/visa/${country.url}`} key={index}>
                        <div className="bg-white border border-[#ECECEC] rounded-lg lg:rounded-[2px] overflow-hidden shadow-sm cursor-pointer
                            transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                            <img src={country.img} alt={country.name} className="w-full object-cover"/>
                            <div className="lg:p-8 md:p-6 sm:p-4 mdd:py-4 mdd:pl-2 mdd:pr-2">
                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex gap-2 items-center">
                                        <img src={country.svg} alt={country.name} className="h-6"/>
                                        <p className="font-medium mdd:text-[16px] dr:text-[14px] sm:text-lg md:text-xl lg:text-xl">
                                            {country.name}
                                        </p>
                                    </div>
                                    <img className="lg:w-8 md:w-8 sm:w-6 mdd:w-4 dr:w-3" src="/Line 5.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {isMobile && !showAllCountries && (
                <div className="mt-8 text-center">
                    <Link href="/visa">
                        <button
                            className="bg-customBlue w-max hover:bg-blue-500 text-white py-4 px-8 rounded-[2px] text-[16px] active:scale-95 transition-transform duration-150 ease-in-out">
                            Еще больше стран
                        </button>
                    </Link>
                </div>
            )}
        </section>
    );
};

export default Services;