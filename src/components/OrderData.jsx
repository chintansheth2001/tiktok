import React from "react";
import {
  ArrowsUpDownIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";

export const OrderData = ({ orderValue, setOrderValue }) => {
  const handleSetOrderValue = (c) => {
    setOrderValue({
      orderCol: c,
      isAsc: c != orderValue.orderCol ? true : !orderValue.isAsc,
    });
    console.log("After set :", orderValue, c);
  };

  const handleIconOrder = (c) => {
    let IconComponent = <ArrowsUpDownIcon className="w-4 h-4" />;
    if (c === orderValue.orderCol && orderValue.isAsc) {
      IconComponent = <ArrowUpIcon className="w-4 h-4" />;
    }
    if (c === orderValue.orderCol && !orderValue.isAsc) {
      IconComponent = <ArrowDownIcon className="w-4 h-4" />;
    }
    return IconComponent;
  };

  return (
    <div className="flex justify-center">
      <button
        className="my-4 px-4 py-2 font-semibold text-sm border border-gray-400 hover:bg-gray-400  flex content-center gap-2"
        onClick={() => {
          handleSetOrderValue("create_time");
        }}
      >
        Date {handleIconOrder("create_time")}
      </button>
      <button
        className="my-4 px-4 py-2 font-semibold text-sm border border-gray-400 hover:bg-gray-400  flex content-center gap-2"
        onClick={() => {
          handleSetOrderValue("title");
        }}
      >
        Title {handleIconOrder("title")}
      </button>

      <button
        className="my-4 px-4 py-2 font-semibold text-sm border border-gray-400 hover:bg-gray-400  flex content-center gap-2"
        onClick={() => {
          handleSetOrderValue("play_count");
        }}
      >
        Play {handleIconOrder("play_count")}
      </button>

      <button
        className="my-4 px-4 py-2 font-semibold text-sm border border-gray-400 hover:bg-gray-400  flex content-center gap-2"
        onClick={() => {
          handleSetOrderValue("comment_count");
        }}
      >
        Comment {handleIconOrder("comment_count")}
      </button>
      <button
        className="my-4 px-4 py-2 font-semibold text-sm border border-gray-400 hover:bg-gray-400 flex content-center gap-2"
        onClick={() => {
          handleSetOrderValue("download_count");
        }}
      >
        Download {handleIconOrder("download_count")}
      </button>
    </div>
  );
};

export const orderVideos = (videos, orderValue) => {
  let argVideos = videos;

  //Order by time
  if (orderValue.orderCol === "create_time") {
    argVideos = videos.sort((a, b) => {
      let da = new Date(a.create_time * 1000),
        db = new Date(b.create_time * 1000);
      return orderValue.isAsc ? da - db : db - da;
    });
  }

  if (
    orderValue.orderCol === "play_count" ||
    orderValue.orderCol === "comment_count" ||
    orderValue.orderCol === "download_count"
  ) {
    argVideos = videos.sort((a, b) => {
      let na = a[orderValue.orderCol],
        nb = b[orderValue.orderCol];
      return orderValue.isAsc ? nb - na : na - nb;
    });
  }

  if (orderValue.orderCol === "title") {
    argVideos = videos.sort((a, b) => {
      let sa = a[orderValue.orderCol].toLowerCase(),
        sb = b[orderValue.orderCol].toLowerCase();
      return orderValue.isAsc ? sa.localeCompare(sb) : sb.localeCompare(sa);
    });
  }

  return argVideos;
};
