import React from 'react'

function Temp({ city,setcity, stats }) {
  const handleCityChange = (e) => {
    console.log(e.target.value)
    setcity(e.target.value)
  }

  return (
    <>
      <div className='flex items-center justify-between space-x-2 me-4'>
        <input
          type='text'
          className='bg-slate-600 text border border-slate-500 text-slate-200 placeholder-slate-400 text-mb w-60 p-2 focus:border-slate-400'
          placeholder='Enter the city'
          onChange={handleCityChange}
          value={city}
        />
      </div>

      <div className='flex justify-center mt-6'>
        {stats.isday !== 0 ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-yellow-400 w-14 h-14">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg>
        )}
      </div>

      <div className='flex justify-center items-center text-slate-100 mt-4'>
        <p className='font font-semibold text-[55px]'>{stats.temp}</p>
        <span className='text-[33px]'>&#176;C</span>
      </div>

      <div className='flex justify-center items-center text-slate-100 mt-4 text-2xl'>
        {stats.condition}
      </div>

      <div className='flex justify-center text-slate-400 mt-5 text-[15px]'>
        Today {stats.time} | {stats.location}
      </div>
    </>
  )
}

export default Temp;
