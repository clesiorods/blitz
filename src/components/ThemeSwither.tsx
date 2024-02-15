
import { Icon } from '@iconify/react';

export default function ThemeSwitcher() {

    return (
        <span className="h-6 w-6 text-2xl cursor-pointer" onClick={() => {}} >
            {/* {1 == 1 ? <Icon icon="solar:moon-bold" /> : <Icon icon="solar:sun-2-bold" />} */}
            {<Icon icon="solar:sun-2-bold" />}
        </span>
    );
}