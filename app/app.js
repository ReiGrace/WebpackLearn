import { HashRouter, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import React from 'react';

const PrimaryLayout = () => (
    <div className="primary-layout">
        <header>
            Our React Router 4 App
            <Route path="/users/add" component={UsersMenu} />
        </header>
        <main>
            <Route path="/" exact component={HomePage} />
            <Route path="/users" component={UsersPage} />
            <Route path="/users/delete/" component={UsersDeletePage} />
            <Route path="/users/add/info" component={UsersAddInfoPage} />
            {/* <Switch>
                <Route path="/" exact exact component={HomePage} />
                <Route path="/users/add" exact component={UserAddPage} />
                <Route path="/users" component={UsersPage} />
                <Redirect to="/" />
            </Switch> */}
        </main>
    </div>
)

const HomePage = () => <div>Home Page</div>
const UsersPage = () => <div>Users Page</div>
const UsersMenu = () => <div>Users Menu Page</div>
const UserAddPage = () => <div>User Add Page</div>
const UsersDeletePage = () => <div>Users Delete Page</div>
const UsersAddInfoPage = () => <div>Users Add Info Page</div>

const App = () => (
    <HashRouter>
        <PrimaryLayout />
    </HashRouter>
)

export default App;