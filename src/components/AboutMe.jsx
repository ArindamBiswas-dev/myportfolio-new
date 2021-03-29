import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import style from '../styles/homePage.module.css';

function AboutMe() {
  return (
    <>
      <Flex
        w="100%"
        justify="center"
        alignItems="center"
        py="6"
        mb="60px"
        id="about"
      >
        <div
          className={style.divContainer}
          style={{ justifyContent: 'center' }}
        >
          <Box maxW="700px" textAlign="center">
            <Heading className={style.headingFont} mb="5">
              Little more about me &#128512;
            </Heading>
            <Text className={style.normalFont} mb="2">
              Currently I am pursuing Bachelor of Computer Science Engineering
              from Brainware University.
            </Text>
            <Text className={style.normalFont} mb="2">
              Developing web applications is my main area if interest. I have
              built several web applications using HTML, CSS, JS and React JS in
              frotend and Node JS, Express JS and MongoDB in backend.
            </Text>
            <Text className={style.normalFont} mb="2">
              Along with these dev. skills I have good grasp in Data Structure
              and Algorithms and fundamental Computer Science subjects.
            </Text>
          </Box>
        </div>{' '}
        <Box id="skill"></Box>
      </Flex>
    </>
  );
}

export default AboutMe;

/* 
  
*/
