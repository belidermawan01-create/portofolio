import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, Button, Badge, Nav, NavItem, NavLink } from "reactstrap";
import "./Projects.css";
import alkautsar from '../../assets/alkautsar.png';
import petikBlog from '../../assets/petik_blog.png';
import dasbord from '../../assets/dasbord.png';
import Portofolio from '../../assets/portofolio.png';

const projectsData = [
  {
    title: "Pesantren AL Kautsar",
    desc: "Platform informasi resmi Pesantren Al-Kautsar yang menyajikan profil lembaga, program pendidikan unggulan, kurikulum santri, serta berita kegiatan terbaru untuk membangun generasi yang berakhlak mulia",
    tech: ["JS", "MySQL", "NodeJs", "Express", "ReactJS"],
    category: "News",
    image: alkautsar 
  },
  {
    title: "PeTIK Blog",
    desc: "Website untuk menampilkan sekilas profil tentang Petik dan ada berita terbaru yang menggunakan API Public",
    tech: ["ReactJs", "CSS", "JavaScript","RestAPI"],
    category: "Company Profile",
    image: petikBlog
  },
  {
    title: "Portofolio",
    desc: "Website portofolio interaktif yang menampilkan profil, skill, serta berbagai project yang telah saya kerjakan, dirancang dengan tampilan modern, responsif, dan user-friendly.",
    tech: ["HTML", "FetchAPI", "JavaScript"],
    category: "Company",
    image: Portofolio,
  },
  {
    title: "Dasboard",
    desc: "Untuk mengelola data-data, dan bisa menambahkan dan menghapus data cocok banget buat data-data sederhana",
    tech: ["HTML", "JavaScript", "CSS"],
    category: "E-Report",
    image: dasbord
  },
  {
    title: "Ferrari Company Profile",
    desc: "Website resmi perusahaan Ferrari dengan informasi tentang sejarah, produk, layanan, dan galeri kendaraan premium.",
    tech: ["HTML", "Tailwind", "Bootstrap"],
    category: "Company",
    image: "https://via.placeholder.com/400x250"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("Semua");

  const filteredProjects = filter === "Semua" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  const categories = ["Semua", "News", "E-Report", "Company"];

  return (
    <section className="projects-wrapper">
      <Container>
        <div className="filter-container mb-5">
          <Nav pills className="justify-content-center gap-2">
            {categories.map((cat) => (
              <NavItem key={cat}>
                <NavLink
                  className={filter === cat ? "active-filter" : "filter-link"}
                  onClick={() => setFilter(cat)}
                  style={{ cursor: 'pointer' }}
                >
                  {cat}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </div>

        <Row>
          {filteredProjects.map((project, index) => (
            <Col lg="4" md="6" className="mb-4" key={index}>
              <Card className="project-card h-100 border-0 shadow-sm">
                <div className="project-img-container">
                    <img src={project.image} alt={project.title} className="project-img" />
                    <div className="category-tag">{project.category}</div>
                </div>
                
                <CardBody>
                  <div className="project-tech-top">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-text">{tech}</span>
                    ))}
                  </div>

                  <h5 className="project-title">{project.title}</h5>
                  <p className="project-desc text-muted">{project.desc}</p>

                  <div className="mt-4">
                    <a href="#" className="link-detail">
                      Lihat Detail →<i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;