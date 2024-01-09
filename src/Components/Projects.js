import Chip from "@material-ui/core/Chip";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";
import CodeIcon from "@material-ui/icons/Code";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";

const Projects = () => {
  const items = [
    {
      cardTitle: "CampusCalm Coach : Balancing your Mental Health,Paving your Career Path",
      cardDetailedText: [
        "Developed a full-stack mental health assessment website using React, Flask (Python), Docker, and MySQL.",
"Implemented GAD7, PHQ9, and SRQ-9 assessments to evaluate users' mental health.",
"Integrated web scraped data from various sources to enhance the assessment process.",
"Utilized Haar Cascades for image processing and CNN for emotion detection and machine learning classifiers to provide personalized career guidance.",
"Leveraged OpenAI's LLM for a unique and tailored user experience.",
"Designed a responsive and user-friendly frontend with React, featuring interactive forms and personalized dashboards.",
"Dockerized the Flask application for easy deployment and scalability.",
      ].map(function (text) {
      return <li>{text}</li>;
    }),
  technologies: ["React", "Python", "Flask", "Haar Cascade","CNN", "Machine Learning"],
    links: [
      {
        url: "https://github.com/reshmaSP/CampusCalm-Coach",
        text: "View Source Code",
      },
    ],
    },
{
  cardTitle: "IConnect :A Remote Assistance",
    cardDetailedText: [
      "Designed and implemented an integrated interface to facilitate seamless peer interactions, where users can message and video call.",
"Developed a server infrastructure supporting real-time communication, enabling messaging and video calls.",
"Thoroughly explored client-server connections and websockets for enhanced functionality.",
    ].map(function (text) {
      return <li>{text}</li>;
    }),
      technologies: ["ReactJS","NodeJS","ExpressJS","Web Sockets","FireBase"],
        links: [
       
          {
            url: "https://github.com/reshmaSP/I-Connect-A-virtual-Interview-Assistant",
            text: "View Source Code",
          },
        ],
    },
{
  cardTitle: "TRAVIA – A Website for Travellers",
    cardDetailedText: [
      "Designed and developed a computerized system to record and maintain tours and travel",
      "Implemented a system where the user can view packages, book packages, view weather before booking packages ,option to increase count of members .",
      "Implemented various API’S such as Weather Api .Google sign for authorization ,Payment Gateway (Razorpay API)"
     
    ].map(function (text) {
      return <li>{text}</li>;
    }),
      technologies: ["HTML","CSS","Javascript","MongoDB", "ExpressJS", ,"NodeJS"],
        links: [
         
          {
            url: "https://github.com/reshmaSP/TraviaProject",
            text: "View Source Code",
          },
        ],
    },

   ];

const [limit, setLimit] = useState(3);
const [loadButton, setLoadButton] = useState(true);
const [lessButton, setLessButton] = useState(false);

const loadMore = () => {
  setLimit(6);
  setLoadButton(false);
  setLessButton(true);
};

const loadLess = () => {
  setLimit(3);
  setLoadButton(true);
  setLessButton(false);
};

const addButton = () => (
  <Fab color="primary blue" aria-label="add">
    <AddIcon />
  </Fab>
);

return (
  <section id="projects" class="about background-alt">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Projects</h2>
      </div>
      <div class="row">
        <div class="col-lg-12 d-flex justify-content-center">
          <VerticalTimeline className="custom-line">
            {items.slice(0, limit).map((data, i) => (
              <VerticalTimelineElement
                key={i}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#343a40" }}
                dateClassName="timeline-date"
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                icon={<CodeIcon />}
                iconStyle={{
                  background: "#0563bb",
                  color: "#fff",
                }}
              >
                <div className="projects-technologies">
                  {data.technologies.map((name, i) => (
                    <Chip key={i} label={name}></Chip>
                  ))}
                </div>
                <h3
                  className="vertical-timeline-element-title"
                  style={{
                    fontSize: "12",
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  {data.cardTitle}
                </h3>
                <p
                  style={{
                    fontSize: "1em",
                    fontWeight: "350",
                    color: "#74808a",
                  }}
                >
                  {data.cardDetailedText}
                </p>
                <div className="project-links">
                  {data.links.map((link, j) => (
                    <div>
                      <br></br>
                      <Button
                        key={j} // eslint-disable-line react/no-array-index-key
                        variant="contained"
                        color="default"
                        target="_blank"
                        href={link.url}
                      >
                        {link.text}
                      </Button>
                    </div>
                  ))}
                </div>
              </VerticalTimelineElement>
            ))}
            {loadButton && (
              <VerticalTimelineElement
                iconOnClick={loadMore}
                iconClassName="d-flex justify-content-center"
                icon={
                  <IconButton aria-label="add">
                    <AddIcon
                      style={{
                        color: "#fff",
                        marginTop: "0.1px",
                      }}
                    />
                  </IconButton>
                }
                iconStyle={{
                  background: "#0563bb",
                  color: "#fff",
                }}
              />
            )}
            {lessButton && (
              <VerticalTimelineElement
                iconOnClick={loadLess}
                iconClassName="d-flex justify-content-center"
                icon={
                  <IconButton aria-label="add">
                    <RemoveIcon
                      style={{
                        color: "#fff",
                        marginTop: "0.1px",
                      }}
                    />
                  </IconButton>
                }
                iconStyle={{
                  background: "#0563bb",
                  color: "#fff",
                }}
              />
            )}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  </section>
);
};

export default Projects;
