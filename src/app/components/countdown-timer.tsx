"use client";

import React, { useEffect, useState } from "react";
import { calculateTimetoEvent } from "../utils/countdown-utils";
import { type Framework } from "@/app/utils/framework-utils";
import TimeUnit from "./time-unit";

export default function CountdownTimer({
  currentFramework,
}: {
  currentFramework: Framework;
}) {
  const [countDown, setCountDown] = useState(calculateTimetoEvent());

  useEffect(() => {
    const intervalId = setInterval(
      () => setCountDown(calculateTimetoEvent()),
      1000
    );
    return () => clearInterval(intervalId);
  }, []);

  return <div className="flex gap-10 items-center">
      <TimeUnit label="DAYS"
      value={countDown.days}
      currentFramework={currentFramework}
      />
      <TimeUnit label="HOURS"
      value={countDown.hours}
      currentFramework={currentFramework}
      />
      <TimeUnit label="MINUTES"
      value={countDown.minutes}
      currentFramework={currentFramework}
      />
      <TimeUnit label="SECONDS"
      value={countDown.seconds}
      currentFramework={currentFramework}
      />
  </div>;
}
