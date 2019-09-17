import React,{Component} from 'react';
import PropTypes from 'prop-types';
import PubSub from 'pubsub-js';

export default class Search extends Component{


    search = () => {
        //从输入框中得到输入的关键字
        const searchName = this.input.value.trim();
        //判断searchName属性是否有值
        if(searchName){
            //搜索
            //发布消息（search）
            PubSub.publish('search',searchName);

        }
    };

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref={input => this.input = input}/>
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
