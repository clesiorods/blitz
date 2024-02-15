interface IconProps {
    className?: string;
}


export default function IconUp(props:IconProps) {
    return (
        <svg className={`${props.className}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M11.512 8.43a.75.75 0 0 1 .976 0l7 6a.75.75 0 1 1-.976 1.14L12 9.987l-6.512 5.581a.75.75 0 1 1-.976-1.138l7-6Z" clip-rule="evenodd"/></svg>
    );
}