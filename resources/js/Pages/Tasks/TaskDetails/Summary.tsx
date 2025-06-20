import React from 'react';
import { Card, Form } from 'react-bootstrap';

const Summary = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Body>
                    <div className="text-muted">
                        <h6 className="mb-3 fw-semibold text-uppercase">Summary</h6>
                        <p>It will be as simple as occidental in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>

                        <h6 className="mb-3 fw-semibold text-uppercase">Sub-tasks</h6>
                        <ul className=" ps-3 list-unstyled vstack gap-2">
                            <li>
                                <div className="form-check">
                                    <Form.Check.Input type="checkbox" defaultValue="" id="productTask" />
                                    <Form.Check.Label htmlFor="productTask">
                                        Product Design, Figma (Software), Prototype
                                    </Form.Check.Label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <Form.Check.Input type="checkbox" defaultValue="" id="dashboardTask" defaultChecked />
                                    <Form.Check.Label htmlFor="dashboardTask">
                                        Dashboards : Ecommerce, Analytics, Project,etc.
                                    </Form.Check.Label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <Form.Check.Input type="checkbox" defaultValue="" id="calenderTask" />
                                    <Form.Check.Label htmlFor="calenderTask">
                                        Create calendar, chat and email app pages
                                    </Form.Check.Label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <Form.Check.Input type="checkbox" defaultValue="" id="authenticationTask" />
                                    <Form.Check.Label htmlFor="authenticationTask">
                                        Add authentication pages
                                    </Form.Check.Label>
                                </div>
                            </li>
                        </ul>

                        <div className="pt-3 border-top border-top-dashed mt-4">
                            <h6 className="mb-3 fw-semibold text-uppercase">Tasks Tags</h6>
                            <div className="hstack flex-wrap gap-2 fs-15">
                                <div className="badge fw-medium bg-info-subtle text-info">UI/UX</div>
                                <div className="badge fw-medium bg-info-subtle text-info">Dashboard</div>
                                <div className="badge fw-medium bg-info-subtle text-info">Design</div>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};

export default Summary;