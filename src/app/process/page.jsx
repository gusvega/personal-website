import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import imageCode from '@/images/code.jpg'
import imageBuild from '@/images/build.jpg'
import imageTest from '@/images/test.jpg'
import imagePackage from '@/images/package.jpg'
import imageDeploy from '@/images/deploy.jpg'
import imageOperate from '@/images/operate.jpg'
import imageMonitor from '@/images/monitor.jpg'








function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Planning() {
  return (
    <Section title="Planning" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          This initial stage lays the foundation for the entire project. It involves gathering requirements, defining goals, creating a roadmap, and outlining the scope of the project. Proper planning ensures that the development team understands what needs to be accomplished and sets clear expectations for the entire process.
        </p>
        <p>
          When it comes to planning, I find GitHub to be an absolute lifesaver. It's like the mastermind behind my project, enabling seamless collaboration among team members. With GitHub, I can discuss requirements, define our goals, and create a clear roadmap for my journey. It's the centralized hub where all my planning and decision-making come together, ensuring I stay on track and build something amazing.        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Preferred tools and/or Technologies
      </h3>
      <TagList className="mt-4">
        <TagListItem>Github</TagListItem>
        <TagListItem>Azure DevOps</TagListItem>
        <TagListItem>Jira</TagListItem>
        <TagListItem>Agile methodology</TagListItem>

      </TagList>
    </Section>
  )
}

function Code() {
  return (
    <Section title="Code" image={{ src: imageCode }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          The code stage involves writing the actual software using programming languages and frameworks. It is the heart of development where the envisioned features and functionalities come to life. Writing clean, efficient, and maintainable code is crucial for building a successful product.
        </p>

        <p>
          When it's time to code, I can't help but be drawn to the awesome JavaScript ecosystem, especially React for frontend and Node.js for backend. JavaScript is like the heartbeat of my development, where I breathe life into my ideas and create a powerful and cohesive product. With React's sleek frontend capabilities and Node.js's robust backend features, I can craft something truly extraordinary. It's like the perfect harmony, making our coding experience a delightful melody.        </p>

      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Preferred tools and/or Technologies
      </h3>
      <TagList className="mt-4">
        <TagListItem>JavaScript</TagListItem>
        <TagListItem>ReactJS</TagListItem>
        <TagListItem>NodeJS</TagListItem>
        <TagListItem>TypeScript</TagListItem>
        <TagListItem>ExpressJS</TagListItem>
        <TagListItem>Tailwind</TagListItem>
        <TagListItem>NextJS</TagListItem>
        <TagListItem>APIs</TagListItem>
        <TagListItem>Github</TagListItem>
        <TagListItem>Environment Variables</TagListItem>



      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageBuild }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          The build process takes the code and compiles it into executable or deployable artifacts. It checks for syntax errors and other issues, ensuring that the code is ready for further testing and deployment.
        </p>
        <p>
          When it's build time, GitHub Actions takes the stage as my automation star. It's like my backstage crew, effortlessly compiling my code into deployable artifacts. With its seamless and efficient build pipeline, it checks for any hiccups like syntax errors or issues, ensuring my code is polished and ready for the next steps. GitHub Actions makes the build process a breeze, allowing me to focus on the bigger picture.         </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
      Preferred tools and/or Technologies
      </h3>
      <TagList className="mt-4">
        <TagListItem>Github Actions</TagListItem>
        <TagListItem>Yarn</TagListItem>
        <TagListItem>NPM</TagListItem>
      </TagList>
    </Section>
  )
}

function Test() {
  return (
    <Section title="Test" image={{ src: imageTest }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Testing is essential for identifying and fixing bugs, as well as verifying that the software behaves as expected. Various testing methods, such as unit testing, integration testing, and end-to-end testing, help maintain code quality and reliability.
        </p>
        <p>
          Ah, testing time! And you know what my trusty sidekick is? GitHub Actions, once again! As a versatile automation tool, it runs various testing methods like unit testing, integration testing, and end-to-end testing. It's like my testing champion, maintaining the quality and reliability of my code, giving me the confidence that my creation is rock-solid and ready to conquer the world.        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
      Preferred tools and/or Technologies
      </h3>
      <TagList className="mt-4">
        <TagListItem>Unit Testing: Jest</TagListItem>
        <TagListItem>Integration Testing: React Testing Library</TagListItem>
        <TagListItem>End-to-End Testing: Cypress</TagListItem>
      </TagList>
    </Section>
  )
}

function Release() {
  return (
    <Section title="Release" image={{ src: imagePackage }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          The release phase involves preparing the software for distribution to end-users. It includes packaging the application, creating release notes, and handling versioning. A well-organized release process ensures smooth and controlled software updates.
        </p>
        <p>
          Helm charts are used to package and version the application, and Helm itself, in conjunction with Docker, Kubernetes, and Azure Kubernetes Service, simplifies the deployment process. Together, Helm and Azure ensure a smooth, controlled, and automated release of the application to end-users, providing an excellent user experience with minimal downtime and maximum reliability.        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
      Preferred tools and/or Technologies
      </h3>
      <TagList className="mt-4">
        <TagListItem>Helm Charts</TagListItem>
        <TagListItem>Docker</TagListItem>
        <TagListItem>Kubernetes</TagListItem>
        <TagListItem>Github</TagListItem>
      </TagList>
    </Section>
  )
}

function Deploy() {
  return (
    <Section title="Deploy" image={{ src: imageDeploy }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Deploying is the act of putting the software into production or making it available to users. It involves setting up servers, configuring environments, and ensuring the software works correctly in the live environment.
        </p>
        <p>
          Terraform handles infrastructure provisioning, including setting up the necessary resources in Azure during the Deploy stage. Meanwhile, Ansible excels at application deployment and configuration on the established infrastructure. Together with Azure, they form a powerful trio, streamlining the entire Deploy stage effortlessly.         </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
      Preferred tools and/or Technologies
      </h3>
      <TagList className="mt-4">
        <TagListItem>Azure</TagListItem>
        <TagListItem>Azure Kubernetes Service</TagListItem>
        <TagListItem>Terraform</TagListItem>
        <TagListItem>Ansible</TagListItem>
        <TagListItem>Infrastructure as Code</TagListItem>
      </TagList>
    </Section>
  )
}

function Operate() {
  return (
    <Section title="Operate" image={{ src: imageOperate }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Once the software is deployed, the operational phase begins. This stage involves monitoring the application's performance, handling user feedback, and addressing any issues that arise during real-world usage.
        </p>
        <p>
          Once my creation is out in the world, monitoring becomes vital, and that's where Prometheus comes into play. It's like the watchful guardian, keeping an eye on my application's performance, resource usage, bottlenecks, and user behavior. With Prometheus, I can address any issues promptly, ensuring a smooth operation and keeping the users delighted.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
      Preferred tools and/or Technologies
      </h3>
      <TagList className="mt-4">
        <TagListItem>Ansible</TagListItem>
        <TagListItem>Prometheus</TagListItem>
        <TagListItem>Bash Scripting</TagListItem>
      </TagList>
    </Section>
  )
}

function Monitor() {
  return (
    <Section title="Monitor" image={{ src: imageMonitor }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Monitoring is an ongoing process to keep track of the application's performance and health. It helps identify potential bottlenecks, resource usage, and user behavior, enabling continuous improvements and optimizations.
        </p>
        <p>
          Prometheus continues its watchful role during the monitoring stage. It's like my ever-loyal companion, tracking my application's performance and health in real-time. With Prometheus by my side, I can continuously improve and optimize my creation, making sure it stays in top-notch shape and dazzles users with its excellence.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
      Preferred tools and/or Technologies
      </h3>
      <TagList className="mt-4">
        <TagListItem>Prometheus</TagListItem>
        <TagListItem>Azure Monitor</TagListItem>
      </TagList>
    </Section>
  )
}


export const metadata = {
  title: 'My Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="My Process" title="How I work">
        <p>
          I love to see projects from a big-picture perspective! It's like being the captain of the ship, guiding it from start to finish. From gathering requirements to data preparation to operating and keeping a close eye on everything, I'm all in! Understanding the whole shebang lets me make smarter decisions and ensures products sail smoothly to success. It's the adventure I thrive on, watching ideas come to life and grow in this ever-changing tech world.
        </p>
        <br></br>
        <p>
          Getting a product to production can be broken down into stages. Of course there is different ideas and ways to do it, but this is how I see things and what I believe each one of the stages are and what is involved in each stage.
        </p>
        <br></br>
        <p className='text-sm'>
          ML Design &rarr; Model Development &rarr; Operations
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">

        <Planning />
        <Border className="w-80 mb-10" />
        <Code />
        <Border className="w-80 mb-10" />

        <Build />
        <Border className="w-80 mb-10" />

        <Test />
        <Border className="w-80 mb-10" />

        <Release />
        <Border className="w-80 mb-10" />

        <Deploy />
        <Border className="w-80 mb-10" />

        <Operate />
        <Border className="w-80 mb-10" />

        <Monitor />

      </div>
      <ContactSection />
    </>
  )
}
