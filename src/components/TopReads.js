import React, { useState } from 'react';


export function TopReads () {


    const demo = [
        {blogDetails:"New Hair Styles can look fabulous and shiny click here more to read"},
        {blogDetails:"New Hair Styles can look fabulous and shiny click here more to read"},
        {blogDetails:"New Hair Styles can look fabulous and shiny click here more to read"},
        {blogDetails:"New Hair Styles can look fabulous and shiny click here more to read"},
    ]
    const [OurVoicesData , setOurVoicesData ] = useState(demo)


    let renderData = OurVoicesData.map((res,i)=>{
        return<>
            <div className="text-justify">
                <a href="#blog-single.html" class="blog-desc1"> {res.blogDetails} </a>
            </div>
            <hr></hr>
        </>
 
  
    })

        return ( 
            <div class="w3l-homeblock2 w3l-homeblock5">
                <div class="container py-lg-3 py-md-4">
                    <div className="row">
                        <div className="col-lg-4">
                            <h3 className="section-title-left mb-2"> More Top Reads</h3>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row text-center">
                        <div className="col-lg-3">
                            <h4>Sports</h4>
                            {renderData}
                            </div>
                        <div className="col-lg-3">
                            <h4>Wellness</h4>
                            {renderData}
                             </div>
                        <div className="col-lg-3">
                            <h4>Nutrition</h4>
                            {renderData}
                        </div>
                        <div className="col-lg-3">
                            <h4>Fitness</h4>
                            {renderData}
                             </div>
                    </div>
                </div>
            </div>
            );
    }