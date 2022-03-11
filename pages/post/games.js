import Link from 'next/link'
import Head from 'next/head'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useState } from "react"
import Router from 'next/router'
import { useRouter } from 'next/router'



export default function Games(props) {

    const [aact, setAAct] = useState("pause");
    function pauseAudio(id) {
        const audioEl = document.getElementsByClassName("audio-element")[id];
        //const audioEl = document.getElementById(e.target.id);
        audioEl.pause();
    }
    function playAudio(id) {
        if (isUserOwner()) {
            const audioEl = document.getElementsByClassName("audio-element")[id];
            audioEl.play();
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
                <title>Audio</title>
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
                                <img src="https://27mi124bz6zg1hqy6n192jkb-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/Our-Top-10-Songs-About-School-768x569.png"></img>
                                <audio id='a1' className="audio-element" controls>
                                    <source
                                        src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
                                        type="audio/mpeg"
                                    />
                                    Your browser does not support the audio tag.
                                </audio>
                                <div className="flex mt-2  border-inherit">
                                    <p className="mt-2 ml-5 items-center text-black font-bold hover:text-purple-500 transition duration-300">
                                        Slow Music
                                    </p>
                                </div>
                                <div class="flex flex-row ml-2 mr-2">
                                    <button id="b00" className="flex bg-pink-600 text-white py-2 px-6 rounded mt-3 mb-3 mr-2" onClick={() => playAudio(0)}>PLAY</button>
                                    <button id="b01" className="flex bg-pink-600 text-white py-2 px-6 rounded mt-3 mb-3 ml-2" onClick={() => pauseAudio(0)}>PAUSE</button>
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
                                <img src="https://27mi124bz6zg1hqy6n192jkb-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/Our-Top-10-Songs-About-School-768x569.png"></img>
                                <audio id='a2' className="audio-element" controls>
                                    <source
                                        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
                                        type="audio/mpeg"
                                    />
                                    Your browser does not support the audio tag.
                                </audio>
                                <div className="flex mt-2  border-inherit">
                                    <p className="mt-2 ml-5 items-center text-black font-bold hover:text-purple-500 transition duration-300">
                                        Helix
                                    </p>
                                </div>
                                <div class="flex flex-row ml-2 mr-2">
                                    <button id="b10" className="flex bg-pink-600 text-white py-2 px-6 rounded mt-3 mb-3 mr-2" onClick={() => playAudio(1)}>PLAY</button>
                                    <button id="b11" className="flex bg-pink-600 text-white py-2 px-6 rounded mt-3 mb-3 ml-2" onClick={() => pauseAudio(1)}>PAUSE</button>
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
                                <img src="https://27mi124bz6zg1hqy6n192jkb-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/Our-Top-10-Songs-About-School-768x569.png"></img>
                                <audio id='a3' className="audio-element" controls>
                                    <source
                                        src="https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3"
                                        type="audio/mpeg"
                                    />
                                    Your browser does not support the audio tag.
                                </audio>
                                <div className="flex mt-2 border-inherit">
                                    <p className="mt-2 ml-5 items-center text-black font-bold hover:text-purple-500 transition duration-300">
                                        Madza - Chords of Life
                                    </p>
                                </div>
                                <div class="flex flex-row ml-2 mr-2">
                                    <button id="b20" className="flex bg-pink-600 text-white py-2 px-6 rounded mt-3 mb-3 mr-2" onClick={() => playAudio(2)}>PLAY</button>
                                    <button id="b21" className="flex bg-pink-600 text-white py-2 px-6 rounded mt-3 mb-3 ml-2" onClick={() => pauseAudio(2)}>PAUSE</button>
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

