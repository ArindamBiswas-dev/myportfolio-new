import { Box, Flex, Heading } from '@chakra-ui/react';
import { projects } from '../localData';
import React from 'react';
import style from '../styles/homePage.module.css';
import ProjectCard from './ProjectCard';

function AllProjects() {
  return (
    <Box
      pb="6"
      d="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      paddingTop="70px"
      id="project"
    >
      <div
        className={style.divContainer}
        style={{
          flexDirection: 'column',
          textAlign: 'start',
        }}
      >
        <Box textAlign="start" w="100%" mb="10" mt="2">
          <Heading className={style.headingFont} size="lg">
            My Projects
          </Heading>
        </Box>
        <Flex
          justifyContent={{ base: 'center', sm: 'space-between' }}
          w="100%"
          flexWrap="wrap"
          alignItems="center"
          alignContent="center"
        >
          {projects.map((project, index) => {
            return (
              <ProjectCard
                title={project.title}
                des={project.description}
                githubLink={project.githubLink}
                liveUrl={project.liveUrl}
                imageUrl={project.imageUrl}
                key={index}
              />
            );
          })}
        </Flex>
      </div>
    </Box>
  );
}

export default AllProjects;
