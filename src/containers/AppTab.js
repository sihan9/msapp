import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import AppHome from "./AppHome";
import AppAbout from './AppAbout';
import AppMy from './AppMy';

export default class AppTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab'
    };
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#fff"
          tintColor="#000"
          barTintColor="#bc0400"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<i className="iconfont icon-home"></i>}
            selectedIcon={<i className="iconfont icon-home"></i>}
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >
            <AppHome/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-fujin-"></i>}
            selectedIcon={<i className="iconfont icon-fujin-"></i>}
            title="附近"
            key="About"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
          >
            <AppAbout/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-dingdan"></i>}
            selectedIcon={<i className="iconfont icon-dingdan"></i>}
            title="订单"
            key="Order"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            订单
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-ziyuan1"></i>}
            selectedIcon={<i className="iconfont icon-ziyuan1"></i>}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            <AppMy/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}