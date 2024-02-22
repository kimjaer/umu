import { Hd } from './layout/Hd'
import  { Ft } from './layout/Ft'

import { MainContent } from './main/MainContent';
import './App.css';

function App() {
  return (
   <section id="mainpage">
      <Hd></Hd>
      <MainContent></MainContent>
      <Ft></Ft>
   </section>
  );
}

export default App;
