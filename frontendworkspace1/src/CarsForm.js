import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class CarsForm extends React.Component {
    state = {
        filledForm: false
    }
    onFilledForm = () => {
        this.setState({
            filledForm: !this.state.filledForm
        })
    }
    render() {
        // style={{ textAlign: "center" }}
        return(
            this.state.filledForm ? <div className="div-rsv">Thank your for your reservation</div> :
            <div className="div-frm">
                <h1>{this.props.clickedCar.year} {this.props.clickedCar.make} {this.props.clickedCar.model}</h1>
                <div className="s-frm">
                    {/* <ButtonToolbar>
                        <Button variant="primary" style={{textAlign: "center"}} onClick={this.onFilledForm}>Submit</Button>
                    </ButtonToolbar> */}
                    <button className="frm-sbm" onClick={this.onFilledForm}>Submit</button>
                </div>
            </div>
        )
    }
}

export default withRouter(CarsForm)
