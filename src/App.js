import { Hd } from './layout/Hd'
import  { Ft } from './layout/Ft'

import { MainContent } from './main/MainContent';
import './App.scss';

function App() {
  return (
   <div id="kimjaeryeon">
      <Hd></Hd>
      <MainContent></MainContent>
      <Ft></Ft>
   </div>
  );
}

export default App;
