import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const RiverMap = ({ campgroundMap }) => {
  function onDocumentLoadSuccess({ numPages }) {}

  return (
    <>
      <section
        id="Green-map"
        className="bg_green_linear mt-20 lg:mt-28 xl:mt-36 relative"
      >
        <div className="topWaveImg">
          <Image
            className="w-full "
            src="/img/png/rivermap/top_wave.png"
            alt="topWaveImg"
            width={1920}
            height={85}
            layout="responsive"
          />
        </div>
        <div className="container mx-auto my-14">
          <div>
            <h2 className="font-Bubblegum text-2xl lg:text-3xl xl:text-4xl text-center mb-5 md:mb-8 lg:mb-10 xl:mb-16 xxl:mb-20 text-white ">
              Platte River Campground Map
            </h2>
            <div className="max-w-map bg-[#3D4F3B] river_map_color rounded-lg mb-5 md:mb-8 lg:mb-10 xl:mb-16 pb-1">
              <div className="river_map_border py-1 lg:py-3.5 px-2 lg:px-5 rounded-lg">
                <Document
                  file={campgroundMap}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page pageNumber={1} />
                </Document>
              </div>
            </div>
            <div className=" flex items-center justify-center text-center  ">
              <Link href="/api/getPDF" passHref>
                <a className="bg-[#FFFFFF] py-[8px] px-[16px] md:px-[28px] border-2 rounded-full  text-[#4E5F4C] font-bold  font-Bubblegum border-transparent  text-sm lg:text-base hover:opacity-70 ease-in-out duration-75">
                  Download PDF
                </a>
              </Link>
              <Link href={campgroundMap} passHref>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="bg-transparent border-white border-2  py-[8px] px-[16px] md:px-[28px] rounded-full  text-white font-bold  font-Bubblegum text-sm lg:text-base hover:opacity-70 ease-in-out duration-75 ml-[16px] md:ml-[20px]"
                >
                  VIEW IN FULL SCREEN
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="bottomWaveImg">
          <Image
            className="w-full "
            src="/img/png/rivermap/bottom_wave.png"
            alt="bottomWaveImg"
            width={1920}
            height={85}
            layout="responsive"
          />
        </div>
      </section>
    </>
  );
};

export default RiverMap;
