import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { Icon } from 'react-icons-kit'
import { cross } from 'react-icons-kit/icomoon/cross'
import { checkmark } from 'react-icons-kit/icomoon/checkmark'
import {generateMedia} from 'styled-media-query'


export default function TabContentThree() {
 return (
  <TabContainer>
   <div className="tab-content">
    <div className="tab-top-content">
     <span>Choose one plan and watch everything on Netflix</span>
     <Button className="btn" >try it now</Button>
    </div>
    {/* Tab tables*/}
    <div className="tab-bottom-content">
     <table>
      <thead>
       <tr>
        <th></th>
        <th>Basic</th>
        <th>Standard</th>
        <th>Premium</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Monthly price</td>
        <td>&#x20a6; 299.99</td>
        <td>&#x20a6; 399.99</td>
        <td>&#x20a6; 499.99</td>
       </tr>
       <tr>
        <td>HD available</td>
        <td><Icon icon={cross} size={10} /></td>
        <td><Icon icon={checkmark} size={10} /></td>
        <td><Icon icon={checkmark} size={10} /></td>
       </tr>

       <tr>
        <td>Ultra HD available</td>
        <td><Icon icon={cross} size={10} /></td>
        <td><Icon icon={cross} size={10} /></td>
        <td><Icon icon={checkmark} size={10} /></td>
       </tr>

       <tr>
        <td>Screens you can watch on at the same time</td>
        <td>1</td>
        <td>2</td>
        <td>4</td>
       </tr>

       <tr>
        <td>Watch on your laptop, TV, phone and tablet</td>
        <td><Icon icon={checkmark} size={10} /></td>
        <td><Icon icon={checkmark} size={10} /></td>
        <td><Icon icon={checkmark} size={10} /></td>
       </tr>

       <tr>
        <td>Unlimited movies and TV shows</td>
        <td><Icon icon={checkmark} size={10} /></td>
        <td><Icon icon={checkmark} size={10} /></td>
        <td><Icon icon={checkmark} size={10} /></td>
       </tr>

       <tr>
        <td>Cancel anytime</td>
        <td><Icon icon={checkmark} size={10} /></td>
        <td><Icon icon={checkmark} size={10} /></td>
        <td><Icon icon={checkmark} size={10} /></td>
       </tr>
      </tbody>
     </table>
    </div>
   </div>
  </TabContainer>
 )
}


const customMedia = generateMedia({
    lgDesktop: '1350px',
    mdDesktop: '1000px'
})

const TabContainer = styled.div`
background: var(--main-deep-dark);

.tab-content{
 margin: 0 15%;
 padding-bottom: 1%;
}

.tab-top-content{
 display: grid;
 grid-template-columns: repeat(12, 1fr);
 padding: 3rem 0 0;
 ${customMedia.lessThan('lgDesktop')`
  grid-template-columns: 1fr;
  row-gap : 1.5rem;
  text-align : center;
 `}
}


span{
 grid-column: 3 / 9;
 ${customMedia.lessThan('lgDesktop')`
  grid-column : 1 / -1;
 `}
}

.btn{
 margin-left: 3rem;
 margin-right: 2.1rem;
 grid-column: 9 / 12;
 ${customMedia.lessThan('mdDesktop')`
  grid-column : 1 / -1;
  margin-left : 30%;
  margin-right: 30%;
 `}
}

.tab-bottom-content{
 margin:2rem auto;
}

table{
 width: 100%;
 margin-top: 2rem;
 border-collapse: collapse;
}

table thead th{
 padding: 0.8rem;

}

table tbody{
 display: table-row-group;
 vertical-align: middle;
 border-color: inherit;
}

table tbody tr td{
 color: #999;
 padding: 0.8rem 1.2rem;
 text-align: center;
}

table tbody tr td:first-child{
 text-align: left;
}

table tbody tr:nth-child(even){
 background: #222;
}

`