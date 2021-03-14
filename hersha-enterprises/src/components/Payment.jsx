import React from "react";
import Footer from "./Footer";

function Payment(){
    return (
        <>
        <section id='payment'>
            <div className='container'>
                <div class="center">
                    <h1 class="section-title">Payment</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <img className="mt-4" src="./images/paytm_name.png" alt="Paytm Logo Icon" /><br/><br/>
                            <a href="https://paytm.business/link/17009/LL_312233302" className="btn btn-success">Pay with Paytm</a>
                        </div>
                        <div className="col-md-6">
                        <img className="mt-5" src="./images/razorpay.png" alt="Paytm Logo Icon" /><br/><br/>
                            <a href="" className="btn btn-success">Pay with RazorPay</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <Footer />
        </>
    );
}

export default Payment;