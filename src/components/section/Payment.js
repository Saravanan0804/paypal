import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import '../css/Payment.css'

class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            env:'sandbox',
            currency:'USD',
            amount:'',
            client : {
                sandbox:    'AYQosEdhlIyCKWbFOAKkqAjkhuTWxG_7geP4853qtbKjdv2PE6bzuZNcYdxRs1hifvsAQZVXzt4awmEP',
                production: 'YOUR-PRODUCTION-APP-ID',
            }
        }
    }
    getamount(ev){
        this.setState({amount:ev.target.value});
    }

    jeetfun(err){
        console.log(err);
    }
    parthafun(suc){
        console.log(suc);
    }
    parthafun(canc){
        console.log(canc);
    }

    render() {

        return (
            <div>
                <h1>Welcome to Payment</h1>
                <p>Enter Your Total Amount : <input type="text" value={this.state.amount} onChange={this.getamount.bind(this)} /> </p>
            <div className="btn">Click To Pay : </div>  
            <div><PaypalExpressBtn env={this.state.env} client={this.state.client} currency={this.state.currency} total={this.state.amount} onError={this.jeetfun} onSuccess={this.parthafun} onCancel={this.prakashfun} /></div>
            </div>
        );
    }
}

export default Payment;