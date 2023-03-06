import styles from '../css/LandingPage.css'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

function MyGoal () {

  return (
    
    <Card className='landing'>
      <Carousel fade className='intro'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/174970862/photo/man-walking-a-slackline-over-verdon-gorges-france.jpg?b=1&s=170667a&w=0&k=20&c=uLtrTtehIwXQNrlWmKUlL_g51ON8E0WyJeqY2bQpv6U="
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1129815448/photo/woman-practices-slacklining-in-a-park.jpg?s=612x612&w=0&k=20&c=BlgsFKWyS_BScP96U3rynwYrfcTz22ez-7iTx9XqDk8="
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.gettyimages.com/id/537450359/photo/girl-walking-on-slack-line.jpg?s=612x612&w=gi&k=20&c=W73Ex5cjtsUdkro8jRkwHtvPiMPUUmu7wVxDau2v7ME="
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <Card.Body className='intro'>
        <Card.Text>
       <p>
         Hello! As a slackline coach, my main goal is to help my clients improve their balance, core strength, and overall physical and mental coordination. I want to help them develop the skills and confidence needed to walk and perform tricks on the slackline with ease and grace.
        </p>
        <p>
        My reason for coaching is simple: I love slacklining and I want to share my passion with others. I believe that slacklining is not only a fun and challenging activity, but also a great way to improve one's physical and mental well-being. It requires focus, concentration, and perseverance, all of which are valuable skills that can be applied to other areas of life.
        </p>
        <p>
        In addition to helping my clients improve their slacklining skills, I also want to create a supportive and inclusive community of slackliners. I want to foster an environment where everyone feels welcome, regardless of their skill level or background. I believe that by working together and supporting one another, we can all achieve our goals and have a lot of fun along the way.
        </p>
        <p>
        So, whether you're a beginner looking to take your first steps on the slackline or an experienced slackliner looking to master new tricks, I'm here to help! Let's work together to achieve your goals and have a great time in the process.
        </p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
export default MyGoal