import React from 'react'
import { Container, CardGroup, Card, Row, Col, Button } from 'react-bootstrap';
import '../mysass.scss';

const styles = {
  card: {
    backgroundColor: '#000',
    borderRadius: 50,
    padding: '2rem',
  },
  cardImage: {
    objectFit: 'cover',
    borderRadius: 50,
    maxWidth: '400px',
    minWidth: '200px'
  }
}

const Ardian = () => {
  return (

      <Container fluid>
        <CardGroup className="m-5 d-block">
          <Card className="m-5 border-0 shadow" style={styles.card}>
            <Row>

              <Col>
                <Card.Img src="ardian.jpg" style={styles.cardImage} />
              </Col>

              <Col>
                <Card.Body>
                <Card.Title style={{marginLeft:'-20px'}}><Button variant="dark" size="lg"> CEO & Founder</Button></Card.Title>
                <br/>
                <Card.Text as="h4" style={styles.cardText}>
                  <h5 className='h5biography'>Name:</h5><h4 className='h4biography'>Ardian</h4>
                  <h5 className='h5biography'>Surname:</h5><h4 className='h4biography'>Halilaj</h4>
                  <h5 className='h5biography'>Birth:</h5><h4 className='h4biography'>11/09/2001</h4>
                  <h5 className='h5biography'>Address:</h5><h4 className='h4biography'>Prishtinë, 10000, Kosovë</h4>
                  <h5 className='h5biography'>Tel:</h5><h4 className='h4biography'>+383 44 123 123</h4>
                  <h5 className='h5biography'>eMail:</h5><h4 className='h4biography'>ardi@halilaj.org</h4>
                </Card.Text>

                </Card.Body>
              </Col>

            </Row>
          </Card>
        </CardGroup>
      </Container>
    )
  }


export default Ardian