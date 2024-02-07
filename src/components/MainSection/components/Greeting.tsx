import { useEffect, useState } from 'react';

type currentTimeType = {
  hour: string;
  minute: string;
  date: string;
};

const Greeting = () => {
  const [currentTime, setCurrentTime] = useState<currentTimeType>({ hour: "00", minute: "00", date: '01/01/2023' });

  // Update current time
  const updateTime = () => {
    const currentDate = new Date();

    const time = currentDate.toLocaleString("id-ID", { hour: '2-digit', 'minute': '2-digit' });
    const [hour, minute] = time.split(".");
    const date = currentDate.toLocaleDateString("id-ID", { day: 'numeric', month: 'numeric', year: 'numeric' }).replaceAll("/", " / ");

    setCurrentTime({ hour: hour, minute: minute, date: date });
  };

  useEffect(() => {
    const updateTimeInterval = setInterval(updateTime, 1000);

    return (() => clearInterval(updateTimeInterval));
  }, []);

  return (
    <div className="greeting">
      <h1 className="greeting__hello">Hello!</h1>
      <h2 className="greeting__time">{currentTime.hour}<span className="greeting__time__colon">:</span>{currentTime.minute} {parseInt(currentTime.hour) >= 12 ? "PM" : "AM"}</h2>
      <h2 className="greeting__date">{currentTime.date}</h2>
    </div>
  );
};

export default Greeting;