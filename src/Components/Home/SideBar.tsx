import React, { useEffect, useState } from 'react';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import './Sidbar.css';
import { StorySlide } from "./StorySlide";
import CreatePost from "./CreatePost";
import AllPost from "./AllPost";

export function SideBar() {
  const data = [
    {
      label: "Home",
      value: "Home",
      data: "This is home",
    },
    {
      label: "News Feed",
      value: "News Feed",
      data: "News Feed",
    },
    {
      label: "Message",
      value: "Message",
      data: "This is Message",
    },
    {
      label: "Setting",
      value: "Setting",
      data: "This is Setting",
    },
  ];

  return (
    <Tabs value="html" orientation="vertical" className="grid grid-cols-5 gap-4 px-8 z-0">
      <div>
        <TabsHeader className="mt-[98px] ">
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
      </div>
      <div className="grid col-span-3 grid-rows-3 gap-2 mt-[98px]">
        {/* story part */}
        <div className="bg-slate-50">
          <StorySlide />
        </div>
        {/* create post */}
        <CreatePost />
        <TabsBody className="bg-slate-600 text-white">
          {data.map(({ value, data }) => (
            <TabPanel key={value} value={value} className="py-0 text-white">
              {value === "News Feed" ? <AllPost /> : data}
            </TabPanel>
          ))}
        </TabsBody>
      </div>
      <div className="bg-black mt-[98px] grid-rows-1 text-white">hello</div>
    </Tabs>
  );
}
