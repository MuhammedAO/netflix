import React, { Component } from 'react'
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'
import FirstTab from './tabs_nav/FirstTab'
import SecondTab from './tabs_nav/SecondTab'
import ThirdTab from './tabs_nav/ThirdTab'
import '../css/TabsNav.css'
import TabContentOne from './TabContentOne'
import TabContentTwo from './TabContentTwo'

class TabComponent extends Component {
 state = {
  tabIndex: 0
 }
 render() {
  return (
   <div>
    <Tabs className="tabs" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
     <TabList className="tab-nav">
      <Tab className={`${this.state.tabIndex === 0 ? 'active tab-selected' : null} `}>
       <FirstTab />
       <p> <strong>No commitments <br /> cancel online at anytime. </strong> </p>
      </Tab>
      <Tab className={`${this.state.tabIndex === 1 ? 'active tab-selected' : null} `}>
       <SecondTab />
       <p style={{ marginTop: '-5.3125rem' }}>
        <strong>Watch anywhere</strong>
       </p>
      </Tab>
      <Tab className={`${this.state.tabIndex === 2 ? 'active tab-selected' : null} `}>
       <ThirdTab />
       <p> <strong>pick your price</strong> </p>
      </Tab>
     </TabList>
      { /*Tab contents*/}
      <TabPanel>
      <TabContentOne/>
      </TabPanel>
      <TabPanel>
      <TabContentTwo/>
      </TabPanel>
    </Tabs>
   </div>
  )
 }
}

export default TabComponent