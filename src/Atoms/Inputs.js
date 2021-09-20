import { memo } from "react";
import { Input, Row, Col, Divider, Space, Mentions, Switch } from "antd";
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
const { Option } = Mentions;
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
        <Divider orientation="center">Password</Divider>
        <Space direction="horizontal">
          <Input.Password placeholder="Enter secret password" size="large" />
        </Space>
        <Divider orientation="center">Both side icons</Divider>
        <Space direction="horizontal">
          <Input
            placeholder="username"
            prefix={suffix}
            suffix={outlinedlock}
            bordered
            type="datetime-local"
          />
        </Space>
        <Divider orientation="center">Mentions</Divider>
        <Space direction="horizontal">
          <Mentions style={{ width: "100%" }} defaultValue="@user1">
            <Option value="user2">user2</Option>
            <Option value="user3">user3</Option>
            <Option value="user4">user4</Option>
          </Mentions>
        </Space>
        <Divider orientation="center">Toggle</Divider>
        <Space direction="horizontal">
          <Switch defaultChecked />
        </Space>
      </div>
    </>
  );
};

export default memo(Inputs);
