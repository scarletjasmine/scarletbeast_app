import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import Select from "react-select";
import { Head } from '@inertiajs/react';
import Layout from '../../../Layouts';

const Select2 = () => {

    const [sortBy, setsortBy] = useState<any>(null);
    const [selectMulti, setselectMulti] = useState<any>(null);
    const [ajaxSelect, setajaxSelect] = useState<any>(null);
    const [temp, settemp] = useState<any>(null);
    const [selTemp, setselTemp] = useState<any>(null);
    const [dissortBy, setdissortBy] = useState<any>(null);
    const [disselectMulti, setdisselectMulti] = useState<any>(null);

    const [disable, setdisable] = useState<boolean>(false);


    const sortbyname = [
        {
            options: [
                { label: "Alabama", value: "AL" },
                { label: "Madrid", value: "MA" },
                { label: "Toronto", value: "TO" },
                { label: "Londan", value: "LO" },
                { label: "Wyoming", value: "WY" }
            ],
        },
    ];

    const sortbyMulti = [
        {
            label: "UK",
            options: [
                { label: "London", value: "London" },
                { label: "Manchester", value: "Manchester" },
                { label: "Liverpool", value: "Liverpool" }
            ]
        },
        {
            label: "FR",
            options: [
                { label: "Paris", value: "Paris" },
                { label: "Lyon", value: "Lyon" },
                { label: "Marseille", value: "Marseille" }
            ]
        },
        {
            label: "SP",
            options: [
                { label: "Madrid", value: "Madrid" },
                { label: "Barcelona", value: "Barcelona" },
                { label: "Malaga", value: "Malaga" }
            ]
        },
        {
            label: "CA",
            options: [
                { label: "Montreal", value: "Montreal" },
                { label: "Toronto", value: "Toronto" },
                { label: "Vancouver", value: "Vancouver" }
            ]
        }

    ];

    const ajaxSelectOption = [
        {
            options: [
                { label: "enhancement", value: "enhancement" },
                { label: "bug", value: "bug" },
                { label: "duplicate", value: "duplicate" },
                { label: "invalid", value: "invalid" },
                { label: "wontfix", value: "wontfix" }
            ],
        },
    ];

    const tempOption = [
        {
            label: "Alaskan/Hawaiian Time Zone",
            options: [
                { label: "Alaska", value: "AK" },
                { label: "Hawaii", value: "HI" },
            ]
        },
        {
            label: "Pacific Time Zone",
            options: [
                { label: "California", value: "CA" },
                { label: "Nevada", value: "NV" },
                { label: "Oregon", value: "OR" },
                { label: "Washington", value: "WA" }
            ]
        },
    ];

    const selTempOption = [
        {
            label: "Alaskan/Hawaiian Time Zone",
            options: [
                { label: "Alaska", value: "AK" },
                { label: "Hawaii", value: "HI" },
            ]
        },
        {
            label: "Pacific Time Zone",
            options: [
                { label: "California", value: "CA" },
                { label: "Nevada", value: "NV" },
                { label: "Oregon", value: "OR" },
                { label: "Washington", value: "WA" }
            ]
        },
    ];

    const dissortbyname = [
        {
            options: [
                { label: "Alabama", value: "AL" },
                { label: "Madrid", value: "MA" },
                { label: "Toronto", value: "TO" },
                { label: "Londan", value: "LO" },
                { label: "Wyoming", value: "WY" }
            ],
        },
    ];

    const dissortbyMulti = [
        {
            label: "UK",
            options: [
                { label: "London", value: "London" },
                { label: "Manchester", value: "Manchester" },
                { label: "Liverpool", value: "Liverpool" }
            ]
        },
        {
            label: "FR",
            options: [
                { label: "Paris", value: "Paris" },
                { label: "Lyon", value: "Lyon" },
                { label: "Marseille", value: "Marseille" }
            ]
        },
        {
            label: "SP",
            options: [
                { label: "Madrid", value: "Madrid" },
                { label: "Barcelona", value: "Barcelona" },
                { label: "Malaga", value: "Malaga" }
            ]
        },
        {
            label: "CA",
            options: [
                { label: "Montreal", value: "Montreal" },
                { label: "Toronto", value: "Toronto" },
                { label: "Vancouver", value: "Vancouver" }
            ]
        }

    ];

    const customStyles = {
        multiValue: (styles: any, { data }: any) => {
            return {
                ...styles,
                backgroundColor: "#3762ea",
            };
        },
        multiValueLabel: (styles: any, { data }: any) => ({
            ...styles,
            backgroundColor: "#405189",
            color: "white",
        }),
        multiValueRemove: (styles: any, { data }: any) => ({
            ...styles,
            color: "white",
            backgroundColor: "#405189",
            ':hover': {
                backgroundColor: "#405189",
                color: 'white',
            },
        }),
    }

    return (
        <React.Fragment>
            <Head title='Select2 | Velzon - React Admin & Dashboard Template' />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Select2" pageTitle="Forms" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h5 className="card-title mb-0">Basic Select2</h5>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>js-example-basic-single</code>, <code>js-example-basic-multiple</code>, <code>js-example-data-array</code>, <code>js-example-templating</code>, <code>select-flag-templating</code>,  class to show select2 example.</p>
                                    <Row className="g-4">
                                        <Col lg={4}>
                                            <h6 className="fw-semibold">Basic Select</h6>
                                            <Select
                                                value={sortBy}
                                                onChange={(sortBy: any) => {
                                                    setsortBy(sortBy);
                                                }}
                                                options={sortbyname}
                                                id="choices-single-default"
                                                className="js-example-basic-single mb-0"
                                                name="state"

                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <h6 className="fw-semibold">Multi Select</h6>

                                            <Select
                                                value={selectMulti}
                                                isMulti={true}
                                                onChange={(sortBy: any) => {
                                                    setselectMulti(sortBy);
                                                }}
                                                options={sortbyMulti}
                                                classNamePrefix="js-example-basic-multiple mb-0"
                                                styles={customStyles}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <h6 className="fw-semibold">Ajax Select</h6>

                                            <Select
                                                value={ajaxSelect}
                                                onChange={(sortBy: any) => {
                                                    setajaxSelect(sortBy);
                                                }}
                                                options={ajaxSelectOption}
                                                classNamePrefix="js-example-data-array"
                                                isLoading={true}
                                            />
                                        </Col>

                                        <Col lg={4}>
                                            <h6 className="fw-semibold">Templating</h6>

                                            <Select
                                                value={temp}
                                                onChange={(sortBy: any) => {
                                                    settemp(sortBy);
                                                }}
                                                options={tempOption}
                                                id="choices-single-default"
                                                className="js-example-templating mb-0"
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <h6 className="fw-semibold">Selections Templating</h6>

                                            <Select
                                                value={selTemp}
                                                onChange={(sortBy: any) => {
                                                    setselTemp(sortBy);
                                                }}
                                                options={selTempOption}
                                                id="choices-single-default"
                                                className="select-flag-templating mb-0"
                                            />
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h5 className="card-title mb-0">Disabling a Select2 Control</h5>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Select2 will respond to the disabled attribute on <code>&lt;select&gt;</code> elements. You can also initialize Select2 with disabled: true to get the same effect.</p>
                                    <div className="vstack gap-3">

                                        <Select
                                            value={dissortBy}
                                            onChange={(sortBy: any) => {
                                                setdissortBy(sortBy);
                                            }}
                                            options={dissortbyname}
                                            className="js-example-disabled mb-0"
                                            isDisabled={disable}
                                        />

                                        <Select
                                            value={disselectMulti}
                                            isMulti={true}
                                            onChange={(sortBy: any) => {
                                                setdisselectMulti(sortBy);
                                            }}
                                            options={dissortbyMulti}
                                            classNamePrefix="js-example-disabled-multi mb-0"
                                            isDisabled={disable}
                                            styles={customStyles}
                                        />
                                    </div>
                                    <div className="hstack gap-2 mt-3">
                                        <button type="button" className="js-programmatic-enable btn btn-primary" onClick={() => setdisable(false)}>
                                            Enable
                                        </button>
                                        <button type="button" className="js-programmatic-disable btn btn-success" onClick={() => setdisable(true)}>
                                            Disable
                                        </button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

Select2.layout = (page: any) => <Layout children={page} />
export default Select2;