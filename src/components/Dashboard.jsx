import WeatherCalendar from "./WeatherCalendar";
import Navbar from "./Navbar";
import Overview from "./Overview";

export default function Dashboard() {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <Navbar />
      <WeatherCalendar />
      <Overview />
    </div>
  );
}
