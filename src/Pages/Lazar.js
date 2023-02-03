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

const Lazar = () => {
  return (

      <Container fluid>
        <CardGroup className="m-5 d-block">
          <Card className="m-5 border-0 shadow" style={styles.card}>
            <Row>

              <Col>
                <Card.Img src="https://i.pinimg.com/originals/4e/89/c6/4e89c6fda820d637fc6d07a3a30650c4.jpg" style={styles.cardImage} />
              </Col>

              <Col>
                <Card.Body>
                <Card.Title style={{marginLeft:'-20px'}}><Button variant="dark" size="lg">Personal Trainer</Button></Card.Title>
                <br/>
                <Card.Text as="h4" style={styles.cardText}>
                  <h5 className='h5biography'>Name:</h5><h4 className='h4biography'>Lazar</h4>
                  <h5 className='h5biography'>Surname:</h5><h4 className='h4biography'>Angelov</h4>
                  <h5 className='h5biography'>Birth:</h5><h4 className='h4biography'>22/09/1984</h4>
                  <h5 className='h5biography'>Address:</h5><h4 className='h4biography'>Sofia, Bulgaria</h4>
                  <h5 className='h5biography'>Tel:</h5><h4 className='h4biography'>+383 44 123 123</h4>
                  <h5 className='h5biography'>eMail:</h5><h4 className='h4biography'>lazar.angelov@gmail.com</h4>
                  <h5 className='h5biography'>Personal Details:</h5>
                  <h6 className='h4biography'>
                    Lazar Angelov is a fitness model, personal trainer, celebrity figure and entrepreneur. 
                    He was born in Sofia, Bulgaria in 1984. Before becoming a fitness icon, he was a professional basketball player. 
                    At the age of 16 he made the junior national team and soon he was the leading scorer of his pro teams in the National Basketball Association of Bulgaria. 
                    At the age of 18 he spent an year and a half in the Army, where he found bodybuilding.
                    He went on to earn a certificate for a personal trainer from the National Sports Academy and started working as a personal trainer. 
                    His ability to motivate allowed him to not only help people transform their bodies, but also do the same with their lives.
                    </h6>
                </Card.Text>

                </Card.Body>
              </Col>

            </Row>
          </Card>
        </CardGroup>
      </Container>
    )
  }


export default Lazar