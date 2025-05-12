import { useTheme } from '../ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import './ToggleTheme.css';

const ToggleTheme = () => {
    const { isLightTheme, toggleTheme } = useTheme();

    return (
        <div className="toggle-switch" onClick={toggleTheme}>
            <div className={`switch ${isLightTheme ? 'light' : 'dark'}`}>
                {isLightTheme ? <FaSun className="icon" /> : <FaMoon className="icon" />}
            </div>
        </div>
    );
};

export default ToggleTheme;
