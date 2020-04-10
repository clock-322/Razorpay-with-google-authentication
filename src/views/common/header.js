import React,{Component} from 'react'
import {NavLink,Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom'
class Header extends Component{
    constructor(){
        super()
        this.state={
            lclData:[],
            email:'',
            displayName:'',
            photoURL:'',
        }
    }

logout=()=>{
    localStorage.clear()
    indexedDB.deleteDatabase("firebaseLocalStorageDb")
  /*   this.props.history.push('/') */
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
        photoURL:this.state.lclData[0].photoUrl
    })
}  
}

    render(){
        if(this.state.lclData!=null){
        return(
            <div className='nav_routing'>
                
                <div class="wrapper">
                    <div class="container-fluid top_block">
                        <div class="row">
                            <div class="container">
                                <div class="phone_no">test@test.com  |  <strong>1800 121 7666</strong></div>
                                <ul class="social_top">
                                    <li ><Link to= "/login">{this.state.displayName}</Link></li>
                                    <li onClick={this.logout}><Link to= "/">Sign Out</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <div class="container-fluid logo_block">
                    <div class="row">
                        <div class="container">
                            <div class="logo"><NavLink exact  to='/'><img src="images/testlogo.png"  alt=""/></NavLink></div>
                            <a href="javascript:void();" class="mobile_menu">Menu</a>
                                <div class="navigation">
                                    <ul>
                                        <li><NavLink exact  to='/'>Home</NavLink></li>
                                        <li><NavLink to='/'>who we are</NavLink></li>
                                        <li><NavLink to='/'>Products</NavLink></li>
                                        <li><NavLink to='/'>Enquire now</NavLink></li>
                                        <li><NavLink to='/'>Contact us</NavLink></li>
                                    </ul>
                                </div> 
                        </div>
                    </div>
                </div>
        </div>
    </div>
            )
        }else{
            return(
                <div className='nav_routing'>
                    
                    <div class="wrapper">
                        <div class="container-fluid top_block">
                            <div class="row">
                                <div class="container">
                                    <div class="phone_no">make@test.com |  <strong>1800 121 7666</strong></div>
                                    <ul class="social_top">
                                        <li ><Link to= "/login">  Sign up/Sign in </Link></li>
                                        <li onClick={this.logout}><Link to= "/">Sign Out</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    <div class="container-fluid logo_block">
                        <div class="row">
                            <div class="container">
                                <div class="logo"><NavLink exact  to='/'><img src="images/logman.png"  alt=""/></NavLink></div>
                                <a href="javascript:void();" class="mobile_menu">Menu</a>
                                    <div class="navigation">
                                        <ul>
                                            <li><NavLink exact  to='/'>Home</NavLink></li>
                                            <li><NavLink to='/'>who we are</NavLink></li>
                                            <li><NavLink to='/'>Products</NavLink></li>
                                            <li><NavLink to='/'>Enquire now</NavLink></li>
                                            <li><NavLink to='/'>Contact us</NavLink></li>
                                        </ul>
                                    </div> 
                            </div>
                        </div>
                    </div>
            </div>
        </div>
            )
        }
    }
}
export default Header