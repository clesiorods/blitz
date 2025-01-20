interface IHeader {
    title: string;
    subTitle?: string;
    style?: React.CSSProperties;
}

export default function CardTitle({ title, subTitle, style }: IHeader) {
    return (
        <header className=" mt-[6px] block h-[unset]" style={style}>
            <h1 className="text-[1rem] font-semibold text-zinc-700 dark:text-zinc-100 dark:font-normal">{title}</h1>
            {subTitle && <h2 className="text-sm font-medium text-zinc-400 mt-[-2px]" >{subTitle}</h2>}
        </header>
    );
}