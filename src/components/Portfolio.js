import * as React from 'react';

const projects = [
  { title: 'First Project', description: 'A wonderful project' },
  { title: 'Second Project', description: 'Another great project' }
];

export default function Portfolio() {
  return (
    <section>
      <h2>Portfolio Starter Library</h2>
      <ul>
        {projects.map(project => (
          <li key={project.title}>
            <strong>{project.title}</strong> - {project.description}
          </li>
        ))}
      </ul>
    </section>
  );
}
