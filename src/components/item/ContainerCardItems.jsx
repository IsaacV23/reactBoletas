import CardItem from "./CardItem";
import Productos from "../../utils/productos";
import Simulador from "../../utils/fetch";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../css/containerCardItems.css";

//8196069
const ContainerItem = () => {
  const [datos, setDatos] = useState ([]);
  const {idCategory} = useParams();
  useEffect(() => {
    if (idCategory == undefined) {
      Simulador(Productos,500)
      .then(resp => setDatos(resp))
      .catch(error => console.log(error))
    } else{
        Simulador(Productos.filter(filter => filter.type == idCategory))
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    }
    
  }, [idCategory])
 

    return (
        < div className="containerCardItems">
        {
            datos.map(producto => (
               
                <CardItem
                    key={producto.id}
                    title={producto.title}
                    image={producto.image}
                    input={producto.input}
                />
                ))
        }
        </div>
        );
}

export default ContainerItem;