import {createSignal} from 'solid-js'
import { Card, ListGroup, ListGroupItem  } from "solid-bootstrap";


const Ghibli = () =>{
    const [getInfo, setInfo] = createSignal([])

    fetch("https://ghibliapi.herokuapp.com/films")
    .then(res => res.json())
    .then(data => {
        setInfo(data)
    })
    console.log(getInfo)
    return(
        <>
        <h1>App</h1>
        {
            getInfo().map(result =>{
                return(
                    <>
                    
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={result.movie_banner} />
                        <Card.Body>
                            <Card.Title>{result.title}</Card.Title>
                            <Card.Text>
                            {result.description}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                    </>
                )
            })
        }

        </>
    
    ) 
        
}

export default Ghibli