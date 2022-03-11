import Link from 'next/link'
import Head from 'next/head'
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import { useRouter } from 'next/router'

import {
    Grid,
    Card,
    CardHeader,
    CardContent,
    CardActionArea,
    Typography,
    Container,
    Button,
} from "@mui/material";


export default function Pricing(props) {
    const router = useRouter();
    const PriceContent = [
        {
            href: "/audio",
            image: "images/2.jpg",
            heading: "OneTime NFT",
            pricetag: "ETH 0.001/mo",
            content: `Writers write descriptive paragraphs because their purpose
	is to describe something.`,
        },
        {
            href: "/video",
            image: "images/4.jpg",
            heading: "Money Stream",
            pricetag: "Money Stream",
            content: `Writers write descriptive paragraphs because their purpose
	is to describe something.`,
        },
    ];

    const buyNFT = async () => {
        await axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((res) => {
                console.log(res.data);
                //window.location.replace("/");
                router.push('/post/audio');
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <>
            <Grid container spacing={5}>
                {PriceContent.map((data, index) => {
                    return (
                        <Grid item xs={12} md={4} key={index}>
                            <CardActionArea href={data.href}>
                                <Card
                                    square
                                    elevation={3}
                                    sx={{ background: "lightblue", height: "300px" }}>
                                    <CardHeader title={data.heading}></CardHeader>
                                    <CardContent>
                                        <Typography
                                            align="justify"
                                            variant="h5"
                                            color="primary"
                                            gutterBottom>
                                            {data.pricetag}
                                        </Typography>
                                        <Typography align="justify" variant="subtitle2">
                                            {data.content}
                                        </Typography>
                                        <Button
                                            onClick={buyNFT}
                                            variant="contained"
                                            color="secondary"
                                            sx={{ marginTop: 3 }}>
                                            Buy
                                        </Button>
                                    </CardContent>
                                </Card>
                            </CardActionArea>
                        </Grid>
                    );
                })}
            </Grid>
        </>
    )

    /*
    return (
        <>
            <Head>
                <title>Pricing</title>
            </Head>
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
                        <audio id='a1' className="audio-element">
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
                            <button id="b01" className="flex bg-pink-600 text-white py-2 px-6 rounded mt-3 mb-3 ml-2" onClick={() => pauseAudio(0)}>STOP</button>
                        </div>
                    </Paper>
                </Box>
            </div>
        </>
    )
    */
}

export async function getStaticProps() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return {
        props: { stars: json.stargazers_count }
    }
}