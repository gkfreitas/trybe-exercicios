import './App.css';
import Image from './Image.js'
import cat from './catimage.jpg'

function App() {
  return (
    <Image source= { cat } alternativeText="Cute cat staring" />
  )
    
}

export default App;
