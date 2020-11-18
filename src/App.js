import React, { useEffect, useState } from 'react';
import api from './services/api';

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
    })
  }, [])

  const handleAddProject = async () =>{
    const newProject = {
      title: 'new project',
      owner: 'JF'
    };
    const response = await api.post('projects', newProject);
    const { project } = response.data;
    setProjects([...projects, project])
  }

  return (
    <>
      {projects?.map(project => <h2 key={project.id}>{project.title}</h2>)}
      <button type="button" onClick={handleAddProject}>ADD PROJECT</button>
    </>
  )
}

export default App;