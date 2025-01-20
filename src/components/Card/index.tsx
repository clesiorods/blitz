import "./style.css";
import { ReactNode } from "react";


interface CardProps {
    children?: ReactNode;
    className?: string;
    style?: React.CSSProperties;
}


export default function Card(props: CardProps) {
    return (
        <article style={props.style} className={`card ${props.className}`} >
            {props.children}
        </article>
    );
}