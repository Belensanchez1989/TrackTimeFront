import React from "react";
import { Image } from "@nextui-org/react";
import myImage from "../../public/portrait photography of a hip hop girl.webp";

export default function ImageHome() {
    return (
        <Image
            width={500}
            height={300}
            alt="NextUI hero Image"
            src={myImage}
        />
    );
};