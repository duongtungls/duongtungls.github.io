'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import './print-styles.css';

export default function PrintResume() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
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
        {/* PAGE 1 */}
        <header>
          <div className="header-content">
            <div className="profile-section">
              <div className="avatar-container">
                <Image
                  src="/hero/tung-photos/portrait-new.webp"
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
                  Full-stack developer specializing in JavaScript ecosystems with a growing
                  expertise in AI and machine learning applications. I blend technical knowledge
                  with creative thinking to build exceptional applications that balance
                  functionality with intuitive user experiences. My background in mathematics
                  informs my analytical approach to problem-solving, while the discipline I&apos;ve
                  developed as a marathon runner helps me tackle complex development challenges with
                  perseverance and strategic planning. Passionate about leveraging cutting-edge
                  technologies to create solutions that make a meaningful impact.
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
                <i className="fab fa-linkedin"></i> linkedin.com/in/tung-duongb65015133
              </div>
            </div>
          </div>
        </header>

        <div className="page-content">
          <div className="side-by-side">
            <section className="about">
              <h2>About Me</h2>
              <p>
                I&apos;m a full-stack developer with a passion for crafting elegant solutions to
                complex problems. Specializing in JavaScript ecosystems, I blend technical expertise
                with creative thinking to build applications that not only function flawlessly but
                also delight users with their intuitive design and performance.
              </p>
              <div className="tech-summary">
                <div className="tech-item">
                  <strong>AI & ML:</strong> LLMs, Stable Diffusion, Langchain, Ollama
                </div>
                <div className="tech-item">
                  <strong>Frontend:</strong> React, Next.js, Redux
                </div>
                <div className="tech-item">
                  <strong>Backend:</strong> Node.js, Express, Laravel
                </div>
                <div className="tech-item">
                  <strong>Mobile:</strong> React Native, Android
                </div>
                <div className="tech-item">
                  <strong>Database:</strong> MongoDB, PostgreSQL
                </div>
              </div>
            </section>

            <section className="education compact-section">
              <h2>Education</h2>
              <div className="education-item">
                <h3>Bachelor of Education in Mathematics</h3>
                <h4>Thai Nguyen University</h4>
                <div className="edu-date">2009 – 2013</div>
              </div>

              <h2 className="mt-4">Services</h2>
              <div className="services-list">
                <div className="service-item">Web Application Development</div>
                <div className="service-item">Mobile App Development</div>
                <div className="service-item">Backend Development</div>
                <div className="service-item">Database Design</div>
              </div>
            </section>
          </div>

          <section className="skills">
            <h2>Skills & Expertise</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>AI & Machine Learning</h3>
                <p>Ollama, LLMs, Stable Diffusion, HuggingFace, Langchain, N8N</p>
              </div>
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
                <p>React Native, Android, Expo</p>
              </div>
              <div className="skill-category">
                <h3>Database Management</h3>
                <p>MongoDB, PostgreSQL, MySQL</p>
              </div>
              <div className="skill-category">
                <h3>TypeScript/JavaScript</h3>
                <p>ES6+, TypeScript, Type Safety</p>
              </div>
              <div className="skill-category">
                <h3>State Management</h3>
                <p>Redux, Context API</p>
              </div>
              <div className="skill-category">
                <h3>Version Control</h3>
                <p>Git, GitHub, CI/CD</p>
              </div>
              <div className="skill-category">
                <h3>Web Performance</h3>
                <p>Optimization, SSR, SEO</p>
              </div>
            </div>
          </section>

          {/* PAGE 2 */}
          <section className="experience page-break-before">
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
                  <li>
                    Implemented frontend interfaces with React and backend systems with Node.js
                  </li>
                  <li>Worked with databases and API design</li>
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
                </ul>
              </div>
            </div>

            <div className="previous-experience">
              <h3>Previous Roles</h3>
              <div className="prev-roles-grid">
                <div className="prev-role">
                  <div>
                    <strong>Mobile Developer</strong> at Freelancer.com | Aug 2017 - Mar 2018
                  </div>
                </div>
                <div className="prev-role">
                  <div>
                    <strong>IT Specialist</strong> at GaneshAID | Oct 2016 - Aug 2017
                  </div>
                </div>
                <div className="prev-role">
                  <div>
                    <strong>Web Developer</strong> at Freelancer.com | Jan 2014 - Oct 2016
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer>
          <p>
            This resume was generated from duongtungls.github.io | Printed on{' '}
            <span>{currentDate}</span>
          </p>
        </footer>
      </div>
    </>
  );
}
