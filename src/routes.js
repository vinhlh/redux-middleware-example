import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import AnotherPage from './components/AnotherPage'
import NewRelicPageContainer from './containers/NewRelicPageContainer'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
        <Route path="/another-page" component={AnotherPage} />
        <Route path="/new-relic" component={NewRelicPageContainer} />
    </Route>
)