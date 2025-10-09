import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '@/components/Modal';
import Link from 'next/link';

interface MigrationSectionProps {
    openModal?: () => void;
}

const MigrationSection: React.FC<MigrationSectionProps> = ({ openModal }) => {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <section id="Advantages" className="md:pt-[90px] pt-[60px] ">
                <div className="container mx-auto px-4 overflow-hidden">  
                    
                </div>
            </section>
            {/* <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
        </>
    );
};

export default MigrationSection;
