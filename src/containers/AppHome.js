import React, { Component } from 'react'
import { NavBar, Carousel ,Grid} from 'antd-mobile';

const ggArr =['餐饮','超市购','骑手专送','家常菜','品牌馆','新店特惠','水果生鲜','质享生活','商务快餐','土豪特供','限时折扣'];
const colorArr = ['#ff3d67','#17d0a3','#ff5656','#fa603c','#fb874e','#0ecc5f','#69d129','#d061de','#fbbc24','#ffcf0d','#dd3c84'];

const data = Array.from(new Array(11)).map((_val, i) => ({
    icon:`https://github.com/sihan9/img/blob/master/t${i+1}.png?raw=true`,
    text: ggArr[i],
    color:colorArr[i]
}));

export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar style={{background:'#bc0400'}}>
                    <button className="home-button">石家庄<i className="iconfont icon-xiala"></i></button>
                    <form>
                        <input type='text' className="home-input" placeholder="搜索商家、品类或商圈"/>
                    </form>
                    <i className="iconfont icon-erweima"></i>
                    <i className="iconfont icon-xiaoxi"></i>
                </NavBar>
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {[1,2,3,4,5].map(val => (
                        <a
                        key={val}
                        href="/"
                        style={{ display: 'inline-block', width: '100%', height: '200px'}}
                        >
                        <img
                            src={`https://github.com/sihan9/img/blob/master/${val}.jpg?raw=true`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                        />
                        </a>
                    ))}
                </Carousel>
                <Grid data={data}
                    isCarousel
                    // onClick={_el => console.log(_el)} 
                    columnNum='5'
                    itemStyle={{background:'#fff'}}
                    renderItem={dataItem => (
                        <div style={{background:`${dataItem.color}`,width:'60px',height:'60px',marginLeft:'10px',borderRadius:'20px'}}>
                          <img src={dataItem.icon} alt="" style={{ width:'30px',height:'30px' }} />
                          <p style={{color:'#fff' }}>{dataItem.text}</p>
                        </div>
                    )}
                />
                <div className="home-tj">
                    <div className="home-tj-div1">
                        <p className="home-tj-p1">超值购菜品</p>
                        <p className="home-tj-p2">劲爆折扣专区</p>
                        <p className="home-tj-p3">美食专区</p>
                        <img src="https://github.com/sihan9/img/blob/master/images/tj1.png?raw=true" alt=""/>
                    </div>               
                    <div className="home-tj-div2">
                        <div className="home-tj-div21">
                            <p className="home-tj-p1">五星好评店</p>
                            <p className="home-tj-p2">好评餐馆排行榜</p>
                            <p className="home-tj-p3">不排队的人气美食</p>
                        </div>
                        <div className="home-tj-div22">
                            <img src="https://github.com/sihan9/img/blob/master/images/tj2.png?raw=true" alt=""/>
                        </div>
                    </div>               
                    <div className="home-tj-div3">
                        <p className="home-tj-p4">天天满减</p>
                        <p className="home-tj-p2">每天都有新优惠</p>
                        <img src="https://github.com/sihan9/img/blob/master/images/tj3.png?raw=true" alt=""/>
                    </div>               
                    <div className="home-tj-div4">
                        <p className="home-tj-p4">新店尝鲜</p>
                        <p className="home-tj-p2">每天都有新优惠</p>
                        <img src="https://github.com/sihan9/img/blob/master/images/tj4.png?raw=true" alt=""/>
                    </div>               
                </div>
                <div style={{
                    height:'20px'
                }}>
                    <button style={{
                        float:'left',
                        background:'none',
                        border:'none',
                        fontSize:'16px'
                    }}>商家分类<i className="iconfont icon-xiala"></i></button>
                    <button style={{
                        float:'right',
                        background:'none',
                        border:'none',
                        fontSize:'16px'
                    }}>排序<i className="iconfont icon-xiala"></i></button>
                </div>
                <div>
                    <div className="home-sj-div">
                        <img src="https://github.com/sihan9/img/blob/master/images/sj1.png?raw=true" alt="" className="home-sj-img1"/>
                        <p className="home-sj-p1">鲜芋仙 （海悦天地店）</p>
                        <img src="https://github.com/sihan9/img/blob/master/images/sj2.png?raw=true" alt="" className="home-sj-img2"/>
                        <p className="home-sj-p2">月售 226份</p>
                        <p className="home-sj-p3">32分钟</p>
                        <p className="home-sj-p4">起送 ¥20 | 配送 ¥4</p>
                        <p className="home-sj-p3">1.2km</p>
                        <img src="https://github.com/sihan9/img/blob/master/images/sj3.png?raw=true" alt="" className="home-sj-img3"/>
                        <p className="home-sj-p5">新用户立减19元（限钱包支付，其他支付立减8元）</p>
                        <button style={{
                            background:'none',
                            border:'none'
                            }}>5个活动<i className="iconfont icon-xiala"></i></button>
                        <img src="https://github.com/sihan9/img/blob/master/images/sj4.png?raw=true" alt="" className="home-sj-img4"/>
                        <p className="home-sj-p5">满20减4元，满30减6元，满50减9元</p>
                    </div>
                    <div className="home-sj-div">
                        <img src="https://github.com/sihan9/img/blob/master/images/sj1.png?raw=true" alt="" className="home-sj-img1"/>
                        <p className="home-sj-p1">鲜芋仙 （海悦天地店）</p>
                        <img src="https://github.com/sihan9/img/blob/master/images/sj2.png?raw=true" alt="" className="home-sj-img2"/>
                        <p className="home-sj-p2">月售 226份</p>
                        <p className="home-sj-p3">32分钟</p>
                        <p className="home-sj-p4">起送 ¥20 | 配送 ¥4</p>
                        <p className="home-sj-p3">1.2km</p>
                        <img src="https://github.com/sihan9/img/blob/master/images/sj3.png?raw=true" alt="" className="home-sj-img3"/>
                        <p className="home-sj-p5">新用户立减19元（限钱包支付，其他支付立减8元）</p>
                        <button style={{
                            background:'none',
                            border:'none'
                            }}>5个活动<i className="iconfont icon-xiala"></i></button>
                        <img src="https://github.com/sihan9/img/blob/master/images/sj4.png?raw=true" alt="" className="home-sj-img4"/>
                        <p className="home-sj-p5">满20减4元，满30减6元，满50减9元</p>
                    </div>
                </div>
            </div>
        )
    }
}
