import vid1 from '../videos/video1.mp4';
import '../css/Hero.css'
import Button from 'react-bootstrap/Button';

const Hero=()=>{
    return(
        <>
         <div className='hero'>
           
            <video src={vid1} autoPlay muted loop width={"100%"} className='bgVideo'></video>
            
            <div className='overlay'></div>
            
            <div  className='hero-main'>
            <p>Video Collection</p>
            <h1 >NEW CHAPTER</h1>
            <p>Purposefully Designed. Consciously Crafted.</p>
            <Button variant="outline-light" size='lg'>Collection</Button>

        </div>
        </div>
           
        </>
    )
}

export default Hero;