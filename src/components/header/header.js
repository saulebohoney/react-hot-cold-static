import React from 'react';

import TopNav from '../top-nav/top-nav.js';
import InfoModal from '../info-modal/info-modal.js';

import './header.css';

export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: true
    }
  }

  handleClick(){
    if(this.state.clicked){
      this.setState({
        clicked: false
      })
    }else{
      this.setState({
        clicked: true
      })
    }
  }

  render(){
    if(this.state.clicked){
      return (
          <header>
              <TopNav onClick={()=> this.handleClick()}/>
              {/* <InfoModal /> */}
              <h1>HOT or COLD</h1>
          </header>
      );
    }else{
      return (
          <header>
              <TopNav />
              <InfoModal onClick={()=> this.handleClick()}/>
              <h1>HOT or COLD</h1>
          </header>
      );
    }
  }
};
