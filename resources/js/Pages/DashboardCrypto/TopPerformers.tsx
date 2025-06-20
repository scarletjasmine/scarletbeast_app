import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { topPerformers } from '../../common/data';

const TopPerformers = () => {
    return (
        <React.Fragment>
            <Col xxl={4} lg={6}>
                <Card className="card-height-100">
                    <Card.Header className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Top Performers</h4>
                        <div className="d-flex gap-1">
                            <button type="button" className="btn btn-soft-info btn-sm shadow-none">
                                1H
                            </button>
                            <button type="button" className="btn btn-soft-info btn-sm shadow-none">
                                1D
                            </button>
                            <button type="button" className="btn btn-soft-info btn-sm shadow-none">
                                7D
                            </button>
                            <button type="button" className="btn btn-soft-primary btn-sm shadow-none">
                                1M
                            </button>
                        </div>
                    </Card.Header>
                    <Card.Body className="p-0">
                        <ul className="list-group list-group-flush border-dashed mb-0">
                            {(topPerformers || []).map((item: any, key: any) => (
                                <li className="list-group-item d-flex align-items-center" key={key}>
                                    <div className="flex-shrink-0">
                                        <img src={item.img} className="avatar-xs" alt="" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h6 className="fs-14 mb-1">{item.coinName}</h6>
                                        <p className="text-muted mb-0">${item.marketCap} Billions</p>
                                    </div>
                                    <div className="flex-shrink-0 text-end">
                                        <h6 className="fs-14 mb-1">${item.price}</h6>
                                        <p className={"fs-12 mb-0 text-" + item.textColor}>{item.change} ({item.percentage})</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Card.Body>
                </Card>
            </Col>

        </React.Fragment>
    );
};

export default TopPerformers;