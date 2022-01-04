import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { forwardRef, Ref, useCallback, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ModalProps {
  ref: React.RefObject<BottomSheetModal>;
  data: any;
}

export const Modal = forwardRef((props: ModalProps, ref: Ref<BottomSheetModal>) => {
  const snapPoints = useMemo(() => ['25%', '50%', '98%'], []);
  
  const handleSheetChanges = useCallback(() => (index: number) => {
    console.log(index);
  }, []);

  return (
    <>
      <BottomSheetModal
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheetModal>
    </>
  );
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

