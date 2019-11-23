import React from 'react'
import PropTypes from 'prop-types';

class Research extends React.Component {
    render() {
        return (
          <div className="education_div">
            <h3>
              {this.props.job.location}
            </h3>
            <h4>
              {this.props.job.titleAndJob}
            </h4>
            <h5>{this.props.job.date}</h5>
            <ul>
              {
                this.props.job.responsibilities.map(res =>
                  <li>
                    {res}
                  </li>
                )
              }
            </ul>
          </div>
        )
    }
}

Research.propTypes = {
  job: PropTypes.shape({
    location: PropTypes.string.isRequired,
    titleAndJob: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Research
