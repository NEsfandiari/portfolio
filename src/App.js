import React, { Component } from 'react';
import './App.css';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import * as Scroll from 'react-scroll';

// images
import face from './portfolio.jpg'
import resume from './undraw_resume_folder_2_arse.svg'
import home from './undraw_Astronaut_0o7w.svg'
import work from './undraw_mission_impossible_bwa2.svg'
import contact from './undraw_mail_box_kd5i.svg'
import chat from './undraw_typing_jie3.svg'

var scroll = Scroll.animateScroll;
AOS.init();

class App extends Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
    this.workClick = this.workClick.bind(this)
    this.contactClick = this.contactClick.bind(this)
  }
  
  componentWillReceiveProps (){ 
    AOS.refresh(); 
  }
  workClick(e){
    scroll.scrollTo(885);
  };
  contactClick(e){
    scroll.scrollTo(2000);
  };
  
  render() {
   return (
      <div className="App">
      <link rel="stylesheet" href="//brick.a.ssl.fastly.net/Open+Sans:300,400,600,700,900,700i,900i"/>
        <header data-aos="zoom-out" data-aos-delay="500">
          <img className='face' src={face} alt='faceLogo'/>
          <h1 data-aos="fade-down" data-aos-delay="2000" className='name'>Niki Esfandiari</h1>
          <nav>
            <ul className='anchors'>
              <li data-aos="fade-right" data-aos-delay="1500"><a href='/'>Home</a></li>
              <li data-aos="fade-right" data-aos-delay="1500"><a href='https://drive.google.com/file/d/1-li7nAFmNKEtnP45q68T0uRHToOh1jRm/view'>Resume</a></li>
              <li data-aos="fade-left" data-aos-delay="1500" onClick={this.workClick}>Work</li>
              <li data-aos="fade-left" data-aos-delay="1500" onClick={this.contactClick}>Contact</li>
            </ul>
            <ul className='icons' data-aos="zoom-in" data-aos-delay="1000">
              <img src={home} alt='homei'></img>
              <img src={resume} alt='resumei'></img>
              <img src={work} alt='worki'></img>
              <img src={contact} alt='contacti'></img>
            </ul>
          </nav>
        </header>
        
        <div className="home" data-aos="zoom-out-up" data-aos-delay="2500">
            <h1>Hello!</h1>
            <p>My name is Niki. I’m studying Web Development at Rithm School San Francisco. I’ve created some stuff like an ecommerce store, a couple blog posts, and a Kicktstarter Projection tool.
            If you like something you see here, please don't hesitate to contact!
            </p>
        </div>
        
        <div className='work'>
            <h1 data-aos="zoom-out">Selected Works</h1>
            <div className='project1' data-aos="zoom-out" data-aos-delay="500">
              <h2>Project 1</h2>
              <img src='https://artist.com/art-recognition-and-education/wp-content/themes/artist-blog/media-files/2016/03/futurism-3.jpg' alt='project1img'/>
            </div>
            <div className='project1' data-aos="zoom-out" data-aos-delay="500">
              <h2>Project 2</h2>
              <img src='https://icdn-4.motor1.com/images/mgl/4vjgJ/s1/bmw-i8-futurism-edition.jpg' alt='project2img'/>
            </div>
            <div className='project1'data-aos="zoom-out" data-aos-delay="300">
              <h2>Project 3</h2>
              <img src='http://www.ultraswank.net/uploads/retro-kitchen-1.jpg' alt='project3img'/>
            </div>
        </div>
        
        <div className='contact'>
            <h1 data-aos="fade-right">Let's Chat!</h1>
            <ul>
              <li data-aos="fade-down-left" data-aos-delay="200">
                <h2>Email</h2>
                <p>NEsfandiari37@gmail.com</p>
              </li>
              <li data-aos="fade-left" data-aos-delay="300">
                <h2>Phone</h2>
                <p>1-925-286-2521</p>
              </li>
              <li data-aos="flip-left" data-aos-delay="400">
                <h2>Currently At</h2>
                <p>Walnut Creek, CA</p>
              </li>
            </ul>
            <img data-aos="fade-up-left" src={chat} alt='chatimg'/>
        </div>
          
      </div>
    );
  }
}

export default App;
