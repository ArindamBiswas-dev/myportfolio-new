import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import style from '../styles/homePage.module.css';
import CustomeButton from './CustomeButton';

function HeroSection() {
  return (
    <Box className={style.outer}>
      <Flex
        bg="#1E0861"
        className={style.inner}
        justify="center"
        minH={{ base: '75vh', md: '50vh' }}
        pb="6"
      >
        <div className={style.divContainer}>
          <Flex minH="80%" wrap="wrap">
            <Box
              d="flex"
              flexDirection="column"
              color="whitesmoke"
              justifyContent="space-evenly"
              order={{ base: '1', md: '0' }}
              width={{ base: '100%', sm: '100%', md: '40%' }}
            >
              <Heading size="xl" className={style.headingFont} my="1">
                Hi, I'm Arindam Biswas
              </Heading>
              <Heading
                className={style.normalFont}
                size="sm"
                lineHeight="1.8"
                color="#e0e0e0"
                my="1"
              >
                I love to build Web Applications. Learning new things and play
                with them become my habit.
              </Heading>
              <Flex wrap="wrap" my="1">
                <div>
                  <CustomeButton
                    text="Contact me"
                    color="#1E0861"
                    bg="whitesmoke"
                    link="#contact"
                    hColor="whitesmoke"
                    hBg="#2F39D2"
                  />
                </div>
                <div>
                  <CustomeButton
                    text="View my works"
                    color="whitesmoke"
                    bg="#1E0861"
                    link="#project"
                    hColor="whitesmoke"
                    hBg="#2F39D2"
                    border="3px solid whitesmoke"
                    py="2.5"
                    isBorder={true}
                  />
                </div>
              </Flex>
            </Box>
            <Box
              width={{ base: '100%', md: '50%' }}
              className={style.picContianerDiv}
            >
              <div className={style.myPictureParent}>
                <div className={style.myPicture}></div>
              </div>
            </Box>
          </Flex>
        </div>
      </Flex>
    </Box>
  );
}

export default HeroSection;
