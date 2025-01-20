interface IconProps {
    className?: string;
}


export default function IconClientesDual(props: IconProps) {
    return (
        <svg className={`${props.className}`}  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><circle cx="15" cy="6" r="3" fill="currentColor" opacity="0.4"/><ellipse cx="16" cy="17" fill="currentColor" opacity="0.4" rx="5" ry="3"/><circle cx="9.001" cy="6" r="4" fill="currentColor"/><ellipse cx="9.001" cy="17.001" fill="currentColor" rx="7" ry="4"/></svg>
    );
}