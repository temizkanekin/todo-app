import React,{Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'
import MainPage from '../components/MainPage'
import TodosView from './TodosView'
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
class MainView extends Component {
    toolbarItems = ["main","example"]
    sidebarItems = ["All","Active","Completed"]
    render(){
        return (
            <MainPage header={"Main View Header"} 
            toolbar={this.toolbarItems.map(item => <Link className={classNames(`m-auto`)} to={`/${item}`}>{item}</Link>)}
            content={<TodosView/>}
            leftSideBar={this.sidebarItems.map(item => <Link to={`/${item}`} className="h-full">{item}</Link>
            )}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({

    }, dispatch)
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(MainView)
)