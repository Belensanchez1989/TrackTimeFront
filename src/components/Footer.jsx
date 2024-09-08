import React from "react";
import { Divider } from "@nextui-org/react";

export default function FooterDivider() {
    return (
        <footer className="w-full fixed bottom-0 bg-gray-200 py-4 text-center">
            <Divider className="my-1" />
            <div className="flex justify-center items-center space-x-4 text-large">
                <div>2024</div>
                <Divider orientation="vertical" />
                <div>Política de Privacidad</div>
                <Divider orientation="vertical" />
                <div>Aviso Legal</div>
            </div>
        </footer>
    );
}