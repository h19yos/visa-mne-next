// src/app/shengenskie-vizy/[country]/page.jsx
import CountryPage from '@/components/countriesPage';
import Breadcrumbs from '@/components/Breadcrumbs';

const countries = [
    {
        name: "Польша",
        url: "viza-v-polshu",
        metaTitle: "Виза в Польшу",
    },
    {
        name: "Словения",
        url: "viza-v-sloveniu",
        metaTitle: "Виза в Словению",
    },
    {
        name: "Германия",
        url: "viza-v-germaniyu",
        metaTitle: "Виза в Германию",
    },
    {
        name: "Испания",
        url: "viza-v-ispaniyu",
        metaTitle: "Виза в Испанию",
    },
    {
        name: "Франция",
        url: "viza-vo-francziyu",
        metaTitle: "Виза во Францию",
    },
    {
        name: "Литва",
        url: "viza-v-litvu",
        metaTitle: "Виза в Литву",
    },
    {
        name: "Латвия",
        url: "viza-v-latviyu",
        metaTitle: "Виза в Латвию",
    },
    {
        name: "США",
        url: "viza-v-ssha",
        metaTitle: "Виза в США",
    },
    {
        name: "Великобритания",
        url: "viza-v-velikobritaniyu",
        metaTitle: "Виза в Великобританию",
    },
    {
        name: "Китай",
        url: "viza-v-kitaj",
        metaTitle: "Виза в Китай",
    },
    {
        name: "Болгария",
        url: "viza-v-bolgariyu",
        metaTitle: "Виза в Болгарию",
    },
    {
        name: "Хорватия",
        url: "viza-v-horvatiu",
        metaTitle: "Виза в Хорватию",
    },
    {
        name: "Нидерланды",
        url: "viza-v-niderlandy",
        metaTitle: "Виза в Нидерланды",
    },
    {
        name: "Греция",
        url: "viza-v-grecziyu",
        metaTitle: "Виза в Грецию",
    },
    {
        name: "Венгрия",
        url: "viza-v-vengriyu",
        metaTitle: "Виза в Венгрию",
    },
    {
        name: "Италия",
        url: "viza-v-italiyu",
        metaTitle: "Виза в Италию",
    },
    {
        name: "Румыния",
        url: "viza-v-rumyniyu",
        metaTitle: "Виза в Румынию",
    },
    {
        name: "Австрия",
        url: "viza-v-avstriyu",
        metaTitle: "Виза в Австрию",
    },
    {
        name: "Чехия",
        url: "viza-v-chehiyu",
        metaTitle: "Виза в Чехию",
    },
    {
        name: "Рабочая виза в Польшу",
        url: "rabochaya-viza-v-polshu",
        metaTitle: "Рабочая виза в Польшу",
    },
    {
        name: "Деловая виза в Польшу",
        url: "delovaya-viza-v-polshu",
        metaTitle: "Деловая виза в Польшу",
    },
    {
        name: "Учебная виза в Польшу",
        url: "uchebnaya-viza-v-polshu",
        metaTitle: "Учебная виза в Польшу",
    },
    {
        name: "Гостевая виза в Польшу",
        url: "gostevaya-polskaya-viza",
        metaTitle: "Гостевая виза в Польшу",
    },
    {
        name: "Виза по карте Поляка",
        url: "viza-v-polsy-po-karte-polyaka",
        metaTitle: "Виза в Польшу по карте Поляка",
    },
    {
        name: "Рабочая виза в Болгарию",
        url: "rabochaya-viza-v-bolgariyu",
        metaTitle: "Рабочая виза в Болгарию",
    },
    {
        name: "Рабочая виза в Германию",
        url: "rabochaya-viza-v-germaniyu",
        metaTitle: "Рабочая виза в Германию",
    },
    {
        name: "Рабочая виза в Испанию",
        url: "rabochaya-viza-v-ispaniyu",
        metaTitle: "Рабочая виза в Испанию",
    },
];

export async function generateMetadata({ params }) {
    const { country } = params; // Распаковываем params напрямую
    const countryData = countries.find(c => c.url === country);

    if (!countryData) {
        return {
            title: "Страна не найдена – компания VISA VAM",
            description: "Описание недоступно – компания VISA VAM. 📞 +375 29 68 00 620",
        };
    }

    return {
        title: `${countryData.metaTitle} – компания VISA VAM`,
        description: `${countryData.metaTitle} – компания VISA VAM. 📞 +375 29 68 00 620`,
    };
}

export default function Page({params}) {
    const { country } = params;

    // Находим данные страны по url
    const countryData = countries.find(c => c.url === country);

    // Если страна не найдена, можно добавить запасной вариант
    const displayName = countryData ? countryData.metaTitle : "Неизвестная виза";

    const breadcrumbs = [
        { name: "Главная", url: "https://visavampro.by/" },
        { name: "Шенгенские визы", url: "https://visavampro.by/shengenskie-vizy" },
        { name: displayName, url: `https://visavampro.by/shengenskie-vizy/${country}` }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs}/>
            <CountryPage countryData={countryData}/>
        </>
    );
}