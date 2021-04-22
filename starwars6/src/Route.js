import {Switch, Route} from 'react-router-dom';
import Homepage from './Home';
import Nextpage from './Nextpage';

const Route = () => {
    return(
        <Switch>
            <Route exact path = {"/"} component= {Homepage}/>
            <Route path = {"/:id"} component = {Nextpage}/>
        </Switch>
    )
}

export default Route;