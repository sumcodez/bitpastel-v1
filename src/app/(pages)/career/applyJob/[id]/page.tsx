'use client';

import { notFound, useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import JoinTeam from '@/components/JoinTeamForm';
import JobDetailsBanner from '@/components/career/JobDetailsBanner';

interface JobListing {
  id: string;
  title: string;
  hashtags: string[];
  experience: string;
  gradientColors: string;
  description: string;
  responsibilities?: string[];
  requirements?: string[];
  location?: string;
  softSkills?: string[];
  desiredCandidateProfile?: string[];
}

export default function JobDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [job, setJob] = useState<JobListing | null>(null);
  const [loading, setLoading] = useState(true);

  const jobWithForm = ['2', '4'];

  const jobWithFormAndButton = ["5"];

  const formRef = useRef<HTMLDivElement>(null);
  // Function to handle smooth scrolling
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Mock data - replace with your actual data fetching
  const jobListings: JobListing[] = [
    {
      id: '1',
      title: 'Marketing Manager',
      hashtags: [
        '#Upwork',
        '#Freelancer',
        '#OnlineBidding',
        '#Leadership',
        '#Itservice',
        '#Itsales',
      ],
      experience: '2 - 6 Years',
      gradientColors: 'linear-gradient(-45deg, rgb(0,103,183), rgb(140, 13,99))',
      description:
        'We are looking for an experienced Marketing Manager to lead our marketing efforts and drive brand awareness.',
      responsibilities: [
        'Develop and implement marketing strategies',
        'Manage digital marketing campaigns',
        'Analyze market trends and competitors',
        'Collaborate with sales and product teams',
      ],
      requirements: [
        "Bachelor's degree in Marketing or related field",
        'Proven experience in digital marketing',
        'Strong analytical skills',
        'Excellent communication abilities',
      ],
      location: 'Kolkata',
      softSkills: ['Problem-solving', 'Collaboration', 'Attention to detail', 'Time management'],
      desiredCandidateProfile: [
        'Self-motivated and results-oriented',
        'Ability to work independently and in a team',
        'Strong organizational skills',
        'Adaptability to changing environments',
      ],
    },
    {
      id: '2',
      title: 'Back End Developer',
      hashtags: [
        '#PHP',
        '#MySQL',
        '#CodeIgniter',
        '#Laravel',
        '#JavaScript',
        '#Plugins',
        '#WordPress',
        '#WooCommerce',
        '#Shopify',
      ],
      experience: '2 - 5 Years',
      gradientColors: 'linear-gradient(-45deg, rgb(108, 50, 182), rgb(29, 160, 163))',
      description:
        'Join our team as a Back End Developer to build and maintain our server-side applications.',
      responsibilities: [
        'Develop and maintain server-side logic',
        'Ensure high performance and responsiveness',
        'Integrate front-end components',
        'Implement security and data protection',
      ],
      requirements: [
        'Proficiency in PHP and MySQL',
        'Experience with Laravel or CodeIgniter',
        'Knowledge of RESTful APIs',
        'Understanding of front-end technologies',
      ],
      location: 'Kolkata',
      softSkills: ['Problem-solving', 'Attention to detail', 'Team collaboration', 'Time management'],
      desiredCandidateProfile: [
        'Strong problem-solving skills',
        'Ability to work independently and in a team',
        'Excellent communication skills',
        'Adaptability to changing environments',
      ],
    },
    {
      id: '3',
      title: 'Shopify Developer',
      hashtags: ['#Shopify', '#RubyonRails'],
      experience: '2 - 6 Years',
      gradientColors: 'linear-gradient(-45deg, rgb(15, 134, 178), rgb(7, 62, 152))',
      description: 'We are seeking a Shopify Developer to create and manage e-commerce websites.',
      responsibilities: [
        'Design and develop Shopify themes',
        'Customize Shopify stores',
        'Integrate third-party applications',
        'Optimize store performance',
      ],
      requirements: [
        'Experience with Shopify Liquid',
        'Proficiency in HTML, CSS, and JavaScript',
        'Familiarity with e-commerce best practices',
        'Problem-solving skills',
      ],
      location: 'Kolkata',
      softSkills: ['Problem-solving', 'Attention to detail', 'Team collaboration', 'Time management'],
      desiredCandidateProfile: [
        'Strong problem-solving skills',
        'Ability to work independently and in a team',
        'Excellent communication skills',
        'Adaptability to changing environments',
      ],
    },
    {
      id: '4',
      title: 'Senior WordPress Developer',
      hashtags: ['#WordPress', '#WooCommerce', '#PHP', '#MySQL', '#JavaScript', '#Plugins'],
      experience: '2 - 6 Years',
      gradientColors: 'linear-gradient(-45deg, rgb(15, 134, 178), rgb(7, 62, 152))',
      description:
        'We are looking for a Senior WordPress Developer to lead our WordPress projects.',
      responsibilities: [
        'Develop custom WordPress themes and plugins',
        'Optimize WordPress performance',
        'Manage WooCommerce implementations',
        'Mentor junior developers',
      ],
      requirements: [
        '5+ years of WordPress development experience',
        'Expertise in PHP and MySQL',
        'Strong knowledge of JavaScript',
        'Experience with WooCommerce',
      ],
      location: 'Kolkata',
      softSkills: ['Problem-solving', 'Attention to detail', 'Team collaboration', 'Time management'],
      desiredCandidateProfile: [
        'Strong problem-solving skills',
        'Ability to work independently and in a team',
        'Excellent communication skills',
        'Adaptability to changing environments',
      ],
    },
    {
      id: '5',
      title: 'Full Stack Developer',
      hashtags: [
        '#PHP',
        '#MySQL',
        '#CodeIgniter',
        '#Laravel',
        '#JavaScript',
        '#React',
        '#Angular',
        '#Vue',
        '#HTML',
        '#CSS',
      ],
      experience: '2 - 6 Years',
      gradientColors: 'linear-gradient(-45deg, rgb(0,103,183), rgb(140, 13,99))',
      description:
        'We are seeking a Full Stack Developer to develop and maintain complex web applications.',
      responsibilities: [
        'Design and develop user interfaces',
        'Implement server-side logic',
        'Collaborate with cross-functional teams',
        'Optimize applications for maximum speed',
      ],
      requirements: [
        'Proficiency in both front-end and back-end technologies',
        'Experience with databases (MySQL, MongoDB)',
        'Familiarity with RESTful APIs',
        'Strong problem-solving skills',
      ],
      location: 'Kolkata',
      softSkills: ['Problem-solving', 'Attention to detail', 'Team collaboration', 'Time management'],
      desiredCandidateProfile: [
        'Strong problem-solving skills',
        'Ability to work independently and in a team',
        'Excellent communication skills',
        'Adaptability to changing environments',
      ],
    },
    {
      id: '6',
      title: 'PHP Development - Internship',
      hashtags: ['#PHP', '#MySQL', '#JavaScript', '#HTML', '#CSS'],
      experience: '0 - 1 Years',
      gradientColors: 'linear-gradient(-45deg, rgb(108, 50, 182), rgb(29, 160, 163))',
      description: 'We are offering PHP internship opportunities for aspiring developers.',
      responsibilities: [
        'Assist in developing web applications',
        'Learn and implement PHP best practices',
        'Participate in code reviews',
        'Support senior developers',
      ],
      requirements: [
        'Basic understanding of PHP',
        'Familiarity with HTML, CSS, and JavaScript',
        'Eagerness to learn',
        'Good problem-solving skills',
      ],
      location: 'Kolkata',
      softSkills: ['Problem-solving', 'Attention to detail', 'Team collaboration', 'Time management'],
      desiredCandidateProfile: [
        'Strong problem-solving skills',
        'Ability to work independently and in a team',
        'Excellent communication skills',
        'Adaptability to changing environments',
      ],
    },
    {
      id: '7',
      title: 'UI/UX Designer Intern',
      hashtags: ['#UI', '#UX', '#Figma', '#AdobeXD', '#Photoshop', '#Illustrator'],
      experience: '0 - 1 Years',
      gradientColors: 'linear-gradient(-45deg, rgb(108, 50, 182), rgb(29, 160, 163))',
      description: 'We are looking for a creative UI/UX Design Intern to join our team.',
      responsibilities: [
        'Assist in creating wireframes and prototypes',
        'Help design user interfaces',
        'Participate in user research',
        'Support design team with various projects',
      ],
      requirements: [
        'Basic knowledge of design tools (Figma, Adobe XD)',
        'Understanding of UI/UX principles',
        'Creative thinking',
        'Good communication skills',
      ],
      location: 'Kolkata',
      softSkills: ['Problem-solving', 'Attention to detail', 'Team collaboration', 'Time management'],
      desiredCandidateProfile: [
        'Strong problem-solving skills',
        'Ability to work independently and in a team',
        'Excellent communication skills',
        'Adaptability to changing environments',
      ],
    },
  ];

  useEffect(() => {
    // Simulate API fetch
    const fetchJob = () => {
      const foundJob = jobListings.find((job) => job.id === params.id);
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

  const customBenefits = [
    {
      text: job.hashtags.join(', '),
      icon: '/job-details/1.png',
      alt: 'Check icon',
    },
    {
      text: job.experience,
      icon: '/job-details/3.png',
      alt: 'Check icon',
    },
    {
      text: job.location ?? 'Location not specified',
      icon: '/job-details/2.png',
      alt: 'Check icon',
    },
  ];

  return (
    <div className="relative">
      <JobDetailsBanner
        jobTitle={job.title}
        backgroundImage="/images/Job-details.png"
        benefits={customBenefits}
        applyButtonText="Apply Now"
        scrollToId="applicationForm"
      />

      {/* Job Details Content */}
      <div className="container mx-auto pt-12 lg:pt-16">
        <div className="overflow-hidden md:ml-[214px] px-4 md:px-0">
          <div className="inner p-6 text-[16px] font-roboto text-[#2A2A2A]">
            <p className="mb-10">
              {job.description}
              <br />
              <br />
              The current position requires the following skills:
            </p>

            {job.requirements && job.requirements.length > 0 && (
              <div className="row flex flex-col md:flex-row">
                <div className="col-md-4 md:w-1/3 mb-4 md:mb-0">
                  <h3 className="text-[18px] font-source font-semibold text-gray-800">Technical Skills:</h3>
                </div>
                <div className="col-md-8 md:w-2/3">
                  <ul className="list-[circle] pl-5 text-gray-700 space-y-2 text-[16px] font-roboto">
                    {job.requirements.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {job.softSkills && job.softSkills.length > 0 && (
              <div className="row flex flex-col md:flex-row mt-[73px]">
                <div className="col-md-4 md:w-1/3 mb-4 md:mb-0">
                  <h3 className="text-[18px] font-source font-semibold text-gray-800">Soft Skills:</h3>
                </div>
                <div className="col-md-8 md:w-2/3">
                  <ul className="list-[circle] pl-5 text-gray-700 space-y-2 text-[16px] font-roboto">
                    {job.softSkills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {job.desiredCandidateProfile && job.desiredCandidateProfile.length > 0 && (
              <div className="row flex flex-col md:flex-row mt-[73px]">
                <div className="col-md-4 md:w-1/3 mb-4 md:mb-0">
                  <h3 className="text-[18px] font-source font-semibold text-gray-800">Desired Candidate Profile:</h3>
                </div>
                <div className="col-md-8 md:w-2/3">
                  <ul className="list-[circle] pl-5 text-gray-700 space-y-2 text-[16px] font-roboto">
                    {job.desiredCandidateProfile.map((profile, index) => (
                      <li key={index}>{profile}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          
          </div>

          {/* Apply Div */}
          {/* <div className="pt-6" ref={formRef} id="applicationForm">
            {jobWithForm.includes(job.id) ? (
              <JoinTeam title="Apply Now" />
            ) : (
              <button
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
                onClick={() => alert(`Applied for ${job.title} position!`)}
              >
                Apply via Naukri.com
              </button>
            )}
          </div> */}


          {/* Apply Div */}
          <div className="pt-6 ml-[-214px] mt-[50px]" ref={formRef} id="applicationForm">
            {jobWithForm.includes(job.id) ? (
              <JoinTeam title="Apply Now" />
            ) : jobWithFormAndButton.includes(job.id) ? (
              <>
                <div className="flex gap-[99px] mb-6 items-center justify-center">
                  <button
                    className="flex items-center justify-center flex-1 min-h-[40px] max-h-[40px] min-w-[280px] max-w-[280px] bg-green-600 hover:bg-green-700 text-white font-[16px] font-source py-3 px-6 rounded-md transition-colors"
                    onClick={() => alert(`Applied for ${job.title} via Naukri!`)}
                  >
                    Apply via Naukri
                  </button>
                  <button
                    className="flex items-center justify-center flex-1 min-h-[40px] max-h-[40px] min-w-[280px] max-w-[280px] bg-green-600 hover:bg-green-700 text-white font-[16px] font-source py-3 px-6 rounded-md transition-colors"
                    onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Apply Now
                  </button>
                </div>
                <JoinTeam title="Apply Now" />
              </>
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
  );
}
