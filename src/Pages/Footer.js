import React from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
  } from 'mdb-react-ui-kit';

function Footer() {
  return (

    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-5 border-bottom' style={{backgroundColor:'white'}}>

      </section>

      <section className='' style={{color:'light'}}>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h5 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                AH | FITNESS
              </h5>
              {/* <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p> */}
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Produktet</h6>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Bootstrap
                </a>
              </p>
            </MDBCol>

            

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Kontakti</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Prishtinë, 10000, Kosovë
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 383 44 123 123
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 383 44 123 123
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:<b>ReactBootstrap</b>
      </div>
    </MDBFooter>

  );
}

export default Footer;