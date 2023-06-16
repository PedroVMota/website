import Image from 'next/image'
import Link from "next/link"
import './globals.css'
import type { GetServerSideProps, NextPage } from 'next'
import { about_me } from '../components/data/content'

export default function Home() {
  return (
    <div className='w-full h-screen flex flex-center justify-center py-10'>
      <div className='grid grid-cols-2 gap-4 w-5/6'>
        <div className="px-4 w-full flex flex-center flex-col">
          <div className='py-8'>
            <h2 className='text-2xl text-slate-100 font-bold py-2'> {about_me.Name} </h2>
            <span className='py-8 text-slate-300'>{about_me.Apresentation}</span>
          </div>
          <section>
            <h4 className='font-semibold text-slate-100'>My Skills:</h4>
            <div className='flex'>
              <ul className='px-4'>
                {
                  about_me.Skills.map((item, index) => (
                    <li>{item}</li>
                  ))}
              </ul>
            </div>
          </section>
        </div>
        <div className="px-4 w-full flex flex-center">p</div>
      </div>
    </div>
  )
}
