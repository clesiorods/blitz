
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../redux/ThemeSlice';

export default function ThemeSwitcher() {
    const dispatch = useDispatch();

    // const { ThemeColor, handleTheme } = useThemeColor();
    const {color} = useSelector((state: any) => { return state.theme });
    
    function handleTheme() {
        dispatch(setTheme({color:(color === "light" ? "dark" : "light")}));
    }

    return (
        // <span className="h-6 w-6 text-2xl cursor-pointer" onClick={() => {handleTheme();}} >
        //     {ThemeColor === "dark" ? <Icon icon="solar:moon-bold" /> : <Icon icon="solar:sun-2-bold" />}
        // </span>
        <span className="h-6 w-6 text-2xl cursor-pointer" onClick={() => { handleTheme(); }} >
            {color === "dark" ? <Icon icon="solar:moon-bold" /> : <Icon icon="solar:sun-2-bold" />}
        </span>
    );
}