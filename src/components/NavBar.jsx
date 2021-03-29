import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import React from 'react';
import style from '../styles/homePage.module.css';
import CustomDrawer from '../components/CustomDrawer';

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      className={style.gradientBg}
      pb="1.5"
      position="sticky"
      top="0"
      zIndex="2"
    >
      <Box bg="#180537" py="3" d="flex" justifyContent="center">
        <div className={style.divContainer}>
          <nav className={style.navClass}>
            <div>
              <Link href="#" className={style.linkClass} color="white">
                <Heading className={style.headingFont} size="md">
                  Arindam Biswas
                </Heading>
              </Link>
            </div>
            <Flex d={{ base: 'none', md: 'flex' }}>
              <Flex color="whitesmoke">
                <Text className={style.headingFont} m="2" fontSize="lg">
                  <Link href="#">Home</Link>
                </Text>
                <Text className={style.headingFont} m="2" fontSize="lg">
                  <Link href="#skill">Skill</Link>
                </Text>
                <Text className={style.headingFont} m="2" fontSize="lg">
                  <Link href="#project">Project</Link>
                </Text>
                <Text className={style.headingFont} m="2" fontSize="lg">
                  <Link href="#contact">Contact</Link>
                </Text>
              </Flex>
            </Flex>
            <Flex ml="2" d={{ base: 'flex', sm: 'flex', md: 'none' }}>
              <IconButton
                aria-label="Search database"
                size="md"
                icon={<GiHamburgerMenu fontSize="25px" />}
                mr="2"
                onClick={onOpen}
              />
            </Flex>
          </nav>
        </div>
      </Box>
      <CustomDrawer isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export default NavBar;
