import React from "react";
import { Card, Col, Table } from "react-bootstrap";
import { recentApplicants } from "../../common/data/dashboardJobs";
import { Link } from "@inertiajs/react";

const RecentApplicants = () => {
  return (
    <React.Fragment>
      <Col xxl={8}>
        <Card>
          <Card.Header className="align-items-center d-flex">
            <h4 className="card-title mb-0 flex-grow-1">Recent Applicants</h4>
            <div className="flex-shrink-0">
              <button type="button" className="btn btn-soft-info btn-sm">
                <i className="ri-file-list-3-line align-bottom"></i> Generate
                Report
              </button>
            </div>
          </Card.Header>

          <Card.Body>
            <div className="table-responsive table-card">
              <Table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                <thead className="text-muted table-light">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Candidate Name</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Rate/hr</th>
                    <th scope="col">Location</th>
                    <th scope="col">Type</th>
                    <th scope="col">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {recentApplicants.map((item, key) => (
                    <tr key={key}>
                      <td>
                        <Link href="#!" className="fw-medium link-primary">
                          {item.no}
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 me-2">
                            <img
                              src={item.img}
                              alt=""
                              className="avatar-xs rounded-circle"
                            />
                          </div>
                          <div className="flex-grow-1">{item.name}</div>
                        </div>
                      </td>
                      <td>{item.designation}</td>
                      <td>
                        <span className="text-success">{item.rate}</span>
                      </td>
                      <td>{item.city}</td>
                      <td>
                        <span className={"badge bg-" + item.typeColor+"-subtle text-"+ item.typeColor}>
                          {item.type}
                        </span>
                      </td>
                      <td>
                        <h5 className="fs-14 fw-medium mb-0">
                          {item.rate}
                          <span className="text-muted fs-11 ms-1">
                            {item.rating}
                          </span>
                        </h5>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default RecentApplicants;
