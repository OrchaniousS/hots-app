import React, { useState, useEffect } from "react";

const DateGenerator = () => {
  const [textDate, setTextDate] = useState();
  const [monthDate, setMonthDate] = useState("");
  const [dayDate, setDayDate] = useState("");

  useEffect(() => {
    const d = new Date();
    const dateToDay = d.getDay();
    const dateToMonth = d.getMonth();

    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    setMonthDate(month[dateToMonth]);
    setDayDate(d.getDate());

    setTextDate(monthDate + " " + dayDate + ", " + weekday[dateToDay]);
  }, [monthDate, dayDate]);

  return (
    <>
      <h2>Weekly Rotation</h2>
      <h2>{textDate}</h2>
    </>
  );
};

export default DateGenerator;
