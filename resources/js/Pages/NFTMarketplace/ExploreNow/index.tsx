import React, { useState } from "react";
import {
    Card,
    Col,
    Container,
    Row,
    Collapse,
    Dropdown,
} from "react-bootstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
// RangeSlider

import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

import { expolreNow } from "../../../common/data/index";
import { Head, Link } from "@inertiajs/react";
import Layout from "../../../Layouts";

const ExploreNow = () => {
    const [NFTList, setNFTList] = useState(expolreNow);
    const [isFilterOpen, setIsFilterOpen] = useState(true);

    const handleFilterToggle = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const favouriteBtn = (ele: any) => {
        if (ele.closest("button").classList.contains("active")) {
            ele.closest("button").classList.remove("active");
        } else {
            ele.closest("button").classList.add("active");
        }
    };
    const onUpdate = (value: any) => {
        setNFTList(
            expolreNow.filter(
                (NFT) => NFT.price >= value[0] && NFT.price <= value[1],
            )
        );
    };

    const category = (e: any) => {
        setNFTList(
            expolreNow.filter((item) => item.category === e));
    };

    const fileType = (e: any) => {
        setNFTList(
            expolreNow.filter((item) => item.fileType === e));
    };

    const salesType = (e: any) => {
        setNFTList(
            expolreNow.filter((item) => item.sales === e));
    };

    const searchNFT = () => {
        var searchProductList: any = document.getElementById("searchProductList");
        var inputVal = searchProductList.value.toLowerCase();
        function filterItems(arr: any, query: any) {
            return arr.filter(function (el: any) {
                return el.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
            });
        }
        var filterData = filterItems(expolreNow, inputVal);
        if (filterData.length === 0) {
            var noresult = document.getElementById("noresult") as HTMLElement;
            noresult.style.display = "block";
            var loadmore = document.getElementById("loadmore") as HTMLElement;
            loadmore.style.display = "none";
        } else {
            var noResult = document.getElementById("noresult") as HTMLElement;
            noResult.style.display = "none";
            var loadMore = document.getElementById("loadmore") as HTMLElement;
            loadMore.style.display = "block";
        }
        setNFTList(filterData);
    };

    return (
        <React.Fragment>
            <Head title="Explore Now | Velzon - React Admin & Dashboard Template" />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Explore Now" pageTitle="NFT Marketplace" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header className="border-0">
                                    <div className="d-flex align-items-center">
                                        <h5 className="card-title mb-0 flex-grow-1">
                                            Explore Product
                                        </h5>
                                        <div>
                                            <Link
                                                className="btn btn-success"
                                                id="filter-collapse"
                                                data-bs-toggle="collapse"
                                                href="#collapseExample"
                                            >
                                                <i className="ri-filter-2-line align-bottom"></i>
                                                Filters
                                            </Link>
                                        </div>
                                    </div>

                                    <Collapse in={isFilterOpen}>
                                        <Row className="row-cols-xxl-5 row-cols-lg-3 row-cols-md-2 row-cols-1 mt-3 g-3">
                                            <Col>
                                                <h6 className="text-uppercase fs-12 mb-2">Search</h6>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Search product name"
                                                    autoComplete="off"
                                                    id="searchProductList"
                                                    onKeyUp={searchNFT}
                                                />
                                            </Col>
                                            <Col>
                                                <h6 className="text-uppercase fs-12 mb-2">
                                                    Select Category
                                                </h6>
                                                <select
                                                    className="form-control"
                                                    data-choices
                                                    name="select-category"
                                                    data-choices-search-false
                                                    id="select-category"
                                                    onChange={(e) => category(e.target.value)}
                                                >
                                                    <option value="">Select Category</option>
                                                    <option value="Artwork">Artwork</option>
                                                    <option value="3d Style">3d Style</option>
                                                    <option value="Photography">Photography</option>
                                                    <option value="Collectibles">Collectibles</option>
                                                    <option value="Crypto Card">Crypto Card</option>
                                                    <option value="Games">Games</option>
                                                    <option value="Music">Music</option>
                                                </select>
                                            </Col>
                                            <Col>
                                                <h6 className="text-uppercase fs-12 mb-2">File Type</h6>
                                                <select
                                                    className="form-control"
                                                    data-choices
                                                    name="file-type"
                                                    data-choices-search-false
                                                    id="file-type"
                                                    onChange={(e) => fileType(e.target.value)}
                                                >
                                                    <option value="">File Type</option>
                                                    <option value="jpg">Images</option>
                                                    <option value="mp4">Video</option>
                                                    <option value="mp3">Audio</option>
                                                    <option value="gif">Gif</option>
                                                </select>
                                            </Col>
                                            <Col>
                                                <h6 className="text-uppercase fs-12 mb-2">
                                                    Sales Type
                                                </h6>
                                                <select
                                                    className="form-control"
                                                    data-choices
                                                    name="all-sales-type"
                                                    data-choices-search-false
                                                    id="all-sales-type"
                                                    onChange={(e) => salesType(e.target.value)}
                                                >
                                                    <option value="">All Sales Type</option>
                                                    <option value="On Auction">On Auction</option>
                                                    <option value="Has Offers">Has Offers</option>
                                                </select>
                                            </Col>
                                            <Col>
                                                <h6 className="text-uppercase fs-12 mb-4">Price</h6>

                                                <Nouislider
                                                    range={{ min: 0, max: 2000 }}
                                                    tooltips={true}
                                                    start={[0, 1000]}
                                                    connect
                                                    className="slider"
                                                    id="range-product-price"
                                                    onSlide={onUpdate}
                                                />
                                            </Col>
                                        </Row>
                                    </Collapse>
                                </Card.Header>
                            </Card>
                        </Col>
                        <Col lg={12}>
                            <div className="d-flex align-items-center mb-4">
                                <div className="flex-grow-1">
                                    <p className="text-muted fs-14 mb-0">Result: 8745</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            as="a"
                                            className="text-muted fs-14"
                                            role="button"
                                        >
                                            All View <i className="mdi mdi-chevron-down"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu-end">
                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row
                        className="row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1"
                        id="explorecard-list"
                    >

                        {NFTList.map((item, key) => (<Col className="list-element" key={key}>
                            <Card className="explore-box card-animate">
                                <div className="explore-place-bid-img">
                                    <input type="hidden" className="form-control" id="1" />
                                    <div className="d-none">undefined</div>
                                    <img
                                        src={item.img}
                                        alt=""
                                        className="card-img-top explore-img"
                                    />
                                    <div className="bg-overlay"></div>
                                    <div className="place-bid-btn">

                                        <Link href="#!" className="btn btn-success">
                                            <i className="ri-auction-fill align-bottom me-1"></i> Place
                                            Bid
                                        </Link>
                                    </div>
                                </div>
                                <div className="bookmark-icon position-absolute top-0 end-0 p-2">

                                    <button
                                        type="button"
                                        className={item.isActive ? "btn btn-icon active" : "btn btn-icon"}
                                        data-bs-toggle="button"
                                        aria-pressed="true"
                                        onClick={(e) => favouriteBtn(e.target)}
                                    >
                                        <i className="mdi mdi-cards-heart fs-16"></i>
                                    </button>
                                </div>
                                <Card.Body>

                                    <p className="fw-medium mb-0 float-end">
                                        <i className="mdi mdi-heart text-danger align-middle"></i>{" "}
                                        {item.likes}k
                                    </p>
                                    <h5 className="mb-1">
                                        <Link href="/apps-nft-item-details">{item.title}</Link>
                                    </h5>
                                    <p className="text-muted mb-0">{item.category}</p>
                                </Card.Body>
                                <div className="card-footer border-top border-top-dashed">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1 fs-14">

                                            <i className="ri-price-tag-3-fill text-warning align-bottom me-1"></i>
                                            Highest: <span className="fw-medium">{item.highestBid}ETH</span>
                                        </div>
                                        <h5 className="flex-shrink-0 fs-14 text-primary mb-0">
                                            {item.price}ETH
                                        </h5>
                                    </div>
                                </div>
                            </Card>
                        </Col>))}
                    </Row>
                    <div
                        className="py-4 text-center"
                        id="noresult"
                        style={{ display: "none" }}
                    >
                        <i className="ri-search-line display-5 text-success"></i>
                        <h5 className="mt-4">Sorry! No Result Found</h5>
                    </div>
                    <div className="text-center mb-3">
                        <button className=" btn btn-link text-success mt-2" id="loadmore">
                            <i className="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i>
                            Load More
                        </button>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};

ExploreNow.layout = (page: any) => <Layout children={page} />
export default ExploreNow;
