import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
// import bg from '../assets/bg.png';
import '../index.css';


const Home = () => {
  const backgroundStyle = {
    backgroundColor:'#0B2347',
    // backgroundImage: `url(${bg})`,
    backgroundSize: 'cover', // Fit the background image to the screen
    backgroundPosition: 'center', // Center the background image
    minHeight: '100vh', // Ensure the background covers the entire viewport height
  };

  return (
    <div style={backgroundStyle} className="flex flex-col justify-center items-center text-center">
    
    <nav className="space">
    <img src={Logo} alt="logo" />
        <Link to="/" className="links">Home</Link>
        <Link to="/services" className="links">Services</Link>
        <Link to="/contact" className="links">Contact</Link>
        <Link to="/about" className="links">About Us</Link>

        <button className='btn1'>Get Started</button>
      </nav>

      <main className="main">
        <p className="text">Help You To<br />Digitize Your<br />Business</p>
        <p className="text1">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Praesentium autem provident impedit obcaecati placeat <br/>officiis quaerat magni tenetur aliquid ab. Repellat eum <br/>laudantium adipisci harum velit eligendi, nostrum libero aut.</p>
        <button className="btn2">Discover more</button>
      </main>
    </div>
  );
}

export default Home;
