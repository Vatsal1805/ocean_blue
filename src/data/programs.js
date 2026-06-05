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
    title: 'JEE, NEET & Foundation',
    badge: 'Entrance & Foundation',
    icon: 'Target',
    summary: 'Result-driven entrance prep along with Class 8–10 Science & Maths Foundation classes.',
    description: 'Specialized scientific coaching for JEE and NEET competitive exams, alongside our rigorous Foundation program for Class 8–10 to build early analytical and problem-solving skills.',
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
      },
      {
        id: 'foundation-science-maths',
        title: 'Science & Maths Foundation',
        subtitle: 'Class 8-10 Prep Track',
        badge: 'Foundation (Class 8–10)',
        description: 'Building rock-solid conceptual clarity and logical thinking early on to prepare students for school excellence and future competitive exam success.',
        subjects: [
          'Conceptual Mathematics & Numerical logic',
          'Applied Physics & Chemical Reactions',
          'Basic Life Sciences & Logic Aptitude'
        ]
      }
    ],
    subjects: ['JEE Physics & Calculus-based Mechanics', 'JEE Chemistry (Physical & Inorganic)', 'IIT-Level Advanced Mathematics', 'NEET Biology (Zoology & Botany spec)', 'Class 8-10 Science & Maths Foundation'],
    timings: ['Morning: 5:30 AM – 8:00 AM', 'Evening: 7:00 PM – 9:30 PM'],
    batchLimit: 10,
    letter: 'C'
  },
  {
    id: 'language',
    title: 'Spoken English & Communication',
    badge: 'Spoken English',
    icon: 'MessageSquare',
    summary: 'Comprehensive spoken English, public speaking, personality development, and conversational fluency coaching.',
    description: 'A premium communicative coaching hub designed to build public speaking confidence, everyday conversational fluency, professional vocabulary, and personality enhancement.',
    subjects: ['Conversational Fluency & Accent training', 'Public Speaking & Presentation skills', 'Grammar & Sentence Construction', 'Professional Vocabulary & Interview Prep'],
    timings: ['Morning: 8:00 AM – 9:30 AM', 'Evening: 5:00 PM – 6:30 PM'],
    batchLimit: 12,
    letter: 'S'
  },
  {
    id: 'ielts',
    title: 'Global Programs',
    badge: 'IELTS · PTE · VISA',
    icon: 'Globe',
    summary: 'IELTS and PTE preparation with complete Visa guidance. IDP and Pearson authorised partner — helping students reach global universities since 2009.',
    description: 'Specialized international language test training (IELTS Academic/General, PTE) coupled with end-to-end student visa guidance and admissions counseling for global universities.',
    subjects: ['IELTS Academic & General Training', 'PTE Academic preparation', 'Visa counseling & file representation', 'University admissions profiling'],
    timings: ['Morning: 9:00 AM – 11:30 AM', 'Evening: 6:00 PM – 8:30 PM'],
    batchLimit: 10,
    letter: 'G'
  }
];

