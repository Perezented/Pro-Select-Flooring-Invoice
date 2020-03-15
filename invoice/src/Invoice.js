import React from "react";

function Invoice() {
    const day = new Date();

    const today = `${day.getMonth()}/${day.getDate()}/${day.getFullYear()}`;

    return (
        <div className="App">
            <header>
                <h1>Pro-Select Flooring LLC</h1>
                <h2>INVOICE</h2>
            </header>
            <section>
                <div className="address">
                    <address>PO Box 612</address>
                    <address>Bixby, OK 74008</address>
                    <address>(918)804-1026</address>
                </div>
                <div className="numbersDate">
                    <p>Date: {today}</p>
                    <p>Invoice: </p>
                    <p>Work Order: </p>
                </div>
            </section>
            <section className="billTo">
                <h3>Bill To:</h3>
                <p>Name:</p>
                <p>Company:</p>
                <p>Email:</p>
                <p>Phone Number:</p>
            </section>
            <section className="table">
                <div className="mainTableOutline">
                    <div className="tableHeadings">
                        <h4>Description</h4>
                        <h4>Amount</h4>
                        <h4>Total</h4>
                    </div>
                    <div className="bottomTotal">
                        <h4>Total</h4>
                    </div>
                </div>
            </section>
            <section className="thanks">
                <p>
                    Due upon receipt, please make all checks payable to
                    <span className="bold">Pro-Select Flooring</span>
                </p>
                <p>
                    If you have any questions concerning this invoice, text or
                    call Ricardo Castaneda at (918) 804-1026.
                </p>
                <p className="center">THANK YOU FOR YOUR BUSINESS!</p>
            </section>
        </div>
    );
}

export default Invoice;
