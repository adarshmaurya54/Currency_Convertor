import { useState, useEffect } from "react";

function useCurrencyInfo(Currency){
    const [data, setDate] = useState({});
    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${Currency}`).then((res) => res.json()).then((res) => setDate(res['rates']))
    }, [Currency])
    console.log(data);
    
    return data;
}

export default useCurrencyInfo;