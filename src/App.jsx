import React from 'react';
import Navbar from './Component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Estore from './Component/Estore/Estore';
import Enterprise from './Component/Solutions/Enterprise';
import Education from './Component/Solutions/Education';
import Warranty from './Component/Support/Warranty'
import HelpCenter from './Component/Support/HelpCenter'
import DownloadCenter from './Component/Support/DownloadCenter'
import TutorialVideo from './Component/Support/TutorialVideo'
import ServiceRequest from './Component/Support/ServiceRequest'
import Company from './Component/Explore/Company'
import Careers from './Component/Explore/Careers'
import HeadLines from './Component/Explore/HeadLines'
import Insights from './Component/Explore/Insights'
import DeltaviewSpark from './Component/Products/DeltaviewSpark'
import DeltaviewBlaze from './Component/Products/DeltaviewBlaze'
import FindPartner from './Component/Partners/FindPartner'
import PartnerSuccess from './Component/Partners/PartnerSuccess'
import DeltaViewConnect from './Component/Software/DeltaViewConnect'
import DeltaViewCanvas from './Component/Software/DeltaViewCanvas'
import Home from './Component/Home.jsx/Home';




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
       
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/e-store' element={<Estore />} />
          {/* Routes of Solutions Component */}
          <Route path='/Enterprise' element={<Enterprise/>}/>
          <Route path='/Education' element={<Education/>}/>
          {/* Routes of Support Component */}
          <Route path='/warranty-Check' element={<Warranty/>}/>
          <Route path='/help-center' element={<HelpCenter/>}/>
          <Route path='/download-center' element={<DownloadCenter/>}/>
          <Route path='/service-Request' element={<ServiceRequest/>}/>
          <Route path='/tutorial-Video' element={<TutorialVideo/>}/>
          {/* Routes of Explore Component */}
          <Route path='/company' element={<Company/>}/>
          <Route path='/insights' element={<Insights/>}/>
          <Route path='/headlines' element={<HeadLines/>}/>
          <Route path='/careers' element={<Careers/>}/>
          {/* Routes of  Products Compnoent*/}
          <Route path='//deltaView-Spark' element={<DeltaviewSpark/>}/>
          <Route path='/deltaView-Blaze' element={<DeltaviewBlaze/>}/>
          {/* Routes of Partner Component */}
          <Route path='/partner-Success' element={<PartnerSuccess/>}/>
          <Route path='/find-a-partner' element={<FindPartner/>}/>
          {/* Routes of Software Component */}
          <Route path='/deltaView-Canvas' element={<DeltaViewCanvas/>}/>
          <Route path='/deltaView-Connect' element={<DeltaViewConnect/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
