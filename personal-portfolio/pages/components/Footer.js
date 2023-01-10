import React from 'react'
import Image from "next/image"
import Airbnb from "./assets/airbnb.png"


const Footer = () => {
  return (
    <div>
        <ul className="flex">
            <li>
                <div className="w-36 h-36">
                <Image src={Airbnb} />
                </div>
            </li>

            <li>
                <div className="w-36 h-36">
                <Image src={Airbnb} />
                </div>
            </li>

            <li>
                <div className="w-36 h-36">
                <Image src={Airbnb} />
                </div>
            </li>

            <li>
                <div className="w-36 h-36">
                <Image src={Airbnb} />
                </div>
            </li>

            <li>
                <div className="w-36 h-36">
                <Image src={Airbnb} />
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Footer