import React, { Component } from 'react'
import A1 from '../../assets/images/a1.jpg';
import fashion1 from '../../assets/images/fashion1.jpg';
import { Subscribe } from '../../components/Subscribe';

class BlogDetails extends Component {
 state = {}
 render() {
  return(
   <div className="container my-5">
         <h3 className="category-title mb-3"> Blog Header</h3>
       <div className="row">
           <div className="col-md-8 col-12">
            <div className="row align-items-center justify-content-between">
            <div className="row author align-items-center ">
                    <img src={A1} alt="" className="img-fluid rounded-circle ml-4" width="50"/>
                    <ul className="blog-meta mt-3 mx-3">
                        <li>
                            <a href="author.html">Isabella ava</a> 
                        </li>
                        <li className="meta-item blog-lesson">
                            <span className="meta-value"> July 13, 2020 </span>. 
                            <span className="meta-value ml-2"><span class="fa fa-clock-o"></span> 1 min</span>
                        </li>
                    </ul>
                </div>
            <div className="">
                <button className="btn btn-warning btn-sm"><span className="fa fa-feed mx-2"></span>FEED</button>
                <button className="btn btn-primary btn-sm mx-3"> <span className="fa fa-facebook mx-2"></span>LIKE</button>
                <button className="btn btn-info btn-sm"><span className="fa fa-twitter mx-2"></span>FOLLOW</button>
            </div>

            <div className="mr-3">
            <span className="meta-value">Languages : </span>
            <select name="" id="" className="px-3">
                <option value="English">English</option>
                <option value="English">English</option>
            </select>
            </div>
            </div>
           <div className="">
               <img src={fashion1} alt=""    className="img-fluid "/>
           </div>
           
           
           <h4 className="mt-5">6 comments</h4>
   <div>
   <div className="row author align-items-center ">
        <img src={A1} alt="" className="img-fluid rounded-circle ml-3" width="50"/>
        <ul className="blog-meta mt-3 mx-3">
            <li>
                <a href="author.html">Isabella ava</a> 
            </li>
            <li className="meta-item blog-lesson">
                <span className="meta-value"> July 13, 2020 </span>. 
            </li>
        </ul>
    </div>

    <h6 >
    An easy Guide to buying Denim & My favourite styles
    </h6>

    <div className="row author align-items-center ">
                    <img src={A1} alt="" className="img-fluid rounded-circle ml-3" width="50"/>
                    <ul className="blog-meta mt-3 mx-3">
                        <li>
                            <a href="author.html">Isabella ava</a> 
                        </li>
                        <li className="meta-item blog-lesson">
                            <span className="meta-value"> July 13, 2020 </span>. 
                        </li>
                    </ul>
    </div>

    <h6>
    An easy Guide to buying Denim & My favourite styles
    </h6>
    </div>

    
    <div className="my-5">
        <span>Click here to Leave a Comment Below</span>
        <p>Leave a Replay :</p>

        <div className="row ml-1">
            <input type="text" placeholder="name" className="px-2"/>
            <input type="text" placeholder="email" className="px-2 mx-5"/>
            <input type="text" placeholder="website" className="px-2"/>
        </div>
        <input type="radio"/>
        <textarea name="" id="" className="w-100 my-3" style={{height:"150px"}}></textarea>
        <button class="btn btn-style btn-primary">SUBMIT</button>
    </div>
       
        <Subscribe/>
           </div>
           <div className="col-md-4 col-12">
               <div className=" mx-5">
            <button className="btn btn-success w-100">Subscribe</button>
            <h6 className="my-3">popular post</h6>
            <h6 className="my-3">1.  An easy Guide to buying Denim & My favourite styles</h6>
            <h6 className="my-3">2.  An easy Guide to buying Denim & My favourite styles</h6>
            </div>
            </div>
       </div>
   
  
    
   </div>




    )
   }
 }


export default BlogDetails