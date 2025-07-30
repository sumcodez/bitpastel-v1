import Image from "next/image"

const TeamCollageNew = () => {
  return (
    <section className="team-members">
      <div className="container mx-auto px-4">
        <div className="team-collage">
          <h2 className="text-[20px] font-[700] pb-4">Escape Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* IMPORTANT: Replace width and height with the actual intrinsic dimensions of your images */}
            <Image
              src="/images/new-team-images/new/escape_room_img-1.webp"
              alt="escape room with team members"
              width={1200} // REPLACE with actual intrinsic width of this image
              height={900} // REPLACE with actual intrinsic height of this image
              quality={100} // Set image quality to 100%
              className="w-full object-cover" // w-full makes it responsive, object-cover maintains aspect ratio
            />
            <Image
              src="/images/new-team-images/new/escape_room_img-2.webp"
              alt="escape room with team members"
              width={1200} // REPLACE with actual intrinsic width
              height={900} // REPLACE with actual intrinsic height
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/escape_room_img-3.webp"
              alt="escape room with team members"
              width={1200} // REPLACE with actual intrinsic width
              height={900} // REPLACE with actual intrinsic height
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/escape_room_img-4.webp"
              alt="escape room with team members"
              width={1200} // REPLACE with actual intrinsic width
              height={900} // REPLACE with actual intrinsic height
              quality={100}
              className="w-full object-top" // Original object-top preserved
            />
          </div>
        </div>

        <div className="team-collage">
          <h2 className="text-[20px] font-[700] pb-4">Interactive Team Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Image
              src="/images/new-team-images/new/jenga_puzzle-play-1.webp"
              alt="Jenga Puzzle Playing team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/jenga_puzzle-play-2.webp"
              alt="Jenga Puzzle Playing team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/jenga_puzzle-play-3.webp"
              alt="Jenga Puzzle Playing team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/jenga_puzzle-play-4.webp"
              alt="Jenga Puzzle Playing team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="team-collage">
          <h2 className="text-[20px] font-[700] pb-4">Bitpastel turns 8</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 mb-2">
            <Image
              src="/images/new-team-images/new/bitpastel-turn-8-1.webp"
              alt="Bitpastel Turns 8 year Celebration"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <Image
              src="/images/new-team-images/new/bitpastel-turn-8-2.webp"
              alt="Bitpastel Turns 8 year Celebration"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/bitpastel-turn-8-3.webp"
              alt="Bitpastel Turns 8 year Celebration"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1">
            <Image
              src="/images/new-team-images/new/bitpastel-turn-8-4.webp"
              alt="Bitpastel Turns 8 year Celebration"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="team-collage">
          <h2 className="text-[20px] font-[700] pb-4">Ice Breaker - Coffee Evening</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Image
              src="/images/new-team-images/new/ice-breaker-coffee-1.webp"
              alt="Ice Breaker - Coffee Evening team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/ice-breaker-coffee-2.webp"
              alt="Ice Breaker - Coffee Evening team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="team-collage">
          <h2 className="text-[20px] font-[700] pb-4">Christmas Celebration at Office 2024</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Image
              src="/images/new-team-images/new/christmas-celebration-at-office-2024-1.webp"
              alt="Christmas Celebration at Office 2024 with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/christmas-celebration-at-office-2024-2.webp"
              alt="Christmas Celebration at Office 2024 with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="team-collage">
          <h2 className="text-[20px] font-[700] pb-4">Ethnic Day Celebration at Office 2024</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Image
              src="/images/new-team-images/new/ethnic-day-celeb-1.webp"
              alt="Ethnic Day Celebration at Office 2024 with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/ethnic-day-celeb-2.webp"
              alt="Ethnic Day Celebration at Office 2024 with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="team-collage">
          <h2 className="text-[20px] font-[700] pb-4">Birthday Day Celebration at Office</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Image
              src="/images/new-team-images/new/birthday-celeb-office-1.webp"
              alt="Birthday Celebration at Office with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/birthday-celeb-office-2.webp"
              alt="Birthday Celebration at Office with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/birthday-celeb-office-3.webp"
              alt="Birthday Celebration at Office with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/birthday-celeb-office-4.webp"
              alt="Birthday Celebration at Office with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="team-collage">
          <h2 className="text-[20px] font-[700] pb-4">Work Anniversary Celebration at Office 2024</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Image
              src="/images/new-team-images/new/work-anniversary-celeb-2024-1.webp"
              alt="Work Anniversary Celebration at Office 2024 with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/work-anniversary-celeb-2024-2.webp"
              alt="Work Anniversary Celebration at Office 2024 with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/work-anniversary-celeb-2024-3.webp"
              alt="Work Anniversary Celebration at Office 2024 with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/work-anniversary-celeb-2024-4.webp"
              alt="Work Anniversary Celebration at Office 2024 with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="team-collage">
          <h2 className="text-[20px] font-[700] pb-4">Team Meetup</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
            <Image
              src="/images/new-team-images/new/team-meetup-1.webp"
              alt="Team Meetup #Movie #Coffee"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/team-meetup-2.webp"
              alt="Team Meetup #Movie #Coffee"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="team-collage">
          <h2 className="text-[20px] font-[700] pb-4">Bitpastel Townhall 2024</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 mb-2">
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2024-1.webp"
              alt="Bitpastel Townhall 2024 cover"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2024-2.webp"
              alt="Bitpastel Townhall cake cutting with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2024-3.webp"
              alt="Bitpastel Townhall 2024 CEO Speech"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 mb-2">
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2024-4.webp"
              alt="Bitpastel Townhall 2024 cover"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2024-5.webp"
              alt="Bitpastel Townhall cake cutting with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2024-6.webp"
              alt="Bitpastel Townhall 2024 CEO Speech"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 mb-2">
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2024-7.webp"
              alt="Bitpastel Townhall 2024 cover"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2024-8.webp"
              alt="Bitpastel Townhall cake cutting with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2024-9.webp"
              alt="Bitpastel Townhall 2024 CEO Speech"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 mb-2">
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2024-10.webp"
              alt="Bitpastel Townhall 2024 cover"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2024-11.webp"
              alt="Bitpastel Townhall cake cutting with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2024-12.webp"
              alt="Bitpastel Townhall 2024 CEO Speech"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2024-13.webp"
              alt="Bitpastel Townhall 2024 cover"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2024-14.webp"
              alt="Bitpastel Townhall cake cutting with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 mb-2">
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2024-15.webp"
              alt="Bitpastel Townhall 2024 CEO Speech"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="team-collage">
          <h2 className="text-[20px] font-[700] pb-4">Bitpastel Townhall 2023</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 mb-2">
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2023-1.webp"
              alt="Bitpastel Townhall 2023 cover"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2023-2.webp"
              alt="Bitpastel Townhall cake cutting with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2023-3.webp"
              alt="Bitpastel Townhall 2024 CEO Speech"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 mb-2">
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2023-4.webp"
              alt="Bitpastel Townhall 2024 cover"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2023-5.webp"
              alt="Bitpastel Townhall cake cutting with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2023-6.webp"
              alt="Bitpastel Townhall 2024 CEO Speech"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 mb-2">
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2023-7.webp"
              alt="Bitpastel Townhall 2024 cover"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2023-8.webp"
              alt="Bitpastel Townhall cake cutting with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2023-9.webp"
              alt="Bitpastel Townhall 2024 CEO Speech"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2023-10.webp"
              alt="Bitpastel Townhall 2024 cover"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2023-11.webp"
              alt="Bitpastel Townhall cake cutting with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 mb-2">
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2023-12.webp"
              alt="Bitpastel Townhall 2024 CEO Speech"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2023-13.webp"
              alt="Bitpastel Townhall 2024 cover"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2023-14.webp"
              alt="Bitpastel Townhall cake cutting with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2023-15.webp"
              alt="Bitpastel Townhall 2024 CEO Speech"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2023-16.webp"
              alt="Bitpastel Townhall 2024 CEO Speech"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="team-collage">
          <h2 className="text-[20px] font-[700] pb-4">Culture at Bitpastel</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Image
              src="/images/new-team-images/new/culture-1.webp"
              alt="Bitpastel Townhall 2023 cover"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/culture-2.webp"
              alt="Bitpastel Townhall 2023 cover"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="team-collage">
          <h2 className="text-[20px] font-[700] pb-4">Year-end Celebration 2022</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <Image
              src="/images/new-team-images/new/year-end-celeb-2022-1.webp"
              alt="Year-end Celebration 2022 with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/year-end-celeb-2022-2.webp"
              alt="Year-end Celebration 2022 with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-2 mb-2">
            <Image
              src="/images/new-team-images/new/year-end-celeb-2022-3.webp"
              alt="Year-end Celebration 2022 with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Image
              src="/images/new-team-images/new/year-end-celeb-2022-4.webp"
              alt="Year-end Celebration 2022 with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/year-end-celeb-2022-5.webp"
              alt="Year-end Celebration 2022 with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="team-collage">
          <h2 className="text-[20px] font-[700] pb-4">Sunday Brunch at Westin</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Image
              src="/images/new-team-images/new/sunday-brunch-westin-1.webp"
              alt="Sunday Brunch at Westin with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/sunday-brunch-westin-2.webp"
              alt="Sunday Brunch at Westin with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="team-collage">
          <h2 className="text-[20px] font-[700] pb-4">Bitpastel Townhall 2022</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2022-1.webp"
              alt="Bitpastel Townhall 2022 with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2022-2.webp"
              alt="Bitpastel Townhall 2022 with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2022-3.webp"
              alt="Bitpastel Townhall 2022 with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2022-4.webp"
              alt="Bitpastel Townhall 2022 with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="team-collage">
          <h2 className="text-[20px] font-[700] pb-4">Bitpastel Townhall 2021</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2021-1.webp"
              alt="Bitpastel Townhall 2021 with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src="/images/new-team-images/new/bitpastel-townhall-2021-2.webp"
              alt="Bitpastel Townhall 2021 with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamCollageNew
