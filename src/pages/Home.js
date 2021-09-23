import { Col, Row, Layout, Card } from "antd";
import React, { memo } from "react";

const Home = () => {
  return (
    <>
      <Layout>
        <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
          <Col span={12}>
            <Card bordered hoverable>
              <h1>hello world from antd</h1>
            </Card>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default memo(Home);
