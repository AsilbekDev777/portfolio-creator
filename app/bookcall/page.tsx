"use client"
import { Card } from "@heroui/react";
import {Skeleton} from "@heroui/skeleton";
import {useEffect, useState} from "react";
export default function AboutPage() {
  const message = "This page will be created soon...";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(message.slice(0, i));
      i++;
      if (i > message.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[650px] overflow-hidden flex items-center justify-center bg-white">
      <Card className="w-full max-w-6xl flex items-center justify-center p-10" radius="none" shadow="none">
        <h2 className="text-3xl font-semibold text-center w-full">
          {displayed}
        </h2>
      </Card>
    </div>
  );
}
