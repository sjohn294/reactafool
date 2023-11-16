import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './pages.css'

export default function MyWork() {
    const myProjects= [
        {title: 'project 1', description:'pj1 describe', githubLink:'', deployedLink:'',image:''},
        {title: 'project 2', description:'pj1 describe', githubLink:'', deployedLink:'',image:''},
        {title: 'project 3', description:'pj1 describe', githubLink:'', deployedLink:'',image:''},
        {title: 'project 4', description:'pj1 describe', githubLink:'', deployedLink:'',image:''},
        {title: 'project 5', description:'pj1 describe', githubLink:'', deployedLink:'',image:''},
        {title: 'project 6', description:'pj1 describe', githubLink:'', deployedLink:'',image:''},
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