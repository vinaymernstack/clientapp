import React, {  useEffect, useState } from 'react';
import fashion1 from '../assets/images/fashion1.jpg';
import fashion2 from '../assets/images/fashion2.jpg';
import fashion3 from '../assets/images/fashion3.jpg';
import fashion4 from '../assets/images/fashion4.jpg';
import fashion5 from '../assets/images/fashion5.jpg';
import fashion6 from '../assets/images/fashion6.jpg';

export function EditorPick (){
    
    const demo = [
        {image:fashion1,blogDetails:"An easy Guide to buying Denim & My favourite styles"},
        {image:fashion2,blogDetails:"The Satin Skirt & How to Wear it all year round fashion"},
        {image:fashion3,blogDetails:"What I’ll be Wearing this Party Season & the Festive edit"},
        {image:fashion4,blogDetails:"What I’ll be Wearing this Party Season & the Festive edit"},
    ]
    const [EditpickData , setEditpickData ] = useState(demo)


    let renderData = EditpickData.map((res,i)=>{
        return <div className="col-lg-3 col-md-6 item">
        <div className="card">
            <div className="card-header p-0 position-relative">
                <a href="#blog-single.html">
                    <img className="card-img-bottom d-block radius-image-full" src={res.image}
                        alt="Card image cap"></img>
                </a>
            </div>
            <div className="card-body blog-page">
                <a href="#blog-single.html" className="blog-desc">
                {res.blogDetails}
                </a>
            </div>
        </div>
    </div>
  
    })
 
        return (
            <div className="w3l-homeblock2">
                <div className="container py-lg-2 py-md-4">
                    <div className="left-right">
                        <h3 className="section-title-left mb-2"> Editor's Pick This Week</h3>
                        <a href="fashiom.html" className="more btn btn-small mb-sm-0 mb-4">View more</a>
                    </div>
                    <hr></hr>
                    <div className="row">
                       
                       {renderData}
                    
                    </div>
                </div>
            </div>
        );
    }
