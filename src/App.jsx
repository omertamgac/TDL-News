import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/MyNavBar"
import MyCard from "./Components/Card"

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <MyCard
        src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        name="başlığımız"
        text="deneme yazısı"
        />
        <MyCard
        src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        name="başlığımız"
        text="deneme yazısı"
        Button="Tıkla"
        />
      </div>
    </>
  )
}

export default App
