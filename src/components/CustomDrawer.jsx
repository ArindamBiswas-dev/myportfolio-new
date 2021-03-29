import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';
import React from 'react';
import { links } from '../localData';
import { Links } from './Footer';

function CustomDrawer({ onClose, isOpen }) {
  return (
    <Drawer
      placement="left"
      onClose={onClose}
      isOpen={isOpen}
      autoSelect={false}
      autoFocus={false}
    >
      <DrawerOverlay style={{ backgroundColor: 'transparent' }}>
        <DrawerContent zIndex="1" style={{ top: '70.5px', width: '250px' }}>
          <DrawerBody>
            {links.map((item, index) => {
              return (
                <Links
                  text={item.text}
                  href={item.link}
                  key={index}
                  size="md"
                  color="#1E0861"
                />
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}

export default CustomDrawer;
