import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const myProjects = [
    {
      id: 1,
      name: 'Religare Project',
      technologies: 'React',
      description: 'Project 1 description',
      img: './projetoreligare.png'
    },
    {
      id: 2,
      name: 'Weather App',
      technologies: 'React',
      description: 'Project 2 description',
      img: './civetta.jpeg'
    },
    {
      id: 3,
      name: 'TodoList',
      technologies: 'Angular',
      description: 'Project 3 description',
      img: './civetta.jpeg'
    },
    {
      id: 4,
      name: 'CivettaMount',
      technologies: 'React',
      description: 'Project 4 description',
      img: './civetta.jpeg'
    },
  ];

  const [projects, setProjects] = useState([]);
  const [clickedSquares, setClickedSquares] = useState({});

  const handleClick = (index) => {
    setClickedSquares((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));

    setTimeout(() => {
      setClickedSquares((prev) => ({
        ...prev,
        [index]: false,
      }));
    }, 100);
  };

  useEffect(() => {
    setProjects(myProjects);
  }, []);

  return (
    <>
      <div className="background-bg">
        {Array.from({ length: 360 }).map((_, i) => (
          <div
            key={i}
            className={clickedSquares[i] ? 'clicked' : ''}
            onClick={() => handleClick(i)}
          ></div>
        ))}
      </div>
      <div className='app'>
        <header className="portfolio-header">
          <div className="header-container">
            <img width={240} src="./public/foto.jpg" alt="My image" />
            <p>Links</p>
            <div className="links">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-download"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="bi bi-github"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.03 7.41c.37.07.5-.16.5-.35 0-.18-.01-.79-.01-1.43-2.03.44-2.46-.49-2.62-.94-.09-.23-.49-.94-.84-1.13-.29-.16-.7-.56-.01-.57.65-.01 1.11.6 1.26.85.74 1.25 1.93.89 2.4.67.07-.54.29-.89.52-1.1-1.75-.2-3.59-.87-3.59-3.87 0-.85.3-1.54.78-2.09-.08-.2-.34-1.01.07-2.1 0 0 .65-.21 2.13.8a7.22 7.22 0 0 1 1.94-.26c.66.01 1.33.09 1.94.26 1.48-1.01 2.13-.8 2.13-.8.41 1.09.15 1.9.07 2.1.48.55.78 1.24.78 2.09 0 3-1.84 3.67-3.6 3.87.3.26.56.77.56 1.55 0 1.12-.01 2.02-.01 2.3 0 .19.13.43.5.35A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.5A4.5 4.5 0 1 0 11.5 16 4.5 4.5 0 0 0 16 11.5z"></path>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h1>Krossler Francisco</h1>
            <h2>
              <span>Full Stack Development</span> <br /> and data analyzing
            </h2>
            <hr />
            <p>
              3 years of experience in full stack development <span>MERN</span> stack.</p>
              <p>with expertise in scalable web and mobile applications from backend to frontend.</p>
          </div>
        </header>
        <section >
          <div className='projects-container'>
            <h3>Projects</h3>
            <h4>
              Everything you <span>need</span>, you can <span>create</span>!
            </h4>
          </div>
          <div className="projects">
  {projects.map((project) => (
    <a href={project.link} target="_blank" rel="noopener noreferrer" key={project.id} className="project">
      <h1>{project.name}</h1>
      <div className="img-container">
        <img src={project.img} alt={project.name} />
      </div>
      <h2>{project.description}</h2>
      <div className="react-icon">
          <img src="https://seeklogo.com/images/R/react-logo-65B7CD91B5-seeklogo.com.png" alt="React Icon" />
        </div>
    </a>
  ))}
</div>

        </section>
        <section>
          <div className='projects-container'>
            <h4>Skills</h4>
            <div>
              <strong>MongoDB</strong>
              <strong>Express</strong>
              <strong>ReactJs</strong>
              <strong>NodeJs</strong>
            </div>
          </div>
        </section>
        <section>
          <div className='projects-container'>
            <h4>Experience</h4>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
