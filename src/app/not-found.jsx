export const metadata = {
    title: "Страница не найдена – компания VISA VAM",
    description: "Запрошенная страница не существует."
};

export default function NotFound() {
    return (
        <div className={"h-dvh flex flex-col items-center justify-center px-[7%]"}>
            <h1 className={"lg:text-[180px] md:text-[160px] sm:text-[140px] mdd:text-[130px] font-bold"}>404</h1>
            <div className={"flex flex-col items-center justify-center gap-1"}>
                <p className={"text-2xl mdd:text-xl font-medium"}>Здесь ничего нет...</p>
                <p className={"text-xl mdd:text-[16px] font-medium"}>Возможно страница была удалена или перенесена на другой адрес</p>
            </div>
            <a href={"/"} className={"mt-8 mdd:w-full"}>
                <button className={"bg-[#15419E] rounded-[2px] py-4 px-8 text-white mdd:w-full"}>
                    Вернуться на главную
                </button>
            </a>
        </div>
    );
}