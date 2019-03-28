import React from 'react';

class Project extends React.Component {
  render() {
    let { title } = this.props;
    return (
      <div className="project" style={{border: "1px solid gray", padding: 8, margin: 8}}>
      <div className="projectCols" style={{display: "grid", gridGap: 10, gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))"}}>
        <div className="projectCol1" style={{borderRight: "1px solid gray"}}>
          <h5>{title}</h5>
          <p>summary</p>
          <button>Contact Project Lead</button>
        </div>
        <div className="projectCol2">
          <h5>Project Needs & Interests</h5>
          <p><strong>Skills Needed:</strong></p>
          <p><strong>Learning Opportunities:</strong></p>
          <p><strong>Civic Interests:</strong></p>
        </div>
      </div>
        <details>
          <summary>Show project details</summary>
        </details>
      </div>
    );
  }
}

export default Project;
