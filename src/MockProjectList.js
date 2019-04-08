import React from 'react';
import Project from './Project';

class ProjectList extends React.Component {
  projects() {
    return [
      { title: 'UXR Matching App - Digital Prototype', summary: 'a summary' },
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
