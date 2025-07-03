export default function Overview() {
  return (
    <div className="text-white">
      <p>Today's Overview</p>
      <div>
        <div className="grid grid-cols-13 grid-rows-4 gap-4">
          <div className="flex flex-col items-center justify-center bg-[#252525] rounded-3xl p-4 col-span-3 row-span-2">
            <p>Wind Status</p>
            <img
              src="src/assets/icons/wind-status.svg"
              alt="wind status"
              className="w-50 h-auto"
            />
            <div className="flex flex-row items-center justify-between w-full">
              <p>
                7.50 <span>km/h</span>
              </p>
              <p>
                6.20 <span>AM</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#252525] rounded-3xl p-4 col-span-3 row-span-2">
            <p>UV Indexs</p>
            <img
              src="src/assets/icons/uv-index.svg"
              alt="uv index"
              className="w-20 h-20"
            />
            <p>
              5.50 <span>UV</span>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#252525] rounded-3xl p-4 col-span-3 row-span-2 -row-end-1">
            <p>Humidity</p>
            <img
              src="src/assets/icons/humidity.svg"
              alt="humidity"
              className="w-20 h-20"
            />
            <p>84%</p>
            <p>The dew point is 27°C right now</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#252525] rounded-3xl p-4 col-span-3 row-span-2 -row-end-1">
            <p>Visibility</p>
            <img
              src="src/assets/icons/visibility.svg"
              alt="visibility"
              className="w-20 h-20"
            />
            <p>04 km </p>
            <p>Haze is affecting visibility</p>
          </div>
          <div className="p-10 col-span-4 row-span-4 border-amber-100 border-2 rounded-3xl bg-[#252525]">
            asdasd
          </div>
          <div className="p-10 col-span-3 row-span-1 border-amber-400 border-2 rounded-3xl bg-[#252525]">
            asdasdasdass
          </div>
          <div className="p-10 col-span-3 row-span-1 border-amber-400 border-2 rounded-3xl bg-[#252525]">
            asdasdasdass
          </div>
          <div className="p-10 col-span-3 row-span-1 border-amber-400 border-2 rounded-3xl bg-[#252525]">
            asdasdasdass
          </div>
          <div className="p-10 col-span-3 row-span-1 border-amber-400 border-2 rounded-3xl bg-[#252525]">
            asdasdasdass
          </div>
        </div>
      </div>
    </div>
  );
}
