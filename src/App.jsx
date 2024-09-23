import { useState } from 'react'
import './App.css'

function App() {
  const [platans, setPlatans] = useState([])
  const [pomes, setPomes] = useState([])
  const [pinyes, setPinyes] = useState([])
  const [melons, setMelons] = useState([])

  const [ticket, setTicket] = useState(0)

  const [fruits, setFruits] = useState({
    platans: { quantity: 0, price: 0.5 },
    pomes: { quantity: 0, price: 0.8 },
    pinyes: { quantity: 0, price: 5 },
    melons: { quantity: 0, price: 6 },
  });

  const estilosParent = {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch"
  }

  const estilosContenedor = {
    backgroundColor: "green",
    margin: "20px",
    width: "250px",
    height: "50px",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    marginLeft: "5px"
  }

  const estilosNombre = {
    display: "inline"
  }

  const estilosAlinearBoton = {
    marginLeft: "auto",
    marginRight: "0",
    paddingRight: "10px"
  }

  const estilosBoton = {
    backgroundColor: "white",
    color: "black",
    width: "80px",
    display: "flex",
    justifyContent: "end",
    marginLeft: "auto",
    marginRight: "5px",
  }

  const estilosProductos = {
    backgroundColor: "darkGreen",
    margin: "20px",
    width: "250px",
    height: "90px",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    marginLeft: "5px"
  }

  const estilosProductosTotal = {
    margin: "15px"
  }

  const estilosInfoProductos = {
    textAlign: "left"
  }

  const estiloBotonTreure = {
    backgroundColor: "#F5FBEF",
    color: "#8B4513",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    textAlign: "end",
    fontSize: "16px"
  }

  const estilosPrecioTotalContenedor = {
    border: "1px solid #000",
    color: "black",
    height: "50px",
    width: "250px"
  }

  const estilosPrecioTotal = {
    marginRight: "8px",
    marginLeft: "8px"
  }

  //Le he cambiado los nombres para facilitar la lectura
  const productes = [
    {
      "id": 1,
      "nom": "platans",
      "preu": 0.5
    },
    {
      "id": 2,
      "nom": "pomes",
      "preu": 0.8
    },
    {
      "id": 3,
      "nom": "pinyes",
      "preu": 5
    },
    {
      "id": 4,
      "nom": "melons",
      "preu": 6
    },
  ];

  let autoincrementAfegir = 0

  function idAutoincrementAfegir() {
    autoincrementAfegir++;
    return (
      autoincrementAfegir
    )
  }

  const handleClickAfegir = (id) => {

    const newProduct = productes.find((element) => element.id == id);

    if (newProduct) {
      switch (newProduct.id) {
        case 1:
          setFruits((prevFruits) => ({ ...prevFruits, platans: { quantity: prevFruits.platans.quantity + 1, price: prevFruits.platans.price } }));
          break;
        case 2:
          setFruits((prevFruits) => ({ ...prevFruits, pomes: { quantity: prevFruits.pomes.quantity + 1, price: prevFruits.pomes.price } }));
          break;
        case 3:
          setFruits((prevFruits) => ({ ...prevFruits, pinyes: { quantity: prevFruits.pinyes.quantity + 1, price: prevFruits.pinyes.price } }));
          break;
        case 4:
          setFruits((prevFruits) => ({ ...prevFruits, melons: { quantity: prevFruits.melons.quantity + 1, price: prevFruits.melons.price } }));
          break;
        default:
          console.error(`Unknown product id: ${newProduct.id}`);
      }
    }
  };


  const handleClickEliminar = (id) => {

    const newProduct = productes.find((element) => element.id == id);

    if (newProduct) {

      switch (newProduct.id) {

        case 1:
          setFruits((prevFruits) => ({ ...prevFruits, platans: { quantity: prevFruits.platans.quantity - 1, price: prevFruits.platans.price } }));
          break;
        case 2:
          setFruits((prevFruits) => ({ ...prevFruits, pomes: { quantity: prevFruits.pomes.quantity - 1, price: prevFruits.pomes.price } }));
          break;
        case 3:
          setFruits((prevFruits) => ({ ...prevFruits, pinyes: { quantity: prevFruits.pinyes.quantity - 1, price: prevFruits.pinyes.price } }));
          break;
        case 4:
          setFruits((prevFruits) => ({ ...prevFruits, melons: { quantity: prevFruits.melons.quantity - 1, price: prevFruits.melons.price } }));
          break;
        default:
          console.error("No se puede añadir");
      }
    }
  };

  let autoincrementTreure = 0

  const Productos = () => {
    function idAutoincrementTreure() {
      autoincrementTreure++;
      return (
        autoincrementTreure
      )
    }

    const precioTotal = Object.keys(fruits).reduce((total, fruit) => {
      return total + fruits[fruit].quantity * fruits[fruit].price;
    }, 0);

    return (
      <>
        <div>
          {Object.keys(fruits).map((fruit) => (
            fruits[fruit].quantity > 0 && (
              <div style={estilosProductos}>
                <div>
                  <p style={estilosProductosTotal}>{fruit}</p>
                  <p style={estilosInfoProductos}>{fruits[fruit].quantity + "u x " + fruits[fruit].price + " €/u = " + (fruits[fruit].quantity * fruits[fruit].price) + " €"}</p>
                </div>
                <div style={estilosAlinearBoton}>
                  <button id={idAutoincrementTreure()} onClick={() => handleClickEliminar(productes.find((element) => element.nom == fruit).id)} style={estiloBotonTreure} >Treure</button>
                </div>
              </div>)
          ))}
        </div>
        <Ticket precioTotal={precioTotal} />
      </>
    );
  };


  const Ticket = ({ precioTotal }) => {

    return (
      <>
        <div style={estilosPrecioTotalContenedor}>
          <p style={estilosPrecioTotal}>
            Total: {precioTotal} €
          </p>
        </div>
      </>
    )
  }

  return (
    <>
      <div style={estilosParent}>
        <div>
          {productes.map((x) => <div style={estilosContenedor}>
            <p style={estilosNombre}>{x.nom}</p><p style={estilosNombre}>{" (" + x.preu + " €/u)"}</p><button id={idAutoincrementAfegir()} onClick={() => handleClickAfegir(x.id)} style={estilosBoton} >Afegir</button>
          </div>)}
        </div>
        {<Productos />}
      </div>
    </>
  )
}

export default App;
