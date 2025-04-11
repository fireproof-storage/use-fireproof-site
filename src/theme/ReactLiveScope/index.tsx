import React from 'react';
import { useFireproof } from "use-fireproof";

// Add react-live imports you need here
const ReactLiveScope = {
  useFireproof,
  React,
  ...React,
};

export default ReactLiveScope;
