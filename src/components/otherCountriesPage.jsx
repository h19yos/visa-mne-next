'use client'

import React, { useMemo, useState, Suspense, lazy } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound, useParams, usePathname } from 'next/navigation';
import { motion } from "framer-motion";
import { countries } from '@/data/countries';
import { otherCountries } from "@/components/serviceson";
import { useModal } from "@/components/modalcontext";
import Breadcrumbs from "@/components/Breadcrumbs";
import Discount from "@/components/discount";
import TakePrice from "@/components/TakePrice";

// Lazy-loaded components
const Contacts = lazy(() => import("@/components/contacts"));
const Docs = lazy(() => import("@/components/docs"));
const PhoneForm = lazy(() => import("@/components/newModal"));
const Slider = lazy(() => import("@/components/slider"));
const NewStepsCountries = lazy(() => import("@/components/newStepsCountries"));

// FAQ Component
const FAQ = ({ countryUrl }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const faqData = faqDataByCountry[countryUrl] || [];

    const toggleFAQ = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    if (!faqData.length) return null;

    return (
        <div className="pt-32 mdd:pt-20 px-[7%]">
            <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold mb-8 lg:mb-12">Часто задаваемые вопросы</h2>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqData.map((faq) => ({
                        "@type": "Question",
                        "name": `ВОПРОС: ${faq.question}`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": `ОТВЕТ: ${faq.answer}`
                        }
                    }))
                }, null, 2)}
            </script>
            <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <div key={index} className="mdd:text-[16px] text-[16px] border rounded-[30px] mdd:rounded-[55px]">
                        <button
                            className="flex justify-between items-center w-full bg-orange-500 rounded-full text-white py-4 px-6 font-medium text-left focus:outline-none"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span>В: {faq.question}</span>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-6 w-6 rotate-icon ${openIndex === index ? "open" : ""}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </span>
                        </button>
                        {openIndex === index && (
                            <div
                                className="mdd:text-[16px] text-[16px] bg-white rounded-full py-4 px-6 text-gray-700"
                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

// FAQ data (unchanged)
const faqDataByCountry = {
    "viza-v-ssha": [
        {
            question: "Как белорусу получить визу в США?",
            answer: "Посольство США в Минске не принимает заявления на новые визы от граждан Беларуси с 2020 года. Чтобы получить визу в США, белорусам необходимо обращаться в американские консульства в других странах, например, в Польше, Литве, Казахстане или Турции. Процесс включает заполнение онлайн-анкеты DS-160, оплату консульского сбора и обязательное прохождение собеседования с консулом."
        },
        {
            question: "Сколько денег нужно для визы в США?",
            answer: "Для получения визы в США белорусам необходимо оплатить консульский сбор, который составляет 185 долларов США для большинства неиммиграционных виз (например, туристических, деловых, студенческих). Помимо консульского сбора, вам также потребуется подтвердить свою финансовую состоятельность, чтобы показать, что у вас достаточно средств для покрытия расходов во время пребывания в США и возвращения домой. Конкретная сумма не установлена, но она должна быть достаточной для подтверждения стабильного финансового положения."
        },
        {
            question: "Сколько ждать собеседование на визу в США?",
            answer: "Сроки ожидания собеседования могут сильно варьироваться в зависимости от страны, выбранной для подачи визового заявления, и типа визы. И может составлять от 2 недель до 2 месяцев."
        }
    ],
    "viza-v-velikobritaniyu": [
        {
            question: "Можно ли получить британскую визу сейчас?",
            answer: "Да, белорусы могут получить британскую визу в настоящее время. Для этого необходимо подать документы в Визовый центр Великобритании в Минске. Важно, что Великобритания выдает только многократные визы (на 6 месяцев, 2 года, 5 или 10 лет), но каждое пребывание ограничено 6 месяцами."
        },
        {
            question: "Сколько стоит виза в Великобританию для белорусов?",
            answer: "Стоимость британской визы для белорусов зависит от её типа и запрашиваемого срока действия, так как Великобритания выдает многократные визы. Консульский сбор за стандартную гостевую визу на 6 месяцев составляет около £127. Дополнительно оплачивается сервисный сбор визового центра, а также могут быть доступны платные услуги, такие как ускоренное рассмотрение."
        },
        {
            question: "Что нужно белорусу для поездки в Англию?",
            answer: "Для поездки в Англию белорусу обязательно нужна британская виза. Потребуется действующий паспорт, фото, подтверждение финансовой состоятельности и цели поездки, а также документы, доказывающие намерение вернуться на родину. Все подаваемые документы должны быть переведены на английский язык."
        },
        {
            question: "Сколько денег должно быть на счету для визы в Великобританию?",
            answer: "Для получения визы в Великобританию не установлено строго фиксированной минимальной суммы, которая должна быть на счету. Однако, важно продемонстрировать, что у вас есть достаточно средств для покрытия расходов на поездку и пребывание в Великобритании, а также для возвращения домой. Обычно рекомендуется иметь на счету сумму от £1,500 до £2,500 на поездку."
        }
    ],
    "viza-v-kitaj": [
        {
            question: "Нужна ли белорусу виза в Китай?",
            answer: "Нет, белорусам не всегда нужна виза в Китай. Между Беларусью и Китаем действует безвизовый режим для владельцев обычных паспортов, позволяющий находиться в Китае до 30 дней за одну поездку, но не более 90 дней в календарном году. Если вы планируете более длительное пребывание или другую цель визита (работа, учеба), тогда виза необходима."
        },
        {
            question: "Сколько стоит сделать визу в Китай в Беларуси?",
            answer: "Стоимость визы в Китай для белорусов включает консульский сбор, который зависит от кратности визы: от $30 за однократную до $90 за годовую многократную."
        },
        {
            question: "Можно ли находиться в Китае 10 дней без визы?",
            answer: "Да, граждане Беларуси могут находиться в Китае без визы в течение 10 дней. Между Беларусью и Китаем действует соглашение о взаимном безвизовом режиме, которое позволяет пребывать в стране до 30 дней за одну поездку, но не более 90 дней суммарно в течение календарного года."
        },
        {
            question: "Можно ли получить визу в Китай онлайн?",
            answer: "На сегодняшний день (май 2025 года) получить полноценную электронную визу в Китай для белорусов, которая выдавалась бы полностью онлайн без посещения консульства, нельзя."
        },
        {
            question: "Какая сумма должна быть на счету для визы в Китай?",
            answer: "Для получения визы в Китай, если вы не относитесь к категории работающих заявителей, вам необходимо предоставить выписку с банковского счёта из расчета 100 долларов США на каждый день поездки. Это требование касается студентов, безработных, пенсионеров и самозанятых. Для работающих заявителей, как правило, подтверждение дохода не требуется."
        }
    ]
};

// Reusable PriceTable component
const PriceTable = ({ country, parseText }) => (
    <>
        {/* Desktop Table (md: and above) */}
        <div className="overflow-x-auto w-full mdd:hidden">
            <table className="w-full border-collapse">
                <colgroup>
                    <col className="w-1/3"/>
                    <col className="w-1/3"/>
                    <col className="w-1/3"/>
                </colgroup>
                <thead>
                <tr>
                    <th className="border border-[#CEE2FA] bg-[#F0F6FF] px-4 py-3 text-left font-semibold text-gray-700 w-1/3">
                        Услуга / Сбор
                    </th>
                    <th className="border border-[#CEE2FA] bg-[#F0F6FF] px-4 py-3 text-left font-semibold text-gray-700 w-1/3">
                        Стоимость
                    </th>
                    <th className="border border-[#CEE2FA] bg-[#F0F6FF] px-4 py-3 text-left font-semibold text-gray-700 w-1/3">
                        Примечание
                    </th>
                </tr>
                </thead>
                <tbody>
                {country.priceTable &&
                    country.priceTable.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? '' : 'bg-gray-50'}>
                            <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">{row.service}</td>
                            <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">{row.cost}</td>
                            <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">{parseText(row.note)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        {/* Mobile Table (below md:) */}
        <div className="overflow-x-auto w-full md:hidden">
            <table className="w-full border-collapse">
                <colgroup>
                    <col className="w-1/2"/>
                    <col className="w-1/2"/>
                </colgroup>
                <thead>
                <tr>
                    <th className="border border-[#CEE2FA] bg-[#F0F6FF] px-4 py-3 text-left text-[14px] font-semibold text-gray-700 w-1/2">
                        Услуга / Сбор
                    </th>
                    <th className="border border-[#CEE2FA] bg-[#F0F6FF] px-4 py-3 text-left text-[14px] font-semibold text-gray-700 w-1/2">
                        Стоимость
                    </th>
                </tr>
                </thead>
                <tbody>
                {country.priceTable &&
                    country.priceTable.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? '' : 'bg-gray-50'}>
                            <td className="border border-[#CEE2FA] px-4 py-3 text-[14px] text-gray-700">{parseText(row.serviceMob)}</td>
                            <td className="border border-[#CEE2FA] px-4 py-3 text-[14px] text-gray-700">{parseText(row.costMob)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
);

// Reusable WhoItSuitsTable component
const WhoItSuitsTable = ({ country, parseText, excludedCountries1, china }) => (
    <div className="overflow-x-auto w-full">
        <table className="w-full border-collapse">
            <colgroup>
                <col className="w-1/2"/>
                <col className="w-1/2"/>
            </colgroup>
            <thead>
            <tr>
                <th className="border border-[#CEE2FA] bg-[#F0F6FF] px-4 py-3 text-left text-[14px] font-semibold text-gray-700 w-1/2">
                    {excludedCountries1.includes(country.url) ? "Категории граждан" : "Типы визы"}
                </th>
                <th className="border border-[#CEE2FA] bg-[#F0F6FF] px-4 py-3 text-left text-[14px] font-semibold text-gray-700 w-1/2">
                    Цель поездки
                </th>
            </tr>
            </thead>
            <tbody>
            {country.matchTable &&
                country.matchTable.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? '' : 'bg-gray-50'}>
                        <td className="border border-[#CEE2FA] px-4 py-3 text-[14px] text-gray-700">{parseText(row.typeviza)}</td>
                        <td className="border border-[#CEE2FA] px-4 py-3 text-[14px] text-gray-700">{parseText(row.goaltrip)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

// Reusable components (same as previous optimization)
const RippleButton = ({ onClick, children }) => (
    <button
        onClick={onClick}
        className="bbbt relative overflow-hidden w-full bg-customBlue hover:bg-blue-600 text-white py-3 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] active:scale-95 transition-transform duration-150 ease-in-out"
    >
        {[0, 1, 2].map((i) => (
            <motion.span
                key={i}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0, opacity: 1.5 }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                    repeatDelay: 0.5,
                    delay: i * 0.4,
                }}
            >
                <span className="absolute w-4 h-4 bg-gray-300 bg-opacity-40 rounded-full"/>
            </motion.span>
        ))}
        {children}
    </button>
);

const CountryBreadcrumbs = ({ country, pathname, excludedCountries1 }) => (
    <nav className="mb-4 mdd:text-xs flex items-baseline sm:space-x-2 mdd:space-x-0 text-gray-600 gap-2">
        <Link href="/"
              className="text-orange-500 hover:underline active:scale-95 transition-transform duration-150 ease-in-out">
            Главная
        </Link>
        <Image src="/nav-icon.png" alt=">" width={8} height={8} className="w-2"/>
        <span className="font-semibold text-gray-900 cursor-default inline-flex flex-wrap m-0">
            {excludedCountries1.includes(country.url)
                ? country.n
                : country.n.includes("в ") || country.n.includes("во ")
                    ? country.n
                    : `Виза ${country.n === "Францию" ? "во" : "в"} ${country.n}`}
        </span>
    </nav>
);

const VariantsList = ({ variants }) => (
    <ul className="text-black text-[14px] flex flex-col gap-2">
        {variants.map((variant, index) => (
            <li key={index} className="flex gap-2 items-center">
                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                {parseText(variant)}
            </li>
        ))}
    </ul>
);

const VisaTypeButtons = ({ types, links, enabled = [] }) => (
    <>
        {types.map((text, index) => (
            <div key={index} className="flex flex-col items-start">
                {enabled[index] ? (
                    <Link
                        href={`/${links[index]}`}
                        className="sm:w-full mdd:w-full text-[14px] text-center lg:w-72 bg-customBlue text-white py-3 px-8 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] hover:bg-blue-600 active:scale-95 transition-transform duration-150 ease-in-out"
                    >
                        {text}
                    </Link>
                ) : (
                    <div
                        className="sm:w-full mdd:w-full text-[14px] text-center lg:w-72 bg-customBlue text-white py-3 px-8 rounded-full cursor-not-allowed pointer-events-none select-none">
                        {text}
                    </div>
                )}
            </div>
        ))}
    </>
);

const parseText = (text) => {
    if (typeof text !== "string") return text || "";
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, index) =>
        index % 2 === 1 ? <b key={index}>{part}</b> : part
    );
};

const TextBlock = ({ text, parseText, className = "" }) => (
    text && <p className={`text-black text-[14px] ${className}`}>
        {parseText(text)}
    </p>
);

const SectionTitle = ({ title, className = "" }) => (
    title && <h2 className={`pt-20 mdd:pt-8 text-black text-[18px] md:text-[28px] sm:text-[22px] font-semibold ${className}`}>
        {title}
    </h2>
);

const AlternativePricing = ({ priceTitle, priceVariants }) => (
    <div className="pt-20 mdd:pt-8 flex flex-col gap-6 lg:w-[80%]">
        {priceTitle && (
            <p className="text-black text-[18px] md:text-[28px] sm:text-[22px] font-semibold">
                {parseText(priceTitle)}
            </p>
        )}
        {priceVariants?.length > 0 && (
            <VariantsList variants={priceVariants}/>
        )}
    </div>
);

const CountryCard = ({ country }) => (
    <Link href={`/shengenskie-vizy/${country.url}`}>
        <div
            className="bg-white border border-[#ECECEC] rounded-lg lg:rounded-[4px] overflow-hidden shadow-sm cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <Image
                src={country.img}
                alt={country.name}
                width={300}
                height={200}
                className="w-full object-cover"
            />
            <div className="lg:p-8 md:p-6 sm:p-4 mdd:py-4 mdd:pl-1 mdd:pr-1">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex sm:gap-2 mdd:gap-0.5 items-center">
                        <Image src={country.svg} alt={country.name} width={24} height={24}/>
                        <p className="font-medium mdd:text-[14px] sm:text-lg md:text-xl lg:text-xl">
                            {country.name}
                        </p>
                    </div>
                    <Image
                        src="/Line 5.png"
                        alt=""
                        width={24}
                        height={24}
                        className="lg:w-6 md:w-6 sm:w-6 mdd:hidden"
                    />
                </div>
            </div>
        </div>
    </Link>
);

export default function OtherCountryPage({ breadcrumbs }) {
    const { country: countryUrl } = useParams();
    const { openModal } = useModal();
    const pathname = usePathname();

    const excludedCountries1 = useMemo(() => [
        "rabochaya-viza-v-polshu",
        "delovaya-viza-v-polshu",
        "uchebnaya-viza-v-polshu",
        "gostevaya-polskaya-viza",
        "viza-v-polsy-po-karte-polyaka"
    ], []);

    const china = useMemo(() => ["viza-v-kitaj"], []);

    const selectedCountry = useMemo(() =>
            otherCountries.find(c => c.url === countryUrl),
        [countryUrl]
    );

    const recommendedCountries = useMemo(() =>
            ["viza-v-grecziyu", "viza-v-sloveniu", "viza-v-germaniyu", "viza-v-ispaniyu"]
                .map(url => countries.find(c => c.url === url))
                .filter(Boolean),
        []
    );

    if (!selectedCountry) {
        return notFound();
    }

    const showExtendedContent = selectedCountry.good !== 0;

    return (
        <div className="flex flex-col items-center">
            {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs}/>}

            <div className="w-full relative flex flex-col lg:flex-row sm:flex-col justify-between mdd:-mt-10">
                <div
                    className="mdd:relative lg:absolute sm:relative left-0 top-[200px] lg:top-[300px] mdd:top-[150px] w-full lg:w-1/2 text-left lg:text-left z-10 px-[7%] flex flex-col xl:gap-32 lg:gap-20 sm:gap-12 mdd:gap-12">
                    <CountryBreadcrumbs
                        country={selectedCountry}
                        pathname={pathname}
                        excludedCountries1={excludedCountries1}
                    />
                    <h1 className="ht:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[34px] mdd:text-[28px] font-semibold text-black uppercase leading-none">
                        {excludedCountries1.includes(selectedCountry.url)
                            ? selectedCountry.n
                            : `Виза ${selectedCountry.n === "Францию" ? "во" : "в"} ${selectedCountry.n}`}
                    </h1>
                </div>

                <div className="w-full lg:flex items-center lg:mt-0 mdd:mt-[10%] mt-[20%] relative z-5">
                    <Image
                        src={selectedCountry.rb === 1 ? "/visa-c.png" : "/visa-cc.png"}
                        alt=""
                        width={1000}
                        height={1000}
                        priority={true}
                        className="relative lg:top-[120px] sm:top-0 lg:w-[50%] lg:left-[50%] -z-50 mdd:hidden"
                    />
                    <Image
                        src={selectedCountry.rb === 1 ? "/visa-112.webp" : "/visa-001.webp"}
                        alt=""
                        width={600}
                        height={600}
                        quality={80}
                        priority={true}
                        loading="eager"
                        className="relative top-[20%] -z-50 sm:hidden"
                    />
                </div>

                <div className="lg:hidden absolute bottom-0 w-full px-[7%] pb-[19%] mdd:pb-[25%]">
                    <RippleButton onClick={openModal}>
                        Получить консультацию
                    </RippleButton>
                </div>
            </div>

            <Discount/>

            <div className="w-full relative ht:bottom-[60px] xl:bottom-[60px] lg:bottom-[30px]">
                <Suspense fallback={<div>Loading Slider...</div>}>
                    <Slider/>
                </Suspense>
            </div>

            {showExtendedContent ? (
                <div className="w-full">
                    <div className="pb-16 mdd:pb-10">
                        <div className="px-[7%] pt-16 mdd:pt-10 flex flex-col gap-6">
                            <div className="flex flex-col gap-6 lg:w-[70%]">
                                <SectionTitle title={selectedCountry.title}/>
                                <TextBlock text={selectedCountry.textTop} parseText={parseText}/>
                                <TextBlock text={selectedCountry.text1} parseText={parseText}/>

                                {selectedCountry.variants?.length > 0 && (
                                    <VariantsList variants={selectedCountry.variants}/>
                                )}

                                {Array.isArray(selectedCountry.text11) && (
                                    <div>
                                        {selectedCountry.text11.slice(0, 3).map((text, i) => (
                                            <TextBlock key={i} text={text} parseText={parseText}/>
                                        ))}
                                    </div>
                                )}

                                <SectionTitle title={selectedCountry.title22}/>
                                <TextBlock text={selectedCountry.text2} parseText={parseText}/>
                                <TextBlock text={selectedCountry.text3} parseText={parseText}/>

                                {selectedCountry.variants11?.length > 0 && (
                                    <VariantsList variants={selectedCountry.variants11}/>
                                )}

                                <TextBlock text={selectedCountry.text4} parseText={parseText}/>
                                <TextBlock text={selectedCountry.text5} parseText={parseText}/>

                                <SectionTitle title={selectedCountry.title2}/>
                                {selectedCountry.variants2?.length > 0 && (
                                    <VariantsList variants={selectedCountry.variants2}/>
                                )}

                                {Array.isArray(selectedCountry.text22) && (
                                    <div>
                                        {selectedCountry.text22.slice(0, 3).map((text, i) => (
                                            <TextBlock key={i} text={text} parseText={parseText}/>
                                        ))}
                                    </div>
                                )}

                                <TextBlock text={selectedCountry.text6} parseText={parseText}/>
                            </div>

                            {selectedCountry.typevc && (
                                <div className="w-full pt-20 mdd:pt-8">
                                    <TakePrice/>
                                </div>
                            )}
                            {selectedCountry.typevc && (
                                <p className="pt-20 mdd:pt-8 text-black text-[18px] md:text-[28px] sm:text-[22px] font-semibold">
                                    {parseText(selectedCountry.typevc)}
                                </p>
                            )}
                            {selectedCountry.textc && (
                                <TextBlock text={selectedCountry.textc} parseText={parseText}/>
                            )}
                            {selectedCountry.typevbc?.length > 0 && (
                                <VisaTypeButtons
                                    types={selectedCountry.typevbc}
                                    links={selectedCountry.typevlc}
                                    enabled={selectedCountry.enabled || []}
                                />
                            )}

                            <div className="flex flex-col gap-6 lg:w-[70%]">
                                <SectionTitle title={selectedCountry.title33}/>
                                <TextBlock text={selectedCountry.text7} parseText={parseText}/>
                                <TextBlock text={selectedCountry.text8} parseText={parseText}/>

                                {selectedCountry.variants3?.length > 0 && (
                                    <VariantsList variants={selectedCountry.variants3}/>
                                )}
                            </div>

                            <SectionTitle
                                className="pt-10 mdd:pt-4"
                                title={`Кому подходит ${selectedCountry.match}`}
                            />
                            {!china.includes(countryUrl) && (
                                <TextBlock
                                    text={`Подходит для граждан РБ и иностранных граждан, имеющих ВНЖ Республики Беларусь!`}
                                    parseText={parseText}
                                />
                            )}

                            <WhoItSuitsTable
                                country={selectedCountry}
                                parseText={parseText}
                                excludedCountries1={excludedCountries1}
                                china={china}
                            />

                            <SectionTitle
                                className="pt-10 mdd:pt-4"
                                title={`Стоимость оформления визы ${selectedCountry.n === "Францию" ? "во" : "в"} ${selectedCountry.n}`}
                            />
                            <PriceTable country={selectedCountry} parseText={parseText}/>
                        </div>

                        <div className="pt-16 mdd:pt-10">
                            <Suspense fallback={<div>Loading Documents...</div>}>
                                <Docs/>
                            </Suspense>
                        </div>

                        <div className="pt-32 mdd:pt-20">
                            <Suspense fallback={<div>Loading Steps...</div>}>
                                <NewStepsCountries/>
                            </Suspense>
                        </div>

                        <Suspense fallback={<div>Loading Form...</div>}>
                            <PhoneForm/>
                        </Suspense>

                        <Suspense fallback={<div>Loading FAQ...</div>}>
                            <FAQ countryUrl={countryUrl}/>
                        </Suspense>
                    </div>
                </div>
            ) : (
                <div className="px-[7%] flex flex-col gap-10 items-center">
                    {["viza-v-litvu", "viza-v-latviyu", "viza-v-italiyu", "viza-v-chehiyu"].includes(countryUrl) && (
                        <div className="xl:pt-0 pt-24 flex flex-col gap-6 items-center lg:w-[60%] sm:w-full mdd:w-full">
                            <SectionTitle title={selectedCountry.title}/>
                            <div className="flex flex-col gap-6">
                                <TextBlock text={selectedCountry.text1} parseText={parseText}/>
                                <TextBlock text={selectedCountry.text2} parseText={parseText}/>

                                {selectedCountry.variants?.length > 0 && (
                                    <VariantsList variants={selectedCountry.variants}/>
                                )}

                                <TextBlock text={selectedCountry.text3} parseText={parseText}/>
                                <TextBlock text={selectedCountry.text4} parseText={parseText}/>

                                {Array.isArray(selectedCountry.text22) && (
                                    <div>
                                        {selectedCountry.text22.slice(0, 2).map((text, i) => (
                                            <TextBlock key={i} text={text} parseText={parseText}/>
                                        ))}
                                    </div>
                                )}

                                {selectedCountry.priceGood === 0 && (
                                    <AlternativePricing
                                        priceTitle={selectedCountry.priceTitle}
                                        priceVariants={selectedCountry.priceVariants}
                                    />
                                )}
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col gap-4 mt-16">
                        <p className="text-black text-[14px]">
                            Для получения шенгенской визы Вы можете воспользоваться одним из следующих вариантов:
                        </p>
                        <div
                            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6 mdd:gap-2">
                            {recommendedCountries.map((country, index) => (
                                <CountryCard key={index} country={country}/>
                            ))}
                        </div>
                    </div>

                    <div className="sm:mt-6 text-center w-full">
                        <Link href="/shengenskie-vizy">
                            <button
                                className="bg-customBlue sm:w-max mdd:w-full hover:bg-blue-600 text-white py-3 px-8 rounded-[4px] shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] text-[16px] active:scale-95 transition-transform duration-150 ease-in-out">
                                Еще больше стран
                            </button>
                        </Link>
                    </div>

                    <Suspense fallback={<div>Loading FAQ...</div>}>
                        <FAQ countryUrl={countryUrl}/>
                    </Suspense>
                </div>
            )}

            <Suspense fallback={<div>Loading Contacts...</div>}>
                <Contacts/>
            </Suspense>

            <style jsx>{`
                .bold-list-numbers ::marker {
                    font-weight: bold;
                }
            `}</style>
        </div>
    );
};