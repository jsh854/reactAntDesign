import React, { memo } from "react";
import { Button, Row, Col, Divider } from "antd";
import {
  DownloadOutlined,
  DeleteFilled,
  InstagramFilled,
  RightOutlined,
} from "@ant-design/icons";

const Buttons = () => {
  return (
    <>
      {/* <Layout> */}
      {/* <Content> */}
      <Divider orientation="left">Main Buttons</Divider>
      <div className="space-align-container">
        {/* <Space align="center"> */}
        <Row gutter={16}>
          <Col span="6">
            <Button type="primary">Primary Button</Button>
          </Col>

          <Col span="6">
            <Button>Secondary Button</Button>
          </Col>
          <Col span="6">
            <Button type="dashed">Dashed Button</Button>
          </Col>
          <Col span="4">
            <Button disabled>Disabled Button</Button>
          </Col>
        </Row>
        {/* </Space> */}
      </div>
      <Divider orientation="left">Error Handling Buttons</Divider>
      <div className="space-align-container">
        {/* <Space align="center"> */}
        <Row gutter={16}>
          <Col span="6">
            <Button danger>Danger Button</Button>
          </Col>

          <Col span="6">
            <Button danger disabled>
              {" "}
              Danger default Button
            </Button>
          </Col>
          <Col span="6">
            <Button type="link" danger>
              Dashed text
            </Button>
          </Col>
          <Col span="4">
            <Button danger type="text">
              Danger text
            </Button>
          </Col>
        </Row>
        {/* </Space> */}
      </div>
      <Divider orientation="left">Buttons with icons</Divider>
      <Button type="text">
        For more icons visit
        <Button type="link">https://ant.design/components/icon/</Button>
      </Button>
      <div className="space-align-container">
        {/* <Space align="center"> */}
        <Row gutter={16}>
          <Col span="6">
            <Button type="primary" icon={<DownloadOutlined />}>
              Download
            </Button>
          </Col>

          <Col span="6">
            <Button icon={<DeleteFilled />}>Delete Button</Button>
          </Col>
          <Col span="6">
            <Button danger icon={<InstagramFilled />}>
              Instagram
            </Button>
          </Col>
          <Col span="4">
            <Button disabled>
              Login
              <RightOutlined />
            </Button>
          </Col>
        </Row>
        {/* </Space> */}
      </div>
      <Divider orientation="left">Buttons with loaders</Divider>

      <div className="space-align-container">
        {/* <Space align="center"> */}
        <Row gutter={16}>
          <Col span="6">
            <Button type="primary" icon={<DownloadOutlined />} loading>
              Download
            </Button>
          </Col>

          <Col span="6">
            <Button icon={<DeleteFilled />} loading>
              Delete Button
            </Button>
          </Col>
        </Row>
        {/* </Space> */}
      </div>
      {/* </Content> */}
      {/* </Layout> */}
      <Divider orientation="left">Buttons with sizes</Divider>

      <div className="space-align-container">
        {/* <Space align="center"> */}
        <Row gutter={16}>
          <Col span="6">
            <Button type="primary" size="small">
              Small button
            </Button>
          </Col>

          <Col span="6">
            <Button size="medium">Medium Button</Button>
          </Col>
          <Col span="6">
            <Button danger size="large">
              Large Button
            </Button>
          </Col>
        </Row>
        {/* </Space> */}
      </div>
    </>
  );
};

export default memo(Buttons);
