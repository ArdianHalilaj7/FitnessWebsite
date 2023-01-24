import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Card,} from 'react-bootstrap';

const Food = () => {

    const [tasks, setTasks] = useState();
    //https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita


    const getApiData = async () => {
        const response = await fetch ("https://jsonplaceholder.typicode.com/todos").then((response) => response.json())
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
                    <Col sm={12} lg={6} md={4}>
                    <Card style={{backgroundColor : task.completed ? "#32CD32" : "gray"}}>
                            <Card.Body>
                                <Card.Title>{task.title}</Card.Title>
                                <Card.Text>
                                    Task Completed : {task.completed ? "YES" : "NO"}
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