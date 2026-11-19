"use client";

import { useEffect, useState } from "react";

interface LagosClockProps {
  showSeconds?: boolean;
}

export default function LagosClock({ showSeconds = false }: LagosClockProps) {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    function update() {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        ...(showSeconds ? { second: "2-digit" } : {}),
        hour12: false,
      };
      setTimeStr(now.toLocaleTimeString("en-GB", options) + " WAT");
    }

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [showSeconds]);

  if (!timeStr) {
    return <span className="tabular-nums">--:-- WAT</span>;
  }

  return <span className="tabular-nums font-semibold">{timeStr}</span>;
}
