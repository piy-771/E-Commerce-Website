import { useState, useEffect } from "react";
import "../css/Countdown.css"; // Include your custom styles here

const Countdown = () => {
  const targetDate = new Date("2024-12-31T23:59:59").getTime(); 
 // alert(targetDate)// Adjust the target date

  // Default state to handle time values
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // Function to calculate the time left
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;
    //alert(difference)

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      // Update the state with the new time values
      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
      //console.log(timeLeft);
    } else {
      // If the countdown ends, set everything to "00"
      setTimeLeft({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
    }
  };

  // useEffect to run the countdown logic
  useEffect(() => {
    calculateTimeLeft(); // Calculate time immediately
    const timer = setInterval(calculateTimeLeft, 1000); // Update every second

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures this runs once


  // alert(timeLeft.days);
  // alert(timeLeft.seconds)
  return (
    <>
    <div className="countdown-container">
      <div className="countdown-header">
        <h2>Annual Sale Event</h2>
        <p>Get 20% OFF selected items. Limited time only.</p>
      </div>
      <div className="countdown-timer">
        <div>
          <span>{timeLeft.days}</span>
          <p>DAYS</p>
        </div>
        <div>:</div>
        <div>
          <span>{timeLeft.hours}</span>
          <p>HOURS</p>
        </div>
        <div>:</div>
        <div>
          <span>{timeLeft.minutes}</span>
          <p>MINUTES</p>
        </div>
        <div>:</div>
        <div>
          <span>{timeLeft.seconds}</span>
            
          <p>SECONDS</p>
        </div>
      </div>
      <button className="shop-button">Shop The Sale</button>
    </div>
    </>
  );
};

export default Countdown;
