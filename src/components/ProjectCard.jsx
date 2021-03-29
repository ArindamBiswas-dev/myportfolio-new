import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import style from '../styles/homePage.module.css';

function ProjectCard({ title, imageUrl, githubLink, des, liveUrl }) {
  return (
    <Flex
      w={{ base: '100%', sm: '100%', md: '300px', lg: '450px' }}
      h="500px"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      p="4"
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
      my="5"
      rounded="md"
    >
      <Heading size="md" className={style.headingFont}>
        {title}
      </Heading>
      <Image
        src={imageUrl}
        alt="project image"
        h="200px"
        w="100%"
        objectFit="cover"
        border="5px solid #2730B3"
        position="relative"
      />
      <Box h="100px">
        <Text textAlign="justify" className={style.normalFont}>
          {des}
        </Text>
      </Box>
      <Flex
        justify="space-between"
        alignItems="center"
        flexDirection="row"
        w="100%"
      >
        <Link
          href={githubLink}
          color="#2730B3"
          isExternal
          display="flex"
          alignItems="baseline"
          target="_blank"
        >
          <Text mr="5px" className={style.normalFont} fontWeight="semibold">
            Github
          </Text>
          <FaGithub />
        </Link>
        <Link
          href={liveUrl}
          color="#2730B3"
          isExternal
          display="flex"
          alignItems="baseline"
        >
          <Text mr="5px" className={style.normalFont} fontWeight="semibold">
            Live url
          </Text>
          <FaExternalLinkAlt />
        </Link>
      </Flex>
    </Flex>
  );
}

export default ProjectCard;
