import React, {  useEffect, useState } from 'react';
import fashion1 from '../assets/images/fashion1.jpg';
import fashion2 from '../assets/images/fashion2.jpg';
import fashion3 from '../assets/images/fashion3.jpg';
import fashion4 from '../assets/images/fashion4.jpg';
import fashion5 from '../assets/images/fashion5.jpg';
import fashion6 from '../assets/images/fashion6.jpg';
import A1 from '../assets/images/a1.jpg';
import A2 from '../assets/images/a2.jpg';
import A3 from '../assets/images/a3.jpg';

const BloagPage = (props) => {

    const demo = [
        {image:fashion1,blogDetails:"An easy Guide to buying Denim & My favourite styles",profilePic:A1},
        {image:fashion2,blogDetails:"The Satin Skirt & How to Wear it all year round fashion",profilePic:A2},
        {image:fashion3,blogDetails:"What I’ll be Wearing this Party Season & the Festive edit",profilePic:A3},
        {image:fashion4,blogDetails:"What I’ll be Wearing this Party Season & the Festive edit",profilePic:A2},
        {image:fashion5,blogDetails:"What I’ll be Wearing this Party Season & the Festive edit",profilePic:A1},
        {image:fashion6,blogDetails:"What I’ll be Wearing this Party Season & the Festive edit",profilePic:A3},
    ]
    const [BlogData , setBlogData ] = useState(demo)

    let renderData = BlogData.map((res,i)=>{
  
    return <div className="col-lg-3 col-md-6 item">
    <div className="card">
        <div className="card-header p-0 position-relative">
            <a href="#blog-single.html">
                <img className="card-img-bottom d-block radius-image-full" src={res.image}
                    alt="Card image cap"></img>
            </a>
        </div>
        <div class="card-body blog-page">
                <a href="#blog-single.html" class="blog-desc">{res.blogDetails}
                </a>
                <p>Lorem ipsum dolor sit amet consectetur ipsum adipisicing elit. Quis
                    vitae sit.</p>
                <div class="author align-items-center mt-3 mb-1">
                    <img src={res.profilePic} alt="" class="img-fluid rounded-circle" />
                    <ul class="blog-meta">
                        <li>
                            <a href="author.html">Isabella ava</a> 
                        </li>
                        <li class="meta-item blog-lesson">
                            <span class="meta-value"> July 13, 2020 </span>. <span
                                class="meta-value ml-2"><span class="fa fa-clock-o"></span> 1 min</span>
                        </li>
                    </ul>
                </div>
            </div>
       
          </div>
</div>
    })

  return(
    <div class="w3l-homeblock2 py-5">
    <div class="container pt-md-4 pb-md-5">
      
        <h3 class="category-title mb-3"> Fashion and Style</h3>
        <p class="mb-sm-5 mb-4 max-width">Lorem ipsum dolor sit amet elit. Id quaerat amet ipsum sunt et quos dolorum.</p>
        <div class="row">
            {renderData}
        </div>
        <ul class="site-pagination text-center mt-md-5 mt-4">
            <li><span aria-current="page" class="page-numbers current">1</span></li>
            <li><a class="page-numbers" href="#page2">2</a></li>
            <li><a class="page-numbers" href="#page3">3</a></li>
            <li><span class="page-numbers dots">…</span></li>
            <li><a class="page-numbers" href="#page7">7</a></li>
            <li><a class="next page-numbers" href="#next">Next »</a></li>
        </ul>
    </div>
</div>
   )

 }

export default BloagPage