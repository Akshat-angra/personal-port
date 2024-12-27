"use client";

import {FC, useState} from "react";
import {FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaReact, FaGitAlt} from "react-icons/fa";
import {SiCplusplus, SiMongodb, SiNextdotjs, SiPostman} from "react-icons/si";
import {GridBackground} from "@/components/ui/grid-background.tsx";

const SkillsSection: FC = () => {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
    const [borderColors, setBorderColors] = useState({
        top: "transparent",
        right: "transparent",
        bottom: "transparent",
        left: "transparent",
    });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const {clientX, clientY} = event;
        const container = event.currentTarget.getBoundingClientRect();
        const containerCenterX = container.left + container.width / 2;
        const containerCenterY = container.top + container.height / 2;

        setMousePosition({x: clientX, y: clientY});

        const top = clientY < containerCenterY ? "rgba(59, 130, 246, .5)" : "transparent";
        const bottom = clientY > containerCenterY ? "rgba(59, 130, 246, .5)" : "transparent";
        const left = clientX < containerCenterX ? "rgba(59, 130, 246, .5)" : "transparent";
        const right = clientX > containerCenterX ? "rgba(59, 130, 246, .5)" : "transparent";

        setBorderColors({top, right, bottom, left});
    };

    const handleMouseEnter = () => {
    };

    const handleMouseLeave = () => {
        setBorderColors({
            top: "transparent",
            right: "transparent",
            bottom: "transparent",
            left: "transparent",
        });
    };

    const skills = [
        {id: 1, name: "HTML", icon: <FaHtml5 className="w-10 h-10 text-orange-500"/>},
        {id: 2, name: "CSS", icon: <FaCss3Alt className="w-10 h-10 text-blue-500"/>},
        {id: 3, name: "JavaScript", icon: <FaJsSquare className="w-10 h-10 text-yellow-500"/>},
        {id: 6, name: "MongoDB", icon: <SiMongodb className="w-10 h-10 text-green-500"/>},
        {id: 7, name: "React", icon: <FaReact className="w-10 h-10 text-blue-300"/>},
        {id: 8, name: "Next.js", icon: <SiNextdotjs className="w-10 h-10 text-white"/>},
        {id: 9, name: "Git", icon: <FaGitAlt className="w-10 h-10 text-orange-400"/>},
        {id: 10, name: "Postman", icon: <SiPostman className="w-10 h-10 text-orange-500"/>},
        {id: 4, name: "Java", icon: <FaJava className="w-10 h-10 text-red-500"/>},
        {id: 5, name: "C++", icon: <SiCplusplus className="w-10 h-10 text-blue-400"/>},
    ];

    const getTransformStyle = () => {
        const maxAngle = 15;
        const offsetX = (mousePosition.x - window.innerWidth / 2) / 50;
        const offsetY = (mousePosition.y - window.innerHeight / 2) / 50;

        return `rotateX(${Math.min(Math.max(-maxAngle, offsetY), maxAngle)}deg) rotateY(${Math.min(
            Math.max(-maxAngle, offsetX),
            maxAngle
        )}deg)`;
    };

    return (
        <section className="relative py-16 px-4">
            <GridBackground/>
            <div
                className="container mx-auto text-center relative z-10 border-4 rounded-xl shadow-2xl p-8"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                    transform: getTransformStyle(),
                    transition: "transform 0.1s ease",
                    willChange: "transform",
                    borderTopColor: borderColors.top,
                    borderRightColor: borderColors.right,
                    borderBottomColor: borderColors.bottom,
                    borderLeftColor: borderColors.left,
                }}
            >
                <h2 className="text-4xl font-bold mb-6 fonrob">Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                    {skills.map((skill) => (
                        <div
                            key={skill.id}
                            className="p-8 rounded-xl bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white flex flex-col items-center justify-center shadow-xl hover:shadow-2xl transform transition-transform duration-300 relative border border-gray-600"
                        >
                            <div className="mb-4">{skill.icon}</div>
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                            {/* Inner Glow Effect */}
                            <div
                                className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-10 blur-md pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
