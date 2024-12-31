import React from "react";

const loading = () => {
  return (
    <div className="h-screen w-full bg-slate-600/10 flex justify-center items-center">
      <div className="h-60 w-60">
        <div className="h-full animate-spin rounded-full border-[6px] border-t-indigo-500 p-5">
          <div className="bg-black/10 w-full h-full rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
