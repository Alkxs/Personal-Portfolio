import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })


  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({ 
      ...formData, 
      [name]: value 
      })
  }

    async function handleSubmit(event) {
      event.preventDefault()

      try {
        const response = await fetch('https://formspree.io/f/mjvdlbkq', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const data = await response.json()
        console.log(data)
        toast.success('Message sent successfully!', {
          position: toast.POSITION.BOTTOM_RIGHT,
        })
      } catch (error) {
        console.error(error)
        toast.error('An error occurred. Please try again later.', {
          position: toast.POSITION.BOTTOM_RIGHT,
        })
      }

    
      }


  return (
    <section name='contact'>
      <h2 className='title'>contact</h2>
      <div className='container'>
        <form
          className='form-card max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-3xl bg-gray-100 dark:bg-[#112b52] flex flex-col w-full rounded-lg shadow-lg hover:shadow-2xl hover:shadow-black border border-gray-200 dark:border-cyan-500 py-4 sm:py-6 md:pt-8 lg:py-14 pb-1 sm:pb-2 md:pb-0 lg:pb-0 px-4 lg:px-14 sm:px-6 md:px-8 gap-2 md:gap-6 mb-4'
          name='contact'
          method='POST'
          onSubmit={handleSubmit}
        >
          <input
            className='border dark:border-cyan-500  text-dark-main dark:text-gray-300 dark:bg-dark-main p-2 rounded-md'
            type='text'
            placeholder='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className='my-4 p-2 dark:bg-dark-main border dark:border-cyan-500 text-dark-main dark:text-gray-300 rounded-md'
            type='email'
            placeholder='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            className='border dark:border-cyan-500 dark:bg-dark-main text-dark-main dark:text-gray-300 p-2 rounded-md'
            name='message'
            rows='5'
            placeholder='message'
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <div className='flex justify-center items-center'>
            <button
              type='submit'
              className='text-[#0a192f] dark:bg-dark-main dark:text-white border border-[#0a192f] hover:border-cyan-500 dark:border dark:border-cyan-500 hover:text-white hover:bg-cyan-500 dark:hover:border-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 duration-300 px-6 lg:px-8 py-3 lg:py-3 mt-4 :mt-10 mx-auto flex items-center rounded-md'
            >
              Submit
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </section>
  )
}
export default Contact
