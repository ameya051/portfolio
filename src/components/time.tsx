'use client'
import { DATA } from '@/data/resume'
import { AlarmClock } from 'lucide-react'
import React, { useEffect, useState } from 'react'

type Props = {}

function Time({ }: Props) {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);

    return (
        <>
            <AlarmClock className="size-4 mr-1 group-hover:text-blue-500" />
            {currentTime.toLocaleTimeString(DATA.localCode, {
                timeZone: DATA.timeZone,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            })}
        </>
    )
}

export default Time
