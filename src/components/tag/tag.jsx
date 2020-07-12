import React from "react";
import "./tag.css";

export default class Tag extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick (e) {
        this.props.onClick(e);
    };

    render() {
        const {cls, clsTitle, clsRemover, clsIndex, indexVal, ...addProps} = this.props;
        return (
            <div className={'tag ' + cls} {...addProps}>
                <span className={'title ' + clsTitle}>{this.props.children}</span>
                <span className={'index ' + clsIndex}>{this.props.indexVal}</span>
                <span className={'remover ' + clsRemover} onClick={this.onClick}>&times;</span>
            </div>
        )
    }
}

Tag.defaultProps = {
    cls: "",
    clsTitle: "",
    clsIndex: "",
    indexVal: "",
    clsRemover: "",
    onClick: () => {}
};