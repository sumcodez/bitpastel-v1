'use client';

import { notFound, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

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
      title: "Front End Developer",
      hashtags: ["#React", "#Angular", "#Vue", "#HTML", "#CSS", "#JavaScript", "#UI"],
      experience: "Experience: 2 - 5 Years",
      gradientColors: "linear-gradient(-45deg, rgb(108, 50, 182), rgb(29, 160, 163))",
      description: "Join our team as a Front End Developer to design and develop user-friendly interfaces.",
      responsibilities: [
        "Develop responsive web applications",
        "Collaborate with designers to implement UI/UX",
        "Optimize applications for maximum speed",
        "Ensure cross-browser compatibility"
      ],
      requirements: [
        "Proficiency in HTML, CSS, and JavaScript",
        "Experience with front-end frameworks",
        "Understanding of responsive design",
        "Problem-solving skills"
      ]
    },
    {
      id: "5",
      title: "Full Stack Developer",
      hashtags: ["#PHP", "#MySQL", "#CodeIgniter", "#Laravel", "#JavaScript", "#Plugins", "#WordPress", "#WooCommerce", "#Shopify", "#React", "#Angular", "#Vue", "#HTML", "#CSS"],
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
      title: "Mobile Developer",
      hashtags: ["#Swift", "#Kotlin", "#Flutter", "#ReactNative", "#Android", "#iOS", "#UI"],
      experience: "Experience: 2 - 5 Years",
      gradientColors: "linear-gradient(-45deg, rgb(108, 50, 182), rgb(29, 160, 163))",
      description: "Join our team as a Mobile Developer to create and maintain mobile applications.",
      responsibilities: [
        "Design and develop mobile applications",
        "Collaborate with designers to implement UI/UX",
        "Optimize applications for performance",
        "Ensure compatibility across devices"
      ],
      requirements: [
        "Proficiency in Swift or Kotlin",
        "Experience with mobile development frameworks",
        "Understanding of mobile UI/UX principles",
        "Problem-solving skills"
      ]
    },
    {
      id: "7",
      title: "DevOps Engineer",
      hashtags: ["#AWS", "#Docker", "#Kubernetes", "#CI/CD", "#Linux", "#Scripting"],
      experience: "Experience: 2 - 6 Years",
      gradientColors: "linear-gradient(-45deg, rgb(0,103,183), rgb(140, 13,99))",
      description: "We are seeking a DevOps Engineer to manage and optimize the development and deployment processes.",
      responsibilities: [
        "Implement CI/CD pipelines",
        "Manage cloud infrastructure",
        "Automate deployment processes",
        "Monitor system performance and reliability"
      ],
      requirements: [
        "Experience with cloud platforms (AWS, Azure)",
        "Proficiency in Docker and Kubernetes",
        "Strong scripting skills (Python, Bash)",
        "Understanding of system administration"    
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
                onClick={() => alert(`Applied for ${job.title} position!`)}
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
            <div className="pt-6 border-t border-gray-200">
              <button 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
                onClick={() => alert(`Applied for ${job.title} position!`)}
              >
                Apply for this Position
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}