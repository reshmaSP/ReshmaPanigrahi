import img from "./images/Reshma7.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <section id="about" class="about background-alt">
      <Container data-aos="fade-up">
        <div class="section-title">
          <h2>About Me</h2>
        </div>

        <Row>
          <Col lg={4} className="d-flex justify-content-center">
            <img
              src={img}
              height="100%"
              width="50%"
              style={{ borderRadius: "50%" }}
            />
          </Col>
          <Col lg={8} pt={4} className="content">
            <br></br>
            <h3>I am a Coder..</h3>
            <br></br>
            <p style={{ color: "#728394" }}>
              Hi I am Reshma! As a fullstack web developer and a Cloud Enthusiast, I'm
              passionate about coding systems that solve diverse human problems.
              I find great excitement in leveraging algorithmic thinking to
              provide innovative solutions to everyday challenges. With
              approximately 3 years of programming experience, I have had the
              opportunity to intern at various startups and work extensively
              with server-side web technologies. Being very passionate about 
              algorithmic , I  engage in competitive coding
              competitions. Throughout my journey, I have successfully completed
              numerous personal projects and won various competitive coding contest. I am an avid participant
              in hackathons, where I have not only gained technical expertise
              but also honed my non-technical skills. This diverse range of
              experiences has equipped me with a valuable set of technical and
              non-technical abilities.
            </p>
            <p style={{ color: "#728394" }}>
              
            </p>
            <p style={{ color: "#728394" }}>
             Checkout my Leetcode Profile{" "}
              <a
                style={{ color: "" }}
                target="_blank"
                href="https://leetcode.com/RESHMA579/"
              >
                LeetCode
              </a>{" "}
             
            </p>
            <br></br>
            <Row>
              <Col lg={4}>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Phone:</strong>{" "}
                    <span>+91 8657247983</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
                    <span>Mumbai, India</span>
                  </li>
                </ul>
              </Col>
              <Col lg={7}>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Degree:</strong>{" "}
                    <span>B.Tech in Information Technology</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Email:</strong>{" "}
                    <span>
                      <a href="mailto:reshmapanigrahi7@gmail.com">
                        reshmapanigrahi7@gmail.com
                      </a>
                    </span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
