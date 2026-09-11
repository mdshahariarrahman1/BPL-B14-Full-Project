import { Suspense, useState } from "react";
import Bnaner from "./component/bnaner"
import MainPlayerFile from "./component/main";
import type PlayerType from "./playerType";
import Footer from "./component/footer";
import { ToastContainer } from "react-toastify";


const PlayerDataPromise = async():Promise <PlayerType[]> =>{
  const res = await fetch('/playerapi.json');
  const data = await res.json();
  return data
}


function App() {

  const [PlayerDataPromis] = useState(()=> PlayerDataPromise())
  const [coin, setCoin] = useState(5000000)

  return (
    <>
    <Bnaner coin={coin}/>

    <Suspense fallback={<h1>Loading...</h1>}>
      <MainPlayerFile PlayerDataPromise={PlayerDataPromis} coin={coin} setCoin={setCoin}></MainPlayerFile>
    </Suspense>

    <Footer/>

    <ToastContainer/>
    </>
  )
}

export default App
