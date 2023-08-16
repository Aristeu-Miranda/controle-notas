import { useEffect, useState } from "react"

function Hours() {
    const [currentDateTime, setCurrentDateTime] = useState<Date>(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentDateTime(new Date());
      }, 1000); 
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    const formatDate = (date: Date): string => {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
      return date.toLocaleDateString(undefined, options);
    };
  
    const formatTime = (time: Date): string => {
      const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };
      return time.toLocaleTimeString(undefined, options);
    };

    return (
        <div className="pt-1 font-bold flex flex-col">
            <p>{formatDate(currentDateTime)}</p>
            <p>{formatTime(currentDateTime)}</p>
        </div>
    )
}

export default Hours