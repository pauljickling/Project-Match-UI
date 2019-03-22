import React from 'react';
import Project from './Project';

class ProjectList extends React.Component {
  projects() {
    return [
      { title: 'UXR Matching App - Digital Prototype' },
      { title: 'ShelterTech' },
      { title: 'Roadmap to HTML' },
      { title: 'California OpenJustice' },
      { title: 'The Data Science Working Group' },
      { title: 'Brigadehub' },
      { title: 'Adopt-a-Drain' },
    ];
  }
  render() {
    return (
      <div class="container well">
        <h1>Project List</h1>
        {this.projects().map((project, key) =>
          <Project key={key} {...project} />
        )}
      </div>
    );
  }
}

export default ProjectList;
