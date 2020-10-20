import React, { Component } from 'react'
import farmer from '../farmer.png'
import './App.css'
class Top extends Component {


  render() {
    // if (!this.state.loaded) {
    //   return <div>Loading Web3, accounts, and contract...</div>;
    // }
    return (
      
      <div className="App">
        <div className="Logo"></div>
        <div className="top-box-container">
          <div className="top-box balance-box">
            <img className="balance-logo-image" src={farmer}/>
            <div className="top-box-desc">Your NYAN Balance</div>
            <div className="top-box-val nyan-balance">{this.props.stakingBalance}</div>
          </div>
          
          <div className="top-box stats-box">
            <div className="stats-op">
              <div className="top-box-desc">Total Nyan Supply</div>
          
            </div>
            <div className="stats-op">
              <div className="top-box-desc">Total Nyan Staked</div>
              <div className="top-box-val">3</div>
            </div>
            <div className="stats-op">
              <div className="top-box-desc">Total Catnip Supply</div>
              <div className="top-box-val">3</div>
            </div>
          </div>
          
        </div>
        <div styles={{backgroundImage: `url(${farmer})`}} className="Nyan-cat"></div>
       


     

        <div className="address ny"><div className="addr-name">NYAN address:</div> <div className="addr-pink">0xc9ce70a381910d0a90b30d408cc9c7705ee882de</div></div>
        <div className="address ct"><div className="addr-name">CATNIP address:</div> <div className="addr-pink">0xd2b93f66fd68c5572bfb8ebf45e2bd7968b38113</div> </div>
        <div className="links-box">
          <a href="https://etherscan.io/token/0xc9ce70a381910d0a90b30d408cc9c7705ee882de">NYAN Token Etherscan</a> . <a href="https://uniswap.info/pair/0x544cd63c9a3363dab66733bf8073cb981db58cba">NYAN-ETH Uniswap</a>
        </div>
        <div className="social-box">
            <a target="_blank" href={"https://github.com/geass-zero/nyan.finance"}>
              <div className="social-icon git"></div>
            </a>
            <a target="_blank" href={"https://www.twitter.com/nyanfinance"}>
              <div className="social-icon twit"></div>
            </a> 
            <a target="_blank" href={"https://t.me/nyanfinance"}>
              <div className="social-icon tele"></div>
            </a>

        </div>
        {/* <div className="gift-icon"></div>
        <div className="gift-box">
          <textarea></textarea>
        </div> */}
      </div>
    );
  }
}

export default Top;
