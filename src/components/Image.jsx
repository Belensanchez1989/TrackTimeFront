import React from "react";
import { Image } from "@nextui-org/react";
import myImage from "../../public/assets/myImage.webp";

export default function ImageHome({children}) {
    return (
        <Image
            width={500}
            height={300}
            alt="NextUI hero Image"
            src={myImage}
        />
    );
};