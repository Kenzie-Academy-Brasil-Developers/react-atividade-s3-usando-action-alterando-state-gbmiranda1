import {Route, Switch} from "react-router-dom"
import Inicial from "../Pages/inicial"

function Routes(){
    return(
        <Switch>
            <Route exact path={"/"}>
                <Inicial></Inicial>
            </Route>
        </Switch>
    )
}

export default Routes