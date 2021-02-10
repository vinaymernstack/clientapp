﻿import React, { Component } from 'react';
export class Footer extends Component {
    static displayName = Footer.name;

    render() {
        return (
            <section class="app-footer">
                <footer class="footer-28 py-5">
                    <div class="footer-bg-layer">
                        <div class="container py-lg-3">
                            <div class="row footer-top-28">
                                <div class="col-lg-4 footer-list-28 copy-right mb-lg-0 mb-sm-5 mt-sm-0 mt-4">
                                    <p class="copy-footer-28"> © 2020. All Rights Reserved. </p>
                                    <h7 class="mt-2">Design by <a href="">InfoLab</a></h7>

                                </div>
                                <div class="col-lg-8 row">
                                    <div class="col-sm-4 col-6 footer-list-28">
                                        <h6 class="footer-title-28">Useful links</h6>
                                        <ul>
                                            <li><a href="#categories">Health blogs</a></li>
                                            <li><a href="#advertise">Advertise with us</a></li>
                                            <li><a href="#authors">Our Authors</a></li>
                                            <li><a href="contact.html">Get in touch</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-4 col-6 footer-list-28">
                                        <h6 class="footer-title-28">Categories</h6>
                                        <ul>
                                            <li><a href="beauty.html">Sports</a></li>
                                            <li><a href="fashion.html">Welness</a></li>
                                            <li><a href="#food"> Nutrition</a></li>
                                            <li><a href="#lifestyle">Fitness</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-4 col-6 footer-list-28 mt-sm-0 mt-4">
                                        <h6 class="footer-title-28">Social Media</h6>
                                        <ul class="social-icons">
                                            <li class="facebook">
                                                <a href="#facebook"><span class="fa fa-facebook"></span> Facebook</a></li>
                                            <li class="twitter"> <a href="#twitter"><span class="fa fa-twitter"></span> Twitter</a></li>
                                            <li class="linkedin"> <a href="#linkedin"><span class="fa fa-linkedin"></span> Linkedin</a></li>
                                            <li class="dribbble"><a href="#dribbble"><span class="fa fa-dribbble"></span> Dribbble</a></li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        );
    }
}