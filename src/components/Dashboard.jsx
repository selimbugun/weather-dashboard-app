import WeatherCalendar from "./WeatherCalendar";
import Navbar from "./Navbar";
import ChanceOfRain from "./ChanceOfRain";

export default function Dashboard() {
  return (
    <div className="max-w-[1400px] mx-auto max-h-screen bg-[#111015]">
      <Navbar />
      <WeatherCalendar />
    </div>
  );
}
