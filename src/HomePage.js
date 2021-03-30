import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function HomePage() {

  function scrollwhatwedo() {
    var elem = document.getElementById('what-we-do');
    elem.scrollIntoView();
}
function contactus() {
  var elem = document.getElementById('footer');
  elem.scrollIntoView();
}

    return (
        <div className='page'>
          <div className='cover-parent'>
          <div className='cover'>
            <div className='cover-text fade-in'>
               <h2>Let's move your finances forward Together
               </h2>
            </div>
            <div className='sample'>
            <div className='sub-sample'></div>
          </div>
           </div>
          </div>
          
         
    <div className='wrapper'>
    <div className='box-wrapper'>
    <div className='box'>
      <h3>Welcome</h3>
      <div>Welcome the Jẹsẹ́kù website. To learn more about us, click the button below</div>
      <Button variant="primary" className='box-btn' as={Link} to='/about-us'>Learn More</Button>
    </div>
    </div>
    
    <div className='box-wrapper'>
    <div className='box'>
    <h3>Our Services</h3>
      <div>We offer a variety of cooperative services, if you are interested, click the button below</div>
      <Button variant="primary" className='box-btn' onClick={()=>scrollwhatwedo()}>Learn More</Button>
    </div>
    </div>

    <div className='box-wrapper'>
    <div className='box'>
    <h3>Join Us</h3>
      <div>Our main web applictaion will be released in due time, provide us with some of your information so we can know more about you</div>
      <Button variant="primary" className='box-btn' href='https://forms.gle/yG6tJ66dtNiqe7uo9'>Fill Form</Button>
    </div>
    </div>
    </div>

    <div className='contact-us-btn' onClick={()=>contactus()}>
     <div className='contact-btn-text'>Contact Us</div>
    </div>

    <div className='what-we-do' id='what-we-do'>
     <h3 className='blue3-font'>What We Do</h3>
     <div className='action-grid'>
       <div className='action blue3-font'>
       <span className='number'>1.</span>Organize trainings for Entrepreneurs on financial management and business 
       </div>
       <div className='action blue3-font'>
       <span className='number'>2.</span> Equip members with information needed to apply for loan facilities
       </div>
       <div className='action blue3-font'>
       <span className='number'>3.</span> Formulate direct or indirect  mechanisms to monitor members' business performances; to check on their level of productivity
       </div>
       <div className='action blue3-font'> 
       <span className='number'>4.</span> Establish business ventures and create job opportunities for members
       </div>
       <div>
       </div>
     </div>
    </div>
   </div>
    )
}
