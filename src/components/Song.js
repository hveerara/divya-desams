import React from "react";
import { useParams } from "react-router-dom";
import { songsData } from "../lib/songs-data";
import { getBackgroundImageUrl } from "../lib/util";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";

const Song = () => {
  const { id } = useParams();
  const currentSong = songsData.filter((song) => song.id === id);

  return (
    <>
      <Navbar />
      <div className="songDetail ">
        <div
          className="songDetailTitle "
          style={{
            backgroundImage: getBackgroundImageUrl(currentSong[0].category),
            height: "25vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="rounded-md bg-black align-middle text-center xs:text-2xl sm:text-3xl md:text-4xl text-5xl bold tracking-wide text-gray-100 ">
          {currentSong[0].sthalam} &nbsp; &#x1F3B5;&nbsp;&nbsp;
          {currentSong[0].songTitle}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 w-full p-2 items-center container mx-auto my-auto pt-20 pb-20">
          <div className="grid grid-cols-1 w-full">
            <div className="grid w-full grid-cols-2 sm:grid-cols-2 border-solid border-b-2 rounded-md p-2">
              <div className="font-light pl-4 grow-0 col-span-1 text-center">
                Author:
              </div>
              <div className="font-bold col-span-1 text-left break-words">
                {currentSong[0].author}
              </div>
            </div>
            <div className="grid w-full grid-cols-2 sm:grid-cols-2 border-solid border-b-2 rounded-md p-2">
              <div className="font-light pl-4 grow-0 col-span-1 text-center">
                Raga:
              </div>
              <div className="font-bold col-span-1 text-left break-words">
                {currentSong[0].songRagam}
              </div>
            </div>
            <div className="grid w-full grid-cols-2 sm:grid-cols-2 border-solid border-b-2 rounded-md p-2">
              <div className="font-light pl-4 grow-0 text-center col-span-1">
                Thala:
              </div>
              <div className="font-bold col-span-1 break-words">
                {currentSong[0].songThalam}
              </div>
            </div>
            {currentSong[0].songURL && (
              <div className="grid w-full grid-cols-2 sm:grid-cols-2 border-solid border-b-2 rounded-md p-2">
                <div className="font-light pl-4 grow-0 text-center col-span-1">
                  Song on {currentSong[0].sthalam}:
                </div>
                <iframe
                  title={currentSong[0].songTitle}
                  src={currentSong[0].songURL}
                  width="100%"
                  height="100"
                  scrolling="no"
                  frameBorder="no"
                  loading="lazy"
                ></iframe>
              </div>
            )}
            {currentSong[0].additionalSongs && (
              <div className="grid w-full grid-cols-2 sm:grid-cols-2 border-solid border-b-2 rounded-md p-2">
                <div className="font-light pl-4 grow-0 text-center col-span-1">
                  Additional Songs:
                </div>
                <div className="items-center">
                  {currentSong[0].additionalSongs.map((additionalSong) => (
                    <iframe
                      key={id}
                      title={currentSong[0].songRagam}
                      src={additionalSong}
                      width="100%"
                      height="100"
                      scrolling="no"
                      frameBorder="no"
                      loading="lazy"
                    ></iframe>
                  ))}
                </div>
              </div>
            )}
            {currentSong[0].songIntro !== "<span></span>" && (
              <div className="grid w-full grid-cols-2 sm:grid-cols-2 border-solid border-b-2 rounded-md p-2">
                <div className="font-light pl-4 grow-0 text-center col-span-1">
                  Background Story:
                </div>
                <div
                  className="story container mx-auto wrap justify-center items-center text-justify h-22 overflow-y-auto"
                  dangerouslySetInnerHTML={{ __html: currentSong[0].songIntro }}
                ></div>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 w-full pl-10">
            {currentSong[0].songLyrics && (
              <div className="songDetailLyricsStory container mx-auto wrap">
                {/* <div className="text-gray-100 text-3xl bold tracking-wide">
                  Song Lyrics:
                </div> */}
                <div className="lyrics items-center ">
                  <iframe
                    title={currentSong[0].songTitle}
                    src={currentSong[0].songLyrics}
                    // width="600"
                    width="100%"
                    height="770"
                    frameBorder="no"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* <div className="grid grid-cols-1 w-full p-2">
          <div className="grid w-full grid-cols-2 sm:grid-cols-2 border-solid border-b-1 rounded-md p-2">
            <div className="font-light pl-4 grow-0 col-span-1 text-center">
              Author:
            </div>
            <div className="font-bold col-span-3 sm:col-span-1 text-left break-words">
              {currentSong[0].author}
            </div>
          </div>
          <div className="grid w-full grid-cols-2 sm:grid-cols-2 border-solid border-b-1 rounded-md p-2">
            <div className="font-light pl-4 grow-0 col-span-1 text-center">
              Raga:
            </div>
            <div className="font-bold col-span-3 sm:col-span-1 text-left break-words">
              {currentSong[0].songRagam}
            </div>
          </div>
          <div className="grid w-full grid-cols-2 sm:grid-cols-2 border-solid border-b-1 rounded-md p-2">
            <div className="font-light pl-4 grow-0 text-center col-span-1">
              Thala:
            </div>
            <div className="font-bold col-span-3 sm:col-span-1 break-words">
              {currentSong[0].songThalam}
            </div>
          </div>
          {currentSong[0].songURL && (
            <div className="grid w-full grid-cols-2 sm:grid-cols-2 border-solid border-b-1 rounded-md p-2">
              <div className="font-light pl-4 grow-0 text-center col-span-1">
                Song on {currentSong[0].sthalam}:
              </div>
              <iframe
                title={currentSong[0].songTitle}
                src={currentSong[0].songURL}
                width="100%"
                height="100"
                scrolling="no"
                frameBorder="no"
                loading="lazy"
              ></iframe>
            </div>
          )}
          {currentSong[0].additionalSongs && (
            <div className="grid w-full grid-cols-2 sm:grid-cols-2 border-solid border-b-1 rounded-md p-2">
              <div className="font-light pl-4 grow-0 text-center col-span-1">
                Additional Songs:
              </div>
              <div className="items-center">
                {currentSong[0].additionalSongs.map((additionalSong) => (
                  <iframe
                    key={id}
                    title={currentSong[0].songRagam}
                    src={additionalSong}
                    width="100%"
                    height="100"
                    scrolling="no"
                    frameBorder="no"
                    loading="lazy"
                  ></iframe>
                ))}
              </div>
            </div>
          )}
          {currentSong[0].songIntro !== "<span></span>" && (
            <div className="grid w-full grid-cols-2 sm:grid-cols-2 border-solid border-b-1 rounded-md p-2">
              <div className="font-light pl-4 grow-0 text-center col-span-1">
                Background Story:
              </div>
              <div
                className="story container mx-auto wrap justify-center items-center text-justify h-50 overflow-y-auto"
                dangerouslySetInnerHTML={{ __html: currentSong[0].songIntro }}
              ></div>
            </div>
          )}
        </div>

        {currentSong[0].songLyrics && (
          <div className="songDetailLyricsStory container mx-auto wrap justify-center pt-10">
            <div className="text-gray-100 text-3xl pt-20 bold tracking-wide">
              Song Lyrics:
            </div>
            <div className="lyrics items-center ">
              <iframe
                title={currentSong[0].songTitle}
                src={currentSong[0].songLyrics}
                width="600"
                height="770"
                frameBorder="no"
              ></iframe>
            </div>
          </div>
        )} */}
      </div>
      <Footer />
    </>
  );
};

export default Song;
