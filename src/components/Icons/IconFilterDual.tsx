interface IconProps {
    className?: string;
}


export default function IconFilterDual(props: IconProps) {
    return (
        <svg
            className={`${props.className}`}
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24">
            <g
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
            >
                <path
                    d="M22 5.814v.69c0 1.038 0 1.557-.26 1.987c-.26.43-.733.697-1.682 1.231l-2.913 1.64c-.636.358-.955.538-1.182.735a2.68 2.68 0 0 0-.9 1.49c-.063.285-.063.619-.063 1.286v2.67c0 1.909 0 2.863-.668 3.281c-.668.418-1.607.05-3.486-.684c-.895-.35-1.342-.524-1.594-.879C9 18.907 9 18.451 9 17.542v-2.67c0-.666 0-1-.064-1.285a2.68 2.68 0 0 0-.898-1.49c-.228-.197-.547-.377-1.183-.735l-2.913-1.64c-.949-.534-1.423-.8-1.682-1.23C2 8.06 2 7.541 2 6.503v-.69"
                />

                <path
                    d="M22 5.815c0-1.327 0-1.99-.44-2.403C21.122 3 20.415 3 19 3H5c-1.414 0-2.121 0-2.56.412C2 3.824 2 4.488 2 5.815"
                    strokeOpacity="0.5"
                />
            </g>
        </svg>
    );
}