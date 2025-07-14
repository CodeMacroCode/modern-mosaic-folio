import { useState, useEffect } from "react";

export function TimeDisplay() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).toUpperCase();
  };

  return (
    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
      MONTREAL | {formatTime(time)}
    </span>
  );
}