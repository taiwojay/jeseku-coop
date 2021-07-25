import React from 'react'
import akin from "./akinranti-akintola.jpg";
import yinka from "./olayinka-kola.jpg";

export default function AboutUs() {
    return (
        <div className='page '>
          <div className='essay fade-in'>
          <h3>About Us</h3>
          <p> Over the years, many small and medium scale enterprises have been faced with financial instability which has reduced their businesses from zero to nothing.</p>
        
          <p> Therefore, to catapult low and medium income earners to the atmosphere of financial stability, Jeseku was created. </p>
     
          <p>Jeseku is a registered digital limited liability and multi-purpose cooperative network established in 2020, born out of the quest to expand start-up businesses and render financial assistance to entrepreneurs by creating smooth access to loan facilities.</p>
    
          <p>At Jeseku, we believe that SME owners can achieve their entrepreneurial dreams with collaborative efforts. Thus, we are committed to be an intermediary between their abilities and their future.</p>
          <p> In order to reach out to a wide range of entrepreneurs, we devise financial expansion mechanism using the digital space to offer services such as; deposit and savings channels, advance grants, and loaning with little or no interest rates, depending on the business model.</p>
          <p>Nigeria can have a sustainable cash flow if young professionals can lend, save and pay for their essential commodities; that is why Jeseku is at your doorstep to promote financial stability. </p>
          <h3>Vision</h3>
           To promote financial stability in the country and become the highest rated lending network both at the local level and the international spheres.
          <h3>Mission</h3>
           <p>With experienced financial experts and business development officers, Jeseku is aimed at improving the standard of living of individuals by offering sustainable financial advice and feasible lending facilities towards the overall transformation of Nigeria's Socio-economic system, thereby, reducing her level of poverty</p>
            <div className='members-grid'>
            <h3>Meet our Team</h3>
             <div className='member'>
             <div className='img-ctn'>
                <img alt='yinka' src={yinka}></img>
             </div>
              Kola Olayinka
             </div>
          <div className='member'>
          <div className='img-ctn'>
          <img alt='akin' src={akin}></img>
          </div>
            Akinranti Akinola
         </div>
    </div>
        </div>
        </div>
    )
}
