import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpeg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpeg'
import imageBlakeReid from '@/images/team/blake-reid.jpeg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpeg'
import imageDriesVincent from '@/images/team/dries-vincent.jpeg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpeg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpeg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpeg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpeg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpeg'
import imageMichaelFoster from '@/images/team/michael-foster.jpeg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpeg'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance your passion with your passion for life."
        invert
      >
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
            Our team has been with us since the beginning because none of them
            are allowed to have LinkedIn profiles.
          </GridListItem>
          <GridListItem title="Trust" invert>
            We don’t care when our team works just as long as they are working
            every waking second.
          </GridListItem>
          <GridListItem title="Compassion" invert>
            You never know what someone is going through at home and we make
            sure to never find out.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Team',
    people: [
      {
        name: 'Gus Vega',
        role: 'CEO | Founder | CFO | CTO | Senior Software Engineer | UX/UI Designer | Program Director | Project Manager | IT Manager',
        image: { src: imageChelseaHagon },
      },

    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'About Me',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadMDXMetadata('blog')).slice(0, 2)

  return (
    <>
      <PageIntro title="About Me">
        <p>
          Hello There!  My name is Gus Vega. I am a Machine Learning Engineer.
        </p>
        <br></br>
        <p>
          Let's break down my life into three parts...
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p className='text-sm font-bold'>
            Personal
          </p>
          <p>
            I was born in Mexico and raised there until I was 16 years old. Then my family and I moved to Texas. Lived a very humble life in Mexico - reason to move to Texas. Went to high school then college. I met my beautiful wife while in college and now have been happily married for 10 years. No kids yet. My wife is my engine, she is my everything. 
            <br></br>
            <br></br>
            We love outdoor activities - my favorite is going paddle boarding. We go camping every time there is a chance. I enjoy cooking for my wife while camping... I am trying to master cooking carne asada. I have two dogs (Bella and Kelso). Bella is a terrier mix and probably weights around 15 pounds. We rescued Bella when she was 2 years old. She is now 9 years. She is super loving and loves her own space. Kelso is a poodle and saint bernard mix. He is 2 years old. Kelso is super active and loves the water. They both love riding with us in our Jeep. 
            <br></br>
            <br></br>
            There is three things that I love doing and probably wont stop doing them any time soon. Traveling, playing indoor soccer, and making music. I find joy traveling and experiencing new cultures around the world. Soccer has been one of my passions since the day I was born probably. If I was not in tech, I would probably be a music producer and DJ (techno music baby!).
          </p>
          <p className='text-sm font-bold'>
            Education
          </p>
          <p>
            My education journey has not been the most exciting one. I went to high school right after I moved to the US. Pretty exciting time in high school since I was pretty involved in sports. But never cared about school. Had to learn English because I knew not a single word... I learned a couple words in English by the time I graduated from high school. Even though I did not care much about school, I decided I wanted to go to college and get a bachelors in something to make my parents proud.
            <br></br>
            <br></br>
            I went to college blind. I knew nothing about what college really was or what it involved. I was the first one to graduate high school in my family and the first one to go to college. So not a lot of guidance. Had an amazing time in college (I miss the parties). Somehow I managed to graduate college with a bachelors in computer information systems.
            <br></br>
            <br></br>
            Once I graduated college, I realized that I hated what I studied. Decided to become a software engineer instead. I taught myself how to code. Built mobile apps and websites. Fell in love with building websites and went a lot deeper into learning the ins and outs of building production level web applications. and now, building web application is my focus and what I truly love doing. Oh along the way, I found automation fascinating so decided to focus on that too. Now, I find myself always learning something related to my field.
          </p>
          <p className='text-sm font-bold'>
            Professional
          </p>
          <p>
            Work life started pretty young for me. Probably at the age of 10 in Mexico, my brother and I would help my dad collect recyclable materials from stores around the city (like tons of material), so we could then sell to recycling companies $$. It was kind of like a side hustle for my dad... but no really because we saw that the necessity drove him to it. Learned the importance of work from a young age. At the age of 12, i'd say, I got my first actual 'job'. I worked at a local grocery store where I would help the owners sell fresh orange juice to the nearby office workers. I was finally making some money :)
            <br></br>
            <br></br>
            The move to the US came, since the town where we lived when we moved here was super small (1000 people), there was not a lot of options for me to choose from when it comes to work. There were only cow feed yards, pig farms, and crop growing fields. I worked in cow feed yards in the weekends through high school and some college. While in college, I knew it was time to try something different. Started at Lowe's as a cart pusher, then dish washer at a restaurant, then cook, and then as a server. 
            <br></br>
            <br></br>
            Luckily, I had good friends and one of them told me about an internship at the electricity company that he worked at as network and systems analyst. I guess the manager liked me and gave me the internship. That job is where I learned one or two things about computer networking and linux. When I graduated college, I made the critical decision to shift my focus into software engineering and decided that moving to Denver, CO was a good choice.
            <br></br>
            <br></br>
            My decision to move to Denver was the correct one, even though I struggled at the beginning, everything came to place. I got my first job right out of college as a DevOps Engineer (place where I felt in love with software automation). Then Raytheon technologies where I had the opportunity to work in the front end and back end of applications being developed. General Electric reached out and decided to make the move. In GE, I learned everything about deployments, infrastructure, security, etc. Microsoft reached out and seemed to like what I had done and so I decided to make the move and moved to Seattle WA.
          </p>
        </div>

      </PageIntro>
      <ContactSection />
    </>
  )
}
