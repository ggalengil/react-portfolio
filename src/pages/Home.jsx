import { motion } from 'motion/react';
import Wave from 'react-wavify';
import ExpandableCard from '../components/ExpandableCard/ExpandableCard';
import assets from '../assets/index.jsx';
import { useTranslation } from 'react-i18next';


function openCV(){
  window.open('/CV_GuillermoGarciaAlenGil.pdf', '_blank');
}

function Home() {
  const { t } = useTranslation();
  
  const skillsData = [
    {
      title: t('skills.codingLanguages'),
      skills: [
        {name: "Java", icon: assets.java},
        {name: "JavaScript", icon: assets.js},
        {name: "C#", icon: assets.csharp},
        {name: "Python", icon: assets.python}
      ]
    },
    {
      title: t('skills.frameworks'),
      skills: [
        {name: "Spring Boot", icon: assets.spring},
        {name: "Hibernate/JPA", icon: assets.hibernate},
        {name: "React", icon: assets.react},
        {name: "TailwindCSS", icon: assets.tailwind}
      ]
    },
    {
      title: t('skills.databases'),
      skills: [
        {name: "MySQL", icon: assets.mysql},
        {name: "Oracle SQL Developer", icon: assets.sqldeveloper},
        {name: "SQLite", icon: assets.sqlite},
        {name: "PostgreSQL", icon: assets.postgre}
      ]
    },
    {
      title: t('skills.others'),
      skills: [
        {name: "Git", icon: assets.git},
        {name: "HTML/CSS", icon: assets.html},
        {name: "OOP", icon: assets.oop},
        {name: "REST APIs", icon: assets.api}
      ]
    }
  ];

  const cardHover = {
    whileHover: {
                  scale: 1.1,
                  backgroundColor: '#2e3339',
                  transition: { duration: 0.1 }
    }
  };

  return (
    <>
      
      {/*Main container*/}
      <div className="relative py-6 min-h-screen flex flex-col items-center-safe justify-center-safe">
        {/* Hero*/}
        <motion.div 
          className='w-full max-w-6xl flex flex-col gap-8 text-center items-center-safe '
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* Profile*/}
          <div className='flex flex-col items-center-safe'>
            <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
              <img 
                className="w-48 md:w-60 h-auto rounded-[2rem] shadow-2xl border-4 border-zinc-800"
                src={assets.portrait} 
                alt="profile picture"
              />
              <h1 className="text-5xl md:text-7xl md:text-left font-bold font-['Jersey_25'] text-mist-200 leading-tight tracking-wide">Guillermo <br/>García-Alén Gil</h1>
            </div>
            <p className="mt-4 text-lg md:text-3xl font-['Roboto'] text-mist-200 tracking-wider">{t('hero.position')}</p>
            <a className="mt-2 text-sm md:text-lg font-['Roboto'] text-mist-200 tracking-wide hover:text-indigo-300 transition-colors" href="mailto:guillegarciaalen@proton.me">guillegarciaalen@proton.me</a>
          </div>

          {/* Links*/}
          <div className='grid grid-cols-1 md:grid-cols-2 md:grid-flow-col w-70 sm:w-full max-w-3xl gap-6'>
            <motion.a 
              className="p-5 sm:p-6 text-center text-zinc-800 bg-indigo-50 rounded-xl border-2 border-indigo-50 hover:text-mist-200" 
              href='https://linkedin.com/in/guillermogarciaalengil' 
              target='_blank' 
              rel='noopener noreferrer'
              aria-label='my LinkedIn'
              {...cardHover}
            >LinkedIn</motion.a>
            <motion.a 
              className="p-5 sm:p-6 text-center text-zinc-800 bg-indigo-50 rounded-xl border-2 border-indigo-50 hover:text-mist-200" 
              href='https://github.com/ggalengil' 
              target='_blank' 
              rel='noopener noreferrer'
              aria-label='my GitHub'
              {...cardHover}
            >Github</motion.a>
            <motion.button 
              className="p-5 sm:p-6 row-span-2 text-zinc-800 bg-indigo-50 rounded-xl border-2 border-indigo-50 cursor-pointer hover:text-mist-200" 
              onClick={openCV}
              {...cardHover}
            >{t('hero.downloadCV')}</motion.button>
          </div>

          {/* Divider*/}
          <div className="w-30 sm:w-50 h-1 bg-indigo-300 rounded-full my-4 opacity-70"/>

          {/* Experience Section*/}
          <ExpandableCard title={t('experience.title')}>
            <div className="text-left space-y-4 bg-slate-800 p-5 sm:p-6 rounded-2xl border border-slate-600 border-l-4 border-l-indigo-400 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-mist-200 font-bold">
                Atos It Solutions - Santiago
              </h3>

              <div className="w-20 h-1 bg-indigo-300 rounded-full my-4"/>
              <p className="text-lg text-slate-300">{t('experience.internship.position')}</p>

              <p className="text-sm text-slate-300 opacity-70">
                {t('experience.internship.date')}
              </p>

              <ul className="list-disc text-mist-200 pl-5 space-y-1">
                {t('experience.internship.responsibilities', {
                  returnObjects: true
                }).map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          </ExpandableCard>

          {/* Projects Section*/}
          <ExpandableCard title={t('projects.title')}>
            <div className='text-left space-y-6 bg-slate-800 p-5 sm:p-6 rounded-2xl border border-slate-600 border-l-4 border-l-indigo-400 shadow-lg'>
              <h3 className='text-xl sm:text-2xl font-bold text-mist-200'>{t('projects.portfolio.title')}</h3>
              <div className="w-20 h-1 bg-indigo-300 rounded-full my-4"/>
              <p className='text-base text-mist-200'>{t('projects.portfolio.description')}</p>
              <a 
                className='text-indigo-400 hover:underline'
                href="https://github.com/ggalengil/react-portfolio"
                target='_blank' 
                rel='noopener noreferrer'
              >{t('projects.repository')}</a>
            </div>
            <div className='mt-10'>
              <p className='text-sm italic text-slate-300 opacity-70'>{t('projects.comingSoon')}</p>
            </div>
          </ExpandableCard>

          {/* Skills Section*/}
          <ExpandableCard title={t('skills.title')}>
            <div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              
            >
              {skillsData.map((section, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800 p-5 sm:p-6 rounded-2xl border border-slate-600 border-l-4 border-l-indigo-400 shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-xl font-bold text-indigo-100">
                    {section.title}
                  </h3>

                  <div className="w-20 h-1 bg-indigo-300 rounded-full my-4"/>

                  <ul className="space-y-5">
                    {section.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-4 text-slate-200"
                      >
                        <img
                          className="w-8 sm:w-10 h-auto" 
                          src={skill.icon} 
                          alt={skill.name}
                        />
                        <p className='text-sm sm:text-base'>{skill.name}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </ExpandableCard>
        </motion.div>
      </div>

      {/*Wave Footer Background*/}
      <div className='hidden sm:block fixed bottom-0 w-full h-[15vh] sm:h-[20vh] md:h-[25vh] -z-10 overflow-hidden'>
        <Wave 
          className ='absolute bottom-0 w-full h-full'
          fill='#4f6db8'
          paused={false}
          options={{
            height: 120,
            amplitude: 8,
            speed: 0.20,
            points: 3
          }}
        />
      </div>
      
    </>
  )
}

export default Home