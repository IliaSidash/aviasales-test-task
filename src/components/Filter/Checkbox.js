import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  display: none;
`;

const Only = styled.span`
  margin-left: auto;

  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  color: #2196f3;
  opacity: 0;

  &:hover {
    color: #ff8124;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  padding: 0 15px;

  line-height: 35px;
  font-size: 13px;

  color: #4a4a4a;
  cursor: pointer;

  &:hover {
    background-color: #f1fcff;

    ${Only} {
      opacity: 1;
    }
  }
`;

const CustomCheckbox = styled.span`
  position: relative;
  display: block;
  margin-right: 11px;
  width: 19px;
  height: 19px;

  border: 1px solid;
  border-color: ${({ checked }) => (checked ? '#2196F3' : '#d2d5d6')}
  border-radius: 3px;
`;

const Svg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.4s;

  opacity: ${(props) => (props.checked ? '1' : '0')};
`;

class Checkbox extends Component {
  handleCheckboxClick = () => {
    const { handleChangeStops, stopsCount } = this.props;

    handleChangeStops(stopsCount);
  };

  handleClick = () => {
    const { handleOnlyClick, stopsCount } = this.props;
    handleOnlyClick(stopsCount);
  };

  render() {
    const { active, label, only } = this.props;
    return (
      <Label>
        <Input
          type="checkbox"
          checked={active}
          onChange={this.handleCheckboxClick}
        />
        <CustomCheckbox checked={active}>
          <Svg width={9} height={7} fill="none" checked={active}>
            <path
              d="M1.5 3.5l2 2 4-4"
              stroke="#3E9CE8"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </CustomCheckbox>
        {label}
        {only && <Only onClick={this.handleClick}>Только</Only>}
      </Label>
    );
  }
}

export default Checkbox;
