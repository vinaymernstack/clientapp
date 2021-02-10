import React, { Component } from 'react';

export class Category extends Component {
    static displayName = Category.name;

    render() {
        return (

            <section className="w3l-homeblock1 py-sm-2 py-4">
                <div className="container py-md-4">
                    <div className="grids-area-hny main-cont-wthree-fea row">
                        <div className="col-lg-3 col-6 grids-feature">
                            <a href="beauty.html">
                                <div className="area-box">
                                    <span className="fa fa-bath"></span>
                                    <h4 className="title-head">Fitness</h4>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-6 grids-feature">
                            <a href="fashion.html">
                                <div className="area-box">
                                    <span className="fa fa-female"></span>
                                    <h4 className="title-head">Sports</h4>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-6 grids-feature mt-lg-0 mt-md-4 mt-3">
                            <a href="#lifsetyle">
                                <div className="area-box">
                                    <span className="fa fa-pie-chart"></span>
                                    <h4 className="title-head">Nutrition</h4>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-6 grids-feature mt-lg-0 mt-md-4 mt-3">
                            <a href="#food">
                                <div className="area-box">
                                    <span className="fa fa-cutlery"></span>
                                    <h4 className="title-head">Food and wellness</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}
