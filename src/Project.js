import React from 'react';

class Project extends React.Component {
  render() {
    let { title } = this.props;
    return (
      <div class="well">
        <h5>{title}</h5>
      </div>
    );
  }
}

export default Project;
