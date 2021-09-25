import React, { Dispatch, SetStateAction, useCallback } from "react";
import Button from "../common/Button";

type TechSelectType = {
  setClear: Dispatch<SetStateAction<boolean>>;
};

const TechSelect = ({ setClear }: TechSelectType) => {
  const handlePrev = useCallback(() => {
    setClear(false);
  }, [setClear]);

  return (
    <>
      <div>Select the Tech</div>
      <Button>Complete</Button>
    </>
  );
};

export default TechSelect;
