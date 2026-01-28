import React from 'react'
import { useState } from 'react';
import { X } from 'lucide-react';
import pic3 from '../assets/pictures/pic3.png'; 

const Notes = () => {
const [heading, setheading] = useState('');
const [details, setdetails] = useState('');
const [cards, setcards] = useState([]);

const formHandler =(e)=>{
  e.preventDefault();
  const copycards=[...cards];
  copycards.push({heading,details});
  setcards(copycards);

  setheading('');
  setdetails('');
}
const deleteNotes=(idx)=>{
    const copycards=[...cards];
    copycards.splice(idx,1);
    setcards(copycards);
}


  return (
    // main Container

    <div className='w-full min-h-screen flex flex-col lg:flex-row gap-12'>

    {/* form Section */}

      <div className='w-[42vw] h-[full] relative pt-8 border-r-2 px-8 border-white/20  '>
        <form action="" onSubmit={(e)=>{
            formHandler(e);
        }} className='bg-white/10 backdrop-blur-md shadow-lg flex flex-col gap-6 w-full h-[60vh] border-white/20 rounded-2xl overflow-hidden items-center py-6 px-8 justify-center'>
            <h1 className='  text-4xl font-semibold bg-linear-to-r from-blue-200 to-blue-200 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(255,255,255,0.35)]'>Your Text</h1>

            <input type="text"
             placeholder='Enter Heading'
             value={heading}
             onChange={(e)=>{
                setheading(e.target.value);
             }}
              className='bg-white/20 backdrop-blur-sm border border-white/30 placeholder-white/70 focus:outline-none focus:border-green-100 focus:ring-2 focus:ring-blue-400 focus:shadow-blue-300 focus:shadow-2xl w-full h-[8vh] items-center flex px-6 rounded-lg '
             />
              
            <textarea name="note" 
            id="note" placeholder='Enter Your Deatails ...' 
            value={details}
             onChange={(e)=>{
                setdetails(e.target.value);
             }}
            className='bg-white/20 focus:ring-2 focus:ring-blue-400 focus:shadow-blue-300 focus:shadow-2xl backdrop-blur-sm border border-white/30 placeholder-white/70 focus:outline-none focus:border-green-100 w-full h-[20vh] resize-none  items-center flex px-6 py-4 rounded-lg'
            >
            </textarea>
            <button type='submit' 
            className='bg-white/20 border text-white  transition-all duration-300 ease-out hover:shadow-[inset_0_0_20px_rgba(34,211,238,0.35)] border-white/30 placeholder-white/70 active:scale-95 backdrop-blur-sm active:shadow-2xl active:shadow-blue-300  w-[16vw] rounded-lg h-[6vh]'>Submit
             <span
             className="
             absolute inset-0
             opacity-0 hover:opacity-100
             transition-opacity duration-300
             bg-linear-to-r from-cyan-300/20 to-blue-300/20
             "
  ></span>
            </button>
        </form>
      </div>

    {/* Cards.notes */}

      <div className='w-[56vw] h-full pt-8 pr-8 flex-wrap grid grid-cols-3 gap-4 content-start'>
     {cards.map(function(card,index){
  return (
    <div key={index} className='w-[15em] h-[15em] object-center rounded-2xl bg-cover bg-center flex flex-col relative px-6 py-4 leading-tight'
      style={{ backgroundImage: `url(${pic3})` }}>
      <div className='relative pt-6 overflow-y-auto flex-1 scrollbar-hide mb-2'>
        <h3 className='text-[24px] font-medium mt-[1em]'>{card.heading}</h3>
      <p className='text-md text-gray-500'>{card.details}</p></div>
      <button onClick={
       ()=>{ deleteNotes(index);}
      } className="absolute top-8 right-8 text-white rounded-full bg-white">
       <X size={24} color={'red'} />
      </button>
    </div>
   
    )
    })}
    </div>
    </div>
  )
}

export default Notes
