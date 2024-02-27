import { Hd } from './layout/Hd';
import  { Ft } from './layout/Ft';

import Umu from './subpage/Umu';


import { MainContent } from './main/MainContent';
import './App.scss';
import "./font.css"



function App() {
  return (
   <div id="kimjaeryeon">
      <Hd></Hd>
      <MainContent ></MainContent>
      <Ft></Ft>
   </div>
  );
}

export default App;
