import React, { useContext } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../Context';

export default function PlayingMusic() {
  const {song} = useContext(Songs)
  return (
    <div>
        
<AudioPlayer
 className='player-music' 
 src={song.url} 
 layout="stacked-reverse" 
 showSkipControls={true}
 showJumpControls={false}
 />
    </div>
  )
}
