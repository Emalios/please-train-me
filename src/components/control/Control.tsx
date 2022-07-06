import React, {Dispatch, SetStateAction} from "react";
import {Button} from "@mantine/core";

interface Control {
    setStarted:  React.Dispatch<React.SetStateAction<boolean>>
}

const Control = ({ setStarted }: Control) => {
  return (
      <div>
          <Button
              className="start-button"
              onClick={() => (setStarted((actualValue) => !actualValue))}
          >
              Start
          </Button>
      </div>
  )
}

export default Control