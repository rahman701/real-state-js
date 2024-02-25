import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import plan from "../../assets/details/Plan.png";
import arrowSing from "../../assets/details/sort.png";
import LineIcon from "../../assets/icons/Line.png";
import MinimizeIcon from "../../assets/icons/maximize.png";
import ShareIcon from "../../assets/icons/share.png";

const PropertyDetails = () => {
  const [selectedId, setSelectedId] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("/totalApplications.json")
      .then((res) => res.json())
      .then((data) => setTableData(data));
  }, []);

  useEffect(() => {
    fetch("/properties.json")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  // handle toggle 3 dots
  const handleThreeDot = (id) => {
    setSelectedId(id);
    setToggle(!toggle);
    console.log(id);
  };

  // handle paid
  const handlePaid = (id) => {
    setToggle(!toggle);
    console.log("paid clicked");
    // update from here
  };

  // handle unpaid
  const handleUnpaid = (id) => {
    setToggle(!toggle);
    console.log("unpaid clicked");
    // update from here
  };

  return (
    <div className="bg-[#f7f7fd] py-10">
      <div className="max-w-[1240px] mx-auto">
        {/* title */}
        <div className="md:grid md:grid-cols-12 gap-5 px-4 md:px-0">
          <div className="md:col-span-5 flex justify-between">
            <h2 className="text-xl font-bold text-[#000929]">
              Properties{" "}
              <span className="px-2 py-1 rounded-md bg-[#000929] text-white font-semibold text-lg">
                14
              </span>
            </h2>
            <div>
              <img src={arrowSing} alt="" />
            </div>
          </div>
        </div>

        {/* main content */}
        <div className="grid md:grid-cols-12 mt-14 gap-5">
          {/* left-side content */}
          <div className="md:col-span-5 mx-2 lg:mx-0">
            {/* search */}
            <div className="w-full py-3 border rounded flex items-center gap-5 ml-3 lg:ml-0">
              <LuSearch className="text-2xl ml-5" />
              <input
                className="focus:outline-none w-full text-lg bg-transparent"
                type="text"
                name=""
                id=""
                placeholder="Search..."
              />
            </div>

            {/* cards list */}
            {properties?.map((item) => (
              <div
                key={item._id}
                className="w-full py-5 px-2 rounded-md border hover:shadow-lg duration-500 mt-5 cursor-pointer bg-white"
              >
                <div className="md:flex gap-4 md:items-center">
                  <div>
                    <img
                      src={item.image}
                      className="md:w-[105px] rounded-md"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between w-full pt-4 md:pt-0">
                    <div>
                      <h4 className="text-[#000929] font-semibold text-xl">
                        {item.title}
                      </h4>
                      <p className="text-[#7F8287] mt-2">
                        {item.address.length > 31
                          ? item.address?.slice(0, 31)
                          : item.address}{" "}
                        {item.address.length > 31 ? "..." : ""}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <div>
                        {item.status === "active" && (
                          <p className="text-[#6565F0] border bg-[#E9E9F9] px-3 py-1 rounded-full text-sm font-semibold uppercase">
                            {item.status}
                          </p>
                        )}
                        {item.status === "occupied" && (
                          <p className="text-[#27AE60] border bg-[#E6F9EE] px-3 py-1 rounded-full text-sm font-semibold uppercase">
                            {item.status}
                          </p>
                        )}
                        {item.status === "maintenance" && (
                          <p className="text-[#FF6161] border bg-[#F9E9E9] px-3 py-1 rounded-full text-sm font-semibold uppercase">
                            {item.status}
                          </p>
                        )}
                        {item.status === "request" && (
                          <p className="text-[#FFB154] border bg-[#FFF1E0] px-3 py-1 rounded-full text-sm font-semibold uppercase">
                            {item.status}
                          </p>
                        )}
                        {item.status === "vacant" && (
                          <p className="text-[#6565F0] border bg-[#E9E9F9] px-3 py-1 rounded-full text-sm font-semibold uppercase">
                            {item.status}
                          </p>
                        )}
                      </div>
                      <p className="text-[#7F8287] mt-2">{item.sqm} sq m</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* right side content */}
          <div className="md:col-span-7">
            {/* right-side-img */}
            <div>
              <h2 className="text-[32px] font-bold text-[#000929]">
                Property Details
              </h2>
              <div className="px-2 md:px-0 py-4 relative">
                <img
                  src="https://i.ibb.co/tJw4Y0m/sp.png"
                  className="w-full"
                  alt=""
                />
                <div className="text-white absolute bottom-8 left-8">
                  <h4 className="text-[24px] font-bold">Cove Red</h4>
                  <p>2821 Lake Sevilla, Palm Harbor, TX</p>
                </div>
                {/* icon in top of image */}
                <div className="flex gap-2 absolute top-8 right-8">
                  <div className="border border-white p-1 rounded-md">
                    <img src={ShareIcon} alt="" />
                  </div>
                  <div className="border border-white p-1 rounded-md">
                    <img src={MinimizeIcon} alt="" />
                  </div>
                </div>

                {/* line and page */}
                <div className=" absolute bottom-8 right-8">
                  <p className="text-white text-end">1 of 4</p>
                  <div className="flex gap-1">
                    <img src={LineIcon} alt="" />
                    <img src={LineIcon} alt="" />
                    <img src={LineIcon} alt="" />
                    <img src={LineIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* details */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-5 px-5 border rounded-md items-center w-full py-2 text-center lg:text-start bg-white">
              <div>
                <h2 className="text-[#8B8C93] text-xl">Properties</h2>
                <p className="mt-2">46</p>
              </div>
              <div>
                <h2 className="text-[#8B8C93] text-xl">Rooms</h2>
                <p className="mt-2">4</p>
              </div>
              <div>
                <h2 className="text-[#8B8C93] text-xl">Living Space</h2>
                <p className="mt-2">6x7.5 m²</p>
              </div>
              <div>
                <h2 className="text-[#8B8C93] text-xl">Year Built</h2>
                <p className="mt-2">2018</p>
              </div>
              <div>
                <h2 className="text-[#8B8C93] text-xl">Tenants</h2>
                <p className="mt-2">12</p>
              </div>
              <div>
                <h2 className="text-[#8B8C93] text-xl">Request</h2>
                <p className="mt-2">12</p>
              </div>
            </div>

            {/* total application */}
            <div className="border p-4 mt-10 bg-white rounded-sm">
              <div className=" text-center lg:text-start lg:flex justify-between items-center">
                <h2
                  className="text-xl font-bold 
        text-[#000929] "
                >
                  Total Applicants{" "}
                  <span className="px-2 py-1 rounded-md bg-[#000929] text-white font-semibold text-lg my-8 lg:my-0">
                    394
                  </span>
                </h2>
                <img className="mx-auto lg:mx-0" src={plan} alt="" />
              </div>

              {/* custom table */}
              <div className="mt-5 grid">
                <div className="">
                  <div className="text-[12px] md:text-[16px] text-[#7F8287] font-medium border-b-2 pb-5">
                    <div className="grid grid-cols-12">
                      <p className="text-start col-span-3">Name</p>
                      <p className="text-start col-span-2">Amount</p>
                      <p className="text-start col-span-3">Phone Number</p>
                      <p className="text-start col-span-2">Status</p>
                      <p className="text-start col-span-2">Action</p>
                    </div>
                  </div>
                  <div className="text-[#000929] text-[12px] md:text-[16px] font-medium ">
                    {tableData?.map((item) => (
                      <div
                        key={item._id}
                        className="grid grid-cols-12 py-5 border-b"
                      >
                        <div className="flex gap-2 items-center col-span-3">
                          <img src={item.image} alt="" />
                          <p>{item.title}</p>
                        </div>

                        <div className="col-span-2">${item.price}</div>
                        <div className="col-span-3">{item.number}</div>
                        <div className="col-span-2">
                          {item.status === "paid" ? (
                            <button className="text-[#27AE60] bg-[#E6F9EE]  rounded-full text-xs font-semibold text-center cursor-default capitalize">
                              Paid
                            </button>
                          ) : (
                            <button className="text-[#FF6161]  bg-[#F9E9E9] text-center rounded-full text-sm font-semibold cursor-default">
                              Unpaid
                            </button>
                          )}
                        </div>
                        <div className="col-span-2 flex ml-4 relative">
                          <span onClick={() => handleThreeDot(item._id)}>
                            <BsThreeDots />
                          </span>
                          {/* toggle */}
                          {selectedId === item._id && toggle && (
                            <div className="bg-white absolute top-0 right-28 px-3 py-2 rounded-sm shadow-lg flex flex-col justify-center items-center gap-2">
                              <button
                                onClick={() => handlePaid(item._id)}
                                className="flex justify-center items-center gap-2"
                              >
                                <div className="h-2 w-2 bg-[#27AE60] rounded-full"></div>
                                <p className="text-[12px] font-medium text-[#000929]">
                                  Paid
                                </p>
                              </button>

                              <button
                                onClick={() => handleUnpaid(item._id)}
                                className="flex justify-center items-center gap-2"
                              >
                                <div className="h-2 w-2 bg-[#FF6161] rounded-full"></div>
                                <p className="text-[12px] font-medium text-[#000929]">
                                  Unpaid
                                </p>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
