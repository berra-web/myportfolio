import React from 'react'
import {Col, Row } from 'react-bootstrap';
import './About.css';
import Pic from '../../assets/carousal/AB.jpg';
import Footer from '../../components/Footer/Footer';
import FooterBottom from '../../components/Footer/FooterBottom';
export default function About() {
    return (
        <div className='aboutContainer'>
            <div className='about-row'>
                <Row>
                    <div className="snip0016">
	                    <img className='sinp-img' src={Pic} alt="sample41"/>
	                    <div className="snip0017">
	                    	<h2>I am <span>Behrad</span></h2>
	                    	<p>professional web developer with long time experience in this field​</p>
	                    </div>			
                    </div>
                </Row>  
                <Row>
                    <Col className='about-col'>
                      <h1 className="about-h1">About Me</h1>
                      <div className="Border"></div>
                      <p className="about-p">
                      My name is <strong>Behrad</strong> I am a <strong>full stack developer</strong> with long time experience in this field​, who works with both the front and back ends of a website or application—meaning i can tackle projects that involve databases, building user-facing websites, or even work with clients during the planning phase of projects.
                      </p>
                    </Col>
                </Row>  
            </div>
            <Footer/>
            <FooterBottom/>
        </div>
    )
}


