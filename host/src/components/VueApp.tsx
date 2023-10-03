import { useEffect, useRef } from "react";
import { mount } from "remote2/VueApp";

const VueApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default VueApp;
