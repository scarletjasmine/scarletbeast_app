import React, { useState, useEffect } from "react";
import {
    Card,
    Col,
    Dropdown
} from "react-bootstrap";
//Import Icons
import FeatherIcon from "feather-icons-react";

import { UsersByDeviceCharts } from "../../DashboardAnalytics/DashboardAnalyticsCharts";

const UsersByDevice = () => {
    const [chartData, setchartData] = useState<any>([]);

    useEffect(() => {
        setchartData([13, 22, 30]);
    }, []);

    const [seletedMonth, setSeletedMonth] = useState("today");
    const onChangeChartPeriod = (pType: any) => {
        setSeletedMonth(pType);
    };

    return (
        <React.Fragment>
            <Col xl={4}>
                <Card className="card-height-100">
                    <Card.Header className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Users by Device</h4>
                        <div className="flex-shrink-0">
                            <Dropdown
                                className="card-header-dropdown"
                                dir="start"
                            >
                                <Dropdown.Toggle
                                    as="a"
                                    className="text-reset dropdown-btn"
                                    role="button"
                                >
                                    <span className="text-muted fs-16">
                                        <i className="mdi mdi-dots-vertical align-middle"></i>
                                    </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-end">
                                    <Dropdown.Item
                                        onClick={() => {
                                            onChangeChartPeriod("today");
                                        }}
                                        className={seletedMonth === "today" ? "active" : ""}
                                    >
                                        Today
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={() => {
                                            onChangeChartPeriod("lastWeek");
                                        }}
                                        className={seletedMonth === "lastWeek" ? "active" : ""}
                                    >
                                        Last Week
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={() => {
                                            onChangeChartPeriod("lastMonth");
                                        }}
                                        className={seletedMonth === "lastMonth" ? "active" : ""}
                                    >
                                        Last Month
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={() => {
                                            onChangeChartPeriod("currentYear");
                                        }}
                                        className={seletedMonth === "currentYear" ? "active" : ""}
                                    >
                                        Current Year
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <div dir="ltr">
                            <UsersByDeviceCharts
                                series={chartData}
                                dataColors='["--vz-secondary", "--vz-primary", "--vz-success"]'
                            />
                        </div>

                        <div className="table-responsive mt-3">
                            <table className="table table-borderless table-sm table-centered align-middle table-nowrap mb-0">
                                <tbody className="border-0">
                                    <tr>
                                        <td>
                                            <h4 className="text-truncate fs-14 fs-medium mb-0">
                                                <i className="ri-stop-fill align-middle fs-18 text-secondary me-2"></i>
                                                Desktop Users
                                            </h4>
                                        </td>
                                        <td>
                                            <p className="text-muted mb-0">
                                                <FeatherIcon icon="users" className="me-2 icon-sm" />
                                                {chartData[0]}k
                                            </p>
                                        </td>
                                        <td className="text-end">
                                            <p className="text-success fw-medium fs-12 mb-0">
                                                <i className="ri-arrow-up-s-fill fs-5 align-middle"></i>
                                                2.08%
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4 className="text-truncate fs-14 fs-medium mb-0">
                                                <i className="ri-stop-fill align-middle fs-18 text-primary me-2"></i>
                                                Mobile Users
                                            </h4>
                                        </td>
                                        <td>
                                            <p className="text-muted mb-0">
                                                <FeatherIcon icon="users" className="me-2 icon-sm" />
                                                {chartData[1]}k
                                            </p>
                                        </td>
                                        <td className="text-end">
                                            <p className="text-danger fw-medium fs-12 mb-0">
                                                <i className="ri-arrow-down-s-fill fs-5 align-middle"></i>
                                                10.52%
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4 className="text-truncate fs-14 fs-medium mb-0">
                                                <i className="ri-stop-fill align-middle fs-18 text-success me-2"></i>
                                                Tablet Users
                                            </h4>
                                        </td>
                                        <td>
                                            <p className="text-muted mb-0">
                                                <FeatherIcon icon="users" className="me-2 icon-sm" />
                                                {chartData[2]}k
                                            </p>
                                        </td>
                                        <td className="text-end">
                                            <p className="text-danger fw-medium fs-12 mb-0">
                                                <i className="ri-arrow-down-s-fill fs-5 align-middle"></i>
                                                7.36%
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default UsersByDevice;
