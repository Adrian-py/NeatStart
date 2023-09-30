import { useEffect, useState } from 'react';

type currentTimeType = {
  time: string;
  date: string;
};

const Greeting = () => {
  const [currentTime, setCurrentTime] = useState<currentTimeType>({ time: '00:00 AM', date: '01/01/2023' });

  // Update current time
  const updateTime = () => {
    const currentDate = new Date();

    let time = currentDate.toLocaleString("id-ID", { hour: 'numeric', 'minute': '2-digit' }).replace('.', ':');
    const date = currentDate.toLocaleDateString("id-ID", { day: 'numeric', month: 'numeric', year: 'numeric' }).replaceAll("/", " / ");

    if (currentDate.getHours() >= 12) time += " PM";
    else time += " AM";

    setCurrentTime({ time: time, date: date });
  };

  useEffect(() => {
    const updateTimeInterval = setInterval(updateTime, 1000);

    return (() => clearInterval(updateTimeInterval));
  }, []);

  return (
    <div className="greeting">
      <h1 className="greeting__hello">Hello!</h1>
      <h2 className="greeting__time">{currentTime.time}</h2>
      <h2 className="greeting__date">{currentTime.date}</h2>
    </div>
  );
};

export default Greeting;