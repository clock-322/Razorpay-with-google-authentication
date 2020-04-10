import React,{Component} from 'react'
import Header from '../common/header'


export default class Routing extends Component{
  constructor(){
    super()
    this.state={
      email:'',
      displayName:'',
      refund_id: 0,
      lclData:[],
      payment_amount:10
    }
  }

  componentWillMount=()=>{
    this.setState({ 
    lclData:JSON.parse(localStorage.getItem('firebaseui::rememberedAccounts'))
})
}

componentDidMount=()=>{
  if(this.state.lclData!=null){
    this.setState({
        email:this.state.lclData[0].email,
        displayName:this.state.lclData[0].displayName,
    })
}  
}

  
paymentHandler=()=>{


  const { payment_amount } = this.state;
  const options = {
    key:'rzp_test_**************6e',
    amount: payment_amount * 100,
    name: 'Payments',
    description: 'Payments',
    handler(response) {
      const paymentId = response.razorpay_payment_id;
      const url ='http://localhost:3000/api/v1/rzp_capture/' + paymentId + '/' + payment_amount
      // Using my razorpay backend endpoints to capture the payment
      fetch(url, {
          method: 'get',
          headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
          }
      })
        .then(resp => resp.json())
        .then(function (data) {
            console.log('Request succeeded with JSON response', data)
            alert('Request succeeded with JSON response', data)
            this.setState({
              refund_id: response.razorpay_payment_id
            })
        })
        .catch(function (error) {
            console.log('Request failed', error)
        });
    },
    prefill: {
      name: this.state.displayName,
      email:this.state.email,
    }, 
  }
  if(this.state.lclData!=null){
    const rzp1 = new window.Razorpay(options);
    rzp1.open()
  }else{
    this.props.history.push('/login')
  }
}


    render(){
        return(
            <div>
              <Header/>
                <section>
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-sm-5">
                        <div class="thumbnail">
                          <img src="https://cdn.mobilephonesdirect.co.uk/images/handsets/480/apple/apple-iphone-x-silver.png" class="img-responsive" alt=""/>
                          <div class="caption">
                            <div class="row buttons">
                              <button class="btn  col-sm-4 col-sm-offset-2 btn-lg"><span class="glyphicon glyphicon-shopping-cart"></span>&nbsp;ADD TO CART</button>
                              <button class="btn col-sm-4 col-sm-offset-1 btn-lg" onClick={this.paymentHandler} ><i class="fa fa-bolt"></i> BUY NOW</button>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-7 desc">
                        <div>
                          <h4>Apple iPhone X (Silver 64GB)</h4>
                          <div class="row">
                              <div class="col-sm-2">
                                <span class="label label-success">4.6 <span class="glyphicon glyphicon-star"></span></span>
                              </div>
                            <div class="col-sm-5">
                                <strong>2,421 Ratings & Reviews</strong>
                            </div>
                          </div>
                        <div>
                            <h3>rs{this.state.payment_amount}</h3> 
                        </div>
                        <div>
                          <h5><span class="glyphicon glyphicon-calendar"></span> EMIs from <strong>Rs 3,070/month </strong><a href="">View Plans <i class="fa fa-chevron-right"></i></a></h5>  
                          <h5><span class="glyphicon glyphicon-tag"></span><strong> Bank Offer</strong> 5% Instant Discount on Visa Cards for First 3 Online Payments. <a href="">T&C</a></h5>
                          <h5><span class="glyphicon glyphicon-tag"></span><strong> Bank Offer</strong> Extra 5% off* with Axis Bank Buzz Credit Card. <a href="">T&C</a></h5>
                        </div>    
                          <br/> 
                        <div class="row">
                          <div class="col-sm-3">
                            <a class="btn btn-default btn-block"><i class="fa fa-apple"></i></a>
                          </div>
                          <div class="col-sm-9">
                            
                            <h5>Brand Warranty of 1 Year <a href="">Know More</a></h5>
                          </div>
                        </div>
                        <br/>
                        <br/><br/>
                          <div class="row " id="delivery-location">
                            <div class="col-xs-1">
                              <strong>Delivery</strong>
                            </div>
                            <div class=" row col-xs-4">
                              <span class="glyphicon glyphicon-map-marker col-xs-1"></span>
                              <input type="text" placeholder="110091" class="col-xs-7"/>
                              <a href=" " class="col-xs-1">Change</a>
                            </div>
                          </div>
                          <div id="delivery-time">
                              <h5>Delivery in 3-4 days | <a href="#">Free</a></h5>
                          </div>
                          <br/><br/>
                          <div id="highlights">
                            <strong class="col-xs-3">Highlights</strong> 
                              <ul class="col-xs-6">
                                <li> 64GB ROM</li>
                                <li> 5.8 inch Super Retina HD Display</li>
                                <li> 12MP + 12MP Dual Rear Camera | 7MP Front Camera</li>
                                <li> lithium-ion Battery</li>
                                <li> A11 Bionic Chip with 64-bit Architecture, Neural Engine, Embedded M11 Motion Co-processor</li>
                              </ul>
                          </div>
                        </div>
                      <br/><br/>
                    </div>
                  </div>
                </div>
              </section> 
            <br/><br/>
          </div>
        )
      }
  }
