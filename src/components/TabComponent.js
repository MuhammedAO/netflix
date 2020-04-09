import React, { Component } from 'react'
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'
import FirstTab from './tabs_nav/FirstTab'
import SecondTab from './tabs_nav/SecondTab'
import ThirdTab from './tabs_nav/ThirdTab'
import '../css/TabsNav.css'
import TabContentOne from './TabContentOne'
import TabContentTwo from './TabContentTwo'
import TabContentThree from './TabContentThree'

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
       <p className="lgScreen"> <strong>No commitments <br /> cancel online at anytime. </strong> </p>
       <br/>
       <span className="mdScreen" style={{marginTop:'0.4rem'}}>Cancel</span>
      </Tab>
      <Tab className={`${this.state.tabIndex === 1 ? 'active tab-selected' : null} `}>
       <SecondTab />
       <p className="lgScreen" style={{ marginTop: '-5.3125rem' }}>
        <strong>Watch anywhere</strong>
       </p>
       <span className="mdScreen" style={{ marginTop: '-5.3125rem' }}>Devices</span>
      </Tab>
      <Tab className={`${this.state.tabIndex === 2 ? 'active tab-selected' : null} `}>
       <ThirdTab />
       <p className="lgScreen"> <strong>pick your price</strong> </p>
       <br/>
       <span className="mdScreen">Price</span>
      </Tab>
     </TabList>
      { /*Tab contents*/}
      <TabPanel>
      <TabContentOne/>
      </TabPanel>

      <TabPanel>
      <TabContentTwo/>
      </TabPanel>

      <TabPanel>
      <TabContentThree/>
      </TabPanel>

    </Tabs>
   </div>
  )
 }
}

export default TabComponent