
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'
import { Typography } from '@material-ui/core';
import { bindActionCreators } from 'redux';
class MainPage extends Component {
    render() {
        const { leftSideBar, toolbar, content, header } = this.props
        return (
            <div className="w-full h-full flex">
                <div className="w-1/5 h-full flex flex-col">
                    <div className={classNames("w-full flex", "Header")}>
                        <div className="m-auto"><Typography>{header}</Typography></div>
                    </div>
                    <div 
                        className="w-full h-full flex flex-col justify-between"
                    >
                        {leftSideBar}
                    </div>
                </div>
                <div className="w-4/5 h-full flex flex-col">
                    <div className={classNames("w-full flex", "Toolbar")}>
                        {toolbar}
                    </div>
                    <div className={classNames("w-full flex", "Content")}>
                        <div className="w-full m-auto">
                            {content}
                        </div>
                    </div>
                </div>
            </div>
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

    })
}
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(MainPage)
);