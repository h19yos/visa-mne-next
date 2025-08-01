'use client'

import {useState} from "react";

export const faqData = [
    {
        question: "Какая система скидок на ваши услуги?",
        answer: `
      Наша компания предоставляет скидки:
      <ul class="list-disc ml-6">
<!--        <li>США + Шенген – 10%</li>-->
        <li>Семья от 4-х человек – 13%</li>
        <li>Семья от 3-х человек – 11%</li>
        <li>Повторное обращение после отказа – 16%</li>
        <li>Постоянный клиент – 5%</li>
      </ul>
    `,
    },
    {
        question: "Какие цены и способы оплаты ваших услуг?",
        answer: `
      Мы принимаем платежи:
      <ul class="list-disc ml-6">
        <li>Наличными в офисе, с выдачей чека</li>
        <li>Банковской картой</li>
        <li>Система ЕРИП Оплата</li>
        <li>Безопасная ссылка bepaid</li>
      </ul>
      Актуальные цены на услуги можно посмотреть <a class="underline hover:no-underline" href="/Цены на услуги. Компания VISA VAM.pdf" target="_blank" rel="noopener noreferrer">здесь</a>.
    `,
    },
    {
        question: "Сколько мои документы будут на рассмотрении?",
        answer:
            "Ваши документы после подачи визового заявления в Визовый центр или Консульство будут рассматривать от 14-56 дней, зависит от страны получения визы. За задержку или преждевременную выдачу документов наша компания ответственности не несем.",
    },
    {
        question: "Могут ли к вам обратиться за услугой не граждане Республики Беларусь?",
        answer:
            "Да, могут. Если есть ВНЖ Беларуси (для граждан Российской Федерации есть нюансы, уточняйте у менеджера нашего центра) или временная регистрация проживания от 180 дней на момент подачи документы в визовый центр выбранной страны.\n",
    },
    {
      question: "На сколько заранее я могу начать оформление визы?",
      answer:
        "Для работы с нашим агентством для получения всех нужных консультаций — Вы можете начинать сотрудничество в любое комфортное время. Но на момент подачи документов в визовый центр — Вы можете запрашивать визу на ближайшие полгода.",
    },
    {
      question: "Есть ли отказы при получении? Как вы решаете данный вопрос?",
      answer:
        "Да. Отказы в визах бывают. Даже у сотрудников Визовых Центров, а также агентств. Причин отказа в визе может быть достаточно много и зачастую мы их можем не знать, потому что это решение Консула. Но из самых популярных причин — это может быть недостаточное количество финансовых средств для поездки (предоставляемая Вами выписка с карт-счета) и неподтвержденная цель поездки. То есть Консул не верит Вам, что Ваша поездка на самом деле состоится, и цель поездки на самом деле указана верно. Помимо этого причинами могут быть: неоплаченные штрафы в Евросоюзе, предыдущие отказы в визе, визовые нарушения. К сожалению, мы не несем ответственности за решение Консула. Но, конечно, мы предлагаем альтернативы, скидки, оказываем бесплатные консультации по апелляции.",
    },
    {
      question: "Какие дополнительные услуги вы оказываете?",
      answer: `
        Дополнительные услуги нашего агентства:
        <ul class="list-disc ml-6">
          <li>Страхование;</li>
          <li>Помощь в получении документов, необходимых для оформления визы.</li>
        </ul>
      `,
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div className="pt-32 mdd:pt-20 px-[7%]">
            <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold mb-8 lg:mb-16">Часто задаваемые вопросы</h2>
            <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <div key={index} className="mdd:text-[16px] text-[16px] border border-orange-500 rounded-[30px] mdd:rounded-[55px]">
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
                                dangerouslySetInnerHTML={{__html: faq.answer}}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
