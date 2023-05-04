import { useState } from 'react';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import './App.css';
import Menu from './Menu.jsx';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Service from './pages/Service.jsx'
function App() {
  const [Modalactive,setModalactive] = useState(false)
  return (
    <BrowserRouter className="App">
      <button className='btn' onClick={() => setModalactive(true)}>=</button>
      <main>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis assumenda eligendi impedit accusamus enim? Architecto atque commodi rem ad ab, velit ullam laudantium accusamus quasi illo harum a perferendis illum cumque? Numquam dolor sapiente voluptatum explicabo omnis ut deserunt impedit laudantium cupiditate atque quibusdam, nemo in ad, deleniti odio maxime obcaecati a? Ut dignissimos sint minima in velit eaque quis expedita eveniet quia aperiam dolorum, asperiores perspiciatis unde sunt atque a. Maxime, tempora adipisci eaque illo aliquid voluptatem, necessitatibus deserunt, fugit dolor nam totam minima odio a beatae delectus fugiat. Voluptatibus culpa ut aspernatur fuga cupiditate eligendi deleniti omnis, maxime voluptatum. Eligendi nam id nostrum consectetur ipsum architecto exercitationem doloremque, officiis mollitia repellat aperiam debitis dolorem error itaque. Repellendus consequuntur ipsum libero soluta voluptatem saepe laboriosam repudiandae porro nostrum ratione similique omnis suscipit reiciendis corrupti assumenda non cupiditate, molestias et. Blanditiis dolor est, modi recusandae aperiam debitis ipsa perspiciatis magni maiores harum, voluptatem dolorum eaque iste hic. Debitis ducimus doloremque voluptatem cupiditate exercitationem nihil, harum odit aliquid voluptatibus aut, inventore recusandae fuga non aperiam iure veritatis quia eos quaerat vero quis voluptates sequi enim deserunt! Ducimus quibusdam molestias soluta quos sequi, ipsam doloremque, aspernatur recusandae dicta saepe ipsum nisi, provident eligendi corporis optio? Sunt quam molestiae, delectus ea maiores optio laudantium numquam soluta, ratione amet, quisquam ex hic iure ipsa voluptates placeat atque sit perspiciatis? Est dolore, fugiat deserunt veritatis doloremque cumque incidunt illo quibusdam velit praesentium. Voluptatum molestiae aliquid, doloribus deserunt vitae blanditiis dolorum itaque aperiam amet dignissimos iure delectus fuga, sequi fugit ratione quis optio consectetur animi quidem rerum laudantium ut illum accusantium. Suscipit inventore reiciendis laborum accusantium voluptatibus consequatur tempora repellat asperiores, aliquam illo autem animi dicta iste aliquid facere delectus nam repudiandae repellendus laboriosam eligendi praesentium. Architecto magni consectetur repudiandae quaerat eveniet? Aperiam impedit delectus reprehenderit.
      </main>
      
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Service' element={<Service/>}/>
    </Routes>

      
    <Menu active={Modalactive} setActive={setModalactive}/>
    </BrowserRouter>
  );
}

export default App;
