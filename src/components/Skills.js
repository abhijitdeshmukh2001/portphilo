import React from 'react';
import './css/Skill.css';
import Footer from './Footer';

function Skills() {
 
  return (
    <div className="skills">
      <h1 className='fw-bold'> My Skills</h1>
      <h5 className=''>We put your ideas and thus your wishes in the form of a unique web project <br/>that inspires you and your customers.</h5>

      <div class="container">
  <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
    <div class="col">
      <div class="p-3 border bg-light ">
      <div class="text-center box">
  <img src="https://www.svgrepo.com/show/242501/html5.svg" class="rounded myimg" alt=""/>
  <h6>HTML</h6>
</div>
      </div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyfXdKH7SrCVpLx-h0j9VSLf7LQxwWgptJNw&s" class="rounded myimg" alt="..."/>
      <h6>CSS</h6>
      </div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhDNiiiOFAlNwsn46IP_dPz5uycEZmVa4R5w&s" class="rounded myimg" alt="..."/>
      <h6>JAVAscript</h6>
      </div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">
      <img src="https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png" class="rounded myimg" alt="..."/>
      <h6>Node.js</h6>
      </div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">
      <img src="https://e7.pngegg.com/pngimages/224/525/png-clipart-react-javascript-library-angularjs-github-native-symmetry-web-application.png" class="rounded myimg" alt="..."/>
      <h6>React</h6>
      </div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">
      <img src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" class="rounded myimg" alt="..."/>
      <h6>Mongo DB</h6>
      </div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">
      <img src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" class="rounded myimg" alt="..."/>
      <h6>Express.js</h6>
      </div>
    </div>
    
    
   
  </div>
</div>
<br/>
<br/>
      <Footer/>
    </div>
  );
}

export default Skills;
