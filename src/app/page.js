"use client";

import { useState } from "react";
import Image from "next/image";

const icons = {
  chart: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 2a1 1 0 00-1 1v5H4a1 1 0 00-1 1v9a1 1 0 001 1h12a1 1 0 001-1v-9a1 1 0 00-1-1h-5V3a1 1 0 00-1-1z" />
    </svg>
  ),
  focus: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" />
    </svg>
  ),
  new: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 2a1 1 0 00-1 1v5H4a1 1 0 00-1 1v2h2v-2h5v5h2v-5h5v-2h-5V3a1 1 0 00-1-1z" />
    </svg>
  ),
  refresh: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M17.293 6.293a1 1 0 00-1.414 0L12 10.586 10.121 8.707a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l5-5a1 1 0 000-1.414zM3 10a7 7 0 1114 0 7 7 0 01-14 0zm2.293 1.293a1 1 0 011.414 0l3-3a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414z" />
    </svg>
  ),
  collaborate: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 2a1 1 0 011 1v5h5a1 1 0 011 1v2h-2v-2h-5v5h-2v-5H4v-2h5V3a1 1 0 011-1z" />
    </svg>
  ),
  delete: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M6 2a1 1 0 00-1 1v1H2a1 1 0 000 2h1v12a2 2 0 002 2h10a2 2 0 002-2V6h1a1 1 0 000-2h-3V3a1 1 0 00-1-1H6zm10 16H4V6h12v12z" />
    </svg>
  ),
};

const initialLeads = [
  {
    name: "Winford Archer",
    topic: "Cafe 700 for commercial use",
    status: "New",
    createdOn: "4/2/2024 7:45 AM",
  },
  {
    name: "Jola Love",
    topic: "Upgrading service plan",
    status: "New",
    createdOn: "4/2/2024 3:30 PM",
  },
  {
    name: "Harrison Curfs",
    topic: "Issue with throughput on EspressoMaster",
    status: "New",
    createdOn: "4/2/2024 1:39 PM",
  },
  {
    name: "Jermaine Bennett",
    topic: "New roaster distribution facility",
    status: "New",
    createdOn: "4/2/2024 9:15 AM",
  },
  {
    name: "Gerald Skippers",
    topic: "Concerns on output machines",
    status: "New",
    createdOn: "4/1/2024 10:00 AM",
  },
  {
    name: "Halie Griffiths",
    topic: "Expanding business",
    status: "New",
    createdOn: "3/31/2024 2:30 PM",
  },
  {
    name: "Rachael McCall",
    topic: "Premium coffee refill",
    status: "New",
    createdOn: "3/30/2024 11:45 AM",
  },
  {
    name: "Alex Baier",
    topic: "Improving per cup",
    status: "New",
    createdOn: "3/29/2024 8:30 AM",
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [leads, setLeads] = useState(initialLeads);
  const [selectedLeads, setSelectedLeads] = useState(new Set());

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCheckboxChange = (leadName) => {
    const updatedSelection = new Set(selectedLeads);
    if (updatedSelection.has(leadName)) {
      updatedSelection.delete(leadName);
    } else {
      updatedSelection.add(leadName);
    }
    setSelectedLeads(updatedSelection);
  };

  const handleDeleteSelected = () => {
    const updatedLeads = leads.filter(lead => !selectedLeads.has(lead.name));
    setLeads(updatedLeads);
    setSelectedLeads(new Set());
  };

  return (
    <>
      <div className="bg-white rounded-[5px] w-full">
        <div className="flex flex-wrap justify-between items-center p-2 text-gray-600">
          <p className="flex-1 min-w-[150px]">My open leads</p>
          <div className="flex items-center space-x-4 flex-wrap">
            <span className="flex items-center text-sm">
              {icons.chart}
              <span className="ml-1 hidden md:inline">Show chart</span>
            </span>
            <span className="flex items-center text-sm">
              {icons.focus}
              <span className="ml-1 hidden md:inline">Focused view</span>
            </span>
            <span className="flex items-center text-sm">
              {icons.new}
              <span className="ml-1 hidden md:inline">New</span>
            </span>
            <span className="flex items-center text-sm">
              {icons.refresh}
              <span className="ml-1 hidden md:inline">Refresh</span>
            </span>
            <span className="flex items-center text-sm">
              {icons.collaborate}
              <span className="ml-1 hidden md:inline">Collaborate</span>
            </span>
            <button onClick={handleDeleteSelected} disabled={selectedLeads.size === 0} className="flex items-center text-sm">
              {icons.delete}
              <span className="ml-1 hidden md:inline">Delete</span>
            </button>
            <span className="flex items-center">:</span>
            <div className="flex space-x-2 flex-wrap">
              <button className="border border-1 border-gray-300 py-1 px-3 rounded-[5px] text-sm">
                Smart data
              </button>
              <button className="border border-1 border-gray-300 py-1 px-3 rounded-[5px] text-sm">
                Edit filters
              </button>
              <button className="border border-1 border-gray-300 py-1 px-3 rounded-[5px] text-sm">
                Edit columns
              </button>
              <button className="bg-blue-700 py-1 px-3 rounded-[5px] flex items-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-1h2v1zm0-2H9V8h2v3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white rounded-md mt-4">
        <div className="flex flex-col md:flex-row items-center">
          <h2 className="text-lg font-semibold mb-2 md:mb-0 md:flex-1">
            Hi Mona, <span className="text-blue-600 font-bold">68%</span> of
            goal achieved and rest can be achieved by focusing on 20 top leads.
          </h2>

          <div className="flex items-center justify-between mb-4 md:ml-4 flex-grow">
            <div className="flex-1 bg-gray-200 h-4 rounded-full overflow-hidden">
              <div className="flex h-full">
                <div
                  className="bg-green-500 h-full"
                  style={{ width: "25%" }}
                ></div>
                <div
                  className="bg-blue-500 h-full"
                  style={{ width: "50%" }}
                ></div>
                <div
                  className="bg-yellow-500 h-full"
                  style={{ width: "15%" }}
                ></div>
                <div
                  className="bg-purple-500 h-full"
                  style={{ width: "10%" }}
                ></div>
              </div>
            </div>
            <div className="ml-4 text-right">
              <span className="text-gray-600">
                Target: <strong>$145 Million</strong>
              </span>
              <div className="text-gray-400">65% of target achieved</div>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-sm text-gray-400 mb-4">
              Copilot has pinpointed 20 key leads that show strong purchase
              intent and are actively engaging. These leads need your focus.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white shadow-md rounded-lg p-4">
                <div>
                  <div className="flex gap-1">
                    <Image
                      src="https://via.placeholder.com/500"
                      alt="Jane Reyes"
                      width={50}
                      height={50}
                      className="rounded-full h-[50px] w-[50px] mr-4"
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="font-semibold">Jane Reyes</h3>
                      <p className="text-gray-600 text-sm">
                        COO . Northwind Traders
                      </p>
                    </div>
                  </div>

                  <div className="mt-2 text-gray-700 bg-blue-100 p-3 rounded-[10px]">
                    <p className="text-gray-800 font-bold">
                      Engage with Jane Reyes
                    </p>
                    <p className="text-sm text-gray-500">
                      Jane may be interested in upgrading espresso machines for
                      her in-store coffee shops.
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-500 text-sm">
                      Expand business . High buying intent
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg p-4">
                <div>
                  <div className="flex gap-1">
                    <Image
                      src="https://via.placeholder.com/500"
                      alt="Allan Munger"
                      width={50}
                      height={50}
                      className="rounded-full h-[50px] w-[50px] mr-4"
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="font-semibold">Allan Munger</h3>
                      <p className="text-gray-600 text-sm">
                        Head of Real Estate Development . Contoso Coffee
                      </p>
                    </div>
                  </div>

                  <div className="mt-2 text-gray-700 bg-blue-200 p-3 rounded-[10px]">
                    <p className="text-gray-800 font-bold">
                      Prepare for meeting with Allan
                    </p>
                    <p className="text-sm text-gray-500">
                      Prepare for high-intent meeting Copilot scheduled for 2 PM
                      regarding upgrading service contract.
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-500 text-sm">
                      Upcoming meetings . Due today
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white rounded-md mt-4">
  <div className="flex justify-between mb-2">
    <input
      type="text"
      placeholder="Search by name or topic"
      className="border border-gray-300 p-2 rounded-lg w-full md:w-1/3"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>

  <div className="overflow-x-auto">
    {filteredLeads.length === 0 ? (
      <div className="flex items-center justify-center h-48 text-center text-gray-500">
        <p className="text-lg">
          No leads found. <br />
          Try adjusting your search criteria.
        </p>
      </div>
    ) : (
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-gray-300 text-left">
            <th className="p-2">Name</th>
            <th className="p-2">Topic</th>
            <th className="p-2">Status reason</th>
            <th className="p-2">Created on</th>
          </tr>
        </thead>
        <tbody>
          {filteredLeads.map((lead, index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="p-2 text-blue-500 text-sm flex items-center">
                <input type="checkbox" className="mr-3" /> {lead.name}
              </td>
              <td className="p-2 text-gray-400 text-sm">{lead.topic}</td>
              <td className="p-2 text-gray-400 text-sm">{lead.status}</td>
              <td className="p-2 text-gray-400 text-sm">{lead.createdOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
</div>
    </>
  );
}
