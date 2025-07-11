import BreadCrumb from '../../Components/Common/BreadCrumb'
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Widget from './Widget'
import RecentComment from './RecentComment'
import Device from './Device'
import RecentArticleTable from './RecentArticleTable'
import Layout from '../../Layouts'

const DashboardBlog = () => {

  document.title="Blog | Velzon - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Blog" pageTitle="Dashboards" />
          <Row>

            <Widget />

            <RecentComment />

            <RecentArticleTable />

            <Device />

          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

DashboardBlog.layout =(page:any) => <Layout children={page}/>
export default DashboardBlog