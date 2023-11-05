import React, { useContext, useState } from "react";
import { Songs } from "../Context";

export default function ListSong() {
  const { songs,handleSetSOng } = useContext(Songs);
  const [idSong, setIdSong] = useState(0);
  const handPlaySong = (idsong) => {
    setIdSong(idsong)
    handleSetSOng(idsong)
  }
  console.log("data", songs);
  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-ful ">
        <thead className="h-12 text-white bg-slate-700">
          <tr>
            <th className="w-[10%] min-w-[30px]">#</th>
            <th className="w-[60%] text-left">Title</th>
            <th className="w-[20%]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song,index) => (
            <tr key={song.id} 
            className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 ${idSong === song.id && 'bg-slate-600 text-teal-400'}`}
             onClick={()=> handPlaySong(song.id)}>
              <td className="text-center">{index + 1}</td>
              <td>{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                {" "}
                <a href={song.url}>
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
