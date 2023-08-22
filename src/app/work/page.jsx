import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { formatDate } from '@/lib/formatDate'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'



function CaseStudies() {

  let caseStudies = {
    microsoft: {
      client: 'Microsoft',
      title: 'Security Solutions Engineer',
      summary: [
        '• Designed and implemented Azure infrastructure solutions to optimize team productivity and performance for the Data Centers Physical Security Cloud Infrastructure team.',
        '• Contributed with the adoption of Docker and Kubernetes for containerizing applications, streamlining deployment processes across pre-production and production environments.',
        '• Automated critical event monitoring by integrating the ticketing system with third-party software, leveraging REST APIs for seamless communication between applications.',
        '• Assisted team with implementation of Infrastructure as Code for stable and easily maintainable environment for the team.'
      ],
      date: '2021-06',
      done: '2022-07',
      service: 'Redmond, WA',
    },
    ge: {
      client: 'General Electric',
      title: 'Software Engineer',
      description:
        'FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution.',
      summary: [
        '• Collaborated with the Mobile Enterprise Suite service team to deploy cutting-edge mobile and web applications for customers globally, utilizing technologies such as React, Android Development, iOS Development, Couchbase, AWS, Oracle, and PostgreSQL databases.',
        '• Played a key role in the transition of mobile and web applications to a micro-service containerized architecture using Docker, Helm, Kubernetes, and AWS, significantly improving deployment efficiency and maintenance processes.',
        '• Employed Agile methodologies to ensure timely delivery of high-quality software, consistently meeting sprint objectives.'
      ],
      date: '2019-08',
      done: '2020-03',
      service: 'Denver, CO',
    },
    raytheon: {
      client: 'Raytheon Technologies',
      title: 'Software Engineer',
      description:
        'FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution.',
      summary: [
        '• Developed and maintained full-stack applications, utilizing Spring as the back-end framework and integrating reactJS to enhance user experience.',
        '• Conducted in-depth research on innovative tools and technologies, contributing to the adoption of new software solutions and improving development processes.',
        '• Facilitated seamless deployment of containerized applications to different environments using Docker, Kubernetes, and Rancher, ensuring reliability and scalability.',
        '• Played a pivotal role in an agile, microservices-focused team, contributing to successful sprint executions.'
      ],
      date: '2017-09',
      done: '2019-08',
      service: 'Denver, CO',
    },
    ots: {
      client: 'Open Technologies Solutions',
      title: 'DevOps Engineer',
      description:
        'FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution.',
      summary: [
        '• Automated critical DevOps operations using PowerShell and shell scripting, streamlining deployment processes and reducing manual intervention.',
        '• Managed and optimized continuous integration and delivery environments using Octopus Deploy, resulting in efficient and error-free application deployments.',
        '• Proactively monitored the Team Foundation Server, promptly resolving issues to maintain the smooth functioning of scheduled application deliveries.',
      ],
      date: '2017-03',
      done: '2017-09',
      service: 'Denver, CO',
    },
    sharyland: {
      client: 'Sharyland Utilities',
      title: 'Systems/Network Analyst',
      description:
        'FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution.',
      summary: [
        '• Administered and optimized LAN/WAN network infrastructure, utilizing WhatsUp Gold Network Monitoring system to proactively monitor network performance.',
        '• Designed and implemented new network routes, significantly improving communication speed and ensuring robust backup solutions for device malfunctions.',
        '• Collaborated with cross-functional teams to configure equipment and implement network enhancements, enhancing overall network reliability and efficiency.',
      ],
      date: '2014-05',
      done: '2016-08',
      service: 'Denver, CO',
    }

  }

  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Companies
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {Object.entries(caseStudies).map(([key, value]) => (
          <FadeIn key={value.client}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      {value.client}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {value.service}
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      <time dateTime={value.date}>
                        {formatDate(value.date)}
                      </time>
                    </p>
                    {'~'}
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      <time dateTime={value.done}>
                        {formatDate(value.done)}
                      </time>
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <div>{value.title}</div>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {value.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}



export default async function Work() {
  let caseStudies = {
    client: 'Microsoft',
    title: 'Security Solutions Engineer',
    description:
      'FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution.',
    summary: [
      '• Designed and implemented Azure infrastructure solutions to optimize team productivity and performance for the Data Centers Physical Security Cloud Infrastructure team.',
      '• Contributed with the adoption of Docker and Kubernetes for containerizing applications, streamlining deployment processes across pre-production and production environments.',
      '• Automated critical event monitoring by integrating the ticketing system with third-party software, leveraging REST APIs for seamless communication between applications.',
      '• Assisted team with implementation of Infrastructure as Code for stable and easily maintainable environment for the team.'
    ],
    logo: '',
    date: '2021-06',
    done: '2022-07',
    service: 'Redmond, WA',
    testimonial: {
      author: { name: 'Debra Fiscal', role: 'CEO of FamilyFund' },
      content:
        'Working with Studio, we felt more like a partner than a customer. They really resonated with our mission to change the way people convince their parents to cash out their pensions.',
    },
  }

  return (
    <>
      <PageIntro
        title="Work Experience"
      >
        <p>
          These are the companies that I have worked for. I am also adding a couple of bullet points to share what I did for each company and the impact I made.
        </p>
      </PageIntro>

      <CaseStudies />
      <ContactSection />
    </>
  )
}
