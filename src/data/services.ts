export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  title: string;
  description: string;
  h1: string;
  metaDescription: string;
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: 'septic-pumping',
    name: 'Septic Tank Pumping',
    shortName: 'Pumping',
    icon: '🚛',
    title: 'Septic Tank Pumping Houston, TX | Same-Day Service',
    description:
      'Professional septic tank pumping in Houston, TX. Same-day service, flat-rate pricing, and thorough waste removal for residential and commercial systems.',
    h1: 'Septic Tank Pumping in Houston, TX',
    metaDescription:
      'Professional septic tank pumping in Houston, TX. Same-day service, flat-rate pricing. Residential and commercial. Licensed and insured. Free estimates.',
    faqs: [
      {
        question: 'How often should a septic tank be pumped in Houston?',
        answer:
          'Most Houston area homes should pump every 3 to 5 years. The exact interval depends on tank size and household size. If you have more than 4 people in the home or use a garbage disposal regularly, lean toward every 3 years.',
      },
      {
        question: 'How much does septic tank pumping cost in Houston?',
        answer:
          'Standard residential septic pumping in Houston runs $350 to $600 depending on tank size and access. We confirm the final price before sending a truck. No surprise charges.',
      },
      {
        question: 'How long does septic tank pumping take?',
        answer:
          'A standard residential pump takes 45 to 90 minutes from arrival to cleanup, depending on tank size and access. If we need to dig up the lid, add 30 minutes.',
      },
      {
        question: 'What is the difference between septic pumping and septic cleaning?',
        answer:
          'Pumping removes the liquid and sludge from the tank. Cleaning includes pumping plus a high-pressure wash of the tank walls, baffle inspection, and effluent filter cleaning. We recommend full cleaning every other pump.',
      },
      {
        question: 'Do you offer same-day septic pumping in Houston?',
        answer:
          'Yes. Routine pumping requests called in before noon are typically scheduled the same day across our Houston service area.',
      },
    ],
  },
  {
    slug: 'septic-repair',
    name: 'Septic Tank Repair',
    shortName: 'Repair',
    icon: '🔧',
    title: 'Septic Tank Repair in Houston, TX | Fast Local Repair',
    description:
      'Expert septic tank repair in Houston, TX. Baffle repair, drain field rehabilitation, riser installation, and more. We inspect before we quote.',
    h1: 'Septic Tank Repair in Houston, TX',
    metaDescription:
      'Expert septic tank repair in Houston, TX. Drain field repair, baffle replacement, riser installation. We inspect before we quote. Licensed and insured.',
    faqs: [
      {
        question: 'How much does septic tank repair cost in Houston?',
        answer:
          'Most septic repairs in Houston run $500 to $2,500 depending on the issue. Baffle repair is $250 to $600. Drain field rehabilitation is $800 to $2,500. Full replacement is only needed when the tank is structurally failed.',
      },
      {
        question: 'How do I know if I need septic repair or replacement?',
        answer:
          'Most septic problems are repairable. We inspect, document, and explain. Only structural tank failure, drain field failure across more than 50% of its length, or code non-compliance typically requires replacement.',
      },
      {
        question: 'Do you handle drain field repair in Houston?',
        answer:
          'Yes. We do drain field jetting, aeration, biological treatment, and partial replacement. Most drain fields that homeowners are told to replace can be rehabilitated for a fraction of the cost if caught in time.',
      },
      {
        question: 'What are signs my septic tank needs repair?',
        answer:
          'Slow drains throughout the house, sewage smell indoors or in the yard, gurgling pipes, standing water or bright green grass over the drain field, or sewage backing up into tubs and floor drains.',
      },
      {
        question: 'How fast can you get out for a septic repair in Houston?',
        answer:
          'For non-emergency repair inspections, typically 2 to 4 business days. For active leaks, backups, or system failure, we dispatch same-day.',
      },
    ],
  },
  {
    slug: 'septic-installation',
    name: 'Septic Tank Installation',
    shortName: 'Installation',
    icon: '🏗️',
    title: 'Septic Tank Installation Houston, TX | New Systems',
    description:
      'Professional septic tank installation in Houston, TX. New system design, permitting, and installation for residential and commercial properties.',
    h1: 'Septic Tank Installation in Houston, TX',
    metaDescription:
      'Professional septic tank installation in Houston, TX. New system design, permits, and installation. TCEQ compliant. Licensed and insured. Free estimates.',
    faqs: [
      {
        question: 'How much does septic tank installation cost in Houston?',
        answer:
          'Septic tank installation in Houston typically runs $4,500 to $15,000 depending on system type, soil conditions, and lot size. Conventional gravity systems are the most affordable. Aerobic systems cost more but work on smaller lots.',
      },
      {
        question: 'How long does septic installation take?',
        answer:
          'Most residential septic installations take 2 to 5 days from excavation to final inspection. Permit approval typically takes 1 to 2 weeks before work begins.',
      },
      {
        question: 'Do I need a permit for septic installation in Houston?',
        answer:
          'Yes. Harris County, Fort Bend County, and Montgomery County all require permits for new septic system installation. We handle all permitting as part of our installation service.',
      },
      {
        question: 'What type of septic system is best for Houston soil?',
        answer:
          'Houston-area clay-heavy soils often require engineered drain fields or aerobic treatment units. The best system depends on your specific lot, soil percolation test results, and county regulations.',
      },
    ],
  },
  {
    slug: 'septic-inspection',
    name: 'Septic Tank Inspection',
    shortName: 'Inspection',
    icon: '📋',
    title: 'Septic Tank Inspection Houston, TX | Real Estate & Health',
    description:
      'Professional septic tank inspection in Houston, TX. Real estate inspections, pre-purchase evaluations, and routine system health checks.',
    h1: 'Septic Tank Inspection in Houston, TX',
    metaDescription:
      'Professional septic tank inspection in Houston, TX. Real estate inspections, pre-purchase evaluations, routine health checks. Licensed inspectors. Fast scheduling.',
    faqs: [
      {
        question: 'How much does a septic inspection cost in Houston?',
        answer:
          'Septic inspections in Houston run $295 to $425 depending on tank size and access. This includes opening the tank, measuring sludge levels, inspecting baffles, and a written report.',
      },
      {
        question: 'Do I need a septic inspection to sell my home in Texas?',
        answer:
          'While Texas does not have a statewide Time-of-Transfer law like some states, many lenders and buyers require a septic inspection before closing. Harris County and surrounding counties may have local requirements.',
      },
      {
        question: 'How long does a septic inspection take?',
        answer:
          'A standard residential septic inspection takes about 2 hours on-site. Reports are typically delivered within 48 hours.',
      },
      {
        question: 'What happens if my septic system fails inspection?',
        answer:
          'We document exactly what failed and what is required to bring the system into compliance. Most failures can be addressed before closing, often with the seller covering repair as part of the sale negotiation.',
      },
    ],
  },
  {
    slug: 'septic-maintenance',
    name: 'Septic Tank Maintenance',
    shortName: 'Maintenance',
    icon: '🛡️',
    title: 'Septic Tank Maintenance Houston, TX | Preventive Care',
    description:
      'Preventive septic tank maintenance in Houston, TX. Scheduled service plans, system health checks, and effluent filter cleaning to extend system life.',
    h1: 'Septic Tank Maintenance in Houston, TX',
    metaDescription:
      'Preventive septic tank maintenance in Houston, TX. Scheduled service plans, system health checks, effluent filter cleaning. Extend your system life. Free estimates.',
    faqs: [
      {
        question: 'How often should septic maintenance be done in Houston?',
        answer:
          'We recommend a professional inspection every 1 to 2 years and pumping every 3 to 5 years. Houston-area clay soils put extra stress on systems, so regular checks prevent costly repairs.',
      },
      {
        question: 'What does septic maintenance include?',
        answer:
          'Our maintenance service includes sludge level measurement, baffle inspection, effluent filter cleaning, drain field visual inspection, and a written report with recommendations.',
      },
      {
        question: 'Can I do septic maintenance myself?',
        answer:
          'Homeowners can help by conserving water, avoiding harsh chemicals, and not flushing non-biodegradable items. But professional pumping and inspection require specialized equipment and licensing.',
      },
    ],
  },
  {
    slug: 'emergency-septic',
    name: 'Emergency Septic Service',
    shortName: 'Emergency',
    icon: '🚨',
    title: 'Emergency Septic Service Houston, TX | 24/7 Response',
    description:
      '24/7 emergency septic service in Houston, TX. Fast response for sewage backups, overflows, and system failures. Dispatched within 2 hours.',
    h1: 'Emergency Septic Service in Houston, TX',
    metaDescription:
      '24/7 emergency septic service in Houston, TX. Sewage backup, overflow, system failure. Dispatched within 2 hours. Licensed and insured. Call now.',
    faqs: [
      {
        question: 'How fast can you respond to an emergency in Houston?',
        answer:
          'Emergency dispatch in the Houston metro typically arrives within 90 to 120 minutes of your call. Closer addresses are usually faster.',
      },
      {
        question: 'What counts as a septic emergency?',
        answer:
          'Sewage backing up into the home, sewage pooling in the yard, total system backup with no working drains, or a failed effluent pump on an aerobic system. If you are not sure, call and we will help you determine if it is an emergency.',
      },
      {
        question: 'How much does emergency septic service cost in Houston?',
        answer:
          'Emergency rates carry a flat fee on top of standard service pricing. We quote the number on the phone before dispatching. No mystery charges.',
      },
      {
        question: 'What should I do while waiting for emergency septic service?',
        answer:
          'Stop using water immediately. No flushing, laundry, dishwasher, or showers. Move kids and pets away from any pooling sewage. Do not try to open the septic tank yourself — septic gases can be deadly.',
      },
    ],
  },
];
