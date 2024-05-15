import styles from "./home.module.css";
import sampleVideo from "../../assets/video.mp4";
import Layer from "./layer";
import { useRef, useState } from "react";
import { drawCircle } from "../../utils/circle";

const Home = () => {
  const canvasRef = useRef(null);
  const [coordinates,setCoordinates] = useState([{x:213.5,y:57.5},{x:200.5,y:57.5},{x:150.5,y:57.5},])
  
  const addCircles = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    coordinates.forEach(({ x, y }) => {
      drawCircle(context, x, y);
    });
  };

  return (
    <main className={styles.container}>
      <section className={styles.player}>
        <Layer canvasRef={canvasRef} />
        <video controls className={styles.video} src={sampleVideo}></video>
      </section>
      <button className={styles.btn} onClick={addCircles}>Add Circles</button>
    </main>
  );
};

export default Home;
