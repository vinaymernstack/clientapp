﻿import React, { Component } from 'react';
export class Subscribe extends Component {
    static displayName = Subscribe.name;

    render() {
        return (
            <div class="w3l-subscribe">
                <div class="container py-lg-2 py-md-4">
                    <div class="w3l-subscribe-content text-center bg-clr-white py-md-5 py-2">
                        <div class="py-5">
                            <h3 class="section-title-left mb-2">Subscribe to our newsletter!</h3>
                            <p class="mb-md-5 mb-4">We'll send you the best of our blog just once a month. We promise. </p>
                            <form action="#" method="GET" class="subscribe">
                                <input type="email" class="subscribe_input" name="search" placeholder="Email address" required=""></input>
                                <button class="btn btn-style btn-primary">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}