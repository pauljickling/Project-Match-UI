import React from 'react';
import Project from './Project';

class MockProjectList extends React.Component {
  projects() {
    return [
      { title: 'UXR Matching App - Digital Prototype', summary: 'Developing a working prototype of a matching app for new Code for SF members', channel: '#research' },
      { title: 'ShelterTech', summary: 'summary 2' },
      { title: 'Roadmap to HTML', summary: 'summary 3' },
      { title: 'California OpenJustice', summary: 'summary 4' },
      { title: 'The Data Science Working Group', summary: 'summary 5' },
      { title: 'Brigadehub', summary: 'summary 6' },
      { title: 'Adopt-a-Drain', summary: 'summary 7' },
    ];
  }
  render() {
    return (
      <div className="ProjectList">
        <h2>Project List</h2>
        {this.projects().map((project, key) =>
          <Project key={key} {...project} />
        )}
      </div>
    );
  }
}

export default MockProjectList;
