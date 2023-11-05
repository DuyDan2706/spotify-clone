import React from 'react'

export default function DetailSong() {
  return (
    <div className='col-span-1 p-3'>
        <h2 className='text-cyan-500 font-bold'> Now Playing </h2>
        <h2 className='text-neutral-500 text-2xl'>Sing me to left</h2>
        <div className='flex items-center justify-center mt-16'>
        <img className='h-64' src='https://i.scdn.co/image/ab6761610000e5eb6e50f29c671af8aff68b321d' alt='avatar'/>
  
        </div>
        <div className='flex justify-evenly items-center h-24'>
        <img className='w-16 rounded-full' src='https://i.scdn.co/image/ab67616d0000b27335ca35166aba974dd2dd29a2' alt='logo'/>
         <span className='text-xl text-white'>Ascence</span>
        </div>
    </div>
  )
}
