'use client'

import Link from "next/link";
import Image from "next/image";

import { useModal } from "@/components/modalcontext";
import {usePathname} from "next/navigation";
import {countries} from "@/components/serviceson";
import Reviews from "@/components/reviews";
import Fag from "@/components/fag";
import Contacts from "@/components/contacts";

export default function OnasPage() {
    const { openModal } = useModal();
    const pathname = usePathname()
    const countryOrder = {"viza-v-polshu": 1, "viza-v-sloveniu": 2, "viza-v-germaniyu": 3, "viza-v-ispaniyu": 4};

    return (
        <div>
            <div className={"w-full relative flex flex-col lg:flex-row sm:flex-col justify-between"}>
                <div
                    className="mdd:relative lg:absolute sm:relative left-0 top-[200px] lg:top-[250px] mdd:top-[135px] w-full lg:w-1/2 text-left lg:text-left z-10 px-[7%] flex flex-col lg:gap-24 sm:gap-12 mdd:gap-12">
                    <nav className="mb-4 flex items-center space-x-2 text-gray-600 gap-2">
                        <Link href="/" className="text-orange-500 hover:underline active:scale-95 transition-transform duration-150 ease-in-out">Главная</Link>
                        <span><img className="w-2" src="/nav-icon.png" alt="" /></span>
                        {pathname === "/o-nas" ? (
                            <span className="font-semibold text-gray-900 cursor-default">О нас</span>
                        ) : (
                            <Link href="/o-nas" className="font-semibold hover:underline active:scale-95 transition-transform duration-150 ease-in-out">О нас</Link>
                        )}
                    </nav>
                    <h1 className="mdd:text-[40px] lg:text-[64px] md:text-[58px] sm:text-[48px] font-semibold text-black">
                        О НАС
                    </h1>
                </div>
                <div className="w-full lg:flex items-center mt-[20%] mdd:mt-[10%] lg:mt-0 relative z-5">
                    <Image
                        src="/visa-banner-new.png"
                        alt="Оформление виз с VisaVam.by – Легко и Доступно"
                        width={1000}
                        height={1000}
                        className="relative lg:top-[20%] sm:top-0 lg:w-[50%] lg:left-[45%] -z-50 mdd:hidden"
                    />
                    <Image src={"/visabanner-f.svg"} alt={""} width={1000}
                           height={1000} className="relative lg:top-[20%] sm:top-0 lg:w-[50%] lg:left-[45%] -z-50 sm:hidden"/>
                </div>
                <div className="lg:hidden absolute bottom-0 w-full px-[7%] pb-[15%] mdd:pb-[25%]">
                    <button
                        onClick={openModal}
                        className="bbbt relative w-[100%] bg-customBlue hover:bg-blue-600 text-white py-3 rounded-[2px] active:scale-95 transition-transform duration-150 ease-in-out">
                        Оформить заявку
                    </button>
                </div>
            </div>
            <div className="w-full relative ht:bottom-[30px] xl:bottom-[40px] lg:bottom-[60px]">
                <img
                    src={"onasmobile.JPG"}
                    alt=""
                    className="w-full h-96 object-cover px-0 lg:px-[7%] md:px-[7%] mdd:hidden"
                />
                <img
                    src={"onasmobile.JPG"}
                    alt=""
                    className="w-full object-cover px-0 lg:px-[7%] md:px-[7%] sm:hidden"
                />
            </div>
            <div className={"w-full relative flex flex-col gap-6 px-[7%] pt-20 text-[16px] mdd:text-[14px]"}>
                <div className={"w-[80%] mdd:w-full"}>
                    <p>
                        Компания Visa Vam представлена на рынке туристических услуг уже <strong>более 10 лет</strong>.<br/>
                        За это время наши специалисты сталкивались с разными случаями и находили индивидуальный подход для каждого клиента.<br/>
                        Годы успешной работы помогли нам создать базу постоянных клиентов, которая постоянно пополняется новыми благодарными клиентами.<br/>
                        Мы предлагаем помощь в оформлении различных типов виз во множество стран мира (страны Европы, США, Канада, Великобритания и т.д.).<br/>
                        Нашими клиентами являются как обычные туристы, так и целые организации, которые отправляют сотрудников в деловые поездки.<br/>
                        Также мы предлагаем помощь в открытии национальных виз для переезда на постоянное место проживания в Европе с целью учебы, работы, обмена опытом, женитьбы, воссоединения семьи и т.д.
                    </p>
                </div>
            </div>
            <div className={"flex flex-col gap-4 mt-2 p-[7%]"}>
                <h2 className="mdd:text-2xl sm:text-3xl lg:text-4xl font-medium mb-8 lg:mb-16 mdd:mb-4 pt-14">Оформление документов для
                    подачи на визы
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6 mdd:gap-2">
                    {Object.keys(countryOrder).map((countryKey, index) => {
                        const c = countries.find(c => c.url.toLowerCase() === countryKey);
                        if (!c) return null; // Пропускаем, если страны нет в списке

                        return (
                            <Link href={`/vizy/${c.url}`} key={index}>
                                <div
                                    className="bg-white border border-[#ECECEC] rounded-lg lg:rounded-[2px] overflow-hidden shadow-sm cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                    <img src={c.img} alt={c.name} className="w-full object-cover"/>
                                    <div
                                        className="lg:p-8 md:p-6 sm:p-4 mdd:py-4 mdd:pl-1 mdd:pr-1">
                                        <div className="flex flex-row justify-between items-center">
                                            <div className="flex sm:gap-2 mdd:gap-0.5 items-center">
                                                <img src={c.svg} alt={c.name} className="h-6"/>
                                                <p className="font-medium mdd:text-[14px] sm:text-lg md:text-xl lg:text-xl">
                                                    {c.name}
                                                </p>
                                            </div>
                                            <img className="lg:w-6 md:w-6 sm:w-6 mdd:hidden" src="/Line 5.png"
                                                 alt=""/>
                                            <img className={"mdd:w-3 dr:w-3 sm:hidden"} src={"/line123.png"}
                                                 alt={""}/>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
                <div className="sm:mt-6 text-center">
                    <Link href="/vizy">
                        <button
                            className="bg-customBlue sm:w-max mdd:w-full hover:bg-blue-600 text-white py-3 px-8 rounded-[2px] text-[16px] active:scale-95 transition-transform duration-150 ease-in-out">
                            Еще больше стран
                        </button>
                    </Link>
                </div>
            </div>
            <Reviews/>
            <Fag/>
            <Contacts/>
        </div>
    );
};