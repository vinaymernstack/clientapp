import React, { useState } from 'react';
import ad from '../assets/images/ad.jpg';
import { SponsoredAd } from './SponsoredAd'

import beauty1 from '../assets/images/beauty1.jpg';
import beauty2 from '../assets/images/beauty2.jpg';
import beauty3 from '../assets/images/beauty3.jpg';
import beauty4 from '../assets/images/beauty4.jpg';
import beauty5 from '../assets/images/beauty5.jpg';
import beauty6 from '../assets/images/beauty6.jpg';

export function LatestStories () {

    const demo = [
        {image:beauty1,blogDetails:"Natural Spa - Where you feel unique and special"},
        {image:beauty2,blogDetails:"How to get Beautiful coloring Highlights this weak"},
        {image:beauty3,blogDetails:"New Hair Styles can look fabulous and shiny"},
        {image:beauty4,blogDetails:"New Hair Styles can look fabulous and shiny"},
        {image:beauty5,blogDetails:"New Hair Styles can look fabulous and shiny"},
        {image:beauty6,blogDetails:"New Hair Styles can look fabulous and shiny"},
    ]
    const [latestStroriesData , setlatestStroriesData ] = useState(demo)


    let renderData = latestStroriesData.map((res,i)=>{
        return <div class="col-lg-4">
        <div class="bg-clr-white hover-box">
            <div class="row">
                <div class="col-sm-5 position-relative">
                    <a href="#blog-single.html" class="image-mobile">
                        <img class="card-img-bottom d-block radius-image-full" src={res.image}
                            alt="Card image cap"></img>
                    </a>
                </div>
                <div class="col-sm-7 card-body blog-page align-self">
                    <a href="#blog-single.html" class="blog-desc">
                        {res.blogDetails}
                    </a>
                    <div class="author align-items-center">
                        <img src="assets/images/a1.jpg" alt="" class="img-fluid rounded-circle" />
                        <ul class="blog-meta">
                            <li class="meta-item blog-lesson">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
 
  
    })
 
    
        return (
            <div class="w3l-homeblock2 w3l-homeblock5">
                <div class="container py-lg-1 py-md-4">
                    <div className="left-right">
                        <h3 className="section-title-left mb-2"> Latest Stories</h3>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="row">
                            {renderData}
                            </div>
                        </div>
                        <div class="col-lg-3 mt-lg-0 mt-4">
                            <SponsoredAd />
                        </div>

                    </div>
                </div>
            </div>
            );
    }
