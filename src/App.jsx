
import ErrorBoundary from './ErrorBoundary';
import Home from "./pages/Home.jsx";
import Guns from "./pages/guns.jsx";
import Cartridges from './pages/cartridges.jsx';
import Accessories from './pages/accessories.jsx';
import Knives from './pages/knives.jsx';
import Care from './pages/care.jsx';
import Cloth from './pages/cloth.jsx';
import HuntingAccessories from './pages/hunting_accessories.jsx';
import ShootingAccessories from './pages/shooting_accessories.jsx';
import FishingRods from './pages/fishing_rods.jsx';
import Tackle from './pages/tackle.jsx';
import Coils from './pages/coils.jsx';
import Lure from './pages/lure.jsx';
import Equipment from './pages/equipment.jsx';
import TthermalUnderwear from './pages/thermal_underwear.jsx';
import Lanterns from './pages/lanterns.jsx';
import Gun from './pages/gan.jsx';
import Bullets from './pages/bullets.jsx';
import Acces from './pages/acces.jsx';
import Tool from './pages/tool.jsx';
import Equipments from './pages/equipments.jsx';
import Components from './pages/components.jsx';
import Means from './pages/means.jsx';
import Bivouac from './pages/bivouac.jsx';
import Backpacks from './pages/backpacks.jsx';
import Dishes from './pages/dishes.jsx';
import Admin from './pages/admin.jsx';
import Product from "./Components/product.jsx";
import Layout from "./Loyaut.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/css/styles.css';



function App() {

  return (
    <>
      {/* <ErrorBoundary> */}
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/guns" element={<Guns />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cartridges" element={<Cartridges />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/knives" element={<Knives />} />
          <Route path="/cloth" element={<Cloth />} />
          <Route path="/care" element={<Care />} />
          <Route path="/hunting accessories" element={<HuntingAccessories />} />
          <Route path="/shooting accessories" element={<ShootingAccessories />} />
          <Route path="/fishing rods" element={<FishingRods />} />
          <Route path="/coils" element={<Coils />} />
          <Route path="/tackle" element={<Tackle />} />
          <Route path="/lure" element={<Lure />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/thermal underwear" element={<TthermalUnderwear />} />
          <Route path="/lanterns" element={<Lanterns />} />
          <Route path="/gun" element={<Gun />} />
          <Route path="/bullets" element={<Bullets />} />
          <Route path="/acces" element={<Acces />} />
          <Route path="/components" element={<Components />} />
          <Route path="/tool" element={<Tool />} />
          <Route path="/equipments" element={<Equipments />} />
          <Route path="/means" element={<Means />} />
          <Route path="/bivouac" element={<Bivouac />} />
          <Route path="/backpacks" element={<Backpacks />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
      {/* </ErrorBoundary> */}
    </>
  )
}

export default App;







