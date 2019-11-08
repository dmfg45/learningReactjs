import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from "../utils/myButton";

class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30
    }

    porcentage = () => {
        if (this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.porcentage()
        }, 40);
    }


    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={() => this.porcentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>Off</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase Tickets Before The Deadline</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cum cumque,
                                dignissimos,
                                esse explicabo fugit incidunt laboriosam magnam minima necessitatibus nostrum, odit quas
                                reiciendis repudiandae sequi sunt suscipit ut voluptas
                            </p>
                            <div>
                                <MyButton
                                    text="Purchase Tickets"
                                    bck="green"
                                    color="#ffffff"
                                    link="http://google.com"
                                />
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}

export default Discount;