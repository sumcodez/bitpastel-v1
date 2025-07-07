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
  const jobWithFormAndButton = ["4","1"];
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
        "Proven experience in backend development using NodeJS, PHP (Laravel/CodeIgniter), or Python (Django/Flask)",
        "Proficient in database design and management using MySQL, MongoDB, or other SQL/NoSQL databases",
        "Strong experience with RESTful API development for web and mobile platforms",
        "Solid understanding of HTML5, CSS3, JavaScript, jQuery, AJAX",
        "Familiarity with third-party API integrations (e.g., Stripe, PayPal, Google Maps, Facebook, etc.)",
        "Hands-on experience with cloud platforms such as AWS, Google Cloud Platform (GCP), or Microsoft Azure",
        "Competent with version control tools like Git or Bitbucket",
        "Experience in deploying and maintaining applications on cloud servers",
        "Experience in developing scalable applications",
        "Exposure to containerization tools like Docker",
        "Understanding of CI/CD pipelines",
        "Familiarity with Agile/Scrum methodologies"
      ],
      location: 'Kolkata',
      softSkills: [
        "Excellent problem-solving and analytical thinking abilities",
        "Strong communication skills and a proactive approach to collaboration",
        "Delivery-focused with attention to detail",
        "Creative mindset and ability to innovate on the go",
        "Comfortable working in fast-paced, dynamic environments"
      ],
      desiredCandidateProfile: [
        'Interested to learn & work with latest/upcoming technologies'
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
        "A minimum of 2 years of experience in Shopify Website Development",
        "Strong knowledge of Shopify & Shopify Plus platforms & theme customization",
        "Experience in migrating websites from other eCommerce platforms to Shopify",
        "Experience in extending Shopify functionalities to the next level using storefront APIs, liquid programming, meta fields, etc",
        "Experience in integrating third-party and platform-supported apps in the sites",
        "Experience in setting up payment methods, navigation, shipping methods, and taxes in the Shopify platform",
        "Page speed optimization of Shopify sites",
        "Implementing SEO/CRO best practices in Shopify sites",
        "Producing high-quality of work with a strong focus on detail",
        "Expert-level knowledge of Shopify Liquid templating language",
        "Proficiency in working with different Shopify JS APIs (storefront, AJAX Cart, Sections etc)",
        "An expertise in HTML5, CSS3 and JavaScript/ECMA Script 5/6",
        "A knowledge of SCSS (preferred)",
        "Experience with WordPress (preferred)",
        "Proficiency in PHP/MYSQL and AJAX (preferred)",
        "Passion for building a team"
      ],
      location: 'Kolkata',
      softSkills: [
      ],
      desiredCandidateProfile: [
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
        "At least 2 - 6 Years of web development experience in WordPress Development",
        "Strong knowledge in WordPress, WooCommerce & Plugin development",
        "Experience in any one of PHP Frameworks - CodeIgniter or Laravel is desired",
        "Experience in JavaScript, jQuery, AJAX is required",
        "Excellent in handling complex SQL queries is desired"
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
        "Looking for a rewarding role",
        "Interested to learn & work with latest/upcoming technologies like Angular, Node JS, Shopify"
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
        "Hands-on experience with front-end frameworks (React, Angular, Vue.js)",
        "Strong working knowledge of TypeScript, MySQL, Express",
        "Strong proficiency in TypeScript, JavaScript including DOM manipulation and the JavaScript object model, ES6",
        "Strong understanding of HTML5, CSS3",
        "Strong understanding of NodeJS fundamentals",
        "Knowledge and experience working with PostgreSQL is a major plus",
        "Familiarity with RESTful APIs",
        "Knowledge of tools like Git, GitHub, JIRA and others that make coding more efficient and easier to share",
        "Solid front-end and back-end software development experience",
        "Ability to understand business requirements and translate them into technical requirements"
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
        "Experience working in an Agile environment",
        "Strong knowledge of GSAP",
        "Should be able to work independently and with the team"
      ],
      desiredCandidateProfile: [
        '0 - 3 years of experience in Full Stack Development',
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
        'Working with PHP, JavaScript, MySql'
      ],
      location: 'Kolkata',
      softSkills: [

      ],
      desiredCandidateProfile: [
        "Are available for the work from home job/internship",
        "Can start the work from home job/internship immediately",
        "Are available for a minimum duration of 6 months",
        "Have relevant skills and interests"
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
      text: job.hashtags,
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
        <div className='md:pt-[90px] pt-[70px] text-title'>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto"> {/* Added max-width and mx-auto for centering */}
              <div className="inner paragraph font-roboto text-title">
                <p className="mb-10"> {/* Added text-center for the description */}
                  {job.description}
                  <br />
                  <br />
                  The current position requires the following skills:
                </p>
                {job.requirements && (
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
                {job.softSkills && (
                  <div className="flex flex-col md:flex-row gap-4 md:mt-[65px] mt-[30px]">
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
                {job.desiredCandidateProfile && (
                  <div className="flex flex-col md:flex-row gap-4 md:mt-[65px] mt-[30px]">
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
              <div className="md:pt-[90px] pt-[70px]" ref={formRef} id="applicationForm">
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
                        Apply via Naukri.com
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
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 md:pt-[90px] pt-[70px]">
                      <button
                        className="ripple-btn min-h-[40px] md:ml-[32px] min-w-[280px] bg-green-btn text-primary-white paragraph font-source py-3 px-6 rounded-md transition-colors"
                        onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Apply Now
                      </button>
                    </div>
                    <JoinTeam title="Apply Now" className='pt-8' jobTitle={job.title}/>
                  </>
                ) : (
                  <div className='flex justify-center'>
                    <button
                      className="ripple-btn md:ml-[32px] min-w-[280px] bg-green-btn text-primary-white font-medium py-3 px-6 rounded-md transition-colors"
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