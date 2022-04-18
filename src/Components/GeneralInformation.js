import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';
import './style.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

function GeneralInformation(){
    return(<>
    <h1>SANJANA BAJAJ</h1>
    <h3 className='h2-color'>MERN Stack developer</h3>
    <Container>
    <Row>
    <Col xs={6} md={4}>
        <EmailOutlinedIcon/> sanjnabajaj78@gmail.com
    </Col>
    <Col xs={6} md={4}>
        <Row>
        <Col xs={6} md={1}>
       <LocationOnOutlinedIcon/>
       </Col>
       <Col xs={6} md={11}>
        Institute of Business Administration<br/> Airport road, Sukkur
        </Col>
       </Row>
    </Col>

    <Col xs={6} md={4}>
       <LocalPhoneOutlinedIcon/> 03093151677
    </Col>
    </Row>

    
    </Container>
    <hr/>
   
    </>)
}
export default GeneralInformation;