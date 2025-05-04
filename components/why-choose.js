import { baseUrl } from "@/utils/constant";
import React from "react";

export default function WhyChoose({ data }) {
    const [selectedData, setSelectedData] = React.useState(data?.listing[0]);

    const imageSrc = `${baseUrl}${selectedData?.image[0].url}` || "/images/default.png";
  return (
    <section className="py-12">
      <h1 className="text-xl font-normal text-center mb-1">Why Choose Us</h1>
      <div className="text-center mb-16">
        <h2 className="text-2xl font-semibold mb-2">{data?.heading || ""}</h2>
        <p className="text-gray-600">{data?.description || ""}</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
        <div className="relative w-full md:w-1/2 flex mr-10 ml-8  h-64">
          <div className="absolute w-64 h-64 bg-[rgba(160,79,104,0.5)] text-white rounded-full flex flex-col justify-center z-10 left-5 top-0 p-6">
            <h3 className="text-lg font-bold">{selectedData?.title}</h3>
            <p className="text-sm mt-2 text-justify font-small">
             {selectedData?.description}
            </p>
          </div>
          <div className="absolute w-64 h-64 bg-gray-300 rounded-full overflow-hidden top-0 right-0">
            <img
                src={'/images/default.png'}
                alt="Feature Image"
                className="w-full h-full object-cover rounded-full"
              />
          </div>
        </div>
    
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {data?.listing?.map((item, index) => (
            <button className="py-2 px-4 hover:bg-[rgba(160,79,104)] border border-gray-300 rounded-full font-semibold text-gray-800 bg-gray-300 hover:text-white transition flex items-center justify-between cursor-pointer" key={index} onClick={() => setSelectedData(item)}>
              <span className="mr-2">&lt;</span>
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
