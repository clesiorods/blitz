
import { Icon } from '@iconify/react';
import { useThemeColor } from '../context/theme.themeswitcher';

export default function ThemeSwitcher() {

    const {ThemeColor} = useThemeColor();

    return (
        <span className="h-6 w-6 text-2xl cursor-pointer" onClick={() => {}} >
            {ThemeColor === "dark" ? <Icon icon="solar:moon-bold" /> : <Icon icon="solar:sun-2-bold" />}
        </span>
    );
}