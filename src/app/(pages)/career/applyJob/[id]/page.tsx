'use client';

import { notFound, useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import JoinTeam from '@/components/JoinTeamForm'

interface JobListing {
  id: string;
  title: string;
  hashtags: string[];
  experience: string;
  gradientColors: string;
  description: string;
  responsibilities?: string[];
  requirements?: string[];
}

export default function JobDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [job, setJob] = useState<JobListing | null>(null);
  const [loading, setLoading] = useState(true);

  const jobWithForm = ["2", "4"];

  const formRef = useRef<HTMLDivElement>(null);
  // Function to handle smooth scrolling
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Mock data - replace with your actual data fetching
  const jobListings: JobListing[] = [
    {
      id: "1",
      title: "Marketing Manager",
      hashtags: ["#Upwork", "#Freelancer", "#OnlineBidding", "#Leadership", "#Itservice", "#Itsales"],
      experience: "Experience: 2 - 6 Years",
      gradientColors: "linear-gradient(-45deg, rgb(0,103,183), rgb(140, 13,99))",
      description: "We are looking for an experienced Marketing Manager to lead our marketing efforts and drive brand awareness.",
      responsibilities: [
        "Develop and implement marketing strategies",
        "Manage digital marketing campaigns",
        "Analyze market trends and competitors",
        "Collaborate with sales and product teams"
      ],
      requirements: [
        "Bachelor's degree in Marketing or related field",
        "Proven experience in digital marketing",
        "Strong analytical skills",
        "Excellent communication abilities"
      ]
    },
    {
      id: "2",
      title: "Back End Developer",
      hashtags: ["#PHP", "#MySQL", "#CodeIgniter", "#Laravel", "#JavaScript", "#Plugins", "#WordPress", "#WooCommerce", "#Shopify"],
      experience: "Experience: 2 - 5 Years",
      gradientColors: "linear-gradient(-45deg, rgb(108, 50, 182), rgb(29, 160, 163))",
      description: "Join our team as a Back End Developer to build and maintain our server-side applications.",
      responsibilities: [
        "Develop and maintain server-side logic",
        "Ensure high performance and responsiveness",
        "Integrate front-end components",
        "Implement security and data protection"
      ],
      requirements: [
        "Proficiency in PHP and MySQL",
        "Experience with Laravel or CodeIgniter",
        "Knowledge of RESTful APIs",
        "Understanding of front-end technologies"
      ]
    },
    {
      id: "3",
      title: "Shopify Developer",
      hashtags: ["#Shopify", "#RubyonRails"],
      experience: "Experience: 2 - 6 Years",
      gradientColors: "linear-gradient(-45deg, rgb(15, 134, 178), rgb(7, 62, 152))",
      description: "We are seeking a Shopify Developer to create and manage e-commerce websites.",
      responsibilities: [
        "Design and develop Shopify themes",
        "Customize Shopify stores",
        "Integrate third-party applications",
        "Optimize store performance"
      ],
      requirements: [
        "Experience with Shopify Liquid",
        "Proficiency in HTML, CSS, and JavaScript",
        "Familiarity with e-commerce best practices",
        "Problem-solving skills"
      ]
    },
    {
      id: "4",
      title: "Senior WordPress Developer",
      hashtags: ["#WordPress", "#WooCommerce", "#PHP", "#MySQL", "#JavaScript", "#Plugins"],
      experience: "Experience: 2 - 6 Years",
      gradientColors: "linear-gradient(-45deg, rgb(15, 134, 178), rgb(7, 62, 152))",
      description: "We are looking for a Senior WordPress Developer to lead our WordPress projects.",
      responsibilities: [
        "Develop custom WordPress themes and plugins",
        "Optimize WordPress performance",
        "Manage WooCommerce implementations",
        "Mentor junior developers"
      ],
      requirements: [
        "5+ years of WordPress development experience",
        "Expertise in PHP and MySQL",
        "Strong knowledge of JavaScript",
        "Experience with WooCommerce"
      ]
    },
    {
      id: "5",
      title: "Full Stack Developer",
      hashtags: ["#PHP", "#MySQL", "#CodeIgniter", "#Laravel", "#JavaScript", "#React", "#Angular", "#Vue", "#HTML", "#CSS"],
      experience: "Experience: 2 - 6 Years",
      gradientColors: "linear-gradient(-45deg, rgb(0,103,183), rgb(140, 13,99))",
      description: "We are seeking a Full Stack Developer to develop and maintain complex web applications.",
      responsibilities: [
        "Design and develop user interfaces",
        "Implement server-side logic",
        "Collaborate with cross-functional teams",
        "Optimize applications for maximum speed"
      ],
      requirements: [
        "Proficiency in both front-end and back-end technologies",
        "Experience with databases (MySQL, MongoDB)",
        "Familiarity with RESTful APIs",
        "Strong problem-solving skills"
      ]
    },
    {
      id: "6",
      title: "PHP Development - Internship",
      hashtags: ["#PHP", "#MySQL", "#JavaScript", "#HTML", "#CSS"],
      experience: "Experience: Freshers welcome",
      gradientColors: "linear-gradient(-45deg, rgb(108, 50, 182), rgb(29, 160, 163))",
      description: "We are offering PHP internship opportunities for aspiring developers.",
      responsibilities: [
        "Assist in developing web applications",
        "Learn and implement PHP best practices",
        "Participate in code reviews",
        "Support senior developers"
      ],
      requirements: [
        "Basic understanding of PHP",
        "Familiarity with HTML, CSS, and JavaScript",
        "Eagerness to learn",
        "Good problem-solving skills"
      ]
    },
    {
      id: "7",
      title: "UI/UX Designer Intern",
      hashtags: ["#UI", "#UX", "#Figma", "#AdobeXD", "#Photoshop", "#Illustrator"],
      experience: "Experience: Freshers welcome",
      gradientColors: "linear-gradient(-45deg, rgb(108, 50, 182), rgb(29, 160, 163))",
      description: "We are looking for a creative UI/UX Design Intern to join our team.",
      responsibilities: [
        "Assist in creating wireframes and prototypes",
        "Help design user interfaces",
        "Participate in user research",
        "Support design team with various projects"
      ],
      requirements: [
        "Basic knowledge of design tools (Figma, Adobe XD)",
        "Understanding of UI/UX principles",
        "Creative thinking",
        "Good communication skills"
      ]
    }
  ];

  useEffect(() => {
    // Simulate API fetch
    const fetchJob = () => {
      const foundJob = jobListings.find(job => job.id === params.id);
      if (foundJob) {
        setJob(foundJob);
      }
      setLoading(false);
    };

    fetchJob();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!job) {
    return notFound();
  }

  const handleBackButtonClick = () => {
    router.push('/career');
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-28">
      <div className="max-w-4xl mx-auto">
        <button onClick={handleBackButtonClick} className="mb-6 text-blue-600 hover:text-blue-800 transition-colors">
          Back to Job Listings
        </button>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Job Header with Gradient */}
          <div 
            className="h-48 flex items-end p-6"
            style={{ background: job.gradientColors }}
          >
            <h1 className="text-3xl font-bold text-white">{job.title}</h1>
          </div>

          {/* Job Content */}
          <div className="p-6 md:p-8">
            {/* Basic Info */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <span className="text-gray-700 font-medium mr-4">{job.experience}</span>
                <div className="flex flex-wrap gap-2">
                  {job.hashtags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button 
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
                onClick={scrollToForm}
              >
                Apply Now
              </button>
            </div>

            {/* Job Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Job Description</h2>
              <p className="text-gray-600 leading-relaxed">{job.description}</p>
            </div>

            {/* Responsibilities */}
            {job.responsibilities && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Key Responsibilities</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {job.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Requirements */}
            {job.requirements && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Requirements</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {job.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}



            {/* Apply Button at Bottom */}
            {/* <div className="pt-6 border-t border-gray-200">
              <button 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
                onClick={() => alert(`Applied for ${job.title} position!`)}
              >
                Apply for this Position
              </button>
            </div> */}

            {/* Apply Div */}
            <div className="pt-6 border-t border-gray-200" ref={formRef}>
              {jobWithForm.includes(job.id) ? (
                <JoinTeam title='Apply Now'/>
              ) : (
                <button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
                  onClick={() => alert(`Applied for ${job.title} position!`)}
                >
                  Apply via Naukri.com
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}