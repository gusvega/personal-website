import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/kubernetes.svg'
import logoFamilyFund from '@/images/clients/family-fund/javascript.svg'
import logoGreenLife from '@/images/clients/green-life/nodeJS.svg'
import logoHomeWork from '@/images/clients/home-work/azure.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/docker.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/terraform.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/python.svg'
import logoUnseal from '@/images/clients/unseal/react.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/Button'


const clients = [
  ['Python', logoPhobiaLight],
  ['Javascript', logoFamilyFund],
  ['React', logoUnseal],
  ['Docker', logoMailSmirk],
  ['Azure', logoHomeWork],
  ['Node', logoGreenLife],
  ['Kubernetes', logoBrightPath],
  ['Terraform', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Technologies I like to work with the most
          </h2>
          {/* f */}
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <div className='flex justify-center items-center'>
                    <Image src={logo} alt={client} unoptimized />
                    <p className='pl-5 text-white'>{client}</p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="A bit about me"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Born and raised in Mexico. I am 33 years old. Called the US my home in 2005. Went to high school, college, and got my Bachelors in Computer Information Systems in 2016. I have lived in Austin TX, Denver CO, and now Seattle WA. Happily Married. I have two dogs. Love playing indoor soccer. I have worked as Frontend, Backend, DevOps, and Solutions Engineer. I always find myself learning something new. Aside from my career, I invest in real estate with a focus on short term rentals.
        </p>
        <br></br>
        <Button
          className="mt-8"
          href='https://gusvega.dev/about'
        >
          Read more
        </Button>

      </SectionIntro>

    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
         title="Focus areas"
         className="mt-24 sm:mt-32 lg:mt-40"
       >
         <p>
           In the world of software development, each developer and company has their own tech stack preferences. It's like picking a favorite flavor of ice cream - there's something for everyone!
           <br></br>
           <br></br>

           For me, after exploring the options, I settled on the tech stack that fits me the most. It just clicks with me, like finding the perfect coffee in the morning. With my preferred stack, I'm confident I can whip up some cool projects and provide top-notch services for clients and/or provide value to any company.

           So while others have their tech stack flavors, I'm sticking to mine, ready to code up a storm and bring some tech magic to the table!

           <br></br>
           <br></br>
           <Button
           className="mt-8"
           href='https://gusvega.dev/process'
         >
           Read more
         </Button>        </p>
       </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">

          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Front End">
              I'm all about React, Tailwind, and Next.js for frontend development. They're the dream team for creating interactive and high-performance web applications!
            </ListItem>
            <ListItem title="Back End">
              Node.js and Express are my backend development superheroes! They empower me to build powerful, scalable, and efficient server-side applications effortlessly.
            </ListItem>
            <ListItem title="Cloud">
              I like all clouds but Azure rocks! It's my go-to platform for seamless deployment and effortless scalability.
            </ListItem>
            <ListItem title="Automation">
              I love automation! Terraform, Ansible, Github Actions, Docker, and Kubernetes are my go-to tools for automating deployments.
            </ListItem>
          </List>
          <br></br>
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    '.',
}

export default async function Home() {
  let caseStudies = (await loadMDXMetadata('work')).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-7xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Gus Vega.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            <span className='font-bold'>Senior DevOps/Software Engineer</span> specializing in containerized applications.
          </p>
          <p className="mt-6 text-xl text-neutral-600">
          Architecture, UI/UX, and deployment: I enjoy every piece of web app development.
          </p>
          <p className="mt-6 text-xl text-neutral-600">
          JavaScript ecosystem tools power all my web app projects - <span className='font-bold'>React - Node - NextJS</span>
          </p>
          <p className="mt-6 text-xl text-neutral-600">
          <span className='font-bold'>Azure</span> and <span className='font-bold'>GitHub Actions</span> drive my automation and cloud deployments
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        I believe everyone should have four hobbies. One that brings you happiness. One that keeps you creative. One that makes you money. And one that keeps you healthy
      </Testimonial>

{/* s */}
      <Services />

      <ContactSection />
    </>
  )
}
