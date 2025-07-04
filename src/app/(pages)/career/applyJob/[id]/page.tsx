'use client';
import { notFound, useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import JoinTeam from '@/components/JoinTeamForm';
import JobDetailsBanner from '@/components/career/JobDetailsBanner';
import Common_banner from '@/components/ui/Common_banner';


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
  naukriLink?: string;
}
export default function JobDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [job, setJob] = useState<JobListing | null>(null);
  const [loading, setLoading] = useState(true);
  const jobWithForm = ['7'];
  const jobWithOneButtonAndForm = ['3','6'];
  const jobWithFormAndButton = ["4"];
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
        "#Upwork", "#Freelancer", "#OnlineBidding", "#Leadership", "#Itservice", "#Itsales"
      ],
      experience: '0 - 6 Years',
      gradientColors: 'linear-gradient(-45deg, rgb(0,103,183), rgb(140, 13,99))',
      description:
        'We are looking for a Marketing Manager with strong communication skills and experience in online bidding, client handling, and business development across international markets.',
      responsibilities: [
        'Write proposals, estimate costs, and negotiate on platforms like Upwork and Freelancer',
        'Handle international clients (US, UK, EU) effectively',
        'Understand and adapt to general IT outsourcing business needs',
        'Collaborate with project managers and technical teams for project planning',
      ],
      requirements: [
        "Very strong communication skills",
        "Fluent in English (written and spoken)",
        "Understanding of general IT outsourcing business",
        "Experienced in working with different bidding sites - Upwork, Freelancer, etc",
        "Experienced in handling international clients (US, UK, EU)",
        "Writing proposals, deciding costing, estimation, online bidding and negotiations",
        "Strong presentation and business analysis skills",
        "Basic awareness of web and app development (you don't need to be a coder)",
        "Ability to liaise with project managers and technical team leaders"
      ],
      location: 'Kolkata',
      softSkills: [
        'Very good Team player',
        'Delivery Oriented',
        'Adaptable to challenges',
        'Problem solver',
      ],
      desiredCandidateProfile: [
        'Must have experience in bidding or working on online marketplaces like Upwork / Freelancer',
        'Freshers can also apply',
        'Must have worked with international clients (UK, US, EU)',
        'Fluent in English (written and spoken)',
      ],
      naukriLink: 'https://www.naukri.com/bidding-jobs-in-kolkata?expJD=true'
    },
    {
      id: '2',
      title: 'Back End Developer',
      hashtags: [
        '#NodeJS',
        '#PHP',
        '#Laravel',
        '#CodeIgniter',
        '#Python',
        '#Django',
        '#MySQL',
        '#MongoDB',
        '#APIs',
        '#CloudComputing',
      ],
      experience: '2 - 5 Years',
      gradientColors: 'linear-gradient(-45deg, rgb(108, 50, 182), rgb(29, 160, 163))',
      description:
        'We are seeking a skilled Back End Developer with hands-on experience in modern web technologies, cloud platforms, and scalable architecture. Join our team to work on impactful and innovative web solutions.',
      responsibilities: [
        'Develop and maintain server-side applications using NodeJS, PHP (Laravel/CodeIgniter), or Python (Django/Flask)',
        'Design and manage SQL/NoSQL databases (MySQL, MongoDB)',
        'Build RESTful APIs for web and mobile apps',
        'Integrate third-party APIs such as Stripe, PayPal, Google Maps, etc.',
        'Deploy, monitor, and maintain applications on AWS, GCP, or Azure',
        'Collaborate with front-end developers and DevOps teams',
        'Ensure data protection, application security, and optimal performance',
      ],
      requirements: [
        'Proficiency in backend languages like PHP, NodeJS, or Python',
        'Strong database skills (MySQL, MongoDB)',
        'Experience with RESTful API development',
        'Knowledge of HTML5, CSS3, JavaScript, jQuery, AJAX',
        'Familiarity with cloud platforms (AWS, GCP, Azure)',
        'Experience with version control tools (Git, Bitbucket)',
        'Understanding of scalable app architecture and deployment strategies',
        'Exposure to containerization (Docker) and CI/CD pipelines',
      ],
      location: 'Kolkata',
      softSkills: [
        'Excellent problem-solving and analytical thinking',
        'Strong communication and team collaboration',
        'Delivery-focused with attention to detail',
        'Creative and innovative mindset',
        'Adaptable to dynamic environments',
        'Very good team player',
        'Delivery Oriented',
        'Innovative and able to think in creative fashion',
        'Adaptable to challenges',
        'Problem solver',
      ],
      desiredCandidateProfile: [
        'Passionate about backend technologies and scalable applications',
        'Comfortable with cloud and modern DevOps tools',
        'Interested to learn & work with latest/upcoming technologies',
        'Familiarity with Agile/Scrum methodologies',
        'Self-motivated and able to handle challenging tasks',
      ],
      naukriLink: 'https://www.naukri.com/jobs-in-india?expJD=true'
    },
    {
      id: '3',
      title: 'Shopify Developer',
      hashtags: [
        "#Shopify", "#RubyonRails"
      ],
      experience: '2 - 6 Years',
      gradientColors: 'linear-gradient(-45deg, rgb(15, 134, 178), rgb(7, 62, 152))',
      description:
        'We are seeking a skilled Shopify Developer with expertise in Shopify & Shopify Plus to build, customize, and maintain high-performance eCommerce websites.',
      responsibilities: [
        'Design, develop, and customize Shopify themes',
        'Migrate websites from other eCommerce platforms to Shopify',
        'Extend Shopify functionalities using Liquid, storefront APIs, and metafields',
        'Integrate third-party and platform-supported apps into Shopify sites',
        'Configure Shopify settings such as payment methods, taxes, shipping, and navigation',
        'Optimize Shopify site performance and page speed',
        'Implement SEO and CRO best practices',
        'Ensure pixel-perfect development and attention to detail in design',
      ],
      requirements: [
        'Minimum 2 years of experience in Shopify website development',
        'Strong expertise in Shopify & Shopify Plus platforms',
        'Proficiency with Shopify Liquid templating language',
        'Experience with storefront APIs, AJAX Cart, and dynamic sections',
        'Strong knowledge of HTML5, CSS3, JavaScript (ES5/6)',
        'Experience with SCSS, PHP, MySQL, and WordPress (preferred)',
        'Familiarity with third-party integrations and Shopify app ecosystem',
      ],
      location: 'Kolkata',
      softSkills: [
        'Problem-solving mindset',
        'High attention to detail',
        'Strong team collaboration',
        'Time management and delivery focus',
        'Proactive and passionate about eCommerce technology',
      ],
      desiredCandidateProfile: [
        'Excellent communication and collaboration skills',
        'Ability to work independently or in a team environment',
        'Adaptable to changing project requirements and fast-paced workflows',
        'A passion for building strong development teams and scalable solutions',
      ],
      naukriLink: '#'
    },
    {
      id: '4',
      title: 'Senior WordPress Developer',
      hashtags: [
        "#WordPress", "#WooCommerce"," #PHP", "#MySQL" ,"#JavaScript" ,"#Plugins"
      ],
      experience: '2 - 6 Years',
      gradientColors: 'linear-gradient(-45deg, rgb(15, 134, 178), rgb(7, 62, 152))',
      description:
        'We are looking for a passionate and experienced Senior WordPress Developer to lead complex WordPress projects, develop custom plugins, and help shape modern web experiences.',
      responsibilities: [
        'Develop custom WordPress themes and plugins',
        'Optimize WordPress website performance and scalability',
        'Manage and customize WooCommerce implementations',
        'Work on complex SQL queries and data-intensive applications',
        'Mentor and support junior developers in the team',
        'Integrate third-party APIs and services as needed',
      ],
      requirements: [
        '2 - 6 years of hands-on WordPress development experience',
        'Strong expertise in WordPress, WooCommerce, and plugin customization',
        'Solid knowledge of PHP and MySQL',
        'Experience with JavaScript, jQuery, and AJAX',
        'Experience with CodeIgniter or Laravel (preferred)',
        'Excellent skills in writing and optimizing SQL queries',
      ],
      location: 'Kolkata',
      softSkills: [
        'Very good team player',
        'Delivery oriented',
        'Innovative and able to think in creative fashion',
        'Adaptable to challenges',
        'Problem solver',
      ],
      desiredCandidateProfile: [
        'Looking for a rewarding role',
        'Interested to learn & work with latest/upcoming technologies like Angular, Node.js, Shopify',
        'Self-motivated and eager to contribute to project success',
        'Open to collaboration and continuous learning',
      ],
      naukriLink: 'https://www.naukri.com/job-listings-110425021224'
    },
    {
      id: '5',
      title: 'Full Stack Developer',
      hashtags: [
        "#FullStackDeveloper", "#FrontEndDeveloper", "#BackEndDeveloper"
      ],
      experience: '0 - 3 Years',
      gradientColors: 'linear-gradient(-45deg, rgb(0,103,183), rgb(140, 13,99))',
      description:
        'We are seeking a Full Stack Developer with hands-on experience in both front-end and back-end technologies to build scalable web applications and APIs.',
      responsibilities: [
        'Develop and maintain user interfaces using modern frameworks like React, Angular, or Vue.js',
        'Implement server-side logic using Node.js and Express',
        'Work with databases such as MySQL and PostgreSQL',
        'Translate business requirements into scalable technical solutions',
        'Collaborate with team members in an Agile environment',
        'Consume and build RESTful APIs',
        'Use version control tools like Git to manage codebase',
      ],
      requirements: [
        'Proficiency in TypeScript, JavaScript, ES6, and DOM manipulation',
        'Strong knowledge of HTML5 and CSS3',
        'Experience with NodeJS fundamentals and Express framework',
        'Working knowledge of MySQL and PostgreSQL (preferred)',
        'Familiarity with Git, GitHub, and task tracking tools like JIRA',
        'Experience in building full-stack web applications',
      ],
      location: 'Kolkata',
      softSkills: [
        'Problem-solving',
        'Attention to detail',
        'Team collaboration',
        'Time management',
        'Independent working ability',
        'Experience working in an Agile environment',
        'Creative thinking and animation knowledge with GSAP',
      ],
      desiredCandidateProfile: [
        '0 - 3 years of experience in Full Stack Development',
        'Eager to work on both front-end and back-end projects',
        'Adaptable to new technologies and project requirements',
        'Passion for building modern web applications and scalable systems',
      ],
      naukriLink: 'https://www.naukri.com/jobs-in-india?expJD=true'
    },
    {
      id: '6',
      title: 'PHP Development - Internship',
      hashtags: ["#PHP", "#MySQL", "#JavaScript", "#Plugins"],
      experience: 'Fresher',
      gradientColors: 'linear-gradient(-45deg, rgb(108, 50, 182), rgb(29, 160, 163))',
      description: 'We are offering a PHP Development internship opportunity for passionate and aspiring developers to gain hands-on experience in web development.',
      responsibilities: [
        'Assist in developing and maintaining web applications',
        'Learn and implement PHP, JavaScript, and MySQL best practices',
        'Support senior developers and participate in code reviews',
        'Collaborate with the team on real-world projects',
      ],
      requirements: [
        'Working knowledge of PHP, JavaScript, and MySQL',
        'Basic understanding of HTML and CSS',
        'Eagerness to learn and grow in a professional environment',
        'Good analytical and problem-solving skills',
      ],
      location: 'Kolkata',
      softSkills: [
        'Problem-solving',
        'Attention to detail',
        'Team collaboration',
        'Time management',
      ],
      desiredCandidateProfile: [
        'Are available for the work from home job/internship',
        'Can start the work from home job/internship immediately',
        'Are available for a minimum duration of 6 months',
        'Have relevant skills and interests',
      ],
      naukriLink: '#'
    },
    {
      id: '7',
      title: 'UI/UX Designer Intern',
      hashtags: ["GraphicDesign", "#Logo", "#WebDesign", "#AppDesign", "#UI", "#UX"],
      experience: 'Fresher',
      gradientColors: 'linear-gradient(-45deg, rgb(108, 50, 182), rgb(29, 160, 163))',
      description: 'We are looking for a creative UI/UX Design Intern to join our team.',
      responsibilities: [
        'Assist in creating wireframes and prototypes',
        'Help design user interfaces',
        'Participate in user research',
        'Support design team with various projects',
      ],
      requirements: [
        'Innovative and able to think in creative fashion',
        'Web & Mobile App Layout Designing Skills',
      ],
      location: 'Kolkata',
      softSkills: [
        'Very good Team player',
        'Delivery Oriented',
        'Innovative and able to think in creative fashion',
        'Adaptable to challenges',
        'Problem solver',
      ],
      desiredCandidateProfile: [],
      naukriLink: '#'
    }
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
      icon: '/job-details/badge.png',
      alt: 'Check icon',
    },
    {
      text: job.experience,
      icon: '/job-details/power_career.png',
      alt: 'Check icon',
    },
    {
      text: job.location ?? 'Location not specified',
      icon: '/job-details/placeholder_career.png',
      alt: 'Check icon',
    },
  ];
  return (
    <>
      <section className="relative">
        <JobDetailsBanner
          jobTitle={job.title}
          backgroundImage="/images/apply-job.png"
          benefits={customBenefits}
          applyButtonText="Apply Now"
          scrollToId="applicationForm"
          buttonanimation = "ripple-btn"
        />
        {/* Job Details Content */}
        {/* className='md:pt-16 pt-12' */}
        <div className='pt-16 text-title'>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto"> {/* Added max-width and mx-auto for centering */}
              <div className="inner paragraph font-roboto text-title">
                <p className="mb-10"> {/* Added text-center for the description */}
                  {job.description}
                  <br />
                  <br />
                  The current position requires the following skills:
                </p>
                {job.requirements && job.requirements.length > 0 && (
                  <div className="flex flex-col md:flex-row gap-8"> {/* Added gap for better spacing */}
                    <div className="md:w-1/3">
                      <h3 className="subheading font-source font-semibold text-title">Technical Skills:</h3>
                    </div>
                    <div className="md:w-2/3">
                      <ul className="list-[circle] pl-5 text-title space-y-2 paragraph font-roboto">
                        {job.requirements.map((skill, index) => (
                          <li className="text-title" key={index}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {job.softSkills && job.softSkills.length > 0 && (
                  <div className="flex flex-col md:flex-row gap-8 mt-[65px]">
                    <div className="md:w-1/3">
                      <h3 className="subheading font-source font-semibold text-title">Soft Skills:</h3>
                    </div>
                    <div className="md:w-2/3">
                      <ul className="list-[circle] pl-5 text-title space-y-2 paragraph font-roboto">
                        {job.softSkills.map((skill, index) => (
                          <li className="text-title"  key={index}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {job.desiredCandidateProfile && job.desiredCandidateProfile.length > 0 && (
                  <div className="flex flex-col md:flex-row gap-8 mt-[65px]">
                    <div className="md:w-1/3">
                      <h3 className="subheading font-source font-semibold text-title">Desired Candidate Profile:</h3>
                    </div>
                    <div className="md:w-2/3">
                      <ul className="list-[circle] pl-5 text-title space-y-2 paragraph font-roboto">
                        {job.desiredCandidateProfile.map((profile, index) => (
                          <li className="text-title" key={index}>{profile}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              {/* Apply Div */}
              <div className="pt-14" ref={formRef} id="applicationForm">
                {jobWithForm.includes(job.id) ? (
                  <JoinTeam title="Apply Now" />
                ) : jobWithFormAndButton.includes(job.id) ? (
                  <>
                    <div className="flex flex-col sm:flex-row gap-10 justify-center items-center mb-16 pt-14">
                      <button
                        className="ripple-btn min-h-[40px] min-w-[280px] bg-green-btn text-primary-white paragraph font-source py-3 px-6 rounded-md transition-colors"
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                          window.open(`${job.naukriLink}`, '_blank', 'noopener,noreferrer')
                        }
                      >
                        Apply via Naukri
                      </button>
                      <button
                        className="ripple-btn min-h-[40px] min-w-[280px] bg-green-btn text-primary-white paragraph font-source py-3 px-6 rounded-md transition-colors"
                        onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Apply Now
                      </button>
                    </div>
                    <JoinTeam title="Apply Now" className='pt-14'/>
                  </>
                ) : jobWithOneButtonAndForm.includes(job.id) ? (
                  <>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 pt-14">
                      <button
                        className="ripple-btn min-h-[40px] md:ml-[32px] min-w-[280px] bg-green-btn text-primary-white paragraph font-source py-3 px-6 rounded-md transition-colors"
                        onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Apply Now
                      </button>
                    </div>
                    <JoinTeam title="Apply Now" className='pt-14'/>
                  </>
                ) : (
                  <div className='flex justify-center pt-14'>
                    <button
                      className="ripple-btn md:ml-[32px] min-w-[280px] bg-green-btn text-primary-white font-medium py-3 px-6 rounded-md transition-colors my-10"
                      onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                        window.open(`${job.naukriLink}`, '_blank', 'noopener,noreferrer')
                      }
                    >
                      Apply via Naukri.com
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Common_banner/>
    </>
  );
}