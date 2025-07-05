import ChangeOfRain from "./ChanceOfRain";
export default function WeatherCalendar() {
  return (
    <div className="flex flex-row justify-between mx-3">
      <div className="bg-[#111015] text-white flex flex-col items-center justify-center py-4">
        {/* DAY SELECTOR */}
        <div className="w-full flex flex-row items-center justify-between mb-4">
          <div className="w-full flex flex-row items-center justify-start gap-4">
            <p className="text-gray-400">Today</p>
            <p className="text-gray-400">Tomorrow</p>
            <p>Next 7 Days</p>
          </div>
          <div className="w-full flex flex-row items-center justify-end gap-4">
            <div className="flex bg-gray-900 p-1 rounded-full w-max">
              <button className="bg-blue-200 text-gray-900 px-4 py-1 rounded-full text-sm font-medium">
                Forecast
              </button>
              <button className="text-gray-400 px-4 py-1 rounded-full text-sm font-medium">
                Air Quality
              </button>
            </div>
          </div>
        </div>
        {/* WEATHER CALENDAR */}
        <div className="grid grid-cols-8 gap-2 ">
          {/* First Card*/}
          <div className="col-span-2 flex flex-col items-center bg-[#BBD7EC] rounded-3xl h-[32vh]">
            <div className="flex flex-row justify-between w-full bg-[#AECADF] rounded-t-3xl p-2">
              <p className="text-black font-bold">Friday</p>
              <p className="text-black font-bold">11:45 AM</p>
            </div>

            <div className="w-full flex flex-col items-center justify-between rounded-3xl p-2">
              <div className="w-full flex flex-row items-center justify-between py-1 px-3">
                <p className="text-black text-xl font-bold">25°C</p>
                <img
                  src="/src/assets/icons/weather-icons/yellow-weather-icon.svg"
                  className="w-12 h-auto"
                />
              </div>
              <div className="w-full grid grid-cols-2 gap-2">
                {/* Sol tarafta ilk 4 öğe */}
                <div className="flex flex-col gap-2 ml-2 mb-2">
                  <p className="text-gray-500 text-sm">
                    Real Feel <span className="text-black">18°</span>
                  </p>
                  <p className="text-gray-500 text-sm">
                    Wind <span className="text-black">6-7 KM/H</span>
                  </p>
                  <p className="text-gray-500 text-sm">
                    Pressure <span className="text-black">100MB</span>
                  </p>
                  <p className="text-gray-500 text-sm">
                    Humidity <span className="text-black">51%</span>
                  </p>
                </div>

                {/* Sağ tarafta sadece 2 öğe ve ortalanmış şekilde */}
                <div className="flex flex-col gap-2 justify-center">
                  <p className="text-gray-500 text-sm">
                    Sunrise <span className="text-black">5:30 AM</span>
                  </p>
                  <p className="text-gray-500 text-sm">
                    Sunset <span className="text-black">6:45</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* The Rest of the Cards*/}
          <div className="bg-[#252525]  flex flex-col items-center justify-between rounded-3xl max-w-[100px] ml-2">
            <div className="border-b border-[#1B1B1D] text-center p-2 w-full">
              <p>SAT</p>
            </div>
            <img
              src="/src/assets/icons/weather-icons/rain1.svg"
              alt="rain"
              className="w-16  h-auto"
            />
            <p className="font-bold mb-5">18°C</p>
          </div>
          <div className="bg-[#252525]  flex flex-col items-center justify-between rounded-3xl max-w-[100px]">
            <div className="border-b border-[#1B1B1D] text-center p-2 w-full ">
              <p>SUN</p>
            </div>
            <img
              src="src/assets/icons/weather-icons/rain2.svg"
              alt="rain"
              className="w-16  h-auto"
            />
            <p className="font-bold mb-5">15°C</p>
          </div>
          <div className="bg-[#252525]  flex flex-col items-center justify-between rounded-3xl max-w-[100px]">
            <div className="border-b border-[#1B1B1D] text-center p-2 w-full ">
              <p>MON</p>
            </div>
            <img
              src="src/assets/icons/weather-icons/cloud.svg"
              alt="cloud"
              className="w-16  h-auto"
            />
            <p className="font-bold mb-5">25°C</p>
          </div>
          <div className="bg-[#252525]  flex flex-col items-center justify-between rounded-3xl max-w-[100px]">
            <div className="border-b border-[#1B1B1D] text-center p-2 w-full ">
              <p>TUE</p>
            </div>
            <img
              src="src/assets/icons/weather-icons/rain3.svg"
              alt="rain"
              className="w-16  h-auto"
            />
            <p className="font-bold mb-5">15°C</p>
          </div>
          <div className="bg-[#252525]  flex flex-col items-center justify-between rounded-3xl max-w-[100px]">
            <div className="border-b border-[#1B1B1D] text-center p-2 w-full ">
              <p>WED</p>
            </div>
            <img
              src="src/assets/icons/weather-icons/rain4.svg"
              alt="rain"
              className="w-16  h-auto"
            />
            <p className="font-bold mb-5">15°C</p>
          </div>
          <div className="bg-[#252525]  flex flex-col items-center justify-between rounded-3xl max-w-[100px]">
            <div className="border-b border-[#1B1B1D] text-center p-2 w-full ">
              <p>THU</p>
            </div>
            <img
              src="src/assets/icons/weather-icons/wind.svg"
              alt="wind"
              className="w-16  h-auto"
            />
            <p className="font-bold mb-5">19°C</p>
          </div>
        </div>
      </div>
      <ChangeOfRain />
    </div>
  );
}
