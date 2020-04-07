import React from 'react'
import Img from '../assets/images/tab-1-pic.png'
import styled from 'styled-components'
import {Button} from './Button'

export default function TabContentOne() {
 return (
  <TabContentContainer>
   <div className="container">
   <div className="tab-content">
   <div>
   <span style={{marginBottom: '2rem'}}>if you decide netflix isn't for you - no problem. No commitment. Cancel online anytime.</span>
   <br/>
   <Button style={{marginTop:'2rem'}}>try it now</Button>
   </div>
   <img src={Img} alt=""/>
   </div>
   </div>
  </TabContentContainer>
 )
}

const TabContentContainer = styled.div`
background: var(--main-deep-dark);

img {
 width: 31.875rem;
}

.container{
 margin: 0 10%;
}

.tab-content{
 display:grid ;
 grid-template-columns: repeat(2,1fr);
 grid-gap: 2rem;
 align-items: center;
 font-size: 2rem;
 padding: 2.5rem;
}

`