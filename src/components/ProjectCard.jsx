import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import style from '../styles/homePage.module.css';

function ProjectCard({ title, imageUrl, githubLink, des, liveUrl }) {
  return (
    <Flex
      w={{ base: '100%', sm: '100%', md: '300px', lg: '350px' }}
      h="450px"
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      my="5"
      borderRadius="10px"
      flexDir="column"
    >
      <Image
        src={imageUrl}
        alt="project image"
        h="200px"
        w="100%"
        objectFit="cover"
        borderRadius="10px 10px 40px 0px"
      />
      <Box p="4">
        <Heading size="md" mb="3" className={style.headingFont}>
          {title}
        </Heading>
        <Box h="150px">
          <Text textAlign="justify" className={style.normalFont}>
            {des}
          </Text>
        </Box>
        <Flex
          justify="space-between"
          alignItems="center"
          flexDirection="row"
          w="100%"
          mt="3"
        >
          <Link
            href={githubLink}
            color="#2730B3"
            isExternal
            display="flex"
            alignItems="center"
            target="_blank"
            rel="noreferrer"
            aria-label={`${title}-github`}
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
            alignItems="center"
            rel="noreferrer"
            aria-label={`${title}-liveurl`}
          >
            <Text mr="5px" className={style.normalFont} fontWeight="semibold">
              Live url
            </Text>
            <FaExternalLinkAlt />
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
}

export default ProjectCard;
