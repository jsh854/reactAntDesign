import { memo } from "react";
import { Input, Row, Col, Divider } from "antd";
import {
  DownloadOutlined,
  AudioOutlined,
  LockOutlined,
} from "@ant-design/icons";

//
const outlinedlock = <LockOutlined style={{ color: "#1890ff" }} />;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const Inputs = () => {
  return (
    <>
      <div>
        <Divider orientation="center">Input sizes</Divider>
        <Row gutter="16" justify="center">
          <Col span="7">
            <Input size="large" placeholder="large size input" />
          </Col>
          <Col span="7">
            <Input size="small" placeholder="small size input" />
          </Col>
          <Col span="7">
            <Input placeholder="default size input" />
          </Col>
        </Row>
        <Divider orientation="center">Input with icons</Divider>
        <Row gutter="16" justify="center">
          <Col span="7">
            <Input
              size="large"
              placeholder="input with icon"
              prefix={<DownloadOutlined />}
            />
          </Col>
          <Col span="7">
            <Input placeholder="small size input" suffix={outlinedlock} />
          </Col>
          <Col span="7">
            <Input placeholder="audio " suffix={suffix} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default memo(Inputs);
