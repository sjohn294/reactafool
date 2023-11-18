import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './pages.css'
import image1 from '../../assets/3card.jpg'
import image2 from '../../assets/5card.jpg'
import image3 from '../../assets/6card.jpg'
import image4 from '../../assets/11card.jpg'
import image5 from '../../assets/12card.jpg'
import image6 from '../../assets/18card.jpg'

export default function MyWork() {
    const myProjects= [
        {title: 'CreedThoughts', githubLink:'https://github.com/sjohn294/CreedThoughts', deployedLink:'https://sjohn294.github.io/CreedThoughts/',image: image1},
        {title: 'WakeUpMrJohnson', githubLink:'https://github.com/sjohn294/Wakeupmrjohnson', deployedLink:'https://sjohn294.github.io/Wakeupmrjohnson/',image:image2},
        {title: 'TurdParty', githubLink:'https://github.com/sjohn294/TurdParty', deployedLink:'https://sjohn294.github.io/TurdParty/',image:image3},
        {title: 'ExpressYourself', githubLink:'https://github.com/sjohn294/Expressyourself', deployedLink:'https://safe-brushlands-38967-e17624b6bce0.herokuapp.com/',image:image4},
        {title: 'TheSqlIsbetter', githubLink:'https://github.com/sjohn294/thesequelisbetter', deployedLink:'https://drive.google.com/file/d/1CTcU3RA8stETPtZwq2RG04H_PVhTHLk4/view',image:image5},
        {title: 'ThankYouComeAgain', githubLink:'https://drive.google.com/file/d/18LfaoQoOOsE913IWHG-ezgzsWPXQAQQf/view', deployedLink:'https://drive.google.com/file/d/18LfaoQoOOsE913IWHG-ezgzsWPXQAQQf/view',image:image6},
    ]
    
    return (
      <div>
        <h1>My Work Page</h1>
        <div className='card-container'>
            {myProjects.map((project, index) => (
                <Card key={index} className='card'>
                    <Card.Img variant="top" src={project.image} />
                    <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>
                            {project.description}
                        </Card.Text>
                        <Button variant="primary" href={project.githubLink}>GitHub</Button>
                        <Button variant="secondary" href={project.deployedLink}>Live Demo</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
      </div>
    );
}