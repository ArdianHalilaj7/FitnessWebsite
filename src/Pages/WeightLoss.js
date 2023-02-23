import { Container, CardGroup, Card, Row, Col, Button } from 'react-bootstrap'
import React from 'react'

const styles = {
    card: {
      backgroundColor: '#000',
      borderRadius: 50,
      padding: '1rem',
    },
    cardImage: {
      objectFit: 'cover',
      borderRadius: 50,
      maxWidth: '500px',
      minWidth: '100px',
    }
  }

const WeightLoss = () => {
    
  return (
    <>
    <br/>

    <div className="d-grid gap-3">
      <Button style={{height:'80px'}} variant="dark" size="lg"> Weight Loss: </Button>
    </div>

    <Container fluid style={{padding:'0px'}}>
        <CardGroup className="m-5 d-block">
          <Card className="m-5 border-0 shadow" style={styles.card}>
            <Row>

              <Col>
                <Card.Img src="eggs1.jpg" style={styles.cardImage} />
              </Col>

              <Col>
                <Card.Body>
                <Card.Title ><Button variant="dark" size="lg"> 1.Eggs</Button></Card.Title>
                <br/>
                <Card.Text as="h4" style={styles.cardText}>
                <h6 className='h4biography' style={{fontSize:'10px'}}>
                Once feared for being high in cholesterol, whole eggs have been making a comeback.

These fears were rooted in misconceptions that overlooked how your body regulates cholesterol levels. Your body sources it, as needed, from your diet or your liver to maintain its baseline levels.

While people with elevated baseline levels of LDL (bad) cholesterol should be more conscious of how much cholesterol they get in their diet, moderate egg consumption — between 7–12 eggs a week — has been proven safe for many people.

Although a higher intake of eggs may raise the levels of LDL cholesterol in some people, eggs are one of the best foods to eat if you’re looking to reach or maintain a healthier weight.

Eggs are incredibly nutrient-dense. Interestingly, almost all its nutrients are found in the yolks — like choline and vitamin D — though egg whites deliver 4–6 grams of protein each.

Because they’re high in protein and fat, they help you feel full.

 </h6>
                </Card.Text>

                </Card.Body>
              </Col>

            </Row>
          </Card>
        </CardGroup>
      </Container>

      <Container fluid style={{padding:'0px'}}>
        <CardGroup className="m-5 d-block">
          <Card className="m-5 border-0 shadow" style={styles.card}>
            <Row>

              <Col>
                <Card.Img src="leafygreens.jpg" style={styles.cardImage} />
              </Col>

              <Col>
                <Card.Body>
                <Card.Title><Button variant="dark" size="lg"> 2.Leafy Greens</Button></Card.Title>
                <br/>
                <Card.Text as="h4" style={styles.cardText}>
                <h6 className='h4biography' style={{fontSize:'10px'}}>
                Leafy greens include kale, spinach, collard greens, Swiss chard, and a few others.
                They have several properties that make them perfect for reaching or maintaining a healthy weight. 
                For example, they pack fiber and nutrients that keep you satiated and hydrated.
                What’s more, leafy greens contain thylakoids, plant compounds that have been linked 
                with increased satiety and better appetite management in at least two human studies.
                It’s worth noting, however, that both studies are small, and participants took a 5-gram thylakoid supplement 
                — the amount found in about 3.5 ounces (100 grams) of raw spinach.

</h6>
                </Card.Text>

                </Card.Body>
              </Col>

            </Row>
          </Card>
        </CardGroup>
      </Container>

      <Container fluid style={{padding:'0px'}}>
        <CardGroup className="m-5 d-block">
          <Card className="m-5 border-0 shadow" style={styles.card}>
            <Row>

              <Col>
                <Card.Img src="salmon.jpg" style={styles.cardImage} />
              </Col>

              <Col>
                <Card.Body>
                <Card.Title><Button variant="dark" size="lg"> 3.Salmon</Button></Card.Title>
                <br/>
                <Card.Text as="h4" style={styles.cardText}>
                <h6 className='h4biography' style={{fontSize:'10px'}}>
                Fatty fish like salmon are incredibly nutritious and very satisfying.
                Salmon is loaded with high quality protein, healthy fats, and various important nutrients. 
                That combination keeps you satiated and can help you reach a healthier weight.
                Salmon is loaded with omega-3 fatty acids, which may help reduce inflammation. 
                Inflammation plays a major role in obesity and metabolic disease.
                Mackerel, trout, sardines, herring, tuna, and other types of fatty fish are also excellent for your health.

</h6>
                </Card.Text>

                </Card.Body>
              </Col>

            </Row>
          </Card>
        </CardGroup>
      </Container>

      <Container fluid style={{padding:'0px'}}>
        <CardGroup className="m-5 d-block">
          <Card className="m-5 border-0 shadow" style={styles.card}>
            <Row>

              <Col>
                <Card.Img src="vegetables.jpg" style={styles.cardImage} />
              </Col>

              <Col>
                <Card.Body>
                <Card.Title><Button variant="dark" size="lg"> 4.Vegetables</Button></Card.Title>
                <br/>
                <Card.Text as="h4" style={styles.cardText}>
                <h6 className='h4biography' style={{fontSize:'10px'}}>
                Cruciferous vegetables include broccoli, cauliflower, cabbage, and Brussels sprouts.
                Like other vegetables, they’re high in fiber and tend to be incredibly filling.
                What’s more, these types of veggies contain decent amounts of protein. 
                They’re not nearly as high in protein as animal foods or legumes, but still high for vegetables.
                A combination of protein, fiber, and low energy density (low calorie content) makes cruciferous 
                vegetables the perfect foods to include in your meals if you want to lose weight.

</h6>
                </Card.Text>

                </Card.Body>
              </Col>

            </Row>
          </Card>
        </CardGroup>
      </Container>

      <Container fluid style={{padding:'0px'}}>
        <CardGroup className="m-5 d-block">
          <Card className="m-5 border-0 shadow" style={styles.card}>
            <Row>

              <Col>
                <Card.Img src="chicken.jpg" style={styles.cardImage} />
              </Col>

              <Col>
                <Card.Body>
                <Card.Title ><Button variant="dark" size="lg"> 5.Chicken breast and some lean meats</Button></Card.Title>
                <br/>
                <Card.Text as="h4" style={styles.cardText}>
                <h6 className='h4biography' style={{fontSize:'10px'}}>
                Meat remains a controversial food group for many people.
                Beyond issues of sustainability and ethics, we’re still not sure whether and how red 
                meat raises the risk of heart disease or diabetes.
                Research on meat consumption and health outcomes has yielded low evidence of causation.
                That language can be confusing, and it’s often misinterpreted as a ringing 
                endorsement to eat more meat, but it simply means that there isn’t enough 
                evidence to say whether it causes unfavorable health outcomes.

</h6>
                </Card.Text>

                </Card.Body>
              </Col>

            </Row>
          </Card>
        </CardGroup>
      </Container>

    </>
  )
}

export default WeightLoss