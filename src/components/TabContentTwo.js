import React from 'react'
import { Button } from './Button'
import styled from 'styled-components'
import tabtv from '../assets/images/tab-tv.png'
import tabMac from '../assets/images/tab-macbook.png'
import tabTablet from '../assets/images/tab-tablet.png'
import {generateMedia} from 'styled-media-query'

export default function TabContentTwo() {
 return (
  <TabContainer>
   <div className="tab-content">
    <div className="tab-top-content">
     <span style={{ fontSize: '1.5rem' }}>Watch TV shows and movies, anywhere - <br />
   personalized for you</span>
     <Button className="btn" >try it now</Button>
    </div>
    {/* Tab bottom content*/}
    <div className="tab-bottom-content">
     {/* Tab bottom content 1*/}
     <div>
      <img src={tabtv} alt="" style={{ width: '18.75rem' }} />
      <h3>Watch on your TV</h3>
      <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
     </div>
     {/* Tab bottom content 2*/}
     <div>
      <img src={tabTablet} alt="" style={{ width: '18.75rem', paddingTop: '0.625rem' }} />
      <h3>Watch on your TV</h3>
      <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
     </div>
     {/* Tab bottom content 3*/}
     <div>
      <img src={tabMac} alt="" style={{ width: '18.75rem', paddingTop: '0.625rem', paddingBottom: '0.625rem' }} />
      <h3>Watch on your TV</h3>
      <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
     </div>
    </div>
   </div>
  </TabContainer>
 )
}

const customMedia = generateMedia({
  smDesktop:'1440px',
  tablet:'900px'
}) 

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

 ${customMedia.lessThan('smDesktop')`
 grid-template-columns: repeat(2, 1fr);

 `}

 ${customMedia.lessThan('tablet')`
 grid-template-columns: 1fr;
 row-gap : 1.5rem;
 text-align : center;
 `}
}

span{
 grid-column: 1 / 8;
 ${customMedia.lessThan('tablet')`
 grid-column: 1 / -1;
 font-size: 1.5rem;
 `}
}

.btn{
 /* margin-top: 1rem; */
 margin: 0 1.25rem 1.25rem;
 grid-column: 10 / 12;
 ${customMedia.lessThan('tablet')`
 grid-column: 1 / -1;
 margin-left : 30%;
 margin-right: 30%;
 `}
}

.tab-bottom-content{
display: grid;
grid-template-columns: repeat(3, 1fr);
text-align: center;
grid-gap: 2rem;
margin-top: 2rem;
${customMedia.lessThan('tablet')`
  grid-template-columns: 1fr;
 `}
}

img{
  width: 100%;
}

p{
 color: var(--main-grey);
}
`