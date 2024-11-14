import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";


function JobOpenings() {

  const jobs = [
    {
      title: "Cluster Head",
      description: {
        summary: "The candidate will be responsible for the installation and after-sales support of all residential projects in the assigned cluster of cities.",
        baseLocation: "Hyderabad",
        reportsTo: "I&C Head",
        travel: "Significant, Required within assigned Cluster of cities",
        responsibilities: [
          "Oversee day-to-day operations, ensuring timely execution of rooftop solar projects meeting highest quality standards.",
          "Take ownership of projects after material dispatch, oversee installation and provide after-sales support.",
          "Ensure optimal utilization of site engineers and monitor productivity.",
          "Resolve O&M tickets in the AOR.",
          "Collaborate with stakeholders for project completion.",
          "Ensure all compliances like net-meter documentation are met within stipulated time."
        ],
        requirements: [
          "BTech (Electrical/Electronics/Mechanical) with 4-6 years of experience in executing Engineering Projects.",
          "Proficient in English & Hindi; knowledge of the local language is preferable.",
          "Detail-oriented with the ability to motivate and manage a team of 5-10 site engineers and vendors.",
          "Proficient in MS Office and Project Management.",
          "Track record of meeting deadlines and leading a performance-based organization."
        ]
      }
    },
    {
      title: "I & C Contractor (Fresher)",
      description: {
        summary: "Role suitable for freshers, focusing on installation and commissioning support.",
        baseLocation: "Mumbai",
        reportsTo: "Project Manager",
        travel: "Moderate, within assigned area",
        responsibilities: [
          "Assist in rooftop solar installations.",
          "Provide on-site support and troubleshooting.",
          "Collaborate with senior engineers and contractors for project completion."
        ],
        requirements: [
          "Diploma or ITI in Electrical or Mechanical Engineering.",
          "Willingness to learn and work in field environments.",
          "Basic knowledge of solar installations is a plus."
        ]
      }
    },
    // Add more jobs as needed
  ];
  const [selectedJob, setSelectedJob] = useState(jobs[0]);


  return (
    <div className="our-openings">
      <h3>Current Openings</h3>
      <div className="openings">
        <Container>
          <Row>
            <Col md={4}>
              <div className="opening-list">
                {jobs.map((job, index) => (
                  <h4
                    key={index}
                    onClick={() => setSelectedJob(job)}
                    className={selectedJob === job ? 'job-title active' : 'job-title'}
                    style={{ cursor: "pointer" }}
                  >
                    {job.title}
                  </h4>
                ))}
              </div>
            </Col>
            <Col md={8}>
              {selectedJob && (
                <div className="job-details">
                <h3>{selectedJob.title}</h3>
                  <p>{selectedJob.description.summary}</p>
                  <div>
                    <p><strong>Base Location:</strong> {selectedJob.description.baseLocation}</p>
                    <p><strong>Reports to:</strong> {selectedJob.description.reportsTo}</p>
                    <p><strong>Travel:</strong> {selectedJob.description.travel}</p>
                  </div>
                  <div>
                    <h4>Roles and Responsibilities:</h4>
                    <ul>
                      {selectedJob.description.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Mandatory Requirements:</h4>
                    <ul>
                      {selectedJob.description.requirements.map((requirement, idx) => (
                        <li key={idx}>{requirement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default JobOpenings;
