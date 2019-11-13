import React, { Component } from 'react'
import { List } from 'antd-mobile';
const Item = List.Item;

export default class AppMy extends Component {
    render() {
        return (
            <div>
                <div style={{marginBottom:'10px',height:'300px',background:'#c10a06',position:'relative'}}>
                    <i className="iconfont icon-shezhi" style={{color:'#fff',position:'relative',top:'20px',left:'90%'}} ></i>
                    <div style={{position:'relative',top:'60px',left:'38%',borderRadius:'50px',overflow:'hidden',width:'100px',height:"100px"}}>
                        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=175919244,932448081&fm=26&gp=0.jpg" alt="" style={{width:'100px',height:"100px"}}/>
                    </div>
                    <p style={{position:'relative',top:'60px',left:'40%',fontSize:"16px",color:'#fff'}}>迈克尔楠楠</p>
                    <div style={{height:'80px',background:'#ab0603',opacity:0.7,position:'relative',top:'80px'}}>
                        <div style={{float:'left',width:'33.3%'}}>
                            <p className="my-top-p1">0元</p>
                            <p className="my-top-p2">我的钱包</p>
                        </div>
                        <div style={{float:'left',width:'33.3%'}}>
                            <p className="my-top-p1">8个</p>
                            <p className="my-top-p2">我的红包</p>
                        </div>
                        <div style={{float:'left',width:'33.3%'}}>
                            <p className="my-top-p1">2张</p>
                            <p className="my-top-p2">商家代金券</p>
                        </div>
                    </div>
                </div>
                <List style={{marginBottom:'10px'}}>
                    <Item arrow="horizontal">
                        <i className="iconfont icon-biaodian-" style={{marginRight:'10px'}}></i>
                        我的收货地址
                    </Item>
                    <Item arrow="horizontal">
                        <i className="iconfont icon-shoucang" style={{marginRight:'10px'}}></i>
                        我的收藏
                    </Item>
                    <Item arrow="horizontal">
                        <i className="iconfont icon-xiaoxi1" style={{marginRight:'10px'}}></i>
                        我的评论
                    </Item>
                    <Item arrow="horizontal">
                        <i className="iconfont icon-qian4" style={{marginRight:'10px'}}></i>
                        我的退款
                    </Item>
                    <Item arrow="horizontal">
                        <i className="iconfont icon-lingdang" style={{marginRight:'10px'}}></i>
                        我的消息
                    </Item>
                </List>
                <List style={{marginBottom:'10px'}}>
                    <Item arrow="horizontal">
                        <i className="iconfont icon-help" style={{marginRight:'10px'}}></i>
                        帮助与反馈
                    </Item>
                </List>
                <List>
                    <Item arrow="horizontal">
                        <i className="iconfont icon-shenglvehao" style={{marginRight:'10px'}}></i>
                        更多
                    </Item>
                </List>
                <p style={{
                    color:'#000',
                    fontSize:'16px',
                    textAlign:'center',
                    marginTop:'20px'
                }}>客服电话 <span style={{
                    color:'#c5504e'
                }}>400-820-888</span></p>
            </div>
        )
    }
}
