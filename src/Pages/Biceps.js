import React from 'react'
import { Button, CardGroup, Card, Row, Container } from 'react-bootstrap'

const Biceps = () => {
  return (
<>

<br/>
<div className="d-grid gap-3">
      <Button style={{height:'70px'}} variant="secondary" size="lg"> Videos for train biceps</Button>
    </div>

<Container >
    <CardGroup >
        <Row sm={1} md={2} lg={3} >
            <Card style={{margin:'15px'}}>
                <div>
                <video style={{objectFit:'center'}} width="100%" height="100%" autoPlay="true" controls>
                <source src="https://www.youtube.com/watch?v=GxjWKyzMx3E" type="video/mp4" />
                </video>
                </div>
                <Card.Title>Exercise 1</Card.Title>
                <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> 
            </Card>

            <Card style={{margin:'15px'}}>
                <div>
                <video style={{objectFit:'center'}} width="100%" height="100%" autoPlay="true" controls>
                <source src="https://www.youtube.com/watch?v=LSRNmhLS76o" type="video/mp4" />
                </video>
                </div>
            </Card>

            <Card style={{margin:'15px'}}>
                <div>
                <video style={{objectFit:'center'}} width="100%" height="100%" autoPlay="true" controls>
                <source src="https://www.youtube.com/watch?v=LSRNmhLS76o" type="video/mp4" />
                </video>
                </div>
            </Card>
            
            <Card style={{margin:'15px'}}>
                <div>
                <video style={{objectFit:'center'}} width="100%" height="100%" autoPlay="true" controls>
                <source src="https://www.youtube.com/watch?v=LSRNmhLS76o" type="video/mp4" />
                </video>
                </div>
            </Card>
        </Row>
    </CardGroup>
</Container>


</>
  )
}

export default Biceps