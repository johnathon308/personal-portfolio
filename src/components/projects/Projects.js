import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="CANVAS CLONE"
          des=" Developing a Canvas clone, replicating key features and functionalities of the original platform."
              imgSrc={projectOne}
              gitLink="https://github.com/johnathon308/kanbas-react-web-app"
              globeLink="https://gregarious-conkies-f8438c.netlify.app"
        />
        <ProjectsCard
          title="Tic Tac Toe (TELEPORT)"
          des="Standard functionality of Tic Tac Toe. Incorporated a unique time-travel feature, enabling users to navigate back to specific moves during the game for a more interactive and analytical experience."
          imgSrc={projectTwo}
          gitLink="https://github.com/johnathon308/tic-tac-toe-teleport-app"
          globeLink="https://monumental-blancmange-fcc607.netlify.app"
        />
        {/* <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
              imgSrc={projectThree}
        /> */}
      </div>
    </section>
  );
}

export default Projects