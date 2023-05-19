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
            defineGoals: "Define project goals, objectives, and scope.",
            identifyStakeholders: "Identify key stakeholders and establish communication channels.",
            createRoadmap: "Create a project roadmap or backlog to track tasks and milestones.",
            conductMeetings: "Conduct regular meetings to discuss project progress and address challenges.",
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
            useGit: "Use Git for source code management and collaboration.",
            followBestPractices: "Follow coding best practices and maintain coding standards.",
            conductCodeReviews: "Conduct code reviews to ensure code quality and maintainability.",
            collaborateTeam: "Collaborate with team members through pull requests and feedback.",
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
            checkoutCode: "Checkout the code from the Git repository.",
            configureEnvironment: "Configure the build environment with Node.js and required dependencies.",
            installDependencies: "Install project dependencies using npm or Yarn.",
            buildNextJS: "Build the Next.js application.",
            buildDockerImage: "Build a Docker image for the application using a Dockerfile.",
            pushImage: "Push the Docker image to a container registry.",
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
            setupEnvironment: "Set up the test environment.",
            runTests: "Run unit tests using Jest or other testing frameworks.",
            generateReports: "Generate test reports and code coverage metrics.",
          },
        },
        integrationTests: {
          name: 'Integration Testing',
          steps: {
            setupEnvironment: "Set up the test environment.",
            deployApplication: "Deploy the application to a test environment.",
            runTests: "Run integration tests to verify functionality and compatibility.",
            generateReports: "Generate test reports and code coverage metrics.",
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
            createGitHubRelease: "Create a GitHub release for the specific version of the application.",
            attachArtifacts: "Attach relevant artifacts (e.g., Docker image) to the release.",
            generateReleaseNotes: "Generate release notes and documentation.",
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
            connectKubernetes: "Connect to the Kubernetes cluster.",
            deployToStaging: "Deploy the application to a staging environment in Kubernetes.",
            applyConfigs: "Apply environment-specific configurations.",
            performDatabaseMigrations: "Perform any required database migrations or setup.",
          },
        },
        productionDeployment: {
          name: 'Production Deployment',
          steps: {
            connectKubernetes: "Connect to the Kubernetes cluster.",
            deployToProduction: "Deploy the application to a production environment in Kubernetes.",
            applyConfigs: "Apply environment-specific configurations.",
            implementRollingDeployment: "Implement a rolling deployment strategy to minimize downtime.",
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
            setupLogging: "Set up centralized logging to capture application logs and errors.",
            implementErrorTracking: "Implement error tracking tools (e.g., Sentry, ELK Stack) for efficient troubleshooting.",
            monitorApplication: "Monitor application health and performance using tools like Azure Monitor or Prometheus.",
            establishIncidentManagement: "Establish incident management processes and conduct post-incident reviews.",
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
            setupPerformanceMonitoring: "Set up performance monitoring to track response times, resource utilization, and scalability.",
            analyzeLogs: "Implement log aggregation and analysis to gain insights into application behavior.",
            configureAlerts: "Configure alerts and notifications for critical events like high CPU usage or application errors.",
            visualizeMetrics: "Use dashboarding tools (e.g., Grafana, Azure Monitor) to visualize and analyze metrics.",
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
      {/* <div className='w-full h-1 bg-slate-600'>s</div> */}



      <div className='m-1 flex flex-row justify-evenly'>
        {Object.entries(workflow).map(([key, value], index) => {
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
                              {/* <svg class="w-2 h-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                              </svg> */}
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

                                  {/* <svg class="w-1.5 h-1.5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                                  </svg> */}
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
        })}
      </div>
      <button onClick={handleClick} disabled={isProcessing}>
        {isProcessing ? 'Processing...' : 'Start Automation Pipeline'}
      </button>
    </div>
  );
};

export default Pipeline;
