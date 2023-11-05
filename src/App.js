
import './App.css';
import { Songs } from './Context';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import Navbar from './components/Navbar';
import songs from './Data/Songs.json'
import PlayingMusic from './components/PlayingMusic';
import { useState } from 'react';
function App() {
  const [song,setSong] = useState(songs[0])

  const handleSetSOng = (idSong)=>{
    const song = songs.find(song => song.id === idSong)
    if(!song ) {
      setSong(songs[0])
    }else{
      setSong(song)
    }
  

  }
 
  return (
    <div className="ap">
      <Songs.Provider value={{songs,song,handleSetSOng}}>
      <Navbar/>
     <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
      <DetailSong/>
      <ListSong/>
     </div>
     <PlayingMusic/>
      </Songs.Provider>
 
    </div>
  );
}

export default App;
