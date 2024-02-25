import { useEffect, useState } from "react";
import { BsPlus, BsThreeDotsVertical } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import BathIcon from "../../assets/icons/bath.png";
import BetIcon from "../../assets/icons/bet.png";
import DabbleDasIcon from "../../assets/icons/dabble-das.png";
import DashIcon from "../../assets/icons/dash.png";
import SqRIcon from "../../assets/icons/squ-round.png";
import UpArr from "../../assets/icons/upArr.png";

const Property = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("/properties.json")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  return (
    <div className="bg-[#f7f7fd] py-10">
      <div className="max-w-[1240px] mx-auto">
        {/* filtering and add post */}
        <div className="md:flex justify-between">
          <div className="p-3 bg-white rounded-[4px] text-center">
            <select className="p-2 focus:outline-none text-[#000929] font-bold">
              <option disabled selected>
                Selecting All
              </option>
              <option>one</option>
              <option>Owo</option>
              <option>Three</option>
            </select>
          </div>

          <div className="flex items-center gap-4 justify-between">
            <div className="flex justify-center items-center text-[20px] gap-2">
              <img
                src={UpArr}
                className="bg-white p-[8px] text-[36px] border border-gray-300 rounded-[4px]"
                alt=""
              />
              <img
                src={DashIcon}
                className="bg-white p-[6px] text-[36px] border border-gray-300 rounded-[4px]"
                alt=""
              />
              <img
                src={DabbleDasIcon}
                className="bg-white p-[6px] text-[36px] border border-gray-300 rounded-[4px]"
                alt=""
              />
            </div>
            <div>
              <button className="bg-[#000929] text-white px-3 py-2 rounded-md flex items-center justify-center">
                <BsPlus className="text-[22px] inline" /> <span>Add New</span>
              </button>
            </div>
          </div>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
          {/* one */}
          {properties?.map((item) => (
            <div
              key={item._id}
              className="p-4 rounded-md border border-gray-300 bg-white"
            >
              <div className="relative">
                <div className="">
                  <img src={item.image} className="rounded-md " alt="" />
                </div>
                <div className="absolute top-6 right-6">
                  <BsThreeDotsVertical className="bg-transparent p-[6px] text-[36px] border-2 border-white text-white rounded-md" />
                </div>
                <div className="absolute bottom-6 right-6">
                  <button className="text-[#000929] text-[12px] font-semibold px-3 py-2 rounded-md flex items-center justify-center bg-white opacity-70 uppercase">
                    {item.status}
                  </button>
                </div>
              </div>

              <div className="">
                <p className="text-[12px] font-medium pt-4">
                  <CiLocationOn className="inline" /> {item.address}
                </p>
                <div className="flex justify-between pb-3">
                  <h4 className="text-[20px] font-bold">{item.title}</h4>
                  <div>
                    <h4 className="text-[20px] font-extrabold">
                      ${item.price}
                      <span className="text-[12px] font-medium text-[#8B8C93]">
                        /month
                      </span>
                    </h4>
                  </div>
                </div>

                <div className="text-[14px] font-medium text-[#8B8C93] flex justify-between py-[12px] border-t border-gray-300">
                  <div className="flex justify-center items-center gap-2">
                    <img src={BetIcon} alt="" />
                    <p>{item.beds} Beds</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <img src={BathIcon} alt="" />
                    <p>{item.bathrooms} Bathrooms</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <img src={SqRIcon} alt="" />
                    <p>{item.size} m²</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* pagination */}
        <div className="flex justify-center items-center">
          <div className=" md:space-x-4">
            <button className="join-item btn bg-transparent hover:bg-transparent border-none p-2">
              <MdOutlineKeyboardArrowLeft />
            </button>
            <button className="join-item btn bg-white p-4 hover:bg-black text-[#8B8C93] hover:text-white text-[16px] rounded-full">
              1
            </button>
            <button className="join-item btn bg-white p-4 hover:bg-black text-[#8B8C93] hover:text-white text-[16px] rounded-full">
              2
            </button>
            <button className="join-item btn bg-white p-4 hover:bg-black text-[#8B8C93] hover:text-white text-[16px] rounded-full">
              3
            </button>
            <button className="join-item btn bg-transparent hover:bg-transparent border-none p-2">
              ...
            </button>
            <button className="join-item btn bg-white p-4 hover:bg-black text-[#8B8C93] hover:text-white text-[16px] rounded-full">
              10
            </button>
            <button className="join-item btn bg-transparent hover:bg-transparent border-none p-2">
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
