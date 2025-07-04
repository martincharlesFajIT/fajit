"use client"
import React from 'react'
import Image from 'next/image'
import '../../../app/globals.css'
import { 
  FaAws, 
  FaDocker, 
  FaReact, 
  FaLaravel, 
  FaBootstrap, 
  FaNodeJs, 
  FaAngular 
} from "react-icons/fa6";
import { 
  SiMysql, 
  SiMongodb, 
  SiJavascript, 
  SiNextdotjs, 
  SiRedis, 
  SiFlutter, 
  SiFirebase 
} from "react-icons/si";

const Brandstack = () => {
  const techStack = [
    [
      { name: "AWS", icon: <FaAws /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
    ],
    [
      { name: "Laravel", icon: <FaLaravel /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Angular", icon: <FaAngular /> },
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ]
  ];

  return (
    <section className="brands-section">
      <div className="what-we-do-badge">
        <span className="purple-dot"></span>
        What We Do
      </div>
      <div className="main-heading">
        <h1>
          Our Tech Stack<br />
        </h1>
      </div>

      <div className="earth-container">
        <div className="earth-sphere">
          <div className="earth-glow"></div>
          <div className="earth-surface"></div>
          <div className="earth-atmosphere">
            <Image 
              src="https://cdn.pixabay.com/photo/2019/12/18/05/18/business-4703104_960_720.jpg" 
              alt="Tech atmosphere"
              width={500}
              height={500}
              className="atmosphere-image"
            />
          </div>
        </div>
      </div>

      {techStack.map((row, rowIndex) => (
        <div key={rowIndex} className="brand-logos">
          {row.map((tech, techIndex) => (
            <div key={techIndex} className="logo-item">
              <span className="tech-icon">{tech.icon}</span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      ))}

      <div className="global-presence">
        <span className="presence-label">Our Global Presence</span>
        <div className="presence-tags">
          <span className="tag active">UAE</span>
          <span className="tag">UK</span>
          <span className="tag">Pakistan</span>
        </div>
      </div>
    </section>
  )
}

export default Brandstack