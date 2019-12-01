import React, { Component, Fragment } from 'react'
import { MineContainer, Headimage, Minecontent } from "./styled"
export default class Mine extends Component {
    constructor() {
        super()
        this.state = {
            navList: [
                {
                    text: "我的简历",
                    icon:"\ue737",
                    id: 1
                },
                {
                    text: "我的收藏",
                    icon:"\ue60d",
                    id: 2
                },
                {
                    text: "实名认证",
                    icon:"\ue78e",
                    id: 3
                },
                {
                    text: "我的钱包",
                    icon:"\ue664",
                    id: 4
                },
                {
                    text: "我的信用",
                    icon:"\ue62a",
                    id: 5
                },
                {
                    text: "健康证",
                    icon:"\ue737",
                    id: 6
                },
                {
                    text: "求职意向设置",
                    icon:"\ue78e",
                    id: 7
                }, {
                    text: "用户反馈",
                    icon:"\ue737",
                    id: 8
                }
            ]
        }

    }
    render() {

        let {navList} = this.state;
        return (
            <Fragment>
                <MineContainer>
                    <div className="header">
                        <span></span>
                        <span>个人中心</span>
                        <span className="iconfont icon-faxian"></span>
                    </div>

                </MineContainer>
                <Headimage>
                    <div className="imgbox">
                        <div><i className="iconfont icon-wode"></i></div>
                        <div>
                            <p>独立日</p>
                            <button>未认证</button>
                        </div>
                    </div>
                    <span className="r">&gt;</span>
                </Headimage>
                <Minecontent>
                    <ul>
                        {
                            navList.map((item, index) => (
                            <li key={index} onClick={this.handleSwitchFunction.bind(this,item)}><i className="iconfont">{item.icon}</i><span>{item.text}</span></li>
                            ))
                        }
                    </ul>

                </Minecontent>
            </Fragment>

        )
    }
    handleSwitchFunction(){
        console.log("Toggle");
    }
}
