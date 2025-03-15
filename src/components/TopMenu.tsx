import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
    return (
        <div className="flex justify-between items-center">
            {/* Left Menu Items */}
            <div></div>

            {/*ผมซุยไปบ่ครับอ้าย*/}
            <div></div>

            {/* Right Menu Items */}
            <div className="flex">
                <TopMenuItem title="Booking" pageRef="/booking" />
            <Image src={"/img/logo.png"} className="h-auto w-auto" alt="logo" width={0} height={0} sizes="70px" />
            </div>
        </div>
    );
}
