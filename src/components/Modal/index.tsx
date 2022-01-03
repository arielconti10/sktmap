import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';

interface ModalProps {
  isOpen: boolean;
}

const Modal = ({isOpen}: ModalProps) => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  useEffect(() => {
    if(isOpen) {
      onOpen();
    }
  }, [isOpen])

  return (
    <>
      <Modalize ref={modalizeRef}>
        <Text>
          ...your content
        </Text>
      </Modalize>
    </>
  );
};

export default Modal