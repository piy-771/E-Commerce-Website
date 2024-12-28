
import Card from 'react-bootstrap/Card';
import Hero from './components/Hero.jsx'
import './css/Home.css';



import vid2 from './videos/video2.mp4';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Countdown from './components/Countdown.jsx';
import Navbar from './components/Navbar.jsx';
const Home=()=>{
    //to store product use usestate
    const [product,setProduct] = useState([]);
    const [scrolled, setScrolled] = useState(false);

     // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // Add scrolled state
      } else {
        setScrolled(false); // Remove scrolled state
      }
    };

    // Attach event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    

   
    const loadProduct=()=>{
        let api = "http://localhost:3000/products";
        axios.get(api).then((res)=>{
            setProduct(res.data);
        }
    )
    }
    useEffect(()=>{
        loadProduct();
     }, []);

    const ans= product.map((key)=>{
        return(
            <>
<Card className="text-white"  style={{width:"453px",height:"300px"}} >
      <Card.Img src={key.image} alt="Card image"/>
      <Card.ImgOverlay>
        {/* <Card.Title>Card title</Card.Title> */}
        <Card.Text style={{paddingTop:"420px",}}>
          New Arrivals
        </Card.Text>
        <Card.Text style={{fontSize:"30px",fontWeight:"10"}}> {key.name} </Card.Text>
        <Button variant='light'>Shop Now</Button>
      </Card.ImgOverlay>
    </Card>
            {/* <Card style={{width:"380px", marginTop:"10px"}}>
        <a href='#' >
           <img src={key.image} style={{height:"300px"}}  />
        </a>  
      <Card.Body>
        <Card.Title> {key.name} for {key.category}</Card.Title>
        <Card.Text>
            {key.description} 
            <br/>
            <span style={{color:'red', fontWeight:'bold'}}>Price : Rs. {key.price}/-</span>  
        </Card.Text>
        <Button variant="primary" 
       >add to cart</Button>
      </Card.Body>
    </Card> */}
            </>
        )
    })


    return (
        <>
        <Navbar/> 
         
       <Hero/>
       <Countdown/>
       

       <div className='section1' style={{display:"flex",justifyContent:"space-between"}}>
       <div className='sec1'>
        <div className='video-banner'>
          <video src={vid2} width={"490px"} style={{paddingRight:"100px"}}  autoPlay muted loop ></video>
        </div>
          
          {/* <div className='text-overlay'>
              <p>New Arrivals</p>
              <h1>Filles Shirt Jacket</h1>
              <Button variant='light'>Shop Now</Button>
              
          </div> */}
       </div>
       
            {ans}
            
       
       </div>
       <div>
        
       </div>
        </>
    )
}

export default Home;