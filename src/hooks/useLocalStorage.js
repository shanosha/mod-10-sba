import { useEffect, useState } from "react"

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(()=>{
        // Get initial value
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    })

    useEffect(()=>{
        // Set localStorage value
        localStorage.setItem(key,JSON.stringify(value))
        console.log(`Saved to local storage "${key}: "`,value)
    },[key,value]);

    return [value, setValue];
}