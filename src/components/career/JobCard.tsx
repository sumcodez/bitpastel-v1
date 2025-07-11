'use client';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();
  
  // const scrollToSection = (id: string) => {
  //   const el = document.getElementById(id);
  //   if (el) {
  //     setTimeout(() => {
  //       window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
  //     }, 100);
  //   }
  // };

  const scrollToSection = (id: string) => {
    // Remove any # from the id if present
    const cleanId = id.replace('#', '');
    const el = document.getElementById(cleanId);
    
    if (el) {
      // Calculate the position considering any fixed headers
      const yOffset = -100; // Adjust this value based on your header height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

 const jobListings = [
    {
      id: "1",
      title: "Marketing Manager",
      hashtags: ["#Upwork", "#Freelancer", "#OnlineBidding", "#Leadership", "#Itservice", "#Itsales"],
      experience: "2 - 6 Years",
      gradientColors: "linear-gradient(-45deg, rgb(0,103,183), rgb(140, 13,99))"
    },
    {
      id: "2",
      title: "Back End Developer",
      hashtags: ["#PHP", "#MySQL", "#CodeIgniter", "#Laravel", "#JavaScript", "#Plugins", "#WordPress", "#WooCommerce", "#Shopify"],
      experience: "2 - 5 Years",
      gradientColors: "linear-gradient(-45deg, rgb(108, 50, 182), rgb(29, 160, 163))"
    },
    {
      id: "3",
      title: "Shopify Developer",
      hashtags: ["#Shopify", "#RubyonRails"],
      experience: "2 - 6 Years",
      gradientColors: "linear-gradient(-45deg, rgb(15, 134, 178), rgb(7, 62, 152))"
    },
    {
      id: "4",
      title: "Senior WordPress Developer",
      hashtags: ["#WordPress", "#WooCommerce"," #PHP", "#MySQL" ,"#JavaScript" ,"#Plugins"],
      experience: "2 - 6 Years",
      gradientColors: "linear-gradient(-45deg, rgb(15, 134, 178), rgb(7, 62, 152))"
    },
    {
      id: "5",
      title: "Full Stack Developer",
      hashtags: ["#FullStackDeveloper", "#FrontEndDeveloper", "#BackEndDeveloper"],
      experience: "2 - 5 Years",
      gradientColors: "linear-gradient(-45deg, rgb(0, 103, 183), rgb(140, 13, 99))"
    },
    {
      id: "6",
      title: "PHP Development - Internship",
      hashtags: ["#PHP", "#MySQL", "#JavaScript", "#Plugins"],
      experience: "Fresher",
      gradientColors: "linear-gradient(-45deg, rgb(108, 50, 182), rgb(29, 160, 163))"
    },
    {
      id: "7",
      title: "UI/UX Designer Intern",
      hashtags: ["GraphicDesign", "#Logo", "#WebDesign", "#AppDesign", "#UI", "#UX"],
      experience: "Fresher",
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
    <div className="min-h-screen md:pt-[90px] pt-[70px]" id='#jobCards'>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-[30px]">
          <p className="text-title max-w-4xl paragraph mx-auto leading-relaxed md:block inline">
            To apply for any of the current job openings, please go to the respective box below and click on the
            <span className=" font-semibold  text-accent-green">"Apply"</span> button.
          </p>
          <p className="text-title paragraph md:block inline">
            If you don't see any suitable vacancy, send your resume
            <button className="text-accent-green font-medium px-1 hover:text-[#B2B2B2]"
            onClick={() => scrollToSection('#joinTeamForm')}
            >
                here </button>
            and we'll get in touch with you as soon as there is any opening that matches your profile.
          </p>
        </div>
        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 justify-items-center mx-auto grid-card-custom max-w-full">
          {jobListings.map((job, index) => (
            <Card
              key={job.id}
              title={job.title}
              hashtags={job.hashtags}
              experience={job.experience}
              gradientColors={job.gradientColors}
              onApply={() => handleApply(job.title)}
              onClick={() => handleApplyClick(job.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}