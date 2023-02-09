import useLocalStorage from './useLocalStorage';

const UseDarkMode = (initialValue) => {
    const[darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);
    return [darkMode, setDarkMode];
};

export default UseDarkMode;