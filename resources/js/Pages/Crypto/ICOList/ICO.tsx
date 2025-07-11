import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { icoWidgetsList } from '../../../common/data';
//Import Flatepicker
import Flatpickr from "react-flatpickr";
import { Link } from '@inertiajs/react';


const ICO = () => {
    const [icoList, setIcoList] = useState<any>(icoWidgetsList);
    const type = (e: any) => { setIcoList(icoWidgetsList.filter(item => item.title === e)); };

    const rating = (e: any) => {
        let output = icoWidgetsList.filter(item => {
            let opt = item.subItem.some((
                { rating }) => rating > e);
            return opt;
        });
        setIcoList(output);
    };

    const datefilter = (e: any) => {
        const date = e.toString().split(" ");
        const joinDate = (date[2] + " " + date[1] + ", " + date[3]).toString();

        let output = icoWidgetsList.filter(item => {
            let opt = item.subItem.some((
                { date }) => date === joinDate);
            return opt;
        });
        setIcoList(output);
    };

    return (
        <React.Fragment>
            <Card>
                <Card.Body>
                    <Row className="g-3">
                        <Col xxl={4} lg={6}>
                            <div className="search-box">
                                <input type="text" className="form-control" placeholder="Search to ICOs..." />
                                <i className="ri-search-line search-icon"></i>
                            </div>
                        </Col>
                        <Col xxl={3} lg={6}>
                            <Flatpickr
                                className="form-control"
                                options={{
                                    dateFormat: "d M, Y"
                                }}
                                placeholder="Select Date"
                                onChange={(e: any) => datefilter(e)}
                            />
                        </Col>
                        <Col xxl={2} lg={6}>
                            <select className="form-control" data-choices data-choices-search-false name="choices-single-default2"
                                id="choices-single-default2" onChange={(e: any) => type(e.target.value)}>
                                <option value="Active ICOs">Active</option>
                                <option value="Ended ICOs">Ended</option>
                                <option value="Upcoming ICOs">Upcoming</option>
                                <option value="Trading ICOs">Trading</option>
                            </select>
                        </Col>
                        <Col xxl={2} lg={6}>
                            <select className="form-control" data-choices data-choices-search-false name="choices-single-default"
                                id="choices-single-default"
                                onChange={(e) => rating(e.target.value)}>
                                <option value="">Select Rating</option>
                                <option value="1">1 star</option>
                                <option value="2">2 star</option>
                                <option value="3">3 star</option>
                                <option value="4">4 star</option>
                                <option value="5">5 star</option>
                            </select>
                        </Col>
                        <Col xxl={1} lg={4}>
                            <button className="btn btn-primary w-100"><i className="ri-equalizer-line align-bottom me-1"></i> Filters</button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <Row>
                {(icoList || []).map((item: any, key: any) => (
                    <React.Fragment key={key}>
                        {item.title === "Active ICOs" ?
                            <Col xxl={3} md={6}>
                                <Card className="overflow-hidden shadow-none">
                                    <Card.Body className="bg-success-subtle">
                                        <h5 className="fs-17 text-center mb-0">{item.title}</h5>
                                    </Card.Body>
                                </Card>
                                {(item.subItem || []).map((subItem: any, key: any) => (
                                    <Card className="mb-2" key={key}>
                                        <Card.Body>
                                            <div className="d-flex mb-3">
                                                <div className="flex-shrink-0 avatar-sm">
                                                    <div className="avatar-title bg-light rounded">
                                                        <img src={subItem.img} alt="" className="avatar-xxs" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h5 className="fs-15 mb-1">{subItem.label}</h5>
                                                    <p className="text-muted mb-2">{subItem.caption}</p>
                                                </div>
                                                <div>
                                                    <Link href="#" className="badge bg-primary-subtle text-primary">Visit Website <i className="ri-arrow-right-up-line align-bottom"></i></Link>
                                                </div>
                                            </div>
                                            <h6 className="text-muted mb-0">{subItem.amount} <span className="badge bg-success-subtle text-success">89.97%</span></h6>
                                        </Card.Body>
                                        <Card.Body className="border-top border-top-dashed">
                                            <div className="d-flex">
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-0">{subItem.rating} <i className="ri-star-fill align-bottom text-warning"></i></h6>
                                                </div>
                                                <h6 className={"flex-shrink-0 text-" + subItem.dateClass + " mb-0"}><i className="ri-time-line align-bottom"></i> {subItem.date}</h6>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </Col>
                            : item.title === "Ended ICOs" ?
                                <Col xxl={3} md={6}>
                                    <Card className="overflow-hidden">
                                        <Card.Body className="bg-danger-subtle">
                                            <h5 className="fs-17 text-center mb-0">{item.title}</h5>
                                        </Card.Body>
                                    </Card>
                                    {(item.subItem || []).map((subItem: any, key: any) => (
                                        <Card className="mb-2" key={key}>
                                            <Card.Body>
                                                <div className="d-flex mb-3">
                                                    <div className="flex-shrink-0 avatar-sm">
                                                        <div className="avatar-title bg-light rounded ">
                                                            <img src={subItem.img} alt="" className="avatar-xxs" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h5 className="fs-15 mb-1">{subItem.label}</h5>
                                                        <p className="text-muted mb-2">{subItem.caption}</p>
                                                    </div>
                                                    <div>
                                                        <Link href="#" className="badge bg-primary-subtle text-primary">Visit Website <i className="ri-arrow-right-up-line align-bottom"></i></Link>
                                                    </div>
                                                </div>
                                                <h6 className="text-muted mb-0">{subItem.amount} <span className="badge bg-success-subtle text-success">{subItem.percentage}</span></h6>
                                            </Card.Body>
                                            <Card.Body className="border-top border-top-dashed">
                                                <div className="d-flex">
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-0">{subItem.rating} <i className="ri-star-fill align-bottom text-warning"></i></h6>
                                                    </div>
                                                    <h6 className={"flex-shrink-0 text-" + subItem.dateClass + " mb-0"}><i className="ri-time-line align-bottom"></i> {subItem.date}</h6>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    ))}
                                </Col>
                                : item.title === "Upcoming ICOs" ?
                                    <Col xxl={3} md={6}>
                                        <Card className="overflow-hidden">
                                            <Card.Body className="bg-primary-subtle">
                                                <h5 className="fs-17 text-center mb-0">{item.title}</h5>
                                            </Card.Body>
                                        </Card>
                                        {(item.subItem || []).map((subItem: any, key: any) => (
                                            <Card className="mb-2" key={key}>
                                                <Card.Body>
                                                    <div className="d-flex mb-3">
                                                        <div className="flex-shrink-0 avatar-sm">
                                                            <div className="avatar-title bg-light rounded ">
                                                                <img src={subItem.img} alt="" className="avatar-xxs" />
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h5 className="fs-15 mb-1">{subItem.label}</h5>
                                                            <p className="text-muted mb-2">{subItem.caption}</p>
                                                        </div>
                                                        <div>
                                                            <Link href="#" className="badge bg-primary-subtle text-primary">Visit Website <i className="ri-arrow-right-up-line align-bottom"></i></Link>
                                                        </div>
                                                    </div>
                                                    <h6 className="text-muted mb-0">{subItem.amount}</h6>
                                                </Card.Body>
                                                <Card.Body className="border-top border-top-dashed">
                                                    <div className="d-flex">
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">{subItem.rating} <i className="ri-star-fill align-bottom text-warning"></i></h6>
                                                        </div>
                                                        <h6 className={"flex-shrink-0 text-" + subItem.dateClass + " mb-0"}><i className="ri-time-line align-bottom"></i> {subItem.date}</h6>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        ))}
                                    </Col>
                                    : item.title === "Trading ICOs" ?
                                        <Col xxl={3} md={6}>
                                            <Card className="overflow-hidden">
                                                <Card.Body className="bg-info-subtle">
                                                    <h5 className="fs-17 text-center mb-0">{item.title}</h5>
                                                </Card.Body>
                                            </Card>
                                            {(item.subItem || []).map((subItem: any, key: any) => (
                                                <Card className="mb-2 ribbon-box ribbon-fill right" key={key}>
                                                    <div className="ribbon ribbon-info shadow-none"><i className="ri-flashlight-fill me-1"></i>{subItem.ribbonNumber}</div>
                                                    <Card.Body>
                                                        <div className="d-flex mb-3">
                                                            <div className="flex-shrink-0 avatar-sm">
                                                                <div className="avatar-title bg-light rounded ">
                                                                    <img src={subItem.img} alt="" className="avatar-xxs" />
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h5 className="fs-15 mb-1">{subItem.label}</h5>
                                                                <p className="text-muted mb-2">{subItem.caption}</p>
                                                            </div>
                                                            <div className="me-4">
                                                                <Link href="#" className="badge bg-primary-subtle text-primary">Visit Website <i className="ri-arrow-right-up-line align-bottom"></i></Link>
                                                            </div>
                                                        </div>
                                                        <h6 className="text-muted mb-0">{subItem.amount} <span className="badge bg-success-subtle text-success">{subItem.percentage}</span></h6>
                                                    </Card.Body>
                                                    <Card.Body className="border-top border-top-dashed">
                                                        <div className="d-flex">
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-0">{subItem.rating} <i className="ri-star-fill align-bottom text-warning"></i></h6>
                                                            </div>
                                                            <h6 className={"flex-shrink-0 text-" + subItem.dateClass + " mb-0"}><i className="ri-time-line align-bottom"></i> {subItem.date}</h6>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            ))}
                                        </Col>
                                        : null
                        }
                    </React.Fragment>
                ))}
            </Row>
        </React.Fragment>
    );
};

export default ICO;