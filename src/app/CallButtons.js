import { PhoneOutgoing } from 'lucide-react';
import React from 'react';

const PhoneNumbers = () => {
    return (
        <div className="fixed bottom-36 right-4 w-[40px] h-[40px] z-[9999999] space-y-8">
            <a href="tel:0862195305" className="block text-[#337ab7] no-underline bg-transparent">
                <div className="relative animated_zalo flex justify-center items-center">
                    <div className="cmoz-alo-circle absolute w-[50px] h-[50px] top-[-5px] right-[-5px] bg-transparent rounded-full border-2 border-[#1182fc]"></div>
                    <div className="pulse_zalo absolute w-[60px] h-[60px] top-[-10px] right-[-10px] transition-all duration-200 ease-in-out rounded-full border-2 border-transparent bg-[rgba(17,130,252,.45)]"></div>
                    <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#1182fc] relative">
                        <PhoneOutgoing className="text-white" size={20}/>
                    </div>
                </div>
            </a>
            <a href="tel:0862094102" className="block text-[#b73333] no-underline bg-transparent">
                <div className="relative animated_zalo flex justify-center items-center">
                    <div className="cmoz-alo-circle absolute w-[50px] h-[50px] top-[-5px] right-[-5px] bg-transparent rounded-full border-2 border-[#fc1111]"></div>
                    <div className="pulse_zalo absolute w-[60px] h-[60px] top-[-10px] right-[-10px] transition-all duration-200 ease-in-out rounded-full border-2 border-transparent bg-[rgba(252,17,17,0.45)]"></div>
                    <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#fc1111] relative">
                        <PhoneOutgoing className="text-white" size={20}/>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default PhoneNumbers;

