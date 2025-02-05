"use client"

import Contacts from "@/components/contacts";
import Link from "next/link";
import {notFound, useParams} from 'next/navigation';
import {countries} from '@/components/serviceson';
import Steps from "@/components/steps";
import Docs from "@/components/docs";
import {useState} from "react";
import Image from "next/image";

export default function CountryPage({params}) {
    const {country} = useParams();
    const selectedCountry = countries.find(c => c.url === country);
    const priorityCountries = ["greece", "slovenia", "germany", "spain"];

    // Найти текущую страну в списке
    const currentCountry = countries.find(c => c.url === country);

    // Определяем, нужно ли ограничивать список стран
    const isLimited = currentCountry?.good === 0;
    const [showAll, setShowAll] = useState(!isLimited); // Если ограничение, скрываем

    // Определяем список отображаемых стран
    const displayedCountries = showAll ? countries : countries.slice(0, 4);

    const sortedCountries = [...displayedCountries].sort((a, b) => {
        const aPriority = priorityCountries.includes(a.url) ? 0 : 1;
        const bPriority = priorityCountries.includes(b.url) ? 0 : 1;
        return aPriority - bPriority;
    });

    if (!selectedCountry) {
        return notFound();
    }

    return (
        <div className={"flex flex-col items-center"}>
            <div className={"w-full relative flex justify-between"}>
                <div
                    className="lg:absolute left-0 top-1/2 w-full lg:w-1/2 text-left lg:text-left z-10 px-[7%] flex flex-col gap-24">
                    <nav className="mb-4 flex items-center space-x-2 text-gray-600 gap-2">
                        <Link href="/" className="text-orange-500 hover:underline">Главная</Link>
                        <span><img className={"w-2"} src={"/nav-icon.png"} alt={""}/></span>
                        <Link href="/visa" className="text-orange-500 hover:underline">Визы</Link>
                        <span><img className={"w-2"} src={"/nav-icon.png"} alt={""}/></span>
                        <Link href="/visa/" className={""}>{selectedCountry.name}</Link>
                    </nav>
                    <h1 className="text-7xl lg:text-7xl font-semibold text-black uppercase">
                        Виза в {selectedCountry.name}
                    </h1>
                </div>
                <div className="w-full lg:flex items-center -mt-[30%] lg:mt-0 relative z-5">
                    <img
                        src="/visa-c.png"
                        alt=""
                        className="relative lg:top-[10%] lg:w-[50%] lg:left-[45%]"
                    />
                </div>
            </div>
            <img src={"/country-banner.png"} alt={""} className={"w-max px-[7%]"}/>
            {selectedCountry.good !== 0 ? (
                <div className={"w-full"}>
                    <Steps/>
                    <div className={"px-[7%]"}>
                        {["poland", "slovenia", "germany", "spain", "france", "usa", "netherland", "greece", "hungary", "romania", "austria"].includes(selectedCountry.url) && (
                            <div className="py-24 flex flex-col gap-8 w-[60%]">
                                {selectedCountry.title &&
                                    <h1 className="text-black text-4xl font-medium">{selectedCountry.title}</h1>}
                                {selectedCountry.text1 &&
                                    <p className="text-black text-xl font-medium">{selectedCountry.text1}</p>}
                                {selectedCountry.variants && selectedCountry.variants.length > 0 && (
                                    <ul className="text-black text-lg font-medium flex flex-col gap-2">
                                        {selectedCountry.variants.map((variant, index) => (
                                            <li key={index} className="flex gap-2">
                                                <img className="w-6 h-6" src="/check-0.png" alt=""/>
                                                {variant}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {selectedCountry.text2 &&
                                    <p className="text-black text-xl font-medium">{selectedCountry.text2}</p>}
                                {selectedCountry.text3 &&
                                    <p className="text-black text-xl font-medium">{selectedCountry.text3}</p>}
                                {selectedCountry.text4 &&
                                    <p className="text-black text-xl font-medium">{selectedCountry.text4}</p>}
                                {selectedCountry.text5 &&
                                    <p className="text-black text-xl font-medium">{selectedCountry.text5}</p>}
                                {selectedCountry.title2 &&
                                    <h1 className="text-black text-4xl font-medium">{selectedCountry.title2}</h1>}
                                {selectedCountry.variants2 && selectedCountry.variants2.length > 0 && (
                                    <ul className="text-black text-lg font-medium flex flex-col gap-2">
                                        {selectedCountry.variants2.map((variant, index) => (
                                            <li key={index} className="flex gap-2">
                                                <img className="w-6 h-6" src="/check-0.png" alt=""/>
                                                {variant}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}

                    </div>
                    <Docs/>
                </div>
            ) : (
                <div className="px-[7%] flex flex-col gap-10 items-center">
                    {["litva", "latvia", "italy", "greatbritain"].includes(selectedCountry.url) && (
                        <div className="py-24 flex flex-col gap-8 items-center w-[60%]">
                            {selectedCountry.title &&
                                <h1 className="text-[#F86F00] text-[40px] font-medium">{selectedCountry.title}</h1>}

                            <div className="flex flex-col gap-6">
                                {selectedCountry.text1 &&
                                    <p className="text-black text-2xl font-medium">{selectedCountry.text1}</p>}
                                {selectedCountry.text2 &&
                                    <p className="text-black text-2xl font-medium">{selectedCountry.text2}</p>}
                                {selectedCountry.variants && selectedCountry.variants.length > 0 && (
                                    <ul className="list-disc list-inside text-black text-2xl font-medium flex flex-col gap-2">
                                        {selectedCountry.variants.map((variant, index) => (
                                            <li key={index} className="flex gap-2">
                                                <img className="w-6 h-6" src="/check-0.png" alt=""/>
                                                {variant}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {selectedCountry.text3 &&
                                    <p className="text-black text-2xl font-medium">{selectedCountry.text3}</p>}
                            </div>

                        </div>
                    )}

                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {sortedCountries.map((c, index) => (
                            <Link href={`/visa/${c.url}`} key={index}>
                                <div
                                    className="bg-white border border-[#ECECEC] rounded-lg lg:rounded-[2px] overflow-hidden shadow-sm cursor-pointer">
                                    <img src={c.img} alt={c.name} className="w-full object-cover"/>
                                    <div className="lg:p-8 p-6">
                                        <div className="flex flex-row justify-between items-center">
                                            <div className="flex gap-2 items-center">
                                                <img src={c.svg} alt={c.name} className="h-6"/>
                                                <p className="font-medium text-xl">{c.name}</p>
                                            </div>
                                            <img className="w-8" src="/Line 5.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {/* Кнопка "Еще больше стран" */}
                    {isLimited && !showAll && (
                        <div className="mt-8 text-center">
                            <button
                                onClick={() => setShowAll(true)}
                                className="bg-customBlue w-max hover:bg-blue-500 text-white py-4 px-8 rounded-[2px] text-[16px]"
                            >
                                Еще больше стран
                            </button>
                        </div>
                    )}
                </div>
            )}
            <Contacts/>
        </div>
    );
}
