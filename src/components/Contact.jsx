import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';
import style from '../styles/homePage.module.css';

function Contact() {
  return (
    <Flex
      w="100%"
      justify="center"
      alignItems="center"
      py="6"
      bg="#e6e6e6"
      id="contact"
    >
      <div className={style.divContainer} style={{ justifyContent: 'center' }}>
        <Box maxW="700px" textAlign="center">
          <Heading className={style.headingFont} mb="5">
            Say hello! &#128075;
          </Heading>
          <Text className={style.normalFont} mb="2">
            If you want to talk to me about something that could interest me,
            you can send me an email at{' '}
            <Text as="u">
              <Link
                color="#2730B3"
                href="mailto:arindambiswas616@gmail.com"
                fontWeight="bold"
              >
                arindambiswas616@gmail.com
              </Link>
            </Text>
          </Text>
        </Box>
      </div>
    </Flex>
  );
}

export default Contact;
