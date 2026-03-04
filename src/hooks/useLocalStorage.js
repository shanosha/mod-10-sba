import { useEffect, useState } from "react"

export function useLocalStorage(key, initialValue) {

    // Get initial value
    const [value, setValue] = useState(()=>{
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    })

    // Set localStorage value when this tab changes the state
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value));
        console.log(`"${key}" saved to local storage: `,value);
    },[key,value]);

    // Update this tab's state when another tab changes localStorage
    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === key && e.newValue !== null) {
                setValue(JSON.parse(e.newValue));
                console.log(`"${e.key}" updated from local storage: `,JSON.parse(e.newValue));
            }
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, [key]);

    return [value, setValue];
    
}