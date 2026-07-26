export interface Area {
  slug: string;
  name: string;
  fullName: string;
  county: string;
  zipCodes: string[];
  nearbyAreas: string[];
  localContext: string;
  faqs: { question: string; answer: string }[];
}

export const areas: Area[] = [
  {
    slug: 'katy-tx',
    name: 'Katy',
    fullName: 'Katy, TX',
    county: 'Harris, Fort Bend, and Waller',
    zipCodes: ['77449', '77450', '77493', '77494'],
    nearbyAreas: ['cypress-tx', 'sugar-land-tx', 'tomball-tx'],
    localContext:
      'Katy sits at the western edge of Harris County, with portions extending into Fort Bend and Waller Counties. The area has experienced rapid growth, with many newer subdivisions built on former agricultural land. Clay-heavy Gulf Coast Prairie soils make proper septic system design critical. Homes outside the city sewer boundaries — particularly along the Katy Prairie corridor — rely on private septic systems that require regular maintenance.',
    faqs: [
      {
        question: 'Do you provide septic service in all parts of Katy?',
        answer:
          'Yes. We cover all of Katy including Harris County, Fort Bend County, and Waller County addresses in the 77449, 77450, 77493, and 77494 ZIP codes.',
      },
      {
        question: 'How fast can you get to Katy for septic service?',
        answer:
          'Routine pumping is typically same-day if you call before noon. Emergency dispatch is 90 to 120 minutes from your call.',
      },
      {
        question: 'Does Katy require a separate septic permit from Harris County?',
        answer:
          'Permitting depends on which county your property falls in. Harris County Public Health handles permits for Harris County addresses. Fort Bend County and Waller County have their own environmental health departments. We handle the paperwork for whichever jurisdiction applies to your address.',
      },
    ],
  },
  {
    slug: 'sugar-land-tx',
    name: 'Sugar Land',
    fullName: 'Sugar Land, TX',
    county: 'Fort Bend',
    zipCodes: ['77478', '77479', '77498'],
    nearbyAreas: ['katy-tx', 'pearland-tx', 'cypress-tx'],
    localContext:
      'Sugar Land is primarily in Fort Bend County, one of the fastest-growing counties in Texas. While most of the city is on municipal sewer, properties in the western and southern edges — particularly along the Brazos River floodplain — still use private septic systems. Fort Bend County Environmental Health handles all septic permitting and inspections.',
    faqs: [
      {
        question: 'Do you provide septic service in Sugar Land?',
        answer:
          'Yes. We cover all of Sugar Land including Fort Bend County addresses in the 77478, 77479, and 77498 ZIP codes.',
      },
      {
        question: 'What septic issues are common in Sugar Land?',
        answer:
          'Sugar Land properties near the Brazos River floodplain can experience high water tables that affect drain field performance. Fort Bend County clay soils also put extra stress on septic systems, making regular pumping every 3 to 5 years essential.',
      },
      {
        question: 'How fast can you get to Sugar Land?',
        answer:
          'Routine service is typically same-day if you call before noon. Emergency dispatch arrives within 90 to 120 minutes.',
      },
    ],
  },
  {
    slug: 'pearland-tx',
    name: 'Pearland',
    fullName: 'Pearland, TX',
    county: 'Brazoria, Fort Bend, and Harris',
    zipCodes: ['77581', '77584', '77588'],
    nearbyAreas: ['sugar-land-tx', 'humble-tx', 'baytown-tx'],
    localContext:
      'Pearland straddles Brazoria, Fort Bend, and Harris Counties. The city has grown rapidly, pushing development into areas that were recently rural. Many properties on the southern and western edges still rely on private septic systems. Brazoria County Environmental Health handles permitting for most Pearland addresses.',
    faqs: [
      {
        question: 'Do you provide septic service in Pearland?',
        answer:
          'Yes. We cover all of Pearland including Brazoria, Fort Bend, and Harris County addresses in the 77581, 77584, and 77588 ZIP codes.',
      },
      {
        question: 'Which county handles septic permits for my Pearland address?',
        answer:
          'It depends on your exact location. We can determine the correct jurisdiction for your address and handle all permit paperwork.',
      },
      {
        question: 'How fast can you get to Pearland?',
        answer:
          'Routine service is typically same-day. Emergency dispatch arrives within 90 to 120 minutes.',
      },
    ],
  },
  {
    slug: 'the-woodlands-tx',
    name: 'The Woodlands',
    fullName: 'The Woodlands, TX',
    county: 'Montgomery',
    zipCodes: ['77380', '77381', '77382', '77384', '77385', '77389'],
    nearbyAreas: ['spring-tx', 'conroe-tx', 'tomball-tx'],
    localContext:
      'The Woodlands is a master-planned community in Montgomery County with a mix of sewered and septic properties. Homes in the older villages and on larger lots outside the town center often use private septic systems. Montgomery County Environmental Health handles permitting. The area sits on sandy loam soils that generally drain better than Houston-area clay, but tree root intrusion is a common issue due to the dense pine and hardwood canopy.',
    faqs: [
      {
        question: 'Do you provide septic service in The Woodlands?',
        answer:
          'Yes. We cover all of The Woodlands including Montgomery County addresses in the 77380, 77381, 77382, 77384, 77385, and 77389 ZIP codes.',
      },
      {
        question: 'What septic issues are common in The Woodlands?',
        answer:
          'Tree root intrusion is the most common issue due to the dense pine and hardwood canopy. Older villages with 20-30 year old systems are also hitting the age where baffle wear and drain field saturation become problems.',
      },
      {
        question: 'How fast can you get to The Woodlands?',
        answer:
          'Routine service is typically same-day. Emergency dispatch arrives within 90 to 120 minutes.',
      },
    ],
  },
  {
    slug: 'cypress-tx',
    name: 'Cypress',
    fullName: 'Cypress, TX',
    county: 'Harris',
    zipCodes: ['77429', '77433'],
    nearbyAreas: ['katy-tx', 'tomball-tx', 'spring-tx'],
    localContext:
      'Cypress is an unincorporated community in Harris County that has seen explosive growth. Many properties, especially along the Cypress Creek and Little Cypress Creek watersheds, use private septic systems. Harris County Public Health handles permitting. Gulf Coast Prairie clay soils dominate, requiring careful drain field design.',
    faqs: [
      {
        question: 'Do you provide septic service in Cypress?',
        answer:
          'Yes. We cover all of Cypress including Harris County addresses in the 77429 and 77433 ZIP codes.',
      },
      {
        question: 'What septic issues are common in Cypress?',
        answer:
          'Many Cypress homes were built during the 2000s-2010s building boom and are now hitting their first major service cycle. Original drain fields on clay-heavy soil are beginning to saturate. Regular pumping and inspection prevent costly failures.',
      },
      {
        question: 'How fast can you get to Cypress?',
        answer:
          'Routine service is typically same-day. Emergency dispatch arrives within 90 to 120 minutes.',
      },
    ],
  },
  {
    slug: 'spring-tx',
    name: 'Spring',
    fullName: 'Spring, TX',
    county: 'Harris',
    zipCodes: ['77373', '77379', '77388', '77389'],
    nearbyAreas: ['the-woodlands-tx', 'cypress-tx', 'humble-tx'],
    localContext:
      'Spring is a large unincorporated area in northern Harris County. The older neighborhoods near Spring Creek and along the I-45 corridor have a high concentration of septic systems. Harris County Public Health handles permitting. The mix of sandy loam near Spring Creek and clay-heavy upland soils means septic system performance varies significantly by location.',
    faqs: [
      {
        question: 'Do you provide septic service in Spring?',
        answer:
          'Yes. We cover all of Spring including Harris County addresses in the 77373, 77379, 77388, and 77389 ZIP codes.',
      },
      {
        question: 'What septic issues are common in Spring?',
        answer:
          'Older neighborhoods near Spring Creek have systems that are 20-40 years old. Baffle deterioration, drain field saturation, and root intrusion from the dense tree cover are the most common issues we see.',
      },
      {
        question: 'How fast can you get to Spring?',
        answer:
          'Routine service is typically same-day. Emergency dispatch arrives within 90 to 120 minutes.',
      },
    ],
  },
  {
    slug: 'conroe-tx',
    name: 'Conroe',
    fullName: 'Conroe, TX',
    county: 'Montgomery',
    zipCodes: ['77301', '77302', '77303', '77304', '77306', '77384', '77385'],
    nearbyAreas: ['the-woodlands-tx', 'spring-tx', 'tomball-tx'],
    localContext:
      'Conroe is the county seat of Montgomery County and has grown rapidly in recent years. Many properties, especially on the western side near Lake Conroe, use private septic systems. Montgomery County Environmental Health handles permitting. The area has a mix of sandy loam and clay soils, with some lakefront parcels requiring engineered drain fields due to high water tables.',
    faqs: [
      {
        question: 'Do you provide septic service in Conroe?',
        answer:
          'Yes. We cover all of Conroe including Montgomery County addresses in the 77301, 77302, 77303, 77304, 77306, 77384, and 77385 ZIP codes.',
      },
      {
        question: 'What septic issues are common near Lake Conroe?',
        answer:
          'Lakefront and near-lake properties often have high water tables that challenge conventional drain fields. Engineered systems or aerobic treatment units may be required. Montgomery County has specific setback requirements from the lake.',
      },
      {
        question: 'How fast can you get to Conroe?',
        answer:
          'Routine service is typically same-day for Conroe addresses. Emergency dispatch arrives within 90 to 120 minutes.',
      },
    ],
  },
  {
    slug: 'baytown-tx',
    name: 'Baytown',
    fullName: 'Baytown, TX',
    county: 'Harris and Chambers',
    zipCodes: ['77520', '77521', '77523'],
    nearbyAreas: ['humble-tx', 'pearland-tx', 'spring-tx'],
    localContext:
      'Baytown sits along the Houston Ship Channel in Harris and Chambers Counties. The flat, low-lying terrain and proximity to Galveston Bay mean high water tables in many areas. Septic systems here require careful design to handle the water table conditions. Harris County Public Health and Chambers County Environmental Health handle permitting depending on your exact address.',
    faqs: [
      {
        question: 'Do you provide septic service in Baytown?',
        answer:
          'Yes. We cover all of Baytown including Harris County and Chambers County addresses in the 77520, 77521, and 77523 ZIP codes.',
      },
      {
        question: 'What septic issues are common in Baytown?',
        answer:
          'High water tables are the biggest challenge. Systems installed too close to the water table can fail prematurely. Hurricane flooding can also damage systems. We inspect for water table issues on every Baytown service call.',
      },
      {
        question: 'How fast can you get to Baytown?',
        answer:
          'Routine service is typically same-day. Emergency dispatch arrives within 90 to 120 minutes.',
      },
    ],
  },
  {
    slug: 'humble-tx',
    name: 'Humble',
    fullName: 'Humble, TX',
    county: 'Harris',
    zipCodes: ['77338', '77346', '77396'],
    nearbyAreas: ['spring-tx', 'baytown-tx', 'the-woodlands-tx'],
    localContext:
      'Humble is in northeastern Harris County, near the San Jacinto River and Lake Houston watershed. The area has a mix of older rural properties on septic and newer subdivisions on municipal sewer. Properties near the river and lake often face high water table challenges. Harris County Public Health handles permitting.',
    faqs: [
      {
        question: 'Do you provide septic service in Humble?',
        answer:
          'Yes. We cover all of Humble including Harris County addresses in the 77338, 77346, and 77396 ZIP codes.',
      },
      {
        question: 'What septic issues are common in Humble?',
        answer:
          'Properties near the San Jacinto River and Lake Houston often have high water tables. Hurricane and flood damage is also a concern. Many older systems in the area are reaching the age where major maintenance or replacement is needed.',
      },
      {
        question: 'How fast can you get to Humble?',
        answer:
          'Routine service is typically same-day. Emergency dispatch arrives within 90 to 120 minutes.',
      },
    ],
  },
  {
    slug: 'tomball-tx',
    name: 'Tomball',
    fullName: 'Tomball, TX',
    county: 'Harris',
    zipCodes: ['77375', '77377'],
    nearbyAreas: ['cypress-tx', 'spring-tx', 'the-woodlands-tx'],
    localContext:
      'Tomball is in northwestern Harris County, with a historic downtown and surrounding rural acreages. Many properties outside the city center use private septic systems. The area sits on Gulf Coast Prairie clay soils with some sandy loam near Spring Creek tributaries. Harris County Public Health handles permitting.',
    faqs: [
      {
        question: 'Do you provide septic service in Tomball?',
        answer:
          'Yes. We cover all of Tomball including Harris County addresses in the 77375 and 77377 ZIP codes.',
      },
      {
        question: 'What septic issues are common in Tomball?',
        answer:
          'Many Tomball acreages have older septic systems that were installed when the area was more rural. As these systems age, baffle wear, drain field saturation, and root intrusion become common. Clay-heavy soils also put extra stress on systems.',
      },
      {
        question: 'How fast can you get to Tomball?',
        answer:
          'Routine service is typically same-day. Emergency dispatch arrives within 90 to 120 minutes.',
      },
    ],
  },
];
