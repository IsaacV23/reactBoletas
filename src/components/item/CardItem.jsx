import Card from 'react-bootstrap/Card';
import CartWidget  from "../CartWidget";
import  Image  from "./image";
import  Title  from "./Title";
import "../../css/containerCardItems.css"
import fetchData  from "../../utils/api";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const CardItem = (props) => {
const [inputValue, setInputValue] = useState('');

const handleClick = () => {
  fetchData(inputValue);
};

  return (
    <div className="CardItems">
      <Card style={{ width: '23rem' }}>
        <Image className="Img" image = {props.image}/>
        <Card.Body>
          <center>
            <Title title = {props.title}/>
            <InputGroup className="mb-3">
           <InputGroup.Text id="inputGroup-sizing-default">
          N°boleta
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
        />
      </InputGroup>
            
            <Button variant="primary" onClick={handleClick}>
      <CartWidget />
    </Button>
            {/* <button onClick={handleClick}>Capturar y usar el valor</button> */}
          </center>
        </Card.Body>
      </Card>
    </div>
  );
}


export default CardItem;



