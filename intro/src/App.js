import React ,{ Component} from 'react';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import Navi from './Navi';
import {Container,Row,Col} from 'reactstrap'

function App() {
  let productInfo ={title : "Product List", baskaBisey :"bişey"}
  let categoryInfo ={title : "Category List"}

  return (
    <div className="App">
      <Container>
        <Row>
          <Navi/>
        </Row>

        <Row>
          <Col xs="3">
            <CategoryList info={categoryInfo}/>   
            {console.log(productInfo)}         
          </Col>

          <Col xs="9">
            <ProductList info={productInfo}/>
          </Col>
          
        </Row>

      </Container>
      
      
    </div>
  );
}

export default App;
