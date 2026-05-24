export const PROGRAMS = [
  {
    id: 'school',
    title: 'Primary & Secondary',
    badge: 'Class 4–10',
    icon: 'GraduationCap',
    summary: 'Strong fundamentals in Science, Maths, and English for CBSE, ICSE, and GSEB board standards.',
    description: 'A comprehensive, concept-first tuition program designed to ignite academic curiosity and build rock-solid foundations. We bridge the gap between textbook formulas and real-world understanding through interactive cohort learning and daily doubt clinics.',
    subjects: ['Mathematics & Geometry', 'Science & Chemistry', 'Physics Fundamentals', 'English Grammar & Writing'],
    timings: ['Morning: 7:00 AM – 9:00 AM', 'Evening: 5:00 PM – 7:00 PM'],
    batchLimit: 12,
    letter: 'S'
  },
  {
    id: 'secondary',
    title: 'Senior Secondary',
    badge: 'Class 11–12',
    icon: 'TrendingUp',
    summary: 'Advanced Science and Commerce stream coaching with high-yield board exam guidance.',
    description: 'A rigorous academic track tailored to board exam syllabi. We deliver comprehensive NCERT syllabus coverage, detailed concept sheets, and systematic parents-teacher tracking to ensure top-tier board scores in both Science and Commerce streams.',
    subjects: ['Physics & Mechanics', 'Organic & Inorganic Chemistry', 'Higher Mathematics', 'Human & Plant Biology', 'Accountancy & Auditing', 'Macro & Micro Economics'],
    timings: ['Morning: 6:00 AM – 8:00 AM', 'Evening: 6:00 PM – 8:00 PM'],
    batchLimit: 15,
    letter: 'H'
  },
  {
    id: 'jee-neet',
    title: 'JEE Mains & NEET Prep',
    badge: 'Competitive Prep',
    icon: 'Target',
    summary: 'Result-driven objective coaching led by specialized science & medical entrance mentors.',
    description: 'A high-yield, elite test-prep system designed to crack IIT JEE and NEET UG. Our coaches provide daily practice problems (DPPs), weekly mock OMR tests, strict time-management coaching, and targeted doubt-solving panels to secure top national ranks.',
    streams: [
      {
        id: 'jee-mains',
        title: 'JEE Mains & Advanced',
        subtitle: 'Engineering Entrance Track',
        badge: 'Engineering (PCM)',
        description: 'Comprehensive, high-rigor preparation designed for future engineers aiming for top-tier IITs, NITs, and IIITs. Focusing on mathematical logic and numerical accuracy.',
        subjects: [
          'Calculus, Algebra & Coordinate Geometry',
          'Classical Mechanics & Electrodynamics',
          'Physical, Organic & Inorganic Chemistry'
        ]
      },
      {
        id: 'neet-ug',
        title: 'NEET UG Prep',
        subtitle: 'Medical Entrance Track',
        badge: 'Medical (PCB)',
        description: 'Targeted preparation tailored for future medical practitioners aiming for premium medical schools. Emphasizing conceptual clarity and rapid objective response.',
        subjects: [
          'Comprehensive Zoology & Botany',
          'Mechanics, Waves & Modern Physics',
          'Organic Reactions & Numerical Chemistry'
        ]
      }
    ],
    subjects: ['JEE Physics & Calculus-based Mechanics', 'JEE Chemistry (Physical & Inorganic)', 'IIT-Level Advanced Mathematics', 'NEET Biology (Zoology & Botany spec)'],
    timings: ['Morning: 5:30 AM – 8:00 AM', 'Evening: 7:00 PM – 9:30 PM'],
    batchLimit: 10,
    letter: 'C'
  },
  {
    id: 'language',
    title: 'Fluent English & IELTS',
    badge: 'IELTS / PTE / Spoken',
    icon: 'Globe',
    summary: 'International study abroad exam coaching and premium spoken English fluency training.',
    description: 'A premium communicative coaching hub designed to build stage presence, public speaking confidence, and international board band scores. From IELTS/PTE exam module preparation to everyday conversational articulacy and accent coaching.',
    subjects: ['IELTS Speaking & Listening Practice', 'IELTS Academic Writing & Reading', 'PTE General & Study Abroad Prep', 'Spoken English & Professional Vocabulary'],
    timings: ['Morning: 8:00 AM – 9:30 AM', 'Evening: 5:00 PM – 6:30 PM'],
    batchLimit: 12,
    letter: 'E'
  }
];
