import React from 'react'

export default function Highlights({stats}) {
  return (
    <div className='bg-slate-600 text-slate-100 p-1 mt-0 flex flex-col justify-start items-center'>
      <h2 className='text-sm mt-2'>{stats.title}</h2>
      <div className='justify-between mt-2'>      
        <span className='text-4xl font-bold'>{stats.value}</span>
        <span className='text-2xl'>{stats.unit}</span>
      </div>
      {stats.direction ?(
        <div className='mt-2 flex'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-slate-100 mt-2 ">
       <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
      </svg>
      <div className='text-xl mt-1 ms-2 text-slate-200'>E</div>
      
      </div>
      ):null
      }
     { stats.title=="Humidity" ? ( 
      <div class="w-full mt-5 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
      <div class="bg-yellow-400 h-1.5 rounded-full dark:bg-blue-500" style={{width: "45%"}}></div>
      </div>
     ):null
    }
    </div>
    
  )
}

