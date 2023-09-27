import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import bg from '../assets/bg.png';
import '../index.css';

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover', // Fit the background image to the screen
    backgroundPosition: 'center', // Center the background image
    minHeight: '100vh', // Ensure the background covers the entire viewport height
  };

  return (
    <div style={backgroundStyle} className="flex flex-col justify-center items-center text-center">
      <img src={Logo} alt="logo" className="w-20 h-20 mb-4" />

      <nav className="space-x-4">
        <Link to="/" className="text-white hover:underline">Home</Link>
        <Link to="/services" className="text-white hover:underline">Services</Link>
        <Link to="/contact" className="text-white hover:underline">Contact</Link>
        <Link to="/about" className="text-white hover:underline">About Us</Link>
      </nav>

      <main className="mx-9 my-9 ">
        <p className="font-bold text-xl mb-4 text-white">Help You To<br />Digitize Your<br />Business</p>
        <p className="text-sm mb-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium autem provident impedit obcaecati placeat officiis quaerat magni tenetur aliquid ab. Repellat eum laudantium adipisci harum velit eligendi, nostrum libero aut.</p>
        <button className="bg-green-500 text-white py-1 px-4 rounded-full hover:bg-green-600 transition duration-300">Discover more</button>
      </main>
    </div>
  );
}

export default Home;
