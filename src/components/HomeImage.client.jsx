import { Image } from "@shopify/hydrogen";
import {  useState } from "react";
  
export default function HomeImage() {
    const [imgTag, SetImgTag] = useState("img/E-p-800.png")
    return (
        <div>
            <div className="absolute grid grid-cols-3 mt-14 mb-14 w-screen h-screen">
                <div className="" onMouseEnter={() => SetImgTag("img/A-p-800.png")}></div>
                <div className="" onMouseEnter={() => SetImgTag("img/B-p-800.png")}></div>
                <div className="" onMouseEnter={() => SetImgTag("img/C-p-800.png")}></div>
                <div className="" onMouseEnter={() => SetImgTag("img/D-p-800.png")}></div>
                <div className="" onMouseEnter={() => SetImgTag("img/E-p-800.png")}></div>
                <div className="" onMouseEnter={() => SetImgTag("img/F-p-800.png")}></div>
                <div className="" onMouseEnter={() => SetImgTag("img/G-p-800.png")}></div>
                <div className="" onMouseEnter={() => SetImgTag("img/H-p-800.png")}></div>
                <div className=""onMouseEnter={() => SetImgTag("img/I-p-800.png")}></div>
            </div>
            <div className="flex h-screen justify-center items-center">
                <Image 
                    className=""
                    src={imgTag}
                    alt="babygirl"
                    width={500}
                    height={500}
                />
            </div>
        </div>
    );
  }
  