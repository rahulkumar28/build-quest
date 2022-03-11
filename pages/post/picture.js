import Link from 'next/link'
import Head from 'next/head'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useState } from "react"
import Router from 'next/router'
import { useRouter } from 'next/router'



export default function Picture(props) {

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
                <title>pictures</title>
            </Head>

            <h2 className="flex w-full h-screen bg-dunes bg-cover bg-center" >
                <div className="hidden md:flex items-top mt-6  justify-right">
                    <div className="w-300 h-400">
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
                                <div className="w-200 h-300">
                                    <img src="https://365psd.com/images/istock/previews/9351/93518619-colorful-music-background-with-music-notes-and-hummingbirds.jpg" className="object-contain"></img>
                                </div>

                                <div class="flex flex-row ml-2 mr-2">
                                    <button id="b00" className="flex bg-pink-600 text-white py-2 px-6 rounded mt-3 mb-3 mr-2" onClick={() => playAudio(0)}>View</button>
                                    <button id="b01" className="flex bg-pink-600 text-white py-2 px-6 rounded mt-3 mb-3 ml-2" onClick={() => pauseAudio(0)}>Buy</button>
                                </div>
                            </Paper>
                        </Box>
                    </div>
                    <div className="w-300 h-400">
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
                                <div className="w-200 h-300">
                                    <img src="https://image.shutterstock.com/image-vector/treble-clef-vector-illustration-music-600w-1702470565.jpg" className="object-contain"></img>
                                </div>

                                <div class="flex flex-row ml-2 mr-2">
                                    <button id="b10" className="flex bg-pink-600 text-white py-2 px-6 rounded mt-3 mb-3 mr-2" onClick={() => playAudio(1)}>View</button>
                                    <button id="b11" className="flex bg-pink-600 text-white py-2 px-6 rounded mt-3 mb-3 ml-2" onClick={() => pauseAudio(1)}>Buy</button>
                                </div>
                            </Paper>
                        </Box>
                    </div>
                    <div className="w-300 h-400">
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
                                <img src="https://365psd.com/images/istock/previews/2589/25891159-colorful-floral-swirl.jpg" class="w-500 h-416"></img>


                                <div class="flex flex-row ml-2 mr-2">
                                    <button id="b20" className="flex bg-pink-600 text-white py-2 px-6 rounded mt-3 mb-3 mr-2" onClick={() => playAudio(2)}>View</button>
                                    <button id="b21" className="flex bg-pink-600 text-white py-2 px-6 rounded mt-3 mb-3 ml-2" onClick={() => pauseAudio(2)}>Buy</button>
                                </div>
                            </Paper>
                        </Box>
                    </div>

                </div>
            </h2 >
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

