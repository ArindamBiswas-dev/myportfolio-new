import { Box, Circle, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { data, fnl, programmingLanguages, snt } from '../localData';
import style from '../styles/homePage.module.css';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaLinux,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiTypescript,
} from 'react-icons/si';

function Skills() {
  return (
    <Box d="flex" justifyContent="center" bg="#180537">
      <div className={style.divContainer}>
        <Flex w="100%">
          <Box
            p="6"
            w={{ base: '100%', sm: '60%' }}
            bg="white"
            transform="translateY(-50px)"
            boxShadow="dark-lg"
            borderRadius="sm"
          >
            <Stack width="100%" direction="column">
              <Box mb="6">
                <Heading mb="6" className={style.headingFont}>
                  Skills
                </Heading>
                <Text fontSize="lg" className={style.normalFont}>
                  These are are things I have worked with.
                </Text>
              </Box>
              <Flex justify="space-between" wrap="wrap">
                <SkillBlocks
                  title="Programming languages"
                  itemsArray={programmingLanguages}
                />
                <SkillBlocks title="Data" itemsArray={data} />
              </Flex>
              <Flex justify="space-between" wrap="wrap">
                <SkillBlocks
                  title="Frameworks &#38; Libraries"
                  itemsArray={fnl}
                />
                <SkillBlocks
                  title="Other Skills &#38; Tools"
                  itemsArray={snt}
                />
              </Flex>
            </Stack>
          </Box>
          <Box
            p="3"
            mt="6"
            ml="6"
            flexDirection="column"
            h="500px"
            justifyContent="space-between"
            alignItems="center"
            w="25%"
            flexWrap="wrap"
            display={{ base: 'none', sm: 'flex' }}
          >
            <CircleIconDiv icon={<FaReact />} />
            <CircleIconDiv icon={<SiJavascript />} />
            <CircleIconDiv icon={<FaHtml5 />} />
            <CircleIconDiv icon={<FaCss3Alt />} />
            <CircleIconDiv icon={<FaNodeJs />} />
            <CircleIconDiv icon={<SiMongodb />} />
            <CircleIconDiv icon={<FaGitAlt />} />
            <CircleIconDiv icon={<SiMysql />} />
            <CircleIconDiv icon={<SiFirebase />} />
            <CircleIconDiv icon={<FaJava />} />
            <CircleIconDiv icon={<FaLinux />} />
            <CircleIconDiv icon={<SiTypescript />} />
          </Box>
        </Flex>
      </div>
    </Box>
  );
}

function SkillBlocks({ title, itemsArray }) {
  return (
    <Box width={{ base: '100%', md: '45%' }} mb="6">
      <Heading mb="6" className={style.headingFont} size="md">
        {title}
      </Heading>
      {itemsArray &&
        itemsArray.map((item, index) => {
          return (
            <Text fontSize="md" className={style.normalFont} mb="2" key={index}>
              {item}
            </Text>
          );
        })}
    </Box>
  );
}

function CircleIconDiv({ icon }) {
  return (
    <Circle
      p="2"
      h="70px"
      w="70px"
      bg="white"
      fontSize="30px"
      fontWeight="bold"
    >
      {icon}
    </Circle>
  );
}

export default Skills;
