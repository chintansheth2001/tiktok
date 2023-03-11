import React, { useState } from "react";
import { intToString } from "./utils";

export const UserInfo = ({ user, stats, handleSidepanel, filterOpen }) => {
  const handleSidePanel = () => {
    handleSidepanel(!filterOpen);
  };
  return (
    <div className="flex flex-col justify-center items-center mt-20 my-6">
      <div
        className="w-16 h-16 bg-cover bg-center bg-no-repeat rounded-full"
        style={{ backgroundImage: `url(${user.avatarThumb})` }}
      ></div>
      <span className="my-3">{user.nickname}</span>

      <div className="flex text-sm gap-4">
        <div className="flex flex-col items-center w-20">
          <span className="font-bold">{intToString(stats.followingCount)}</span>
          <span>Following</span>
        </div>
        <div className="flex flex-col items-center w-20">
          <span className="font-bold">{intToString(stats.followerCount)}</span>
          <span>Followers</span>
        </div>
        <div className="flex flex-col items-center w-20">
          <span className="font-bold">{intToString(stats.heartCount)}</span>
          <span>Likes</span>
        </div>
      </div>

      <button
        onClick={() => handleSidePanel()}
        className={`my-5 px-5 py-2 font-semibold text-sm border border-gray-400 hover:bg-gray-400 ${
          filterOpen && " text-white bg-black"
        }`}
      >
        Filter
      </button>
    </div>
  );
};
