import './App.css'
import FooterComp from './Components/FooterComp'
import HeaderComp from './Components/HeaderComp'
import ListCard from './Components/ListCard'
import PageComp from './Components/PageComp'

function App() {

  return (
    <>
      <div>
       <HeaderComp/>
<PageComp/>
<ListCard task='To Learn React and practise daily'/>
<ListCard task='To do Exercise,walk and yoga daily'/>

<FooterComp/>
      </div>
      <p className="read-the-docs">
       
      </p>
    </>
  )
}

export default App
