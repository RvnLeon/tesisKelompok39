import React from "react";
import Countdown from "react-countdown";

const CountdownTimer = () => {
  return (
    <div className="flex items-center justify-center h-full w-screen text-blue-600 capitalize flex-col gap-5 p-2">
      <h1 className="text-lg lg:text-xl xl:text-6xl font-extrabold">
        🎉Time Left🎉
      </h1>
      <Countdown
        date={new Date("2025-01-24T06:00:00+07:00")}
        renderer={(props) => {
          if (props.completed) {
            return <span className="text-6xl font-bold">Now!</span>;
          }
          return (
            <span className="text-lg lg:text-2xl xl:text-6xl">
              <span className="font-bold">{props.days}</span> days,&nbsp;
              <span className="font-bold">{props.hours}</span> hours,&nbsp;
              <span className="font-bold">{props.minutes}</span> minutes,&nbsp;
              <span className="font-bold">{props.seconds}</span> seconds
            </span>
          );
        }}
      />
    </div>
  );
};

export default CountdownTimer;
