import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './item.scss';
import cat from './img/cat.png';

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false,
            hover: false
        }
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this).addEventListener('click', this.buyClickCheck);
        ReactDOM.findDOMNode(this).addEventListener('mouseenter', this.mouseEnterItemCheck);
        ReactDOM.findDOMNode(this).addEventListener('mouseleave', this.mouseLeaveItemCheck);
    }

    componentWillUnmount() {
        ReactDOM.findDOMNode(this).removeEventListener('click', this.buyClickCheck);
        ReactDOM.findDOMNode(this).removeEventListener('mouseenter', this.mouseEnterItemCheck);
        ReactDOM.findDOMNode(this).removeEventListener('mouseleave', this.mouseLeaveItemCheck);
    }

    mouseEnterItemCheck = (e) => {
        if (e.target.classList.contains('item') && !this.state.hover && this.state.selected) {
            this.setState(state => ({
                hover: true
            }));
        }
    }

    mouseLeaveItemCheck = (e) => {
        if (e.target.classList.contains('item') && this.state.hover) {
            this.setState(state => ({
                hover: false
            }));
        }
    }

    buyClickCheck = (e) => {
        if (e.target.classList.contains('buy') && !this.state.selected) {
            this.select();
        }
    }

    select = () => {
        if (!this.props.disabled) {
            this.setState(state => ({
                selected: !state.selected
            }));

            if (this.state.hover) {
                this.setState(state => ({
                    hover: false
                }));
            }
        }
    }

    render() {
        return (
            <div className={"item " + (this.props.disabled ? 'disabled' : '')}>
                <div onClick={this.select} className={(this.state.selected ? 'selected ' + (this.state.hover ? 'selected-hover' : '') : '')}>
                    <div className="item-container">
                        <h4 className={this.state.hover ? 'hide' : 'show'}>{this.props.headText}</h4>
                        <h4 className={"selected-text " + (this.state.hover ? 'show' : 'hide')}>{this.props.selectedHoverText}</h4>
                        <h1>{this.props.titleName}</h1>
                        <h2>{this.props.titleNameWith}</h2>
                        <p>{this.props.subtext1}</p>
                        <p>{this.props.subtext2}</p>
                        <p>{this.props.subtext3}</p>
                        <img src={cat}/>
                        <div className="weight">
                            <span className="count">{this.props.weightCount}</span>
                            <span className="unitMeas">{this.props.unitMeas}</span>
                        </div>
                    </div>
                </div>
                <p className={"footer-text " + (this.state.selected || this.props.disabled ? 'hide' : 'show')}>{this.props.footerText}</p>
                <p className={"footer-text footer-text-selected " + (this.state.selected ? 'show' : 'hide')}>{this.props.footerTextSelected}</p>
                <p className={"footer-text footer-text-disabled " + (this.props.disabled ? 'show' : 'hide')}>{this.props.footerTextDisabled}</p>
            </div>
        );
    }
}

export default Item;
