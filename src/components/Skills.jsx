import cardSkills from '../data/cardSkills'


const Skills = () => {
  
  return (
    <section name='skills'>
      <h2 className='title'>Skills</h2>
      <div className='container'>
        <div className='skills-card max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl xl:max-w-6xl bg-white dark:bg-dark-main w-full flex justify-center items-center rounded-lg shadow-lg hover:shadow-2xl hover:shadow-black border dark:hover:shadow-white border-gray-200 dark:border-cyan-500'>
          <div className='skills-container grid gap-8 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-10 pt-14 '>
            {cardSkills.map((skill) => {
              return (
                <div className='skills-content' key={skill.id}>
                  <img src={skill.img} alt={skill.title} />
                  <h4 className='text-black dark:text-gray-200'>{skill.title}</h4>
                  <span className='border' style={{ '--border-color': skill.color }} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Skills

 