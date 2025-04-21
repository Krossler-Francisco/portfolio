import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Importando os componentes do react-router
import ContactForm from './components/contactForm';
import MessagesList from './components/MessagesList'; // Importe o novo componente MessagesList

function App() {
  const myProjects = [
    {
      id: 1,
      name: 'Religare Project',
      technologies: 'React',
      description: 'A React web page for a social therapy project, allowing users to learn more about the initiative and connect with organizers through various communication options.',
      img: './projetoreligare.png',
      linktopage: 'https://krossler-francisco.github.io/projetoreligare/'
    },
    {
      id: 2,
      name: 'Gangain',
      technologies: 'React',
      description: 'A React-based project designed to attract customers to an e-commerce platform offering home products, showcasing a user-friendly interface and engaging features to boost conversions.',
      img: './gangain.jpg',
      linktopage: 'https://gangain.vercel.app/'
    }
  ];

  const specialization = [
    {
      id: 1,
      name: 'MongoDB',
      img: 'https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png',
      link: 'https://www.mongodb.com/'
    },
    {
      id: 2,
      name: 'Express',
      img: 'https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png',
      link: 'https://expressjs.com/'
    },
    {
      id: 3,
      name: 'React',
      img: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      link: 'https://react.dev/'
    },
    {
      id: 4,
      name: 'Node',
      img: 'https://th.bing.com/th/id/R.aa6881d013ae850380b437045b7c03b1?rik=RjJN5dxueUSMLA&pid=ImgRaw&r=0',
      link: 'https://nodejs.org'
    },
  ];

  const otherSkills = [
    {
      id: 5,
      name: 'Git',
      img: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'
    },
    {
      id: 6,
      name: 'GitHub',
      img: 'https://img.icons8.com/m_sharp/200/FFFFFF/github.png'
    },
    {
      id: 8,
      name: 'Figma',
      img: 'https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png'
    },
    {
      id: 9,
      name: 'Sass',
      img: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/sass-5.png'
    },
    {
      id: 7,
      name: 'Idx',
      img: 'https://developers.google.com/static/idx/images/icon-192.png?hl=es-419'
    }
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
    <Router>
      <div className="background-bg">
        {Array.from({ length: 600 }).map((_, i) => (
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
            <img width={240} src="./foto.jpg" alt="My image" />
            <p>Links</p>
            <div className="links">
              <a href="https://drive.google.com/file/d/1i9HvCmfdkEmT9tjG8sQ379G9eFbKV6en/view?usp=sharing">
                {/* SVG icon */}
              </a>
              <a href="https://github.com/Krossler-Francisco">
                {/* SVG icon */}
              </a>
              <a href="https://www.instagram.com/krossler_/">
                {/* SVG icon */}
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
              3 years of experience in full stack development <span>MERN</span> stack.
            </p>
            <p>with expertise in scalable web and mobile applications from backend to frontend.</p>
          </div>
          {/* Adicionando o botão de Link para "/messages" */}
          <div>
            <Link to="/messages">
              <button className="message-btn">Go to Messages</button>
            </Link>
          </div>
        </header>

        <Routes>
          <Route path="/" element={
            <>
              <section>
                <div className='projects-container'>
                  <h3>Projects</h3>
                  <h4>Everything you <span>need</span>, you can <span>create</span>!</h4>
                </div>
                <div className="projects">
                  {projects.map((project) => (
                    <a href={project.linktopage} target="_blank" rel="noopener noreferrer" key={project.id} className="project">
                      <h1>{project.name}</h1>
                      <div className="img-container">
                        <img src={project.img} alt={project.name} />
                      </div>
                      <h2>{project.description}</h2>
                    </a>
                  ))}
                </div>
              </section>
              <section>
                <div className='projects-container '>
                  <h4>Stack</h4>
                  <div className='skills stack-container'>
                    {specialization.map((item) => (
                      <a href={item.link} target='_blank' className='stack' key={item.id}>
                        <img className='open-icon' src="https://img.icons8.com/fluent-systems-regular/200/FFFFFF/external-link.png" alt="" />
                        <img src={item.img} alt={item.name} />
                        <span className='skills-name'>
                          <span className='first-letter'>{item.name.charAt(0)}</span>
                          {item.name.slice(1)}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className='projects-container'>
                  <h4>Skills</h4>
                  <div className='skills'>
                    {otherSkills.map((item) => (
                      <li className='fon' key={item.id}><img src={item.img} alt={item.name} /><span className='skills-name-not-color'>{item.name}</span></li>
                    ))}
                  </div>
                </div>
              </section>
              <section>
                <ContactForm />
              </section>
            </>
          } />
          <Route path="/messages" element={<MessagesList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
