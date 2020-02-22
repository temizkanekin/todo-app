import React,{Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'
import MainPage from '../components/MainPage'
import TodosView from './TodosView'
class MainView extends Component {
    name = ["ekin","mert","temizkan"]
    render(){
        return (
            <MainPage header={"Main View Header"} 
            toolbar={this.name.map(item => <div className={classNames(`w-1/${this.name.length} block m-auto`)}>{item}</div>)}
            content={<TodosView/>}
            leftSideBar={this.name.map(item => <div style={{height:`${100/this.name.length}%`}} className={classNames(`w-1/${this.name.length} block m-auto`)}>{item}</div>)}
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
    return {

    }
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(MainView)
)