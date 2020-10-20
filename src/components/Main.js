import React, { Component } from 'react'
import blflogo from '../blflogo.png'
import './App.css'
import farmer from '../farmer.png'
class Main extends Component {

  render() {
    return (
	
	
      <div id="content" className="mt-3">

<div className="App ">
        <div className="Logo"></div>
        <div className="top-box-container">
          <div className="top-box balance-box">
            <img className="balance-logo-image" src={blflogo}/>
            <div className="top-box-desc">Your Balance</div>
            <div className="top-box-val nyan-balance"> {window.web3.utils.fromWei(this.props.daiTokenBalance, 'Ether')} BLF </div>
          </div>
          
          <div className="top-box stats-box">
            <div className="stats-op">
              <div className="top-box-desc">Your Staking Balance</div>
              <div className="top-box-val">{window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')} BLF </div>
            </div>
            <div className="stats-op">
              <div className="top-box-desc">Your Reward Balance</div>
              <div className="top-box-val">{window.web3.utils.fromWei(this.props.dappTokenBalance, 'Ether')} BLR </div>
            </div>
            
          </div>
          
        </div>
        <div styles={{backgroundImage: `url(${farmer})`}} className="Nyan-cat"></div>
       


     

        
        {/* <div className="gift-icon"></div>
        <div className="gift-box">
          <textarea></textarea>
        </div> */}
      </div>
		 
      <div className="Logo"></div>
	
       
 
        <div className="card mb-4" >

          <div className="card-body">

            <form className="mb-3" onSubmit={(event) => {
                event.preventDefault()
                let amount
                amount = this.input.value.toString()
                amount = window.web3.utils.toWei(amount, 'Ether')
                this.props.stakeTokens(amount)
              }}>
              <div>
                <label className="float-left"><b>Stake Tokens</b></label>
                <span className="float-right text-muted">
                 Max Stake: {window.web3.utils.fromWei(this.props.daiTokenBalance, 'Ether')}
                </span>
              </div>
              <div className="input-group mb-4">
                <input
                  type="text"
                  ref={(input) => { this.input = input }}
                  className="form-control form-control-lg"
                  placeholder="1"
                  required />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <img src={blflogo} height='32' alt=""/>
                    &nbsp;&nbsp; BLF
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-outline-danger btn-lg btn-block">STAKE</button>
            
            <button
              type="submit"
              className="btn btn-outline-dark btn-block btn-sm"
			   placeholder="1"
			   
              onClick={(event) => {
                event.preventDefault()
				let amount
                amount = this.input.value.toString()
                amount = window.web3.utils.toWei(amount, 'Ether')
                this.props.unstakeTokens(amount)
              }}>
                UNSTAKE
              </button>
			  </form>
          </div>
        </div>
        <table className="table table-borderless text-muted text-center">
          <thead>

            <tr>
              <th scope="col">Total BLF Supply</th>
              <th scope="col">Total BLF Staked</th>
			       <th scope="col"> Total BLR Reward </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10000000 BLF</td>
             
			   <td>{window.web3.utils.fromWei(this.props.tokenStake, 'Ether')} BLF</td>
			      <td>{window.web3.utils.fromWei(this.props.totaltokenReward, 'Ether')} BLR</td>
			   
            </tr>
          </tbody>
        </table>
		 <div className="Logo"></div>
		  <div className="Logo"></div> 
		  <div className="Logo"></div>
		   <div className="Logo"></div>
		   
		
		
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
		<div >	
<a href="#" class="card-link">BLF etherscan addresss :</a>
<br/>

  	
<a href="#" class="card-link">BLR etherscan addresss :</a>
</div>
        </div>
		
		
      </div>
      
    );
  }
}

export default Main;
