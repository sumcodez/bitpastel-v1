import React from 'react';
import Image from 'next/image';
const TeamCollageNew = () => {
  return (
    <section className="team-members">
      <div className="container mx-auto px-4">
        <div className="team-collage">
          <h2 className="text-title title font-[600]">Escape Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <img
              src="/images/new-team-images/escape_room_img-1.webp"
              alt="escape room with team members"
              className="w-full"
            />
            <img
              src="/images/new-team-images/escape_room_img-2.webp"
              alt="escape room with team members"
              className="w-full"
            />
            <img
              src="/images/new-team-images/escape_room_img-3.webp"
              alt="escape room with team members"
              className="w-full"
            />
            <img
              src="/images/new-team-images/escape_room_img-4.webp"
              alt="escape room with team members"
              className="w-full object-top"
            />
          </div>
        </div>




        <div className="team-collage">
          <h2 className="text-title title font-[600]">Interactive Team Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <img
              src="/images/new-team-images/jenga_puzzle-play-1.jpg"
              alt="Jenga Puzzle Playing team members"
              className="w-full"
            />
            <img
              src="/images/new-team-images/jenga_puzzle-play-2.webp"
              alt="Jenga Puzzle Playing team members"
              className="w-full"
            />
            <img
              src="/images/new-team-images/jenga_puzzle-play-3.webp"
              alt="Jenga Puzzle Playing team members"
              className="w-full"
            />
            <img
              src="/images/new-team-images/jenga_puzzle-play-4.webp"
              alt="Jenga Puzzle Playing team members"
              className="w-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamCollageNew;
