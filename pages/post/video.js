import Link from 'next/link'
import Head from 'next/head'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useState } from "react"

export default function Video(props) {

    const [aact, setAAct] = useState("pause");
    function pauseVideo(id) {
        const videoEl = document.getElementsByClassName("video-element")[id];
        //const audioEl = document.getElementById(e.target.id);
        videoEl.pause();
    }
    function playVideo(id) {
        if (isUserOwner()) {
            const videoEl = document.getElementsByClassName("video-element")[id];
            videoEl.play();
            //    var x = document.getElementById("b1");
            //    x = "PAUSE";
        }
        else {
            alert("Not an owner");
        }
    }
    function isUserOwner() {
        let isOwner = true;
        return isOwner;
        //Router.push('/post/audio');
        //router.push('/post/audio')
    }

    return (
        <>
            <Head>
                <title>Video</title>
            </Head>

            <h2 className="flex w-full h-screen bg-dunes bg-cover bg-center">
                <div className="hidden md:flex items-top mt-6  justify-right">
                    <div>
                        <Box margin="auto">
                            <Paper
                                elevation={5}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: 3,
                                }}>
                                <video id='v1' className="video-element" width="300" height="600" controls>
                                    <source
                                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="flex mt-2  border-inherit">
                                    <p className="mt-2 ml-5 items-center text-black font-bold hover:text-purple-500 transition duration-300">
                                        Video 1
                                    </p>
                                </div>
                                <div class="flex flex-row ml-2 mr-2">
                                    <button id="b00" className="flex bg-pink-600 text-white py-2 px-6 rounded mt-3 mb-3 mr-2" onClick={() => playVideo(0)}>PLAY</button>
                                    <button id="b01" className="flex bg-pink-600 text-white py-2 px-6 rounded mt-3 mb-3 ml-2" onClick={() => pauseVideo(0)}>PAUSE</button>
                                </div>
                            </Paper>
                        </Box>
                    </div>
                    <div>
                        <Box margin="auto">
                            <Paper
                                elevation={5}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: 3,
                                }}>
                                <video id='v2' className="video-element" width="300" height="600" controls>
                                    <source
                                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="flex mt-2  border-inherit">
                                    <p className="mt-2 ml-5 items-center text-black font-bold hover:text-purple-500 transition duration-300">
                                        Helix
                                    </p>
                                </div>
                                <div class="flex flex-row ml-2 mr-2">
                                    <button id="b10" className="flex bg-pink-600 text-white py-2 px-6 rounded mt-3 mb-3 mr-2" onClick={() => playVideo(1)}>PLAY</button>
                                    <button id="b11" className="flex bg-pink-600 text-white py-2 px-6 rounded mt-3 mb-3 ml-2" onClick={() => pauseVideo(1)}>PAUSE</button>
                                </div>
                            </Paper>
                        </Box>
                    </div>
                    <div>
                        <Box margin="auto">
                            <Paper
                                elevation={5}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: 3,
                                }}>
                                <video id='v3' className="video-element" width="300" height="600" controls>
                                    <source
                                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="flex mt-2 border-inherit">
                                    <p className="mt-2 ml-5 items-center text-black font-bold hover:text-purple-500 transition duration-300">
                                        Madza - Chords of Life
                                    </p>
                                </div>
                                <div class="flex flex-row ml-2 mr-2">
                                    <button id="b20" className="flex bg-pink-600 text-white py-2 px-6 rounded mt-3 mb-3 mr-2" onClick={() => playVideo(2)}>PLAY</button>
                                    <button id="b21" className="flex bg-pink-600 text-white py-2 px-6 rounded mt-3 mb-3 ml-2" onClick={() => pauseVideo(2)}>PAUSE</button>
                                </div>
                            </Paper>
                        </Box>
                    </div>

                </div>
            </h2>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return {
        props: { stars: json.stargazers_count }
    }
}
