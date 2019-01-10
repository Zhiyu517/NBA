import React from 'react';
import {ShotChart} from "./ShotChart"
import {Slider, InputNumber, Row, Col, Radio, Switch} from 'antd'
import _ from 'lodash'

const RadioGroup = Radio.Group;
export class DataViewContainer extends React.Component {
    state = {
        minCount: 1,
        chartType: "hexbin",
        displayToolTip : true
    }

    onChangeValue = (value) => {
        this.setState({
            minCount: value
        });
    }
    onChartTypeChange = (e) => {
        this.setState({
            chartType: e.target.value
        })
    }
    onTooltipChange = (value) => {
        this.setState({
            displayToolTip:value
        })
    }
    render() {
        const { minCount , chartType} = this.state;

        return (
            <div className="data-view">
                <ShotChart
                playerId={this.props.playerId}
                minCount={this.state.minCount}
                displayToolTip={this.state.displayToolTip}
                chartType={this.state.chartType}
                />
                {
                    this.state.chartType === "hexbin" ?
                        (
                        <Row>
                        <Col offset={4} span={12}>
                            <Slider
                                min={1}
                                max={20}
                                onChange={_.debounce(this.onChangeValue, 500)}
                                // onChange={this.onChange}
                                value={typeof minCount === 'number' ? minCount : 0}
                            />
                        </Col>
                        <Col span={4}>
                            <InputNumber
                                min={1}
                                max={20}
                                style={{ marginLeft: 16 }}
                                value={minCount}
                                onChange={this.onChangeValue}
                            />
                        </Col>
                    </Row>) : null

                }

                <RadioGroup onChange={this.onChartTypeChange} value = {chartType}>
                    <Radio value = "hexbin">Hexbin </Radio>
                    <Radio value = "scatter">Scatter</Radio>
                </RadioGroup>
                <Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked onChange = {this.onTooltipChange}/>
            </div>

        );
    }
}



