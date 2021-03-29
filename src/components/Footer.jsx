import { Box, Flex, Heading, Link, Stack } from '@chakra-ui/react';
import React from 'react';
import style from '../styles/homePage.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { links } from '../localData';

function Footer() {
  return (
    <Box
      backgroundImage="linear-gradient(to right, #1e0861 0%, #1e0861 100%),
        linear-gradient(to right, #d3cdf7 0%, #2f39d2 50%, #d3cdf7 100%);"
      backgroundSize="0% calc(100% - 6px), 100% 6px;"
      pt="2"
    >
      <Flex bg="#1E0861" justify="center" py="10">
        <div className={style.divContainer}>
          <Flex justify="space-between" wrap="wrap">
            <Stack w={{ base: '100%', sm: '40%' }}>
              <Heading
                size="xl"
                className={style.headingFont}
                my="2"
                color="white"
              >
                Arindam Biswas
              </Heading>
              <Heading
                className={style.normalFont}
                size="sm"
                lineHeight="1.8"
                color="#e0e0e0"
                my="1"
                mb="3"
              >
                I love to build Web Applications. Learning new things and play
                with them become my habit.
              </Heading>
              <Flex>
                <Box mr="4">
                  <Link
                    href="https://github.com/ArindamBiswas-dev"
                    target="_blank"
                  >
                    <FaGithub size="25px" color="white" />
                  </Link>
                </Box>
                <Box mr="4">
                  <Link
                    href="https://www.linkedin.com/in/arindam-biswas-164b171b6"
                    target="_blank"
                  >
                    <FaLinkedin size="25px" color="white" />
                  </Link>
                </Box>
              </Flex>
            </Stack>
            <Stack w={{ base: '100%', sm: '20%' }} mt={{ base: '10', sm: '0' }}>
              <Heading
                size="xl"
                className={style.headingFont}
                my="2"
                color="white"
              >
                Links
              </Heading>
              {links.map((item, index) => {
                return <Links text={item.text} href={item.link} key={index} />;
              })}
            </Stack>
          </Flex>
        </div>
      </Flex>
    </Box>
  );
}

function Links({ text, href, size, color }) {
  return (
    <Heading
      className={style.normalFont}
      size={size ? size : 'sm'}
      lineHeight="1.8"
      color={color ? color : '#e0e0e0'}
      my="1"
      mb="3"
    >
      <Link href={href} _focus={{ outline: 'none' }}>
        {text}
      </Link>
    </Heading>
  );
}

export default Footer;
export { Links };
