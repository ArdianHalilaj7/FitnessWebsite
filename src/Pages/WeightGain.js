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

const WeightGain = () => {
    
  return (
    <>
    <br/>

    <div className="d-grid gap-3">
      <Button style={{height:'80px'}} variant="dark" size="lg"> Weight Gain: </Button>
    </div>

    <Container fluid style={{padding:'0px'}}>
        <CardGroup className="m-5 d-block">
          <Card className="m-5 border-0 shadow" style={styles.card}>
            <Row>

              <Col>
                <Card.Img src="milk.jpg" style={styles.cardImage} />
              </Col>

              <Col>
                <Card.Body>
                <Card.Title ><Button variant="dark" size="lg"> 1.Milk</Button></Card.Title>
                <br/>
                <Card.Text as="h4" style={styles.cardText}>
                <h6 className='h4biography' style={{fontSize:'10px'}}>
                Milk has been used as a weight gainer or muscle builder for decades.
                It provides a good balance of proteins, carbs, and fats and is a good source of calcium, 
                as well as other vitamins and minerals.
                For those trying to add more muscle, milk is an excellent protein source that 
                provides both casein and whey proteins. Research has even shown it can help 
                you add muscle when combined with weightlifting.
                Additionally, studies have found that milk, or whey and casein combined, 
                can lead to greater mass gain than other protein sources.

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
                <Card.Img src="rice.jpg" style={styles.cardImage} />
              </Col>

              <Col>
                <Card.Body>
                <Card.Title><Button variant="dark" size="lg"> 2.Rice</Button></Card.Title>
                <br/>
                <Card.Text as="h4" style={styles.cardText}>
                <h6 className='h4biography' style={{fontSize:'10px'}}>
                Rice is a convenient, low cost carb source to help you gain weight. Just 1 cup (158 grams) 
                of cooked white rice provides 204 calories, 44 grams of carbs, and very little fat.
                Rice is also fairly calorie-dense, meaning you can easily obtain a high amount of carbs 
                and calories from a single serving. This helps you eat more food, especially if 
                you have a poor appetite or get full quickly.
                When you’re on the go or in a rush, 2-minute packs of microwavable rice can be easily 
                added to other protein sources and premade meals.
                Another popular method is to prepare a large pot of rice, refrigerate it or freeze 
                individual portions, and then combine it with different proteins and healthy fats 
                for varied meals throughout the week.

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
                <Card.Img src="nutbutter.jpg" style={styles.cardImage} />
              </Col>

              <Col>
                <Card.Body>
                <Card.Title><Button variant="dark" size="lg"> 3.Nuts and nut butter</Button></Card.Title>
                <br/>
                <Card.Text as="h4" style={styles.cardText}>
                <h6 className='h4biography' style={{fontSize:'10px'}}>
                Nuts and nut butters are perfect choices if you’re looking to gain weight.
                Just one small handful of raw almonds (1/4 cup) contains 170 calories, 6 grams of protein, 
                4 grams of fiber, and 15 grams of healthy fats.
                Since nuts are very calorie-dense, just two handfuls per day with a meal or as a 
                snack can quickly add hundreds of calories.
                You can add nut butters to a variety of snacks or dishes, such as smoothies, yogurts, 
                and crackers, to turn them into a high calorie snack in no time.
                For a quick pick-me-up, try this peanut butter banana smoothie, with only 
                three ingredients (270 calories, using whole milk). If you have a peanut allergy, 
                substitute another nut butter.
                However, make sure you pick 100 percent nut butters with no added sugar or extra oils. 
                Or better yet, make your own from this homemade almond butter recipe. 
                It’s easy to make and easy on your wallet, too.
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
                <Card.Img src="redmeat.jpg" style={styles.cardImage} />
              </Col>

              <Col>
                <Card.Body>
                <Card.Title><Button variant="dark" size="lg"> 4.Red Meat</Button></Card.Title>
                <br/>
                <Card.Text as="h4" style={styles.cardText}>
                <h6 className='h4biography' style={{fontSize:'10px'}}>
                Red meats are probably one of the best muscle-building foods available.
                For example, 6 ounces (170 grams) of steak contains around 5 grams of leucine.
                Leucine is the key amino acid your body needs to stimulate muscle protein 
                synthesis and add new muscle tissue . It also contains 
                456 calories and nearly 49 grams of protein.
                In addition to this, red meats are one of the best natural sources of 
                dietary creatine, which is possibly the world’s best muscle-building supplement.
                Consider choosing fattier cuts, which provide more calories than leaner meats, 
                helping you take in extra calories and add weight.
                In one study, 100 older women added 6 ounces (170 grams) of red meat to their 
                diets and performed resistance training 6 days a week for 6 weeks.

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
                <Card.Img src="patatoes.jpg" style={styles.cardImage} />
              </Col>

              <Col>
                <Card.Body>
                <Card.Title ><Button variant="dark" size="lg"> 5.Patatoes</Button></Card.Title>
                <br/>
                <Card.Text as="h4" style={styles.cardText}>
                <h6 className='h4biography' style={{fontSize:'10px'}}>
                Potatoes and other starchy foods are a very easy and cost-effective way to add in extra calories.
                Not only do potatoes and other starches add carbs and calories to help you 
                gain weight — they also increase your muscle glycogen stores.
                Glycogen is the predominant fuel source for most sports and activities.
                Many of these carb sources also provide important nutrients and fiber, 
                as well as resistant starch, which can help nourish your gut bacteria.
                With sweet potatoes, you can try out one of the current Instagram trends: 
                sweet potato toast. Prep takes only minutes. Start by washing, drying, and thinly 
                slicing a medium-sized sweet potato, then toast it to your liking either 
                in a toaster or a toaster oven.

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

export default WeightGain