import svg from './../../../assets/loadingWhite.svg';
import './style.css';

interface IconProps {
    className?: string;
}


export default function IconLoading(props: IconProps) {
    return (
        <img src={svg} className='mx-[6px] icon' style={{ width: '24px', height: '24px' }} alt="" />
    );
}