import { useLayoutEffect } from "react";
import { useState } from "react";
import { createPortal } from "react-dom";

import createWrapperAndAppendToBody from "./createWrapperAndAppendToBody";

function Portal({ children, wrapperId = "pawa-portal-wrapper" }) {
    const [wrapperElement, setWrapperElement] = useState(null);
    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let systemCreated = false;

    if (!element) {
        systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return ()=>{
        if (systemCreated && element.parentNode) {
            element.parentNode.removeChild(element);
        }
    }
  }, [wrapperId]);
  if (!wrapperElement) return null;

  return createPortal(children, wrapperElement);
}

export default Portal;
