import './App.css'
import MyComponent from './page2'
import VideoContainer from './page3'
import { TabsComponent } from './page4'
import Footer from './page5'
import NavbarComponent from './page1'



function App() {

  return (
    <div className='bg-'>
      <div className="outline"><NavbarComponent/></div>
    <MyComponent/>
    <div className='outline '><VideoContainer/></div>
    <div className='outline'><TabsComponent/></div>
    <Footer />
    </div>
      
  )
}

export default App
