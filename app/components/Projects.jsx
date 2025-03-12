import React from 'react'
import { PROJECTS } from '../constants'
import Image from 'next/image'

const addedProjects = PROJECTS.name === 'Assembly-Endgame' || PROJECTS.name === 'Tenzies'

const Projects = () => {
  return (
    <div>
        <h2 className='my-12 text-center text-2xl font-semibold uppercase tracking-wide text-slate-200'>Projects</h2>
        <div className='flex flex-wrap items-center justify-center gap-12'>
            {PROJECTS.map((project, index) => (
                <a key={index} href={project.url} target='_blank'
                    className='no-underline transition-transform duration-200 ease-in-out hover:scale-110' >
                    <Image 
                        src={project.image}
                        alt={project.name}
                        width={260}
                        className={`object-cover ${project.name === 'bookMyEvents' ? 'rounded-full' : 'rounded-[20%]'}
                            ${project.name === 'CarePulse' ? 'w-[300px]' : 'w-[260px]'}
                            `}
                    />
                    <p className={`${project.name === 'CarePulse' ? 'mb-2' : 'mt-6'} text-xl font-semibold text-center`}>{project.name}</p>
                </a>
            ))}
        </div>
    </div>
  )
}

export default Projects