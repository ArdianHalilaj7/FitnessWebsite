import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Card, CardGroup, Button, Nav} from 'react-bootstrap';


const Food = () => {

    // const [tasks, setTasks] = useState();
    // //https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita


    // const getApiData = async () => {
    //     const response = await fetch ("https://jsonplaceholder.typicode.com/todos").then((response) => response.json())
    //     setTasks(response );
    // }

    // useEffect(()=>{
    //     getApiData();
    // },[])


  return (

    // <Container>
    //     <Row>
    //         {
    //             tasks && tasks.map((task) => (
    //                 <Col sm={12} lg={6} md={4}>
    //                 <Card style={{backgroundColor : task.completed ? "#32CD32" : "gray"}}>
    //                         <Card.Body>
    //                             <Card.Title>{task.title}</Card.Title>
    //                             <Card.Text>
    //                                 Task Completed : {task.completed ? "YES" : "NO"}
    //                             </Card.Text>
    //                     </Card.Body>
    //                </Card>
    //            </Col>

    //             ))
    //         }

    //     </Row>
    // </Container>


    <>

<CardGroup style={{padding:'2px'}}>
      <Card>
        <Card.Img variant="top" src="weightloss.jpg"  />
        <Card.Body>
          <Card.Title>Weight Loss</Card.Title>
          <Card.Text>
            Foods for weight loss:
            <Button variant='danger'><Nav.Link href="/weightloss">Click Here</Nav.Link></Button>
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card>
        <Card.Img variant="top" src="weightgain.jpg" />
        <Card.Body>
          <Card.Title>Weight Gain</Card.Title>
          <Card.Text>
          Foods for weight gain: 
          <Button variant='success'><Nav.Link href="/weightgain">Click Here</Nav.Link></Button>
          </Card.Text>
        </Card.Body>
      </Card>

    </CardGroup>


    </>

  )
}

export default Food