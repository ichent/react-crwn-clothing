import React from 'react';
import { Switch, Route } from 'react-router-dom';

import "./App.css";

import Header from "./components/header/header.component";
import SingInAndSignUpPage from "./pages/sing-in-and-sign-up/sing-in-and-sign-up-component";
import ShopPage from "./pages/shop/shop.component";
import HomePage from './pages/homepage/homepage.component';

import {auth, createUserProfileDocument} from "../src/firebase/firebase.utils";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    });
                });
            }

            this.setState({ currentUser: userAuth });
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}></Route>
                    <Route exact path='/shop' component={ShopPage}></Route>
                    <Route exact path='/signin' component={SingInAndSignUpPage}></Route>
                </Switch>
            </div>
        )
    };
}

export default App;
