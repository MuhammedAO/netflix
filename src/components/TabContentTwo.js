import React from 'react'
import { Button } from './Button'
import styled from 'styled-components'
import tabtv from '../assets/images/tab-tv.png'
import tabMac from '../assets/images/tab-macbook.png'
import tabTablet from '../assets/images/tab-tablet.png'

export default function TabContentTwo() {
 return (
  <TabContainer>
   <div className="tab-content">
   <div className="tab-top-content">
   <span style={{fontSize: '1.5rem'}}>Watch TV shows and movies, anywhere - <br/>
   personalized for you</span>
   <Button className="btn" >try it now</Button>
   </div>
   {/* Tab bottom content*/}
   <div className="tab-bottom-content">
   {/* Tab bottom content 1*/}
   <div>
   <img src={tabtv} alt=""  style={{width:'18.75rem'}}/>
   <h3>Watch on your TV</h3>
   <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
   </div>
   {/* Tab bottom content 2*/}
   <div>
   <img src={tabTablet} alt="" style={{width:'18.75rem' , paddingTop:'0.625rem'}} />
   <h3>Watch on your TV</h3>
   <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
   </div>
   {/* Tab bottom content 3*/}
   <div>
   <img src={tabMac} alt=""  style={{width:'18.75rem', paddingTop:'0.625rem', paddingBottom:'0.625rem'}}/>
   <h3>Watch on your TV</h3>
   <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
   </div>
   </div>
   </div>
  </TabContainer>
 )
}


const TabContainer = styled.div`
background: var(--main-deep-dark);

.tab-content{
 margin: 0 15%;
}

.tab-top-content{
 display: grid;
 grid-template-columns: repeat(12, 1fr);
 justify-content: center;
 align-items: center;
 padding: 2.5rem 0;
}

span{
 grid-column: 1 / 8;
}

.btn{
 margin: 0 1.2rem 1.2rem;
 grid-column: 10 / 12
}

.tab-bottom-content{
display: grid;
grid-template-columns: repeat(3, 1fr);
text-align: center;
grid-gap: 2rem;
margin-top: 2rem;
}

p{
 color: var(--main-grey);
}
`