import React from "react";
import "../src/css/invoice.css";
function Invoice() {
    const day = new Date();

    const today = `${day.getMonth()}/${day.getDate()}/${day.getFullYear()}`;

    return (
        <div className="invoice">
            <header>
                <h1>Pro-Select Flooring LLC</h1>
                <h1 className="grey">INVOICE</h1>
            </header>
            <section className="topSection">
                <div className="address">
                    <p>Ricardo Castaneda</p>
                    <address>PO Box 612</address>
                    <address>Bixby, OK 74008</address>
                    <address>(918)804-1026</address>
                </div>
                <div className="numbersDate">
                    <h5>Date:</h5>
                    <p>{today}</p>
                    <h5>Invoice:</h5>
                    <p>Invoice </p>
                    <h5>Work Order:</h5>
                    <p>Work Order</p>
                </div>
            </section>
            <section className="billTo">
                <h3>Bill To:</h3>
                <h3> </h3>
                <div>
                    <h5>Name:</h5>
                    <p>Name</p>
                    <h5>Company:</h5>
                    <p>Comapany</p>
                    <h5>Email:</h5>
                    <p>Email</p>
                    <h5>Phone Number:</h5>
                    <p>Phone Number</p>
                </div>
            </section>
            <section className="table">
                <div className="mainTableOutline">
                    <div className="tableHeadings">
                        <h4>Description</h4>
                        <h4>Amount</h4>
                        <h4>Total</h4>
                    </div>
                </div>
            </section>
            <div className="bottomTotal">
                <h4>Total</h4>
                <p>Number Total</p>
            </div>
            <section className="thanks">
                <p>
                    Due upon receipt, please make all checks payable to
                    <span className="bold"> Pro-Select Flooring</span>
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
