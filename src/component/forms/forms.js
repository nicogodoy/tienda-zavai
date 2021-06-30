import react from "react";
import { useState, useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Button, Form } from "react-bootstrap";
import Home from '../Home/home'
const { getItemOrder } = require("../../servicie/servicie");


export default function FormsPage(total) {
  const { onCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const { name, phone, email } = buyer;

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if ((name && phone && email).trim() === "") {
      //    return
      //    Swal.fire({
      //     icon: 'error',
      //     title: 'Oops...',
      //     text: 'Debes completar con los datos requeridos',
      //   });
      alert("debes completar los datos");
    } else {
      getItemOrder(buyer, onCart,total);
      alert("su pedido se realizo con exito");
      // Swal.fire({

      //     icon: 'success',
      //     title: 'Tu pedido se ha realizado con éxito',
      //     showConfirmButton: false,
      //     // timer: 2000,

      //   })
    }
  };

  return (
    // <form className="form-buyer" onSubmit={handleOnSubmit} type="submit">
    //         <label htmlFor="name">Nombre</label>
    //             <input className="form-buyer__input"
    //             type="text"
    //             name="name"
    //             onChange={handleInputChange}
    //             id="name"
    //             placeholder="Nombre "
    //             />

    //             <label htmlFor="tel">Teléfono</label>
    //             <input className="form-buyer__input"
    //             type="text"
    //             name="phone"
    //             onChange={handleInputChange}
    //             id="tel"
    //             placeholder="Teléfono"
    //             />

    //             <label htmlFor="email">Email</label>
    //             <input className="form-buyer__input"
    //             type="email"
    //             name="email"
    //             onChange={handleInputChange}
    //             id="email"
    //             placeholder="Email"
    //             />

    //             <Button  className="button-cart"  type="submit">
    //         Confirmar Pedido
    //         </Button>

    //         </form>
    <Form  onSubmit={handleOnSubmit}  >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={handleInputChange}
          id="email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Nombre completo</Form.Label>
        <Form.Control
          type="text"
          name="name"
          onChange={handleInputChange}
          id="name"
          placeholder="Nombre "
        />
      </Form.Group>
      <Form.Group>
      <Form.Label>Telefono</Form.Label>
      <Form.Control
          type="number"
          name="phone"
          onChange={handleInputChange}
          id="phone"
          placeholder="telefono"
        />
      </Form.Group>
      
      <Button variant="primary" type="submit" onSubmit={handleOnSubmit} >
        Confirmar Compra
      </Button>
    </Form>
  );
}
