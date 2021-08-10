
import './App.css';
import NavBar from'./Componentes/NavBar/navBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
     
        <NavBar/>{''}
        
        <ItemListContainer greeting="Bienvenido!, aqui se ubicará el listado de productos"/>
        
    </div>
  );
}

export default App;
