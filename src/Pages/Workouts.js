import React from 'react'
import {Card, Button} from 'react-bootstrap';
import '../mysass.scss';

const Workouts = () => {
  return (

    <>

    <Card className="bg-dark text-white" >
      <Card.Img src="biceps.jpg" alt="Card image" style={{height:'400px', objectFit:'cover'}} />
      <Card.ImgOverlay>
        <Card.Title style={{fontSize:'25px'}}>BICEPS</Card.Title>
        <Card.Text>
        Click here for more biceps videos: <Button variant="outline-light">Go Train Biceps</Button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    {/* <br/> */}
    <Card className="bg-dark text-white" >
      <Card.Img src="triceps.jpg" alt="Card image" style={{height:'400px', objectFit:'cover'}} />
      <Card.ImgOverlay>
        <Card.Title style={{fontSize:'25px'}}>TRICEPS</Card.Title>
        <Card.Text>
        Click here for more triceps videos: <Button variant="outline-light">Go Train Triceps</Button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    {/* <br/> */}
    <Card className="bg-light text-dark" >
      <Card.Img src="abs.jpg" alt="Card image" style={{height:'400px', objectFit:'cover'}} />
      <Card.ImgOverlay>
        <Card.Title style={{fontSize:'25px'}}>ABS</Card.Title>
        <Card.Text>
        Click here for more abs videos: <Button variant="outline-dark">Go Train ABS</Button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    {/* <br/> */}
    <Card className="bg-dark text-white" >
      <Card.Img src="chest.jpg" alt="Card image" style={{height:'400px', objectFit:'cover'}} />
      <Card.ImgOverlay>
        <Card.Title style={{fontSize:'25px'}}>CHEST</Card.Title>
        <Card.Text>
        Click here for more chest videos: <Button variant="outline-light">Go Train Chest</Button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>

    <Card className="bg-dark text-dark" >
      <Card.Img src="shoulder.jpg" alt="Card image" style={{height:'400px', objectFit:'cover'}} />
      <Card.ImgOverlay>
        <Card.Title style={{fontSize:'25px'}}>BACK</Card.Title>
        <Card.Text>
        Click here for more back videos: <Button variant="outline-dark">Go Train Back</Button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>

    <Card className="bg-dark text-white" >
      <Card.Img src="leg.jpg" alt="Card image" style={{height:'400px', objectFit:'cover'}} />
      <Card.ImgOverlay>
        <Card.Title style={{fontSize:'25px'}}>LEG</Card.Title>
        <Card.Text>
        Click here for more leg videos: <Button variant="outline-dark">Go Train Leg</Button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>

    <Card className="bg-dark text-white" >
      <Card.Img src="cardio.jpg" alt="Card image" style={{height:'400px', objectFit:'cover'}} />
      <Card.ImgOverlay>
        <Card.Title style={{fontSize:'25px'}}>CARDIO</Card.Title>
        <Card.Text>
        Click here for more cardio videos: <Button variant="outline-light">Go Train Cardio</Button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>

    </>
    
  )
}

export default Workouts