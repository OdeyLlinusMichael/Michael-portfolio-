import React from 'react'
import Navbar from './components/Navbar/Navbar'
import About1 from './components/About1/About1'
import About2 from './components/About2/About2'; 
import About3 from './components/About3/About3'; 
import Resume1 from './components/Resume1/Resume1';
import Resume2 from './components/Resume2/Resume2';
import Resume3 from './components/Resume3/Resume3';
import Mywork from './components/Mywork/Mywork';
import Mywork1 from './components/Mywork1/Mywork1'

const App = () => {
  return (
    
    <div>
     <Navbar/>
     <About1/>
      <About2/> 
      <About3/>
      <Resume1/>
      <Resume2/>
      <Resume3/>
      <Mywork/>
      <Mywork1/>

    </div>
    
  )
}

export default App
