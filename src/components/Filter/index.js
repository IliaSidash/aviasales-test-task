import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { changeStops } from '../../ac';
import Checkbox from './Checkbox';

const filters = [
  { stops: 0, label: 'Без пересадок' },
  { stops: 1, label: '1 пересадка' },
  { stops: 2, label: '2 пересадки' },
  { stops: 3, label: '3 пересадки' }
];

const Checkboxes = styled.div`
  margin: 0 -15px;
`;

class StopsFilter extends Component {
  handleOnlyClick = (e, stopsCount) => {
    const { stops, changeStops } = this.props;

    const stopsArr = Object.values(stops).map(
      (stop, index) => index === stopsCount
    );

    changeStops(
      stopsArr.reduce((acc, stop, index) => ({ ...acc, [index]: stop }), {})
    );
  };

  handleChangeStops = (index) => {
    const { stops, changeStops } = this.props;

    const stopsKeys = Object.keys(stops);
    const stopsValues = Object.values(stops);

    const activeAllFilters =
      stopsKeys.filter((stop) => stops[stop]).length === stopsValues.length;

    if (isNaN(index)) {
      const stopsCopy = { ...stops };
      stopsKeys.forEach((key) => (stopsCopy[key] = !activeAllFilters));

      changeStops(stopsCopy);
    } else {
      changeStops({ ...stops, [index]: !stops[index] });
    }
  };

  render() {
    const { stops } = this.props;
    const stopsKeys = Object.keys(stops);
    const stopsValues = Object.values(stops);
    const activeAllFilters =
      stopsKeys.filter((stop) => stops[stop]).length === stopsValues.length;

    return (
      <Checkboxes>
        <Checkbox
          active={activeAllFilters}
          handleChangeStops={this.handleChangeStops}
          label="Все"
        />
        {filters.map((filter) => (
          <Checkbox
            key={filter.stops}
            stopsCount={filter.stops}
            active={stops[filter.stops]}
            handleChangeStops={this.handleChangeStops}
            handleOnlyClick={this.handleOnlyClick}
            label={filter.label}
            only
          />
        ))}
      </Checkboxes>
    );
  }
}

export default connect(
  (state) => ({ stops: state.stops }),
  { changeStops }
)(StopsFilter);
