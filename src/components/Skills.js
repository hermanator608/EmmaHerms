import React from 'react'
import PropTypes from 'prop-types';

class Skills extends React.Component {
    render() {
        return (
          <div id={this.props.divId}>
            <h3>Research Skills</h3>
            <ul>
              {
                this.props.info.map(skill =>
                  <li>
                    <h4><i>{skill.headline}</i></h4>
                    <p>{skill.list}</p>
                  </li>
                )
              }
            </ul>
          </div>
        )
    }
}

Skills.propTypes = {
  info: PropTypes.arrayOf(PropTypes.shape({
    headline: PropTypes.string,
    list: PropTypes.string
  })),
  divId: PropTypes.string,
};

export default Skills
