import React, { useState } from 'react';
import ad from '../assets/images/ad.jpg';


export function OurVoices () {

    const image = "http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg"
    const demo = [
        {image:image,blogDetails:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",name:"John Doe",profileName:"@johndoedesigner"},
        {image:image,blogDetails:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",name:"John Doe",profileName:"@johndoedesigner"},
        {image:image,blogDetails:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",name:"John Doe",profileName:"@johndoedesigner"},
        {image:image,blogDetails:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",name:"John Doe",profileName:"@johndoedesigner"},
    ]
    const [OurVoicesData , setOurVoicesData ] = useState(demo)


    let renderData = OurVoicesData.map((res,i)=>{
        return<div class="profile-card-4 text-center">
        <img src={res.image} class="img img-responsive" />
        <div class="profile-content">
            <div class="profile-name">{res.name}
                <p >{res.profileName}</p>
            </div>
            <div class="profile-description">{res.blogDetails}</div>
        </div>
    </div>
 
  
    })

        return (
            <div class="w3l-homeblock2 w3l-homeblock5">
                <div class="container py-lg-3 py-md-4">
                    <div className="row">
                        <div className="col-lg-4 mt-lg-4 mt-4">
                            <h3 className="section-title-left mb-2"> Infobuddy Voices</h3>
                        </div>
                        <div className="col-lg-8">
                            <div class="left-right bg-clr-white p-3">
                                <h3 class="section-title-left align-self pl-2 mb-sm-0 mb-3">Advertise with us </h3>
                                <a class="btn btn-style btn-primary" href="#url">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                       {renderData}
                    </div>
                </div>
            </div>
            );
    }
