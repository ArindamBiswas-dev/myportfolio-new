import { Box, Heading } from '@chakra-ui/react';
import style from '../styles/homePage.module.css';
import React from 'react';

function CustomeButton({
  text,
  link,
  color,
  bg,
  hColor,
  hBg,
  isBorder,
  ...rest
}) {
  const border = !isBorder ? 'none' : `3px solid ${hBg}`;
  return (
    <a href={link}>
      <Box
        px="6"
        py="3"
        bg={bg}
        rounded="sm"
        color={color}
        transition="all 0.3s"
        _hover={{
          bg: `${hBg}`,
          color: `${hColor}`,
          border: `${border}`,
        }}
        my="2"
        mr="3"
        {...rest}
      >
        <Heading
          className={style.headingFont}
          fontWeight="extrabold"
          fontSize="xl"
        >
          {text}
        </Heading>
      </Box>
    </a>
  );
}

export default CustomeButton;
