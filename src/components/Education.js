import React from 'react'
import PropTypes from 'prop-types';

class Education extends React.Component {
    render() {
        return (
          <div className="education_div">
            <a href={this.props.school.url} rel="noopener noreferrer" target="_blank">
              <img src={this.props.school.image} className="education_image" />
            </a>
            <h3>
              {this.props.school.degree}
            </h3>
            <h4>{this.props.school.thesis}</h4>
            <p>{this.props.school.content}</p>
            {!!this.props.learnMore &&
              <ul className="actions">
                <li><a href="#" className="button">Learn More</a></li>
              </ul>
            }
          </div>
        )
    }
}

Education.propTypes = {
  school: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
  }).isRequired,
  learnMore: PropTypes.shape({
    url: PropTypes.string
  }),
};

export default Education
