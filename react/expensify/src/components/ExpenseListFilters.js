import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    const { filters } = this.props;
    const { text, sortBy, startDate, endDate } = filters;
    const { calendarFocused } = this.state;
    return (
      <div>
        <input
          type="text"
          value={text}
          onChange={e => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          name=""
          id=""
          value={sortBy}
          onChange={e => {
            if (e.target.value === 'amount') {
              this.props.dispatch(sortByAmount());
            } else if (e.target.value === 'date') {
              this.props.dispatch(sortByDate());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={startDate}
          startDateId="startDate"
          endDate={endDate}
          endDateId="endDate"
          onDatesChange={this.onDatesChange}
          focusedInput={calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
