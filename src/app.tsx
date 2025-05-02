// Components
import Header from './components/Header'
import Item from './components/Items'
import Submit from './components/Submit'
import './app.css'
// Mock Data
import { Menu } from './constants/mock'

export function App() {
  return (
    <div>
      <Header  Invoice={10} Table={20}/>
      
      <div className="menu">
        {
          Menu.map((item, index) => {
            return <Item key={index} name={item.name} image={item.imageUrl} price={item.price} />
          })
        }
      </div>

      <div className="submit">
        <Submit />
      </div>
    </div>
  )
}
