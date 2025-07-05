export default function Overview() {
  return (
    <>
      <div className="text-white">
        <div className="flex flew-row justify-between mx-3 mb-2">
          <p>Today's Overview</p>
          <div className="flex flex-row items-center justify-between w-[22%]">
            <p>Other Cities</p>
            <p>See All</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between text-white">
        <div className="grid grid-cols-6 grid-rows-2 gap-6 text-white h-[65vh] md:w-[75%]">
          {/*Wind Status */}
          <div className="flex flex-col justify-between bg-[#252525] rounded-3xl p-4 col-span-2 row-span-1">
            <p>Wind Status</p>
            <img
              src="src/assets/icons/wind-status.svg"
              alt="Wind Status"
              className="w-auto h-auto"
            />
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-row">
                <p className="font-bold">7.50</p>
                <span>&nbsp;km/h</span>
              </div>
              <p>6.20 AM</p>
            </div>
          </div>
          {/*Wind Status END */}

          {/*UV INDEX */}

          <div className="flex flex-col justify-between bg-[#252525] rounded-3xl p-4 col-span-2 row-span-1">
            <p>Uv Index</p>
            <img
              src="src/assets/icons/uv-index.svg"
              alt="Uv Index"
              className="w-23 h-auto m-auto"
            />
            <div className="flex flex-row items-center justify-center w-full">
              <div className="flex flex-row">
                <p className="font-bold">5.50</p>
                <span>&nbsp;UV</span>
              </div>
            </div>
          </div>

          {/*UV INDEX END*/}

          {/*HUMIDITY */}

          <div className="flex flex-col justify-between bg-[#252525] rounded-3xl p-4 col-span-2 row-span-1 -row-end-1">
            <p>Humidity</p>
            <img
              src="src/assets/icons/humidity.svg"
              alt="humidity"
              className="w-23 h-auto m-auto"
            />
            <div className="flex flex-row items-center justify-between w-full">
              <p className="font-bold w-20">84%</p>

              <p className="text-sm text-[#818085]">
                The dew point is 27° right now
              </p>
            </div>
          </div>
          {/*HUMIDITY END */}
          {/*VISIBILITY */}

          <div className="flex flex-col justify-between bg-[#252525] rounded-3xl p-4 col-span-2 row-span-1 -row-end-1">
            <p>Visibility</p>
            <img
              src="src/assets/icons/visibility.svg"
              alt="Visibility"
              className="w-23 h-auto m-auto"
            />
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-row w-20 ">
                <p className="font-bold">04</p>
                <span>&nbsp;km</span>
              </div>
              <p className="text-sm text-[#818085]">
                Haze is affecting visibility
              </p>
            </div>
          </div>

          {/*VISIBILITY END */}
          <div className="col-span-2 row-span-3">
            <img
              src="/images/poster.svg"
              alt="poster"
              className="w-full h-full object-cover rounded-3xl py-3 "
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 justify-between h-[65vh] md:w-[25%]">
          {/* Beijing*/}
          <div className="flex flex-row justify-between w-[90%] ml-2 p-1 items-center bg-[#1B1B1D] rounded-3xl">
            <div className="ml-3">
              <p className="text-sm text-[#777777] py-1">China</p>
              <p className="text-2xl py-1">Beijing</p>
              <p className="font-light text-sm text-[#EFEFEF]">Cloudy</p>
            </div>
            <div>
              <img
                src="/src/assets/icons/weather-icons/cloud.svg"
                alt="cloudy"
                className="p-3 w-20"
              />
            </div>
          </div>
          {/* Calif*/}

          <div className="flex flex-row justify-between w-[90%] ml-2 p-1 items-center bg-[#1B1B1D] rounded-3xl">
            <div className="ml-3">
              <p className="text-sm text-[#777777] py-1">USA</p>
              <p className="text-2xl py-1">California</p>
              <p className="font-light text-sm text-[#EFEFEF]">Windy</p>
            </div>
            <div>
              <img
                src="/src/assets/icons/weather-icons/wind.svg"
                alt="windy"
                className="p-3 w-20"
              />
            </div>
          </div>
          {/* Arab*/}

          <div className="flex flex-row justify-between w-[90%]   ml-2 p-1 items-center bg-[#1B1B1D] rounded-3xl">
            <div className="ml-3">
              <p className="text-sm text-[#777777] py-1">Dubai</p>
              <p className="text-2xl py-1">Arab Emirates</p>
              <p className="font-light text-sm text-[#EFEFEF]">Mostly Sunny</p>
            </div>
            <div>
              <img
                src="/src/assets/icons/weather-icons/sunny.svg"
                alt="cloudy"
                className="p-3 w-20"
              />
            </div>
          </div>
          {/* Canada*/}

          <div className="flex flex-row justify-between w-[90%] ml-2 p-1 items-center bg-[#1B1B1D] rounded-3xl">
            <div className="ml-3">
              <p className="text-sm text-[#777777] py-1">Canada</p>
              <p className="text-2xl py-1">Charlottetown</p>
              <p className="font-light text-sm text-[#EFEFEF]">
                Light SnowSnower
              </p>
            </div>
            <div>
              <img
                src="/src/assets/icons/weather-icons/snow.svg"
                alt="snow"
                className="p-3 w-20"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
