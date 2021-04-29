import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import style from '../styles/homePage.module.css';
import React from 'react';

function ProjectCard2() {
  return (
    <Flex p="6" bgColor="#E6E6E6">
      <Box>
        <Heading size="md" className={style.headingFont}>
          FreeCourseYard
        </Heading>
        <Box my="3" className={style.normalFont}>
          <Text>
            It is a web application which helps to find free online best courses
            from all across the Internet.
          </Text>
          <Text>
            It has features like featching data from node server and display
            them, Dark mode, User Authentication, when a user is logged in
            he/she can add course to feavourite, suggest a course to us.
          </Text>
          <Text>
            It is a web application which helps to find free online best courses
            from all across the Internet.
          </Text>
        </Box>
      </Box>
      <Box></Box>
    </Flex>
  );
}

export default ProjectCard2;
