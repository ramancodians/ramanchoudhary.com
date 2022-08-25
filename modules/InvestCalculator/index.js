import React, { useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import { UserOutlined } from '@ant-design/icons';
import { addYears } from "date-fns"
import { Chart } from "react-charts"
import {
  Input,
  Button,
  Slider,
  Form,
  Radio,
} from 'antd';
import { getROI } from "./utils"
import { isEmpty } from "lodash";

const Wrap = styled.div`
  text-align: center;
  padding: 20px;
  margin: 20px;

  > h1 {
    font-weight: bold;
    text-transform: uppercase;
  }

  .ant-form-item-label {
    text-align: center;
    > label {
      font-size: 20px;
      font-weight: bold;
    }
  }
`


const InvestCalculator = (props) => {
  const [ isClient, setIsClient ] = useState(false)
  const [ form ] = Form.useForm()
  const [ ROIs, setROIs ] = useState([])

  useEffect(() => {
    setIsClient(true)
  }, [])
  const primaryAxis = useMemo(() => ({
      getValue: datum => datum.date,
    }),[]
  )

  const secondaryAxes = useMemo(() => [{
        getValue: datum => datum.value,
        elementType: "area"
      },
    ], []
  )
  
  const handleSumit = (values) => {
    // const now = new Date()
    // const range = {
    //   start: now,
    //   years: 20,
    // }
    // const data = getROI(values, range)
  }


  return (
    <Wrap>
      <h1>Investment Calculator</h1>
      <Form
        name="investment-form"
        layout="vertical"
        onFinish={(values) => {
          console.log(values);
        }}
        onValuesChange={(values) => {

        }}
      >
        <Form.Item
          label="How you want to invest?"
          name="frequency"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Radio.Group>
            <Radio.Button value="monthly" type="primary">
              Monthly
            </Radio.Button>
            <Radio.Button value="annual" type="primary">
              Annual
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="duration"
          label="For how long you want to invest?"
        >
          <Slider min={2} max={40}/>
        </Form.Item>
        <Form.Item
          name="amount"
          label="How much you want invest?"
        >
          <Input placeholder="₹10,000" size="large"/>
        </Form.Item>
        <Form.Item
          label="How much risk you can take?"
          name="risk"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Radio.Group>
            <Radio.Button value="low">
              Low
            </Radio.Button>
            <Radio.Button value="mid">
              Mid
            </Radio.Button>
            <Radio.Button value="high">
              High
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Do you want tax saving?"
          name="isTaxSaving"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Radio.Group>
            <Radio.Button value={true}>
              Yes
            </Radio.Button>
            <Radio.Button value={false}>
              Mid
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Button size="large" type="primary" htmlType="submit">
          Calculate
        </Button>
      </Form>
      {!isEmpty(ROIs) && (
        <Chart
          options={{
            data: ROIs,
            primaryAxis,
            secondaryAxes,
          }}
        />
      )}
      
    </Wrap>
  )
}

export default InvestCalculator