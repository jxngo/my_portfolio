import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import '../style/slider.css' 


import A1 from '../assets/project-cover/AVK/A1.png';
import A2 from '../assets/project-cover/AVK/A2.png';
import A3 from '../assets/project-cover/AVK/A3.png';


import P1 from '../assets/project-cover/Pokify/p1.png'
import P2 from '../assets/project-cover/Pokify/p2.png'
import P3 from '../assets/project-cover/Pokify/p3.png'

import R1 from '../assets/FinalReport.pdf'




export const Slider = () => {
    const projects = [
        {
          name: 'Pokify',
          link: '',
          screenshots: [
            P1, P2, P3
          ],
          description: 'Pokify is a web application that displays Spotify users top 6 listening artists with their corresponding Pokemon types.'
        },
        {
          name: 'Algorithm Viewer',
          link: 'https://algorithmvisionknights-v3.web.app/',
          screenshots: [
            A1,A2,A3
          ],
          description: 'An interactive website that visualizes algorithms to make learning them a little bit easier. Teaches the fundamentals of algorithm design in an approachable and fun way.'
        },
        {
          name: 'Concurrent Research',
          description: '',
          embedded: 'R1'
        },
        {
          name: 'Hospitality Bay Platform',
          link: 'https://github.com/jxngo/Sunbay-Hospitality-Platform/tree/main/SunBaySolutions',
          description: 'Junior design project that showcases MERN stack with mobile app development. It is a hotel application that communicates between admin, employees, and guests.'
        },
      ]
    

    return (
        <div>
            {projects.map((project, index) => (
                <div key={index}>
                    <h2>
                        {
                            project.link ?
                                <a target="_blank" rel="noopener noreferrer" href={project.link}>{project.name}</a>
                                :
                                project.name
                        }
                    </h2>
                <p>{project.description}</p>

                {project.screenshots ?
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    scrollbar={{ clickable: true }}
                    className='swiper' 
                >
                    <div>
                        {project.screenshots.map((screenshot, sIndex) => (
                            <SwiperSlide className='swiper-slide'><img key={sIndex} src={screenshot} style={{ width: "100%"}} alt={'screenshot'}></img></SwiperSlide>
                        ))}
                    </div>
                </Swiper>
                : project.embedded ? <embed src={R1}></embed>: null}

                </div>
            

            ))
            
            }

        </div>
    )
}

export default Slider