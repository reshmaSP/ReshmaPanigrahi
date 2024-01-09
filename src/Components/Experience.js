import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";

export default function Experience() {
  const items = [
  
    {
      date: " September 2023 - October 2023 ",
      cardTitle: "AutoBuddys ",
      cardSubtitle: "SDE Intern",
      cardDetailedText: [
        "Orchestrated a seamless migration of Autobuddy's website from Heroku to AWS, resulting in a 75% reduction in operational costs.",
"Successfully hosted the Django Backend on an AWS EC2 instance, utilizing Gunicorn and Nginx server for optimal performance while deploying frontend on Vercel",
"Led the implementation of advanced security measures,establishing robust connection between the backend and frontend using Certbot with the website going live now."
        
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },

    {
      date: " August 2023 - December 2023 ",
      cardTitle: " Cloud and Information Technology Lab ",
      cardSubtitle: "Teaching Assistant and Mentor",
      cardDetailedText: [
        "Spearheaded web development initiatives, leveraging the latest tools and technologies.",
 "Mentored junior team members for their CITL project, orchestrating weekly sessions and discussions to enhance project outcomes.",
 "Pioneered project ideation, actively contributing to the selection of optimal technologies for implementation.",
        
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
        

      date: "June 2023 - July 2023",
      cardTitle: "AICAN Private Limited",
      cardSubtitle: "Full Stack Developer ",
      cardDetailedText: [
       "  Collaborated with a team of software developers to architect an efficient schema for storing and leveraging data.",
" Designed and implemented REST API, ensuring its successful development and thorough testing ,following MVC architecture",
"Implemented the storage of data collected through the MQTT protocol, and enhanced the Frontend of the website",
      
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    }

  ];

  return (
    <section id="experience" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Experience</h2>
        </div>
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.map((data, i) => {
                return (
                  <VerticalTimelineElement
                    key={i}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#343a40" }}
                    date={data.date}
                    dateClassName="timeline-date"
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    iconStyle={{
                      background: "#0563bb",
                      color: "#fff",
                    }}
                    icon={<WorkIcon />}
                  >
                    <h3
                      className="vertical-timeline-element-title"
                      style={{
                        fontSize: "14",
                        color: "rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      {data.cardTitle}
                    </h3>
                    <h4
                      className="vertical-timeline-element-subtitle"
                      style={{
                        fontSize: "1.2em",
                        fontWeight: "350",
                        color: "#7e8890",
                      }}
                    >
                      {data.cardSubtitle}
                    </h4>
                    <p
                      style={{
                        fontSize: "1em",
                        fontWeight: "350",
                        color: "#74808a",
                      }}
                    >
                      {data.cardDetailedText}
                    </p>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
}
