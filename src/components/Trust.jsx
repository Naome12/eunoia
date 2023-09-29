import React from 'react'
import '../index.css'
import Avontur from '../assets/Avontur.png'
import carbon from '../assets/carbon.png'
import goovi from '../assets/goovi.png'
import monstra from '../assets/monstra.png'
import spora from '../assets/Avontur.png'
import pcode from '../assets/pcode.png'
import '../index.css'
const Trust = () => {
  const text="Discover more >"
  return (
    <div className='trust'>
    <p className='text-blue'>Trusted By International Brand</p>
    <div className='logos'>
    <img src={Avontur} alt='Avontur'/>
    <img src={carbon} alt='carbon'/>
    <img src={goovi} alt='goovi'/>
    <img src={monstra} alt='monstra'/>
    <img src={spora} alt='spora'/>
    </div>

    <div className='pcode'>
    <img src={pcode} alt=''/>
    </div>
<div className='bett'>
<h2>Let's make world better with technology</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Praesentium autem provident impedit obcaecati placeat <br/>officiis quaerat magni tenetur aliquid ab. Repellat eum <br/>laudantium adipisci harum velit eligendi, nostrum libero aut.</p>

<button>{text}</button>
</div>
</div>

  )
}

export default Trust