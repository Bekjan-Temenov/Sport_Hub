import React from "react";

function Container({ children }) {
  return (
    <div className="w-[95%] max-w-[1200px] sm:w-[90%] md:w-[90%] lg:w-[99%] xl:w-[100%] mx-auto ">
      {children}
    </div>
  );
}

export default Container;