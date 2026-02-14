// import React from 'react'

// const Contact = () => {
//   return (
//     <div>
//       <div className='container'>
//       <h1 style={{padding: "100px"}} className='text-dark'>Sorry blom update</h1>
//       </div>
//     </div>
//   )
// }

// export default Contact

import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import { 
  Mail, Phone, MapPin, Globe, 
  Instagram, Youtube, Linkedin, Github 
} from "lucide-react"; 
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero text-center">
        <Container>
          <div className="badge-collab mb-3 text-white">
             <span>Mari Berkolaborasi</span>
          </div>
          <h1 className="hero-title">Hubungi Saya</h1>
          <p className="hero-subtitle">
            Saya selalu terbuka untuk diskusi, kolaborasi proyek, atau sekadar
            ngobrol santai tentang teknologi.
          </p>
        </Container>
      </section>

      <section className="contact-content py-5">
        <Container>
          <Row className="gy-4">
            <Col lg="5">
              <div className="info-wrapper">
                <ContactInfoCard 
                  icon={<Mail />} 
                  title="Email" 
                  detail="belidermawan01@gmail.com" 
                  linkText="Kirim Pesan →" 
                />
                <ContactInfoCard 
                  icon={<Phone />} 
                  title="Telepon / WhatsApp" 
                  detail="+62 83840254611" 
                  linkText="Chat WhatsApp →" 
                />
                <ContactInfoCard 
                  icon={<MapPin />} 
                  title="Lokasi" 
                  detail="Depok/Palembang, Indonesia" 
                  linkText="Lihat Peta →" 
                />
                <ContactInfoCard 
                  icon={<Globe />} 
                  title="Website" 
                  detail="blom-dihosting" 
                  linkText="Kunjungi Website →" 
                />
              </div>
            </Col>

            <Col lg="7">
              <Card className="form-card border-0 shadow-sm">
                <CardBody className="p-4">
                  <h4 className="mb-4 fw-bold">Kirim Pesan</h4>
                  <p className="text-muted mb-4">Isi form di bawah ini, saya akan merespon secepatnya!</p>
                  <Form>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label>Nama Lengkap</Label>
                          <Input placeholder="Masukkan nama Anda" className="custom-input" />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label>Email</Label>
                          <Input type="email" placeholder="Masukkan email Anda" className="custom-input" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      <Label>Subjek</Label>
                      <Input placeholder="Apa yang ingin Anda diskusikan?" className="custom-input" />
                    </FormGroup>
                    <FormGroup>
                      <Label>Pesan</Label>
                      <Input type="textarea" rows="5" placeholder="Tulis pesan Anda di sini..." className="custom-input" />
                    </FormGroup>
                    <Button style={{backgroundColor:"#da3394 "}} className="w-100 btn-send py-2">
                      Kirim Pesan <i className="ms-2 bi bi-send"></i>
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <div className="mt-5">
            <h5 className="fw-bold mb-4">Ikuti Saya</h5>
            <Row className="g-3">
               <SocialCard icon={<Instagram color="#E4405F"/>} name="Instagram" username="@bellydrmn_" />
               <SocialCard icon={<Youtube color="#FF0000"/>} name="YouTube" username="Santain aja channel" />
               <SocialCard icon={<Linkedin color="#0A66C2"/>} name="LinkedIn" username="Beli Dermawan" />
               <SocialCard icon={<Github color="#333"/>} name="GitHub" username="BangBell" />
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
};

// Sub-komponen agar kode rapi
const ContactInfoCard = ({ icon, title, detail, linkText }) => (
  <Card className="info-card mb-3 border-0 shadow-sm">
    <CardBody className="d-flex align-items-center">
      <div className="icon-box me-3">{icon}</div>
      <div>
        <small className="text-muted d-block">{title}</small>
        <span className="fw-bold d-block">{detail}</span>
        <a href="#" className="contact-link">{linkText}</a>
      </div>
    </CardBody>
  </Card>
);

const SocialCard = ({ icon, name, username }) => (
  <Col md="3" sm="6">
    <Card className="social-card border-0 shadow-sm text-center py-3">
      <CardBody>
        <div className="mb-2">{icon}</div>
        <h6 className="mb-0 fw-bold">{name}</h6>
        <small className="text-muted">{username}</small>
      </CardBody>
    </Card>
  </Col>
);

export default Contact;