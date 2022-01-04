import React, { forwardRef, Ref, useMemo } from "react";

import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Spot } from "../../shared/types";
import { SpotDetail } from "@components/SpotDetail";

interface ModalProps {
  ref: React.RefObject<BottomSheetModal>;
  data: Spot;
}

export const Modal = forwardRef(
  ({ data }: ModalProps, ref: Ref<BottomSheetModal>) => {
    const snapPoints = useMemo(() => ["25%", "50%", "98%"], []);

    return (
      <>
				{data && (
					<BottomSheetModal 
            ref={ref} 
            index={0} 
            snapPoints={snapPoints}
            onAnimate={(fromIndex, toIndex) => {
              console.log(fromIndex, toIndex)
            }}
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 1,
              shadowRadius: 16.00,
              
              elevation: 20,
            }}
          >
          <SpotDetail spot={data}/>
        </BottomSheetModal>
				)}
      </>
    );
  }
);
