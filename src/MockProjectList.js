import React from 'react';
import Project from './Project';

class MockProjectList extends React.Component {
  projects() {
    return [
      { attributes: { name: 'Project Title', description: 'a project summary', todoItems: 'API', progressItems: 'some',
        matchingConfig: { interests: 'civic engagement', skillsNeeded: 'React, Python', skillsOffered: 'MongoDB' }
      },
        attributes: { name: 'Project Title 2', description: 'a different project summary', todoItems: 'mobile app', progressItems: 'none',
        matchingConfig: { interests: 'public transit', skillsNeeded: 'Java, Swift', skillsOffered: 'SQL, Machine Learning'}
      },}
    ];
  }
  render() {
    return (
      <div className="ProjectList">
        <h1>Project List</h1>
        {this.projects().map((project, key) =>
          <Project key={key} {...project} />
        )}
      </div>
    );
  }
}

export default MockProjectList;
