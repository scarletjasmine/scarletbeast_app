import React from 'react';
import CountUp from "react-countup";
import { Card, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Mousewheel } from "swiper/modules";
import { Link } from '@inertiajs/react';

const Widgets = () => {
    return (
        <React.Fragment>
            <Col xxl={3} md={6}>
                <Card className="card-animate">
                    <Card.Body>
                        <div className="d-flex mb-3">
                            <div className="flex-grow-1">
                                <i className="ri-briefcase-line display-5 text-success"></i>
                            </div>
                            <div className="flex-shrink-0">
                                <Link href="#" className="badge bg-warning-subtle text-warning badge-border">BTC</Link>
                                <Link href="#" className="badge bg-info-subtle text-info badge-border">ETH</Link>
                                <Link href="#" className="badge bg-primary-subtle text-primary badge-border">USD</Link>
                                <Link href="#" className="badge bg-danger-subtle text-danger badge-border">EUR</Link>
                            </div>
                        </div>
                        <h3 className="mb-2">
                            <span className="counter-value" data-target="74858">
                                <CountUp start={0} end={74858} separator="," prefix="$" duration={3} />
                            </span>
                            <small className="text-muted fs-13">.68k</small></h3>
                        <h6 className="text-muted mb-0">Available Balance (USD)</h6>
                    </Card.Body>
                </Card>
            </Col>
            <Col xxl={3} md={6}>
                <Card className="card-animate">
                    <Card.Body>
                        <div className="d-flex mb-3">
                            <div className="flex-grow-1">
                                <i className="ri-coin-line display-5 text-success"></i>
                            </div>
                            <div className="flex-shrink-0">
                                <Link href="#" className="badge bg-warning-subtle text-warning badge-border">BTC</Link>
                                <Link href="#" className="badge bg-info-subtle text-info badge-border">ETH</Link>
                                <Link href="#" className="badge bg-primary-subtle text-primary badge-border">USD</Link>
                                <Link href="#" className="badge bg-danger-subtle text-danger badge-border">EUR</Link>
                            </div>
                        </div>
                        <h4 className="mb-2">
                            <span className="counter-value" data-target="74361">
                                <CountUp start={0} end={74361} separator="," prefix="$" duration={3} />
                            </span>
                            <small className="text-muted fs-13">.34k</small></h4>
                        <h6 className="text-muted mb-0">Send (Previous Month)</h6>
                    </Card.Body>
                </Card>
            </Col>
            <Col xxl={3} md={6}>
                <Card className="card-animate">
                    <Card.Body>
                        <div className="d-flex mb-3">
                            <div className="flex-grow-1">
                                <i className="ri-wallet-3-line display-5 text-success"></i>
                            </div>
                            <div className="flex-shrink-0">
                                <Link href="#" className="badge bg-warning-subtle text-warning badge-border">BTC</Link>
                                <Link href="#" className="badge bg-info-subtle text-info badge-border">ETH</Link>
                                <Link href="#" className="badge bg-primary-subtle text-primary badge-border">USD</Link>
                                <Link href="#" className="badge bg-danger-subtle text-danger badge-border">EUR</Link>
                            </div>
                        </div>
                        <h3 className="mb-2">
                            <span className="counter-value" data-target="97685">
                                <CountUp start={0} end={97685} separator="," prefix="$" duration={3} />
                            </span>
                            <small className="text-muted fs-13">.22k</small></h3>
                        <h6 className="text-muted mb-0">Receive (Previous Month)</h6>
                    </Card.Body>
                </Card>
            </Col>
            <Col xxl={3} md={6}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={24}
                    mousewheel={true}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Mousewheel]}
                    className="default-swiper rounded">
                    <SwiperSlide>
                        <Card className="card-animate">
                            <div className="card-body bg-warning-subtle">
                                <div className="d-flex mb-3">
                                    <div className="flex-grow-1">
                                        <i className="ri-copper-coin-line display-5 text-success"></i>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Link href="#" className="fw-medium">Bitcoin (BTC)</Link>
                                    </div>
                                </div>
                                <h3 className="mb-2">$245<small className="text-muted fs-13">.65k</small></h3>
                                <h6 className="text-muted mb-0">Send - Receive (Previous Month)</h6>
                            </div>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className="card-animate">
                            <div className="card-body bg-warning-subtle">
                                <div className="d-flex mb-3">
                                    <div className="flex-grow-1">
                                        <i className="ri-copper-coin-line display-5 text-success"></i>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Link href="#" className="fw-medium">Ethereum (ETH)</Link>
                                    </div>
                                </div>
                                <h3 className="mb-2">$24<small className="text-muted fs-13">.74k</small></h3>
                                <h6 className="text-muted mb-0">Send - Receive (Previous Month)</h6>
                            </div>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className="card-animate">
                            <div className="card-body bg-warning-subtle">
                                <div className="d-flex mb-3">
                                    <div className="flex-grow-1">
                                        <i className="ri-copper-coin-line display-5 text-success"></i>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Link href="#" className="fw-medium">Monero (XMR)</Link>
                                    </div>
                                </div>
                                <h3 className="mb-2">$124<small className="text-muted fs-13">.36k</small></h3>
                                <h6 className="text-muted mb-0">Send - Receive (Previous Month)</h6>
                            </div>
                        </Card>
                    </SwiperSlide>
                </Swiper>
            </Col>
        </React.Fragment>
    );
};

export default Widgets;