import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '@/components/Modal';
import Link from 'next/link';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

interface FAQSectionProps {
    openModal?: () => void;
}
interface FAQSection {
    id: string;
    title: string;
    description: string;
    iconPlus: string;
    iconMinus: string;

}

const FAQSection: React.FC<FAQSectionProps> = ({ openModal }) => {
    const FAQSection: FAQSection[] = [
        {
            id: 'accoridon1',
            title: 'Where do you provide services?',
            description: "Horizon is optimized for speed, design flexibility, and conversions-helping your store perform better on all fronts.",
            iconPlus: 'images/AccordionPlus.svg',
            iconMinus: 'images/AccordionMinus.svg',
        },
        {
            id: 'accoridon2',
            title: 'Can you migrate from any Shopify theme (free or paid)?',
            description: " Yes, we can migrate from both free and premium themes into Horizon.",
            iconPlus: 'images/AccordionPlus.svg',
            iconMinus: 'images/AccordionMinus.svg',
        }
        ,
        {
            id: 'accoridon3',
            title: 'How long does the migration process take?',
            description: "Typically 3-4 weeks, depending on complexity and customisations.",
            iconPlus: 'images/AccordionPlus.svg',
            iconMinus: 'images/AccordionMinus.svg',
        },
        {
            id: 'accoridon3',
            title: 'Do I need new apps when switching to Horizon?',
            description: "Not always. We review your current apps and ensure compatibility or suggest better alternatives.",
            iconPlus: 'images/AccordionPlus.svg',
            iconMinus: 'images/AccordionMinus.svg',
        }
    ]
    const faqData = FAQSection;
    const [expanded, setExpanded] = useState<number | false>(false);

    const handleChange =
        (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <>
            <section id="services" className="md:pt-[90px] pt-[60px] md:pb-[90px] pb-[60px]">
                <div className="container mx-auto px-4 overflow-hidden">
                    <h2 className=" md:font-[600] font-[700] font-source text-center text-title md:mb-0 mb-3 title">
                        Frequently Asked Questions
                    </h2>
                    <div className="max-w-[940px] mx-auto accordion md:mt-[40px] mt-[20px]">
                        {faqData.map((item, index) => {
                            const isActive = expanded === index;

                            return (
                                <Accordion
                                    key={item.id}
                                    expanded={expanded === index}
                                    onChange={handleChange(index)}
                                    sx={{
                                        borderRadius: '10px',
                                        boxShadow: isActive ? '1px 1px 14px 0px #0000001C;' : '1px 1px 14px 0px #0000001C',
                                        background: isActive ? 'linear-gradient(120.42deg, #22587A 9.08%, #56CC99 88.27%)' : '#fff',
                                        transition: 'all 0.3s ease',
                                        '&::before': { display: 'none' },
                                        marginBottom: '10px',
                                        marginTop: '10px',

                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={
                                            <img
                                                src={
                                                    isActive
                                                        ? '/images/AccordionMinus.svg'
                                                        : '/images/AccordionPlus.svg'
                                                }
                                                alt={isActive ? 'Collapse' : 'Expand'}
                                                className="w-5 h-5"
                                            />
                                        }
                                        sx={{
                                            paddingTop: '10px',
                                            paddingBottom: '10px',
                                        }}
                                        aria-controls={`panel${item.id}-content`}
                                        id={`panel${item.id}-header`}
                                    >
                                        <Typography
                                            component="span"
                                            className="accordion-item-title"
                                            sx={{
                                                color: isActive ? '#fff' : '#000',
                                                marginBottom: isActive ? '0px' : '0px 0px 0px 10px',
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                    </AccordionSummary>

                                    <AccordionDetails>
                                        <Typography className="" sx={{
                                            color: isActive ? '#fff' : '#000',

                                        }}>
                                            {item.description}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            );
                        })}
                    </div>

                </div>
            </section >

        </>
    );
};

export default FAQSection;
