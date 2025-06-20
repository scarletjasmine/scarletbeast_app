import React from 'react';
import { Card, Col, Row, Dropdown } from 'react-bootstrap';
import { recentNFTsData } from "../../common/data/dashboardNFT";
import { topCollectionData } from "../../common/data/dashboardNFT";
import { popularCreatorsData } from "../../common/data/dashboardNFT";

// Import Images
import usFlag from "../../../images/flags/us.svg";
import russiaFlag from "../../../images/flags/russia.svg";
import spainFlag from "../../../images/flags/spain.svg";
import italyFlag from "../../../images/flags/italy.svg";
import germanyFlag from "../../../images/flags/germany.svg";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Vector Map
import { VectorMap } from '@south-paw/react-vector-maps'
import world from '../../common/world.svg.json';
import { Link } from '@inertiajs/react';


const RecentNFTs = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header className="align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Recent NFTs</h4>
                            <div className="flex-shrink-0">
                                <Dropdown className='card-header-dropdown'>
                                    <Dropdown.Toggle as="a" className="text-reset dropdown-btn arrow-none" role="button">
                                        <span className="fw-semibold text-uppercase fs-12">Sort by: </span><span className="text-muted">Popular <i className="mdi mdi-chevron-down ms-1"></i></span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu-end">
                                        <Dropdown.Item href="#">Popular</Dropdown.Item>
                                        <Dropdown.Item href="#">Newest</Dropdown.Item>
                                        <Dropdown.Item href="#">Oldest</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive table-card">
                                <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                                    <thead className="text-muted bg-light-subtle">
                                        <tr>
                                            <th>Collection</th>
                                            <th>Volume</th>
                                            <th>24h %</th>
                                            <th>Creators</th>
                                            <th>Items</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recentNFTsData.map((item, key) => (
                                            <tr key={key}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <img src={item.img} alt="" className="avatar-xs rounded-circle" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-1"><Link href="/apps-nft-item-details" className='text-reset'>{item.title}</Link></h6>
                                                            <p className="text-muted mb-0"> {item.category} </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><img src={item.icon} className="avatar-xxs me-2" alt="" />{item.volume}</td>
                                                <td>
                                                    <span className={item.textColor ? "text-danger mb-0" : "text-success mb-0"}><i className={item.textColor ? "mdi mdi-trending-down align-middle me-1" : "mdi mdi-trending-up align-middle me-1"}></i>{item.hours}
                                                    </span>
                                                </td>
                                                <td>{item.creators}</td>
                                                <td>{item.items}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} lg={6}>
                    <Card className="card-height-100">
                        <Card.Header className="align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Worldwide Top Creators</h4>
                            <div className="flex-shrink-0">
                                <button type="button" className="btn btn-soft-primary btn-sm ">
                                    Export Report
                                </button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="world_map_line_markers" className="custom-vector-map">
                                <VectorMap {...world} />
                            </div>
                            {/* <div id="creators-by-locations" data-colors='["--vz-light", "--vz-success", "--vz-primary"]' style={{ height: "265px" }} dir="ltr"></div> */}
                            <div className="mt-1">
                                <p className="mb-1"><img src={usFlag} alt="" height="15" className="rounded me-2" /> United States <span className="float-end">34%</span></p>
                                <p className="mb-1"><img src={russiaFlag} alt="" height="15" className="rounded me-2" /> Russia <span className="float-end">27%</span></p>
                                <p className="mb-1"><img src={spainFlag} alt="" height="15" className="rounded me-2" /> Spain <span className="float-end">21%</span></p>
                                <p className="mb-1"><img src={italyFlag} alt="" height="15" className="rounded me-2" /> Italy <span className="float-end">13%</span></p>
                                <p className="mb-0"><img src={germanyFlag} alt="" height="15" className="rounded me-2" /> Germany <span className="float-end">5%</span></p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} lg={6}>
                    <Card>
                        <Card.Header className="d-flex align-items-center">
                            <h6 className="card-title flex-grow-1 mb-0">Top Collections</h6>
                            <Link href="/apps-nft-collections" type="button" className="btn btn-soft-primary  btn-sm flex-shrink-0">
                                See All <i className="ri-arrow-right-line align-bottom"></i>
                            </Link>
                        </Card.Header>
                        <Card.Body>
                            <Swiper modules={[Autoplay, Pagination, Navigation]}
                                slidesPerView={1}
                                spaceBetween={10}
                                pagination={{
                                    el: ".swiper-pagination",
                                    clickable: true,
                                }}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                }}
                                loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} className="mySwiper swiper collection-slider">
                                <div className="swiper-wrapper">
                                    {topCollectionData.map((item, key) => (
                                        <SwiperSlide key={key}>
                                            <div className="dash-collection overflow-hidden rounded-top position-relative">
                                                <img src={item.img} alt="" height="220" className="object-fit-cover w-100" />
                                                <div className="content position-absolute bottom-0 m-2 p-2 start-0 end-0 rounded d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <Link href="#">
                                                            <h5 className="text-white fs-16 mb-1">{item.category}</h5>
                                                        </Link>
                                                        <p className="text-white text-opacity-75 mb-0">{item.items} Items</p>
                                                    </div>
                                                    <div className="avatar-xxs">
                                                        <div className="avatar-title bg-white rounded-circle">
                                                            <Link href="#" className="link-success"><i className="ri-arrow-right-line"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </div>
                            </Swiper>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header className="d-flex align-items-center">
                            <h5 className="card-title flex-grow-1 mb-0">Popular Creators</h5>
                            <Link href="/apps-nft-creators" type="button" className="btn btn-soft-primary  btn-sm flex-shrink-0">
                                See All <i className="ri-arrow-right-line align-bottom"></i>
                            </Link>
                        </Card.Header>
                        <Card.Body>
                            <Swiper modules={[Autoplay, Pagination, Navigation]}
                                slidesPerView={1}
                                spaceBetween={10}
                                pagination={{
                                    el: ".swiper-pagination",
                                    clickable: true,
                                }}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                }}
                                loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} className="mySwiper swiper collection-slider">
                                <div className="swiper-wrapper">
                                    {popularCreatorsData.map((item, key) => (
                                        <SwiperSlide key={key}>
                                            <div className="d-flex">
                                                <div className="flex-shink-0">
                                                    <img src={item.img} alt="" className="avatar-sm object-fit-cover rounded" />
                                                </div>
                                                <div className="ms-3 flex-grow-1">
                                                    <Link href="/pages-profile">
                                                        <h5 className="mb-1">{item.author}</h5>
                                                    </Link>
                                                    <p className="text-muted mb-0"><i className="mdi mdi-ethereum text-primary fs-14"></i> {item.price}</p>
                                                </div>
                                                <div>
                                                    <Dropdown className='float-end'>
                                                        <Dropdown.Toggle as="a" className="arrow-none btn btn-ghost-primary btn-icon dropdown" role="button">
                                                            <i className="ri-more-fill align-middle fs-16"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="dropdown-menu-end">
                                                            <Dropdown.Item href="#">View</Dropdown.Item>
                                                            <Dropdown.Item href="#">Share</Dropdown.Item>
                                                            <Dropdown.Item href="#">Report</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </div>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default RecentNFTs;