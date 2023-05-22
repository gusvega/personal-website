import { useState } from 'react';
import axios from 'axios';

const addChangeAndPush = async () => {
   const accessToken = 'use a secret here';
   const owner = 'gusvega';
   const repo = 'pipeline';
   const filePath = 'README.md';

   try {
      // Fetch the current file content
      const { data: fileData } = await axios.get(
         `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`,
         {
            headers: {
               Authorization: `token ${accessToken}`,
            },
         }
      );

      // Decode the base64 content
      const fileContent = Buffer.from(fileData.content, 'base64').toString('utf-8');

      // Make changes to the file content
      const newLines = ['This is a new line added by the API.', 'GUS you did it!'];
      const updatedContent = fileContent + '\r\n' + newLines.join('\r\n') + '\r\n';


      // Create a new blob with the updated content
      const { data: newBlob } = await axios.post(
         `https://api.github.com/repos/${owner}/${repo}/git/blobs`,
         {
            content: updatedContent,
            encoding: 'utf-8',
         },
         {
            headers: {
               Authorization: `token ${accessToken}`,
            },
         }
      );

      // Get the latest commit's tree
      const { data: latestCommit } = await axios.get(
         `https://api.github.com/repos/${owner}/${repo}/git/refs/heads/main`,
         {
            headers: {
               Authorization: `token ${accessToken}`,
            },
         }
      );

      // Create a new tree with the updated blob
      const { data: newTree } = await axios.post(
         `https://api.github.com/repos/${owner}/${repo}/git/trees`,
         {
            base_tree: latestCommit.object.sha,
            tree: [
               {
                  path: filePath,
                  mode: '100644',
                  type: 'blob',
                  sha: newBlob.sha,
               },
            ],
         },
         {
            headers: {
               Authorization: `token ${accessToken}`,
            },
         }
      );

      // Create a new commit with the updated tree
      const { data: newCommit } = await axios.post(
         `https://api.github.com/repos/${owner}/${repo}/git/commits`,
         {
            message: 'Added Name',
            tree: newTree.sha,
            parents: [latestCommit.object.sha],
         },
         {
            headers: {
               Authorization: `token ${accessToken}`,
            },
         }
      );

      // Update the branch reference to point to the new commit
      await axios.patch(
         `https://api.github.com/repos/${owner}/${repo}/git/refs/heads/main`,
         {
            sha: newCommit.sha,
         },
         {
            headers: {
               Authorization: `token ${accessToken}`,
            },
         }
      );

      console.log('Change added and pushed successfully.');
   } catch (error) {
      console.error('Error:', error.message);
   }
};



const Pipeline = () => {
   const [isProcessing, setIsProcessing] = useState(false);
   const [workflow, setWorkflow] = useState({
      plan: {
         name: 'Plan',
         jobs: {
            longMeetings: {
               name: 'Do meeting stuff',
               steps: {
                  defineGoals: { description: "Define project goals, objectives, and scope.", name: 'Define Goal' },
                  identifyStakeholders: { description: "Identify key stakeholders and establish communication channels.", name: 'Identify Stakeholders' },
                  createRoadmap: { description: "Create a project roadmap or backlog to track tasks and milestones.", name: 'Create Roadmap' },
                  conductMeetings: { description: "Conduct regular meetings to discuss project progress and address challenges.", name: 'Conduct Meetings' },
               },
            }
         },

      },
      develop: {
         name: 'Develop',
         jobs: {
            trigger: {
               name: 'Trigger',
               steps: {
                  useGit: { description: "Use Git for source code management and collaboration.", name: 'Use Git' },
                  followBestPractices: { description: "Follow coding best practices and maintain coding standards.", name: 'Follow Best Practices' },
                  conductCodeReviews: { description: "Conduct code reviews to ensure code quality and maintainability.", name: 'Conduct Code Reviews' },
                  collaborateTeam: { description: "Collaborate with team members through pull requests and feedback.", name: 'Collaborate Team' },
               },
            }
         },
      },
      build: {
         name: 'Build',
         jobs: {
            build: {
               name: 'Build',
               steps: {
                  checkoutCode: { description: "Checkout the code from the Git repository.", name: 'Checkout Code' },
                  configureEnvironment: { description: "Configure the build environment with Node.js and required dependencies.", name: 'Configure Environment' },
                  installDependencies: { description: "Install project dependencies using npm or Yarn.", name: 'Install Dependencies' },
                  buildNextJS: { description: "Build the Next.js application.", name: 'Build NextJS App' },
                  buildDockerImage: { description: "Build a Docker image for the application using a Dockerfile.", name: 'Build Docker Image' },
                  pushImage: { description: "Push the Docker image to a container registry.", name: 'Push Image' },
               },
            },
         },

      },
      test: {
         name: 'Test',
         jobs: {
            unitTests: {
               name: 'Unit Testing',
               steps: {
                  setupEnvironment: { description: "Set up the test environment.", name: 'Setup Environment' },
                  runTests: { description: "Run unit tests using Jest or other testing frameworks.", name: 'Run Tests' },
                  generateReports: { description: "Generate test reports and code coverage metrics.", name: 'Generate Reports' },
               },
            },
            integrationTests: {
               name: 'Integration Testing',
               steps: {
                  setupEnvironment: { description: "Set up the test environment.", name: 'Setup Environment' },
                  deployApplication: { description: "Deploy the application to a test environment.", name: 'Deploy Application' },
                  runTests: { description: "Run integration tests to verify functionality and compatibility.", name: 'Run Tests' },
                  generateReports: { description: "Generate test reports and code coverage metrics.", name: 'Generate Reports' },
               },
            },
         },
      },
      release: {
         name: 'Release',
         jobs: {
            release: {
               name: 'Release',
               steps: {
                  createGitHubRelease: { description: "Create a GitHub release for the specific version of the application.", name: 'Create GitHub Release' },
                  attachArtifacts: { description: "Attach relevant artifacts (e.g., Docker image) to the release.", name: 'Attach Artifacts' },
                  generateReleaseNotes: { description: "Generate release notes and documentation.", name: 'Generate Release Notes' },
               },
            },
         },

      },
      deploy: {
         name: 'Deploy',
         jobs: {
            stagingDeployment: {
               name: 'Staging Deployment',
               steps: {
                  connectKubernetes: { description: "Connect to the Kubernetes cluster.", name: 'Connect Kubernetes' },
                  deployToStaging: { description: "Deploy the application to a staging environment in Kubernetes.", name: 'Deploy To Staging' },
                  applyConfigs: { description: "Apply environment-specific configurations.", name: 'Apply Configs' },
                  performDatabaseMigrations: { description: "Perform any required database migrations or setup.", name: 'performDatabaseMigrations' },
               },
            },
            productionDeployment: {
               name: 'Production Deployment',
               steps: {
                  connectKubernetes: { description: "Connect to the Kubernetes cluster.", name: 'connectKubernetes' },
                  deployToProduction: { description: "Deploy the application to a production environment in Kubernetes.", name: 'deployToProduction' },
                  applyConfigs: { description: "Apply environment-specific configurations.", name: 'applyConfigs' },
                  implementRollingDeployment: { description: "Implement a rolling deployment strategy to minimize downtime.", name: 'implementRollingDeployment' },
               },

            },
         },

      },
      operate: {
         name: 'Operate',
         jobs: {
            lotsOfIT: {
               name: 'IT IT IT',
               steps: {
                  setupLogging: { description: "Set up centralized logging to capture application logs and errors.", name: 'Setup Logging' },
                  implementErrorTracking: { description: "Implement error tracking tools (e.g., Sentry, ELK Stack) for efficient troubleshooting.", name: 'Implement Error Tracking' },
                  monitorApplication: { description: "Monitor application health and performance using tools like Azure Monitor or Prometheus.", name: 'Monitor Application' },
                  establishIncidentManagement: { description: "Establish incident management processes and conduct post-incident reviews.", name: 'Establish Incident Management' },
               },
            }
         },

      },
      monitor: {
         name: 'Monitor',
         jobs: {
            monitorEnvironment: {
               name: 'Monitor Environment',
               steps: {
                  setupPerformanceMonitoring: { description: "Set up performance monitoring to track response times, resource utilization, and scalability.", name: 'Setup Performance Monitoring' },
                  analyzeLogs: { description: "Implement log aggregation and analysis to gain insights into application behavior.", name: 'Analyze Logs' },
                  configureAlerts: { description: "Configure alerts and notifications for critical events like high CPU usage or application errors.", name: 'Configure Alerts' },
                  visualizeMetrics: { description: "Use dashboarding tools (e.g., Grafana, Azure Monitor) to visualize and analyze metrics.", name: 'Visualize Metrics' },
               },
            }
         },
      },
   })

   const handleClick = async () => {
      await addChangeAndPush();
   };

   return (
      <div className='flex flex-col h-full justify-center'>
         <h1>Sorry still in the works...</h1>
         <button onClick={handleClick} disabled={isProcessing} className='bg-gray-200'>
            {isProcessing ? 'Processing...' : 'Start Automation Pipeline'}
         </button>
         {/* <div className='w-full h-1 bg-slate-600'>s</div> */}



         <div className='m-1 flex flex-col'>
            {/* {Object.entries(workflow).map(([key, value], index) => {
          return (
            <div className='justify-center items-center w-full'>
              <div className='flex items-center w-full'>
                <div className="w-20 h-20 rounded-full bg-blue-500 flex justify-center items-center m-auto text-white font-thin">
                  {value.name}
                </div>

                {index !== Object.keys(workflow).length - 1 && (
                  <div className='flex'>
                    <div className="relative w-16 h-2 bg-black overflow-hidden">
                      <div className="absolute w-6 h-1 bg-black transform rotate-45 -translate-x-2 -translate-y-2"></div>
                      <div className="absolute w-1 h-2 bg-black transform -skew-x-45 translate-x-16"></div>
                    </div>
                    <div className="relative w-8 h-2">
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 0 L50 50 L0 100 Z" fill="black" />
                      </svg>
                    </div>
                  </div>
                )}


              </div>
              {
                Object.entries(value.jobs).map(([key, value]) => {
                  return (
                    <div className='flex items-center mt-5'>

                      <div>
                        <div>
                          <div className='flex items-center'>
                            <div className='w-2 h-2 rounded-full bg-white flex justify-center items-center text-black font-thin m-2'>
                              <svg className="w-full h-full" viewBox="0 0 20 20">
                                <path d="M0 11h20v2H0z" fill="currentColor" />
                              </svg>
                              <svg class="w-2 h-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                              </svg>
                            </div>
                            <div className='text-sm'>
                              {value.name}
                            </div>
                          </div>
                          {Object.entries(value.steps).map(([key, value]) => {
                            return (
                              <div className='flex ml-4'>
                                <div className='w-3 h-3 rounded-full bg-white flex justify-center items-center text-black font-thin m-2'>
                                  <div className="w-20 h-2">
                                    <svg className="w-full h-full" viewBox="0 0 20 20">
                                      <path d="M0 11h20v2H0z" fill="currentColor" />
                                    </svg>
                                  </div>
                                </div>
                                <div className='text-sm'>{key}</div>
                              </div>
                            )
                          })}
                        </div>

                      </div>
                    </div>
                  )
                })
              }

            </div>
          )
        })} */}

            {
               Object.entries(workflow).map(([key, value]) => {
                  return (
                     <div>
                        <div className="w-20 h-20 rounded-full bg-slate-300 flex items-center m-auto text-black font-thin">
                           {value.name}
                        </div>
                        <div>
                           {Object.entries(value.jobs).map(([key, value]) => {
                              return (
                                 <div>
                                    <div>
                                       {value.name}
                                    </div>
                                    <div>
                                       {Object.entries(value.steps).map(([key, value]) => {
                                          return (
                                             <div>
                                                {value.name}
                                             </div>
                                          )
                                       })}
                                    </div>
                                 </div>
                              )
                           })}
                        </div>
                     </div>
                  )
               })
            }
         </div>
         
      </div>
   );
};

export default Pipeline;
