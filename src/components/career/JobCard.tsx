'use client';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();
  
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
      }, 100);
    }
  };
  const jobListings = [
    {
      id: "1",
      title: "Marketing Manager",
      hashtags: ["#Upwork", "#Freelancer", "#OnlineBidding", "#Leadership", "#Itservice", "#Itsales"],
      experience: "Experience : 2 - 6 Years",
      gradientColors: "linear-gradient(-45deg, rgb(0,103,183), rgb(140, 13,99))"
    },
    {
      id: "2",
      title: "Back End Developer",
      hashtags: ["#PHP", "#MySQL", "#CodeIgniter", "#Laravel", "#JavaScript", "#Plugins", "#WordPress", "#WooCommerce", "#Shopify"],
      experience: "Experience : 2 - 5 Years",
      gradientColors: "linear-gradient(-45deg, rgb(108, 50, 182), rgb(29, 160, 163))"
    },
    {
      id: "3",
      title: "Shopify Developer",
      hashtags: ["#Shopify", "#RubyonRails"],
      experience: "Experience : 2 - 6 Years",
      gradientColors: "linear-gradient(-45deg, rgb(15, 134, 178), rgb(7, 62, 152))"
    },
    {
      id: "4",
      title: "Senior WordPress Developer",
      hashtags: ["#WordPress", "#WooCommerce"," #PHP", "#MySQL" ,"#JavaScript" ,"#Plugins"],
      experience: "Experience : 2 - 6 Years",
      gradientColors: "linear-gradient(-45deg, rgb(15, 134, 178), rgb(7, 62, 152))"
    },
    {
      id: "5",
      title: "Full Stack Developer",
      hashtags: ["#Shopify", "#RubyonRails"],
      experience: "Experience : 2 - 6 Years",
      gradientColors: "linear-gradient(-45deg, rgb(0, 103, 183), rgb(140, 13, 99))"
    },
    {
      id: "6",
      title: "PHP Development - Internship",
      hashtags: ["#Shopify", "#RubyonRails"],
      experience: "Experience : 2 - 6 Years",
      gradientColors: "linear-gradient(-45deg, rgb(108, 50, 182), rgb(29, 160, 163))"
    },
    {
      id: "7",
      title: "UI/UX Designer Intern",
      hashtags: ["#Shopify", "#RubyonRails"],
      experience: "Experience : 2 - 6 Years",
      gradientColors: "linear-gradient(-45deg, rgb(108, 50, 182), rgb(29, 160, 163))"
    }
  ];

  const handleApply = (jobTitle: string) => {
    // alert(`Applied for ${jobTitle} position!`);
  };
  
  const handleApplyClick = (id: string) => {
    router.push(`career/applyJob/${id}`); // Navigate to job detail page
  };

  return (
    <div className="min-h-screen md:pt-20 md:pb-16 pb-14 pt-20 px-4" id='#jobCards'>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <p className="text-gray-700 text-base max-w-4xl mx-auto leading-relaxed">
            To apply for any of the current job openings, please go to the respective box below and click on the{' '}
            <span className=" font-semibold">"Apply"</span> button.
          </p>
          <p className="text-gray-700 text-base mt-2">
            If you don't see any suitable vacancy, send your resume{' '}
            <button className="text-accent-green font-medium pr-1"
            onClick={() => scrollToSection('joinTeamForm')}
            >
                here </button>{ }
            and we'll get in touch with you as soon as there is any opening that matches your profile.
          </p>
        </div>
        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center md:max-w-[80%] mx-auto">
          {jobListings.map((job, index) => (
            <Card
              key={job.id}
              title={job.title}
              hashtags={job.hashtags}
              experience={job.experience}
              gradientColors={job.gradientColors}
              onApply={() => handleApply(job.title)}
              onClick={() => handleApplyClick(job.id)}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}