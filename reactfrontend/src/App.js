// import logo from './logo.svg';
// import  './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import CreateUsers from './components/CreateUsers';
import Read from './toolkitslice/Read';
import ViewToolkit from './toolkitslice/ViewToolkit';
import AddStudent from './toolkitslice/AddStudent';
import { Increment } from './toolkitslice/CounterSlice';
import { useDispatch, useSelector } from 'react-redux';
import UpdateStudent from './toolkitslice/UpdateStudent';



function App() {
    const mystate=useSelector((state)=>state.counter.count);
    const dispatch=useDispatch();
  return (
    <div className="App">
      <header className="App-header">

<BrowserRouter>
<Navbar></Navbar>
<Routes>
  <Route path='/' element={<Home/>}> </Route>
<Route exact path='/About' element={<About/>}></Route>
<Route exact path='/Contact' element={<Contact/>}></Route>
<Route exact path='/createusers' element={<CreateUsers/>}></Route>
<Route exact path='/Read' element={<Read/>}></Route>
<Route exact path='/ViewToolkit/:id' element={<ViewToolkit/>}></Route>
<Route exact path='/AddStudent' element={<AddStudent/>}></Route>
<Route exact path='/UpdateStudent/:id' element={<UpdateStudent/>}></Route>

</Routes>
</BrowserRouter>
<button onClick={()=>dispatch(Increment())}>Increment</button>
<h1>{mystate}</h1>

      </header>
    </div>
  );
}

export default App;
