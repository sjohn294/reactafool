import profilePic from '../../assets/portfolioimg.jpg'


export default function About() {
    return (
      <div className='about-cont'>
        <h1>About Me</h1>
        <img src={profilePic} alt="my family" style={{ width: '200px', height: 'auto' }}/>
        <p>My name is Samuel Johnson. I am an ex Marine from <br />
          Charlotte North Carolina starting my coding career at the coding bootcamp. <br />
          I am looking forward to the opportunity to start my career and be a pillar of support for my family</p>
      </div>
    );
  }
