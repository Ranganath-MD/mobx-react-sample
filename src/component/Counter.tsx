import { useStore } from "../context/store";
import React from "react";
import { observer } from "mobx-react";

export const Counter: React.FC = observer(() => {
  const { appCounter } = useStore();
  return (
    <div>
      <button
        onClick={() => appCounter.decrement()}
      >
        Decrement
      </button>
      <span>
        The Square of {appCounter.value} is {appCounter.square}
      </span>
      <button
        onClick={() => appCounter.increment()}
      >
        Increment
      </button>
    </div>
  );
});
