import React, { Component } from 'react'
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'
import FirstTab from './tabs_nav/FirstTab'
import SecondTab from './tabs_nav/SecondTab'
import ThirdTab from './tabs_nav/ThirdTab'
import '../css/TabsNav.css'

class TabComponent extends Component {
    state={
        tabIndex: 0
    }
 render() {
  return (
   <div>
    <Tabs className="tabs" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({tabIndex})}>
     <TabList className="tab-nav">
      <Tab className={`${this.state.tabIndex === 0 ? 'active' : null} `}>
       <FirstTab />
       <p> <strong>No commitments <br /> cancel online at anytime. </strong> </p>
      </Tab>
      <Tab className={`${this.state.tabIndex === 1 ? 'active' : null} `}>
       <SecondTab />
       <p style={{ marginTop: '-5.3125rem' }}>
        <strong>Watch anywhere</strong>
       </p>
      </Tab>
      <Tab className={`${this.state.tabIndex === 2 ? 'active' : null} `}>
       <ThirdTab />
       <p> <strong>pick your price</strong> </p>
      </Tab>
     </TabList>
    </Tabs>
   </div>
  )
 }
}

export default TabComponent