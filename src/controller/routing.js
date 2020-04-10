import React,{Component} from 'react'
import {Route,BrowserRouter,Switch,} from 'react-router-dom'

const Login = React.lazy(() => import('../views/main/login'))
const Pdetail = React.lazy(() => import('../views/main/pDetail'))
const Error404 = React.lazy(() => import('../views/common/error'))

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>

class Routing extends Component{
    render(){
        return(
                <BrowserRouter>
                    <React.Suspense fallback={loading()}>
                        <Switch>
                
                            <Route exact path='/' component={Pdetail}/>
                            <Route exact path='/login' component={Login}/>
                            <Route  component={Error404}/>
                        </Switch>
                    </React.Suspense>
            </BrowserRouter>
        )
    }

}
export default Routing