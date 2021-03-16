import React, { useEffect } from 'react';
function Payment(){

    useEffect(() => {
        const f = () => {
            var d = document;
        var x = !d.getElementById('razorpay-embed-btn-js')
        if (x) {
            var s = d.createElement('script');
            s.defer = !0;
            s.id = 'razorpay-embed-btn-js';
            s.src = 'https://cdn.razorpay.com/static/embed_btn/bundle.js';
            d.body.appendChild(s);
        } else {
            var rzp = window['_rzp_'];
            rzp && rzp.init && rzp.init()
        }
        }
        f()
    }, [])
    // (function () {
        // var d = document;
        // var x = !d.getElementById('razorpay-embed-btn-js')
        // if (x) {
        //     var s = d.createElement('script');
        //     s.defer = !0;
        //     s.id = 'razorpay-embed-btn-js';
        //     s.src = 'https://cdn.razorpay.com/static/embed_btn/bundle.js';
        //     d.body.appendChild(s);
        // } else {
        //     var rzp = window['_rzp_'];
        //     rzp && rzp.init && rzp.init()
        // }
    // })(); 

    return (
        <>
        <section id='payment'>
            <div className='container'>
                <div class="center">
                    <h1 class="section-title">Payment</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <img className="mt-4" src="./images/paytm_name.png" alt="Paytm Logo Icon" /><br/><br/>
                            <a href="https://paytm.business/link/17009/LL_312233302" className="btn btn-primary">Pay with Paytm</a>
                        </div>
                        <div className="col-md-6">
                            <img className="mt-5 mb-2" src="./images/razorpay.png" alt="Paytm Logo Icon" /><br/>
                            <div class="razorpay-embed-btn" data-url="https://pages.razorpay.com/pl_Gm41wYmbl0dI84/view"
                                data-text="Pay Now" data-color="#0046B8" data-size="large">                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Payment;