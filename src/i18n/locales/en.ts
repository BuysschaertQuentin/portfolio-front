import type { Translations } from "../types";

const en: Translations = {
  nav: {
    experience: "Experience",
    formation: "Education",
    past: "Background",
    projects: "Projects",
    stack: "Stack",
    contact: "Contact",
    skipToContent: "Skip to main content",
    about: "Profile",
    competences: "Skills",
    realisations: "Achievements",
    parcours: "Career",
    sendEmail: "Send an email",
  },
  hero: {
    subtitle: "Portfolio 2026",
    title: "Developer",
    titleHighlight: "Fullstack",
    description: "From human support to code, I build web solutions with",
    quality1: "rigor",
    quality2: "empathy",
    quality3: "passion",
    and: "and",
    downloadCv: "Download CV",
    discoverPath: "Discover my atypical journey",
    heroAlt: "Fullstack developer welcomed in a company, pixel art style",
    coreStackLabel: "Core stack",
    secondaryStackLabel: "Transversal stack",
  },
  experience: {
    sectionLabel: "Current experience",
    bac3Label: "Bac+3 Experience",
    bac5Label: "Bac+5 Experience",
    title: "Fullstack Developer —",
    company: "Orange Business",
    status: "Work-study program — Nov. 2023 to Mar. 2027",
    description:
      "On a work-study program at Orange Business, I participate in the development of internal applications using modern technologies. I work within an agile team, contributing to the design and implementation of front-end and back-end features.",
    imgAlt:
      "Developer on a work-study program at Orange Business working on Angular and NestJS, pixel art style",
    cta: "View my achievements",
  },
  formation: {
    sectionLabel: "Education",
    title: "Bootcamp",
    school: "O'clock",
    duration: "Intensive training — Jan. to Jun. 2023 (Transitions Pro)",
    description:
      "A total immersion in web development. 6 months of intensive training to master front-end and back-end fundamentals. A demanding pace that forged my",
    quality1: "rigor",
    and: "and confirmed my",
    quality2: "passion",
    forCode: "for code.",
    imgAlt: "Student at O'clock bootcamp learning HTML, CSS, and JavaScript, pixel art style",
    cta: "Discover my detailed career path",
  },
  past: {
    sectionLabel: "Previous background",
    title: "Care assistant —",
    titleHighlight: "9 years of humanity",
    description:
      "From October 2014 to September 2023, I supported vulnerable people on a daily basis. This deeply human experience gave me cross-cutting skills that are now my strength as a developer.",
    imgAlt: "Care assistant helping an elderly person, pixel art style",
    empathy: "Empathy",
    empathyDesc: "Active listening and daily kindness",
    resilience: "Resilience",
    resilienceDesc: "Stress management and constant adaptation",
    priorities: "Priority management",
    prioritiesDesc: "Rigorous organization and autonomy",
    teamwork: "Teamwork",
    teamworkDesc: "Collaboration with families and professionals",
    cta: "Explore my human skills",
  },
  projects: {
    sectionLabel: "Achievements",
    title: "Projects",
    professional: "Professional projects",
    personal: "Personal projects",
    sourceCodeAria: "Source code of",
    viewProjectAria: "View the project",
    cta: "View all detailed projects",
    detailsCta: "Project details",
    proProjects: {
      orangeTitle: "Orange internal application",
      orangeDesc:
        "Development of an internal management application with Angular and NestJS, deployed on CloudFoundry.",
    },
    persoProjects: {
      portfolioTitle: "Personal portfolio",
      portfolioDesc:
        "This portfolio in React with a retro-futuristic design, dark mode, and pixel art.",
      botTitle: "Discord Bot",
      botDesc: "Community bot with custom commands and external API integrations.",
    },
  },
  stack: {
    sectionLabel: "Skills",
    title: "Tech Stack",
    core: "Core stack",
    transversal: "Transversal skills",
    cta: "Explore my technical & human skills",
  },
  contact: {
    sectionLabel: "Let's chat",
    title: "Contact",
    description:
      "You have a project, an opportunity, or simply want to chat? Feel free to contact me.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Your message...",
    send: "Send",
  },
  footer: {
    copyright: import.meta.env.VITE_FULL_NAME + " — Fullstack Developer",
  },
  notFound: {
    title: "404",
    message: "Oops! Page not found",
    backHome: "Return to Home",
  },
  a11y: {
    newTab: "(opens in a new tab)",
  },
  common: {
    loading: "Loading...",
  },
  about: {
    title: "Profile",
    intro:
      "[TO WRITE] — Short introduction integrating your key values (rigor, empathy, commitment, curiosity).",
    proProjectTitle: "Professional project",
    proProjectDesc: "[TO WRITE]",
    persoProjectTitle: "Personal project",
    persoProjectDesc: "[TO WRITE]",
    softSkillsTitle: "Human qualities",
    softSkillsSubtitle: "Overview of my main qualities — details on the Skills page.",
    seeMore: "Learn more →",
    interestsTitle: "Interests",
    interests: {
      interest1: "[Interest 1]",
      interest1Desc: "[TO WRITE]",
      interest2: "[Interest 2]",
      interest2Desc: "[TO WRITE]",
      interest3: "[Interest 3]",
      interest3Desc: "[TO WRITE]",
      interest4: "[Interest 4]",
      interest4Desc: "[TO WRITE]",
    },
  },
  competences: {
    title: "Skills",
    subtitle: "10 key skills — human and technical",
    humanTitle: "Human skills",
    technicalTitle: "Technical skills",
    categories: {
      "front-end": "Front-end",
      "back-end": "Back-end",
      devops: "DevOps",
      cloud: "Cloud",
      transversale: "Transversal",
    },
    legend: {
      filterTitle: "Filter by tag:",
      specialty: "Specialty",
      wish: "What I would like to do",
    },
    backToList: "Back to skills",
    detail: {
      definitionTitle: "Definition",
      proofsTitle: "In practice",
      selfCritiqueTitle: "Self-assessment",
      hindsightTitle: "Hindsight",
      evolutionTitle: "Evolution",
      linkedRealisationsTitle: "Linked achievements",
      noLinkedRealisations: "No linked achievements for now.",
    },
    skills: {
      autonome: {
        title: "Autonomous",
        shortDesc: "Ability to work independently and proactively",
        definition:
          "For me, **professional autonomy** is defined as my ability to accomplish my missions independently, proactively, and responsibly, while respecting the methodological framework and objectives set by my organization. It implies not only my technical mastery of tools and processes, but also my aptitude for **informed decision-making** in the face of unexpected or complex situations.\n\nI consider that being autonomous does not mean working in isolation; rather, it means knowing how to **self-manage** while identifying the appropriate time to seek assistance from management or peers.\n\nIn my previous healthcare and social sector career, this competence was crucial for me as it guaranteed the safety of vulnerable individuals in private environments without direct supervision. In my current role as a software engineer, it translates into taking full ownership of a feature's life cycle, from requirements analysis to deployment in production.\n\nThis autonomy allows me to alleviate the management overhead for my project managers and technical leads while streamlining the pace of our development cycles. It requires significant **organizational rigor**, a strong capacity for self-assessment, and a keen sense of professional responsibility on my part.",
        proofs:
          "I first demonstrated this skill during my nine-year career in home care assistance, where interventions at users' homes were carried out in **total self-management**. In this capacity, supporting an individual with ALS (Charcot's disease) under artificial ventilation via tracheotomy constituted a demanding practical application.\n\nHaving received specific training in endotracheal aspirations, I **autonomously performed** complete bed baths, safe physical mobilization, and implemented bronchial aspiration protocols in vital respiratory emergencies. My autonomy also extended to configuring and installing communication assistance tools, notably an eye-tracking system (Tobii camera) that I adjusted to allow the person to access their computer independently.\n\nMore recently, as an application developer, I put this autonomy into practice during the production deployment of analytics features on the MyDataVision portal. As the client took time to validate tests in the pre-production environment, the request for production deployment was made very late, on the morning of the target day itself.\n\nDue to the unexpected absence of my technical lead, my project manager asked if I could conduct this intervention alone. Since I had worked on the project for two years and participated in four or five guided deployments, I accepted the **responsibility to lead this operation independently**.\n\nI rigorously followed the established procedure: executing integration tests locally, verifying environment variables on the cloud dashboard, building the production release, and triggering the relational database migration. The portal was successfully updated with zero regressions and no service disruption for end users.",
        selfCritique:
          "In the care setting, autonomous intervention with a tracheotomized patient represented the only viable operational response to guarantee their safety at home, requiring strict compliance with learned medical protocols.\n\nFor the software production deployment, accepting this task without my technical lead was a **calculated and secure decision**. Before initiating any action on the CloudFoundry infrastructure, I anticipated all potential failure scenarios (loss of database connection, containerization errors, or cloud server crashes).\n\nTo achieve this, I performed a dump complete and preventative of the MySQL database and kept the exact Git tag number of the previous stable version of the application. This strategy would have allowed me to perform a rollback complete and immediate of both the API and the Front-end in under two minutes in case of any post-deployment anomaly.",
        hindsight:
          "In hindsight, my care assistant experience instilled in me a **high tolerance for stress** and priority management in emergencies, behavioral qualities that are extremely valuable in software engineering.\n\nCompleting this critical deployment autonomously reinforced my technical credibility within the team and proved that I could handle critical tasks under pressure with calm and rigor. For a recruiter, this demonstrates my ability to learn complex release processes and make **responsible technical decisions** methodically without requiring constant supervision.",
        evolution:
          "To evolve this skill, my primary goal is to maintain this level of operational excellence and rigor across all my future projects.\n\nAdditionally, I consolidate my **technical autonomy** in the long term through active daily technology watch. I pay close attention to ecosystem trends, particularly the evolution of artificial intelligence models or new software design practices.",
      },
      empathy: {
        title: "Empathy",
        shortDesc: "Active listening and understanding needs",
        definition:
          "For me, **professional empathy** is defined as the ability to perceive, understand, and respect the emotions, needs, and constraints of others, while maintaining the necessary distance to perform one's duties rigorously. It is not limited to a simple kind attitude but constitutes a behavioral analysis tool to **decode signals** from an interlocutor.\n\nIn the healthcare and social sector, this competence is essential to support with dignity individuals facing physical and mental suffering. It requires **active listening** and careful observation to adapt care to complex individual situations.\n\nIn the field of software development, empathy translates into my ability to **put myself in the end users' shoes** to design **intuitive user journeys** and accessible interfaces. It allows me to understand the client's frustrations and operational constraints when using software, to provide precise functional answers.",
        proofs:
          "I developed and exercised this skill intensively during a four-year support of an individual with ALS (Charcot's disease), who was quadriplegic and tracheotomized. This former high-level athlete, who had suffered multiple major personal tragedies including the sudden loss of his young daughter, was in a state of absolute physical dependency and could only communicate through the movement of his eyes.\n\nAt the beginning of my care, communication was extremely complex, as the user demanded millimeter precision for daily tasks such as the exact positioning of his limbs. Faced with his distress, the user sometimes expressed himself very dryly or aggressively by writing on his screen using his eye-tracking system, or expressed his distress by crying.\n\nHowever, crying obstructed his eye camera tracking system, instantly locking the computer and causing intense frustration. I took the time to observe his facial expressions and movements to **anticipate his needs** physical and emotional before communication blocks occurred. This constant attention allowed me to join the very restricted circle of the only three caregivers capable of securing his daily life.\n\nRecently, in my developer activity, I transposed this sensitivity by being particularly **attentive to feedback** and needs of my clients during the testing phases of our applications. By closely understanding their constraints and business goals, I adapt my developments to deliver custom solutions aligned with their expectations.",
        selfCritique:
          "This care relationship required **permanent self-reflection** in the face of the user's emotional reactions, understanding that his harsh words were not directed at me but expressed his suffering. I was able to maintain the **right professional distance** while showing great sensitivity to his distress signals.\n\nHowever, I had to learn to accept the limits of my actions and not carry the emotional burden of this complex situation alone. My decision to support him for four years, despite the psychological difficulty of the interventions, proved correct and allowed me to offer him a stable living environment.",
        hindsight:
          "This long-term follow-up was the most formative experience of my career in terms of human relations and self-knowledge. The passing of this user was the only one that deeply affected me, reminding me that behind the essential professional barriers, empathy builds an **invaluable bond of trust**.\n\nThis trial taught me to look beyond surface appearances and reactions to identify the actual cause of dissatisfaction or blockages. The user often encouraged me to progress with simple messages of encouragement, which anchored in me a commitment to continuous improvement.",
        evolution:
          "To maintain and evolve this skill, my goal is to apply this same **empathetic listening approach** to all my development projects. In my daily work, this translates into close collaboration with clients to anticipate their difficulties in adopting technology and to refine the ergonomics of our solutions.\n\nI also wish to actively support my colleagues by being **attentive to signs of overload or stress** within my project team.",
      },
      resilience: {
        title: "Resilience",
        shortDesc: "Stress management and adaptation",
        definition:
          "For me, **professional resilience** corresponds to the ability to **maintain operational integrity, clarity, and effectiveness** in the face of major crisis situations, acute stress, or critical unexpected events. It refers to the capacity **not to be overwhelmed by emotion or panic** when circumstances demand immediate decision-making.\n\nIn the field of home support care, resilience translates into the ability to manage sudden medical emergencies, where every second counts, while maintaining the calm necessary to execute complex procedures. It allows one to overcome the emotional burden of a critical incident to ensure the continuity of care and the safety of the user.\n\nIn the software development sector, this skill is expressed by my ability to handle critical production incidents, such as service interruptions or data loss, with the same rigor and **composure**.",
        proofs:
          "I was confronted with an extreme practical application of this skill during my home support of the user with ALS (Charcot's disease), under mechanical ventilation via tracheotomy. During a routine care session, the balloon securing the tracheal cannula in place suddenly deflated, causing a massive air leak that rendered the breathing assistance completely ineffective.\n\nThe artificial ventilator began emitting continuous emergency alarms, while the user, in imminent danger of suffocation, displayed a violent cough reflex and gave me a look of absolute distress. Faced with this vital emergency, I had to **immediately overcome stress** to apply the **emergency protocol in under two minutes**.\n\nI disconnected the ventilation circuits, removed the failing cannula following the procedure that the head nurse had previously shown me for educational purposes, and then inserted the emergency smaller-gauge cannula located nearby. I then reinflated the balloon using a syringe to restore the seal before reconnecting the ventilator, which immediately stabilized the user's breathing and stopped the machine alarms.\n\nImmediately after, I notified the head nurse to detail my actions and ensure everything was under control. Reassured by my report, he shortened his other less urgent visits to come to the user's home as a priority. Upon his arrival, he proceeded to remove the emergency cannula and fit a brand new standard cannula, a delicate operation that we conducted together with my technical assistance.",
        selfCritique:
          "Analysis of this incident shows that my reaction was appropriate and strictly compliant with the emergency protocols I had assimilated. In the face of an unexpected event directly threatening a human life, giving in to panic would have been catastrophic for the user.\n\nMy **mental preparation** and my knowledge of emergency equipment allowed me to act with adequate speed and precision. I was able to assess the severity of the situation from the very first alarm signals of the machine, without wasting time on superfluous diagnoses.",
        hindsight:
          "This trial was the most intense stress management test of my professional career, and it definitively forged my ability to **put crises into perspective**. Compared to managing a vital emergency at a patient's home, technical incidents or bugs in software production seem much easier for me to approach calmly.\n\nThis experience taught me that a crisis is not resolved by haste, but by the methodical application of **proven procedures**.",
        evolution:
          "To maintain this level of resilience, I strive to apply it daily in my developer role when resolving critical malfunctions. I make sure to approach each complex bug or difficult client feedback as a logical problem to **solve step by step**, without letting stress alter my thinking.",
      },
      communication: {
        title: "Communication",
        shortDesc: "Transparent sharing and technical simplification",
        definition:
          "For me, **professional communication** represents the set of practices used to exchange, transmit, and simplify information in a clear, transparent, and structured way, regardless of the interlocutor. It is not limited to speaking, but encompasses the ability to document technical choices, **adapt one's discourse to the audience**, and ensure information flows smoothly within an organization.\n\nIn the social and healthcare sector, rigorous communication is the safeguard of the safety and continuity of care, connecting the user, their family, and the medical care network. It allows one to articulate complex or personal situations with respect and professionalism.\n\nIn the field of software engineering, it translates into my ability to **bridge the gap between functional needs and technical realities**. I make sure to communicate constantly with my technical peers, project managers, and clients to ensure **perfect alignment** on goals.",
        proofs:
          "During my nine years as a care assistant, I acted as a **relational and informational focal point** at the home of the accompanied individuals. My communication was illustrated daily by writing log books for nurses, doctors, and families to report any changes in behavior or health status.\n\nWhen intervening with users with complex communication needs (such as the aphasic patient under eye-controlled mechanical ventilation), I had to design custom exchange systems to ensure constant mutual understanding.\n\nThis skill was fully transposed into my current work as a developer, where I make it a point of honor to **communicate continuously and transparently**. In my daily routine, this translates into my active involvement in agile team meetings, where I concisely present my technical progress and potential blockages.\n\nI also write structured technical documentations, clear delivery reports for my project managers, and understandable test reports for our clients. During testing and pre-production phases, I take time to **engage constructively** with business teams to collect their feedback, justify my architectural choices, and make sure the final product matches their expectations.",
        selfCritique:
          "Analyzing my communication practices shows that my **transparency** is a major strength in defusing misunderstandings and building trust. As a developer, my habit of communicating spontaneously and regularly allows me to secure our development cycles.\n\nHowever, I must ensure I **adapt the level of detail** of my explanations depending on my interlocutors, avoiding entering too deep into technical complexities when facing purely business profiles.",
        hindsight:
          "With hindsight, I notice that excellent communication eliminates most functional anomalies and frustrations within an IT project. My diverse background has provided me with a unique sensitivity to **actively listen** to others' needs and respond in a calm and clear manner, even in tense environments.",
        evolution:
          "To maintain and perfect this skill, I commit to preserving this high level of **transparency and information sharing** across all my projects.\n\nI also want to refine my asynchronous communication skills, structuring my progress reports and code documentations in even more accessible ways.",
      },
      teamwork: {
        title: "Teamwork",
        shortDesc: "Collaboration, agility, and collective synergy",
        definition:
          "For me, **teamwork** does not simply lie in the cohabitation of professionals within the same project, but in **collective synergy**, **shared responsibility**, and the continuous pursuit of common goals. It relies on transparent communication, **unwavering mutual support**, and the adoption of methodological frameworks that foster group autonomy.\n\nIn the social and healthcare sector, working in a team involves synchronizing diverse skills around the well-being and safety of vulnerable individuals, while demonstrating organizational solidarity to overcome schedule uncertainties.\n\nIn the field of software engineering, teamwork is embodied through Agile methodologies (Scrum, Kanban), daily sharing of progress, peer code reviews, and the co-construction of application architectures between front-end and back-end.",
        proofs:
          "I exercised teamwork at a very high level of autonomy in the social and healthcare sector when my organization transitioned to the self-managed Buurtzorg model (a neighborhood care organization model pioneered in the Netherlands: https://www.buurtzorg.com). This system is based on eliminating middle management and directive supervisors, entrusting full operational management—including route planning, intervention distribution, absence coverage, and holistic user support—directly to small **autonomous teams** of frontline caregivers.\n\nGathered in an autonomous neighborhood team, we managed in direct responsibility a shared portfolio of users with highly diverse dependency profiles. We organized the distribution of care services ourselves, weekend duty rotations, and replacement management during leaves or sick leaves of our colleagues. Once a month, we conducted 1 to 2 hour team meetings during which we collectively decided on the following month's schedule, under the passive supervision of the sector manager who then recorded our decisions in the Perceval planning software.\n\nThis operation required an **irreproachable team spirit** and constant communication. In the event of an unexpected absence of a team member, we immediately conferred to absorb the interventions so as not to impact the users, sometimes accepting to adjust our rest days or manage complex work schedules out of **professional solidarity**.\n\nIn the field of software development, my first experience of Agile collaboration materialized during my DWWM graduation project, O'Voyage. Within a team of five students, we divided roles according to our interests: three colleagues handled Front-End development in Vue.js, while a second student and I were responsible for designing the Back-End API with NestJS. We established an adapted Agile Scrum methodology with daily Standups and one-week sprints over a total period of four weeks, allowing us to continuously adjust our integrations and validate our professional title on time.\n\nLater, in an enterprise setting on large-scale projects like Repos Compensateurs or the MyDataVision portal, I pursued this **collaborative approach** operating in three-week sprints. I paced my activity with team rituals: Daily meetings every morning to share progress on Microsoft Teams, Sprint Planning, and debriefing (retrospective) sessions at the end of each cycle to calibrate the next sprint commitment based on available development capacity.\n\nWhenever an integration need arose, I reached out early to back-end developers to jointly define interface contracts (TypeScript interfaces and data models) to facilitate front-end and API integration. My rare delivery delays were systematically anticipated and communicated to the team when they stemmed from cloud infrastructure dependencies or data unavailability. Finally, I systematically notified my tutor (Tech Lead on the project) as soon as my Pull Requests were opened on our versioning platform. His code reviews yielded only minor remarks and regularly confirmed the quality of my deliveries as well as my **harmonious integration** into the dev collective.",
        selfCritique:
          "Analyzing my teamwork experiences demonstrates my ability to fully invest in **demanding collective dynamics**, whether focused on healthcare self-management or Agile rigor in software engineering.\n\nIn the Buurtzorg model, strong team solidarity could sometimes lead to individual over-commitment when replacing absent colleagues, teaching me to find the balance between **collective support** and preserving individual intervention capacity.",
        hindsight:
          "With hindsight, these two experiences provided me with a very mature vision of professional collaboration. The Buurtzorg method taught me that an autonomous team functions provided that **trust, listening, and a sense of responsibility** are shared by every member.",
        evolution:
          "Building on these successful collaborative experiences in both social healthcare and software engineering, I wish to continue evolving my posture within development teams.\n\nShould the opportunity arise in my career, I would be particularly interested in gradually evolving towards **technical coordination** or managing a pool of developers (for instance, as a reference for a Front-End or Back-End stack I master). A Tech Lead-oriented role would allow me to combine technical expertise with **knowledge sharing**, helping my colleagues grow while spreading the collaborative best practices acquired in the field.",
      },
      pedagogy: {
        title: "Pedagogy & communication",
        shortDesc: "Knowledge transfer and clarity",
        definition:
          "For me, **pedagogy and simplification** do not simply consist in stating knowledge, but in **making complexity accessible** by illustrating it and adapting it to the interlocutor's learning level. They require a fundamental distinction between **knowing** and **mastering** a technology.\n\n**'Knowing'** means having manipulated a concept or tool, being able to execute it correctly without necessarily being able to guide others. **'Mastering'**, on the other hand, represents the pinnacle of understanding a technology: it means understanding its ecosystem, history, and roadmap, and being able to **explain the 'why and how'** to answer the vast majority of questions.\n\nIn both the social healthcare sector and software engineering, pedagogy is a security lever. By **sharing knowledge**, one validates their own understanding, eliminates the risk of skill silos, and guarantees service continuity within an organization.",
        proofs:
          "In my care assistant career started in 2014, I began training colleagues on the ground around 2016.\n\nFrom 2018, backed by my experience with care recipients with complex conditions (notably the user with ALS under mechanical ventilation and eye communication), I became a field reference. I trained numerous caregivers at his home to **transmit the rigor** of each care gesture and their vital importance. This approach aimed to build a qualified pool of caregivers, ensuring continuity of care during vacations or sick leaves.\n\nIn the software development field, I first applied this pedagogy by performing **knowledge transfer** on my projects to prevent any risk of skill silos during absences. This transmission work forced me to re-explain the logic behind each technical choice, allowing me to measure precisely the boundary between what I **know** (such as the Java language) and what I **master** fully (such as the Angular framework, where I can adopt a Lead posture).\n\nThe most striking illustration of this skill occurred from May to September 2026, when I mentored a student undergoing career transition into Full-Stack development for several months.\n\nMy approach answered a **triple objective**:\n1. Validating the depth of my own skills through transmission.\n2. Testing and validating my pedagogical aptitudes with a learner.\n3. Feeling the personal fulfillment of helping someone change their life, just as I had done during my own career transition.\n\nTo ensure **progressive and coherent learning**, I banned diving headfirst into code by structuring her training in logical steps. We first covered the Front-End, the area I master best.\n\nI taught her HTML5 semantics, CSS rules optimization to maximize graphic reusability, architecture principles (KISS, DRY, YAGNI, SOLID), and the most modern Angular ecosystem (notably Signals and Signal Forms).\n\nTo help her assimilate fundamental syntax, I initially disabled AI auto-completion in her IDE, before teaching her best prompt engineering practices (ChatGPT, Claude) to avoid the traps of 'vibe coding'.\n\nOnce interface basics were consolidated, we naturally moved to data design before writing any Back-End code. I showed her how to design an MCD, MLD, and MPD with their cardinalities, teaching her to ask the right architectural questions upfront.\n\nTo **simplify through analogies** the entire Web flow and HTTP requests, I used the restaurant analogy: the customer placing an order (web client), the transmitted order (HTTP request), the server and kitchen processing the order (application server), and the ingredient pantry (database). This concrete example allowed her to intuitively understand the **separation of application concerns**.\n\nAs of writing these lines (07/21/2026), I am currently teaching her Back-End development with Spring Boot, relying directly on the MCD we designed together.",
        selfCritique:
          "This demanding teaching experience forced me into **permanent technical introspection**. Explaining a concept requires breaking down every step and reveals immediately whether one masters their topic or only possesses superficial knowledge.\n\nI had to learn to curb students' natural impulse to dive headfirst into code without prior reflection. My method consisted in enforcing conceptual analysis steps and concrete analogies before writing any line of script.\n\nThis pedagogical rigor strengthened my own technical mastery and confirmed my ability to train junior profiles with **kindness, patience, and methodology**.",
        hindsight:
          "With hindsight, pedagogy is the ultimate proof of a developer's professional maturity. What is well understood **can be clearly articulated**, and using simple images defuses apprehension faced with complex notions.\n\nWhether training a care assistant colleague in an emergency gesture or transmitting best development practices to a student, the key lies in listening, reformulating, and **progressively breaking down the learning curve**.",
        evolution:
          "The successful outcome of this several-month mentorship gave me a genuine passion for **knowledge sharing**.\n\nShould the opportunity arise, I would be very enthusiastic about occasionally teaching groups of students in web development schools or bootcamps. This would allow me to share my field experience, working methods, and help future developers succeed in their professional integration.",
      },
      angular: {
        title: "Angular / TypeScript",
        shortDesc: "Primary front-end framework at work",
        definition: "[TO WRITE]",
        proofs: "[TO WRITE]",
        selfCritique: "[TO WRITE]",
        hindsight: "[TO WRITE]",
        evolution: "[TO WRITE]",
      },
      nestjs: {
        title: "NestJS / Node.js",
        shortDesc: "TypeScript back-end framework",
        definition: "[TO WRITE]",
        proofs: "[TO WRITE]",
        selfCritique: "[TO WRITE]",
        hindsight: "[TO WRITE]",
        evolution: "[TO WRITE]",
      },

      react: {
        title: "React",
        shortDesc: "Modern front-end development",
        definition: "[TO WRITE]",
        proofs: "[TO WRITE]",
        selfCritique: "[TO WRITE]",
        hindsight: "[TO WRITE]",
        evolution: "[TO WRITE]",
      },
      // --- Front-end ---
      typescript: {
        definition: "[TO WRITE]",
        proofs: "[TO WRITE]",
        selfCritique: "[TO WRITE]",
        hindsight: "[TO WRITE]",
        evolution: "[TO WRITE]",
      },
      html5: {
        definition: "[TO WRITE]",
        proofs: "[TO WRITE]",
        selfCritique: "[TO WRITE]",
        hindsight: "[TO WRITE]",
        evolution: "[TO WRITE]",
      },
      css3: {
        definition: "[TO WRITE]",
        proofs: "[TO WRITE]",
        selfCritique: "[TO WRITE]",
        hindsight: "[TO WRITE]",
        evolution: "[TO WRITE]",
      },
      "tailwind-css": {
        definition: "[TO WRITE]",
        proofs: "[TO WRITE]",
        selfCritique: "[TO WRITE]",
        hindsight: "[TO WRITE]",
        evolution: "[TO WRITE]",
      },
      javascript: {
        definition: "[TO WRITE]",
        proofs: "[TO WRITE]",
        selfCritique: "[TO WRITE]",
        hindsight: "[TO WRITE]",
        evolution: "[TO WRITE]",
      },
      "vue-js": {
        definition: "[TO WRITE]",
        proofs: "[TO WRITE]",
        selfCritique: "[TO WRITE]",
        hindsight: "[TO WRITE]",
        evolution: "[TO WRITE]",
      },
      flutter: {
        definition: "[TO WRITE]",
        proofs: "[TO WRITE]",
        selfCritique: "[TO WRITE]",
        hindsight: "[TO WRITE]",
        evolution: "[TO WRITE]",
      },
      dart: {
        definition: "[TO WRITE]",
        proofs: "[TO WRITE]",
        selfCritique: "[TO WRITE]",
        hindsight: "[TO WRITE]",
        evolution: "[TO WRITE]",
      },
      // --- Back-end ---
      mysql: {
        definition: "[TO WRITE]",
        proofs: "[TO WRITE]",
        selfCritique: "[TO WRITE]",
        hindsight: "[TO WRITE]",
        evolution: "[TO WRITE]",
      },
      postgresql: {
        definition: "[TO WRITE]",
        proofs: "[TO WRITE]",
        selfCritique: "[TO WRITE]",
        hindsight: "[TO WRITE]",
        evolution: "[TO WRITE]",
      },
      "node-js": {
        definition: "[TO WRITE]",
        proofs: "[TO WRITE]",
        selfCritique: "[TO WRITE]",
        hindsight: "[TO WRITE]",
        evolution: "[TO WRITE]",
      },
      java: {
        definition: "[TO WRITE]",
        proofs: "[TO WRITE]",
        selfCritique: "[TO WRITE]",
        hindsight: "[TO WRITE]",
        evolution: "[TO WRITE]",
      },
      sql: {
        definition: "[TO WRITE]",
        proofs: "[TO WRITE]",
        selfCritique: "[TO WRITE]",
        hindsight: "[TO WRITE]",
        evolution: "[TO WRITE]",
      },
      express: {
        definition: "[TO WRITE]",
        proofs: "[TO WRITE]",
        selfCritique: "[TO WRITE]",
        hindsight: "[TO WRITE]",
        evolution: "[TO WRITE]",
      },
      "api-rest": {
        definition: "[TO WRITE]",
        proofs: "[TO WRITE]",
        selfCritique: "[TO WRITE]",
        hindsight: "[TO WRITE]",
        evolution: "[TO WRITE]",
      },
      // --- DevOps ---
      docker: {
        definition: "[TO WRITE]",
        proofs: "[TO WRITE]",
        selfCritique: "[TO WRITE]",
        hindsight: "[TO WRITE]",
        evolution: "[TO WRITE]",
      },
      // --- Cloud ---
      cloudfoundry: {
        definition: "[TO WRITE]",
        proofs: "[TO WRITE]",
        selfCritique: "[TO WRITE]",
        hindsight: "[TO WRITE]",
        evolution: "[TO WRITE]",
      },
      supabase: {
        definition: "[TO WRITE]",
        proofs: "[TO WRITE]",
        selfCritique: "[TO WRITE]",
        hindsight: "[TO WRITE]",
        evolution: "[TO WRITE]",
      },
      // --- Transversal ---
      git: {
        definition: "[TO WRITE]",
        proofs: "[TO WRITE]",
        selfCritique: "[TO WRITE]",
        hindsight: "[TO WRITE]",
        evolution: "[TO WRITE]",
      },
      "vs-code": {
        definition: "[TO WRITE]",
        proofs: "[TO WRITE]",
        selfCritique: "[TO WRITE]",
        hindsight: "[TO WRITE]",
        evolution: "[TO WRITE]",
      },
      figma: {
        definition: "[TO WRITE]",
        proofs: "[TO WRITE]",
        selfCritique: "[TO WRITE]",
        hindsight: "[TO WRITE]",
        evolution: "[TO WRITE]",
      },
    },
  },
  realisations: {
    title: "Achievements",
    subtitle: "Projects — professional, personal and academic",
    contextPro: "Professional project",
    contextPerso: "Personal project",
    contextFormation: "Academic project",
    backToList: "Back to achievements",
    detail: {
      definitionTitle: "Overview",
      framingTitle: "Context & objectives",
      actionTitle: "Action",
      resultsTitle: "Results",
      criticalTitle: "Critical review",
      linkedSkillsTitle: "Skills involved",
    },
    items: {
      portailRh: {
        title: "HR Redirection Portal",
        shortDesc:
          "Portal centralizing Orange HR tools via a URL redirection system — Angular, NestJS, MySQL, CloudFoundry.",
        definition: "[TO WRITE]",
        framing: "[TO WRITE]",
        action: "[TO WRITE]",
        results: "[TO WRITE]",
        critical: "[TO WRITE]",
      },
      reposComp: {
        title: "Compensatory Leave Management",
        shortDesc:
          "Compensatory leave management application for all Orange France employees — Angular, Java, microservices.",
        definition: "[TO WRITE]",
        framing: "[TO WRITE]",
        action: "[TO WRITE]",
        results: "[TO WRITE]",
        critical: "[TO WRITE]",
      },
      mobileComp: {
        title: "Skills Mobile App",
        shortDesc:
          "Mobile and web application for centralizing team skills — Flutter, Dart, Supabase.",
        definition: "[TO WRITE]",
        framing: "[TO WRITE]",
        action: "[TO WRITE]",
        results: "[TO WRITE]",
        critical: "[TO WRITE]",
      },
      ovoyage: {
        title: "O'voyage",
        shortDesc:
          "O'Clock bootcamp final project — travel application built as a team with Vue.js and NestJS.",
        definition: "[TO WRITE]",
        framing: "[TO WRITE]",
        action: "[TO WRITE]",
        results: "[TO WRITE]",
        critical: "[TO WRITE]",
      },
      portfolio: {
        title: "Personal portfolio",
        shortDesc: "React portfolio with retro-futuristic design, dark mode and pixel art.",
        definition: "[TO WRITE]",
        framing: "[TO WRITE]",
        action: "[TO WRITE]",
        results: "[TO WRITE]",
        critical: "[TO WRITE]",
      },
    },
  },
  parcours: {
    title: "Career Path",
    subtitle: "Anti-chronological timeline — most recent first",
    experienceTitle: "Professional experience",
    formationTitle: "Education",
    certificationTitle: "Certifications & degrees",
    showDetails: "Show details",
    hideDetails: "Hide details",
    status: "Status",
    presentation: "Overview",
    missions: "Missions",
    vision: "Vision",
    entries: {
      orangeBac5: {
        period: "Mar. 2025 — Mar. 2027",
        title: "Fullstack Developer — Master's in Software Engineering",
        place: "Orange Business",
        status: "Work-study program (2nd year)",
        missions: "[TO WRITE] — Detailed missions (Flutter mobile app, compensatory leave).",
        vision: "[TO WRITE] — Company vision.",
      },
      orangeBac3: {
        period: "Nov. 2023 — Dec. 2024",
        title: "Fullstack Developer — Bachelor's in Application Design",
        place: "Orange Business",
        status: "Work-study program (1st year)",
        missions: "[TO WRITE] — Detailed missions (HR portal).",
        vision: "[TO WRITE] — Company vision.",
      },
      oclock: {
        period: "Jan. 2023 — Jun. 2023",
        title: "Fullstack JavaScript Web Developer Bootcamp",
        place: "O'clock",
        presentation:
          "Intensive 6-month training via Transitions Pro Hauts-de-France. 476h core curriculum (HTML/CSS, JavaScript, Node.js, SQL, MVC architecture) followed by a 168h Data specialization (advanced SQL, NoSQL, MongoDB, Redis, GraphQL, Data Science). Final team project 'O'voyage' with defense.",
        vision: "[TO WRITE] — O'Clock pedagogy vision.",
      },
      care: {
        period: "Oct. 2014 — Aug. 2023",
        title: "Home Care Assistant",
        place: "APF France Handicap — Villeneuve d'Ascq",
        status: "Permanent contract",
        missions:
          "Daily support for people with motor and cognitive disabilities. Endotracheal aspiration training (2017) enabling care for patients with neuromuscular diseases (ALS). Autonomous planning of interventions, collaboration with families and healthcare teams.",
        vision: "[TO WRITE] — What this experience brought you.",
      },
    },
    certifications: {
      master: {
        date: "Mar. 2027 (expected)",
        title: "Master's in Software Engineering — RNCP 35419 (Level 7) 🔄 In progress",
      },
      cda: {
        date: "Dec. 2024",
        title: "Professional Title 'Application Designer & Developer' — RNCP 31678 (Level 6)",
      },
      dwwm: {
        date: "Jun. 2023",
        title: "Professional Title 'Web and Mobile Web Developer' — RNCP 31114 (Level 5)",
      },
      assp: {
        date: "Jun. 2013",
        title: "Vocational Baccalaureate ASSP (Accompanying, Care and Services to People)",
      },
    },
  },
  chevrons: {
    stack: "My stack",
    past: "My background",
    formation: "The transition",
    experience: "Today",
    projects: "My projects",
    contact: "Contact",
  },
  techTooltip: {
    experience: {
      yearsAndMonths: "{{years}} years and {{months}} months",
      yearsOnly: "{{years}} years",
      monthsOnly: "{{months}} months",
      lessThanMonth: "Less than a month",
      lessThanYear: "Less than a year",
      ofExperience: "of experience",
    },
  },
};

export default en;
