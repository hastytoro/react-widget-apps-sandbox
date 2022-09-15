import React from "react";

// Step 1
const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // Step 2
    event.preventDefault();
    window.history.pushState({}, "", href);
    // Step 3
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
