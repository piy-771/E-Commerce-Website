import vid1 from '../videos/video1.mp4';
import '../css/Hero.css'
import Button from 'react-bootstrap/Button';

const Hero=()=>{
    return(
        <>
         <div className='hero'>
            <div className='video-container'>
            <video src={vid1} autoPlay muted loop width={"100%"} ></video>
            </div>
            <div className='overlay'></div>
            
            <div  className='hero-main'>
            <p>Video Collection</p>
            <h1 style={{fontSize:"60px",fontWeight:"100px"}}>NEW CHAPTER</h1>
            <p>Purposefully Designed. Consciously Crafted.</p>
            <Button variant="outline-light" size='lg'>Collection</Button>

        </div>
        </div>
           
        </>
    )
}

export default Hero;