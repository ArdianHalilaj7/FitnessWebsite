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
    minWidth: '100px'
  }
}

const Shaun = () => {
  return (

      <Container fluid>
        <CardGroup className="m-5 d-block">
          <Card className="m-5 border-0 shadow" style={styles.card}>
            <Row>

              <Col>
                <Card.Img src="https://www.hfe.co.uk/wp-content/uploads/2018/12/Shaun-Stafford-Headshot1-copy-2-703x1024.jpg" style={styles.cardImage} />
              </Col>

              <Col>
                <Card.Body>
                <Card.Title style={{marginLeft:'-20px'}}><Button variant="dark" size="lg">Personal Trainer</Button></Card.Title>
                <br/>
                <Card.Text as="h4" style={styles.cardText}>
                  <h6 className='h5biography'>Name:</h6><h4 style={{fontSize:'14px'}} className='h4biography'>Shaun</h4>
                  <h6 className='h5biography'>Surname:</h6><h4 style={{fontSize:'14px'}} className='h4biography'>Stafford</h4>
                  <h6 className='h5biography'>Birth:</h6><h4 style={{fontSize:'14px'}} className='h4biography'>13/12/1968</h4>
                  <h6 className='h5biography'>Address:</h6><h4 style={{fontSize:'14px'}} className='h4biography'>Williamston, South Carolina</h4>
                  <h6 className='h5biography'>Tel:</h6><h4 style={{fontSize:'14px'}} className='h4biography'>+383 44 123 123</h4>
                  <h6 className='h5biography'>eMail:</h6><h4 style={{fontSize:'14px'}} className='h4biography'>shaun.stafford@gmail.com</h4>
                  <h6 className='h5biography'>Personal Details:</h6>
                  <h6 style={{fontSize:'10px'}} className='h4biography'>
                    Shaun Stafford is a fitness model, personal trainer, celebrity figure and entrepreneur. 
                    Before becoming a fitness icon, he was a professional basketball player. 
                    At the age of 16 he made the junior national team and soon he was the leading scorer of his pro teams in the National Basketball Association of Bulgaria. 
                    At the age of 18 he spent an year and a half in the Army, where he found bodybuilding.
                    He went on to earn a certificate for a personal trainer from the National Sports Academy and started working as a personal trainer.
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


export default Shaun