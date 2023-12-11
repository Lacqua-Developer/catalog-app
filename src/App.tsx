import React, { useEffect, useState } from 'react';
import { Container, Row, Col, InputGroup, FormControl, Card, Button,ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Product } from './interface/Product';
import { Category } from './interface/Category';
import axios from 'axios';
import { Cart } from './interface/Cart';




const App: React.FC = () => {

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [cartCount, setCartCount] = useState<number>(0);
  const [cartItems, setCartItems] = useState<Cart[]>([]);

  const [products, setProducts] = useState<Product[] | undefined>([]);
  const [categorys, setCategorys] = useState<Category[] | undefined>([]);
  
 

  function currencyFormat(num:number) {
    return 'R$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }

  useEffect(   ()=>{
   axios.get('http://localhost:3004/Product')
   .then(resp => {
    setProducts(resp.data);
   });   
   
  },[])

  useEffect(  ()=>{
    axios.get('http://localhost:3004/Category')
    .then(resp => {
      setCategorys(resp.data);
    });   

  },[])


  useEffect(  ()=>{
 
    renderCartItems();

  },[cartItems])

  const filterProducts = (query: string) => {
    setSearchQuery(query);
  };
  const AddToCart = (productId: number, qtde: number) => {
    //setCartCount(cartCount + 1);
   
    let prod =  products ? products.filter((cat)=> cat.id === productId)[0]:null;
    if(prod){
      let items = cartItems;

      let cart: Cart = {
          categoryId :prod.categoryId,
          id:prod.id,
          name : prod.name,
          price : prod.price,
          qtde : qtde
      }

      items.push(cart);
      setCartItems( items);
      setCartCount(cartCount + (prod.price * qtde));
      
      
    }
  };

  const GetCategory =(categoryId: number |undefined ) =>{
    let category =  categorys ? categorys.filter((cat)=> cat.id === categoryId)[0]:null;
    return category ?  category.name : '';

  }

  const renderCartItems = () => {
    return cartItems ? cartItems.map( (product) => (

      <ListGroup key={product.id} >
      <ListGroup.Item key={product.id}>
        <>
        <div>{product.name}</div>   
        <div>{product.qtde}</div>
        <div>R${product.price * product.qtde}</div> 

        </>

      </ListGroup.Item>
    </ListGroup>
    )): '<></>'
  }



  const RenderProductList = ( ) => {
    


    const filteredProducts = products ? products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) 
    ): [];

    return filteredProducts.map((product) => (
      <Card key={product.id} className="mb-4" onClick={() => setSelectedProduct(product)}>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">  <div>Categoria: {GetCategory(product.categoryId)}</div> </Card.Subtitle>
          <Card.Text>Preço: ${product.price}</Card.Text>
          <Button onClick={() => AddToCart(product.id,1)}>Adicionar ao Carrinho</Button>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={8}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Pesquisar por nome ou categoria"
              value={searchQuery}
              onChange={(e) => filterProducts(e.target.value)}
            />
          </InputGroup>
          <Row>{RenderProductList()}</Row>
        </Col>
        <Col md={4}>
          <div className="box">
           {renderCartItems()}
          <div className="mt-3">Carrinho: {currencyFormat(cartCount)} Total a pagar</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
