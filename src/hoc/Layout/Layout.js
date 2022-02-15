import React, {Fragment} from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
// import classes from './Layout.module.css';

const Layout = props => {
    return (
        <Fragment>
            <Toolbar toggleDrawer={props.toggleDrawer}/>
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layout;
