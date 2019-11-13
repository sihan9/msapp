import React, { Component } from 'react';
import { ListView ,NavBar} from 'antd-mobile';
import ReactDOM from 'react-dom';

function MyBody(props) {
  return (
    <div className="am-list-body my-body">
      <span style={{ display: 'none' }}>you can custom body wrap element</span>
      {props.children}
    </div>
  );
}

const data = [
  {
    img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2913763452,2664771665&fm=26&gp=0.jpg',
    des: '麦当劳餐厅',
  },
  {
    img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=225690800,2638548666&fm=26&gp=0.jpg',
    des: '必胜客欢乐餐厅',
  },
  {
    img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1320286871,1155378998&fm=26&gp=0.jpg',
    des: '星巴克咖啡厅',
  },
];
const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;

const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];
function genData(pIndex = 0) {
  for (let i = 0; i < NUM_SECTIONS; i++) {
    const ii = (pIndex * NUM_SECTIONS) + i;
    const sectionName = `Section ${ii}`;
    sectionIDs.push(sectionName);
    dataBlobs[sectionName] = sectionName;
    rowIDs[ii] = [];

    for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
      const rowName = `S${ii}, R${jj}`;
      rowIDs[ii].push(rowName);
      dataBlobs[rowName] = rowName;
    }
  }
  sectionIDs = [...sectionIDs];
  rowIDs = [...rowIDs];
}

export default class AppAbout extends Component  {
  constructor(props) {
    super(props);
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.state = {
      dataSource,
      isLoading: true,
      height: document.documentElement.clientHeight * 3 / 4,
    };
  }

  componentDidMount() {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
    // simulate initial Ajax
    setTimeout(() => {
      genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
        isLoading: false,
        height: hei,
      });
    }, 600);
  }

  onEndReached = (event) => {
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      genData(++pageIndex);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
        isLoading: false,
      });
    }, 1000);
  }

  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div key={rowID} style={{ padding: '0 15px' }}>
          <div style={{ display: '-webkit-box', padding: '15px 0' }}>
            <img style={{width:'80px', height: '64px', marginRight: '15px' }} src={obj.img} alt="" />
            <div style={{ lineHeight: 1 ,width:'40%'}}>
              <div style={{ marginBottom: '8px',fontSize:'18px'}}>{obj.des}</div>
              <img src="https://github.com/sihan9/img/blob/master/images/sj2.png?raw=true" alt="" style={{width:'100px'}}/>
              <p style={{marginBottom:'10px'}}>人均 ¥55 起送¥50</p>
              <p>送餐时间：10:00-20:00</p>
            </div>
            <div style={{ width:'35%'}}>
              <button style={{
                float:'right',
                width:'50px',
                height:'20px',
                background:'#bc0400',
                border:'none',
                borderRadius:'3px',
                color:'#fff',
                marginLeft:'80%'
              }}><i className="iconfont icon-xin-copy"></i>收费</button>
              <p style={{
                float:'right',
                marginTop:'50px'
              }}><i className="iconfont icon-biaodian-"></i>300m</p>
            </div>
          </div>
        </div>
      );
    };

    return (
        <div>
            <NavBar style={{background:'#bc0400'}}>
                <button className="home-button">石家庄<i className="iconfont icon-xiala"></i></button>
                <form>
                    <input type='text' className="about-input" placeholder="搜索商家、品类或商圈"/>
                </form>
            </NavBar>
            <div className='about-butdiv'>
                <button>1000m<i className="iconfont icon-sanjiao"></i></button>
                <button>全部餐厅<i className="iconfont icon-sanjiao"></i></button>
                <button>默认排序<i className="iconfont icon-sanjiao"></i></button>
            </div>
            <ListView
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                {this.state.isLoading ? 'Loading...' : 'Loaded'}
                </div>)}
                renderBodyComponent={() => <MyBody />}
                renderRow={row}
                renderSeparator={separator}
                style={{
                height: this.state.height,
                overflow: 'auto',
                }}
                pageSize={4}
                onScroll={() => { console.log('scroll'); }}
                scrollRenderAheadDistance={500}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
            />
      </div>
    );
  }
}
