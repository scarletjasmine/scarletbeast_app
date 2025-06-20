import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

//import Images
import illustrator from "../../../images/illustrator-1.png";
import { Link } from '@inertiajs/react'
const TopReferrals = () => {
    return (
        <React.Fragment>
            <Col xl={4} md={6}>
                <Card className="card-height-100">
                    <Card.Header className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Top Referrals Pages</h4>
                        <div className="flex-shrink-0">
                            <button type="button" className="btn btn-soft-primary btn-sm shadow-none">
                                Export Report
                            </button>
                        </div>
                    </Card.Header>

                    <Card.Body>

                        <Row className="align-items-center">
                            <Col xs={6}>
                                <h6 className="text-muted text-uppercase fw-semibold text-truncate fs-12 mb-3">Total Referrals Page</h6>
                                <h4 className="fs- mb-0">725,800</h4>
                                <p className="mb-0 mt-2 text-muted"><span className="badge bg-success-subtle text-success mb-0">
                                    <i className="ri-arrow-up-line align-middle"></i> 15.72 %
                                </span> vs. previous month</p>
                            </Col>
                            <Col xs={6}>
                                <div className="text-center">
                                    <img src={illustrator} className="img-fluid" alt="" />
                                </div>
                            </Col>
                        </Row>
                        <div className="mt-3 pt-2">
                            <div className="progress progress-lg rounded-pill">
                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "25%" }}></div>
                                <div className="progress-bar bg-info" role="progressbar" style={{ width: "18%" }}></div>
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "22%" }}></div>
                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: "16%" }}></div>
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: "19%" }}></div>
                            </div>
                        </div>

                        <div className="mt-3 pt-2">
                            <div className="d-flex mb-2">
                                <div className="flex-grow-1">
                                    <p className="text-truncate text-muted fs-14 mb-0"><i className="mdi mdi-circle align-middle text-primary me-2"></i>www.google.com</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <p className="mb-0">24.58%</p>
                                </div>
                            </div>
                            <div className="d-flex mb-2">
                                <div className="flex-grow-1">
                                    <p className="text-truncate text-muted fs-14 mb-0"><i className="mdi mdi-circle align-middle text-info me-2"></i>www.youtube.com</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <p className="mb-0">17.51%</p>
                                </div>
                            </div>
                            <div className="d-flex mb-2">
                                <div className="flex-grow-1">
                                    <p className="text-truncate text-muted fs-14 mb-0"><i className="mdi mdi-circle align-middle text-success me-2"></i>www.meta.com</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <p className="mb-0">23.05%</p>
                                </div>
                            </div>
                            <div className="d-flex mb-2">
                                <div className="flex-grow-1">
                                    <p className="text-truncate text-muted fs-14 mb-0"><i className="mdi mdi-circle align-middle text-warning me-2"></i>www.medium.com</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <p className="mb-0">12.22%</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="flex-grow-1">
                                    <p className="text-truncate text-muted fs-14 mb-0"><i className="mdi mdi-circle align-middle text-danger me-2"></i>Other</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <p className="mb-0">17.58%</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-2 text-center">
                            <Button variant='link' className="text-muted text-decoration-underline">Show All</Button>
                        </div>

                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default TopReferrals;