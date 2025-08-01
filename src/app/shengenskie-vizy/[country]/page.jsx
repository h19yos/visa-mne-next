import CountryPage from '@/components/countriesPage';
import Breadcrumbs from '@/components/Breadcrumbs';
import {notFound} from 'next/navigation';

export const dynamicParams = false;

const countries = [
    {
        name: "Польша",
        url: "viza-v-polshu",
        title: "Виза в Польшу для белорусов в 2025 году - Оформить польскую визу",
        description: "Оформление визы в Польшу для белорусов. ✓ Открываем все типы виз. ✓ Помощь в заполнении анкеты и подачи документов. ✓ Доступная стоимость. ✓ Срочная запись на польскую визу."
    },
    {
        name: "Словения",
        url: "viza-v-sloveniu",
        title: "Виза в Словению для белорусов - Запись на подачу",
        description: "Открытие визы в Словению. ✓ Оформляем все типы виз. ✓ Помощь в заполнении анкеты и подачи документов. ✓ Доступная стоимость. ✓ Срочная запись."
    },
    {
        name: "Германия",
        url: "viza-v-germaniyu",
        title: "Виза в Германию для белорусов - Запись на немецкую визу  в Visa Vam",
        description: "Открытие визы в Германию. ✓ Оформляем все типы виз для белорусов. ✓ Помощь в заполнении анкеты и подачи документов. ✓ Доступная стоимость. ✓ Срочная запись на немецкую шенген визу."
    },
    {
        name: "Испания",
        url: "viza-v-ispaniyu",
        title: "Виза в Испанию для белорусов - Запись на испанскую визу",
        description: "Открытие визы в Испанию. ✓ Оформляем все типы виз. ✓ Помощь в заполнении анкеты и подачи документов. ✓ Доступная стоимость. ✓ Срочная подача на испанскую визу."
    },
    {
        name: "Франция",
        url: "viza-vo-francziyu",
        title: "Виза во Францию для белорусов - Запись на французскую визу",
        description: "Открытие визы во Францию. ✓ Оформляем все типы виз. ✓ Помощь в заполнении анкеты и подачи документов. ✓ Доступная стоимость. ✓ Срочная запись на французскую шенгенскую визу."
    },
    {
        name: "Литва",
        url: "viza-v-litvu",
        title: "Виза в Литву для белорусов - Оформление литовской визы",
        description: "Открытие визы в Литву. ✓ Оформляем все типы виз. ✓ Помощь в заполнении анкеты и подачи документов. ✓ Доступная стоимость. ✓ Срочная подача на литовскую визу."
    },
    {
        name: "Латвия",
        url: "viza-v-latviyu",
        title: "Виза в Латвию для белорусов в 2025 году - Запись на подачу",
        description: "Открытие визы в Латвию. ✓ Оформляем все типы виз. ✓ Помощь в заполнении анкеты и подачи документов. ✓ Доступная стоимость. ✓ Срочная запись на латвийскую визу."
    },
    {
        name: "Болгария",
        url: "viza-v-bolgariyu",
        title: "Виза в Болгарию для белорусов в 2025 году - Оформление визы",
        description: "Открытие визы в Болгарию. ✓ Оформляем все типы виз. ✓ Помощь в заполнении анкеты и подачи документов. ✓ Доступная стоимость. ✓ Срочная подача."
    },
    {
        name: "Хорватия",
        url: "viza-v-horvatiu",
        title: "Виза в Хорватию для белорусов - Запись на хорватскую визу",
        description: "Открытие визы в Хорватию. ✓ Оформляем все типы виз. ✓ Помощь в заполнении анкеты и подачи документов. ✓ Доступная стоимость. ✓ Срочная запись на хорватскую визу."
    },
    {
        name: "Нидерланды",
        url: "viza-v-niderlandy",
        title: "Виза в Нидерланды для белорусов - Оформить визу",
        description: "Открытие визы в Нидерланды. ✓ Оформляем все типы виз. ✓ Помощь в заполнении анкеты и подачи документов. ✓ Доступная стоимость. ✓ Срочная запись на открытие визы."
    },
    {
        name: "Греция",
        url: "viza-v-grecziyu",
        title: "Виза в Грецию для белорусов в 2025 году - Открыть греческую визу",
        description: "Открытие визы в Грецию. ✓ Оформляем все типы виз. ✓ Помощь в заполнении анкеты и подачи документов. ✓ Доступная стоимость. ✓ Срочная подача на греческую визу для белорусов."
    },
    {
        name: "Венгрия",
        url: "viza-v-vengriyu",
        title: "Виза в Венгрию для белорусов - Запись на венгерскую визу",
        description: "Подача на визу в Венгрию. ✓ Оформляем все типы виз. ✓ Помощь в заполнении анкеты и подачи документов. ✓ Доступная стоимость. ✓ Срочное открытие венгерской визы."
    },
    {
        name: "Италия",
        url: "viza-v-italiyu",
        title: "Виза в Италию для белорусов в 2025 году - Запись на итальянскую визу",
        description: "Открытие визы в Италию. ✓ Оформляем все типы виз. ✓ Помощь в заполнении анкеты и подачи документов. ✓ Доступная стоимость. ✓ Срочная запись на итальянскую визу."
    },
    {
        name: "Румыния",
        url: "viza-v-rumyniyu",
        title: "Виза в Румынию для белорусов - Запись на румынскую визу",
        description: "Подача на визу в Румынию. ✓ Оформляем все типы виз. ✓ Помощь в заполнении анкеты и подачи документов. ✓ Доступная стоимость. ✓ Срочное открытие румынской визы."
    },
    {
        name: "Австрия",
        url: "viza-v-avstriyu",
        title: "Виза в Австрию для белорусов - Запись на австрийскую визу",
        description: "Открытие визы в Австрию. ✓ Оформляем все типы виз. ✓ Помощь в заполнении анкеты и подачи документов. ✓ Доступная стоимость. ✓ Срочная запись на австрийскую визу."
    },
    {
        name: "Чехия",
        url: "viza-v-chehiyu",
        title: "Виза в Чехию для белорусов - Открыть визу",
        description: "Открытие визы в Чехию. ✓ Оформляем все типы виз. ✓ Помощь в заполнении анкеты и подачи документов. ✓ Доступная стоимость. ✓ Срочная подача."
    },
    {
        name: "Рабочая виза в Польшу",
        url: "rabochaya-viza-v-polshu",
        title: "Рабочая виза в Польшу для белорусов",
        description: "Оформление рабочей визы в Польшу. ✓ Помощь в заполнении анкеты и подачи документов. ✓ Доступная стоимость. ✓ Срочная запись на польскую рабочую визу."
    },
    {
        name: "Деловая виза в Польшу",
        url: "delovaya-viza-v-polshu",
        title: "Деловая виза в Польшу для белорусов",
        description: "Оформление деловой визы в Польшу. ✓ Помощь в заполнении анкеты и подачи документов. ✓ Доступная стоимость. ✓ Срочная запись на польскую деловую визу."
    },
    {
        name: "Учебная виза в Польшу",
        url: "uchebnaya-viza-v-polshu",
        title: "Учебная виза в Польшу для белорусов",
        description: "Оформление учебной визы в Польшу. ✓ Помощь в заполнении анкеты и подачи документов. ✓ Доступная стоимость. ✓ Срочная запись на польскую учебную визу."
    },
    {
        name: "Гостевая виза в Польшу",
        url: "gostevaya-polskaya-viza",
        title: "Гостевая виза в Польшу для белорусов",
        description: "Оформление гостевой визы в Польшу. ✓ Помощь в заполнении анкеты и подачи документов. ✓ Доступная стоимость. ✓ Срочная запись на польскую гостевую визу."
    },
    {
        name: "Виза по карте Поляка",
        url: "viza-v-polsy-po-karte-polyaka",
        title: "Виза по Карте Поляка: Быстро и без проблем в Visa Vam",
        description: "Получение визы для обладателей Карты Поляка. ✓ Помощь в заполнении анкеты и сборе документов. ✓ Доступная стоимость. ✓ Срочное оформление визы."
    },
    {
        name: "Рабочая виза в Болгарию",
        url: "rabochaya-viza-v-bolgariyu",
        title: "Рабочая виза в Болгарию для белорусов",
        description: "Оформление рабочей визы в Болгарию. ✓ Помощь в заполнении анкеты и подачи документов. ✓ Доступная стоимость. ✓ Срочная запись."
    },
    {
        name: "Рабочая виза в Германию",
        url: "rabochaya-viza-v-germaniyu",
        title: "Рабочая виза в Германию для белорусов",
        description: "Оформление рабочей визы в Германию. ✓ Помощь в заполнении анкеты и подачи документов. ✓ Доступная стоимость. ✓ Срочная запись на немецкую рабочую визу."
    },
    {
        name: "Рабочая виза в Испанию",
        url: "rabochaya-viza-v-ispaniyu",
        title: "Рабочая виза в Испанию для белорусов",
        description: "Оформление рабочей визы в Испанию. ✓ Помощь в заполнении анкеты и подачи документов. ✓ Доступная стоимость. ✓ Срочная запись на испанскую рабочую визу."
    },
];

export async function generateStaticParams() {
    return countries.map((country) => ({
        country: country.url,
    }));
}

export async function generateMetadata({params}) {
    const {country} = params;
    const countryData = countries.find(c => c.url === country);

    if (!countryData || !countryData.title) {
        notFound();
    }

    const canonicalUrl = `https://visavampro.by/shengenskie-vizy/${countryData.url}`;

    const detailedCountryData = require('@/data/countries').countries.find(c => c.url === country);

    const images = [
        // Static images from CountryPage
        {
            url: "/nav-icon.png",
            width: 8,
            height: 8,
            alt: "Иконка навигации",
        },
        {
            url: "https://visavampro.by/check-0.png",
            width: 16,
            height: 16,
            alt: "Иконка проверки для визовых требований",
        },
        {
            url: "/visa-c.png",
            width: 1000,
            height: 1000,
            alt: `Визовые услуги для ${detailedCountryData?.name || countryData.name}`,
        },
        {
            url: "/visa-cc.png",
            width: 1000,
            height: 1000,
            alt: `Визовые услуги для ${detailedCountryData?.name || countryData.name}`,
        },
        {
            url: "/visa-112.webp",
            width: 600,
            height: 600,
            alt: `Мобильная визовая услуга для ${detailedCountryData?.name || countryData.name}`,
        },
        {
            url: "/visa-001.webp",
            width: 600,
            height: 600,
            alt: `Мобильная визовая услуга для ${detailedCountryData?.name || countryData.name}`,
        },
        {
            url: "/Line 5.png",
            width: 24,
            height: 24,
            alt: "Иконка стрелки для навигации",
        },
    ];

    // Add country-specific images if detailedCountryData exists
    if (detailedCountryData) {
        images.push(
            {
                url: detailedCountryData.img,
                width: 300,
                height: 200,
                alt: `Изображение ${detailedCountryData.name}`,
            },
            {
                url: detailedCountryData.banner,
                width: 1800,
                height: 1200,
                alt: `Визовые услуги для ${detailedCountryData.name}`,
            },
            {
                url: detailedCountryData.bannerMobile || detailedCountryData.banner,
                width: 1800,
                height: 1200,
                alt: `Мобильный баннер визовых услуг для ${detailedCountryData.name}`,
            },
            {
                url: detailedCountryData.svg,
                width: 24,
                height: 24,
                alt: `Флаг ${detailedCountryData.name}`,
            }
        );
    }

    return {
        title: `${countryData.title}`,
        description: `${countryData.description}`,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: `${countryData.title}`,
            description: `${countryData.description}`,
            url: canonicalUrl,
            type: "website",
            images,
        },
    };
}

export default function Page({params}) {
    const {country} = params;
    const countryData = countries.find(c => c.url === country);

    if (!countryData || !countryData.title) {
        notFound();
    }

    const breadcrumbs = [
        {name: "Главная", url: "https://visavampro.by/"},
        {name: "Шенгенские визы", url: "https://visavampro.by/shengenskie-vizy"},
        {name: countryData.title, url: `https://visavampro.by/shengenskie-vizy/${country}`}
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs}/>
            <CountryPage
                countryData={countryData}
                countryUrl={country}
            />
        </>
    );
}