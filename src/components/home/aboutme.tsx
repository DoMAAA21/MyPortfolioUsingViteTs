import React from 'react';
import MyPicture from '../../assets/me.jpg';

const AboutMe: React.FC = () => {
    return (
        <div className="flex items-center justify-center bg-gray-100 p-4">
            <div className="flex flex-col items-center lg:flex-row lg:max-w-screen-2xl lg:mx-auto bg-white p-8 rounded-xl shadow-lg">
                <div className="lg:w-2/3 lg:pr-8">
                    <h2 className="text-5xl font-bold mb-4">Jharold Cataluña | Parañaque</h2>
                    <p className="text-gray-700 text-lg">
                        Hello, I'm Jharold! I'm a passionate developer who loves creating amazing things with
                        technology. This is a brief introduction about me and my interests.
                    </p>
                </div>
                <div className="lg:w-1/3 mt-4 lg:mt-0">
                    <img
                        src={MyPicture}
                        alt="Your Name"
                        className="rounded-xl shadow-md object-cover w-100 h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
