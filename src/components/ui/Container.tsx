import React from "react";

const Container = ({
  children,
  className,
  ContainerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  ContainerClassName?: string;
}) => {
  return (
    <div className={ContainerClassName}> 
      <div className={`max-w-7xl mx-auto p-4 ${className}`}>{children}</div>
    </div>
  );
};

export default React.memo(Container);
