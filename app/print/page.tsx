'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import './print-styles.css'; // Updated import path

export default function PrintResume() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Set current date for the footer
    const today = new Date();
    setCurrentDate(
      today.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    );
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Head>
        <title>Duong Cong Tung - Resume</title>
        <meta
          name="description"
          content="Professional resume of Duong Cong Tung, Senior Full Stack Developer"
        />
      </Head>

      <div className="print-controls">
        <button onClick={handlePrint} className="print-button">
          <i className="fas fa-print"></i> Print / Save PDF
        </button>
        <Link href="/" className="back-button">
          <i className="fas fa-arrow-left"></i> Back to Website
        </Link>
      </div>

      <div className="print-container">
        <header>
          <div className="header-content">
            <div className="profile-section">
              <div className="avatar-container">
                <Image
                  src="/hero/tung-photos/portrait.jpg"
                  alt="Duong Cong Tung"
                  className="avatar"
                  width={120}
                  height={120}
                  priority
                />
              </div>
              <div className="profile-info">
                <h1>Duong Cong Tung (Tung Duong)</h1>
                <h2>Senior Full Stack Developer</h2>
                <p className="tagline">
                  Passionate about crafting digital experiences that seamlessly blend form and
                  function. With expertise in full-stack development and a keen eye for detail, I
                  transform complex challenges into elegant, user-centric solutions.
                </p>
              </div>
            </div>
            <div className="contact-info">
              <div>
                <i className="fas fa-envelope"></i> duongtungls@gmail.com
              </div>
              <div>
                <i className="fas fa-phone"></i> +84-382-563034
              </div>
              <div>
                <i className="fas fa-map-marker-alt"></i> Hanoi, Vietnam
              </div>
              <div>
                <i className="fab fa-github"></i> duongtungls
              </div>
              <div>
                <i className="fab fa-linkedin"></i>https://www.linkedin.com/in/tung-duongb65015133
              </div>
            </div>
          </div>
        </header>

        <section className="about">
          <h2>About Me</h2>
          <p>
            I&apos;m a full-stack developer with a passion for crafting elegant solutions to complex
            problems. Specializing in JavaScript ecosystems, I blend technical expertise with
            creative thinking to build applications that not only function flawlessly but also
            delight users with their intuitive design and performance.
          </p>
          <p>
            Beyond coding, I&apos;m an avid marathoner who applies the same discipline and
            persistence to software development that I bring to long-distance running. This mindset
            helps me tackle challenging projects with endurance and precision, always pushing toward
            excellence while maintaining a balanced perspective on both technical achievements and
            user needs.
          </p>
          <div className="tech-summary">
            <div className="tech-item">
              <strong>Frontend:</strong> React, Next.js, Redux
            </div>
            <div className="tech-item">
              <strong>Backend:</strong> Node.js, Express, Laravel
            </div>
            <div className="tech-item">
              <strong>Mobile:</strong> React Native, Android, Expo
            </div>
            <div className="tech-item">
              <strong>Database:</strong> MongoDB, PostgreSQL, MySQL
            </div>
          </div>
        </section>

        {/* Skills section moved here, right after About Me */}
        <section className="skills">
          <h2>Skills & Expertise</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <p>React.js, Next.js, Redux</p>
            </div>
            <div className="skill-category">
              <h3>Backend Development</h3>
              <p>Node.js, Express, Laravel</p>
            </div>
            <div className="skill-category">
              <h3>Mobile Development</h3>
              <p>React Native, Android, Expo, Native Modules</p>
            </div>
            <div className="skill-category">
              <h3>Database Management</h3>
              <p>MongoDB, PostgreSQL, MySQL, Supabase, Firebase</p>
            </div>
            <div className="skill-category">
              <h3>TypeScript/JavaScript</h3>
              <p>ES6+, TypeScript, Type Safety</p>
            </div>
            <div className="skill-category">
              <h3>State Management</h3>
              <p>Redux, Context API, Recoil, Zustand</p>
            </div>
            <div className="skill-category">
              <h3>Version Control & CI/CD</h3>
              <p>Git, GitHub, GitHub Actions, CI/CD</p>
            </div>
            <div className="skill-category">
              <h3>Web Performance</h3>
              <p>Optimization, SSR, Caching, SEO</p>
            </div>
          </div>
        </section>

        <section className="experience">
          <h2>Professional Experience</h2>

          <div className="experience-item">
            <div className="date-location">
              <div className="date">December 2024 - Present</div>
              <div className="location">Hanoi, Vietnam</div>
            </div>
            <div className="role-company">
              <h3>Senior Full-stack Developer</h3>
              <h4>Amplifi & Impact Ltd</h4>
              <ul>
                <li>Leading full-stack development projects</li>
                <li>Architecting scalable web applications</li>
                <li>Implementing modern frontend frameworks and backend technologies</li>
                <li>Collaborating with cross-functional teams</li>
              </ul>
            </div>
          </div>

          <div className="experience-item">
            <div className="date-location">
              <div className="date">December 2023 - December 2024</div>
              <div className="location">Hanoi, Vietnam</div>
            </div>
            <div className="role-company">
              <h3>Senior Full-stack Developer</h3>
              <h4>Peppermint Innovation Limited</h4>
              <ul>
                <li>Developed and maintained full-stack applications</li>
                <li>Worked with modern JavaScript frameworks</li>
                <li>Implemented responsive designs and backend APIs</li>
                <li>Collaborated with teams to deliver high-quality software solutions</li>
              </ul>
            </div>
          </div>

          <div className="experience-item">
            <div className="date-location">
              <div className="date">January 2021 - December 2023</div>
              <div className="location">Hanoi, Vietnam</div>
            </div>
            <div className="role-company">
              <h3>Full-stack Developer</h3>
              <h4>Xpon Technologies</h4>
              <ul>
                <li>Built and maintained web applications using modern technologies</li>
                <li>Implemented frontend interfaces with React and backend systems with Node.js</li>
                <li>Worked with databases and API design</li>
                <li>Collaborated in an Agile development environment</li>
              </ul>
            </div>
          </div>

          <div className="experience-item">
            <div className="date-location">
              <div className="date">June 2020 - December 2020</div>
              <div className="location">Remote</div>
            </div>
            <div className="role-company">
              <h3>Full Stack Developer, Mobile Developer</h3>
              <h4>Holoscribe</h4>
              <ul>
                <li>Developed both web and mobile applications</li>
                <li>Implemented full-stack solutions with modern frameworks</li>
                <li>Worked on cross-platform mobile development</li>
                <li>Created responsive and user-friendly interfaces</li>
              </ul>
            </div>
          </div>

          <div className="experience-item">
            <div className="date-location">
              <div className="date">April 2018 - December 2019</div>
              <div className="location">London, United Kingdom</div>
            </div>
            <div className="role-company">
              <h3>Fullstack Developer</h3>
              <h4>Focal Labs Limited</h4>
              <ul>
                <li>Developed full-stack web applications</li>
                <li>Worked with JavaScript frameworks and backend technologies</li>
                <li>Implemented database solutions and API integrations</li>
                <li>Participated in the full software development lifecycle</li>
              </ul>
            </div>
          </div>

          <div className="previous-experience">
            <h3>Previous Roles</h3>
            <div className="prev-role">
              <div>
                <strong>Mobile Developer</strong> at Freelancer.com (Remote) | Aug 2017 - Mar 2018
              </div>
            </div>
            <div className="prev-role">
              <div>
                <strong>IT Specialist</strong> at GaneshAID Non-profit Consultancy Company (Hanoi) |
                Oct 2016 - Aug 2017
              </div>
            </div>
            <div className="prev-role">
              <div>
                <strong>Web Developer</strong> at Freelancer.com (Remote) | Jan 2014 - Oct 2016
              </div>
            </div>
          </div>
        </section>

        <div className="two-column-section">
          <section className="education">
            <h2>Education</h2>
            <div className="education-item">
              <h3>Bachelor of Education in Mathematics</h3>
              <h4>Thai Nguyen University - The Education University</h4>
              <div className="edu-date">2009 – 2013</div>
              <h4>Key Achievements:</h4>
              <ul>
                <li>Strong foundation in mathematical analysis and abstract algebra</li>
                <li>Developed problem-solving skills through rigorous mathematical training</li>
                <li>Applied computational methods to solve complex problems</li>
                <li>Gained expertise in logical reasoning and analytical thinking</li>
              </ul>
            </div>

            <h2>Services</h2>
            <div className="services-list">
              <div className="service-item">Web Application Development</div>
              <div className="service-item">Mobile App Development</div>
              <div className="service-item">Backend Development</div>
              <div className="service-item">Database Design & Integration</div>
              <div className="service-item">Performance Optimization</div>
              <div className="service-item">Full-Stack Development</div>
            </div>
          </section>
        </div>

        <footer>
          <p>This resume was generated from duongtungls.github.io</p>
          <p className="print-date">
            Printed on <span>{currentDate}</span>
          </p>
        </footer>
      </div>
    </>
  );
}
