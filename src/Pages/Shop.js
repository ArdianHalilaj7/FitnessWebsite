import React from 'react';
import { Container, CardGroup, Card, Row, Col, Button } from 'react-bootstrap';

const styles = {
    card: {
      backgroundColor: '#000',
      borderRadius: 50,

    },
    cardImage: {
      objectFit: 'cover',
      borderRadius: 50,
      maxWidth: '400px',
      minWidth: '100px',
    }
  }

const Shop = () => {
  return (

    <>

        <CardGroup className="m-5 d-block">
          <Card className="m-5 border-0 shadow" style={styles.card}>
            <Row>

              <Col>
                <Card.Img src="whey.jpg" style={styles.cardImage} />
              </Col>

              <Col>
                <Card.Body>
                <Card.Title style={{marginLeft:'-20px'}}><Button variant="dark" size="lg">WHEY PROTEIN</Button></Card.Title>
                <br/>
                <Card.Text as="h4" style={styles.cardText}>
                  <h6 className='h5biography'>Size:</h6><h4 style={{fontSize:'18px'}} className='h4biography'>2.2Kg</h4>
                  <h6 className='h5biography'>Flavour:</h6><h4 style={{fontSize:'18px'}} className='h4biography'>Chocolate</h4>
                  <h6 className='h5biography'>Protein Information:</h6>
                  <h6 style={{fontSize:'14px'}} className='h4biography'>
                  Our 100% Whey is the ideal post workout nutrition to speed up recovery 
                  and build lean muscle mass. For a limited time, get a free 500g bag of 
                  protein when you buy a 2.2kg flavour!
                  </h6>
                  <br/>
                  <h5 className='h5biography'>Price:</h5><h4 style={{fontSize:'18px'}} className='h4biography'><Button><b>$129.90</b></Button></h4>
                </Card.Text>

                </Card.Body>
              </Col>

            </Row>
          </Card>
        </CardGroup>

        



    </>


  )
}

export default Shop