import React from 'react'
import './App.css';
import Footer from "./Components/Footer";
import BlogCard from "./Components/BlogCard";
import Navbar from './Components/Navbar';

function Blog() {
    return (
        <>
            <section id="blogPageTop">
                <div className="container">
                    <br/>
                    <div id="blogHeadDiv" style={{padding: '20px 30px 30px 30px'}}>
                        <Navbar/>
                        <div id="space"></div>

                        <div id="blogHeading" className="row">
                            <h1>BLOG</h1>
                        </div>

                        <br/>
                        <div id="blogheadDiv2" className="row">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ratione vitae nulla facere ex culpa deserunt accusamus dolor facilis quo! Modi laborum incidunt corporis adipisci nostrum aut sapiente magnam magni facere, sed voluptatem a vitae minus temporibus facilis. Numquam, dolorum excepturi! Dolor, eius vero! Praesentium pariatur expedita culpa accusamus, aliquam cumque atque natus repellendus delectus provident repellat ratione rerum nam. Culpa qui ut laboriosam?</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, praesentium sit adipisci blanditiis, ab repellendus quibusdam voluptates odit aut maiores a cum deserunt assumenda ipsam ullam quas quis vitae tenetur, quam qui. Repellat, dignissimos? Ducimus dolores natus sed architecto rem obcaecati vel beatae laboriosam. Itaque officia porro voluptatibus distinctio sit quod! Repellat, nesciunt omnis quisquam dolores nam cupiditate qui enim? Optio, a sit! Doloribus!</p>
                        </div>
                        <br/>
                        <div id="getStartBtn">
                            <a href="#blogCardSec">READ BLOGS</a>
                        </div>
                    </div>
                </div>      
            </section> 

            <section id="blogCardSec">
                <div className ="container">
                    <div className='row'>
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <BlogCard blogheading="MACHINE LEARNING" blogimage blogdescription="Machine Learning is a subset of Artificial Intelligence (AI)." />
                            <BlogCard blogheading="ARTIFICIAL INTELLIGENCE" blogimage blogdescription="Machine Learning is a subset of Artificial Intelligence (AI)." />
                            <BlogCard blogheading="BIG DATA" blogimage blogdescription="Machine Learning is a subset of Artificial Intelligence (AI)." />
                            <BlogCard blogheading="CLOUD COMPUTING" blogimage blogdescription="Machine Learning is a subset of Artificial Intelligence (AI)." />
                            <BlogCard blogheading="CYBER SECURITY" blogimage blogdescription="Machine Learning is a subset of Artificial Intelligence (AI)." />
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12" style={{padding: '0 30px 0 30px'}}>
                            <div id="space"></div>
                            <div><h6 style={{fontWeight: '700', color: 'lightgray', fontSize: '15px'}}>BLOGS ARE WRITTEN IN THESE DOMAINS</h6></div>
                            <div>
                                <div className="row" style={{fontSize: '12px', color: 'lightgray', textAlign: 'center'}}>
                                    <div style={{ width:'30%', backgroundColor:'#041228', borderRadius: '3px', margin: '5px', paddingTop: '4px', paddingBottom: '4px'}}>C++</div>
                                    <div style={{ width:'30%', backgroundColor:'#041228', borderRadius: '3px', margin: '5px', paddingTop: '4px', paddingBottom: '4px'}}>Java</div>
                                    <div style={{ width:'25%', backgroundColor:'#041228', borderRadius: '3px', margin: '5px', paddingTop: '4px', paddingBottom: '4px'}}>C</div>
                                    <div style={{ width:'40%', backgroundColor:'#041228', borderRadius: '3px', margin: '5px', paddingTop: '4px', paddingBottom: '4px'}}>Python</div>
                                    <div style={{ width:'53%', backgroundColor:'#041228', borderRadius: '3px', margin: '5px', paddingTop: '4px', paddingBottom: '4px'}}>Machine Learning</div>
                                    <div style={{ width:'50%', backgroundColor:'#041228', borderRadius: '3px', margin: '5px', paddingTop: '4px', paddingBottom: '4px'}}>Deep Learning</div>
                                    <div style={{ width:'40%', backgroundColor:'#041228', borderRadius: '3px', margin: '5px', paddingTop: '4px', paddingBottom: '4px'}}>OpenCV</div>
                                    <div style={{ width:'45%', backgroundColor:'#041228', borderRadius: '3px', margin: '5px', paddingTop: '4px', paddingBottom: '4px'}}>Cyber Security</div>
                                    <div style={{ width:'40%', backgroundColor:'#041228', borderRadius: '3px', margin: '5px', paddingTop: '4px', paddingBottom: '4px'}}>Big Data</div>
                                    <div style={{ width:'60%', backgroundColor:'#041228', borderRadius: '3px', margin: '5px', paddingTop: '4px', paddingBottom: '4px'}}>Cloud Computing</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>           
            
            <div id="space"></div>
            
            <section id="footer">
                <Footer rel="#blogPageTop"/>
            </section>
        </>
    )
}

export default Blog;