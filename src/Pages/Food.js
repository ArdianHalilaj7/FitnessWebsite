import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Card,} from 'react-bootstrap';

const Food = () => {

    const [tasks, setTasks] = useState();
    //https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita


    const getApiData = async () => {
        const response = await fetch ("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita").then((response) => response.json())
        setTasks(response );
    }

    useEffect(()=>{
        getApiData();
    },[])


  return (
    <Container>
        <Row>
            {
                tasks && tasks.map((task) => (
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{task.title}</Card.Title>
                                <Card.Text>
                                    {/* Task Completed : {task.completed} */}
                                </Card.Text>
                        </Card.Body>
                   </Card>
               </Col>

                ))
            }

        </Row>
    </Container>

  )
}

export default Food