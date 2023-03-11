import React from "react";
import {
  PlayIcon,
  ArrowDownIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/outline";
import { convertDate, trancateString, intToString } from "./utils";

export const Card = ({ video }) => {
  return (
    <div>
      <div
        className="relative w-full h-60 bg-cover bg-center bg-no-repeat rounded relative"
        style={{
          backgroundImage: `url(${video.cover})`,
        }}
      >
        <span className="absolute bottom-2  left-2 text-white font-bold">
          {convertDate(video.create_time)}
        </span>
      </div>
      <div className="text-sm mb-2 h-16">{trancateString(video.title, 50)}</div>
      <div className="flex text-sm  justify-between mb-2">
        <div className="flex  gap-1 align-center">
          <img
            src={video.author.avatar}
            alt={video.author.nickname}
            className="w-4 h-4"
          />
          {video.author.nickname}
        </div>
        <div className="flex  gap-1 align-center">
          <PlayIcon className="w-4 h-4" />
          {intToString(video.play_count)}
        </div>
      </div>
      <div className="flex text-sm  justify-between">
        <div className="flex  gap-1 align-center">
          <ChatBubbleOvalLeftIcon className="w-4 h-4" />
          {video.comment_count}
        </div>
        <div className="flex  gap-1 align-center">
          <ArrowDownIcon className="w-4 h-4" />
          {intToString(video.download_count)}
        </div>
      </div>
    </div>
  );
};
