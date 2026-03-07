// ================================================================
//  QUESTION BANK
//  Each question has:
//    q    – question text
//    opts – answer choices (array)
//    a    – correct option index (0-based)
//    exp  – explanation of why the correct answer is right
//    oe   – per-option explanations (array, same length as opts)
//           for correct option: reinforce why it's right
//           for wrong options:  explain why it's wrong
// ================================================================
const QUESTIONS = [

  // ──────────────────────── PATIENT CARE ────────────────────────

  { cat:"Patient Care", sub:"Legal & Ethics",
    q:"Respondeat superior means:",
    opts:["The thing speaks for itself","A radiographer needs no malpractice insurance","The reasonably prudent person should decide","Let the master answer"],
    a:3,
    exp:"Respondeat superior ('let the master answer') holds the employer liable for an employee's negligent acts — though the employee may also be personally liable.",
    oe:[
      "This describes res ipsa loquitur ('the thing speaks for itself') — used when negligence is self-evident, like a sponge left inside a patient.",
      "Malpractice insurance status is unrelated to this legal doctrine. All healthcare workers can be personally liable regardless.",
      "The 'reasonably prudent person' doctrine is the standard used to judge whether negligence occurred — not the definition of respondeat superior.",
      "Correct. Respondeat superior means the employer ('master') is vicariously liable for employees' negligent acts committed in the scope of employment."
    ]
  },

  { cat:"Patient Care", sub:"Legal & Ethics",
    q:"Res ipsa loquitur means:",
    opts:["The master is responsible","The thing speaks for itself","As low as reasonably achievable","The patient's rights prevail"],
    a:1,
    exp:"Res ipsa loquitur ('the thing speaks for itself') applies when negligence is so obvious that it requires no further proof — e.g., a surgical instrument left inside a patient.",
    oe:[
      "This describes respondeat superior, not res ipsa loquitur. These are two separate legal doctrines.",
      "Correct. 'The thing speaks for itself' — in cases where the cause of harm is obviously due to negligence, the plaintiff does not need to prove every element.",
      "ALARA (As Low As Reasonably Achievable) is a radiation protection principle — entirely unrelated to civil tort law.",
      "Patient rights are governed by the Patient's Bill of Rights / HIPAA. This is a patient advocacy concept, not a legal negligence doctrine."
    ]
  },

  { cat:"Patient Care", sub:"Legal & Ethics",
    q:"Battery, in the legal context, means:",
    opts:["Threatening a patient","Unlawful touching or contact without consent","Unjustified restraint of a person","Writing false information about a patient"],
    a:1,
    exp:"Battery is unlawful touching without consent. In radiology this includes imaging the wrong patient, the wrong body part, or performing a procedure against a patient's will.",
    oe:[
      "Threatening a patient is assault — the patient fears being harmed. Assault does not require physical contact.",
      "Correct. Battery = unlawful or unconsented touching. Performing radiography on the wrong patient or body part also qualifies as battery.",
      "Unjustified restraint is false imprisonment, not battery.",
      "Writing false damaging information is libel (written defamation), not battery."
    ]
  },

  { cat:"Patient Care", sub:"Legal & Ethics",
    q:"Assault, in the legal context, means:",
    opts:["Striking the patient","Touching the patient without consent","Causing apprehension or fear of being harmed","Performing radiography against the patient's will"],
    a:2,
    exp:"Assault does NOT require physical contact. It means the patient is made to fear that harm is imminent. The radiographer's imprudent conduct that frightens the patient is grounds for assault.",
    oe:[
      "Striking the patient is battery (unlawful physical contact), not assault. Assault precedes the act — it's the threat or fear.",
      "Touching without consent is battery. Assault is about causing fear, not physical contact.",
      "Correct. Assault = apprehension or fear of imminent harm. No physical contact required.",
      "Radiographing against the patient's will is battery (unconsented touching), though the prior intimidation could also constitute assault."
    ]
  },

  { cat:"Patient Care", sub:"Legal & Ethics",
    q:"Which four elements must ALL be proven to establish malpractice?",
    opts:["Standard of care existed; it was violated; violation caused the injury; actual loss occurred","Injury occurred; patient was harmed; radiographer was present; there was a standard of care","Gross negligence occurred; injury occurred; physician ordered the exam; radiographer violated protocol","Patient complained; standard of care was violated; injury occurred; employer was notified"],
    a:0,
    exp:"All four elements are required for malpractice: (1) a standard of care existed, (2) it was violated by the defendant, (3) that violation directly caused the injury, (4) actual loss or injury occurred.",
    oe:[
      "Correct. This is the complete four-element test: duty, breach, causation, and damages.",
      "Being 'present' is not a legal element. Malpractice requires proof that the radiographer's specific actions caused the harm.",
      "Gross negligence is a higher standard than needed. Also, the physician's order alone doesn't establish radiographer malpractice.",
      "A complaint is not required — patients can sue without prior complaint. Notifying the employer is a reporting step, not a malpractice element."
    ]
  },

  { cat:"Patient Care", sub:"Legal & Ethics",
    q:"False imprisonment is best defined as:",
    opts:["Photographing a patient without permission","Unjustified restraint of a person","Spreading false information verbally","Touching the patient without consent"],
    a:1,
    exp:"False imprisonment is the unjustified restraint of a person's freedom of movement. In radiography, improper use of restraint straps or having others forcibly hold a patient can constitute false imprisonment.",
    oe:[
      "Photographing without permission is invasion of privacy — a separate legal concept.",
      "Correct. Unjustified restraint = false imprisonment. Care must be taken with positioning straps and immobilization devices.",
      "Verbally spreading false damaging information is slander (oral defamation).",
      "Touching without consent is battery. Physical contact is a different legal tort from restraint."
    ]
  },

  { cat:"Patient Care", sub:"Legal & Ethics",
    q:"The ARRT Rules of Ethics are:",
    opts:["Aspirational goals for professional practice","Advisory recommendations that vary by state","Mandatory and carry sanctions for violations","Set and enforced by state licensing boards only"],
    a:2,
    exp:"The Rules of Ethics are mandatory and enforceable — violations can result in sanctions including revocation of ARRT certification. The Code of Ethics (separate) describes aspirational goals.",
    oe:[
      "This describes the Code of Ethics, not the Rules. The Code is aspirational; the Rules are binding.",
      "The Rules of Ethics apply nationally to all ARRT certificate holders. They are not advisory and do not vary by state.",
      "Correct. The Rules of Ethics are mandatory and enforced by the ARRT with potential sanctions.",
      "While state boards also regulate practice, the ARRT Rules of Ethics are enforced by the ARRT itself, not only state boards."
    ]
  },

  { cat:"Patient Care", sub:"Infection Control",
    q:"The single most effective method to prevent the spread of infection is:",
    opts:["Wearing gloves","Wearing gowns","Maintaining distance from patients","Proper handwashing"],
    a:3,
    exp:"Handwashing remains the gold standard of infection prevention. Gloves and gowns are important secondary barriers but do not replace proper hand hygiene before and after every patient contact.",
    oe:[
      "Gloves reduce contact transmission but are not a substitute for handwashing — hands must be washed when removing gloves.",
      "Gowns protect clothing but do not prevent hand-borne transmission, which is the most common route.",
      "Distance reduces airborne and droplet transmission but does not prevent contact transmission from contaminated surfaces.",
      "Correct. Handwashing removes and kills pathogens from hands — the most common vector of infection spread in healthcare."
    ]
  },

  { cat:"Patient Care", sub:"Infection Control",
    q:"Standard precautions assume that:",
    opts:["Only patients in known isolation are potentially infectious","All patients' body fluids are potentially infectious at all times","Gloves must be worn for every patient contact regardless of situation","Only patients with visible symptoms pose an infection risk"],
    a:1,
    exp:"Standard precautions treat ALL patients as potentially infectious. All blood, body fluids, secretions, and non-intact skin are treated as potential infection sources regardless of known diagnosis.",
    oe:[
      "Standard precautions apply to ALL patients, not just those in isolation. Many patients are infectious before diagnosis.",
      "Correct. Standard precautions = treat every patient's body fluids as infectious, always.",
      "Gloves are required when contact with body fluids is anticipated, not for every single patient interaction (e.g., handshakes).",
      "Many infectious patients are asymptomatic. Waiting for visible symptoms defeats the purpose of standard precautions."
    ]
  },

  { cat:"Patient Care", sub:"Infection Control",
    q:"Airborne transmission differs from droplet transmission because:",
    opts:["Airborne particles are larger and heavier than droplet particles","Airborne particles can remain suspended in the air for extended periods and travel long distances","Droplet transmission requires an insect vector","Airborne transmission only occurs outdoors"],
    a:1,
    exp:"Airborne particles (droplet nuclei, <5 µm) remain suspended in air for extended periods and can travel beyond 3 feet. Droplets (>5 µm) fall quickly and only spread within ~3 feet of the source.",
    oe:[
      "Airborne particles are actually SMALLER (≤5 µm) than droplet particles (>5 µm). Size is the key difference — smaller = stays airborne longer.",
      "Correct. Airborne particles are tiny enough to stay suspended, making airborne precautions (negative pressure rooms, N95 masks) necessary.",
      "Insect vectors are vector-borne transmission (e.g., malaria via mosquitoes). No insect is involved in airborne or droplet transmission.",
      "Airborne transmission occurs wherever the pathogen is aerosolized — indoors or outdoors."
    ]
  },

  { cat:"Patient Care", sub:"Infection Control",
    q:"A fomite is:",
    opts:["A type of pathogen","An insect that transmits disease","A contaminated inanimate object that can transmit infection","A portal of entry for pathogens"],
    a:2,
    exp:"A fomite is an inanimate object (e.g., imaging table, lead apron, blood pressure cuff) contaminated with pathogens. When susceptible tissue contacts the fomite, infection can be transmitted.",
    oe:[
      "A pathogen is the infectious microorganism itself (bacterium, virus, etc.). A fomite is an object — not the pathogen.",
      "An insect that transmits disease is a vector (e.g., a tick carrying Lyme disease). Fomites are non-living objects.",
      "Correct. Fomite = contaminated inanimate object. Examples in radiology: imaging equipment, X-ray tables, detector plates.",
      "A portal of entry is a route by which pathogens enter the body (mouth, nose, skin break). A fomite is an object, not an entry point."
    ]
  },

  { cat:"Patient Care", sub:"Infection Control",
    q:"The most common site of healthcare-acquired (nosocomial) infections is:",
    opts:["Open wounds","Compound fractures","Urinary catheters","Surgical incisions"],
    a:2,
    exp:"Urinary catheters are the most common source of HAIs, accounting for the majority of healthcare-associated urinary tract infections. Approximately 2 million HAIs occur per year in the U.S.",
    oe:[
      "Open wounds are a significant source of infection but are not the most common site of HAIs overall.",
      "Compound fractures are an orthopedic concern but not the primary source of institutional HAIs.",
      "Correct. Urinary catheters are the #1 source. The catheter provides a direct pathway for bacteria to reach the bladder.",
      "Surgical site infections are the second most common type of HAI, not the most common."
    ]
  },

  { cat:"Patient Care", sub:"Pharmacology",
    q:"Barium sulfate is classified as:",
    opts:["A dissolvable organic salt","An inert inorganic salt","A non-ionic iodinated contrast agent","A water-soluble contrast agent"],
    a:1,
    exp:"Barium sulfate (BaSO₄) is an inert inorganic salt. It does not dissolve or absorb into the bloodstream, making it safe for routine GI studies. It is contraindicated if bowel perforation is suspected.",
    oe:[
      "Barium sulfate does NOT dissolve in water or body fluids — this is key to its safety and its contraindication with bowel perforation.",
      "Correct. Inert = chemically unreactive; inorganic salt = not carbon-based. BaSO₄ passes through the GI tract unchanged.",
      "Non-ionic iodinated agents (e.g., iohexol) are water-soluble contrast media used for vascular and CT studies — completely different from barium.",
      "Barium sulfate is NOT water-soluble. Water-soluble contrast agents (e.g., Gastrografin) are used when perforation is suspected."
    ]
  },

  { cat:"Patient Care", sub:"Pharmacology",
    q:"Which lab values are most important before administering iodinated contrast media?",
    opts:["CBC and platelet count","PT/INR and aPTT","BUN, creatinine, and GFR","Fasting glucose and HbA1c"],
    a:2,
    exp:"BUN, creatinine, and GFR assess kidney function. Iodinated contrast is nephrotoxic and can cause contrast-induced nephropathy. Patients with impaired renal function require dose adjustment or alternative imaging.",
    oe:[
      "CBC and platelets assess blood counts and clotting capacity — relevant for procedures with bleeding risk, not specifically contrast nephrotoxicity.",
      "PT/INR and aPTT assess coagulation — relevant for procedures with bleeding risk (e.g., angiography) but not the primary concern for contrast administration.",
      "Correct. BUN and creatinine reflect kidney function. Elevated values indicate renal impairment that increases risk of contrast-induced nephropathy.",
      "Glucose and HbA1c monitor diabetes management. While diabetics on metformin need special precautions with contrast, these labs don't directly assess renal function."
    ]
  },

  { cat:"Patient Care", sub:"Pharmacology",
    q:"At the first sign of an iodinated contrast reaction, the radiographer should:",
    opts:["Immediately call a cardiac arrest code","Stop the examination, stay with the patient, and call for help","Administer epinephrine from the crash cart","Continue the exam since most reactions are mild and self-limiting"],
    a:1,
    exp:"Stop the exam immediately. Never leave the patient alone — even mild reactions can rapidly progress to severe anaphylaxis. Call for help calmly. Document everything. The radiologist determines treatment.",
    oe:[
      "A cardiac arrest code is only called if the patient loses pulse/breathing. Calling a code unnecessarily causes panic and delays appropriate treatment.",
      "Correct. Stop, stay, call for help. Early recognition and staying with the patient are critical — mild symptoms can escalate rapidly.",
      "Epinephrine is administered by a physician or under direct physician order. The radiographer's role is to stop the exam, call for help, and support the patient.",
      "Never continue an exam when a reaction is suspected. Even mild symptoms (sneezing, flushing, hives) are warnings that a more severe reaction may follow."
    ]
  },

  { cat:"Patient Care", sub:"Emergency Care",
    q:"Hypovolemic shock is caused by:",
    opts:["Allergic reaction to foreign proteins","Cardiac failure or dysfunction","Loss of a large amount of blood or plasma","Infection causing a dramatic drop in blood pressure"],
    a:2,
    exp:"Hypo = low, volemic = volume. Loss of blood or plasma reduces circulating volume, causing inadequate perfusion of organs and tissues. Classic signs: tachycardia, cool/clammy skin, low BP.",
    oe:[
      "Allergic reaction to foreign proteins causes anaphylactic shock. Anaphylaxis involves histamine release causing vasodilation and bronchoconstriction — not volume loss.",
      "Cardiac failure causes cardiogenic shock. The heart can't pump effectively even though blood volume may be normal.",
      "Correct. Hypovolemic = low blood volume from hemorrhage, burns, or plasma loss. The heart races to compensate for insufficient volume.",
      "Infection causing a blood pressure drop is septic shock — bacterial toxins cause massive vasodilation and immune response, not primary volume loss."
    ]
  },

  { cat:"Patient Care", sub:"Patient Transfer",
    q:"When using proper body mechanics during a patient transfer, the radiographer should:",
    opts:["Use the back muscles to do all lifting to protect the knees","Keep knees slightly bent, back straight, and lift with the legs","Always transfer patients alone to protect patient privacy","Avoid explaining the procedure to prevent increasing patient anxiety"],
    a:1,
    exp:"Proper mechanics: slight knee bend, straight back, use leg muscles for lifting. This protects the radiographer's spine. Always explain the transfer to gain cooperation and reduce fear.",
    oe:[
      "Using back muscles is the opposite of correct — this is the primary cause of occupational back injuries. Leg muscles must do the lifting.",
      "Correct. Legs are the powerhouse; the back stays straight. This protects the lumbar spine and avoids injury.",
      "Patient transfers should generally be done with assistance when needed, not alone. Patient safety outweighs privacy concerns.",
      "Explaining the transfer procedure is essential — it reduces fear, gains cooperation, and is part of professional patient care."
    ]
  },

  { cat:"Patient Care", sub:"Scheduling",
    q:"When scheduling multiple radiographic examinations on the same day, barium studies should be scheduled:",
    opts:["First to prepare the GI tract","Before urological studies","Before CT scans","Last, because residual barium interferes with other exams"],
    a:3,
    exp:"Barium is radiopaque and persists in the GI tract for days. Residual barium obscures structures on CT, IVP, ultrasound, and nuclear medicine studies. Correct order: endoscopy → urinary → biliary → CT → barium.",
    oe:[
      "Barium should never be first — it interferes with virtually every other study. Endoscopy is done first.",
      "Urological studies (IVP) should be done BEFORE barium. Barium in the colon can obscure the kidneys and ureters.",
      "CT scans must be done BEFORE barium because barium causes streak artifacts on CT images.",
      "Correct. Barium is always last. Its persistence in the GI tract would compromise all other imaging modalities."
    ]
  },

  { cat:"Patient Care", sub:"Communication",
    q:"For valid informed consent, which conditions must be met?",
    opts:["Patient must be of legal age; consent must be voluntary; patient must be mentally competent","Patient must be given a written brochure; must be of legal age; must fully understand every aspect","A physician must witness the consent; patient must be of legal age; must be in writing","Patient must be adult; consent must be notarized; two witnesses must be present"],
    a:0,
    exp:"Three core elements: (1) legal age or legal guardian, (2) voluntary consent (free from coercion), (3) mental competency. A brochure is not required, and patients rarely understand every detail.",
    oe:[
      "Correct. Age, voluntariness, and competency are the three essential elements. A brochure is helpful but not legally required.",
      "Patients do not need to fully understand every aspect — that's an unrealistic standard. They must understand the general nature, risks, and alternatives.",
      "Physician witnessing is not universally required. A radiographer or nurse can witness signing in many situations.",
      "Notarization is not required for medical informed consent. Two formal witnesses are not a standard legal requirement for most procedures."
    ]
  },

  // ──────────────────────── SAFETY ────────────────────────

  { cat:"Safety", sub:"Radiation Physics",
    q:"In the photoelectric effect, the incoming x-ray photon:",
    opts:["Scatters with reduced energy and ejects an outer-shell electron","Is completely absorbed by a K-shell electron, which is then ejected as a photoelectron","Vibrates atomic electrons without removing them","Interacts with the atomic nucleus to produce an electron-positron pair"],
    a:1,
    exp:"Photoelectric absorption: the photon transfers ALL its energy to a K-shell electron, ejecting it as a photoelectron. The photon is completely absorbed — no scatter exits. This contributes to patient dose but not scatter fog.",
    oe:[
      "Scattering with reduced energy and ejecting an outer-shell electron describes Compton scatter, not the photoelectric effect.",
      "Correct. The photon is 100% absorbed. A characteristic photon may be released when an outer-shell electron fills the K-shell vacancy.",
      "Vibrating electrons without removal describes coherent (classical) scatter — no ionization occurs.",
      "Electron-positron pair production requires photon energies > 1.02 MeV — far above diagnostic x-ray energies."
    ]
  },

  { cat:"Safety", sub:"Radiation Physics",
    q:"During Compton scatter, which of the following occurs?",
    opts:["The photon is completely absorbed by the atom","The photon interacts with an outer-shell electron, loses some energy, and continues as scattered radiation","Electrons vibrate and re-emit energy without ionization","Pair production occurs in the nucleus"],
    a:1,
    exp:"Compton scatter: the photon ejects an outer-shell electron (recoil electron) and continues in a new direction with reduced energy. Scattered photons travel unpredictably and are the primary source of occupational exposure.",
    oe:[
      "Complete absorption describes the photoelectric effect. In Compton scatter, the photon is deflected — it is not absorbed.",
      "Correct. The photon loses partial energy to the recoil electron, then scatters. Scattered photons can exit the patient in any direction.",
      "Vibration without ionization describes coherent scatter. Compton scatter does cause ionization.",
      "Pair production requires photon energy > 1.02 MeV and involves the nucleus — not relevant in diagnostic imaging."
    ]
  },

  { cat:"Safety", sub:"Radiation Physics",
    q:"The inverse square law states that x-ray beam intensity is:",
    opts:["Directly proportional to the square of the distance","Inversely proportional to distance (doubles when distance halves)","Inversely proportional to the square of the distance","Directly proportional to distance"],
    a:2,
    exp:"I ∝ 1/d². Double the distance → intensity drops to 1/4. Halve the distance → intensity quadruples. This relationship explains why distance is one of the three cardinal radiation protection principles.",
    oe:[
      "If intensity were directly proportional to d², moving further away would increase exposure — the opposite of reality.",
      "Inversely proportional to distance (not squared) would mean doubling distance halves intensity. The actual drop is to 1/4, not 1/2.",
      "Correct. Intensity ∝ 1/d². The squared relationship means small distance changes have large intensity effects.",
      "If directly proportional to distance, intensity would increase as you move away — physically impossible with a point source."
    ]
  },

  { cat:"Safety", sub:"Radiation Physics",
    q:"Bremsstrahlung radiation is produced when:",
    opts:["An incoming electron ejects a K-shell electron at the anode","High-speed electrons decelerate near the atomic nucleus of the anode","A K-shell vacancy is filled by an outer-shell electron","Photons interact with outer-shell electrons in tissue"],
    a:1,
    exp:"Bremsstrahlung ('braking radiation'): cathode electrons are deflected and decelerated by the nuclear electric field of the anode target. Lost kinetic energy is emitted as x-ray photons with a continuous spectrum.",
    oe:[
      "Ejecting a K-shell electron produces characteristic radiation (when the vacancy is subsequently filled), not bremsstrahlung.",
      "Correct. Electrons are 'braked' by the nuclear field — the more the deflection, the higher the photon energy emitted.",
      "A K-shell vacancy being filled by an outer-shell electron is the mechanism that produces characteristic radiation.",
      "Photons interacting with outer-shell electrons in tissue describes Compton scatter — a photon-tissue interaction, not x-ray production."
    ]
  },

  { cat:"Safety", sub:"Radiation Units",
    q:"Which SI unit measures absorbed dose (energy deposited per unit mass of tissue)?",
    opts:["Sievert (Sv)","Gray (Gy)","Coulomb/kilogram (C/kg)","Becquerel (Bq)"],
    a:1,
    exp:"Gray (Gy) = absorbed dose = joules per kilogram of tissue. Sievert = effective/equivalent dose (Gray × radiation weighting factor). C/kg = exposure (ionization in air). Bq = radioactivity (decays per second).",
    oe:[
      "Sievert measures effective or equivalent dose — Gray multiplied by the radiation weighting factor (Wr) to account for biological effectiveness.",
      "Correct. Gray (Gy) = J/kg = absorbed dose. One Gray = one joule of energy absorbed per kilogram of matter.",
      "Coulomb/kilogram (C/kg) measures exposure — the ionization produced in air by x- or gamma radiation. It replaced the roentgen (R).",
      "Becquerel (Bq) measures radioactivity — the rate of nuclear disintegrations per second. It replaced the curie (Ci)."
    ]
  },

  { cat:"Safety", sub:"Dose Limits",
    q:"The NCRP #116 annual occupational effective dose limit for radiographers is:",
    opts:["10 mSv","20 mSv","50 mSv","100 mSv"],
    a:2,
    exp:"NCRP #116 sets the annual occupational effective dose limit at 50 mSv. Cumulative limit = age × 10 mSv. These limits apply to whole-body dose for the lens, gonads, and red bone marrow.",
    oe:[
      "10 mSv/year is too restrictive — it would prevent most radiographers from working. The actual limit is 50 mSv.",
      "20 mSv/year is the ICRP recommendation but NOT the NCRP standard used in the U.S. The NCRP sets 50 mSv.",
      "Correct. 50 mSv/year occupational effective dose limit (NCRP #116). Cumulative = age (years) × 10 mSv.",
      "100 mSv would exceed the level associated with deterministic effects and is far above the occupational limit."
    ]
  },

  { cat:"Safety", sub:"Dose Limits",
    q:"The total equivalent dose limit for an embryo/fetus throughout the entire pregnancy is:",
    opts:["0.5 mSv","1 mSv","5 mSv","10 mSv"],
    a:2,
    exp:"NCRP #116: 5 mSv total for the entire gestational period; no more than 0.5 mSv in any single month. Once pregnancy is declared, dosimetry at the waist (under apron) is required.",
    oe:[
      "0.5 mSv is the maximum dose per MONTH during pregnancy — not the total gestational limit.",
      "1 mSv/year is the annual limit for the general public for frequent exposures — not the embryo/fetus standard.",
      "Correct. 5 mSv total for pregnancy, with a monthly sub-limit of 0.5 mSv to protect against critical-period exposures.",
      "10 mSv greatly exceeds fetal protection limits and would not be acceptable for an entire pregnancy."
    ]
  },

  { cat:"Safety", sub:"Dose-Response",
    q:"The linear-nonthreshold (LNT) dose-response model states that:",
    opts:["No effects occur below a specific threshold dose","Response is proportional to dose and no dose is considered completely safe","Response increases exponentially above a threshold","Effects only occur at high doses relevant to radiation therapy"],
    a:1,
    exp:"LNT: any dose, no matter how small, carries some probability of biological harm. The probability of harm is directly proportional to dose. This conservative model is the basis for radiation protection regulations.",
    oe:[
      "A threshold model (linear-threshold or nonlinear-threshold) states no response below a certain dose. LNT has no threshold.",
      "Correct. Linear = proportional response; nonthreshold = no safe dose. This justifies the ALARA principle.",
      "Exponential response above a threshold describes the nonlinear-threshold model, used for some deterministic effects like cataracts.",
      "LNT applies specifically to stochastic (cancer, genetic) effects at ALL dose levels, not just high therapeutic doses."
    ]
  },

  { cat:"Safety", sub:"Dose-Response",
    q:"Stochastic effects of radiation are best described as:",
    opts:["Effects that increase in severity with dose above a threshold","Randomly occurring effects whose probability increases with dose but whose severity does not","Effects that only occur at very high doses","Effects that are always immediately apparent after exposure"],
    a:1,
    exp:"Stochastic effects (cancer, genetic mutations): probability increases with dose but severity doesn't — cancer is cancer whether from a small or large dose. They follow the LNT model with no threshold.",
    oe:[
      "Increasing severity above a threshold describes deterministic (non-stochastic) effects like cataracts, erythema, and epilation.",
      "Correct. Stochastic = random occurrence. More dose = higher chance of cancer, but the cancer itself isn't 'worse' because of higher dose.",
      "Stochastic effects can theoretically occur at any dose per the LNT model — not only at high doses.",
      "Stochastic effects (particularly cancer) may not appear for years to decades after exposure — they are not immediately apparent."
    ]
  },

  { cat:"Safety", sub:"Radiobiology",
    q:"The most radiosensitive types of cells are those that are:",
    opts:["Mature, highly specialized, and non-dividing","Immature, rapidly dividing, and undifferentiated","Mature with a long lifespan","Large with high metabolic activity"],
    a:1,
    exp:"The Law of Bergonié and Tribondeau: radiosensitivity increases with cell immaturity, rapid division rate, and lack of differentiation. Immature blood cells and embryonic cells are most vulnerable.",
    oe:[
      "Mature, specialized, non-dividing cells (e.g., neurons, mature muscle cells) are the MOST radioresistant. They have little mitotic activity.",
      "Correct. Immature + rapidly dividing + undifferentiated = maximum radiosensitivity. Examples: lymphocytes, spermatogonia, intestinal crypt cells.",
      "A long lifespan in non-dividing cells correlates with radioresistance, not radiosensitivity.",
      "Metabolic activity alone does not determine radiosensitivity. Mitotic rate and differentiation are the primary factors."
    ]
  },

  { cat:"Safety", sub:"Radiobiology",
    q:"Which acute radiation syndrome affects blood cell production and can result in death from infection or hemorrhage?",
    opts:["Central nervous system syndrome","Gastrointestinal syndrome","Hematopoietic syndrome","Cardiovascular syndrome"],
    a:2,
    exp:"Hematopoietic (bone marrow) syndrome: occurs at ~1–6 Gy. Destroys stem cells in bone marrow, reducing all blood cell counts. Death results from infection (low WBCs), bleeding (low platelets), or anemia.",
    oe:[
      "CNS syndrome occurs at very high doses (>50 Gy). Caused by cerebrovascular damage, it leads to rapid death within hours to days.",
      "GI syndrome occurs at doses of ~6–10 Gy. Destroys intestinal lining, causing fluid loss, infection, and death within days to weeks.",
      "Correct. Hematopoietic syndrome: radiation destroys bone marrow stem cells at 1–6 Gy, reducing white cells, red cells, and platelets.",
      "There is no classic 'cardiovascular syndrome' in acute radiation exposure. Cardiovascular effects are secondary to other syndromes."
    ]
  },

  { cat:"Safety", sub:"Radiation Protection",
    q:"The three cardinal principles of radiation protection are:",
    opts:["Shielding, collimation, and filtration","Time, distance, and shielding","ALARA, dosimetry, and shielding","kVp, mAs, and distance"],
    a:1,
    exp:"Time (minimize exposure duration), Distance (maximize distance from source — uses inverse square law), Shielding (interpose attenuating material). These apply to personnel protection from all ionizing radiation sources.",
    oe:[
      "Collimation and filtration are patient protection techniques, not the three cardinal principles of personnel protection.",
      "Correct. Time, distance, shielding — the universal trio of radiation protection for all ionizing radiation scenarios.",
      "ALARA is the overarching philosophy; dosimetry is monitoring. Neither are cardinal protection principles.",
      "kVp and mAs are technical exposure factors, not radiation protection principles. Distance is the only overlap."
    ]
  },

  { cat:"Safety", sub:"Radiation Protection",
    q:"ALARA stands for:",
    opts:["Always Limit All Radiation Activities","As Low As Reasonably Achievable","All Levels Adjusted for Radiographic Accuracy","Avoid Long And Repeated Acquisitions"],
    a:1,
    exp:"ALARA (As Low As Reasonably Achievable) is the guiding philosophy of radiation protection. It requires minimizing patient and personnel dose while maintaining diagnostic image quality — not simply reaching minimum dose at all costs.",
    oe:[
      "Not a real acronym. ALARA specifically means 'as low as reasonably achievable' — the word 'reasonably' is key because zero dose is often not achievable.",
      "Correct. 'Reasonably achievable' acknowledges that some dose is unavoidable in diagnostic imaging — the goal is to minimize unnecessary dose.",
      "This is not the correct definition. ALARA has nothing to do with adjusting levels for image accuracy.",
      "Not a real acronym. ALARA doesn't refer to acquisition duration, though minimizing fluoroscopy time is an application of ALARA."
    ]
  },

  { cat:"Safety", sub:"Radiation Protection",
    q:"During fluoroscopy, the radiographer's dosimeter should be worn:",
    opts:["Under the lead apron at waist level","Outside the lead apron at collar level","Under the lead apron at chest level","On the wrist nearest the radiation source"],
    a:1,
    exp:"Collar-level placement outside the apron monitors dose to unshielded areas: thyroid, eyes, and head. This provides the most conservative (highest) reading. For pregnant workers, a second badge is worn at waist level under the apron.",
    oe:[
      "Under the apron at waist gives a reading after attenuation by lead — it underestimates actual dose to unshielded body parts.",
      "Correct. Outside at collar = measures dose to unshielded areas. The reading is used to estimate effective dose conservatively.",
      "Under the apron at chest still misses the unshielded head and neck area, underestimating total effective dose.",
      "Wrist dosimeters may be used for extremity monitoring during interventional procedures — not as the primary whole-body dosimeter."
    ]
  },

  { cat:"Safety", sub:"Radiation Protection",
    q:"The minimum source-to-skin distance (SSD) for mobile (portable) radiography units is:",
    opts:["6 inches","12 inches","15 inches","20 inches"],
    a:1,
    exp:"Per NCRP #102 and 21 CFR: minimum SSD for mobile/portable = 12 inches (30 cm). For fixed fluoroscopy tables: minimum 15 inches source to tabletop. For mobile fluoroscopy: minimum 12 inches.",
    oe:[
      "6 inches is far too close — beam intensity at that distance is extremely high and would result in excessive patient skin dose.",
      "Correct. 12 inches minimum for portable units. This limit reduces skin dose by ensuring adequate distance.",
      "15 inches is the minimum for fixed fluoroscopy tables, not mobile radiography units.",
      "20 inches is more than the minimum but not the stated regulatory minimum for mobile units."
    ]
  },

  { cat:"Safety", sub:"Dosimetry",
    q:"The thermoluminescent dosimeter (TLD) operates on which principle?",
    opts:["Ionization of gas in a sealed chamber","Latent image formation on photographic film","Electrons trapped in crystal lattice; released as light when heated","Real-time electronic measurement of ionization"],
    a:2,
    exp:"TLDs: radiation traps electrons at higher energy levels in a lithium fluoride crystal. When heated, electrons return to ground state and emit visible light proportional to the radiation dose received.",
    oe:[
      "Ionization of gas in a sealed chamber describes an ionization chamber dosimeter (survey meter), not a TLD.",
      "Latent image on photographic film describes a film badge dosimeter. Film badges are sensitive to heat/humidity and are being phased out.",
      "Correct. TLD = thermoluminescence: crystal traps electrons → heat → light emission → dose measurement. Accurate and does not fade over time.",
      "Real-time electronic measurement describes an electronic personal dosimeter (EPD) — a different device that provides immediate digital readout."
    ]
  },

  // ──────────────────────── IMAGE PRODUCTION ────────────────────────

  { cat:"Image Production", sub:"Exposure Factors",
    q:"mAs primarily controls which property of the x-ray beam?",
    opts:["Beam quality (penetrating energy)","Beam quantity (number of photons produced)","Subject contrast in the patient","Spatial resolution of the image"],
    a:1,
    exp:"mAs (milliampere-seconds) controls the QUANTITY of x-rays — the number of photons. Doubling mAs doubles the photon output and doubles patient dose (directly proportional). kVp controls beam quality (energy).",
    oe:[
      "Beam quality (penetrating power / energy) is controlled by kVp. Higher kVp = shorter wavelength = more penetrating radiation.",
      "Correct. mAs = milliamps × seconds = total charge = number of electrons = number of photons produced. Linear relationship with dose.",
      "Subject contrast is primarily controlled by kVp (higher kVp → lower contrast). mAs affects density/exposure, not subject contrast.",
      "Spatial resolution is controlled by focal spot size, OID, SID, and pixel size — not mAs."
    ]
  },

  { cat:"Image Production", sub:"Exposure Factors",
    q:"The 15% rule states that:",
    opts:["Increasing SID by 15% doubles receptor exposure","Increasing kVp by 15% doubles receptor exposure; decreasing by 15% halves it","Increasing mAs by 15% doubles receptor exposure","Grids reduce receptor exposure by 15% per grid ratio unit"],
    a:1,
    exp:"15% rule: ↑ kVp by 15% = receptor exposure doubles (equivalent to doubling mAs). ↓ kVp by 15% = exposure halves. This allows kVp/mAs trade-offs: increase kVp by 15% AND halve mAs to maintain exposure with lower patient dose.",
    oe:[
      "Changing SID follows the inverse square law, not a 15% rule. Doubling SID reduces exposure to 1/4.",
      "Correct. A 15% kVp increase doubles receptor exposure — useful for reducing mAs and patient dose while maintaining image brightness.",
      "Increasing mAs by 15% increases exposure by only 15% (linear relationship), not by double. Doubling exposure requires doubling mAs.",
      "Grid effects are expressed using grid conversion factors (Bucky factors), not a 15% rule."
    ]
  },

  { cat:"Image Production", sub:"Exposure Factors",
    q:"If SID is doubled with no other technique changes, receptor exposure becomes:",
    opts:["Doubled","Halved","Reduced to one-fourth","Reduced to one-eighth"],
    a:2,
    exp:"Inverse square law: I ∝ 1/d². Doubling d → intensity drops to 1/(2²) = 1/4. To compensate, mAs must be multiplied by 4 (exposure maintenance formula: mAs₁/mAs₂ = SID₁²/SID₂²).",
    oe:[
      "Exposure doubling would require reducing SID to 1/√2 of original — the opposite of doubling SID.",
      "Halving would occur if exposure were inversely proportional to distance (not squared). The actual relationship is inverse-square.",
      "Correct. d × 2 → intensity × 1/4. This is one of the most commonly tested relationships in radiographic physics.",
      "One-eighth would occur with a cubic relationship. The actual relationship is inverse-square, giving 1/4 at double distance."
    ]
  },

  { cat:"Image Production", sub:"Exposure Factors",
    q:"The anode heel effect describes:",
    opts:["Overheating of the anode causing gradual output reduction","Greater x-ray intensity on the cathode side of the beam than the anode side","Reduced beam penetration at high kVp","Increased scatter on the anode side"],
    a:1,
    exp:"Anode heel effect: x-ray intensity varies along the longitudinal axis — greater on the cathode side, less on the anode side. Clinical application: place the thicker/denser body part under the cathode end of the tube.",
    oe:[
      "Anode overheating is a tube-load concern (thermal rating). The heel effect is a geometric property of the angled anode — it exists whether or not overheating occurs.",
      "Correct. The angled anode absorbs some of its own radiation on the anode side. Result: cathode side = brighter, anode side = dimmer.",
      "kVp determines beam penetration — not the heel effect. The heel effect is about intensity distribution, not energy.",
      "Scatter originates in the patient, not at the anode. The heel effect is about primary beam intensity distribution."
    ]
  },

  { cat:"Image Production", sub:"Digital Imaging",
    q:"In digital radiography, a pixel is best defined as:",
    opts:["A volume element of patient tissue that corresponds to detector data","The smallest picture element in the image matrix","The space between adjacent detector elements","The algorithm used to reconstruct the digital image"],
    a:1,
    exp:"Pixel (picture element) = the smallest unit of the digital image matrix. Each pixel displays a shade of gray. Each pixel corresponds to a voxel (volume element) of patient tissue.",
    oe:[
      "A voxel (volume element) is the corresponding 3D unit of patient tissue — not the pixel itself. Pixel is the image display unit.",
      "Correct. Pixel = picture element = smallest component of the 2D matrix. More pixels = finer spatial resolution.",
      "The space between detector elements is the interspace or 'dead' area — not the pixel. This affects fill factor and DQE.",
      "The image reconstruction algorithm (processing algorithm) is a software function — not a structural component of the image matrix."
    ]
  },

  { cat:"Image Production", sub:"Digital Imaging",
    q:"Contrast resolution in digital imaging is primarily controlled by:",
    opts:["Pixel size","Pixel pitch","Bit depth","Matrix size"],
    a:2,
    exp:"Bit depth determines the number of gray shades possible (2ⁿ levels). More bits = more gray shades = better contrast resolution. Common bit depths: 10-bit = 1,024 gray levels; 12-bit = 4,096; 14-bit = 16,384.",
    oe:[
      "Pixel size controls SPATIAL resolution (how sharp detail appears). Smaller pixels = better spatial resolution, not contrast resolution.",
      "Pixel pitch (center-to-center distance between pixels) also affects spatial resolution, not contrast resolution.",
      "Correct. Bit depth = number of bits per pixel = 2ⁿ gray shades. More bits → smoother gray scale → better discrimination of subtle tissue differences.",
      "Matrix size (total number of pixels) affects the overall image but doesn't specifically control contrast resolution."
    ]
  },

  { cat:"Image Production", sub:"Digital Imaging",
    q:"'Dose creep' in digital radiography refers to:",
    opts:["Gradual increase in background radiation in the radiology department","Chronic overexposure of patients because digital post-processing masks technique errors","Cumulative lifetime dose to radiation workers","Increasing dose from repeated fluoroscopic runs"],
    a:1,
    exp:"Dose creep: digital systems can compensate for overexposure by adjusting image brightness, making the image look correct even when the patient received an excessive dose. This leads to habitually using too high mAs.",
    oe:[
      "Background radiation increase is an environmental concern — not related to how digital systems handle technique errors.",
      "Correct. Digital post-processing masks overexposure → radiographers may unknowingly use higher-than-necessary technique → patients receive more dose than needed.",
      "Cumulative dose to workers is tracked by dosimetry. This is occupational exposure, not dose creep.",
      "Fluoroscopy dose concerns are related to beam-on time and fluoroscopy technique, not dose creep as a concept."
    ]
  },

  { cat:"Image Production", sub:"Spatial Resolution",
    q:"Which factor would DECREASE spatial resolution?",
    opts:["Small focal spot","Short OID (object-to-image distance)","Long SID (source-to-image distance)","Large OID"],
    a:3,
    exp:"Large OID → magnification → penumbra (blur) → reduced spatial resolution. Small focal spot, short OID, and long SID all improve spatial resolution by minimizing geometric unsharpness.",
    oe:[
      "Small focal spot IMPROVES spatial resolution — less penumbra (geometric blur) because x-rays originate from a smaller area.",
      "Short OID IMPROVES spatial resolution — the part is closer to the receptor, minimizing magnification and blur.",
      "Long SID IMPROVES spatial resolution — more parallel x-ray paths, less divergence, less magnification.",
      "Correct. Large OID = part far from receptor = more magnification = more geometric blur = reduced spatial resolution."
    ]
  },

  { cat:"Image Production", sub:"Image Contrast",
    q:"High kVp produces which type of contrast scale?",
    opts:["Short-scale (high contrast): few gray shades, extreme black-and-white","Long-scale (low contrast): many gray shades, small differences between tones","No change in contrast scale","Increased contrast due to more photoelectric interactions"],
    a:1,
    exp:"High kVp: more beam penetration → more uniform attenuation → more gray shades visible (long scale / low contrast). Low kVp: more photoelectric absorption → stark differences → short scale / high contrast.",
    oe:[
      "Short-scale (high contrast) occurs with LOW kVp. Low energy photons are absorbed by photoelectric effect, creating extreme black/white differences.",
      "Correct. High kVp → long gray scale → low contrast. Many gray shades are visible because high-energy photons penetrate most tissues relatively uniformly.",
      "kVp absolutely affects contrast scale — it is the primary controller of subject contrast.",
      "High kVp actually REDUCES photoelectric interactions in favor of Compton scatter, which reduces subject contrast (more scatter, more uniform gray shades)."
    ]
  },

  { cat:"Image Production", sub:"Grids",
    q:"Grid ratio is expressed as:",
    opts:["Grid frequency divided by lead strip height","Height of lead strips divided by distance between strips (H/D)","Total lead content per square inch of grid","Distance between strips divided by strip height (D/H)"],
    a:1,
    exp:"Grid ratio = H/D. H = height of the lead strips; D = distance between them. Higher ratio (e.g., 16:1) = better scatter cleanup but less positioning latitude. Ranges from 4:1 to 16:1.",
    oe:[
      "Grid frequency is the number of lead strips per inch — a separate specification from grid ratio.",
      "Correct. Grid ratio = H/D. A 16:1 grid has strips 16× taller than their spacing — very efficient at absorbing scatter.",
      "Lead content per area describes grid density — not how grid ratio is calculated.",
      "D/H would be the inverse of grid ratio. Correct formula is H over D (height over distance)."
    ]
  },

  { cat:"Image Production", sub:"Grids",
    q:"An inverted (upside-down) focused grid produces:",
    opts:["Grid lines visible throughout the radiograph","Normal density in the center with cutoff (decreased density) on both sides","Decreased density in the center with normal density at the sides","Uniform density throughout the image"],
    a:1,
    exp:"Inverted focused grid: the angled lead strips converge in the wrong direction. The central ray passes through but peripheral image-forming rays are absorbed. Result: normal center, cutoff at both sides.",
    oe:[
      "Grid lines are visible with a stationary (non-moving) grid regardless of orientation. The inverted grid produces cutoff, not just grid lines.",
      "Correct. The center of the grid coincidentally aligns with the central ray, so density is normal there. Lead strips diverge at the periphery, absorbing image-forming rays.",
      "Decreased center density occurs with lateral decentering or grid-focus decentering, not inversion.",
      "Uniform density would indicate correct grid use or no grid. An inverted focused grid never produces uniform density."
    ]
  },

  { cat:"Image Production", sub:"X-ray Equipment",
    q:"Thermionic emission refers to:",
    opts:["Production of characteristic radiation at the anode","Emission of electrons from the heated cathode filament","Interaction of photons with outer-shell electrons in tissue","Deceleration of electrons near the anode nucleus"],
    a:1,
    exp:"Thermionic emission: the cathode filament is heated by the filament current until electrons gain enough energy to escape the metal surface, forming an electron cloud (space charge) ready for acceleration toward the anode.",
    oe:[
      "Characteristic radiation is produced at the ANODE when incoming electrons eject K-shell electrons and outer-shell electrons fill the vacancies — not related to thermionic emission.",
      "Correct. Thermo = heat; ionic = ions (charged particles). Filament heat → electron escape → electron cloud ready to be accelerated.",
      "Photon-outer-shell electron interaction describes Compton scatter in tissue — a completely different process from x-ray tube electron emission.",
      "Electron deceleration near the anode nucleus describes bremsstrahlung production — the end product of the accelerated electrons, not their origin at the cathode."
    ]
  },

  { cat:"Image Production", sub:"Filtration",
    q:"The purpose of adding aluminum filtration to the x-ray beam is to:",
    opts:["Increase the number of high-energy photons reaching the patient","Remove low-energy photons that increase patient dose without contributing to image quality","Reduce beam intensity by removing high-energy photons to protect the patient","Increase image contrast by narrowing the energy spectrum"],
    a:1,
    exp:"Filtration removes long-wavelength (low-energy, 'soft') photons. These would be absorbed by the patient's superficial tissues (skin dose), contributing to dose but NOT to the image. Filtration 'hardens' the beam and reduces skin dose.",
    oe:[
      "Filtration removes photons — it doesn't add them. The beam has fewer but higher-average-energy photons after filtration.",
      "Correct. Low-energy photons are absorbed in the filter rather than the patient. This reduces patient surface dose while maintaining diagnostic beam quality.",
      "Filtration specifically removes LOW-energy photons. High-energy photons pass through aluminum filtration essentially unchanged.",
      "Filtration slightly changes contrast by narrowing the energy spectrum, but this is a secondary effect. The primary purpose is reducing patient dose."
    ]
  },

  { cat:"Image Production", sub:"AEC",
    q:"Automatic exposure control (AEC) terminates the exposure when:",
    opts:["A pre-programmed mAs value is reached","The selected ionization chamber detects sufficient radiation to produce an adequate image","The kVp reaches its set level","The fluoroscopy timer alarm sounds"],
    a:1,
    exp:"AEC uses ionization chambers (or photomultiplier cells) positioned behind the image receptor. When sufficient radiation reaches the chamber for a diagnostic image, a signal terminates the exposure. The radiographer selects the appropriate chamber(s).",
    oe:[
      "AEC is not simply a pre-set mAs timer — it dynamically terminates the exposure based on actual radiation reaching the detector, not a fixed mAs value.",
      "Correct. The chamber measures radiation reaching the IR. When enough signal accumulates, the exposure ends — accommodating varying patient thicknesses automatically.",
      "kVp is set by the radiographer and doesn't change during an exposure to trigger termination.",
      "The fluoroscopy cumulative timer alarm is an independent safety feature unrelated to AEC in static radiography."
    ]
  },

  // ──────────────────────── PROCEDURES ────────────────────────

  { cat:"Procedures", sub:"Chest",
    q:"The standard PA chest radiograph is performed at which source-to-image distance (SID)?",
    opts:["40 inches (102 cm)","56 inches (142 cm)","72 inches (183 cm)","48 inches (122 cm)"],
    a:2,
    exp:"72-inch SID for PA chest minimizes cardiac magnification (the heart is anterior, away from the IR). Long SID = more parallel beam paths = less geometric unsharpness. This is a non-negotiable standard positioning parameter.",
    oe:[
      "40 inches is the standard SID for most tabletop and Bucky work. Using 40 inches for a chest radiograph would magnify the heart and reduce sharpness.",
      "56 inches is not a standard chest SID. Some departments use 60 inches, but 72 inches is the established standard.",
      "Correct. 72 inches (183 cm) — the long SID minimizes heart magnification and produces the sharpest chest image.",
      "48 inches is too short for chest radiography; it would produce significant cardiac magnification and poor pulmonary detail."
    ]
  },

  { cat:"Procedures", sub:"Chest",
    q:"For a lateral decubitus chest radiograph, this projection is primarily ordered to demonstrate:",
    opts:["Pneumothorax (air in the pleural space)","Free pleural fluid in the pleural space","Hilar adenopathy","Pulmonary nodules"],
    a:1,
    exp:"Lateral decubitus (affected side down): free fluid pools along the dependent lateral chest wall under gravity, making even small effusions visible as a layering density along the dependent chest wall.",
    oe:[
      "Pneumothorax is demonstrated on the lateral decubitus with the affected side UP (air rises to the non-dependent side). This is a separate indication.",
      "Correct. Free pleural fluid demonstrates on decubitus with the affected side DOWN. Fluid layers along the dependent wall, quantifiable and distinct.",
      "Hilar adenopathy is assessed on PA/lateral erect views or CT — the decubitus position adds no advantage for hilar evaluation.",
      "Pulmonary nodules are evaluated on PA/lateral or CT. A decubitus view doesn't improve nodule detection."
    ]
  },

  { cat:"Procedures", sub:"Abdomen",
    q:"Free intraperitoneal air (pneumoperitoneum) is best demonstrated on:",
    opts:["AP supine abdomen","AP erect abdomen only","Erect PA chest radiograph","Left lateral decubitus abdomen"],
    a:2,
    exp:"An erect PA chest radiograph shows free subdiaphragmatic air most clearly — even a very small volume of free air (as little as 1 cc) appears as a crescentic lucency under the diaphragm. It also provides better lung visualization.",
    oe:[
      "AP supine abdomen: free air rises to the anterior abdomen and is difficult to see against overlying gas in the bowel and liver.",
      "AP erect abdomen can show free air under the diaphragm but is less sensitive than a PA chest view due to technical factors.",
      "Correct. Erect PA chest is most sensitive for pneumoperitoneum. The patient must be erect for at least 5–10 minutes before exposure for air to rise.",
      "Left lateral decubitus (right side up): can detect free air if the patient cannot stand erect, but the PA chest is preferred when possible."
    ]
  },

  { cat:"Procedures", sub:"Upper Extremity",
    q:"The PA projection with ulnar deviation of the wrist is performed primarily to demonstrate:",
    opts:["The distal radius and ulnar styloid","The scaphoid without foreshortening","Carpal tunnel anatomy","The hook of the hamate"],
    a:1,
    exp:"PA with ulnar deviation (Stecher method): pulls the scaphoid out from under the radius, reducing foreshortening and opening the joint spaces. This is the best view for suspected scaphoid fractures.",
    oe:[
      "The distal radius and ulnar styloid are well-demonstrated on a routine PA wrist projection without special positioning.",
      "Correct. Ulnar deviation elongates and 'opens up' the scaphoid, making fractures visible that would be hidden on a neutral PA view.",
      "Carpal tunnel views (tangential/axial projections) are used to demonstrate the carpal tunnel — a completely different positioning technique.",
      "The hook of the hamate is shown on a carpal tunnel (axial) view or a supinated oblique view, not ulnar deviation."
    ]
  },

  { cat:"Procedures", sub:"Lower Extremity",
    q:"The tunnel view (Camp-Coventry method) of the knee is performed to demonstrate:",
    opts:["The patella in axial projection","The intercondylar fossa of the femur","The head of the fibula","The lateral tibial plateau"],
    a:1,
    exp:"Tunnel view: PA axial projection, knee flexed 40–50°, CR angled 40–45° caudad through the knee joint. Opens the intercondylar fossa to show loose bodies, osteochondral defects, and cruciate ligament attachment sites.",
    oe:[
      "The patella in axial projection is shown on the sunrise/Merchant view (axial patella), not the tunnel view.",
      "Correct. The tunnel/notch view specifically opens the intercondylar fossa, which is closed on AP/lateral views. Essential for detecting loose bodies in the posterior knee.",
      "The head of the fibula is visible on standard AP and lateral knee views. No special axial view is needed.",
      "The lateral tibial plateau is assessed on oblique or AP weight-bearing views, not the tunnel view."
    ]
  },

  { cat:"Procedures", sub:"Spine",
    q:"Oblique projections (45°) of the lumbar spine are performed primarily to demonstrate:",
    opts:["Vertebral body height and alignment","The zygapophyseal (facet) joints","The intervertebral disc spaces","The spinous processes in profile"],
    a:1,
    exp:"Oblique lumbar spine: 45° oblique positions project the zygapophyseal joints into profile. The classic 'Scottie dog' appearance: ear = superior articular process; eye = pedicle; neck = pars interarticularis; body = lamina.",
    oe:[
      "Vertebral body height and alignment are best assessed on AP and lateral views, which provide a true frontal and sagittal perspective.",
      "Correct. 45° oblique = facet joints in profile. Spondylolysis (pars defect) appears as a 'collar on the Scottie dog's neck' on oblique views.",
      "Intervertebral disc spaces are best evaluated on lateral projections, where the disc height can be measured accurately.",
      "Spinous processes in profile are shown on the AP projection (end-on) and lateral projection — not on oblique views."
    ]
  },

  { cat:"Procedures", sub:"Spine",
    q:"For the open-mouth (odontoid) projection of the cervical spine, the patient's position and central ray are:",
    opts:["CR angled 15° cephalad to C4 with mouth closed","Mouth open wide; CR perpendicular to the IR through the open mouth to C1-C2","CR angled 10° caudad to C3 with neutral head position","Lateral recumbent; CR perpendicular to C2"],
    a:1,
    exp:"Open-mouth (Waters/odontoid) view: patient opens mouth wide, CR passes through the open mouth perpendicular to the IR. This is the ONLY standard projection that directly visualizes the dens (odontoid process) of C2 and the atlas (C1).",
    oe:[
      "Angling 15° cephalad to C4 with mouth closed describes the AP axial cervical spine — used to demonstrate C3–C7, not C1–C2.",
      "Correct. Mouth open + perpendicular CR through the oral cavity = clear view of C1-C2 unobstructed by teeth and mandible.",
      "Angling 10° caudad to C3 is not a standard cervical projection. Caudal angles are used for some oblique cervical views.",
      "A lateral view shows C1–C7 but does not isolate the dens. The open-mouth view is specifically for the odontoid process in AP projection."
    ]
  },

  { cat:"Procedures", sub:"Skull",
    q:"The Waters projection of the facial bones is best used to demonstrate:",
    opts:["Frontal sinuses and anterior ethmoid air cells","Maxillary sinuses and orbital floors","Sphenoid sinuses and sella turcica","Mastoid air cells and internal auditory canals"],
    a:1,
    exp:"Waters (PA axial, 37° MML angulation): projects the petrous ridges BELOW the maxillary sinuses, giving an unobstructed view of the maxillary sinuses and the orbital floors (evaluation for blowout fractures).",
    oe:[
      "Frontal sinuses and anterior ethmoid cells are shown on the Caldwell projection (15° caudad angulation), which projects the petrosa into the lower third of the orbits.",
      "Correct. Waters = maxillary sinuses + orbital floors. The tilted head angle lifts the petrous ridges out of the maxillary sinus fields.",
      "Sphenoid sinuses and sella are best shown on a lateral skull projection or a Haas/Towne projection. The Waters does not reach the sella.",
      "Mastoids and internal auditory canals require specialized projections (Stenvers, Arcelin, modified Law) — not the Waters projection."
    ]
  },

  { cat:"Procedures", sub:"Pelvis/Hip",
    q:"For an AP projection of the pelvis, the lower limbs are internally rotated 15–20° to:",
    opts:["Show the greater trochanters in profile","Place the femoral necks parallel to the IR for true length demonstration","Reduce magnification of the acetabula","Open the SI (sacroiliac) joints"],
    a:1,
    exp:"Internal rotation 15–20°: counteracts the natural anteversion (forward tilt) of the femoral neck, placing the neck parallel to the IR. Without this, the neck is foreshortened and the lesser trochanter is hidden.",
    oe:[
      "Internal rotation actually HIDES the greater trochanters by rotating them posteriorly. External rotation would profile the greater trochanters.",
      "Correct. Femoral necks are anteverted ~15–20° from the coronal plane. Internal rotation compensates for this, showing the neck in its true length.",
      "Acetabular magnification is not affected by limb rotation; it's determined by SID and the hip-to-IR distance.",
      "SI joints are evaluated on AP pelvis and oblique views, but limb rotation doesn't change SI joint visualization."
    ]
  },

  { cat:"Procedures", sub:"GI Studies",
    q:"During an upper GI (UGI) series, the right posterior oblique (RPO) position best demonstrates:",
    opts:["The fundus of the stomach filled with barium","The pyloric canal and duodenal bulb filled with barium","The lesser curvature of the stomach","The esophagus as it enters the stomach"],
    a:1,
    exp:"RPO position (35–45°): rotates the stomach to profile the pyloric canal, pylorus, and the C-loop of the duodenum. This is the primary position for evaluating the duodenal bulb for ulcers.",
    oe:[
      "The fundus fills with air (not barium) in RPO position because air rises when the patient is semi-erect. The fundus is best shown in RAO or PA position.",
      "Correct. RPO 35–45° profiles the pylorus and duodenal bulb — the most important UGI position for detecting duodenal ulcers.",
      "The lesser curvature is profiled on the RAO (right anterior oblique) position, not the RPO.",
      "The gastroesophageal junction and esophagus are shown on RAO or right lateral projections — not the RPO."
    ]
  },

  { cat:"Procedures", sub:"Trauma",
    q:"When imaging a trauma patient with suspected cervical spine injury, which projection is performed FIRST?",
    opts:["AP open-mouth odontoid view","Bilateral oblique projections","Cross-table lateral (horizontal beam) projection","Flexion-extension views"],
    a:2,
    exp:"Cross-table lateral: performed first WITHOUT moving the patient. All 7 cervical vertebrae (C1–C7) must be visible. The patient is NOT repositioned until fracture/instability has been ruled out by the radiologist or clinician.",
    oe:[
      "The open-mouth odontoid view requires patient cooperation (mouth opening) and slight head repositioning — not done until the lateral is cleared.",
      "Oblique projections require patient movement and are done last in the trauma series after the AP and lateral are cleared.",
      "Correct. Cross-table horizontal beam lateral is the first priority. It shows alignment and obvious fractures without moving the patient.",
      "Flexion-extension views are NEVER done on an acute trauma patient — they carry serious risk of cord injury if instability is present."
    ]
  },

  { cat:"Procedures", sub:"Pediatrics",
    q:"The most important technical consideration when radiographing pediatric patients is:",
    opts:["Using higher mAs to compensate for anticipated patient motion","Using lower kVp to increase contrast and improve detail","Using the shortest possible exposure time combined with immobilization and collimation","Using higher kVp and longer exposure time for better penetration"],
    a:2,
    exp:"Pediatric radiography priority: short exposure time freezes motion; proper immobilization; tight collimation limits field size and dose; gonadal shielding when not in the field. All technical choices should minimize radiation dose (ALARA).",
    oe:[
      "Higher mAs increases radiation dose and doesn't by itself freeze motion. Short exposure times — controlled by ms setting — are needed to freeze motion.",
      "Lower kVp increases patient dose because more photons are absorbed photoelectrically. Appropriate kVp is used with the shortest exposure time.",
      "Correct. Short exposure time = frozen motion. Immobilization reduces repeat exposures. Tight collimation limits dose to the area of interest.",
      "Higher kVp improves penetration but longer exposure time would blur motion. The priority is always the shortest possible exposure time in pediatrics."
    ]
  },

  // ──────────────────────── PATIENT CARE (BATCH 2) ────────────────────────

  { cat:"Patient Care", sub:"Emergency Care",
    q:"A patient experiencing insulin shock (hypoglycemia) will most likely present with:",
    opts:["Slow onset, deep breathing (Kussmaul respirations), and fruity breath odor","Rapid onset, shakiness, diaphoresis, confusion, and pale skin","Gradual onset with polyuria, polydipsia, and warm dry skin","Chest pain, shortness of breath, and nausea"],
    a:1,
    exp:"Hypoglycemia (insulin shock): blood sugar drops too low. Onset is rapid because the brain is immediately deprived of glucose. Signs: shakiness, diaphoresis (sweating), confusion, pallor, tachycardia. Untreated can lead to seizure or unconsciousness.",
    oe:[
      "Slow onset, Kussmaul respirations, and fruity breath describe diabetic ketoacidosis (DKA / hyperglycemic coma) — HIGH blood sugar, not low.",
      "Correct. Rapid onset diaphoresis, shakiness, and confusion = hypoglycemia. The brain lacks glucose and the sympathetic system fires trying to compensate.",
      "Gradual onset with polyuria and polydipsia describes hyperglycemia (too much blood sugar), not insulin shock.",
      "Chest pain and shortness of breath suggest cardiac or pulmonary emergency — not the classic presentation of hypoglycemia."
    ]
  },

  { cat:"Patient Care", sub:"Emergency Care",
    q:"A patient suddenly loses consciousness and has no pulse. After calling for help, the radiographer's next action should be:",
    opts:["Begin rescue breathing only","Apply the AED and shock the patient immediately","Begin high-quality chest compressions at a rate of 100–120 per minute","Place the patient in the recovery position and await the code team"],
    a:2,
    exp:"Current AHA guidelines: C-A-B (Compressions-Airway-Breathing). Begin chest compressions immediately at 100–120/min, depth ≥2 inches, allowing full chest recoil. Do not delay compressions waiting for an AED or breathing assessment.",
    oe:[
      "Rescue breathing alone is not recommended without compressions. Current guidelines prioritize compressions as the highest priority intervention.",
      "AED application is important but should not delay starting CPR. Compressions begin immediately while the AED is retrieved and attached.",
      "Correct. Hard and fast compressions maintain cardiac output until the code team arrives. Rate: 100–120/min; depth: ≥2 inches; allow full chest recoil.",
      "Recovery position is for unconscious patients who ARE breathing. A pulseless patient requires CPR — not the recovery position."
    ]
  },

  { cat:"Patient Care", sub:"Emergency Care",
    q:"Vasovagal syncope (fainting) is best managed by:",
    opts:["Elevating the patient's head and giving oxygen","Placing the patient in the Trendelenburg position (feet elevated above heart)","Calling a code and initiating chest compressions","Administering epinephrine immediately"],
    a:1,
    exp:"Vasovagal syncope results from a sudden drop in heart rate and blood pressure. Trendelenburg (supine, feet elevated 15–30°) increases venous return to the heart and brain, restoring perfusion rapidly. Monitor and reassure.",
    oe:[
      "Elevating the head would worsen cerebral perfusion by further lowering blood pressure to the brain. The opposite is needed.",
      "Correct. Trendelenburg = gravity assists venous return to heart and brain. Most patients recover quickly in this position.",
      "A code is only called for pulseless/apneic patients. Vasovagal syncope has a pulse — just temporarily inadequate perfusion.",
      "Epinephrine is for anaphylaxis, not vasovagal syncope. It would be inappropriate and dangerous here."
    ]
  },

  { cat:"Patient Care", sub:"Pharmacology",
    q:"The most serious type of contrast reaction, requiring immediate epinephrine, is:",
    opts:["Mild: sneezing, flushing, urticaria (hives)","Moderate: bronchospasm, facial edema, hypotension","Severe: laryngeal edema, anaphylactic shock, loss of consciousness","Delayed: nausea, vomiting occurring more than 1 hour post-injection"],
    a:2,
    exp:"Severe (anaphylactoid) reactions involve cardiovascular collapse, laryngeal edema causing airway obstruction, and loss of consciousness. Epinephrine 1:1,000 (0.3–0.5 mL IM) is the first-line treatment.",
    oe:[
      "Mild reactions (sneezing, hives, flushing) are self-limiting and treated with observation and antihistamines — epinephrine is not required.",
      "Moderate reactions (bronchospasm, facial edema) are treated with oxygen, bronchodilators, and possibly epinephrine depending on severity.",
      "Correct. Severe anaphylaxis with airway compromise and shock is life-threatening. Epinephrine, oxygen, and IV fluids are the immediate treatments.",
      "Delayed reactions (nausea, vomiting hours later) are not anaphylaxis — they are managed symptomatically and are rarely life-threatening."
    ]
  },

  { cat:"Patient Care", sub:"Pharmacology",
    q:"IV contrast extravasation (infiltration) into surrounding tissue is most safely managed by:",
    opts:["Applying heat immediately to promote absorption","Applying a cold compress, elevating the extremity, and notifying the radiologist","Massaging the site vigorously to disperse the contrast","Continuing the injection at a reduced rate"],
    a:1,
    exp:"Extravasation management: STOP the injection, remove the IV catheter, elevate the extremity to reduce swelling, apply cold compress to minimize tissue damage, and notify the radiologist. Document the amount extravasated and appearance of the site.",
    oe:[
      "Heat increases blood flow and could worsen tissue damage by promoting inflammation around the extravasated contrast material.",
      "Correct. Cold compress causes vasoconstriction, limiting spread. Elevation reduces edema. Radiologist notification is mandatory for documentation and follow-up.",
      "Massaging the site disperses contrast into a wider tissue area, potentially worsening tissue injury.",
      "Continuing the injection after extravasation is detected would worsen the extravasation and tissue damage."
    ]
  },

  { cat:"Patient Care", sub:"Legal & Ethics",
    q:"Under HIPAA, the minimum necessary standard requires that:",
    opts:["All patient information must be shared with the entire care team","Only the minimum amount of PHI (protected health information) necessary to accomplish a task should be used or disclosed","All imaging reports must be verbally communicated to the patient","Patient records must be deleted after 5 years"],
    a:1,
    exp:"HIPAA's minimum necessary standard: limit the use, disclosure, and request for PHI to only what is needed for the specific purpose. Radiographers should not share patient information beyond what is clinically necessary.",
    oe:[
      "Sharing all information with the entire care team violates the minimum necessary standard unless all team members have a need-to-know for that specific information.",
      "Correct. Minimum necessary = use only what is needed. This limits incidental exposure of PHI and protects patient privacy.",
      "HIPAA does not require verbal communication of reports to patients. Patients do have a right to access their records, but verbal communication is not mandated.",
      "HIPAA does not set a 5-year deletion requirement. Medical records retention is governed by state laws and varies by record type."
    ]
  },

  { cat:"Patient Care", sub:"Legal & Ethics",
    q:"Which statement best describes a patient's right to refuse radiographic examination?",
    opts:["A competent adult may refuse any examination, even if it could harm their health","Patients may only refuse optional (elective) procedures, not diagnostic studies","A physician can override a patient's refusal in emergencies","Refusal is only valid if the patient signs a specific legal form"],
    a:0,
    exp:"Competent adults have the absolute right to refuse any medical treatment or diagnostic procedure, even one necessary to preserve life. The radiographer must stop, document the refusal, and notify the referring physician.",
    oe:[
      "Correct. Autonomy is a fundamental patient right. A competent adult can refuse ANY procedure regardless of medical necessity.",
      "There is no distinction between elective and diagnostic studies for the right to refuse. All procedures require patient consent.",
      "Even in emergencies, a competent adult's refusal must be respected. Implied consent only applies when the patient is unable to communicate.",
      "Refusal can be verbal. While a signed refusal form is good documentation practice, the refusal itself is valid whether or not a form is signed."
    ]
  },

  { cat:"Patient Care", sub:"Infection Control",
    q:"Surgical aseptic technique requires that:",
    opts:["Gloves must be worn but a mask is optional","All items in and around the sterile field are considered sterile unless contaminated","Once a sterile package is opened, it remains sterile indefinitely if kept dry","A sterile field may be left unattended briefly if covered with a sterile drape"],
    a:1,
    exp:"Surgical asepsis: once established, everything within and immediately around the sterile field is considered sterile. Any breach — reaching across, unknown contact, moisture, or leaving unattended — contaminates the field.",
    oe:[
      "In surgical asepsis, mask, gown, and gloves are ALL required. A mask is not optional because oral/nasal droplets can contaminate the sterile field.",
      "Correct. The entire sterile field and its immediate surroundings are treated as sterile — doubt = contaminated.",
      "A sterile package or field does NOT remain sterile indefinitely. It can become compromised by time, moisture, or packaging damage.",
      "A sterile field must NEVER be left unattended, even briefly. Unobserved, it can be contaminated by air currents, insects, or unnoticed contact."
    ]
  },

  { cat:"Patient Care", sub:"Emergency Care",
    q:"Normal adult vital signs include all of the following EXCEPT:",
    opts:["Blood pressure: 120/80 mmHg","Pulse: 60–100 beats per minute","Respiratory rate: 12–20 breaths per minute","Temperature: 38.6°C (101.5°F)"],
    a:3,
    exp:"Normal adult temp = 37°C (98.6°F). Temperature of 38.6°C (101.5°F) is a fever. Normal ranges: BP 120/80, pulse 60–100 bpm, respirations 12–20/min, temp 36.5–37.5°C.",
    oe:[
      "120/80 mmHg is the classic normal blood pressure. Values up to 130/80 are now considered normal by current ACC/AHA guidelines.",
      "60–100 beats per minute is the normal adult resting heart rate. Below 60 = bradycardia; above 100 = tachycardia.",
      "12–20 breaths per minute is the normal adult respiratory rate. Below 12 = bradypnea; above 20 = tachypnea.",
      "Correct. 38.6°C (101.5°F) is a fever. Normal body temperature is approximately 37°C (98.6°F). This is an abnormal vital sign."
    ]
  },

  { cat:"Patient Care", sub:"Patient Transfer",
    q:"When assisting a patient from a wheelchair to the radiographic table, the wheelchair should be:",
    opts:["Placed parallel to the table at 90 degrees","Placed at a 45-degree angle to the table with the wheels locked","Positioned behind the patient throughout the transfer","Left at the foot of the table to maximize the patient's walking distance"],
    a:1,
    exp:"Wheelchair at 45° to the table with brakes locked: provides the shortest pivot distance, keeps the patient stable, allows natural body mechanics for both patient and radiographer. The patient pivots rather than side-steps.",
    oe:[
      "90° parallel placement requires the patient to side-step or pivot awkwardly over a long arc, increasing fall risk.",
      "Correct. 45° angle = shortest pivot path. Wheels MUST be locked before the patient attempts to stand.",
      "Placing the wheelchair behind the patient creates a fall hazard — the patient cannot use it for support during the transfer.",
      "Maximizing walking distance increases fall risk for patients who may be weak or unsteady. The 45° position minimizes ambulation needed."
    ]
  },

  { cat:"Patient Care", sub:"Communication",
    q:"When communicating with a hearing-impaired patient, the radiographer should:",
    opts:["Speak very loudly and exaggerate lip movements for emphasis","Face the patient, speak clearly at a normal pace, and use written materials or gestures as needed","Rely entirely on family members to interpret all communications","Avoid using sign language or written notes as they may embarrass the patient"],
    a:1,
    exp:"Best practice: face the patient (lip reading), speak clearly at normal pace (not slower — distorts lip movements), use visual aids, written notes, or professional interpreter if needed. Never exclude the patient from communication.",
    oe:[
      "Speaking very loudly and exaggerating lip movements actually distorts natural lip movements and makes lip-reading harder, not easier.",
      "Correct. Face the patient for lip-reading, clear speech at normal pace, and visual/written supplements are all appropriate strategies.",
      "Family members should not be primary interpreters — they may omit, alter, or misinterpret information, and privacy is compromised.",
      "Written notes and non-verbal communication are valuable tools and are never embarrassing — they demonstrate respect for the patient."
    ]
  },

  { cat:"Patient Care", sub:"Pharmacology",
    q:"Which medication route has the fastest onset of action?",
    opts:["Oral (PO)","Intramuscular (IM)","Subcutaneous (SC)","Intravenous (IV)"],
    a:3,
    exp:"IV administration delivers medication directly into the bloodstream — onset is immediate (seconds to minutes). IM and SC routes require absorption through tissue. Oral requires GI absorption and first-pass metabolism (slowest).",
    oe:[
      "Oral medications must be absorbed through the GI tract and undergo first-pass liver metabolism before reaching systemic circulation — the slowest route.",
      "IM injection is absorbed through muscle capillaries — faster than oral or SC, but minutes slower than IV.",
      "Subcutaneous injection is absorbed through subcutaneous capillaries — slower than IM due to less vascularity.",
      "Correct. IV = into the vein = directly into circulation = immediate onset. This is why emergencies use IV epinephrine and IV fluids."
    ]
  },

  { cat:"Patient Care", sub:"Scheduling",
    q:"For which condition is barium sulfate orally administered CONTRAINDICATED?",
    opts:["Gastric ulcer","Suspected bowel perforation or esophageal tear","Irritable bowel syndrome","Constipation"],
    a:1,
    exp:"Barium sulfate is contraindicated when bowel perforation is suspected because barium leaking into the peritoneal cavity causes severe peritonitis. In these cases, water-soluble contrast agents (e.g., Gastrografin/diatrizoate) are used instead.",
    oe:[
      "Gastric ulcers are not a contraindication to barium — they may actually be demonstrated by a UGI barium study.",
      "Correct. Barium in the peritoneal cavity causes life-threatening barium peritonitis. Use water-soluble contrast if perforation is possible.",
      "IBS is not a contraindication to barium. A barium enema may be performed to evaluate colon anatomy.",
      "Constipation may actually be caused by barium retention but is not a contraindication to administration of barium."
    ]
  },

  // ──────────────────────── SAFETY (BATCH 2) ────────────────────────

  { cat:"Safety", sub:"Radiation Units",
    q:"The traditional (non-SI) unit for measuring radiation exposure in air is:",
    opts:["Rad","Rem","Roentgen (R)","Curie (Ci)"],
    a:2,
    exp:"Roentgen (R) measures ionization produced in air by x- or gamma radiation. The SI replacement is C/kg (coulombs per kilogram). 1 R ≈ 2.58 × 10⁻⁴ C/kg.",
    oe:[
      "Rad (radiation absorbed dose) measures absorbed dose in tissue — the traditional unit replaced by the Gray (Gy). 1 rad = 0.01 Gy.",
      "Rem (roentgen equivalent man) measures effective/equivalent dose — the traditional unit replaced by the Sievert (Sv). 1 rem = 0.01 Sv.",
      "Correct. Roentgen = ionization in air. It is the traditional exposure unit. 1 R ≈ 1 rad ≈ 1 rem for x-ray and gamma radiation in tissue.",
      "Curie (Ci) measures radioactivity (disintegrations per second) — the traditional unit replaced by the Becquerel (Bq). 1 Ci = 3.7 × 10¹⁰ Bq."
    ]
  },

  { cat:"Safety", sub:"Dose Limits",
    q:"The annual occupational equivalent dose limit for the lens of the eye is:",
    opts:["5 mSv","15 mSv","50 mSv","150 mSv"],
    a:3,
    exp:"NCRP #116 lens of eye limit: 150 mSv/year occupational. The lens is more sensitive than skin but less sensitive than gonads/red marrow. (Recent ICRP 2011 revised it downward to 20 mSv/year; NCRP has not yet adopted this.)",
    oe:[
      "5 mSv is the annual dose limit for the general public (frequent exposure). Not the occupational lens limit.",
      "15 mSv is not a standard NCRP dose limit value. Avoid confusing with the 15% kVp rule.",
      "50 mSv/year is the occupational WHOLE-BODY effective dose limit — not the specific lens limit.",
      "Correct. 150 mSv/year for the lens of the eye (NCRP #116). This is higher than the whole-body limit because the lens is a less critical organ in terms of systemic risk."
    ]
  },

  { cat:"Safety", sub:"Dose Limits",
    q:"The annual occupational equivalent dose limit for the extremities (hands, forearms, feet) is:",
    opts:["50 mSv","150 mSv","250 mSv","500 mSv"],
    a:3,
    exp:"NCRP #116: extremity limit = 500 mSv/year. Extremities are relatively radioresistant and do not contain critical organs, allowing a higher limit. This is 10× the whole-body limit.",
    oe:[
      "50 mSv is the whole-body effective dose limit — not the extremity limit.",
      "150 mSv is the lens of the eye limit — not the extremity limit.",
      "250 mSv is not a standard NCRP dose limit value for extremities.",
      "Correct. Extremity limit = 500 mSv/year. The higher limit reflects the lower radiation sensitivity of extremity tissues versus radiosensitive organs."
    ]
  },

  { cat:"Safety", sub:"Dose Limits",
    q:"The annual effective dose limit for members of the general public (frequent exposure) is:",
    opts:["1 mSv","5 mSv","10 mSv","50 mSv"],
    a:1,
    exp:"NCRP #116: general public frequent exposure = 1 mSv/year. Infrequent exposure = 5 mSv/year. The public limit is lower than occupational because the public includes more vulnerable groups (children, elderly, pregnant) and they receive no compensation for radiation risk.",
    oe:[
      "1 mSv is actually the ICRP recommendation for frequent public exposure, but NCRP sets the U.S. standard at 1 mSv as well — this IS correct per NCRP #116.",
      "Correct. 1 mSv/year for frequent public exposure (NCRP #116). This is 50× lower than the occupational whole-body limit.",
      "10 mSv is not a standard NCRP general-public dose limit value.",
      "50 mSv is the occupational whole-body effective dose limit — never the public limit."
    ]
  },

  { cat:"Safety", sub:"Radiation Physics",
    q:"The half-value layer (HVL) is defined as:",
    opts:["The thickness of material that reduces beam intensity by one-quarter","The thickness of material that reduces beam intensity by one-half","The thickness of lead required to stop all x-ray photons","The distance at which beam intensity drops to half due to the inverse square law"],
    a:1,
    exp:"HVL = the thickness of a specific material (often aluminum or lead) that reduces beam intensity (or exposure rate) to 50% of its original value. HVL is used to evaluate beam quality: higher kVp = greater penetration = larger HVL.",
    oe:[
      "Reducing by one-quarter would require TWO half-value layers (each HVL reduces by half: 100% → 50% → 25%).",
      "Correct. HVL = thickness reducing intensity to 50%. After 2 HVLs → 25%; after 3 HVLs → 12.5%, etc.",
      "No practical material stops ALL photons — attenuation follows an exponential relationship. Complete absorption is theoretical.",
      "Intensity drop due to distance is described by the inverse square law — a completely different concept from HVL."
    ]
  },

  { cat:"Safety", sub:"Radiation Physics",
    q:"Coherent (classical/Rayleigh) scatter differs from Compton scatter in that coherent scatter:",
    opts:["Ejects an outer-shell electron and produces ionization","Involves the photoelectric absorption of the incident photon","Does NOT cause ionization; the photon is deflected with no energy loss","Produces a pair of electron and positron particles"],
    a:2,
    exp:"Coherent scatter: the photon interacts with an atom and sets the entire atom vibrating; the photon re-emits in a different direction with essentially the SAME energy. No ionization occurs and no energy is transferred to tissue. Negligible in diagnostic imaging.",
    oe:[
      "Ejecting an outer-shell electron with ionization describes Compton scatter. Coherent scatter involves no electron ejection.",
      "Complete absorption of the photon describes the photoelectric effect. In coherent scatter, the photon is not absorbed.",
      "Correct. Coherent scatter = elastic scatter. The photon bounces off with no energy loss and no ionization. It contributes minimally to scatter fog.",
      "Electron-positron pair production requires photon energies > 1.02 MeV and has nothing to do with coherent scatter."
    ]
  },

  { cat:"Safety", sub:"Radiation Protection",
    q:"A primary protective barrier must be able to attenuate the unattenuated primary beam. The minimum required lead equivalency for a primary barrier in a radiographic room is typically:",
    opts:["0.25 mm Pb","1/16 inch Pb","1/8 inch Pb (approximately 1.5–2 mm Pb)","5 mm Pb"],
    a:2,
    exp:"Primary barriers (walls struck by the primary beam) require approximately 1/16 inch (1.5–2 mm) lead equivalent shielding per NCRP #49 and #147. Secondary barriers (scatter/leakage) require less: ~1/32 inch (0.8 mm Pb).",
    oe:[
      "0.25 mm Pb is insufficient for a primary barrier — this is closer to lead apron equivalency for diagnostic x-ray levels.",
      "1/16 inch Pb is actually the correct thickness — this is the same as approximately 1.5 mm Pb. (Note: option C describes 1/8 inch which is the next level up.)",
      "Correct. 1/8 inch lead (≈1.5–2 mm Pb) is the typical primary barrier requirement for standard radiographic rooms per NCRP guidelines.",
      "5 mm Pb greatly exceeds typical requirements for diagnostic radiography and would be used in high-energy therapy facilities."
    ]
  },

  { cat:"Safety", sub:"Radiobiology",
    q:"LD 50/30 refers to:",
    opts:["The dose at which 50% of exposed individuals develop radiation-induced cancer within 30 years","The lethal dose that causes 50% mortality within 30 days","The dose limiting 50% of radiation to 30 days after exposure","The cumulative dose allowed over 30 years of occupational exposure"],
    a:1,
    exp:"LD 50/30: the radiation dose that causes 50% of an exposed population to die within 30 days. For humans: approximately 3.5–4.5 Gy (350–450 rad) to the whole body. This falls in the hematopoietic syndrome dose range.",
    oe:[
      "Cancer development probability describes a stochastic effect — not the LD 50/30, which refers to acute lethality within 30 days.",
      "Correct. Lethal Dose 50/30 = the dose at which 50% of irradiated individuals die within 30 days. For humans: ~3.5–4.5 Gy whole body.",
      "This interpretation reverses the meaning — LD 50/30 is not about limiting doses or time periods for exposure.",
      "Occupational cumulative dose is governed by the formula Age × 10 mSv — entirely different from LD 50/30."
    ]
  },

  { cat:"Safety", sub:"Radiobiology",
    q:"The organ that is considered MOST radiosensitive among the following options is:",
    opts:["Brain","Liver","Bone marrow (hematopoietic cells)","Muscle"],
    a:2,
    exp:"Bone marrow (hematopoietic stem cells) is among the most radiosensitive tissues because these cells are rapidly dividing, undifferentiated, and maintain blood cell production. Muscles, brain, and liver are comparatively radioresistant.",
    oe:[
      "Brain cells are highly differentiated, non-dividing neurons — making them relatively radioresistant per Bergonié and Tribondeau.",
      "Liver cells are differentiated with limited mitotic activity under normal conditions — moderately radioresistant.",
      "Correct. Hematopoietic (bone marrow) cells are rapidly dividing and undifferentiated — highly radiosensitive. This is why the hematopoietic syndrome occurs at the lowest acute dose range.",
      "Muscle cells are highly differentiated and have very low mitotic activity — among the MOST radioresistant tissues in the body."
    ]
  },

  { cat:"Safety", sub:"Radiation Protection",
    q:"Gonadal shielding should be used when the gonads are within approximately what distance from the edge of the primary beam?",
    opts:["1 cm","2 cm","5 cm","10 cm"],
    a:2,
    exp:"NCRP recommendation: use gonadal shielding when the gonads are within 5 cm (2 inches) of the primary field edge AND shielding won't obscure clinically necessary anatomy. Shielding should also be used whenever the patient is of reproductive age.",
    oe:[
      "1 cm is too restrictive — scatter reaches well beyond 1 cm. The accepted distance is 5 cm from the primary beam edge.",
      "2 cm underestimates the useful protection zone. The NCRP guideline is 5 cm (approximately 2 inches).",
      "Correct. 5 cm (≈2 inches) from the primary beam edge is the threshold for applying gonadal shielding per NCRP guidelines.",
      "10 cm is overly conservative — at that distance from the beam edge, there is minimal scatter dose to the gonads."
    ]
  },

  { cat:"Safety", sub:"Radiation Protection",
    q:"The maximum permissible leakage radiation from an x-ray tube housing is:",
    opts:["10 mR/hr at 1 meter","100 mR/hr at 1 meter","500 mR/hr at 1 meter","1000 mR/hr at 1 meter"],
    a:1,
    exp:"Federal regulations (21 CFR Part 1020) require that x-ray tube housing leakage must not exceed 100 mR/hr (1 mSv/hr) at 1 meter from the focal spot when the tube is operated at its maximum rated conditions.",
    oe:[
      "10 mR/hr is more restrictive than the federal standard. The actual limit is 100 mR/hr at 1 meter.",
      "Correct. 100 mR/hr (1 mSv/hr) at 1 meter is the maximum leakage radiation permitted from the tube housing.",
      "500 mR/hr exceeds the permissible limit by 5×. This level of leakage would indicate a defective or damaged tube housing.",
      "1000 mR/hr would be 10× the permissible limit and would represent a dangerously defective tube housing."
    ]
  },

  { cat:"Safety", sub:"Dose-Response",
    q:"Deterministic effects of radiation (formerly called non-stochastic effects) are characterized by:",
    opts:["No threshold dose; probability increases linearly with dose","A threshold dose below which no effect is observed; severity increases with dose above threshold","Random occurrence with probability proportional to dose but constant severity","Occurring only in germ cells and therefore heritable"],
    a:1,
    exp:"Deterministic (threshold) effects: erythema, cataract, epilation, gonadal suppression. A minimum dose must be reached before any effect appears. Above the threshold, severity increases with dose. Examples: cataract threshold ~500 mGy, erythema threshold ~2 Gy.",
    oe:[
      "No threshold with linear probability describes stochastic effects (cancer, genetic mutations) — not deterministic effects.",
      "Correct. Deterministic = threshold + dose-dependent severity. Below threshold: no effect. Above threshold: effect severity worsens with dose.",
      "Random occurrence with constant severity at varying doses describes stochastic effects. Deterministic effects are predictable and severity-dependent.",
      "Heritable effects in germ cells describe genetic stochastic effects — not deterministic effects, which occur in somatic tissues."
    ]
  },

  { cat:"Safety", sub:"Radiation Protection",
    q:"Which type of radiation monitoring device provides the most accurate measurement of cumulative dose and is NOT sensitive to heat and humidity?",
    opts:["Film badge","Optically stimulated luminescence (OSL) dosimeter","Pocket ionization chamber","Electronic personal dosimeter (EPD)"],
    a:1,
    exp:"OSL dosimeters (e.g., Luxel): aluminum oxide crystal stores electrons when irradiated; stimulated with laser light, emitting luminescence proportional to dose. More sensitive and accurate than film, not affected by heat/humidity, can be re-read multiple times.",
    oe:[
      "Film badges are affected by heat, humidity, and light — they can give false readings and have largely been replaced by OSL dosimeters.",
      "Correct. OSL (optically stimulated luminescence) dosimeters are accurate, durable, unaffected by environmental conditions, and can be re-analyzed if needed.",
      "Pocket ionization chambers are self-reading and immediate but less accurate for long-term cumulative dose measurement.",
      "Electronic personal dosimeters (EPDs) give real-time readouts but are used as supplemental devices — OSL remains the standard for official cumulative dosimetry."
    ]
  },

  // ──────────────────────── IMAGE PRODUCTION (BATCH 2) ────────────────────────

  { cat:"Image Production", sub:"Digital Imaging",
    q:"The exposure index (EI) in digital radiography is:",
    opts:["A measure of patient dose during the exposure","A numeric indicator of the radiation exposure reaching the image receptor","A setting the radiographer selects to control image brightness","The ratio of correct to incorrect exposures in a department"],
    a:1,
    exp:"Exposure index (EI): a numeric value generated by the DR/CR system indicating how much radiation reached the detector. Higher EI = more exposure; lower EI = less exposure. Used to evaluate whether appropriate technique was used and detect over- or underexposure.",
    oe:[
      "The EI reflects dose to the receptor, not directly to the patient — though they are correlated. Patient dose requires a separate dose indicator (DAP meter).",
      "Correct. EI = detector exposure indicator. Each manufacturer uses a different scale but the concept is universal: number reflects exposure level.",
      "Image brightness in digital radiography is controlled by post-processing algorithms — the EI measures what happened to the detector, not what the display does.",
      "The EI is a technical metric, not a quality management ratio. It applies to individual exposures, not departmental statistics."
    ]
  },

  { cat:"Image Production", sub:"Digital Imaging",
    q:"In digital imaging, window width (WW) controls:",
    opts:["Image brightness (average gray level displayed)","The range of tissue densities displayed and therefore the contrast of the image","Spatial resolution by adjusting pixel size","The total number of gray levels in the image"],
    a:1,
    exp:"Window width determines which range of CT numbers (Hounsfield units) are mapped to the visible gray scale. Narrow WW = high contrast (few shades, dramatic black/white). Wide WW = low contrast (many shades, subtle distinctions visible).",
    oe:[
      "Image brightness (average gray level) is controlled by window LEVEL (WL), not window width. WL sets the center of the density range being displayed.",
      "Correct. Window width = the contrast control. Narrow = more contrast; wide = less contrast. Analogous to scale of contrast in film radiography.",
      "Spatial resolution is determined by detector element size, matrix size, and reconstruction algorithm — not window width.",
      "The total number of gray levels is set by bit depth (e.g., 12-bit = 4,096 levels) — independent of window width settings."
    ]
  },

  { cat:"Image Production", sub:"Digital Imaging",
    q:"Computed radiography (CR) differs from direct digital radiography (DR) primarily in that CR:",
    opts:["Uses a flat-panel detector with amorphous silicon","Stores the latent image in a photostimulable phosphor (PSP) plate that must be scanned by a laser reader","Provides an immediate image without separate processing steps","Uses cesium iodide or amorphous selenium for direct image capture"],
    a:1,
    exp:"CR uses a photostimulable phosphor plate (imaging plate) that stores a latent image. The plate is removed from the cassette and inserted into a laser reader that stimulates light emission proportional to dose. DR detectors capture and display the image immediately without this intermediate step.",
    oe:[
      "Flat-panel detectors with amorphous silicon describe indirect DR systems (e.g., cesium iodide scintillator + amorphous silicon photodetector) — not CR.",
      "Correct. CR = PSP plate stores latent image → laser reader → digital image. This process requires more time and steps than DR.",
      "Immediate image without separate processing describes DR (direct digital radiography), not CR. CR requires the plate to be physically transported to the reader.",
      "Cesium iodide (CsI) and amorphous selenium (a-Se) describe DR detector materials. CR plates use barium fluorohalide (e.g., BaFBr) phosphors."
    ]
  },

  { cat:"Image Production", sub:"Digital Imaging",
    q:"Quantum mottle (quantum noise) in digital radiography is caused by:",
    opts:["Electronic noise from the detector circuitry","Too few x-ray photons reaching the detector (insufficient mAs)","Excessive scatter reaching the receptor","Software compression artifacts"],
    a:1,
    exp:"Quantum mottle = statistical noise from insufficient photons. When too few photons reach the detector, the image appears grainy/mottled because the photon distribution is statistically uneven. Increasing mAs provides more photons and reduces noise.",
    oe:[
      "Electronic noise from circuitry is a separate type of noise (electronic/thermal noise) — distinct from quantum mottle, which is photon-related.",
      "Correct. Quantum mottle = too few quanta (photons). Photons follow Poisson statistics — too few = visible statistical variation = grainy image.",
      "Excess scatter reduces contrast but creates a fog-like overall graying rather than the mottled, grainy appearance of quantum noise.",
      "Software compression artifacts appear as blocking or ringing patterns — distinctly different from the random mottled appearance of quantum noise."
    ]
  },

  { cat:"Image Production", sub:"X-ray Equipment",
    q:"Full-wave rectification in the x-ray circuit:",
    opts:["Allows only the negative half of the AC cycle to reach the tube","Converts both positive and negative halves of AC into pulsating DC, increasing x-ray output efficiency","Has no effect on x-ray output compared to half-wave rectification","Produces a constant (ripple-free) DC supply to the x-ray tube"],
    a:1,
    exp:"Full-wave (4-diode bridge) rectification converts BOTH halves of the AC sine wave into pulsating positive DC. This doubles the number of pulses per cycle (from 1 to 2 per cycle for single-phase), increasing average kV and x-ray output efficiency.",
    oe:[
      "Allowing only the negative half is a description of half-wave rectification (and the negative half is actually unused — only the positive drives the tube).",
      "Correct. Full-wave = 4 rectifiers flip the negative half cycle into positive, resulting in 2 pulses per AC cycle. More effective than half-wave (1 pulse per cycle).",
      "Full-wave rectification produces roughly DOUBLE the x-ray output of half-wave, because both halves of the AC cycle contribute to x-ray production.",
      "Ripple-free constant DC describes a 3-phase or high-frequency generator — not single-phase full-wave rectification, which still has significant ripple."
    ]
  },

  { cat:"Image Production", sub:"X-ray Equipment",
    q:"A rotating anode x-ray tube has which advantage over a stationary anode?",
    opts:["It produces less heat during exposure","It allows much higher tube currents (mA) and mAs values by distributing heat over a larger anode surface","It produces a larger focal spot for improved spatial resolution","It eliminates the need for filtration"],
    a:1,
    exp:"Rotating anode: the anode disk spins at 3,000–10,000 RPM, continuously presenting a cool anode surface to the electron beam. The effective heat load is spread over the entire anode track rather than a single fixed point.",
    oe:[
      "A rotating anode does not produce less heat — it produces the same heat but distributes it more effectively. Total heat generated = mA × kVp × time.",
      "Correct. Distributing heat over the entire rotating track allows far higher mA stations and longer exposures without exceeding anode heat capacity.",
      "A rotating anode does not inherently produce a larger focal spot. Focal spot size is determined by the filament size and anode angle, not rotation.",
      "Filtration requirements are governed by federal regulation (≥2.5 mm Al total at ≥70 kVp) and are completely unrelated to anode type."
    ]
  },

  { cat:"Image Production", sub:"X-ray Equipment",
    q:"The effective focal spot is SMALLER than the actual (true) focal spot because of:",
    opts:["The line-focus principle: the angled anode projects a smaller area toward the patient","The inverse square law reducing apparent size at greater distances","Penumbra formation at the edges of the focal spot","The space charge effect reducing electron beam size"],
    a:0,
    exp:"Line-focus principle: the anode face is angled (typically 7°–17°). This projects the actual rectangular focal spot (seen face-on) into a smaller apparent square as seen along the central ray. Smaller effective focal spot = better spatial resolution.",
    oe:[
      "Correct. The line-focus principle: angled anode + oblique projection = smaller effective focal spot. Smaller effective FS = sharper image detail.",
      "The inverse square law describes intensity changes with distance — it has no effect on the apparent size of the focal spot.",
      "Penumbra is the unsharpness zone around a projected object — it results FROM focal spot size but doesn't make the focal spot appear smaller.",
      "The space charge effect (electron cloud buildup at low mA) affects tube current, not the optical projection of the focal spot."
    ]
  },

  { cat:"Image Production", sub:"Spatial Resolution",
    q:"Modulation transfer function (MTF) is a measure of:",
    opts:["Patient dose per unit of image quality","A detector system's ability to faithfully reproduce spatial frequency information from the object","The amount of scatter produced relative to primary beam intensity","The number of pixels per centimeter in the image matrix"],
    a:1,
    exp:"MTF quantifies how well an imaging system transfers contrast at different spatial frequencies (line pairs per mm). MTF = 1.0 (perfect resolution) at 0 frequency; approaches 0 at the system's resolution limit. Higher MTF across frequencies = better image quality.",
    oe:[
      "Dose per unit image quality is described by dose efficiency or the DQE (Detective Quantum Efficiency) metric — not MTF.",
      "Correct. MTF measures resolution fidelity across spatial frequencies. A detector with high MTF reproduces fine detail accurately.",
      "Scatter to primary ratio (S/P ratio) quantifies scatter — a completely different image quality metric from MTF.",
      "Pixels per centimeter describes spatial sampling frequency (related to pixel pitch/size) — a component of MTF measurement but not the definition of MTF."
    ]
  },

  { cat:"Image Production", sub:"Grids",
    q:"Off-level grid error (grid tilt) produces which artifact?",
    opts:["Cutoff (decreased density) only on one side of the image","Uniform decrease in density across the entire image","Normal density in the center with progressive cutoff toward both sides","No visible artifact unless the tilt exceeds 45°"],
    a:1,
    exp:"Off-level (tilted) grid: the grid is angled relative to the x-ray beam, causing all lead strips to absorb primary radiation unequally across the field. Result: uniform overall decreased density (not one-sided, not central — the whole field is affected).",
    oe:[
      "One-sided cutoff is caused by off-center (lateral decentering) error — the CR is not centered over the grid, so one side receives more absorption.",
      "Correct. Tilted grid = uniformly decreased density over the entire image. This is different from lateral decentering (one-sided) or inversion (central normal with peripheral cutoff).",
      "Normal center with peripheral bilateral cutoff is caused by using an inverted focused grid — a different type of grid error.",
      "Even minor off-level errors produce a visible uniform density decrease. Significant artifacts can occur with as little as 3–5° of tilt."
    ]
  },

  { cat:"Image Production", sub:"AEC",
    q:"When using AEC, the radiographer is responsible for selecting:",
    opts:["The exposure time only","The mAs value only","The kVp, the appropriate detector cell(s), and the backup time","The exact mAs and kVp combination automatically set by the system"],
    a:2,
    exp:"With AEC, the radiographer selects: kVp (determines penetration and contrast), which ionization chamber cell(s) to activate (must be under the anatomy of interest), and a backup time (maximum mAs failsafe). The AEC controls the actual duration/mAs.",
    oe:[
      "The AEC controls exposure time automatically. The radiographer does not set exposure time when using AEC.",
      "The AEC controls mAs automatically. The radiographer sets kVp and selects which cell(s) to use.",
      "Correct. Radiographer inputs: kVp for appropriate penetration, cell selection for proper anatomy placement, backup time to prevent overexposure if AEC fails.",
      "The AEC dynamically determines exposure time/mAs based on radiation reaching the detector — the radiographer does not set these values."
    ]
  },

  { cat:"Image Production", sub:"Image Contrast",
    q:"Added filtration affects image contrast by:",
    opts:["Increasing contrast by adding more high-energy photons to the beam","Decreasing subject contrast slightly by hardening the beam and reducing the range of photon energies","Increasing contrast by removing scatter photons","Having no effect on image contrast — filtration only affects dose"],
    a:1,
    exp:"Beam hardening from filtration removes low-energy photons, making the beam more monoenergetic. A narrower energy spectrum produces slightly lower subject contrast (less differentiation between tissues) but reduces patient dose.",
    oe:[
      "Filtration REMOVES photons, not adds them. The remaining beam has fewer but higher-average-energy photons.",
      "Correct. Filtration hardens the beam → narrower spectrum → slightly reduced contrast. The trade-off is acceptable because dose reduction is the primary goal.",
      "Filtration removes low-energy primary photons from the beam before reaching the patient — it does NOT remove scatter (grids do that).",
      "Filtration does affect contrast — it's a minor secondary effect. Filtration's primary purpose is dose reduction; contrast change is an accepted consequence."
    ]
  },

  { cat:"Image Production", sub:"Exposure Factors",
    q:"Which change in exposure factors will maintain radiographic density while REDUCING patient dose the most?",
    opts:["Increase kVp by 15% and keep mAs the same","Increase kVp by 15% and reduce mAs by one-half","Double the mAs and reduce kVp by 15%","Increase SID and increase mAs proportionally"],
    a:1,
    exp:"The 15% rule + halving mAs: increasing kVp by 15% doubles receptor exposure, so halving mAs returns to the original density. Net result: same image density but mAs (and patient dose) reduced by 50%. Higher kVp also reduces photoelectric absorption, further reducing patient dose.",
    oe:[
      "Increasing kVp by 15% without reducing mAs would DOUBLE receptor exposure (overexposure). Patient dose would also increase.",
      "Correct. +15% kVp doubles exposure; ÷2 mAs halves it back. Net receptor exposure maintained, but patient dose is approximately halved.",
      "Doubling mAs and decreasing kVp by 15% maintains density but INCREASES patient dose because lower kVp causes more photoelectric absorption in tissue.",
      "Increasing SID requires mAs increase (inverse square law) to maintain density — this does not reduce patient dose."
    ]
  },

  // ──────────────────────── PROCEDURES (BATCH 2) ────────────────────────

  { cat:"Procedures", sub:"Spine",
    q:"The AP axial projection of the cervical spine uses a central ray angle of:",
    opts:["10° caudad to C4","15°–20° cephalad to C4","Perpendicular (0°) to C3","5° caudad to C2"],
    a:1,
    exp:"AP axial cervical spine: patient supine or erect; CR angled 15–20° cephalad to the level of C4. This cephalad angle opens the intervertebral disk spaces and projects the mandible superiorly, demonstrating C3–C7 clearly.",
    oe:[
      "A caudad angle would project the mandible over the cervical spine, obscuring the vertebral bodies. Cephalad angulation is required.",
      "Correct. 15–20° cephalad to C4 opens the disk spaces and clears the mandible from the field of view. C3–C7 are demonstrated.",
      "A perpendicular CR to C3 without angulation does not open the intervertebral spaces and allows the mandible to overlap C3–C4.",
      "5° caudad to C2 is incorrect — caudad angles are used for other projections (e.g., some skull projections). Cervical spine AP requires cephalad angulation."
    ]
  },

  { cat:"Procedures", sub:"Spine",
    q:"The lateral projection of the thoracic spine uses which breathing technique to improve image quality?",
    opts:["Deep inspiration and breath hold","Deep expiration and breath hold","Shallow breathing (breathing technique) during the exposure","No breathing technique is required for thoracic spine"],
    a:2,
    exp:"Breathing technique (autotomography): the patient breathes slowly and continuously during a long exposure (3–4 seconds). Lung and rib structures blur out, while the vertebrae (stationary) remain sharp. Superb for demonstrating the intervertebral disk spaces.",
    oe:[
      "Deep inspiration and breath-hold is used for chest and AP thoracic spine projections. For lateral thoracic, the breathing technique is preferred.",
      "Deep expiration and breath-hold can be used for lateral thoracic but is not preferred over the breathing technique, which blurs ribs more effectively.",
      "Correct. Breathing (motion blur) technique: during a 3–4 second exposure, ribs and lung structures blur away while stationary vertebrae remain in focus.",
      "Breathing technique is specifically recommended for lateral thoracic spine — it's one of the few projections where patient motion is deliberately used."
    ]
  },

  { cat:"Procedures", sub:"Spine",
    q:"The AP projection of the sacrum requires the central ray to be angled:",
    opts:["10° caudad","15° cephalad","20° cephalad","Perpendicular with no angle"],
    a:2,
    exp:"AP sacrum: CR angled 15° cephalad (some references say up to 20°) centered to the midpoint between the pubic symphysis and ASIS. The cephalad angle compensates for the forward tilt of the sacrum, projecting the sacral segments without superimposition.",
    oe:[
      "Caudad angulation would project the sacrum further into the pelvis and is used for coccyx projections, not the sacrum.",
      "15° cephalad is within accepted range for AP sacrum — some references use this value. 20° is also acceptable depending on patient habitus.",
      "Correct. 15°–20° cephalad for AP sacrum to compensate for the normal sacral inclination (forward tilt) in the anatomical position.",
      "A perpendicular CR would foreshorten the sacrum and cause self-superimposition of sacral segments — not appropriate for this projection."
    ]
  },

  { cat:"Procedures", sub:"Lower Extremity",
    q:"The axial (plantodorsal) projection of the calcaneus (os calcis) is performed with:",
    opts:["Patient prone, CR perpendicular to the plantar surface","Patient supine with foot dorsiflexed, CR angled 40° cephalad from the long axis of the foot","Patient lateral recumbent, CR perpendicular","Patient standing on the IR with perpendicular CR"],
    a:1,
    exp:"Calcaneus axial (plantodorsal): patient seated or supine; foot dorsiflexed 90° to the leg; CR angled 40° cephalad (toward the knee) along the long axis of the foot. This opens the subtalar joint and demonstrates the entire calcaneus in axial projection.",
    oe:[
      "Prone with perpendicular CR describes a dorsoplantar axial view — the reverse direction. The standard approach is plantodorsal (CR from the plantar surface).",
      "Correct. Foot dorsiflexed + 40° cephalad CR = plantodorsal axial view of the calcaneus. Demonstrates calcaneal fractures and the subtalar joint.",
      "Lateral recumbent with perpendicular CR gives a lateral view of the foot and calcaneus — not the axial projection.",
      "Standing on the IR with perpendicular CR is used for weight-bearing foot projections, not the axial calcaneus view."
    ]
  },

  { cat:"Procedures", sub:"Upper Extremity",
    q:"The Coyle method for the elbow is used to demonstrate the:",
    opts:["Olecranon process in profile","Radial head and coronoid process free from superimposition","Lateral epicondyle in profile","Distal humerus in AP projection"],
    a:1,
    exp:"Coyle method (acute flexion): two projections taken with the elbow acutely flexed — one CR angled toward the shoulder shows the radial head; one CR angled toward the elbow shows the coronoid process. Used when the elbow cannot be fully extended (trauma).",
    oe:[
      "The olecranon process is demonstrated on the lateral elbow projection or on a dedicated AP axial projection, not the Coyle method.",
      "Correct. The Coyle method provides two acute-flexion views that separately profile the radial head and coronoid process for trauma patients.",
      "The lateral epicondyle is shown on the AP projection of the elbow in standard positioning — not a specialized method.",
      "The distal humerus in AP projection is the routine AP elbow; no special method is needed for this structure."
    ]
  },

  { cat:"Procedures", sub:"Upper Extremity",
    q:"The Grashey method (true AP) for the shoulder joint is used to demonstrate:",
    opts:["The acromioclavicular joint space","The glenohumeral joint space in true AP projection by rotating the body 35–45° toward the affected side","The supraspinatus outlet and subcoracoid space","The coracoid process free from superimposition"],
    a:1,
    exp:"Grashey method: the patient is rotated 35–45° posterior oblique (affected side toward the IR) to place the glenoid fossa en face (face on). This eliminates the obliquity of the glenohumeral joint, opening the joint space for true AP visualization.",
    oe:[
      "Acromioclavicular joints are shown on a bilateral AP weight-bearing view using low kVp — not the Grashey method.",
      "Correct. The Grashey (true AP shoulder): rotating toward the affected side places the glenoid face-on, opening the glenohumeral joint space.",
      "The supraspinatus outlet (Neer view) uses a tangential lateral projection angled caudad — completely different from the Grashey method.",
      "The coracoid process is demonstrated on a special AP axial (AP with CR angled 30° cephalad) — not the Grashey method."
    ]
  },

  { cat:"Procedures", sub:"Upper Extremity",
    q:"The transthoracic lateral projection of the shoulder (Lawrence method) is used primarily for:",
    opts:["Evaluating the AC joint for separation","Demonstrating the proximal humerus in lateral projection when the patient cannot abduct the arm","Detecting Hill-Sachs lesions on the posterior humeral head","Visualizing the rotator cuff tendons"],
    a:1,
    exp:"Transthoracic lateral (Lawrence): patient erect, affected side against the IR, unaffected arm raised. CR passes through the thorax. Used for trauma patients who cannot raise the affected arm — shows the proximal humerus and glenohumeral relationship in lateral projection.",
    oe:[
      "AC joint separation is assessed with bilateral AP weight-bearing views — transthoracic lateral is not used for this purpose.",
      "Correct. Transthoracic lateral = proximal humerus in lateral projection without moving the injured arm. Essential for trauma positioning.",
      "Hill-Sachs lesions (posterior humeral head defect from anterior shoulder dislocation) are best seen on internal rotation AP or the Stryker notch view.",
      "Rotator cuff tendons are assessed with MRI or ultrasound — radiographs cannot directly visualize tendons."
    ]
  },

  { cat:"Procedures", sub:"Lower Extremity",
    q:"The mortise view of the ankle is obtained by:",
    opts:["Dorsiflexing the foot 90° with CR perpendicular","Internally rotating the foot/leg 15–20° with CR perpendicular to the ankle joint","Externally rotating the foot 45° with CR angled 15° cephalad","Patient weight-bearing with CR perpendicular in AP position"],
    a:1,
    exp:"Mortise view (AP oblique ankle): 15–20° internal rotation. This rotation places all three ankle joint spaces (medial, superior, lateral) in the same plane, visible simultaneously as a true mortise. Essential for evaluating ankle stability and fractures.",
    oe:[
      "Dorsiflexion with perpendicular CR is used for stress views — not the mortise projection. Dorsiflexion does not open the mortise.",
      "Correct. 15–20° internal rotation = mortise view. All three joint compartments open simultaneously. Critical for evaluating syndesmosis and joint stability.",
      "45° external rotation is used for the medial oblique foot view — not the ankle mortise. 15° internal, not external, opens the ankle mortise.",
      "Weight-bearing AP views are used for alignment studies but do not specifically demonstrate the mortise unless combined with internal rotation."
    ]
  },

  { cat:"Procedures", sub:"Lower Extremity",
    q:"An AP weight-bearing view of the foot demonstrates which clinical information not visible on a non-weight-bearing AP?",
    opts:["Fractures of the phalanges","Hallux valgus angle and longitudinal arch collapse (flat foot/pes planus)","Stress fractures of the metatarsals","Osteophyte formation on the first MTP joint"],
    a:1,
    exp:"Weight-bearing AP and lateral foot: shows the foot under physiologic stress. Hallux valgus angle, metatarsus adductus, and arch height are accurately measured only when bearing weight. Non-weight-bearing views show anatomy but not functional alignment.",
    oe:[
      "Phalangeal fractures are well-demonstrated on routine non-weight-bearing AP. Weight bearing adds no diagnostic value for acute phalangeal injury.",
      "Correct. Weight-bearing views reveal functional deformity — arch collapse, hallux valgus angulation, and metatarsal splaying that are absent or underrepresented in the non-weight-bearing position.",
      "Stress fractures are evaluated on standard AP projections or bone scan/MRI. Weight bearing does not improve fracture visualization.",
      "Osteophytes are visible on both weight-bearing and non-weight-bearing views. Weight bearing adds no specific advantage for detecting osteophytes."
    ]
  },

  { cat:"Procedures", sub:"Skull",
    q:"The Towne (Grashey) projection of the skull is primarily used to demonstrate:",
    opts:["The facial bones and orbits","The posterior cranial fossa, occipital bone, and dorsum sellae","The frontal sinuses and anterior skull","The petrous ridges and mastoid air cells in AP projection"],
    a:1,
    exp:"Towne (AP axial): patient supine or erect, OML perpendicular to IR, CR angled 30° caudad (with OML) or 37° caudad (with IOML). This projects the foramen magnum, occipital bone, posterior clinoid processes, and dorsum sellae into view.",
    oe:[
      "Facial bones and orbits are demonstrated by the Waters (PA axial) and Caldwell projections, not the Towne.",
      "Correct. Towne projection = posterior fossa. Classic for showing the occipital bone, foramen magnum, and dorsum sella through the foramen magnum.",
      "The frontal sinuses and anterior skull are shown on the Caldwell (PA axial, 15° caudad CR) projection — not the Towne.",
      "Petrous ridges in AP projection are shown in the Towne but that is a secondary finding — the primary purpose is the posterior cranial fossa and occipital bone."
    ]
  },

  { cat:"Procedures", sub:"Chest",
    q:"For an AP lordotic view of the chest, the central ray is directed:",
    opts:["15° caudad to the mid-sternum","Perpendicular with patient leaning backward (lordotic position)","15° cephalad to T6 with patient standing erect","Horizontal to demonstrate air-fluid levels"],
    a:1,
    exp:"AP lordotic: patient leans backward (arching the back) so the thorax is parallel to the IR, OR the patient stands erect with a 15° cephalad CR. The clavicles and first rib are projected above the lung apices, clearing the apex for evaluation of apical masses or middle lobe atelectasis.",
    oe:[
      "15° caudad angulation would project apices downward — the opposite of the lordotic effect needed to elevate the clavicles.",
      "Correct. Leaning backward (lordotic position) + perpendicular CR, or erect patient + cephalad CR. The clavicles are projected superiorly, clearing the lung apices.",
      "15° cephalad to T6 with erect patient is an alternate technique for the AP lordotic — this is also acceptable and achieves the same result.",
      "Horizontal CR is used for decubitus projections to demonstrate air-fluid levels or free pleural effusion — not the lordotic view."
    ]
  },

  { cat:"Procedures", sub:"Abdomen",
    q:"The AP abdomen (KUB) is used as a primary projection for all of the following EXCEPT:",
    opts:["Demonstrating kidney size, shape, and position","Identifying radiopaque renal calculi (kidney stones)","Demonstrating bowel gas distribution and obstruction","Evaluating mucosal detail of the bowel wall"],
    a:3,
    exp:"KUB (Kidney, Ureter, Bladder): provides an overview of solid organs and calcifications. Mucosal detail of the bowel wall requires contrast studies (barium enema, small bowel follow-through) or endoscopy — plain radiography cannot resolve mucosal folds without contrast.",
    oe:[
      "The KUB does show renal outlines using the perirenal fat plane — kidney size and shape are routinely assessed.",
      "Radiopaque calculi (calcium oxalate, calcium phosphate) are visible on KUB as dense opacities in the renal, ureteral, or bladder regions.",
      "Bowel gas patterns (dilated loops, air-fluid levels, free air) are classic KUB findings — used for bowel obstruction workup.",
      "Correct. Mucosal detail (rugae, haustra, villi) requires contrast material. A plain KUB cannot demonstrate bowel mucosa — that requires barium or CT."
    ]
  },

  { cat:"Procedures", sub:"GI Studies",
    q:"A double-contrast barium enema (DCBE) uses:",
    opts:["A high volume of thick barium to coat and fill the entire colon","A small amount of thick barium to coat the mucosal lining plus air insufflation to distend the colon","Barium mixed with iodinated contrast for dual visualization","A water-soluble contrast agent combined with CO₂ gas"],
    a:1,
    exp:"DCBE: dense barium coats the mucosa, then air (or CO₂) is insufflated to distend the colon. The thin barium lining + air provides excellent mucosal detail, making it superior to single-contrast BE for detecting polyps, early carcinoma, and inflammatory bowel disease changes.",
    oe:[
      "High-volume thick barium filling the entire colon describes a SINGLE-contrast barium enema — good for large lesions but poor for mucosal detail.",
      "Correct. Double-contrast = mucosal coating with dense barium + luminal distension with air. This produces the best mucosal detail for polyp detection.",
      "Barium and iodinated contrast are not mixed — they are chemically incompatible and serve different purposes.",
      "Water-soluble contrast + CO₂ is used in specific situations (suspected perforation, post-operative patients) — not the standard DCBE technique."
    ]
  },

  { cat:"Procedures", sub:"GI Studies",
    q:"During an intravenous urogram (IVU/IVP), the nephrogram phase (parenchymal blush) occurs approximately:",
    opts:["30–60 seconds after contrast injection","5–7 minutes after injection","15–20 minutes after injection","Only during the voiding phase"],
    a:0,
    exp:"IVU phases: nephrogram (parenchymal blush) 30–60 seconds post-injection as contrast fills the kidney tubules. Pyelogram phase (collecting system) 3–5 minutes. Full urogram (ureters/bladder) 5–15 minutes. Voiding cystogram at end.",
    oe:[
      "Correct. 30–60 seconds = nephrogram phase. The renal parenchyma enhances as contrast is filtered by the glomeruli and enters the tubules.",
      "5–7 minutes represents the early pyelogram/collecting system phase when contrast enters the renal pelvis and proximal ureters.",
      "15–20 minutes is the delayed phase when contrast fills the ureters and bladder — useful for demonstrating ureteral anatomy.",
      "The voiding phase (VCUG component) occurs at the very end — after the bladder is full — to show the urethra and assess vesicoureteral reflux."
    ]
  },

  { cat:"Procedures", sub:"Upper Extremity",
    q:"For the AP projection of the thumb, the hand is:",
    opts:["Placed flat on the IR with the thumb in neutral position","Hyperpronated (internally rotated) so the posterior surface of the thumb rests on the IR","Positioned lateral with the thumb pointing upward","Extended with the palm facing up and the thumb abducted"],
    a:1,
    exp:"AP thumb: the hand is hyperpronated (rotated internally). The dorsal surface of the thumb naturally contacts the IR, placing the thumb in true AP projection. All other fingers rest on the table beside the hand.",
    oe:[
      "Hand flat on the IR places the thumb in an oblique position — not true AP. The thumb would be rotated rather than face-on to the beam.",
      "Correct. Hyperpronation rotates the hand so the thumb dorsum is flat on the IR, giving a true AP projection of the thumb.",
      "Lateral thumb is achieved with the thumb pointing up on a foam wedge — not the technique for an AP projection.",
      "Palm facing up with abducted thumb places the thumb in an oblique or lateral orientation — not the true AP position."
    ]
  },

  { cat:"Procedures", sub:"Pelvis/Hip",
    q:"The axiolateral hip projection (Clements-Nakayama modification) is used when:",
    opts:["Routine frog-leg lateral is insufficient","The patient cannot abduct the hip due to suspected fracture or hip arthroplasty","Evaluating both hips simultaneously","Measuring femoral anteversion angle"],
    a:1,
    exp:"Clements-Nakayama (modified axiolateral): for patients who cannot move the injured leg — no abduction required. The IR is placed vertically against the hip, the CR is directed horizontally through the femoral neck from the medial thigh. Used for hip fractures and post-op hips.",
    oe:[
      "The frog-leg lateral requires hip abduction and external rotation — it can be done when those movements are possible. The Clements method is for when they cannot be done.",
      "Correct. Clements-Nakayama = no hip movement required. The IR and beam are set up around the immobile patient — critical for trauma and post-surgical cases.",
      "Simultaneous bilateral hip evaluation is done on the AP pelvis projection, not a lateral method.",
      "Femoral anteversion is measured by CT or specific ultrasound technique — not with a lateral hip radiograph."
    ]
  },

  { cat:"Procedures", sub:"Procedures",
    q:"A voiding cystourethrogram (VCUG) is used to evaluate all of the following EXCEPT:",
    opts:["Vesicoureteral reflux (VUR)","Urethral anatomy during voiding","Bladder capacity and shape","Renal parenchymal thickness"],
    a:3,
    exp:"VCUG: contrast is instilled into the bladder via catheter; images are taken during filling and voiding. Demonstrates bladder wall, vesicoureteral reflux, and urethra. It does NOT evaluate renal parenchyma — that requires IVU or US.",
    oe:[
      "VUR (contrast refluxing from bladder into ureters) is a primary indication for VCUG — best demonstrated during voiding when intravesical pressure peaks.",
      "Urethral anatomy (strictures, posterior urethral valves in males) is demonstrated during the voiding phase of the VCUG.",
      "Bladder capacity, shape, diverticula, and trabeculation are all demonstrated during the filling phase of the VCUG.",
      "Correct. Renal parenchyma is evaluated by IVU (nephrogram phase), ultrasound, CT, or MRI — not by VCUG, which only shows the bladder and urethra."
    ]
  },

  { cat:"Procedures", sub:"Procedures",
    q:"For radiographic examination of the paranasal sinuses, the patient must be:",
    opts:["Supine to allow fluid to pool and be visualized","Erect (upright) so air-fluid levels can be demonstrated","Prone to drain secretions before imaging","Lateral recumbent with affected side down"],
    a:1,
    exp:"All sinus projections must be performed ERECT. Gravity allows fluid to settle at the bottom of air-containing sinuses, creating visible air-fluid levels. Supine positioning eliminates air-fluid levels and misses significant pathology.",
    oe:[
      "Supine positioning causes fluid to distribute along the posterior sinus wall, obscuring air-fluid levels. Supine sinus films are non-diagnostic for fluid.",
      "Correct. Erect position + proper projections: Waters, Caldwell, lateral, and submentovertex (SMV). Upright is mandatory for air-fluid level demonstration.",
      "Prone positioning is used for some facial bone projections but is not used for sinus evaluation — it would also obscure air-fluid levels.",
      "Lateral recumbent is used for decubitus projections of the chest and abdomen — it has no role in standard sinus evaluation."
    ]
  },

  { cat:"Procedures", sub:"Procedures",
    q:"Ribs ABOVE the diaphragm (posterior ribs 1–9) are best demonstrated using:",
    opts:["AP projection at full expiration using low kVp","PA projection with the patient prone and full inspiration","AP projection using high kVp to penetrate the lung parenchyma","Oblique projections only, as AP ribs are always obscured by the lungs"],
    a:0,
    exp:"Upper posterior ribs (above diaphragm): AP projection, exposure made at full expiration. Expiration moves the diaphragm upward, projecting the posterior lower ribs above it. Low kVp (65–70) maximizes rib detail by increasing photoelectric absorption contrast.",
    oe:[
      "Correct. AP + expiration + low kVp for upper (above-diaphragm) ribs. Expiration elevates the diaphragm, positioning the lower posterior ribs in the lung field rather than below it.",
      "PA projection would show anterior ribs preferentially. Prone positioning with inspiration is not standard for rib radiography.",
      "High kVp reduces bone contrast by increasing Compton scatter proportionally. Low kVp is used specifically to enhance rib detail.",
      "Oblique rib projections are used to demonstrate the axillary portion of ribs (lateral ribs), not to avoid the AP projection. AP is always included in a rib series."
    ]
  },

  { cat:"Procedures", sub:"Procedures",
    q:"The RAO (right anterior oblique) position for the sternum is used because:",
    opts:["It demonstrates both sternoclavicular joints simultaneously","The sternum is projected off the spine and into the heart shadow, which serves as a uniform background","It shows the sternum in true lateral projection","It demonstrates the manubriosternal joint in profile"],
    a:1,
    exp:"RAO sternum: 15–20° RAO rotation. The sternum rotates to the left, projecting it over the homogeneous background of the cardiac shadow (which blocks scatter). The heart's uniform density makes the sternum easy to see. A perpendicular or lateral view alone is insufficient.",
    oe:[
      "Both sternoclavicular (SC) joints are demonstrated on an AP or PA projection of the SC joints, not the RAO sternum view.",
      "Correct. The RAO moves the sternum off the thoracic spine and positions it over the heart's uniform density. The cardiac shadow is an ideal background for demonstrating the sternum.",
      "A true lateral projection of the sternum is also taken as part of the sternum series, but it is a separate projection — not what the RAO achieves.",
      "The manubriosternal joint is visible on the lateral sternum projection, not specifically the RAO oblique view."
    ]
  },

  { cat:"Procedures", sub:"Pediatrics",
    q:"The Pigg-O-Stat immobilization device is used primarily for:",
    opts:["Pediatric hip and pelvis examinations","Pediatric chest radiography in infants and young children","Pediatric skull projections","Restraining pediatric extremity patients"],
    a:1,
    exp:"Pigg-O-Stat: a device that holds infant/toddler patients in an upright seated position within a clear acrylic tube. Used specifically for PA and lateral chest radiographs. It allows upright chest radiographs with diagnostic quality without radiation-exposed helpers.",
    oe:[
      "Hip and pelvis radiographs in pediatric patients use gonadal shielding and modified AP/frog-leg positioning — not the Pigg-O-Stat.",
      "Correct. Pigg-O-Stat = upright pediatric chest radiography. The clear plastic chair supports the child upright, arms elevated, in PA position.",
      "Pediatric skull projections are done on the table with sponge positioners and parental assistance — the Pigg-O-Stat is not designed for skull positioning.",
      "Extremity immobilization uses wrap bandages, foam positioning aids, or sandbags — not the Pigg-O-Stat, which is specific to chest radiography."
    ]
  },

  { cat:"Procedures", sub:"Trauma",
    q:"For a patient with a suspected hip fracture who cannot be moved, which projection allows assessment of the proximal femur without moving the hip?",
    opts:["Frog-leg lateral — abducting the hip 45°","AP pelvis with bilateral hips","Cross-table axiolateral hip (horizontal beam lateral)","PA oblique using a grid cassette"],
    a:2,
    exp:"Cross-table axiolateral hip: IR placed vertically against the lateral hip; horizontal beam passes from the medial thigh through the hip. NO movement of the injured leg required. This is the trauma lateral hip projection — essential for suspected femoral neck fractures.",
    oe:[
      "Frog-leg lateral requires 45° hip abduction and external rotation — CONTRAINDICATED with suspected hip fracture due to risk of displacing the fracture.",
      "AP pelvis shows both hips simultaneously but is an AP view — it does not show the hip in lateral projection, which is needed to assess fracture displacement.",
      "Correct. Cross-table axiolateral = no movement of the injured leg. Standard trauma protocol: AP pelvis + cross-table lateral of the affected hip.",
      "PA oblique is not a standard trauma hip projection. Oblique views are done after AP and lateral when additional information is needed."
    ]
  },

  { cat:"Procedures", sub:"Chest",
    q:"On a properly positioned PA chest radiograph, how many posterior ribs should be visible above the diaphragm?",
    opts:["6 posterior ribs","8 posterior ribs","10 posterior ribs","12 posterior ribs"],
    a:2,
    exp:"Adequate inspiration on a PA chest: 10 posterior ribs should be visible above the diaphragm. Fewer than 10 suggests poor inspiration (suboptimal), which artificially enlarges the heart and obscures basilar lung detail.",
    oe:[
      "6 posterior ribs above the diaphragm indicates very poor inspiration — the lungs are underinflated and the image is non-diagnostic for pulmonary assessment.",
      "8 posterior ribs represents a partial breath — below the minimum standard of 10. The image may be borderline acceptable.",
      "Correct. 10 posterior ribs above the diaphragm = adequate full inspiration. This is the standard teaching criterion for PA chest positioning.",
      "12 posterior ribs indicates a very deep inspiration — technically acceptable but uncommon in standard clinical practice."
    ]
  },

  // ──────────────────────── PATIENT CARE – VITAL SIGNS ────────────────────────

  { cat:"Patient Care", sub:"Vital Signs",
    q:"The normal average oral body temperature in adults is:",
    opts:["96.8°F (36.0°C)","98.6°F (37.0°C)","100.4°F (38.0°C)","101.2°F (38.4°C)"],
    a:1,
    exp:"Normal mean oral temperature is 98.6°F (37°C) with a daily variation of 1–2°F. A reading above 99.5°F is considered febrile (fever).",
    oe:[
      "96.8°F is below the normal range — this would indicate mild hypothermia.",
      "Correct. 98.6°F (37°C) is the accepted normal mean oral body temperature.",
      "100.4°F is the threshold commonly used to define fever in clinical settings.",
      "101.2°F is clearly febrile — well above the normal range."
    ]
  },

  { cat:"Patient Care", sub:"Vital Signs",
    q:"The normal resting respiratory rate for an adult is:",
    opts:["6–10 breaths/min","12–20 breaths/min","22–30 breaths/min","30–40 breaths/min"],
    a:1,
    exp:"A healthy adult breathes 12–20 times per minute at rest. Fewer than 12 is bradypnea; more than 20 is tachypnea.",
    oe:[
      "6–10 breaths/min is bradypnea — abnormally slow breathing, suggesting respiratory depression.",
      "Correct. 12–20 breaths/min is the normal adult respiratory rate.",
      "22–30 breaths/min represents tachypnea in adults — seen with pain, anxiety, or pulmonary conditions.",
      "30–40 breaths/min is the normal range for children, not adults."
    ]
  },

  { cat:"Patient Care", sub:"Vital Signs",
    q:"Tachycardia is defined as a heart rate greater than:",
    opts:["60 BPM","80 BPM","100 BPM","120 BPM"],
    a:2,
    exp:"Tachycardia = heart rate >100 beats per minute. Normal adult resting pulse is 60–100 BPM. Bradycardia = <60 BPM.",
    oe:[
      "60 BPM is the lower boundary of normal adult heart rate — below this is bradycardia.",
      "80 BPM is mid-normal range — not a threshold for any abnormal classification.",
      "Correct. Tachycardia is defined as heart rate greater than 100 BPM.",
      "120 BPM is tachycardia, but the definition threshold begins at 100 BPM, not 120."
    ]
  },

  { cat:"Patient Care", sub:"Vital Signs",
    q:"Normal adult blood pressure is classified as systolic less than:",
    opts:["100 mm Hg","110 mm Hg","120 mm Hg","140 mm Hg"],
    a:2,
    exp:"Normal BP: systolic <120 mm Hg AND diastolic <80 mm Hg. Systolic 120–129 = elevated; 130–139 = stage 1 hypertension; ≥140 = stage 2 hypertension.",
    oe:[
      "100 mm Hg systolic is below the normal range — values this low may indicate hypotension.",
      "110 mm Hg is within the normal range but not the defined upper boundary of normal.",
      "Correct. Systolic <120 mm Hg is classified as normal per current guidelines.",
      "140 mm Hg systolic defines stage 2 hypertension — well above the normal threshold."
    ]
  },

  { cat:"Patient Care", sub:"Vital Signs",
    q:"The MOST accurate route for measuring core body temperature is:",
    opts:["Axillary","Oral","Rectal","Tympanic"],
    a:2,
    exp:"Rectal thermometry is considered the most accurate reflection of core body temperature. Temporal artery (TA) thermometers also closely correlate. Axillary is the least accurate.",
    oe:[
      "Axillary temperature is the least accurate — the thermometer must stay 5–10 min and results are notoriously unreliable.",
      "Oral measurement is widely used and acceptable, but can be affected by recent eating, drinking, or breathing through the mouth.",
      "Correct. Rectal temperature is the gold standard for core body temperature — it registers approximately 1°F higher than oral.",
      "Tympanic measurement is fast (3 seconds) and reasonably accurate, but does not equal the precision of rectal measurement."
    ]
  },

  { cat:"Patient Care", sub:"Vital Signs",
    q:"Bradycardia is defined as a resting heart rate less than:",
    opts:["50 BPM","60 BPM","70 BPM","80 BPM"],
    a:1,
    exp:"Bradycardia = heart rate <60 BPM at rest. It can be normal in highly trained athletes but may indicate cardiac conduction problems, medication effects, or hypothyroidism in others.",
    oe:[
      "50 BPM is bradycardia, but the definition threshold is <60 BPM, not <50.",
      "Correct. Bradycardia = heart rate less than 60 BPM. Below this threshold requires clinical evaluation.",
      "70 BPM is a normal resting heart rate — no classification of bradycardia.",
      "80 BPM is mid-normal range — no concern for bradycardia at this rate."
    ]
  },

  { cat:"Patient Care", sub:"Vital Signs",
    q:"Diaphoresis refers to:",
    opts:["Difficult or labored breathing","Profuse sweating","Absence of spontaneous ventilation","Low blood oxygen tension"],
    a:1,
    exp:"Diaphoresis = profuse sweating. It can be a sign of shock, myocardial infarction, hypoglycemia, or severe anxiety. Cold and clammy skin with diaphoresis is a classic shock warning sign.",
    oe:[
      "Difficult or labored breathing is dyspnea — a respiratory term, not diaphoresis.",
      "Correct. Diaphoresis = profuse sweating. Cold and clammy skin with diaphoresis signals potential shock.",
      "Absence of spontaneous ventilation is apnea — a breathing cessation term.",
      "Low blood oxygen tension is hypoxemia — measured by pulse oximetry or arterial blood gas."
    ]
  },

  { cat:"Patient Care", sub:"Vital Signs",
    q:"A patient with a blood pressure of 85/50 mm Hg is MOST likely experiencing:",
    opts:["Hypertension","Orthostatic hypotension","Hypotension","Normal variation"],
    a:2,
    exp:"Hypotension is abnormally low blood pressure — generally systolic <90 mm Hg. At 85/50, the patient may be in shock, severely dehydrated, or experiencing a vasovagal reaction. Immediate attention is required.",
    oe:[
      "Hypertension means elevated BP (≥130/80 mm Hg) — this patient has the opposite problem.",
      "Orthostatic hypotension is a drop in BP when standing up — it is a type of hypotension but requires positional change to diagnose.",
      "Correct. 85/50 mm Hg is frank hypotension — systolic well below the 90 mm Hg threshold. This warrants immediate assessment.",
      "Normal variation ranges around 120/80 — 85/50 is far outside normal limits."
    ]
  },

  { cat:"Patient Care", sub:"Vital Signs",
    q:"A sphygmomanometer is an instrument used to measure:",
    opts:["Heart rate","Oxygen saturation","Blood pressure","Respiratory rate"],
    a:2,
    exp:"Sphygmomanometer = blood pressure cuff. It works by inflating a cuff to occlude arterial flow, then slowly deflating while auscultating Korotkoff sounds with a stethoscope.",
    oe:[
      "Heart rate is measured by counting the radial or apical pulse — a sphygmomanometer measures pressure, not rate.",
      "Oxygen saturation is measured by a pulse oximeter — a separate device clipped to the fingertip.",
      "Correct. Sphygmomanometer = blood pressure measuring device. BP = systolic/diastolic (mm Hg).",
      "Respiratory rate is assessed by counting chest rise and fall over one minute — no instrument is required."
    ]
  },

  { cat:"Patient Care", sub:"Vital Signs",
    q:"Hyperthermia exists when the oral temperature exceeds:",
    opts:["98.6°F","99.5°F","100.4°F","101°F"],
    a:1,
    exp:"An oral temperature above 99.5°F is classified as fever (hyperthermia). A patient with a fever is described as febrile. Normal variation can reach up to 99.5°F, so this is the threshold.",
    oe:[
      "98.6°F is average normal — no fever present.",
      "Correct. Oral temperature >99.5°F = hyperthermia/fever. The patient is said to be febrile above this point.",
      "100.4°F (38°C) is another widely used clinical definition of fever, particularly in the context of neutropenic patients — but the textbook threshold for hyperthermia is >99.5°F.",
      "101°F is clearly febrile but not the threshold value used to define the onset of hyperthermia."
    ]
  },

  // ──────────────────────── PATIENT CARE – OXYGEN THERAPY ────────────────────────

  { cat:"Patient Care", sub:"Emergency Care",
    q:"A nasal cannula delivers oxygen at flow rates of 1–6 L/min, providing an approximate FiO₂ of:",
    opts:["10–20%","24–44%","50–60%","70–90%"],
    a:1,
    exp:"Nasal cannula: low-flow device, 1–6 L/min → FiO₂ ≈ 24–44%. Each additional L/min adds approximately 4% FiO₂. It is appropriate for patients with mild hypoxia who can breathe on their own.",
    oe:[
      "10–20% FiO₂ is below room air (21%) — a nasal cannula would not reduce oxygen below ambient levels.",
      "Correct. Nasal cannula at 1–6 L/min delivers approximately 24–44% FiO₂ — a low-flow device for mild hypoxia.",
      "50–60% FiO₂ requires a simple mask or partial rebreather mask — not achievable with a nasal cannula alone.",
      "70–90% FiO₂ requires a non-rebreather mask with reservoir bag — the highest FiO₂ achievable without intubation."
    ]
  },

  { cat:"Patient Care", sub:"Emergency Care",
    q:"A non-rebreather mask delivers the highest FiO₂ of any mask device because:",
    opts:["It has one-way valves preventing exhaled air from re-entering the reservoir bag","It uses a Venturi mechanism to entrain room air","It increases the respiratory rate automatically","It delivers oxygen directly into the trachea"],
    a:0,
    exp:"Non-rebreather mask: one-way valves on the exhalation ports + reservoir bag. Exhaled CO₂ cannot re-enter the bag. The patient inhales near-100% O₂ from the reservoir. FiO₂ can reach 60–90%.",
    oe:[
      "Correct. One-way valves prevent exhaled air from entering the reservoir bag, maintaining high-concentration O₂ delivery. FiO₂ ≈ 60–90%.",
      "Venturi mechanism describes air-entrainment masks (Venturi mask) — used for precise low-to-moderate FiO₂ delivery, not the non-rebreather.",
      "Respiratory rate control is a ventilator function — no mask automatically controls respiratory rate.",
      "Direct tracheal oxygen delivery is endotracheal intubation — an invasive procedure, not a mask."
    ]
  },

  { cat:"Patient Care", sub:"Emergency Care",
    q:"Which oxygen delivery device provides the MOST precise and controlled FiO₂?",
    opts:["Nasal cannula","Simple oxygen mask","Air-entrainment (Venturi) mask","Non-rebreather mask"],
    a:2,
    exp:"Air-entrainment (Venturi) mask: uses jets to entrain a precise ratio of room air to O₂, delivering accurate, fixed FiO₂ (24–50%). Used when exact oxygen concentration is critical — e.g., COPD patients sensitive to high O₂.",
    oe:[
      "Nasal cannula FiO₂ varies with the patient's breathing pattern — not a precise delivery system.",
      "Simple oxygen mask provides moderate FiO₂ but is imprecise — it depends on flow rate and tidal volume.",
      "Correct. Venturi mask (air-entrainment mask) delivers the most controlled FiO₂ of any mask — color-coded jets provide exact concentrations.",
      "Non-rebreather mask delivers very high FiO₂ but is not a precise system — output varies with patient breathing."
    ]
  },

  // ──────────────────────── PATIENT CARE – EMERGENCY CARE ────────────────────────

  { cat:"Patient Care", sub:"Emergency Care",
    q:"When encountering a patient emergency, the FIRST priority of the radiographer is to:",
    opts:["Administer emergency medications","Ensure an open airway","Call the radiologist","Complete the imaging examination"],
    a:1,
    exp:"The first priority in any emergency is airway — if the patient cannot breathe, all other interventions are secondary. The sequence is: Airway → Bleeding control → Shock prevention → Wounds → Emotional support.",
    oe:[
      "Administering medications requires a physician order — the radiographer's role is support, not medication administration (except per protocol).",
      "Correct. Airway is the first priority in every emergency. Without a patent airway, life cannot be sustained.",
      "Calling the radiologist is important but occurs while maintaining the patient — it is not the very first action.",
      "The examination stops when a patient emergency occurs — patient safety supersedes image acquisition."
    ]
  },

  { cat:"Patient Care", sub:"Emergency Care",
    q:"Hypovolemic shock is caused by:",
    opts:["Severe allergic reaction to contrast media","Loss of blood or tissue fluid","Spinal cord injury or anesthesia","Myocardial infarction"],
    a:1,
    exp:"Hypovolemic shock results from inadequate circulating blood volume due to blood loss (hemorrhage) or fluid loss (dehydration, burns). It is one of the most common types encountered in radiology.",
    oe:[
      "Severe allergic reaction causes anaphylactic shock — a form of vasogenic (distributive) shock, not hypovolemic.",
      "Correct. Hypovolemic shock = loss of blood or fluid → reduced venous return → decreased cardiac output → organ hypoperfusion.",
      "Spinal cord injury or high spinal anesthesia causes neurogenic shock — loss of vasomotor tone, not volume loss.",
      "Myocardial infarction causes cardiogenic shock — pump failure, not volume deficiency."
    ]
  },

  { cat:"Patient Care", sub:"Emergency Care",
    q:"Classic signs and symptoms of a patient going into shock include all of the following EXCEPT:",
    opts:["Tachycardia","Decreasing blood pressure","Warm, flushed skin","Cold and clammy skin"],
    a:2,
    exp:"Shock signs: restlessness, tachycardia, hypotension, COLD and CLAMMY skin (not warm), pallor, diaphoresis. Warm flushed skin occurs in early neurogenic or septic shock — not hypovolemic/cardiogenic shock.",
    oe:[
      "Tachycardia is a compensatory response to reduced cardiac output — a classic early shock sign.",
      "Decreasing blood pressure occurs as compensation fails — a hallmark late sign of shock.",
      "Correct. Warm flushed skin is NOT typical of hypovolemic or cardiogenic shock. Shock produces cold, clammy, pale skin due to peripheral vasoconstriction.",
      "Cold and clammy skin results from peripheral vasoconstriction diverting blood to vital organs — a classic shock sign."
    ]
  },

  { cat:"Patient Care", sub:"Emergency Care",
    q:"The drug of choice for treating anaphylactic shock is:",
    opts:["Atropine","Diphenhydramine (Benadryl)","Epinephrine","Nitroglycerin"],
    a:2,
    exp:"Epinephrine (adrenaline) is the FIRST-LINE treatment for anaphylaxis. It reverses bronchoconstriction, increases heart rate and BP, and reduces laryngeal edema. Benadryl is adjunctive — it does NOT replace epinephrine.",
    oe:[
      "Atropine treats bradycardia — it is not indicated for anaphylactic shock.",
      "Diphenhydramine (Benadryl) is useful adjunctively for urticaria, but it does not reverse airway compromise or cardiovascular collapse — epinephrine must come first.",
      "Correct. Epinephrine is the first-line drug for anaphylaxis — it counteracts all major components of the anaphylactic response.",
      "Nitroglycerin treats angina — it vasodilates and would worsen the hypotension of anaphylaxis."
    ]
  },

  { cat:"Patient Care", sub:"Emergency Care",
    q:"Syncope (fainting) in the radiology department should FIRST be managed by:",
    opts:["Administering smelling salts","Lowering the patient's head and elevating the legs","Sitting the patient upright","Calling a code blue immediately"],
    a:1,
    exp:"Syncope = transient loss of consciousness from cerebral hypoperfusion. First action: lay patient flat and elevate legs (Trendelenburg-like) to increase cerebral blood flow. Then assess, monitor vitals, and seek assistance if needed.",
    oe:[
      "Smelling salts are not a standard clinical intervention — they can cause agitation or injury. Positioning is the priority.",
      "Correct. Lower the head and elevate the legs to improve venous return and cerebral perfusion. Do not leave the patient unattended.",
      "Sitting the patient upright worsens syncope by reducing cerebral perfusion — the opposite of what's needed.",
      "Code blue is for cardiac/respiratory arrest. Simple syncope requires positioning and monitoring first — escalate only if the patient does not recover quickly."
    ]
  },

  { cat:"Patient Care", sub:"Emergency Care",
    q:"Atropine, found on the emergency crash cart, is used primarily for:",
    opts:["Cardiac arrest","Bradycardia","Allergic reactions","Seizures"],
    a:1,
    exp:"Atropine is an anticholinergic drug that blocks vagal tone, increasing heart rate. It is the drug of choice for symptomatic bradycardia. It is also used pre-procedurally to reduce secretions.",
    oe:[
      "Cardiac arrest uses epinephrine (and amiodarone for shockable rhythms) — atropine is no longer recommended for asystole per current ACLS guidelines.",
      "Correct. Atropine is the first-line drug for symptomatic bradycardia — it blocks the vagus nerve and accelerates the heart rate.",
      "Allergic reactions are treated with epinephrine (anaphylaxis) and diphenhydramine — atropine has no role.",
      "Seizures are treated with phenytoin (Dilantin) or benzodiazepines — not atropine."
    ]
  },

  { cat:"Patient Care", sub:"Emergency Care",
    q:"Naloxone (Narcan) is indicated for:",
    opts:["Opioid overdose reversal","Cardiac arrhythmia","Hypoglycemia","Metabolic acidosis"],
    a:0,
    exp:"Naloxone (Narcan) is an opioid antagonist. It rapidly reverses opioid-induced respiratory depression, sedation, and hypotension. It is found on crash carts and is used in radiological settings where patients may have received opioid sedation.",
    oe:[
      "Correct. Naloxone reverses opioid overdose — it competitively blocks opioid receptors, restoring respiration within minutes.",
      "Cardiac arrhythmias are treated with amiodarone, adenosine, atropine, or defibrillation depending on type — not naloxone.",
      "Hypoglycemia is treated with dextrose (D50) IV — naloxone has no effect on blood glucose.",
      "Metabolic acidosis is treated with sodium bicarbonate — naloxone addresses opioid toxicity only."
    ]
  },

  { cat:"Patient Care", sub:"Emergency Care",
    q:"A fully automatic AED differs from a semiautomatic AED in that it:",
    opts:["Requires the operator to press a button to deliver the shock","Analyzes the rhythm and delivers the shock automatically without operator input","Is only used by physicians","Requires the patient to be conscious"],
    a:1,
    exp:"Fully automatic AED: analyzes rhythm AND delivers shock automatically if indicated — no button press needed. Semiautomatic AED: analyzes rhythm, advises shock if needed, but operator must press the button to deliver it.",
    oe:[
      "Requiring operator button press describes the SEMIautomatic AED — not the fully automatic type.",
      "Correct. Fully automatic AED completes the entire process — analysis and shock delivery — without operator intervention.",
      "AEDs are designed for use by laypeople and first responders, not exclusively physicians.",
      "AEDs are used for pulseless ventricular fibrillation/tachycardia — the patient is unconscious, not conscious."
    ]
  },

  // ──────────────────────── PATIENT CARE – INFECTION CONTROL ────────────────────────

  { cat:"Patient Care", sub:"Infection Control",
    q:"Standard Precautions apply to:",
    opts:["Only patients known to be infected","All blood, body fluids, secretions, excretions, non-intact skin, and mucous membranes of ALL patients","Only surgical patients","Only patients in isolation rooms"],
    a:1,
    exp:"Standard Precautions are applied to ALL patients regardless of diagnosis or infection status. They cover blood, all body fluids (except sweat), non-intact skin, and mucous membranes — the foundation of infection control.",
    oe:[
      "Standard Precautions are NOT limited to known infected patients — they apply universally to prevent unknown transmissions.",
      "Correct. Standard Precautions apply to all patients with all body fluids and substances (except sweat) — universal application is the key concept.",
      "Standard Precautions apply in ALL clinical settings, not just surgical environments.",
      "Isolation rooms use additional Transmission-Based Precautions on top of Standard Precautions — Standard Precautions are for every patient, everywhere."
    ]
  },

  { cat:"Patient Care", sub:"Infection Control",
    q:"A fomite is:",
    opts:["A living carrier of disease who shows no symptoms","An inanimate object that can harbor and transmit pathogenic microorganisms","A vector arthropod that transmits disease","A person who is immune to a specific infection"],
    a:1,
    exp:"A fomite is an inanimate object — a book, radiographic equipment, latex gloves, or clothing — that harbors pathogens and can transmit infection. Radiographic cassettes and positioning aids can serve as fomites.",
    oe:[
      "A living carrier without symptoms is called a carrier or reservoir host — distinct from a fomite.",
      "Correct. Fomite = inanimate object capable of transmitting infection. Radiographic equipment and positioning sponges are common fomites in the radiology department.",
      "A vector is a living organism (usually arthropod like a mosquito or tick) that transmits disease — not inanimate.",
      "An immune person is simply immune — not related to the fomite concept."
    ]
  },

  { cat:"Patient Care", sub:"Infection Control",
    q:"Nosocomial infection is defined as an infection:",
    opts:["Present before hospital admission","Acquired in the hospital, typically developing 72 hours after admission","Caused exclusively by antibiotic-resistant bacteria","Transmitted only through surgical wounds"],
    a:1,
    exp:"Nosocomial (Healthcare-Associated) infections develop AFTER the patient is admitted to the hospital — typically 72 hours post-admission. They were not present or incubating at the time of admission.",
    oe:[
      "Infections present before admission are community-acquired — the opposite of nosocomial.",
      "Correct. Nosocomial = hospital-acquired, generally developing ≥72 hours after admission and not present at time of admission.",
      "HAIs can be caused by ANY pathogen — drug-resistant or not. The defining feature is where it was acquired.",
      "HAIs can occur in the urinary tract, bloodstream, lungs, wounds, and any body site — not limited to surgical wounds."
    ]
  },

  { cat:"Patient Care", sub:"Infection Control",
    q:"The four links in the chain of infection are:",
    opts:["Bacteria, viruses, fungi, protozoa","Host, infectious microorganism, mode of transmission, reservoir","Encounter, entry, spread, damage","Encounter, multiplication, damage, outcome"],
    a:1,
    exp:"Koch's chain of infection has four links: (1) host, (2) infectious microorganism, (3) mode of transmission, (4) reservoir. Breaking any ONE link stops the spread of infection — the basis of all infection control.",
    oe:[
      "These are the four categories of infectious agents — not the links in the chain of infection.",
      "Correct. Host + infectious microorganism + mode of transmission + reservoir = chain of infection. All four must be present for disease to spread.",
      "These are steps in the establishment of infectious disease — not the chain of infection links.",
      "These are steps in the disease process, not the epidemiological chain of infection."
    ]
  },

  { cat:"Patient Care", sub:"Infection Control",
    q:"Surgical asepsis differs from medical asepsis in that surgical asepsis:",
    opts:["Reduces the number of microorganisms but does not eliminate them","Prevents contamination by all microbes and endospores using sterile technique","Only applies to patient skin preparation","Is less rigorous than medical asepsis"],
    a:1,
    exp:"Surgical asepsis (sterile technique) = complete elimination of ALL microorganisms including spores. Medical asepsis = reduces organism numbers but does not achieve sterility. Surgical asepsis is required for invasive procedures.",
    oe:[
      "Reducing microorganism numbers without achieving sterility describes MEDICAL asepsis — not surgical.",
      "Correct. Surgical asepsis prevents ALL contamination by microbes and endospores — it is sterile technique, used for invasive procedures.",
      "Skin preparation is one component of surgical asepsis but does not define the entire concept.",
      "Surgical asepsis is MORE rigorous than medical asepsis — it aims for complete sterility, not just reduction."
    ]
  },

  { cat:"Patient Care", sub:"Infection Control",
    q:"Airborne transmission precautions are required for which of the following diseases?",
    opts:["Influenza","Tuberculosis (TB)","MRSA","C. difficile"],
    a:1,
    exp:"Airborne precautions (negative pressure room + N95 respirator) are required for diseases spread by small droplet nuclei (<5 µm) that remain suspended in air: TB, measles, chickenpox. Influenza uses droplet precautions.",
    oe:[
      "Influenza is spread by large respiratory droplets (>5 µm) — it requires DROPLET precautions, not airborne.",
      "Correct. TB is the classic airborne precaution disease. Small droplet nuclei (<5 µm) can remain airborne for hours — requires N95 respirator and negative pressure room.",
      "MRSA is spread by direct and indirect contact — it requires CONTACT precautions (gown and gloves).",
      "C. difficile is spread by fecal-oral route and contact — it requires CONTACT precautions and soap-and-water hand washing (alcohol gel is ineffective against C. diff spores)."
    ]
  },

  { cat:"Patient Care", sub:"Infection Control",
    q:"Endospores are significant in infection control because they:",
    opts:["Are destroyed by standard alcohol hand sanitizers","Are metabolically dormant, highly resistant structures capable of surviving for years","Only form in fungal organisms","Are too large to be transmitted through the air"],
    a:1,
    exp:"Bacterial endospores (produced by Bacillus and Clostridium genera) are extremely resistant to heat, chemicals, and physical agents. They can remain viable for years. Standard disinfection may not destroy them — sterilization is required.",
    oe:[
      "Alcohol hand sanitizers do NOT destroy endospores — this is why C. difficile requires soap and water, which mechanically removes spores.",
      "Correct. Endospores are dormant, highly resistant bacterial survival structures — unaffected by most disinfectants. Only sterilization destroys them.",
      "Endospores are formed by BACTERIA (specifically Bacillus and Clostridium genera) — not by fungi.",
      "Endospores can be aerosolized and transmitted — their size does not prevent airborne spread."
    ]
  },

  { cat:"Patient Care", sub:"Infection Control",
    q:"Which type of microorganism is an obligate intracellular parasite that cannot survive outside a living cell?",
    opts:["Bacteria","Viruses","Fungi","Protozoa"],
    a:1,
    exp:"Viruses are obligate intracellular parasites — they carry DNA or RNA but lack the cellular machinery to replicate independently. They must invade and hijack host cell organelles to reproduce.",
    oe:[
      "Bacteria are prokaryotic cells capable of independent reproduction — they do not require a host cell to survive.",
      "Correct. Viruses cannot live outside a living cell — they are obligate intracellular parasites that depend entirely on the host cell's metabolic machinery.",
      "Fungi are eukaryotic organisms with a nucleus — they can survive and replicate independently of a host cell.",
      "Protozoa are unicellular eukaryotes capable of independent existence and motility — they are not obligate intracellular parasites."
    ]
  },

  // ──────────────────────── PATIENT CARE – PHARMACOLOGY ────────────────────────

  { cat:"Patient Care", sub:"Pharmacology",
    q:"Which route of drug administration provides the most rapid onset of action?",
    opts:["Oral (PO)","Subcutaneous (Sub-Q)","Intramuscular (IM)","Intravenous (IV)"],
    a:3,
    exp:"IV administration delivers drugs directly into the bloodstream — onset is immediate. Oral → IM → Sub-Q are progressively slower routes as absorption through tissues takes time.",
    oe:[
      "Oral administration is the slowest route — drugs must be absorbed through the GI tract, which can take 30–60 minutes.",
      "Subcutaneous injection provides slow, constant absorption — used for drugs requiring gradual release (e.g., insulin).",
      "Intramuscular injection provides faster absorption than oral or sub-Q but is still slower than IV.",
      "Correct. Intravenous = immediate onset. Drug enters the circulation directly with no absorption phase."
    ]
  },

  { cat:"Patient Care", sub:"Pharmacology",
    q:"Nitroglycerin is most commonly used in the radiology setting for:",
    opts:["Anaphylaxis","Seizures","Angina (chest pain)","Hypoglycemia"],
    a:2,
    exp:"Nitroglycerin (spray or sublingual tablet) is a vasodilator used for angina pectoris (chest pain from coronary artery disease). It is commonly found on crash carts and may be needed if a patient experiences chest pain during a procedure.",
    oe:[
      "Anaphylaxis is treated with epinephrine — nitroglycerin would worsen hypotension.",
      "Seizures are treated with phenytoin or benzodiazepines — nitroglycerin has no anticonvulsant effect.",
      "Correct. Nitroglycerin dilates coronary and peripheral vessels, relieving anginal chest pain.",
      "Hypoglycemia is treated with dextrose (oral glucose or IV D50) — nitroglycerin has no effect on blood sugar."
    ]
  },

  { cat:"Patient Care", sub:"Pharmacology",
    q:"Diphenhydramine (Benadryl) is classified as:",
    opts:["A bronchodilator","An antihistamine","An opioid analgesic","A diuretic"],
    a:1,
    exp:"Diphenhydramine is an antihistamine (H1-receptor blocker). In the radiology setting it is used as an adjunct for mild-to-moderate allergic reactions to contrast media, and for urticaria (hives). It is NOT a first-line drug for anaphylaxis.",
    oe:[
      "Bronchodilators (e.g., albuterol) open airways — diphenhydramine is an antihistamine, not a bronchodilator.",
      "Correct. Diphenhydramine (Benadryl) = antihistamine. Adjunct treatment for allergic reactions — epinephrine is still first-line for anaphylaxis.",
      "Opioid analgesics (e.g., morphine, fentanyl) relieve pain — diphenhydramine does not.",
      "Diuretics (e.g., furosemide/Lasix) increase urine output — diphenhydramine has no diuretic action."
    ]
  },

  { cat:"Patient Care", sub:"Pharmacology",
    q:"Furosemide (Lasix) is a diuretic found on the crash cart and is indicated for:",
    opts:["Bradycardia","Edema and fluid overload","Opioid overdose","Anaphylaxis"],
    a:1,
    exp:"Furosemide (Lasix) is a loop diuretic that promotes renal excretion of sodium and water. It is used for pulmonary edema, heart failure, and hypertensive emergencies involving fluid overload.",
    oe:[
      "Bradycardia is treated with atropine — furosemide has no chronotropic effect.",
      "Correct. Furosemide = diuretic for edema and fluid overload. It rapidly reduces intravascular fluid volume.",
      "Opioid overdose is treated with naloxone (Narcan) — furosemide has no opioid-reversing action.",
      "Anaphylaxis requires epinephrine — furosemide is not indicated and could worsen hypotension."
    ]
  },

  { cat:"Patient Care", sub:"Pharmacology",
    q:"Analgesics are drugs that:",
    opts:["Relieve pain","Reduce fever only","Cause bronchodilation","Increase urine output"],
    a:0,
    exp:"Analgesics are pain-relieving drugs. They include non-opioids (acetaminophen, NSAIDs) and opioids (morphine, fentanyl). In radiology, opioids may be given for procedural sedation and analgesia.",
    oe:[
      "Correct. Analgesics = pain-relieving drugs. They range from over-the-counter NSAIDs to powerful opioid narcotics.",
      "Drugs that reduce fever are antipyretics — some analgesics (acetaminophen, ibuprofen) have antipyretic properties but that is not their defining classification.",
      "Bronchodilation is caused by bronchodilator drugs (e.g., albuterol) — not analgesics.",
      "Increasing urine output is the action of diuretics — unrelated to analgesics."
    ]
  },

  // ──────────────────────── PATIENT CARE – TRANSFER ────────────────────────

  { cat:"Patient Care", sub:"Patient Transfer",
    q:"When transferring a patient from a wheelchair to the radiographic table, the wheelchair should be positioned:",
    opts:["Directly behind the table","At a 90-degree angle to the table","At a 45-degree angle to the table, with the patient's stronger side toward the table","Facing away from the table at 180 degrees"],
    a:2,
    exp:"Wheelchair-to-table transfer: place the chair at a 45° angle to the table, locking the wheels. Position the patient's stronger/unaffected side toward the table so the patient can push off and pivot onto the table safely.",
    oe:[
      "Positioning directly behind the table makes lateral transfer impossible — the patient has no space to pivot.",
      "90 degrees (parallel) is not optimal — the 45-degree angle reduces the pivot distance and is safer.",
      "Correct. 45° angle + locked wheels + stronger side leading = safest wheelchair transfer technique.",
      "Facing away from the table (180°) would require the patient to back onto the table — unsafe and impractical."
    ]
  },

  { cat:"Patient Care", sub:"Patient Transfer",
    q:"Orthostatic hypotension refers to:",
    opts:["Chronically elevated blood pressure","A sudden drop in blood pressure when moving from lying to standing","Low blood pressure that does not change with position","Hypertension caused by kidney disease"],
    a:1,
    exp:"Orthostatic hypotension = a drop of ≥20 mm Hg systolic (or ≥10 mm Hg diastolic) when moving from supine to standing. Causes dizziness and syncope. Radiographers should assist patients slowly when changing position.",
    oe:[
      "Chronically elevated BP requiring medication is simply hypertension — not an orthostatic phenomenon.",
      "Correct. Orthostatic (postural) hypotension = BP drop upon standing → dizziness, lightheadedness, or syncope. Always assist patients when they sit or stand.",
      "Hypotension that does not change with position is resting hypotension — orthostatic specifically implies a positional trigger.",
      "Hypertension from kidney disease is renal (renovascular) hypertension — a different entity entirely."
    ]
  },

  // ──────────────────────── PATIENT CARE – COMMUNICATION/LEGAL ────────────────────────

  { cat:"Patient Care", sub:"Communication",
    q:"Informed consent requires that the patient be provided with:",
    opts:["Only the name of the procedure","A general description of purpose only","An explanation of the procedure, risks, benefits, and alternatives so the patient can make a voluntary decision","Written consent from the radiographer only"],
    a:2,
    exp:"Informed consent requires disclosure of: (1) the nature of the procedure, (2) risks and benefits, (3) available alternatives, (4) expected outcomes. The patient must understand and voluntarily agree without coercion.",
    oe:[
      "Providing only the procedure name is insufficient — the patient cannot make an informed decision without understanding risks and alternatives.",
      "Describing only the purpose fails to disclose risks and alternatives — this is not informed consent.",
      "Correct. Informed consent = procedure explained + risks + benefits + alternatives + voluntary agreement. All four elements must be present.",
      "The radiographer witnesses or documents consent but does not grant it — the performing physician is responsible for obtaining informed consent."
    ]
  },

  { cat:"Patient Care", sub:"Communication",
    q:"Implied consent is most commonly applied when:",
    opts:["A patient refuses treatment","A patient cannot give verbal consent and is brought to the ER unconscious","A family member signs on behalf of a competent adult","A patient signs a general hospital admission form"],
    a:1,
    exp:"Implied consent: assumed in emergency situations when a patient is unconscious and unable to consent, and delay would result in death or serious harm. The law assumes a reasonable person would consent to life-saving care.",
    oe:[
      "A patient refusing treatment is an exercise of their right of refusal — consent cannot be implied in that case.",
      "Correct. Implied consent applies when an unconscious or incapacitated patient cannot consent and emergency treatment is required — the law infers consent to save the patient's life.",
      "A family member can provide surrogate consent for an incapacitated patient — but this is surrogate/proxy consent, not implied consent.",
      "Signing a hospital admission form is express (written) consent for routine care — it does not cover all procedures."
    ]
  },

  { cat:"Patient Care", sub:"Communication",
    q:"Which of the following best describes nonverbal communication?",
    opts:["Speaking loudly and clearly","Maintaining eye contact and an open posture","Using medical terminology only","Providing written discharge instructions"],
    a:1,
    exp:"Nonverbal communication includes body language, eye contact, facial expressions, gestures, posture, and proxemics (personal space). Maintaining eye contact and open posture conveys attentiveness and trustworthiness.",
    oe:[
      "Speaking loudly is verbal (and paralanguage) communication — it involves sound and words.",
      "Correct. Eye contact and open posture are nonverbal communication cues — they convey engagement, confidence, and empathy without words.",
      "Using medical terminology is a verbal communication choice — content and vocabulary selection, not nonverbal.",
      "Written instructions are written communication — a form of communication but not nonverbal body language."
    ]
  },

  { cat:"Patient Care", sub:"Legal & Ethics",
    q:"Libel differs from slander in that libel is:",
    opts:["Verbal defamation of a patient","Written defamation — false information in recorded form","The legal right to practice radiography","Touching a patient without consent"],
    a:1,
    exp:"Defamation has two forms: (1) libel = written (or recorded) false statement that damages a person's reputation; (2) slander = spoken false statement. Incorrect entries in a patient's medical record could constitute libel.",
    oe:[
      "Verbal defamation is SLANDER — the spoken form of defamation.",
      "Correct. Libel = written/recorded defamation. Falsifying a radiograph report or medical record constitutes libel.",
      "The legal right to practice is a licensing issue — separate from defamation law.",
      "Touching without consent is battery — a different legal tort from defamation."
    ]
  },

  { cat:"Patient Care", sub:"Legal & Ethics",
    q:"Which of the following describes the legal concept of 'negligence' in radiography?",
    opts:["An intentional harmful act toward a patient","Failure to meet the standard of care that a reasonably prudent radiographer would provide","Performing a procedure without the patient's knowledge","Writing incorrect information in a patient's record"],
    a:1,
    exp:"Negligence = unintentional failure to meet the standard of care. A radiographer is negligent when their conduct falls below what a reasonably prudent radiographer would do under similar circumstances, causing harm.",
    oe:[
      "An intentional harmful act is an intentional tort (battery, assault) — negligence is unintentional.",
      "Correct. Negligence = failure to meet the reasonably prudent radiographer standard → patient harm. All four malpractice elements (duty, breach, causation, damage) must be proven.",
      "Performing a procedure without the patient's knowledge (not without consent) may constitute battery — not negligence.",
      "Incorrect documentation is related to falsification — may constitute fraud or libel depending on intent."
    ]
  },

  // ──────────────────────── SAFETY – RADIATION PHYSICS ────────────────────────

  { cat:"Safety", sub:"Radiation Physics",
    q:"Classic coherent scattering occurs when an x-ray photon has energy below:",
    opts:["1 keV","10 keV","33 keV","70 keV"],
    a:1,
    exp:"Classic coherent (Thomson/unmodified) scattering occurs at photon energies below 10 keV. The photon is absorbed by an atom and re-emitted in a different direction with the same energy — no energy is transferred to the patient.",
    oe:[
      "1 keV is below the threshold — coherent scattering occurs below 10 keV, not limited to just below 1 keV.",
      "Correct. Coherent scattering occurs at energies below 10 keV — the photon changes direction but transfers no energy to tissue.",
      "33 keV is in the diagnostic range — at this energy, photoelectric or Compton interactions dominate, not coherent scattering.",
      "70 keV is a common diagnostic kVp range — Compton scattering predominates at this energy level."
    ]
  },

  { cat:"Safety", sub:"Radiation Physics",
    q:"In photoelectric absorption, the incoming x-ray photon:",
    opts:["Passes through matter completely unchanged","Ejects an outer shell electron and proceeds with reduced energy","Is completely absorbed after ejecting an inner shell electron","Changes direction without any energy loss"],
    a:2,
    exp:"Photoelectric absorption: photon strikes an inner shell electron, ejects it (photoelectron), and the photon's energy is completely absorbed. This constitutes the greatest hazard to patients in diagnostic radiography and is responsible for subject contrast.",
    oe:[
      "Passing through unchanged describes transmission — no interaction occurs with the atom.",
      "Ejecting an outer shell electron and proceeding with reduced energy describes Compton scattering, not photoelectric absorption.",
      "Correct. In photoelectric absorption, the photon is completely absorbed by the inner shell electron — all energy is transferred, creating an ion pair.",
      "Changing direction without energy loss describes classic coherent scattering."
    ]
  },

  { cat:"Safety", sub:"Radiation Physics",
    q:"Compton scattering is the primary source of occupational radiation exposure because:",
    opts:["It occurs only at very low energies","The scattered photon can exit the patient and reach the radiographer","It transfers no energy to the patient","It only occurs in the therapeutic range"],
    a:1,
    exp:"Compton scattering ejects an outer shell electron and produces a lower-energy scattered photon. This scattered photon can travel in any direction — including toward the radiographer — making it the principal source of occupational exposure.",
    oe:[
      "Compton scattering occurs across the entire diagnostic range — not just low energies.",
      "Correct. The Compton-scattered photon can exit the patient in any direction, including toward the technologist — it is the dominant source of occupational dose.",
      "Compton scattering DOES transfer energy — part of the photon's energy ejects the electron.",
      "Compton scattering occurs in the diagnostic range — pair production and photodisintegration occur in the therapeutic range."
    ]
  },

  { cat:"Safety", sub:"Radiation Physics",
    q:"Pair production requires a minimum photon energy of:",
    opts:["0.51 MeV","1.02 MeV","10 MeV","100 keV"],
    a:1,
    exp:"Pair production requires a minimum photon energy of 1.02 MeV. The photon interacts with the nuclear force field and is converted into an electron-positron pair (each with rest mass energy of 0.511 MeV). It occurs in the therapeutic (not diagnostic) range.",
    oe:[
      "0.51 MeV is the rest mass energy of ONE particle (electron or positron) — pair production requires energy for BOTH (0.511 × 2 = 1.022 MeV).",
      "Correct. Pair production threshold = 1.02 MeV — the photon must have enough energy to create both an electron and a positron.",
      "10 MeV is above the threshold — pair production can occur, but 1.02 MeV is the minimum.",
      "100 keV is 0.1 MeV — far below the 1.02 MeV threshold for pair production."
    ]
  },

  { cat:"Safety", sub:"Radiation Physics",
    q:"Three requirements must be met for x-ray production. Which of the following is NOT one of them?",
    opts:["A source of electrons","A means to rapidly accelerate the electrons","A high-atomic-number target to stop the electrons","A source of visible light photons"],
    a:3,
    exp:"Three requirements for x-ray production: (1) source of electrons (filament/cathode), (2) means to accelerate electrons (kVp/high voltage), (3) something to rapidly stop the electrons (tungsten anode). Visible light is not part of x-ray production.",
    oe:[
      "A source of electrons (thermionic emission from the tungsten filament) is the first requirement for x-ray production.",
      "A means to accelerate the electrons (kilovoltage applied across the tube) is the second requirement.",
      "A target to stop the electrons (the anode — preferably high-Z tungsten) is the third requirement — x-rays are produced when electrons decelerate.",
      "Correct. Visible light photons are not required for x-ray production — x-rays are electromagnetic radiation produced by electron interactions with the anode."
    ]
  },

  { cat:"Safety", sub:"Radiation Physics",
    q:"Thermionic emission refers to:",
    opts:["The production of x-rays by electron deceleration","The process by which electrons are boiled off the filament by heating","The scattering of x-rays after striking the patient","The conversion of x-ray energy to light in an image receptor"],
    a:1,
    exp:"Thermionic emission: when the filament (cathode) is heated by milliamperage (electrical current), electrons are released from the tungsten wire. These electrons form the electron cloud (space charge) that is then accelerated toward the anode when kVp is applied.",
    oe:[
      "X-ray production by electron deceleration is Bremsstrahlung (braking radiation) — not thermionic emission.",
      "Correct. Thermionic emission = heating the filament → electrons boil off → form the electron cloud ready for acceleration toward the anode.",
      "X-ray scattering after striking the patient is Compton scattering — a different process.",
      "X-ray energy conversion to light in an image receptor describes the function of the phosphor layer in CR/film-screen cassettes — not thermionic emission."
    ]
  },

  { cat:"Safety", sub:"Radiation Physics",
    q:"Characteristic radiation is produced when:",
    opts:["An electron decelerates near the atomic nucleus","An outer shell electron fills an inner shell vacancy, releasing excess energy as an x-ray","A photon is absorbed by a proton in the nucleus","Two photons collide in matter"],
    a:1,
    exp:"Characteristic radiation: during photoelectric absorption, the ejected inner shell electron leaves a vacancy. Outer shell electrons drop in to fill the vacancy and emit excess energy as characteristic x-rays — characteristic of the target material (e.g., tungsten K-shell x-rays).",
    oe:[
      "Electron deceleration near the atomic nucleus produces Bremsstrahlung (braking) radiation — a different type of x-ray.",
      "Correct. Characteristic radiation = outer-to-inner shell electron transition → emission of a photon equal to the energy difference between shells.",
      "Photon absorption by a proton is not a mechanism that produces diagnostic x-rays.",
      "Two photons colliding is not a recognized x-ray production mechanism in diagnostic radiology."
    ]
  },

  // ──────────────────────── SAFETY – RADIATION UNITS ────────────────────────

  { cat:"Safety", sub:"Radiation Units",
    q:"The SI unit of absorbed dose is the:",
    opts:["Sievert (Sv)","Gray (Gy)","Becquerel (Bq)","Coulomb per kilogram (C/kg)"],
    a:1,
    exp:"Gray (Gy) = SI unit of absorbed dose = energy deposited per unit mass (J/kg). 1 Gy = 100 rad (traditional unit). Absorbed dose measures the actual energy absorbed by tissue, regardless of radiation type.",
    oe:[
      "Sievert (Sv) measures dose equivalent/effective dose — it accounts for biological effectiveness of different radiation types. 1 Sv = 100 rem.",
      "Correct. Gray (Gy) = SI absorbed dose unit. 1 Gy = 100 rad. It quantifies energy deposited in tissue.",
      "Becquerel (Bq) measures radioactivity (rate of nuclear disintegrations) — not absorbed dose.",
      "Coulomb per kilogram (C/kg) measures radiation exposure (ionization in air) — not absorbed dose in tissue."
    ]
  },

  { cat:"Safety", sub:"Radiation Units",
    q:"The SI unit of effective dose (biologic effectiveness of radiation) is the:",
    opts:["Gray (Gy)","Becquerel (Bq)","Sievert (Sv)","Roentgen (R)"],
    a:2,
    exp:"Sievert (Sv) = SI unit of effective dose and dose equivalent. It accounts for the biologically damaging potential of different radiation types by applying a quality factor (QF). 1 Sv = 100 rem (traditional).",
    oe:[
      "Gray measures absorbed dose (energy deposited in tissue) — it does not account for the type of radiation or biologic effectiveness.",
      "Becquerel measures radioactivity (disintegrations per second) — not biologic dose.",
      "Correct. Sievert (Sv) = effective dose. It equals the absorbed dose (Gy) multiplied by the radiation quality factor. For x-rays, QF = 1, so 1 Gy = 1 Sv.",
      "Roentgen is a traditional (non-SI) unit of exposure measured in air — it has been replaced by C/kg in SI units."
    ]
  },

  { cat:"Safety", sub:"Radiation Units",
    q:"One Gray (Gy) is equivalent to how many rad (traditional unit)?",
    opts:["1 rad","10 rad","100 rad","1000 rad"],
    a:2,
    exp:"1 Gy = 100 rad. Conversely, 1 rad = 0.01 Gy (1 cGy). The Gray replaced the rad in the SI system. Both measure absorbed dose — energy deposited per unit mass of tissue.",
    oe:[
      "1 rad = 0.01 Gy — not 1 Gy. If 1 Gy = 1 rad, the values would be identical — they are not.",
      "10 rad = 0.1 Gy — still not 1 Gy.",
      "Correct. 1 Gy = 100 rad. This conversion is essential for ARRT exam calculations.",
      "1000 rad = 10 Gy — this is an order of magnitude too high."
    ]
  },

  { cat:"Safety", sub:"Radiation Units",
    q:"One Sievert (Sv) is equivalent to how many rem (traditional unit)?",
    opts:["1 rem","10 rem","100 rem","1000 rem"],
    a:2,
    exp:"1 Sv = 100 rem. Conversely, 1 rem = 0.01 Sv (1 cSv). The Sievert replaced the rem in the SI system. Both measure dose equivalent/effective dose.",
    oe:[
      "1 rem = 0.01 Sv — not 1 Sv.",
      "10 rem = 0.1 Sv — not 1 Sv.",
      "Correct. 1 Sv = 100 rem. The Sievert and rem are the SI and traditional units of dose equivalence, respectively.",
      "1000 rem = 10 Sv — an order of magnitude too high."
    ]
  },

  { cat:"Safety", sub:"Radiation Units",
    q:"The Becquerel (Bq) measures:",
    opts:["Absorbed dose in tissue","The biologic effectiveness of radiation","The rate of radioactive disintegration (1 disintegration per second)","Radiation exposure in air"],
    a:2,
    exp:"Becquerel (Bq) = SI unit of radioactivity = 1 nuclear disintegration per second. It replaced the Curie (Ci). 1 Ci = 3.7 × 10¹⁰ Bq. Becquerel is used in nuclear medicine to quantify radiopharmaceutical activity.",
    oe:[
      "Absorbed dose in tissue is measured in Gray (Gy) — not Becquerel.",
      "Biologic effectiveness of radiation is measured in Sievert (Sv) — not Becquerel.",
      "Correct. Becquerel = 1 disintegration per second. It quantifies the rate of radioactive decay, not the energy deposited.",
      "Radiation exposure in air is measured in Roentgen (R) or Coulombs per kilogram (C/kg) — not Becquerel."
    ]
  },

  // ──────────────────────── SAFETY – DOSE LIMITS ────────────────────────

  { cat:"Safety", sub:"Dose Limits",
    q:"The NCRP annual whole-body effective dose limit for occupational workers is:",
    opts:["5 mSv","10 mSv","50 mSv","100 mSv"],
    a:2,
    exp:"NCRP annual whole-body effective dose limit for occupational workers = 50 mSv (5 rem). The cumulative lifetime limit = 10 mSv × age in years. This is far above doses received in routine radiographic practice.",
    oe:[
      "5 mSv is the annual limit for the general public with continuous/frequent exposure — not the occupational limit.",
      "10 mSv is not the annual occupational limit — it is used in the cumulative formula (10 mSv × age).",
      "Correct. 50 mSv (5 rem) = annual occupational whole-body effective dose limit per NCRP Report 116.",
      "100 mSv is above the NCRP occupational limit — exceeding 50 mSv/year requires investigation and remediation."
    ]
  },

  { cat:"Safety", sub:"Dose Limits",
    q:"The cumulative lifetime effective dose formula for occupational workers is:",
    opts:["5 mSv × age in years","10 mSv × age in years","50 mSv × age in years","100 mSv per decade"],
    a:1,
    exp:"Cumulative lifetime dose limit = 10 mSv × age in years (NCRP). Example: a 35-year-old radiographer may have accumulated up to 350 mSv (35 Sv × 10 mSv) over their career.",
    oe:[
      "5 mSv × age is not the NCRP cumulative formula — it would be too restrictive for routine occupational practice.",
      "Correct. Cumulative limit = 10 mSv × age. A 40-year-old may accumulate up to 400 mSv (40 × 10) over a lifetime.",
      "50 mSv × age would far exceed acceptable limits — 50 mSv is the annual limit, not the per-year cumulative factor.",
      "Per-decade limits are not part of NCRP's cumulative dose formula."
    ]
  },

  { cat:"Safety", sub:"Dose Limits",
    q:"The annual occupational equivalent dose limit for the lens of the eye is:",
    opts:["15 mSv","50 mSv","150 mSv","500 mSv"],
    a:2,
    exp:"Lens of the eye annual equivalent dose limit for occupational workers = 150 mSv (15 rem) per NCRP. The lens is particularly radiosensitive — radiation-induced cataracts are a known late somatic effect.",
    oe:[
      "15 mSv is the PUBLIC annual lens dose limit — not the occupational limit.",
      "50 mSv is the annual whole-body effective dose limit — not the lens-specific limit.",
      "Correct. Occupational annual lens dose limit = 150 mSv. The lens is radiosensitive, and this limit reflects the need to protect against cataract formation.",
      "500 mSv is the occupational limit for skin, hands, and feet — not the lens."
    ]
  },

  { cat:"Safety", sub:"Dose Limits",
    q:"The annual occupational equivalent dose limit for the skin, hands, and feet is:",
    opts:["50 mSv","150 mSv","500 mSv","1000 mSv"],
    a:2,
    exp:"Skin, hands, and feet annual occupational limit = 500 mSv (50 rem). These extremity tissues are less radiosensitive than deep organs, which is why a higher limit is set. Fluoroscopists working near the primary beam particularly need extremity monitoring.",
    oe:[
      "50 mSv is the annual whole-body effective dose limit — not specific to skin/extremities.",
      "150 mSv is the occupational lens of eye limit — not the extremity limit.",
      "Correct. 500 mSv = annual occupational dose limit for skin, hands, and feet — reflecting their lower radiosensitivity compared to internal organs.",
      "1000 mSv (1 Sv) exceeds all standard dose limits — this is not an NCRP limit."
    ]
  },

  { cat:"Safety", sub:"Dose Limits",
    q:"The embryo/fetal monthly equivalent dose limit (once pregnancy is declared) is:",
    opts:["0.1 mSv","0.5 mSv","1 mSv","5 mSv"],
    a:1,
    exp:"Once a radiographer declares her pregnancy, the monthly equivalent dose limit to the embryo-fetus is 0.5 mSv (50 mrem). This is a very conservative limit designed to protect the radiosensitive developing organism.",
    oe:[
      "0.1 mSv/month is more restrictive than the NCRP recommendation — the actual limit is 0.5 mSv/month.",
      "Correct. Embryo-fetal monthly equivalent dose limit = 0.5 mSv once pregnancy is declared to protect the developing fetus.",
      "1 mSv is the annual PUBLIC effective dose limit — not the monthly embryo-fetal limit.",
      "5 mSv is the annual public dose limit for infrequent exposure — far exceeds the monthly fetal limit."
    ]
  },

  { cat:"Safety", sub:"Dose Limits",
    q:"The annual effective dose limit for the general public with continuous or frequent exposure is:",
    opts:["0.1 mSv","1 mSv","5 mSv","50 mSv"],
    a:1,
    exp:"Annual public effective dose limit (continuous or frequent exposure) = 1 mSv (0.1 rem) per NCRP. This is one-tenth of the occupational annual limit, reflecting the ALARA principle for non-occupational individuals.",
    oe:[
      "0.1 mSv is the monthly embryo-fetal limit — not the annual public limit for continuous exposure.",
      "Correct. 1 mSv/year = public dose limit for continuous/frequent exposure. This applies to family members who live near radiation sources.",
      "5 mSv is the annual public limit for INFREQUENT exposure — a less stringent limit used for non-routine exposures.",
      "50 mSv is the OCCUPATIONAL annual limit — 50× higher than the public continuous exposure limit."
    ]
  },

  // ──────────────────────── SAFETY – RADIOBIOLOGY ────────────────────────

  { cat:"Safety", sub:"Radiobiology",
    q:"The law of Bergonie and Tribondeau states that cells are most sensitive to radiation when they are:",
    opts:["Highly differentiated and specialized","Rapidly dividing and primitive in structure","In the resting (G0) phase of the cell cycle","Composed primarily of fat tissue"],
    a:1,
    exp:"Bergonie and Tribondeau (1906): cells are most radiosensitive when actively dividing (high mitotic activity) and primitive in structure/function. This law explains why lymphocytes, germ cells, and bone marrow cells are highly radiosensitive.",
    oe:[
      "Highly differentiated and specialized cells are RADIORESISTANT — they rarely divide and are mature in function.",
      "Correct. Bergonie-Tribondeau law: high mitotic rate + primitive structure = high radiosensitivity. Examples: lymphocytes, germ cells, bone marrow, intestinal crypt cells.",
      "Cells in the resting (G0) phase are generally LESS sensitive — they are not actively dividing.",
      "Fat tissue is relatively radioresistant — adipocytes are mature, specialized cells with low mitotic activity."
    ]
  },

  { cat:"Safety", sub:"Radiobiology",
    q:"Which of the following cells is MOST radiosensitive?",
    opts:["Nerve cells","Muscle cells","Lymphocytes","Liver (hepatic) cells"],
    a:2,
    exp:"Lymphocytes are among the most radiosensitive cells in the body — they are primitive, rapidly dividing, and critically involved in immune function. Lymphocyte depletion is an early indicator of radiation exposure.",
    oe:[
      "Nerve cells are highly radioresistant — they are terminally differentiated, rarely divide, and can survive significant radiation doses.",
      "Muscle cells are radioresistant — they are specialized, differentiated, and have low mitotic activity.",
      "Correct. Lymphocytes are extremely radiosensitive despite being mature cells — an exception to the Bergonie-Tribondeau rule. They die in interphase even without cell division.",
      "Liver cells (hepatocytes) have moderate radiosensitivity — they can regenerate but are not as sensitive as lymphocytes or germ cells."
    ]
  },

  { cat:"Safety", sub:"Radiobiology",
    q:"Which of the following cells is MOST radioresistant?",
    opts:["Intestinal crypt cells","Germ cells (ovum, spermatozoa)","Nerve cells","Basal skin cells"],
    a:2,
    exp:"Nerve cells are among the most radioresistant — they are highly differentiated, do not undergo repeated mitosis, and have very low turnover. They require extremely high doses (CNS syndrome: >50 Gy) to demonstrate radiation injury.",
    oe:[
      "Intestinal crypt cells are highly radiosensitive — they divide rapidly to renew the intestinal epithelium and are the target cells in GI syndrome.",
      "Germ cells (ovum, spermatogonia) are highly radiosensitive — radiation-induced sterility is a documented effect.",
      "Correct. Nerve cells = most radioresistant. They are terminally differentiated with virtually no mitotic activity — radiation injury manifests only at very high doses.",
      "Basal skin cells are radiosensitive — they are actively dividing stem cells responsible for skin renewal."
    ]
  },

  { cat:"Safety", sub:"Radiobiology",
    q:"Hematopoietic (bone marrow) syndrome occurs at total body doses of approximately:",
    opts:["<1 Gy","2–10 Gy","10–50 Gy",">50 Gy"],
    a:1,
    exp:"Hematopoietic (bone marrow) syndrome: 2–10 Gy total body dose. Results in infection, hemorrhage, and anemia due to destruction of blood-forming stem cells. Mean survival 6–8 weeks without treatment; recovery possible in 6 months with treatment.",
    oe:[
      "<1 Gy may cause subclinical blood count changes but does not produce full acute radiation syndrome.",
      "Correct. 2–10 Gy = hematopoietic syndrome. Bone marrow is destroyed → inability to produce blood cells → infection, hemorrhage, anemia.",
      "10–50 Gy produces gastrointestinal (GI) syndrome — damage to the intestinal epithelium causing massive diarrhea, dehydration, and death in 3–10 days.",
      ">50 Gy produces central nervous system (CNS) syndrome — seizures, coma, and death within hours to 2–3 days."
    ]
  },

  { cat:"Safety", sub:"Radiobiology",
    q:"Gastrointestinal (GI) syndrome from acute radiation exposure occurs at doses of:",
    opts:["1–2 Gy","2–10 Gy","10–50 Gy",">50 Gy"],
    a:2,
    exp:"GI syndrome: 10–50 Gy total body dose. The intestinal epithelium is destroyed, causing massive diarrhea, nausea, vomiting, and fever. Death occurs in 3–10 days from dehydration, infection, and electrolyte imbalance.",
    oe:[
      "1–2 Gy may cause mild prodromal symptoms — GI syndrome requires at least 10 Gy.",
      "2–10 Gy produces hematopoietic syndrome — bone marrow failure, not GI syndrome.",
      "Correct. GI syndrome = 10–50 Gy. Intestinal crypt cells are destroyed, the epithelial lining sloughs off, and the GI barrier is lost — lethal in days.",
      ">50 Gy produces CNS syndrome (seizures, coma, death) — even more severe than GI syndrome."
    ]
  },

  { cat:"Safety", sub:"Radiobiology",
    q:"Central nervous system (CNS) syndrome from acute radiation occurs at doses above:",
    opts:["2 Gy","10 Gy","50 Gy","100 Gy"],
    a:2,
    exp:"CNS syndrome occurs at doses >50 Gy. Massive brain edema, increased intracranial pressure, seizures, and coma result in death within hours to 2–3 days. There is no survival at this dose range.",
    oe:[
      "2 Gy produces hematopoietic syndrome — far below the threshold for CNS syndrome.",
      "10 Gy produces GI syndrome — still below the threshold for CNS syndrome.",
      "Correct. CNS syndrome = >50 Gy. Brain edema and increased intracranial pressure cause rapid death — no treatment can reverse this level of damage.",
      ">100 Gy is also lethal CNS syndrome — but the threshold definition begins at 50 Gy."
    ]
  },

  { cat:"Safety", sub:"Radiobiology",
    q:"The prodromal stage of acute radiation syndrome is characterized by:",
    opts:["Recovery and apparent well-being","Full expression of organ system damage","Nausea, vomiting, and diarrhea within hours of exposure","Genetic mutations in future generations"],
    a:2,
    exp:"The prodromal stage is the first stage of acute radiation syndrome — occurring within hours of exposure. Classic symptoms: nausea, vomiting, and diarrhea (the 'NVD' stage). The severity of prodromal symptoms correlates with the dose received.",
    oe:[
      "Recovery and apparent well-being describes the LATENT period — the second stage where the patient feels well despite ongoing biological damage.",
      "Full expression of organ system damage describes the MANIFEST ILLNESS stage — the third and final acute stage.",
      "Correct. Prodromal stage = NVD (nausea, vomiting, diarrhea) within hours of high-dose radiation exposure. More severe prodromal symptoms indicate a higher dose.",
      "Genetic mutations in future generations are LATE genetic effects of radiation — not a feature of the acute prodromal stage."
    ]
  },

  { cat:"Safety", sub:"Radiobiology",
    q:"The late somatic effects of radiation exposure include all of the following EXCEPT:",
    opts:["Cataract formation","Leukemia and other cancers","Hair loss within 24 hours of exposure","Shortened life span"],
    a:2,
    exp:"Late somatic effects develop months to years after exposure: cataracts, carcinogenesis (leukemia, skin cancer, bone cancer), and shortened life span. Hair loss (epilation) within 24 hours is an EARLY effect — it is transient and seen at doses of approximately 3 Gy.",
    oe:[
      "Cataract formation is a classic late somatic effect — the lens is radiosensitive and cataracts can develop years after exposure.",
      "Leukemia and other cancers are the most important late somatic effects — the first documented case of radiation-induced cancer was a radiographer's hand cancer in 1902.",
      "Correct. Hair loss within 24 hours is an EARLY effect of radiation, not a late somatic effect — it is temporary and resolves unless doses are very high.",
      "Shortened life span is a recognized late somatic effect — early radiologists and radiation workers had statistically shorter lives than non-exposed peers."
    ]
  },

  { cat:"Safety", sub:"Radiobiology",
    q:"The indirect hit theory of radiation damage proposes that:",
    opts:["Radiation directly strikes DNA and breaks chemical bonds","Radiation ionizes water molecules within the cell, creating free radicals that damage critical molecules","Only the cell nucleus is damaged by radiation","Radiation converts cellular proteins to carcinogens"],
    a:1,
    exp:"Indirect hit theory: x-rays and gamma rays primarily ionize the water (≈80% of cells) to form free radicals (H• and OH•). These highly reactive species then chemically attack DNA and other critical molecules — causing most of the cellular radiation damage.",
    oe:[
      "Radiation directly striking DNA and breaking bonds describes the DIRECT hit theory — the indirect theory involves water ionization as the intermediary.",
      "Correct. Indirect hit = radiation ionizes water → free radicals → attack DNA. This accounts for the MAJORITY of cellular damage from x-radiation and gamma radiation.",
      "Only DNA damage is the focus of the target theory — indirect hits affect all molecules, not just the nucleus.",
      "Radiation does not directly convert proteins to carcinogens — it damages DNA, which can lead to mutations causing cancer."
    ]
  },

  { cat:"Safety", sub:"Radiobiology",
    q:"Somatic effects of radiation differ from genetic effects in that somatic effects:",
    opts:["Appear in future generations","Affect only the germ cells","Occur in the exposed individual's own body cells","Are always beneficial at low doses"],
    a:2,
    exp:"Somatic effects manifest in the EXPOSED individual (soma = body). Genetic (hereditary) effects occur in future generations when germ cells (ovum, spermatogonia) whose DNA is damaged by radiation are fertilized.",
    oe:[
      "Appearing in future generations describes GENETIC effects — damage to germ cell DNA that is passed on if fertilization occurs.",
      "Affecting only germ cells describes the mechanism of genetic effects — somatic effects occur in all body cells except germ cells.",
      "Correct. Somatic effects = effects in the exposed individual's own somatic cells (non-reproductive cells). Cataracts and cancer are somatic late effects.",
      "Low-dose radiation benefits (hormesis) are controversial and not established as beneficial — somatic effects are considered harmful at any dose per the ALARA principle."
    ]
  },

  // ──────────────────────── SAFETY – RADIATION PROTECTION ────────────────────────

  { cat:"Safety", sub:"Radiation Protection",
    q:"The NCRP is best described as:",
    opts:["A federal agency with authority to enforce radiation standards","A not-for-profit congressional advisory body that collects and distributes radiation safety information","The organization that licenses nuclear power plants","The agency that certifies radiologic technologists"],
    a:1,
    exp:"The National Council on Radiation Protection and Measurements (NCRP) is a not-for-profit organization formed by Congress in 1964 to advise on radiation safety. It publishes recommendations but has NO enforcement authority — that belongs to the NRC.",
    oe:[
      "The NCRP is ADVISORY — it cannot enforce standards. Enforcement authority rests with the Nuclear Regulatory Commission (NRC).",
      "Correct. NCRP = congressional advisory body. It collects radiation data, publishes reports, and recommends dose limits — but cannot mandate compliance.",
      "Licensing of nuclear power plants is done by the Nuclear Regulatory Commission (NRC) — not the NCRP.",
      "Certification of radiologic technologists is performed by the ARRT — not the NCRP."
    ]
  },

  { cat:"Safety", sub:"Radiation Protection",
    q:"The inverse square law states that radiation intensity is:",
    opts:["Directly proportional to the square of the distance from the source","Inversely proportional to the square of the distance from the source","Equal at all distances from an isotropic source","Unaffected by distance in a collimated beam"],
    a:1,
    exp:"Inverse square law: I₁/I₂ = (D₂)²/(D₁)². Doubling the distance reduces intensity to 1/4. Tripling the distance reduces intensity to 1/9. Distance is the most effective radiation protection tool for occupational workers.",
    oe:[
      "Radiation intensity is INversely proportional — as distance increases, intensity decreases (not increases).",
      "Correct. Intensity ∝ 1/distance². Double distance = 1/4 intensity. Triple distance = 1/9 intensity. This is why the radiographer stands as far as possible during exposures.",
      "Radiation intensity from a point source varies with distance — the inverse square law describes this variation.",
      "Even in a collimated beam, intensity decreases with distance — the inverse square law applies to all radiation sources."
    ]
  },

  { cat:"Safety", sub:"Radiation Protection",
    q:"Lead (Pb) is used as a radiation shielding material because of its:",
    opts:["Low melting point","Low atomic number (Z=14)","High atomic number (Z=82) promoting photoelectric absorption","High conductivity of electricity"],
    a:2,
    exp:"Lead (Z=82) is effective because its high atomic number strongly promotes photoelectric absorption of x-rays — completely absorbing the photon. Lead aprons, gloves, thyroid shields, and room barriers use lead as the primary attenuating material.",
    oe:[
      "Lead actually has a high melting point — but this is not the reason it is used as shielding.",
      "Z=14 is silicon — lead has Z=82. Low-Z materials like aluminum are used as filters, not shielding.",
      "Correct. Lead (Z=82) has a high atomic number that strongly promotes photoelectric absorption, completely stopping x-rays. This makes it ideal for radiation shielding.",
      "Lead is not particularly known for electrical conductivity — copper (Z=29) is the standard conductor."
    ]
  },

  { cat:"Safety", sub:"Radiation Protection",
    q:"According to current guidelines, patient gonadal shielding during radiography:",
    opts:["Is mandatory for all radiographic procedures","Is always required for pediatric patients","Is being discontinued because it provides negligible benefit and risks compromising image quality","Should be used whenever the gonads are within 5 cm of the primary beam"],
    a:2,
    exp:"Current evidence (supported by updated NCRP and AAPM guidance) shows gonadal/fetal shielding provides negligible dose reduction with modern techniques while risking image quality compromise by obscuring anatomy. The practice is being phased out. Areas still protected include lens, breasts, and thyroid when not in the field.",
    oe:[
      "Mandatory gonadal shielding for all procedures has been the traditional teaching, but current guidelines are moving away from this practice.",
      "Even for pediatric patients, gonadal shielding is being reconsidered — modern digital detectors and dose optimization have reduced gonadal dose significantly.",
      "Correct. Modern evidence shows gonadal shielding provides negligible benefit while posing risks of obscuring anatomy and increasing repeat rates. AAPM and NCRP now advise against routine gonadal shielding.",
      "The '5 cm rule' was the traditional guideline — but current practice is moving toward discontinuing routine gonadal shielding entirely."
    ]
  },

  { cat:"Safety", sub:"Dosimetry",
    q:"A thermoluminescent dosimeter (TLD) works by:",
    opts:["Ionizing a gas-filled chamber to measure cumulative exposure","Storing radiation energy in crystal lattice defects that emit light when heated","Developing a photographic image proportional to radiation dose","Measuring real-time dose rate using a Geiger-Müller tube"],
    a:1,
    exp:"TLD: radiation creates trapped electrons in crystal lattice defects (LiF crystals). When heated, the electrons release their stored energy as visible light (thermoluminescence). The amount of light is proportional to the radiation dose received.",
    oe:[
      "Ionizing a gas-filled chamber describes a pocket (ionization chamber) dosimeter — not a TLD.",
      "Correct. TLD = crystal lattice traps electrons → heating releases trapped energy as light → light measured and correlated to dose. Accurate, reusable, and can measure doses as low as 0.1 mGy.",
      "Developing a photographic image describes the film badge dosimeter — a different (older) monitoring device.",
      "Real-time Geiger-Müller tube measurement describes a survey meter (Geiger counter) — not a personal dosimeter."
    ]
  },

  { cat:"Safety", sub:"Dosimetry",
    q:"An optically stimulated luminescence (OSL) dosimeter differs from a TLD in that it:",
    opts:["Uses heat to release stored energy","Uses laser light to stimulate the release of stored energy from aluminum oxide crystals","Is only used for measuring gamma radiation","Cannot be reread after the initial measurement"],
    a:1,
    exp:"OSL dosimeter: uses aluminum oxide (Al₂O₃:C) crystals. Stored radiation energy is released by stimulating with laser light — producing luminescence proportional to dose. Advantage: the badge can be RE-READ multiple times without losing the stored data.",
    oe:[
      "Using heat to release stored energy describes a TLD (thermoluminescent dosimeter) — OSL uses laser light.",
      "Correct. OSL uses laser light to stimulate Al₂O₃ crystals → luminescence proportional to dose. Can be re-analyzed multiple times, unlike TLDs which are destroyed by reading.",
      "OSL can measure x-rays, gamma, beta, and neutrons — it is not limited to gamma radiation.",
      "OSL can be RE-READ multiple times — this is actually a KEY advantage over TLDs."
    ]
  },

  { cat:"Safety", sub:"Dosimetry",
    q:"Where should a personnel dosimeter badge be worn during radiographic procedures?",
    opts:["On the wrist of the dominant hand","On the collar outside the lead apron, at neck level","Inside the lead apron at waist level","Clipped to the image receptor"],
    a:1,
    exp:"Dosimeter badge: worn at collar level (outside and above the lead apron) to monitor the dose to the head, neck, and thyroid — areas not protected by the apron. This gives the most representative reading of exposure to unprotected sensitive tissues.",
    oe:[
      "A wrist dosimeter is sometimes worn in addition to the collar badge to monitor extremity dose — but it is not the PRIMARY badge placement.",
      "Correct. Collar level outside the lead apron = standard dosimeter placement. It measures dose to the thyroid, eyes, and head — all sensitive structures above apron coverage.",
      "Inside the lead apron reads near zero — providing no useful information about actual unprotected body exposure.",
      "The image receptor is not on the radiographer's body — the dosimeter must be worn by the person, not placed on equipment."
    ]
  },

  // ──────────────────────── IMAGE PRODUCTION – X-RAY EQUIPMENT ────────────────────────

  { cat:"Image Production", sub:"X-ray Equipment",
    q:"The primary advantage of a rotating anode over a stationary anode is:",
    opts:["Lower cost of manufacture","Ability to handle higher heat loads by distributing heat over a larger area","Elimination of the filament","Production of a more homogeneous x-ray beam"],
    a:1,
    exp:"Rotating anode: the anode disk spins (3,000–10,000 RPM), continuously exposing a fresh area of the focal track to the electron beam. This distributes heat over a much larger area (the entire focal track), allowing much higher mA and shorter exposure times.",
    oe:[
      "Rotating anodes are MORE expensive than stationary anodes due to their complex bearing and motor systems.",
      "Correct. Rotating anode = greater heat capacity. Heat is spread over the entire focal track rather than a single stationary point — enabling higher technique factors.",
      "The filament is present in both rotating and stationary anode tubes — it is the electron source and is not eliminated.",
      "Both tube types produce a heterogeneous (polyenergetic) beam — the beam's energy spectrum is determined by kVp and filtration, not anode rotation."
    ]
  },

  { cat:"Image Production", sub:"X-ray Equipment",
    q:"Tungsten is the preferred anode material in diagnostic x-ray tubes primarily because of its:",
    opts:["Low melting point and low atomic number","High melting point (3,422°C) and high atomic number (Z=74) for efficient x-ray production","Abundance and low cost","Ability to produce a monoenergetic beam"],
    a:1,
    exp:"Tungsten (W, Z=74) is the anode material of choice because: (1) highest melting point of all pure metals (3,422°C) — handles intense heat, (2) high atomic number → efficient x-ray production via Bremsstrahlung and characteristic radiation.",
    oe:[
      "Tungsten has a HIGH melting point (not low) and HIGH atomic number (not low) — both properties are essential for anode function.",
      "Correct. Tungsten's extremely high melting point and high Z make it ideal — it withstands the heat generated and efficiently produces x-rays.",
      "Tungsten is not particularly abundant or cheap — it is chosen for its physical properties, not economics.",
      "All x-ray tubes produce a heterogeneous (polyenergetic) beam — Bremsstrahlung produces a continuous spectrum, not monoenergetic photons."
    ]
  },

  { cat:"Image Production", sub:"X-ray Equipment",
    q:"A small focal spot size is preferred when:",
    opts:["High mAs exposures are needed for large patients","Maximum spatial resolution/recorded detail is required","Reducing patient dose is the primary concern","Reducing tube heat load is the goal"],
    a:1,
    exp:"Small focal spot = better spatial resolution (less penumbra/geometric unsharpness). However, small focal spots have lower heat capacity — they require lower mAs and cannot handle high-output exposures. Large focal spots are used for larger body parts requiring high technique.",
    oe:[
      "High mAs exposures require a LARGE focal spot to handle the heat generated — small focal spots would overheat.",
      "Correct. Small focal spot = sharper recorded detail = better spatial resolution. Used for extremities, small structures, and magnification radiography.",
      "Focal spot size does not directly control patient dose — mAs and kVp are the primary dose determinants.",
      "Reducing heat load requires a LARGE focal spot (more surface area for heat distribution) — small focal spots generate more concentrated heat."
    ]
  },

  { cat:"Image Production", sub:"X-ray Equipment",
    q:"The filament of the x-ray tube is located in the:",
    opts:["Anode","Cathode","Focusing cup","Rotor"],
    a:1,
    exp:"The filament (thoriated tungsten wire) is housed within the focusing cup in the cathode (negative terminal) assembly. When heated by milliamperage, it undergoes thermionic emission — releasing the electrons that form the useful beam.",
    oe:[
      "The anode is the positive terminal where electrons strike to produce x-rays — the filament is in the cathode.",
      "Correct. Filament = cathode component. The cathode contains the filament + focusing cup. The filament boils off electrons by thermionic emission.",
      "The focusing cup surrounds and focuses the electron beam toward the focal spot — but the filament is inside the focusing cup.",
      "The rotor is the rotating component of the anode assembly — it contains the anode disk and bearings, not the filament."
    ]
  },

  // ──────────────────────── IMAGE PRODUCTION – EXPOSURE FACTORS ────────────────────────

  { cat:"Image Production", sub:"Exposure Factors",
    q:"Milliampere-seconds (mAs) primarily controls:",
    opts:["Beam penetrating ability (kVp)","The quantity (number) of x-rays produced and therefore radiographic density/brightness","The energy distribution of the x-ray beam","The spatial resolution of the image"],
    a:1,
    exp:"mAs controls the QUANTITY of x-rays (number of photons). Increasing mAs increases the electron current through the tube → more photons produced → more photons reaching the IR → increased radiographic density/brightness. mAs is the primary density control.",
    oe:[
      "Beam penetrating ability is controlled by kVp (kilovoltage) — not mAs.",
      "Correct. mAs = quantity of radiation produced = primary density/brightness control. Double mAs → double the photon quantity → double the density.",
      "Energy distribution of the beam is determined by kVp and filtration — mAs does not change beam energy.",
      "Spatial resolution is determined by focal spot size, OFD, and SID — mAs has no direct effect on recorded detail."
    ]
  },

  { cat:"Image Production", sub:"Exposure Factors",
    q:"Applying the 15% rule: if a technique of 80 kVp/20 mAs is used and kVp is increased by 15%, the new mAs should be:",
    opts:["40 mAs","20 mAs","10 mAs","5 mAs"],
    a:2,
    exp:"The 15% rule: increasing kVp by 15% doubles the beam's penetrating power, so mAs must be HALVED to maintain the same density. 80 kVp × 1.15 = 92 kVp; 20 mAs ÷ 2 = 10 mAs. New technique: 92 kVp / 10 mAs.",
    oe:[
      "40 mAs would be used if kVp was DECREASED by 15% (mAs doubled) — increasing kVp requires halving mAs.",
      "20 mAs is unchanged — using this with increased kVp would overexpose the image.",
      "Correct. 15% kVp increase = halve the mAs. 20 mAs ÷ 2 = 10 mAs. New technique: ~92 kVp / 10 mAs.",
      "5 mAs would be used if mAs was quartered — the 15% rule only requires halving mAs, not quartering it."
    ]
  },

  { cat:"Image Production", sub:"Exposure Factors",
    q:"kVp primarily controls which image quality factor?",
    opts:["Radiographic density only","Radiographic contrast (and penetration)","Spatial resolution","Patient motion blur"],
    a:1,
    exp:"kVp controls: (1) PENETRATION — higher kVp penetrates tissue better; (2) CONTRAST — higher kVp reduces contrast (more Compton scatter, less differential absorption) producing a longer scale/lower contrast image; (3) it also affects density secondarily.",
    oe:[
      "mAs primarily controls density — kVp affects density secondarily and is not the primary density control.",
      "Correct. kVp is the PRIMARY contrast control. Higher kVp → more Compton, less photoelectric → less differential absorption → lower contrast (longer gray scale).",
      "Spatial resolution is controlled by focal spot size, OFD, and SID — kVp does not directly affect recorded detail.",
      "Patient motion blur is controlled by exposure time (and short mAs) — kVp has no direct effect on motion."
    ]
  },

  { cat:"Image Production", sub:"Exposure Factors",
    q:"The inverse square law applies to x-ray intensity: if SID is doubled from 100 cm to 200 cm, the intensity at the new distance is:",
    opts:["Doubled","Halved","One-quarter of the original","Four times the original"],
    a:2,
    exp:"Inverse square law: I₁/I₂ = (D₂/D₁)². Doubling distance: I₂ = I₁ × (100/200)² = I₁ × (1/4). Intensity drops to 1/4. To maintain the same density, mAs must be increased 4× when SID is doubled.",
    oe:[
      "Doubling the intensity would occur if the SID were halved — the inverse square law predicts a decrease, not increase, when distance increases.",
      "Halving the intensity corresponds to increasing distance by √2 ≈ 1.41×, not doubling it.",
      "Correct. Doubling SID → intensity drops to 1/4. This is the mathematical consequence of the inverse square law.",
      "Four times the original intensity would occur if SID were halved — the opposite of what doubling the distance produces."
    ]
  },

  { cat:"Image Production", sub:"Exposure Factors",
    q:"Object-to-image receptor distance (OID) affects image quality primarily by:",
    opts:["Increasing density when increased","Increasing magnification and decreasing recorded detail when increased","Decreasing patient dose","Improving contrast when increased"],
    a:1,
    exp:"Increasing OID: (1) increases magnification (image appears larger than the actual structure), (2) increases geometric unsharpness (penumbra), (3) decreases recorded detail. To minimize OID, place the body part as close to the IR as possible.",
    oe:[
      "OID does not directly affect density — it affects magnification and sharpness.",
      "Correct. Increasing OID → more magnification + more penumbra → less recorded detail. Always minimize OID for best image quality.",
      "OID does not significantly affect patient dose — dose is primarily determined by mAs and kVp.",
      "OID does not improve contrast — contrast is determined by kVp, tissue thickness, and scatter."
    ]
  },

  // ──────────────────────── IMAGE PRODUCTION – GRIDS ────────────────────────

  { cat:"Image Production", sub:"Grids",
    q:"Grid ratio is defined as:",
    opts:["The number of lead strips per centimeter","The ratio of lead strip height to the distance between strips","The percentage of primary radiation transmitted by the grid","The ratio of scattered radiation to primary radiation"],
    a:1,
    exp:"Grid ratio = height of lead strips (h) ÷ distance between strips (D). Common ratios: 8:1, 10:1, 12:1, 16:1. Higher ratio = more scatter cleanup = better contrast improvement, but requires more precise alignment and higher patient dose.",
    oe:[
      "The number of lead strips per centimeter is the grid frequency (lines/cm) — not the grid ratio.",
      "Correct. Grid ratio = h/D. A 12:1 grid has strips 12× taller than the gap between them — very effective at removing scatter.",
      "Percentage of primary radiation transmitted is related to the Bucky factor, not grid ratio.",
      "The ratio of scattered to primary radiation is the scatter fraction — not grid ratio."
    ]
  },

  { cat:"Image Production", sub:"Grids",
    q:"The Bucky factor (grid factor) represents:",
    opts:["The number of lines per centimeter in a grid","How much the mAs must be increased to compensate for radiation absorbed by the grid","The percentage of scatter removed by the grid","The maximum kVp allowed when using a specific grid ratio"],
    a:1,
    exp:"Bucky factor (BF): the factor by which mAs must be multiplied when a grid is added to maintain the same density. BF = (primary + secondary) reaching IR without grid ÷ primary reaching IR with grid. Higher ratio grids have higher BF = more dose to patient.",
    oe:[
      "Lines per centimeter is the grid frequency — not the Bucky factor.",
      "Correct. Bucky factor = compensation factor for grid use. Example: BF of 4 means mAs must be 4× greater when using that grid compared to no grid.",
      "Percentage of scatter removed is the scatter cleanup efficiency — related to but distinct from Bucky factor.",
      "Maximum kVp per grid ratio is a grid selection guideline, not the Bucky factor definition."
    ]
  },

  { cat:"Image Production", sub:"Grids",
    q:"Grid cutoff (grid artifact) occurs when:",
    opts:["The kVp is too high for the grid ratio selected","The x-ray beam is not aligned with the convergence point of a focused grid","The grid is used at too short an SID","Both B and C are correct"],
    a:3,
    exp:"Grid cutoff = absorption of primary radiation by lead strips, causing unilateral or bilateral density loss. Causes: (1) beam misalignment with focused grid's convergence line, (2) using grid outside its focal range (wrong SID), (3) grid tilt, (4) off-center CR.",
    oe:[
      "kVp selection does not cause grid cutoff — misalignment or wrong SID causes cutoff.",
      "Beam misalignment with the convergence point is a cause — but so is using the wrong SID.",
      "Using too short an SID is a cause of grid cutoff — but beam misalignment is also a cause.",
      "Correct. Both beam misalignment AND wrong SID cause grid cutoff. Other causes include grid tilt and lateral decentering of the CR."
    ]
  },

  { cat:"Image Production", sub:"Grids",
    q:"A grid is generally recommended when the body part being radiographed is greater than:",
    opts:["5 cm","10 cm","15 cm","20 cm"],
    a:1,
    exp:"Grids are typically used for body parts ≥10 cm thick. Below 10 cm, the amount of scatter generated is small enough that a grid is not necessary and would only increase patient dose without meaningfully improving contrast.",
    oe:[
      "5 cm is too thin to generate significant scatter — a grid at this thickness would increase dose unnecessarily.",
      "Correct. ≥10 cm = grid recommended. The threshold reflects where scatter becomes significant enough to degrade contrast.",
      "15 cm is above the threshold — grids are used at 10 cm and above, not starting at 15 cm.",
      "20 cm is definitely above the threshold — grids are required, but the guideline starts at 10 cm."
    ]
  },

  // ──────────────────────── IMAGE PRODUCTION – AEC ────────────────────────

  { cat:"Image Production", sub:"AEC",
    q:"When using Automatic Exposure Control (AEC), the detector/cell should be placed under:",
    opts:["The thickest part of the patient regardless of the area of interest","The anatomic area of primary diagnostic interest","The edge of the collimation field","The grid to read grid efficiency"],
    a:1,
    exp:"AEC cells should be positioned under the area of PRIMARY diagnostic interest — the region the radiologist needs to evaluate. Incorrect cell placement causes over- or underexposure of the area of interest.",
    oe:[
      "Placing under the thickest part may expose for dense bone when the area of interest is soft tissue — incorrect cell placement.",
      "Correct. AEC cell under the area of diagnostic interest ensures that area is optimally exposed. For chest: lateral cells for lung fields. For abdomen: center cell for organ of interest.",
      "Placing the cell at the edge of collimation reads air, not tissue — this would cause massive overexposure.",
      "AEC cells measure radiation reaching the IR, not grid function — they must be positioned under the anatomy of interest."
    ]
  },

  { cat:"Image Production", sub:"AEC",
    q:"The backup time (backup mAs) on an AEC system is set to:",
    opts:["Reduce the maximum kVp if the exposure runs long","Terminate the exposure if the AEC fails to do so, protecting the patient and equipment","Improve image contrast for thin patients","Increase spatial resolution during long exposures"],
    a:1,
    exp:"Backup time/mAs is a safety device — if the AEC malfunctions and fails to terminate the exposure, the backup timer cuts the exposure at a preset limit (typically 150–200% of the expected mAs). It prevents radiation injury and tube damage.",
    oe:[
      "Backup time does not control kVp — kVp is set independently by the operator.",
      "Correct. Backup time = fail-safe mechanism. If the AEC fails, the backup terminates exposure — protecting the patient from excessive dose and the tube from overload.",
      "AEC does not adjust for patient size by altering contrast — the operator selects kVp and the AEC controls mAs.",
      "Backup time has no effect on spatial resolution — it is purely a safety termination device."
    ]
  },

  // ──────────────────────── IMAGE PRODUCTION – DIGITAL IMAGING ────────────────────────

  { cat:"Image Production", sub:"Digital Imaging",
    q:"In computed radiography (CR), the imaging plate contains a layer of:",
    opts:["Silver halide crystals","Cesium iodide (CsI) detector elements","Photostimulable phosphor (barium fluorohalide) crystals","Amorphous selenium"],
    a:2,
    exp:"CR imaging plates use photostimulable phosphor (PSP) — barium fluorohalide (BaFBr) doped with europium. X-ray energy is stored in the phosphor crystals. A laser scan during readout releases the stored energy as visible light, which is converted to a digital signal.",
    oe:[
      "Silver halide crystals are used in conventional film — not CR imaging plates.",
      "Cesium iodide (CsI) is used as the phosphor in many indirect digital radiography (DR) flat-panel detectors — not CR cassettes.",
      "Correct. CR = photostimulable phosphor (BaFBr:Eu) plate. Stores radiation as trapped electrons; laser light releases stored energy → light converted to digital image.",
      "Amorphous selenium is used in DIRECT digital radiography (DR) flat-panel detectors — not CR cassettes."
    ]
  },

  { cat:"Image Production", sub:"Digital Imaging",
    q:"Window width in digital radiography controls:",
    opts:["The brightness (lightness/darkness) of the displayed image","The number of shades of gray displayed (image contrast)","The spatial resolution of the image","The radiation dose to the patient"],
    a:1,
    exp:"Window width determines HOW MANY Hounsfield units (or pixel values) are mapped to the gray scale display — controlling CONTRAST. Narrow window width = high contrast (fewer shades of gray). Wide window width = low contrast (more shades of gray).",
    oe:[
      "Image brightness (lightness/darkness) is controlled by WINDOW LEVEL (window center) — not window width.",
      "Correct. Window width = contrast control. Narrow window = fewer gray shades = high contrast. Wide window = many gray shades = low contrast.",
      "Spatial resolution is determined by matrix size and pixel pitch — window width does not affect spatial resolution.",
      "Radiation dose is controlled by mAs, kVp, and technique — not window width."
    ]
  },

  { cat:"Image Production", sub:"Digital Imaging",
    q:"Window level (window center) controls:",
    opts:["Image contrast (number of gray shades)","Image brightness (overall lightness or darkness of the display)","Pixel matrix size","The dynamic range of the detector"],
    a:1,
    exp:"Window level sets the MIDPOINT of the gray scale display — controlling overall brightness. Increasing window level → image appears darker. Decreasing window level → image appears brighter. Used to optimize visualization of specific tissue densities.",
    oe:[
      "Image contrast (number of gray shades displayed) is controlled by WINDOW WIDTH — not window level.",
      "Correct. Window level = brightness control. Moving the level up or down shifts which tissue densities appear gray, white, or black on the display.",
      "Pixel matrix size is set during image acquisition and determines the resolution matrix — not controlled by windowing.",
      "Dynamic range is an inherent property of the detector — it cannot be changed by window level adjustment."
    ]
  },

  { cat:"Image Production", sub:"Digital Imaging",
    q:"The primary advantage of digital radiography over film-screen radiography in terms of exposure latitude is:",
    opts:["Digital systems require less radiation to produce a diagnostic image","Digital systems have a much wider dynamic range, allowing acceptable images over a broader range of exposures","Digital images can never be over- or underexposed","Digital systems eliminate the need for grids"],
    a:1,
    exp:"Digital systems have a far wider dynamic range (latitude) than film-screen — they can produce acceptable images over a much broader range of exposures. However, this creates the 'exposure creep' problem where overexposure goes undetected because the image still looks acceptable.",
    oe:[
      "Digital systems do not necessarily require less radiation — they can produce images at lower doses, but poor technique can still overexpose patients. Quantum noise (mottle) increases with underexposure.",
      "Correct. Wide dynamic range = greater exposure latitude. Overexposure in digital imaging is invisible on the image (it still looks correct) — but patient dose is unnecessarily increased.",
      "Digital images CAN be over- or underexposed — overexposure increases patient dose; underexposure produces quantum noise (mottle). The image may LOOK acceptable when overexposed due to post-processing.",
      "Grids are still required in digital radiography for body parts ≥10 cm — digital detectors do not eliminate scatter."
    ]
  },

  { cat:"Image Production", sub:"Digital Imaging",
    q:"Quantum noise (quantum mottle) in digital radiography is caused by:",
    opts:["Excessive kVp causing beam hardening","Inadequate radiation reaching the detector — too few photons to form a statistically smooth image","Grid misalignment artifacts","Electronic interference from nearby equipment"],
    a:1,
    exp:"Quantum noise (mottle) results from UNDEREXPOSURE — too few x-ray photons reach the detector. With fewer photons, statistical fluctuations in photon distribution become visible as a grainy, mottled appearance on the image.",
    oe:[
      "Excessive kVp does not cause quantum mottle — it may affect contrast but not quantum noise.",
      "Correct. Quantum noise = too few photons reaching the detector. Insufficient photons → visible statistical randomness in the image → grainy appearance. Solution: increase mAs.",
      "Grid misalignment causes grid cutoff (density loss bands) — not quantum noise.",
      "Electronic interference causes specific artifact patterns — quantum noise is a statistical photon phenomenon."
    ]
  },

  { cat:"Image Production", sub:"Digital Imaging",
    q:"PACS stands for:",
    opts:["Picture Archiving and Communication System","Patient Access and Control System","Photostimulable Acquisition and Capture System","Primary Automated Calibration System"],
    a:0,
    exp:"PACS = Picture Archiving and Communication System. It stores, retrieves, distributes, and displays digital medical images. PACS replaced film libraries, enabling instant image access from any workstation in the hospital.",
    oe:[
      "Correct. PACS = Picture Archiving and Communication System. Enables filmless radiology — images stored digitally and accessed from remote workstations by radiologists and clinicians.",
      "Patient Access and Control System is not a real radiology acronym.",
      "Photostimulable Acquisition and Capture refers to CR technology aspects — not the complete picture archiving system.",
      "Primary Automated Calibration System is not a recognized radiology acronym."
    ]
  },

  // ──────────────────────── IMAGE PRODUCTION – IMAGE QUALITY ────────────────────────

  { cat:"Image Production", sub:"Spatial Resolution",
    q:"Geometric unsharpness (penumbra) is DECREASED by:",
    opts:["Increasing OID and decreasing SID","Decreasing SID and increasing focal spot size","Using a small focal spot and minimizing OID","Using a large focal spot and maximum SID"],
    a:2,
    exp:"Penumbra (geometric unsharpness) is minimized by: (1) SMALL focal spot (less divergence), (2) minimum OID (body part close to IR), (3) maximum SID. Rule: small FS + short OID + long SID = least penumbra = sharpest image.",
    oe:[
      "Increasing OID INCREASES penumbra — more distance between object and IR = more geometric unsharpness.",
      "Decreasing SID increases penumbra — shorter SID = more beam divergence at the IR level.",
      "Correct. Small focal spot + minimum OID = least penumbra. These two factors are the primary controls for geometric unsharpness reduction.",
      "Large focal spot creates MORE penumbra — the opposite of what's needed for sharp recorded detail."
    ]
  },

  { cat:"Image Production", sub:"Image Contrast",
    q:"Scattered radiation primarily affects radiographic image quality by:",
    opts:["Increasing spatial resolution","Adding unwanted gray tones that decrease contrast and fog the image","Increasing the overall brightness of the image","Improving visibility of low-contrast structures"],
    a:1,
    exp:"Scatter radiation reaches the IR without carrying anatomical information — it adds a uniform gray fog to the image, REDUCING contrast and OBSCURING detail. Grids, collimation, and compression are used to reduce scatter reaching the IR.",
    oe:[
      "Scatter does not affect spatial resolution (sharpness) — it affects contrast and fog level.",
      "Correct. Scatter = image fog = reduced contrast. Scattered photons carry no anatomical information — they add uniform density that 'washes out' the image.",
      "Scatter does increase overall brightness (fog), but this is harmful — it masks true subject contrast rather than improving it.",
      "Scatter reduces, not improves, visibility of low-contrast structures — it adds noise that obscures subtle density differences."
    ]
  },

  { cat:"Image Production", sub:"Filtration",
    q:"The purpose of added filtration in the x-ray beam is to:",
    opts:["Increase the number of high-energy photons to penetrate thick body parts","Remove low-energy photons that would be absorbed by the patient without contributing to the image","Increase radiographic contrast by narrowing the beam spectrum","Reduce scatter radiation from the patient"],
    a:1,
    exp:"Added filtration (aluminum, 0.5–3 mm) removes low-energy photons that are too weak to penetrate tissue and reach the IR — they only add to patient skin dose (photoelectric absorption). Removing them 'hardens' the beam and reduces patient dose without significantly affecting image quality.",
    oe:[
      "Filtration REMOVES low-energy photons — it does not increase the high-energy photon quantity relative to what exits the tube.",
      "Correct. Added filtration removes low-energy (soft) photons → reduces patient dose from non-diagnostic radiation → 'beam hardening.' Required: minimum 2.5 mm Al total filtration for units above 70 kVp.",
      "Filtration reduces contrast slightly (removing low-energy photons that contribute to photoelectric differential absorption) — it does not narrow the spectrum in a way that increases contrast.",
      "Filtration reduces patient skin dose — scatter FROM the patient is controlled by grids and collimation, not filtration."
    ]
  },

  { cat:"Image Production", sub:"Filtration",
    q:"The minimum total filtration required for x-ray equipment operating above 70 kVp is:",
    opts:["0.5 mm Al","1.5 mm Al","2.5 mm Al","5 mm Al"],
    a:2,
    exp:"NCRP requires a minimum total filtration of 2.5 mm aluminum equivalent for x-ray equipment operating above 70 kVp. This includes inherent filtration (glass envelope + oil + window ≈ 0.5 mm Al) plus added filtration.",
    oe:[
      "0.5 mm Al is approximately the inherent filtration alone — insufficient total filtration for equipment above 70 kVp.",
      "1.5 mm Al is required for units operating 50–70 kVp — not for those above 70 kVp.",
      "Correct. 2.5 mm Al equivalent total filtration is required for equipment operating above 70 kVp per NCRP standards.",
      "5 mm Al is more than required — excessive filtration would remove diagnostic photons unnecessarily."
    ]
  },

  { cat:"Image Production", sub:"Spatial Resolution",
    q:"Magnification of a radiographic image is calculated using the formula:",
    opts:["OID ÷ SID","SID ÷ SOD (source-to-object distance)","SOD ÷ OID","mAs × kVp"],
    a:1,
    exp:"Magnification factor (MF) = SID ÷ SOD. Since SOD = SID − OID, increasing OID increases MF. Example: SID = 100 cm, OID = 10 cm → SOD = 90 cm → MF = 100/90 = 1.11 (11% magnification).",
    oe:[
      "OID ÷ SID is the inverse of the magnification formula — this would give a value less than 1.",
      "Correct. MF = SID ÷ SOD. All radiographic images have some magnification (MF > 1) due to OID. Minimize OID to minimize magnification.",
      "SOD ÷ OID is not the magnification formula — this does not produce a standardized magnification factor.",
      "mAs × kVp is an exposure technique product — it has no relation to magnification calculation."
    ]
  },

  // ──────────────────────── PROCEDURES – CHEST POSITIONING ────────────────────────

  { cat:"Procedures", sub:"Chest",
    q:"For a PA chest radiograph, the standard source-to-image receptor distance (SID) is:",
    opts:["72 cm (28 inches)","100 cm (40 inches)","183 cm (72 inches)","200 cm (80 inches)"],
    a:2,
    exp:"PA chest: 72-inch (183 cm) SID is standard. The long SID minimizes heart magnification (since the heart is anterior, away from the IR on a PA). Short SID excessively magnifies the cardiac silhouette.",
    oe:[
      "72 cm is too short for a PA chest — it would cause unacceptable cardiac magnification.",
      "100 cm is used for many other projections but not the standard PA chest, which requires 72 inches.",
      "Correct. 72-inch (183 cm) SID for PA chest. This distance minimizes the cardiac shadow magnification by keeping divergence low.",
      "200 cm is unnecessarily long — 72 inches is the established standard."
    ]
  },

  { cat:"Procedures", sub:"Chest",
    q:"On a PA chest radiograph, the patient's rotation is evaluated by:",
    opts:["Comparing the lengths of both clavicles","Checking symmetry of the medial clavicular ends relative to the spine (spinous process)","Counting the number of ribs visible","Comparing the width of both lung fields"],
    a:1,
    exp:"Rotation check on PA chest: the medial ends of both clavicles should be equidistant from the spinous process of the thoracic vertebra at that level. Rotation moves one clavicular end closer and the other farther — indicating the patient was turned.",
    oe:[
      "Clavicle length comparison is not the standard rotation test — clavicles vary in length between individuals.",
      "Correct. Equal distance from clavicular medial ends to the thoracic spinous process = no rotation. Unequal distances = patient rotation.",
      "Rib counting assesses depth of inspiration — not rotation.",
      "Lung field width comparison can suggest rotation, but the clavicle-spine relationship is the specific, accepted rotation criterion."
    ]
  },

  { cat:"Procedures", sub:"Chest",
    q:"The AP lordotic projection of the chest is used primarily to:",
    opts:["Evaluate free air under the diaphragm","Project the clavicles above the apices to visualize the lung apices free of superimposition","Demonstrate air-fluid levels in the pleural space","Evaluate the heart in a cardiac series"],
    a:1,
    exp:"Lordotic (AP lordotic/Lindblom) projection: patient leans back (or CR angled cranially 15–20°), projecting the clavicles upward above the lung apices. This removes clavicular superimposition and reveals apical lung lesions (e.g., TB, apical tumors).",
    oe:[
      "Free air under the diaphragm is evaluated by an erect PA chest or left lateral decubitus abdomen — not the lordotic view.",
      "Correct. AP lordotic = clavicles projected above the apices → lung apex free of bony superimposition. Classic view for apical TB surveillance.",
      "Air-fluid levels in the pleural space are shown on erect PA or lateral decubitus projections — not the lordotic view.",
      "Cardiac series uses multiple projections (PA, lateral, RAO, LAO) — the lordotic is not part of a cardiac series."
    ]
  },

  { cat:"Procedures", sub:"Chest",
    q:"For a left lateral decubitus chest radiograph, the patient lies on their LEFT side with a horizontal beam. This position is used to demonstrate:",
    opts:["Pneumothorax on the left side","Free pleural fluid on the right side (fluid layers dependently)","Heart enlargement","Pulmonary edema"],
    a:1,
    exp:"Left lateral decubitus (LLD): patient on left side → RIGHT side is now UP (non-dependent). Free fluid in the LEFT pleural space layers dependently (left side down). Free air in the RIGHT pleural space rises to the non-dependent (right) side and is demonstrated above the liver.",
    oe:[
      "Pneumothorax on the left would be demonstrated by a RIGHT lateral decubitus — air rises to the non-dependent (elevated) side.",
      "Correct. LLD → right pleural space is UP → air (pneumothorax) would be visible on the right. Also, left pleural fluid layers dependently on the left, and the right side is now air-filled for comparison.",
      "Heart enlargement is evaluated on PA and lateral chest — decubitus is for fluid/air detection.",
      "Pulmonary edema is evaluated on PA or AP chest — not decubitus projections."
    ]
  },

  { cat:"Procedures", sub:"Chest",
    q:"For a lateral chest radiograph, the patient's LEFT side is typically placed against the image receptor because:",
    opts:["It is easier for right-handed radiographers","The left lateral minimizes heart magnification since the heart is left-sided and closer to the IR","The left lung is larger and requires less magnification","Positioning preference is irrelevant for the lateral chest"],
    a:1,
    exp:"Left lateral chest: left side against IR → heart is closer to the detector → less magnification of the cardiac shadow. If the right side were against the IR, the left-sided heart would be farther from the IR and more magnified.",
    oe:[
      "Handedness of the radiographer is not a consideration in standard projection selection.",
      "Correct. Left lateral = left side against IR = heart (left-sided) is closest to IR = minimal cardiac magnification. This is the standard lateral chest projection.",
      "The left lung is slightly smaller than the right (due to the heart's position) — not a reason to choose the left lateral.",
      "Side selection matters significantly — left lateral is specifically chosen to minimize cardiac magnification."
    ]
  },

  // ──────────────────────── PROCEDURES – UPPER EXTREMITY ────────────────────────

  { cat:"Procedures", sub:"Upper Extremity",
    q:"For a PA projection of the hand, the central ray is directed:",
    opts:["15° proximally to the third metacarpophalangeal joint","Perpendicular to the IR, to the third metacarpophalangeal joint","10° distally to the wrist","Perpendicular to the IR, to the fifth digit"],
    a:1,
    exp:"PA hand: patient's hand flat, fingers extended, palm down on the IR. CR perpendicular (no angle) directed to the third (middle) metacarpophalangeal (MCP) joint. Demonstrates phalanges, metacarpals, carpals, and soft tissues.",
    oe:[
      "A 15° proximal angle is not standard for the PA hand — the CR is perpendicular.",
      "Correct. PA hand: CR perpendicular, directed to the 3rd MCP joint. Demonstrates all bones and joints of the hand in PA projection.",
      "A 10° distal angle toward the wrist is not standard — the CR goes to the 3rd MCP joint perpendicular.",
      "Centering to the fifth digit would not center the field appropriately for the entire hand."
    ]
  },

  { cat:"Procedures", sub:"Upper Extremity",
    q:"The Norgaard method (ball-catcher position) is used to demonstrate:",
    opts:["Carpal tunnel syndrome","Early erosive changes in rheumatoid arthritis at the MCP joints","Scaphoid fractures","Radial head fractures"],
    a:1,
    exp:"Norgaard (ball-catcher): both hands in the same AP oblique projection (as if holding a ball), fingers together, 45° oblique. This projection specifically shows the radial (lateral) aspects of the MCP joints — the earliest site of rheumatoid arthritis erosion.",
    oe:[
      "Carpal tunnel syndrome is evaluated by the carpal canal (tangential) projection — not the Norgaard method.",
      "Correct. Norgaard (ball-catcher) = bilateral AP oblique hands → demonstrates MCP joint radial surfaces → early RA erosion detection.",
      "Scaphoid fractures are evaluated by PA with ulnar deviation and multiple oblique views — not the Norgaard.",
      "Radial head fractures are evaluated with the radial head–capitellum (lateral oblique elbow) view — not the Norgaard."
    ]
  },

  { cat:"Procedures", sub:"Upper Extremity",
    q:"For a PA projection of the wrist, the central ray is directed:",
    opts:["15° proximally toward the elbow","Perpendicular to the midcarpal area","10° toward the ulnar styloid","Perpendicular to the distal radius"],
    a:1,
    exp:"PA wrist: patient's hand pronated (palm down), wrist centered on the IR. CR perpendicular to the midcarpal area (center of the carpals). Demonstrates the eight carpal bones, distal radius and ulna, and bases of the metacarpals.",
    oe:[
      "A 15° proximal angle is used for some carpal-specific views — not the standard PA wrist.",
      "Correct. PA wrist: CR perpendicular to the midcarpal area. The standard projection for wrist evaluation.",
      "Angling toward the ulnar styloid is not standard for the PA wrist projection.",
      "Centering to the distal radius would not adequately demonstrate the carpals, which are the primary focus."
    ]
  },

  { cat:"Procedures", sub:"Upper Extremity",
    q:"To best demonstrate a suspected scaphoid fracture, the recommended additional view beyond routine wrist projections is:",
    opts:["Lateral wrist in flexion","PA wrist with ulnar deviation","AP wrist in supination","Carpal canal (tangential) view"],
    a:1,
    exp:"PA with ulnar deviation (radial deviation of the wrist moves the scaphoid into a more elongated, profile position — actually ulnar deviation opens the scaphoid). Ulnar deviation opens the scaphoid waist and removes adjacent carpal superimposition for better visualization.",
    oe:[
      "Lateral wrist in flexion is not a standard scaphoid-specific view — the lateral is routine but not optimized for scaphoid.",
      "Correct. PA wrist with ULNAR deviation elongates the scaphoid and reduces superimposition — the dedicated scaphoid projection. Additional oblique and angled views may supplement.",
      "AP wrist in supination would overlap carpal bones — not helpful for scaphoid evaluation.",
      "Carpal canal (tangential) projects the carpal tunnel — it demonstrates the palmar surfaces of carpals, not the scaphoid specifically."
    ]
  },

  { cat:"Procedures", sub:"Upper Extremity",
    q:"For a lateral projection of the elbow, the elbow must be flexed to:",
    opts:["45°","90°","135°","Full extension (0°)"],
    a:1,
    exp:"Lateral elbow: flexed 90° with the thumb up (lateral position). The olecranon, trochlea, and radial head are demonstrated. Flexing to exactly 90° prevents rotation and separates the condyles.",
    oe:[
      "45° flexion is insufficient — the elbow must be at 90° for the true lateral projection.",
      "Correct. Lateral elbow = 90° flexion. Thumb pointing up (lateral position). CR perpendicular to the elbow joint.",
      "135° flexion does not achieve a true lateral — the joint would be partially flexed with the arm overlapping.",
      "Full extension (0°) is used for the AP elbow projection — not the lateral."
    ]
  },

  { cat:"Procedures", sub:"Upper Extremity",
    q:"For an AP projection of the elbow, the patient's arm is:",
    opts:["Flexed 90° with the thumb up","Fully extended with the forearm supinated (palm up)","Pronated with the elbow on the table","Flexed 45° with the humerus parallel to the IR"],
    a:1,
    exp:"AP elbow: arm fully extended, forearm SUPINATED (palm up) to place the radius and ulna parallel and avoid superimposition. CR perpendicular to the elbow joint. Demonstrates the distal humerus, radial head, and olecranon in AP projection.",
    oe:[
      "Flexed 90° with thumb up is the LATERAL elbow position — not the AP.",
      "Correct. AP elbow = arm fully extended + forearm supinated. This unwinds the radius and ulna for a true AP without superimposition.",
      "Pronated forearm is used for the PA forearm — pronation causes radius and ulna to cross, creating superimposition on the AP elbow.",
      "45° flexion with humerus parallel is a modified position used when the patient cannot extend — not the standard AP."
    ]
  },

  { cat:"Procedures", sub:"Upper Extremity",
    q:"External rotation of the shoulder for an AP projection demonstrates:",
    opts:["The lesser tubercle in profile","The greater tubercle in profile on the lateral aspect of the humerus","The glenoid cavity en face","The acromioclavicular (AC) joint space"],
    a:1,
    exp:"AP shoulder external rotation: the humerus is laterally rotated so the greater tubercle projects in profile on the lateral humerus. The greater tubercle is the most common site of rotator cuff calcific tendinitis (supraspinatus). This is the standard AP shoulder.",
    oe:[
      "The lesser tubercle is profiled in the INTERNAL rotation AP shoulder — not external rotation.",
      "Correct. External rotation AP shoulder = greater tubercle in profile (lateral side). Used to evaluate calcific deposits in the supraspinatus tendon.",
      "The glenoid cavity is best demonstrated on the oblique (Grashey) AP shoulder — not standard external rotation.",
      "The AC joint space is evaluated on a separate AP projection with the CR centered between the clavicle and acromion — not the standard AP shoulder."
    ]
  },

  { cat:"Procedures", sub:"Upper Extremity",
    q:"Internal rotation of the shoulder for an AP projection demonstrates:",
    opts:["The greater tubercle in profile","The lesser tubercle in profile on the medial aspect of the humerus","The acromioclavicular joint","The coracoid process in profile"],
    a:1,
    exp:"AP shoulder internal rotation: the humerus is medially rotated so the lesser tubercle projects in profile medially. The humerus appears as if viewed from the back of the shoulder — like a 'light bulb' shape. Used as a complementary view to external rotation.",
    oe:[
      "The greater tubercle in profile is seen on EXTERNAL rotation — not internal.",
      "Correct. Internal rotation AP shoulder = lesser tubercle in profile (medial side). Humerus appears 'light-bulb' shaped. Evaluates the lesser tubercle for subscapularis calcification.",
      "The AC joint is demonstrated on a dedicated AP AC joint projection — not the standard internal rotation shoulder.",
      "The coracoid process is demonstrated on special axial projections or tangential views — not the standard internal rotation AP."
    ]
  },

  { cat:"Procedures", sub:"Upper Extremity",
    q:"The inferosuperior axial (Lawrence) shoulder projection requires:",
    opts:["The arm elevated to 90° abduction, IR placed superior to the shoulder, CR horizontal through the axilla","The patient in the prone position with the arm extended","The arm in internal rotation and the IR against the chest","The patient erect with the arm hanging at the side"],
    a:0,
    exp:"Lawrence method (inferosuperior axial): arm abducted 90°, IR placed on top of the shoulder, CR directed horizontally through the axilla from below-medially. Demonstrates the glenohumeral joint, Hill-Sachs deformity, and subscapularis tendon. Used when the patient cannot internally rotate.",
    oe:[
      "Correct. Lawrence = arm abducted 90°, IR on top of shoulder, CR horizontal through axilla. Demonstrates glenoid, humeral head, and coracoid from below.",
      "Prone position is not used for shoulder projections — shoulder studies are done erect or supine.",
      "Internal rotation with IR against the chest describes the Clements-Nakayama modification, not the Lawrence.",
      "Arm hanging at the side with erect patient is the standard AP shoulder setup — not the axial Lawrence view."
    ]
  },

  { cat:"Procedures", sub:"Upper Extremity",
    q:"The scapular Y (true lateral shoulder) projection is used to evaluate:",
    opts:["Acromioclavicular separation","The relationship between the humeral head and glenoid cavity (dislocation)","Rotator cuff calcification","Clavicular fractures"],
    a:1,
    exp:"Scapular Y (lateral shoulder): patient in 45–60° RAO or LAO, shoulder against IR. The scapula projects as a Y-shape (body + spine + coracoid). The humeral head should be centered over the Y junction. Anterior or posterior dislocation is diagnosed by where the head lies relative to the glenoid.",
    oe:[
      "AC separation is evaluated on AP bilateral AC joints with weight-bearing — not the scapular Y.",
      "Correct. Scapular Y = dislocation assessment. Anterior dislocation: head projects anterior (below coracoid); posterior dislocation: head projects posterior (behind spine). The glenoid is at the center of the Y.",
      "Rotator cuff calcification is evaluated on AP shoulder (external rotation) — not the scapular Y.",
      "Clavicular fractures are evaluated on AP clavicle projections — not the shoulder scapular Y."
    ]
  },

  { cat:"Procedures", sub:"Upper Extremity",
    q:"The transthoracic lateral projection (Lawrence method for humerus) is performed when:",
    opts:["Evaluating the shoulder in routine cases","The patient cannot abduct the injured arm and a lateral humerus is needed","Demonstrating the scapula in profile","Evaluating the acromioclavicular joints bilaterally"],
    a:1,
    exp:"Transthoracic lateral humerus: patient erect or supine, injured arm at the side, opposite arm raised over the head. CR directed horizontally through the thorax to produce a lateral image of the proximal humerus projected through the chest. Used for suspected proximal humerus fractures when arm movement is contraindicated.",
    oe:[
      "Routine shoulder evaluation uses standard AP (external/internal rotation) and scapular Y projections — not the transthoracic.",
      "Correct. Transthoracic lateral = lateral view of the proximal humerus WITHOUT moving the injured arm. Opposite arm elevated to clear the shoulder; CR goes through the thorax.",
      "Scapula in profile is the lateral scapula projection — a different procedure.",
      "Bilateral AC joints are evaluated on a dedicated AP bilateral projection — not the transthoracic lateral."
    ]
  },

  // ──────────────────────── PROCEDURES – LOWER EXTREMITY ────────────────────────

  { cat:"Procedures", sub:"Lower Extremity",
    q:"For an AP projection of the foot, the central ray is angled:",
    opts:["0° (perpendicular)","10° toward the heel (proximally)","15° toward the toes (distally)","15° toward the heel (proximally)"],
    a:1,
    exp:"AP foot: CR angled 10° toward the heel (posteriorly/proximally). This angle compensates for the normal longitudinal arch, projecting the metatarsal bases without superimposition and demonstrating the tarsometatarsal joints more clearly.",
    oe:[
      "0° (perpendicular) is used for some toe projections — for the AP foot, a 10° proximal (heel) angle is standard.",
      "Correct. AP foot: 10° angle toward the heel (posteriorly). This reduces superimposition at the tarsometatarsal joints.",
      "15° toward the toes (distally) is the direction for some oblique views — not the standard AP foot.",
      "15° toward the heel is too steep — the standard is 10° proximal."
    ]
  },

  { cat:"Procedures", sub:"Lower Extremity",
    q:"The medial oblique projection of the foot is obtained by rotating the foot:",
    opts:["30–40° laterally (foot turned outward)","30–40° medially (foot turned inward)","90° into a lateral position","15° with the plantar surface perpendicular to the IR"],
    a:1,
    exp:"Medial oblique foot: the foot is rotated 30–40° MEDIALLY (turned inward, dorsal surface rotated toward the table). This is the most commonly requested oblique — demonstrates the 3rd–5th metatarsals, cuboid, lateral cuneiforms, and sinus tarsi free of superimposition.",
    oe:[
      "Rotating 30–40° laterally (outward) produces a LATERAL oblique foot — this is less commonly requested.",
      "Correct. Medial oblique foot = 30–40° medial (inward) rotation. Demonstrates the lateral metatarsals and cuboid. Most common oblique foot projection.",
      "90° rotation produces a lateral foot projection — not an oblique.",
      "15° perpendicular plantar surface is not a standard oblique position."
    ]
  },

  { cat:"Procedures", sub:"Lower Extremity",
    q:"The axial (plantodorsal) projection of the calcaneus requires the central ray to be directed:",
    opts:["Perpendicular to the plantar surface of the heel","40° anteriorly (cranially) from the vertical, toward the ankle joint","15° toward the knee","Perpendicular to the IR with the foot in dorsiflexion"],
    a:1,
    exp:"Plantodorsal (axial) calcaneus: CR directed 40° cranially (anteriorly) from the vertical, entering the heel pad and exiting the ankle joint. The IR is placed posterior to the heel. Demonstrates the body and tuberosity of the calcaneus.",
    oe:[
      "Perpendicular to the plantar surface would not demonstrate the calcaneus in profile — a 40° angle is needed.",
      "Correct. Plantodorsal calcaneus: 40° cranial CR angle. Demonstrates the calcaneus in axial profile, showing the sustentaculum tali and calcaneal body.",
      "15° toward the knee is too shallow — the standard is 40° for the axial calcaneus.",
      "Perpendicular with dorsiflexion is the lateral calcaneus position — not the axial."
    ]
  },

  { cat:"Procedures", sub:"Lower Extremity",
    q:"The mortise projection of the ankle is obtained by rotating the leg and foot:",
    opts:["15–20° externally (outward)","15–20° internally (inward)","45° externally into an oblique","Into full lateral position (90°)"],
    a:1,
    exp:"Mortise ankle: the entire leg and foot are internally rotated 15–20° to place both malleoli parallel to the IR. This opens the ankle mortise (talocrural joint space) so all three joint space components (medial, superior, lateral) are demonstrated without overlap.",
    oe:[
      "External rotation 15–20° opens the medial malleolus away from the tibia — it does NOT produce the mortise view.",
      "Correct. Mortise = 15–20° internal rotation of the entire leg/foot. Both malleoli become parallel to the IR, demonstrating the full mortise joint space without fibular overlap.",
      "45° external rotation produces an oblique ankle projection — not the mortise.",
      "Full lateral (90°) produces a lateral ankle projection — not the mortise."
    ]
  },

  { cat:"Procedures", sub:"Lower Extremity",
    q:"For an AP projection of the knee, the central ray is angled:",
    opts:["0° (perpendicular) for all patients","5–7° caudally (toward the feet) for patients with a 180° femur-tibia angle","3–5° cranially for patients with a large abdomen","Angled until parallel to the tibial plateau"],
    a:3,
    exp:"AP knee CR angle depends on patient anatomy and the slope of the tibial plateau. Standard: 3–5° cranial for routine patients; 3–5° caudal if the ASIS-to-table distance is <19 cm (thin patient). Goal: CR parallel to the tibial plateau for true joint space demonstration.",
    oe:[
      "0° is not always appropriate — the angle must compensate for the tibial plateau slope to open the knee joint space.",
      "Caudal angles are used for thin patients (<19 cm ASIS-table distance) — large/thick patients require cranial angulation.",
      "Cranial angulation is used for large/thick patients — not specifically for large abdomens. The ASIS-to-table measurement guides the angle.",
      "Correct. The CR must be parallel to the tibial plateau — the angle varies from 3–5° caudal (thin) to 3–5° cranial (thick) based on patient build."
    ]
  },

  { cat:"Procedures", sub:"Lower Extremity",
    q:"The PA oblique knee projection in INTERNAL rotation (medial oblique) best demonstrates:",
    opts:["Fibular head and neck free of superimposition","Medial femoral and tibial condyles","Tibial spine and intercondylar eminence","Proximal tibiofibular articulation"],
    a:0,
    exp:"PA oblique knee (internal rotation) = medial oblique: the knee is rotated 45° medially. This projects the FIBULAR HEAD AND NECK free of tibial superimposition and demonstrates the proximal tibiofibular joint. The lateral tibial plateau is also well demonstrated.",
    oe:[
      "Correct. Internal rotation oblique = fibular head/neck free from tibia superimposition. Best view for proximal fibula evaluation.",
      "Medial condyles are better visualized on the external rotation oblique, not internal.",
      "Tibial spine and intercondylar eminence are seen on the tunnel (Camp-Coventry) projection — not the routine oblique.",
      "The proximal tibiofibular articulation is a component but the primary purpose is demonstrating the fibular head/neck."
    ]
  },

  { cat:"Procedures", sub:"Lower Extremity",
    q:"The tunnel view (Camp-Coventry method) of the knee is performed with the patient prone and the knee flexed to approximately 40–50°. Its primary purpose is to demonstrate:",
    opts:["The patella tangentially","The medial and lateral condyles in AP","The intercondylar fossa and tibial spines","The proximal fibula"],
    a:2,
    exp:"Tunnel (Camp-Coventry): prone patient, knee flexed 40–50°, CR angled 40–50° caudally. This opens the intercondylar fossa, demonstrating the tibial spines, intercondylar eminence, and posterior femoral condyles. Detects osteochondral defects and loose bodies in the fossa.",
    oe:[
      "Tangential patella views (Merchant, Settegast, Hughston) demonstrate the patellofemoral joint — not the tunnel view.",
      "Medial and lateral condyles in AP are seen on the routine AP knee — the tunnel opens the intercondylar fossa specifically.",
      "Correct. Tunnel = intercondylar fossa and tibial spines. Knee flexion + caudal CR angle opens the fossa to show osteochondral defects and loose bodies.",
      "The proximal fibula is evaluated on the AP knee or the internal rotation oblique — not the tunnel view."
    ]
  },

  { cat:"Procedures", sub:"Lower Extremity",
    q:"For a lateral projection of the knee, the knee is flexed to approximately:",
    opts:["10–15°","20–30°","45°","90°"],
    a:1,
    exp:"Lateral knee: 20–30° flexion with the lateral (affected) side against the IR. This slight flexion relaxes the joint and opens the anterior joint space for demonstration. The patella is seen in lateral projection and the joint space is open.",
    oe:[
      "10–15° flexion is too slight — the joint space may not open adequately.",
      "Correct. Lateral knee = 20–30° flexion. Slight flexion is needed to relax the joint and demonstrate the patellofemoral and tibiofemoral joint spaces.",
      "45° flexion is used for some specific studies (e.g., Settegast for patella) — excessive for the routine lateral knee.",
      "90° flexion is used for the tunnel view (Camp-Coventry) — too much flexion for a routine lateral knee."
    ]
  },

  { cat:"Procedures", sub:"Lower Extremity",
    q:"For an AP projection of the hip, the lower extremity is positioned with the foot:",
    opts:["In neutral (toes pointing up)","Rotated externally 15–20°","Rotated internally 15–20° (toes pointing inward)","Dorsiflexed at 90°"],
    a:2,
    exp:"AP hip: internal rotation of 15–20° (toes pointing medially/inward) places the femoral neck parallel to the IR in a true AP projection, demonstrating the neck in its greatest length without foreshortening. The greater trochanter is seen in profile on the lateral side.",
    oe:[
      "Neutral position (toes pointing up) produces a slight external rotation of the femur — the femoral neck appears partially foreshortened.",
      "External rotation shows the lesser trochanter in profile and foreshortens the femoral neck — not a true AP hip.",
      "Correct. Internal rotation 15–20° = true AP hip. Femoral neck becomes parallel to IR → full length demonstrated. External rotation foreshortens the neck.",
      "Dorsiflexion refers to ankle movement — it has no relevance to hip positioning."
    ]
  },

  { cat:"Procedures", sub:"Lower Extremity",
    q:"The modified Cleaves (bilateral frog-leg) projection of the hips requires the patient to:",
    opts:["Lie supine with both hips and knees flexed and thighs abducted 40–45°","Lie supine with legs straight and feet in internal rotation","Lie on one side in lateral position","Stand erect with legs apart"],
    a:0,
    exp:"Modified Cleaves (frog-leg lateral): supine, hips and knees flexed, soles of feet together, thighs abducted 40–45°. Demonstrates both femoral heads and necks simultaneously in lateral projection. CONTRAINDICATED with suspected hip fracture.",
    oe:[
      "Correct. Modified Cleaves = supine, hips/knees flexed, thighs abducted 40–45°, soles together. Bilateral frog-leg lateral for routine hip evaluation.",
      "Supine with straight legs and internal rotation is the AP pelvis/hip setup — not the frog-leg.",
      "Side-lying lateral is a different projection — the frog-leg is performed supine.",
      "Standing is used for weight-bearing joint studies — not the frog-leg hip projection."
    ]
  },

  { cat:"Procedures", sub:"Lower Extremity",
    q:"For an AP projection of the femur, the leg is positioned with:",
    opts:["15–20° external rotation to profile the lesser trochanter","15–20° internal rotation to profile the greater trochanter and show the neck without foreshortening","90° abduction","Neutral rotation with no adjustment"],
    a:1,
    exp:"AP femur: 15–20° internal rotation to align the femoral neck parallel to the IR, demonstrating the shaft and proximal femur similarly to the AP hip. This reduces foreshortening and profiles the greater trochanter laterally.",
    oe:[
      "External rotation profiles the lesser trochanter but foreshortens the femoral neck — not correct for a true AP femur.",
      "Correct. Internal rotation 15–20° = femoral neck parallel to IR → true AP projection. Greater trochanter in profile on lateral side.",
      "90° abduction is not achievable in a standard femur projection.",
      "Neutral rotation leaves the femoral neck partially foreshortened — internal rotation is specifically required."
    ]
  },

  // ──────────────────────── PROCEDURES – SPINE ────────────────────────

  { cat:"Procedures", sub:"Spine",
    q:"The open-mouth AP projection is used to demonstrate:",
    opts:["C5–C7 and the cervicothoracic junction","The atlas (C1) and the odontoid process (dens) of C2","The intervertebral foramina of the cervical spine","The facet joints of the upper cervical spine"],
    a:1,
    exp:"AP open-mouth (odontoid): patient's mouth open wide, CR perpendicular through the open mouth. Demonstrates C1 (atlas) and the odontoid process (dens) of C2 — structures otherwise hidden by the teeth. Essential for evaluating atlantoaxial instability and odontoid fractures.",
    oe:[
      "C5–C7 and the cervicothoracic junction are demonstrated by the swimmer's lateral projection.",
      "Correct. Open-mouth AP = C1 and odontoid (dens of C2). The patient's open mouth creates a window through which C1–C2 can be seen without tooth superimposition.",
      "Cervical intervertebral foramina are demonstrated on oblique cervical projections.",
      "Facet joints are demonstrated on lateral and oblique projections — the open-mouth specifically targets C1–C2."
    ]
  },

  { cat:"Procedures", sub:"Spine",
    q:"The AP axial projection of the cervical spine uses a central ray angled:",
    opts:["10° caudally","15–20° cranially (cephalad)","5° caudally","Perpendicular to the IR"],
    a:1,
    exp:"AP axial cervical: CR angled 15–20° cranially (cephalad). This angle aligns the CR parallel to the intervertebral disc spaces, opening the joint spaces for visualization. Without the cranial angle, the mandible and cervical bodies superimpose.",
    oe:[
      "A caudal angle is used for other AP axial projections (e.g., sacrum, Towne skull) — the cervical AP uses a CRANIAL angle.",
      "Correct. AP axial cervical: 15–20° cranially. Opens the cervical intervertebral disc spaces for better C3–C7 visualization.",
      "5° caudal is in the wrong direction for AP cervical spine.",
      "Perpendicular CR does not adequately open the disc spaces — the cranial angle is necessary."
    ]
  },

  { cat:"Procedures", sub:"Spine",
    q:"Oblique projections of the cervical spine demonstrate:",
    opts:["The odontoid process","The intervertebral (neural) foramina","The spinous processes","The atlantoaxial joint"],
    a:1,
    exp:"Cervical obliques (RAO/LAO or RPO/LPO): 45° rotation demonstrates the intervertebral foramina of the opposite side. RAO shows the LEFT foramina; LAO shows the RIGHT foramina. Foraminal narrowing causes cervical radiculopathy.",
    oe:[
      "The odontoid process is demonstrated on the open-mouth AP projection — not the obliques.",
      "Correct. Cervical obliques = intervertebral foramina on the OPPOSITE side from the rotation. RAO = left foramina; LAO = right foramina.",
      "Spinous processes are best seen on the lateral projection.",
      "The atlantoaxial joint (C1–C2) is evaluated on the open-mouth and lateral projections."
    ]
  },

  { cat:"Procedures", sub:"Spine",
    q:"The swimmer's lateral projection is used to demonstrate:",
    opts:["C1–C2 (atlas and axis)","The cervicothoracic junction (C6–T3) when shoulders obscure the lateral view","The lumbar facet joints","The sacrococcygeal junction"],
    a:1,
    exp:"Swimmer's lateral (Twining method): one arm raised over the head, opposite arm pulled down. CR directed horizontally at C7–T1 level. Demonstrates the cervicothoracic junction (C6–T3) — the area most difficult to visualize on a routine lateral due to shoulder superimposition.",
    oe:[
      "C1–C2 are demonstrated on the open-mouth AP and lateral cervical projections — not the swimmer's.",
      "Correct. Swimmer's = cervicothoracic junction (C6–T3). Shoulder interference prevents routine visualization of this area — the swimmer's position separates the shoulders.",
      "Lumbar facet joints are evaluated on lateral and oblique lumbar projections.",
      "Sacrococcygeal junction is evaluated on lateral sacrum/coccyx projections."
    ]
  },

  { cat:"Procedures", sub:"Spine",
    q:"For an AP projection of the lumbar spine, the patient's knees and hips are flexed with feet flat on the table primarily to:",
    opts:["Prevent patient movement","Flatten the lumbar lordosis and reduce OID between the spine and IR","Demonstrate the sacroiliac joints","Allow the spinous processes to separate"],
    a:1,
    exp:"AP lumbar: knees/hips flexed, feet flat → flattens the lumbar lordotic curve → places the lumbar vertebral bodies more parallel to the IR → reduces obliquity of the disc spaces → better AP projection with open disc spaces.",
    oe:[
      "Patient movement prevention is not the primary reason — the technique modification affects image geometry.",
      "Correct. Knee/hip flexion flattens lumbar lordosis → vertebral bodies closer to IR → better AP projection with open disc spaces.",
      "Sacroiliac joints are demonstrated on dedicated AP and oblique SI joint projections.",
      "Spinous process separation on flexion/extension views is for dynamic lumbar studies."
    ]
  },

  { cat:"Procedures", sub:"Spine",
    q:"In the oblique lumbar spine 'Scotty dog' image, the 'eye' of the dog represents:",
    opts:["The pedicle","The superior articular process","The inferior articular process","The transverse process"],
    a:0,
    exp:"Scotty dog (oblique lumbar): pedicle = 'eye,' transverse process = 'nose,' superior articular process = 'ear,' inferior articular process = 'front leg,' pars interarticularis = 'neck.' A collar/fracture through the neck = spondylolysis.",
    oe:[
      "Correct. Scotty dog 'eye' = pedicle. A spondylolysis fracture appears as a 'collar' on the dog's neck (pars interarticularis).",
      "The superior articular process forms the 'ear' of the Scotty dog.",
      "The inferior articular process forms the 'front leg' of the Scotty dog.",
      "The transverse process forms the 'nose' of the Scotty dog."
    ]
  },

  { cat:"Procedures", sub:"Spine",
    q:"For an AP projection of the sacrum, the central ray is angled:",
    opts:["Perpendicular to the sacrum","15° caudally","15° cranially","30° caudally"],
    a:2,
    exp:"AP sacrum: CR angled 15° cranially (cephalad). The sacrum angles posteriorly from superior to inferior — the 15° cranial angle opens the sacral foramina and aligns the CR perpendicular to the anterior surface of the sacrum.",
    oe:[
      "Perpendicular CR does not compensate for the sacral angle — the foramina would appear closed.",
      "15° caudal is used for the AP COCCYX projection — not the sacrum.",
      "Correct. AP sacrum: 15° cranial angle. Opens the sacral foramina and demonstrates the sacrum without foreshortening.",
      "30° caudal is the angle used for the AP axial Towne skull — not the sacrum."
    ]
  },

  { cat:"Procedures", sub:"Spine",
    q:"For an AP projection of the coccyx, the central ray is angled:",
    opts:["15° cranially","10° caudally","10° cranially","Perpendicular"],
    a:1,
    exp:"AP coccyx: CR angled 10° caudally (toward the feet). The coccyx angles posteriorly — the 10° caudal angle aligns the CR with the coccygeal segments. Compare with the sacrum (15° cranial).",
    oe:[
      "15° cranial is the angle for the AP SACRUM — the coccyx requires a CAUDAL angle.",
      "Correct. AP coccyx: 10° caudally. The caudal angle opens the coccygeal segments for visualization.",
      "10° cranial is used for the sacrum approximately — not the coccyx.",
      "Perpendicular CR does not compensate for the coccygeal curve — the caudal angle is needed."
    ]
  },

  { cat:"Procedures", sub:"Spine",
    q:"The L5–S1 lateral spot projection requires the central ray angled:",
    opts:["Perpendicular","5–8° caudally","8° cranially","15° caudally"],
    a:1,
    exp:"L5–S1 lateral spot: CR angled 5–8° caudally to parallel the sacral base and open the L5–S1 intervertebral disc space. Without this angle, the iliac crests often superimpose the L5–S1 joint.",
    oe:[
      "Perpendicular CR does not adequately open the L5–S1 disc space — a caudal angle is required.",
      "Correct. L5–S1 lateral: 5–8° caudal angle opens the disc space. Critical for evaluating the most common disc herniation site.",
      "Cranial angle would close, not open, the L5–S1 disc space.",
      "15–20° is used for the AP sacrum — too steep for the lateral L5–S1 spot."
    ]
  },

  // ──────────────────────── PROCEDURES – SKULL/FACIAL ────────────────────────

  { cat:"Procedures", sub:"Skull",
    q:"The Caldwell method (PA axial skull) uses a central ray angled:",
    opts:["Perpendicular to the IR","15° caudally","25–30° caudally","15° cranially"],
    a:1,
    exp:"Caldwell method: PA projection with CR angled 15° caudally through the nasion. Demonstrates the frontal bone, frontal sinuses, ethmoid sinuses, and superior orbital rims. The petrous ridges are projected into the lower one-third of the orbits.",
    oe:[
      "Perpendicular CR produces the standard PA skull — the Caldwell uses a 15° caudal angle.",
      "Correct. Caldwell: 15° caudal through nasion. Petrous ridges project into the lower orbits.",
      "25–30° caudal is used for the Towne (AP axial) projection.",
      "15° cranial angle is not the Caldwell — it uses 15° CAUDAL."
    ]
  },

  { cat:"Procedures", sub:"Skull",
    q:"The Towne method (AP axial skull) uses a central ray angled:",
    opts:["15° cranially","30° caudally","Perpendicular to the IOML","15° caudally"],
    a:1,
    exp:"Towne (AP axial): OML perpendicular to IR. CR angled 30° caudally (or 37° if IOML is perpendicular). Demonstrates the occipital bone, posterior clinoid processes, dorsum sella, and foramen magnum.",
    oe:[
      "15° cranially is not the Towne angle — the CR must be angled caudally.",
      "Correct. Towne = 30° caudal (OML perpendicular to IR) or 37° caudal (IOML perpendicular). Shows occipital bone and posterior fossa.",
      "Perpendicular to IOML is the baseline positioning — the CR is then angled 30–37° caudally.",
      "15° caudal is the Caldwell angle — the Towne requires 30° caudal."
    ]
  },

  { cat:"Procedures", sub:"Skull",
    q:"The parietoacanthial (Waters method) projection demonstrates primarily:",
    opts:["The posterior cranial fossa","The frontal and ethmoid sinuses","The maxillary sinuses free of petrous bone superimposition","The internal auditory canals"],
    a:2,
    exp:"Waters method: OML 37° from the IR. CR perpendicular through the acanthion. The petrous ridges drop below the maxillary sinuses — the classic view for maxillary sinus evaluation.",
    oe:[
      "The posterior cranial fossa is seen on the Towne projection.",
      "Frontal and ethmoid sinuses are demonstrated on the Caldwell projection.",
      "Correct. Waters (parietoacanthial): 37° OML angle → petrous ridges drop below maxillary sinuses → maxillary sinuses clearly visible.",
      "Internal auditory canals are demonstrated on specific skull base projections."
    ]
  },

  { cat:"Procedures", sub:"Skull",
    q:"All paranasal sinus projections must be performed with the patient ERECT because:",
    opts:["It reduces radiation dose","Air-fluid levels can only be demonstrated when the patient is upright","It improves image sharpness","It is required for proper CR alignment"],
    a:1,
    exp:"Sinus radiography MUST be erect. Gravity allows fluid to settle in the dependent portion of air-containing sinuses — creating visible air-fluid levels that indicate sinusitis or hemorrhage. Supine positioning eliminates these diagnostic levels.",
    oe:[
      "Dose reduction is not the reason for erect positioning in sinus radiography.",
      "Correct. Erect = gravity allows fluid to settle → air-fluid levels visible. Supine destroys air-fluid levels. All sinus views must be performed erect.",
      "OID/sharpness is not significantly different between erect and supine sinus positioning.",
      "CR alignment is achievable in either position — the clinical reason is air-fluid level demonstration."
    ]
  },

  // ──────────────────────── PROCEDURES – ABDOMEN ────────────────────────

  { cat:"Procedures", sub:"Abdomen",
    q:"A KUB (AP abdomen) projection is performed with the patient:",
    opts:["Erect with the IR below the iliac crests","Supine, CR perpendicular at the level of the iliac crests","Prone with the CR at the umbilicus","Lateral recumbent"],
    a:1,
    exp:"KUB (Kidneys, Ureters, Bladder): supine AP. CR perpendicular, centered at the level of the iliac crests (approximately L3). Must include the pubic symphysis at the bottom and diaphragm at the top if possible.",
    oe:[
      "Erect position is used for the upright abdomen to detect free air — the KUB is supine.",
      "Correct. KUB = supine, CR perpendicular to the IR, centered at the iliac crest (L3 level). Standard preliminary abdominal film.",
      "Prone positioning is used for specific studies — not the KUB.",
      "Lateral recumbent (decubitus) is used for cross-table or decubitus abdomen — not the KUB."
    ]
  },

  { cat:"Procedures", sub:"Abdomen",
    q:"The LEFT lateral decubitus projection of the abdomen is preferred for detecting free intraperitoneal air because:",
    opts:["The left lateral decubitus is easier to position","Free air rises to the right side (above the liver) where it is more easily seen against the homogeneous liver density","The right side is easier to collimate","The spleen is on the right"],
    a:1,
    exp:"Left lateral decubitus (LLD): patient on left side → right side is non-dependent (up). Free intraperitoneal air rises to the right subphrenic space — where the liver's uniform density provides excellent contrast to visualize even small amounts of free air.",
    oe:[
      "Positioning ease is not the clinical rationale.",
      "Correct. LLD → right side up → free air rises to right subphrenic space → visible against the homogeneous liver density.",
      "Collimation is not the reason.",
      "The spleen is on the LEFT — the liver is on the RIGHT, which is why LLD (right side up) is preferred."
    ]
  },

  { cat:"Procedures", sub:"Abdomen",
    q:"An acute abdominal series (three-way abdomen) typically includes:",
    opts:["PA chest, AP supine abdomen, AP erect abdomen","AP supine abdomen, AP erect abdomen, PA erect chest","Lateral decubitus, lateral abdomen, AP supine","KUB, IVP scout, post-void film"],
    a:1,
    exp:"Three-way acute abdomen: (1) AP supine abdomen — organ positions and masses, (2) AP erect abdomen — air-fluid levels in bowel, (3) PA erect chest — free air under the diaphragm (pneumoperitoneum) and pulmonary pathology.",
    oe:[
      "The sequence listed is correct but the description in option A lists the chest first — a minor order issue; the content of B is most precisely stated.",
      "Correct. Three-way = AP supine abdomen + AP erect abdomen + PA erect chest. Evaluates for obstruction, free air, and pulmonary causes of abdominal pain.",
      "Lateral decubitus replaces the erect abdomen when the patient cannot stand — not part of the routine three-way.",
      "KUB + IVP scout is urography preparation — not the acute abdominal series."
    ]
  },

  // ──────────────────────── PROCEDURES – GI STUDIES ────────────────────────

  { cat:"Procedures", sub:"GI Studies",
    q:"For a barium esophagram, the initial projection is usually:",
    opts:["AP projection with the patient supine","RAO (right anterior oblique) with the patient erect or recumbent","PA projection with full inspiration","Lateral with the patient supine"],
    a:1,
    exp:"Esophagram initial position: RAO erect or recumbent. In RAO, the esophagus is projected between the spine and the heart — free of superimposition. Barium column visible in the esophageal lumen without cardiac or vertebral overlap.",
    oe:[
      "AP supine is used for specific phases but is not the primary initial projection.",
      "Correct. RAO = esophagus projects between the vertebral column and heart → optimal visualization free of superimposition.",
      "PA with full inspiration collapses the esophagus — poor demonstration.",
      "Lateral supine is used for specific evaluations — the RAO is the primary initial projection."
    ]
  },

  { cat:"Procedures", sub:"GI Studies",
    q:"For a double-contrast barium enema, the barium is followed by:",
    opts:["Water to dilute the barium","Air or carbon dioxide to coat and distend the colon","A second barium injection","Glucagon to relax the bowel"],
    a:1,
    exp:"Double-contrast barium enema: (1) dilute barium coats the mucosal lining, (2) barium drained, (3) air or CO₂ insufflated to distend the colon → demonstrates mucosal pattern in detail. Best technique for polyp and early cancer detection.",
    oe:[
      "Water washes out the barium coating — not used in double-contrast.",
      "Correct. Double contrast = barium coating + air/CO₂ distension → excellent mucosal detail.",
      "A second barium injection is used in single-contrast studies — not double contrast.",
      "Glucagon may be given to reduce peristalsis but is not the primary second contrast agent."
    ]
  },

  { cat:"Procedures", sub:"GI Studies",
    q:"For an upper GI (UGI) series, the RAO position demonstrates:",
    opts:["The fundus of the stomach filled with barium","The pyloric canal, duodenal bulb, and C-loop free of spine superimposition","The rugal folds of the gastric body","The esophagogastric junction"],
    a:1,
    exp:"RAO UGI: standard position for the stomach. The stomach rotates to project the pyloric canal and duodenal bulb anterior to the spine — no vertebral superimposition. The C-loop of the duodenum is well demonstrated.",
    oe:[
      "The fundus fills with air in the RAO — an LPO or PA projection fills the fundus with barium.",
      "Correct. RAO = pyloric canal, duodenal bulb, and C-loop demonstrated free of vertebral superimposition. The most important position in the UGI series.",
      "Rugal folds are best demonstrated with the fundus filled — LPO or PA projection.",
      "The esophagogastric junction is best shown on a PA or LAO — not the RAO."
    ]
  },

  // ──────────────────────── PROCEDURES – SPECIAL ────────────────────────

  { cat:"Procedures", sub:"Procedures",
    q:"Before an intravenous urogram (IVU/IVP), a scout radiograph is obtained to:",
    opts:["Assess the patient's respiratory rate","Establish correct exposure factors and identify pre-existing calcifications before contrast administration","Check cardiac rhythm","Evaluate blood pressure"],
    a:1,
    exp:"IVU scout: AP abdomen without contrast. Establishes: (1) correct exposure factors, (2) baseline image to show calcifications (renal calculi) that may be obscured by contrast, (3) masses or anatomical variants, (4) appropriate field coverage.",
    oe:[
      "Respiratory rate is a clinical assessment — not the purpose of the scout radiograph.",
      "Correct. IVU scout = baseline image. Identifies calcifications before contrast injection — contrast may obscure small stones.",
      "Cardiac rhythm is assessed by ECG — not radiography.",
      "Blood pressure is measured clinically — not by the scout radiograph."
    ]
  },

  { cat:"Procedures", sub:"Procedures",
    q:"In a hysterosalpingogram (HSG), contrast injected through the cervix evaluates:",
    opts:["Uterine cavity shape and fallopian tube patency","Ovarian cyst morphology","Bladder volume and voiding","Renal parenchymal thickness"],
    a:0,
    exp:"HSG: water-soluble contrast injected via cervical cannula. Demonstrates: (1) uterine cavity shape and contour, (2) tubal patency (spill of contrast into peritoneal cavity confirms open tubes). Primary indication: infertility evaluation.",
    oe:[
      "Correct. HSG = uterine cavity + tubal patency. Free peritoneal spill of contrast confirms patent fallopian tubes.",
      "Ovarian cysts are evaluated by ultrasound or CT — HSG does not fill the ovaries.",
      "Bladder voiding function is evaluated by VCUG — a different procedure.",
      "Renal parenchymal thickness is evaluated by IVU, ultrasound, or CT — not HSG."
    ]
  },

  { cat:"Procedures", sub:"Procedures",
    q:"The craniocaudal (CC) mammographic projection demonstrates:",
    opts:["The breast in true lateral profile","Maximum breast tissue compressed from cranial to caudal direction","The axillary tail preferentially","The breast from medial to lateral"],
    a:1,
    exp:"CC mammogram: the breast is placed on the IR, lifted forward, and compressed from above (cranially) to below (caudally). Demonstrates medial and lateral breast tissue including the subareolar and posterior breast tissue in the AP direction.",
    oe:[
      "True lateral profile describes the ML or MLO projection — not the CC.",
      "Correct. CC = cranial-to-caudal compression. Demonstrates medial and lateral breast tissue and retroglandular fat.",
      "The axillary tail is best demonstrated on the MLO projection — the CC shows less of the axillary tail.",
      "Medial-to-lateral compression describes the MLO oblique direction — not the CC."
    ]
  },

  { cat:"Procedures", sub:"Procedures",
    q:"The mediolateral oblique (MLO) mammographic projection is the single most important view because:",
    opts:["It uses the least radiation dose","It demonstrates the greatest amount of breast tissue including axillary tail and pectoral muscle","It is the easiest to perform","It demonstrates the breast in true lateral profile"],
    a:1,
    exp:"MLO is the most complete single mammographic view — it demonstrates: (1) maximum breast tissue, (2) axillary tail, (3) pectoral muscle to the nipple level. The MLO angle follows the pectoralis major muscle orientation.",
    oe:[
      "Dose is not the reason MLO is the most important view.",
      "Correct. MLO = greatest tissue coverage. It is the only view that includes the axillary tail and pectoral muscle.",
      "MLO is technically one of the more challenging projections — not chosen for ease.",
      "True lateral profile is the ML (mediolateral) view — the MLO is oblique."
    ]
  },

  { cat:"Procedures", sub:"Trauma",
    q:"For a trauma patient with suspected cervical spine injury, the FIRST radiographic projection obtained is:",
    opts:["AP open-mouth odontoid","AP axial cervical","Cross-table lateral cervical spine (horizontal beam)","Swimmer's lateral"],
    a:2,
    exp:"Trauma cervical spine protocol: the FIRST view is the cross-table lateral (horizontal beam, patient supine, NO neck movement). This single view can identify >90% of significant cervical injuries. All seven cervical vertebrae must be demonstrated.",
    oe:[
      "AP open-mouth is performed AFTER the lateral has been evaluated — not as the first film.",
      "AP axial is obtained after the lateral — the lateral is always the first trauma cervical projection.",
      "Correct. Cross-table lateral = first trauma cervical projection. Horizontal beam, patient supine, no movement. Must show all 7 cervical vertebrae.",
      "Swimmer's is supplemental if C7 is not visible on the lateral — not the primary first film."
    ]
  },

  { cat:"Procedures", sub:"Pediatrics",
    q:"When performing radiography on pediatric patients, the BEST approach to immobilization is:",
    opts:["Chemical sedation for all children under age 5","Explanation, reassurance, and the least restrictive restraint necessary","Physical restraint is required for all pediatric patients","Parents must never be in the room during exposure"],
    a:1,
    exp:"Pediatric immobilization: use non-forceful techniques first — age-appropriate explanation, distraction, reassurance. Use the least restrictive method necessary. Parents may assist (wearing lead aprons). The goal is to minimize repeat exposures while minimizing distress.",
    oe:[
      "Chemical sedation is reserved for procedures requiring prolonged immobility — not a first-line approach for routine radiography.",
      "Correct. Least restrictive first: explanation → positioning aids → parental assistance → restraint as last resort. Minimize dose through proper immobilization.",
      "Not all pediatric patients require physical restraint — many cooperate with age-appropriate communication.",
      "Parents are encouraged to assist with immobilization while wearing lead aprons — their presence calms children."
    ]
  },

// ── IMAGE QUESTIONS: PATIENT POSITIONING ──────────────────────────
{ cat:"Procedures", sub:"Patient Positioning",
  q:"What CT scanner patient entry position and body orientation is depicted?",
  img:'<svg viewBox="0 0 360 165" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect x="5" y="22" width="120" height="120" rx="14" fill="#ddd" stroke="#777" stroke-width="2"/><circle cx="65" cy="82" r="44" fill="#f9f9f9" stroke="#999" stroke-width="2"/><text x="65" y="14" text-anchor="middle" font-size="10" fill="#777" font-weight="bold">CT BORE</text><rect x="125" y="78" width="220" height="10" fill="#bdbdbd" rx="2"/><rect x="142" y="68" width="165" height="13" fill="#bbdefb" stroke="#1565c0" stroke-width="1.5" rx="3"/><circle cx="134" cy="74" r="10" fill="#fff9c4" stroke="#e65100" stroke-width="1.5"/><text x="133" y="99" text-anchor="middle" font-size="10" fill="#333">HEAD</text><text x="305" y="99" text-anchor="middle" font-size="10" fill="#333">FEET</text><text x="225" y="61" text-anchor="middle" font-size="9" fill="#1565c0">face up (supine)</text></svg>',
  opts:["Head First Supine (HFS)","Feet First Supine (FFS)","Head First Prone (HFP)","Feet First Lateral (FFL)"],
  a:0,
  exp:"Head First Supine (HFS): the patient's head enters the CT bore first and the patient is supine — face up, anterior surface uppermost. HFS is the standard position for brain, chest, abdomen, and pelvis CT.",
  oe:["Correct. HFS = head enters bore first + supine (face up). Standard for most CT exams from brain to pelvis.","FFS = feet enter bore first. In this image the HEAD label is closest to the bore — not the feet.","HFP = head first but face-DOWN. This diagram labels the patient face up (supine).","FFL = feet first, patient on side. Head is nearest the bore here and patient is supine."]
},
{ cat:"Procedures", sub:"Patient Positioning",
  q:"What CT scanner patient entry position is shown in this diagram?",
  img:'<svg viewBox="0 0 360 165" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect x="5" y="22" width="120" height="120" rx="14" fill="#ddd" stroke="#777" stroke-width="2"/><circle cx="65" cy="82" r="44" fill="#f9f9f9" stroke="#999" stroke-width="2"/><text x="65" y="14" text-anchor="middle" font-size="10" fill="#777" font-weight="bold">CT BORE</text><rect x="125" y="78" width="220" height="10" fill="#bdbdbd" rx="2"/><rect x="142" y="68" width="165" height="13" fill="#bbdefb" stroke="#1565c0" stroke-width="1.5" rx="3"/><circle cx="304" cy="74" r="10" fill="#fff9c4" stroke="#e65100" stroke-width="1.5"/><text x="155" y="99" text-anchor="middle" font-size="10" fill="#c2185b">FEET &#8594; bore</text><text x="305" y="99" text-anchor="middle" font-size="10" fill="#333">HEAD</text><text x="225" y="61" text-anchor="middle" font-size="9" fill="#1565c0">face up (supine)</text></svg>',
  opts:["Head First Supine (HFS)","Feet First Supine (FFS)","Head First Prone (HFP)","Feet First Prone (FFP)"],
  a:1,
  exp:"Feet First Supine (FFS): the patient's feet enter the CT bore first while the patient is supine — face up. FFS is used for lower extremity CT, hip, knee, and ankle studies, or for patients who cannot tolerate head-first entry.",
  oe:["HFS = head enters bore first. This diagram shows FEET closest to the bore — the opposite.","Correct. FFS = feet enter bore first + supine (face up). Used for extremity and lower-body CT studies.","HFP = head first, face-down. This patient has FEET nearest the bore and is face-up.","FFP = feet first, face-down. The patient here is face-up (supine), not prone."]
},
{ cat:"Procedures", sub:"Patient Positioning",
  q:"This diagram shows a patient positioned in a CT scanner. Which position is depicted?",
  img:'<svg viewBox="0 0 360 165" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect x="5" y="22" width="120" height="120" rx="14" fill="#ddd" stroke="#777" stroke-width="2"/><circle cx="65" cy="82" r="44" fill="#f9f9f9" stroke="#999" stroke-width="2"/><text x="65" y="14" text-anchor="middle" font-size="10" fill="#777" font-weight="bold">CT BORE</text><rect x="125" y="83" width="220" height="10" fill="#bdbdbd" rx="2"/><rect x="142" y="86" width="165" height="13" fill="#bbdefb" stroke="#1565c0" stroke-width="1.5" rx="3"/><circle cx="134" cy="80" r="10" fill="#fff9c4" stroke="#e65100" stroke-width="1.5"/><text x="133" y="110" text-anchor="middle" font-size="10" fill="#333">HEAD</text><text x="305" y="110" text-anchor="middle" font-size="10" fill="#333">FEET</text><text x="225" y="104" text-anchor="middle" font-size="9" fill="#555">face down (prone)</text></svg>',
  opts:["Head First Supine (HFS)","Feet First Prone (FFP)","Head First Prone (HFP)","Feet First Supine (FFS)"],
  a:2,
  exp:"Head First Prone (HFP): the patient's head enters the bore first while the patient is prone — lying face down, posterior surface uppermost. HFP may be used for posterior fossa brain studies, cervical or lumbar spine protocols, or select abdominal exams.",
  oe:["HFS = head first + face up. This diagram shows the patient face-down (prone).","FFP = feet first + face-down. This patient's head is nearest the bore, not feet.","Correct. HFP = head enters bore first + patient prone (face down). Used for spine and posterior fossa protocols.","FFS = feet first + face up. This patient's head is closest to the bore and the patient is face-down."]
},
{ cat:"Patient Care", sub:"Patient Transfer & Positioning",
  q:"Identify the table position illustrated in this diagram.",
  img:'<svg viewBox="0 0 360 185" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="180" y="14" text-anchor="middle" font-size="10" fill="#777" font-weight="bold">TABLE POSITION — SIDE VIEW</text><g transform="rotate(-20, 180, 100)"><rect x="50" y="95" width="260" height="14" fill="#9e9e9e" rx="3" stroke="#666" stroke-width="1.5"/><rect x="65" y="80" width="210" height="14" fill="#bbdefb" stroke="#1565c0" stroke-width="1.5" rx="3"/><circle cx="76" cy="87" r="11" fill="#fff9c4" stroke="#e65100" stroke-width="1.5"/></g><text x="55" y="168" font-size="10" fill="#c2185b">HEAD end &#8595;</text><text x="262" y="52" font-size="10" fill="#555">FEET end &#8593;</text></svg>',
  opts:["Trendelenburg position","Reverse Trendelenburg position","Fowler's position","Lithotomy position"],
  a:0,
  exp:"Trendelenburg position: the table is tilted with the head end lower than the feet. This shifts abdominal organs cephalad, aids pelvic visualization, and increases venous return. Used in pelvic imaging, select GI procedures, and hypotension management.",
  oe:["Correct. Trendelenburg = head DOWN, feet UP. Used for pelvic imaging and managing hypotensive patients.","Reverse Trendelenburg = head UP, feet DOWN. This diagram shows the HEAD end pointing downward.","Fowler's position raises the backrest 45–90°; it does not tilt the entire table head-down.","Lithotomy = supine with legs raised in stirrups. Not a table tilt position."]
},
{ cat:"Patient Care", sub:"Patient Transfer & Positioning",
  q:"What table position is shown in this diagram?",
  img:'<svg viewBox="0 0 360 185" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="180" y="14" text-anchor="middle" font-size="10" fill="#777" font-weight="bold">TABLE POSITION — SIDE VIEW</text><g transform="rotate(20, 180, 100)"><rect x="50" y="95" width="260" height="14" fill="#9e9e9e" rx="3" stroke="#666" stroke-width="1.5"/><rect x="65" y="80" width="210" height="14" fill="#bbdefb" stroke="#1565c0" stroke-width="1.5" rx="3"/><circle cx="76" cy="87" r="11" fill="#fff9c4" stroke="#e65100" stroke-width="1.5"/></g><text x="38" y="52" font-size="10" fill="#c2185b">HEAD end &#8593;</text><text x="258" y="168" font-size="10" fill="#555">FEET end &#8595;</text></svg>',
  opts:["Trendelenburg position","Reverse Trendelenburg position","Fowler's position","Supine recumbent (flat)"],
  a:1,
  exp:"Reverse Trendelenburg position: the table is tilted with the head end elevated and the feet lower. Gravity shifts abdominal organs caudally, aiding upper abdominal and diaphragm visualization. Used for upper GI series, esophageal fluoroscopy, and obese patients.",
  oe:["Trendelenburg = head DOWN, feet UP. This diagram shows the HEAD end elevated — the opposite.","Correct. Reverse Trendelenburg = head UP, feet DOWN. Used for upper GI and esophageal studies.","Fowler's raises the backrest only; it does not tilt the entire table.","Supine recumbent means lying flat. This diagram shows a clear table tilt with head elevated."]
},
{ cat:"Patient Care", sub:"Patient Transfer & Positioning",
  q:"Which patient position is depicted in this diagram?",
  img:'<svg viewBox="0 0 360 195" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="180" y="14" text-anchor="middle" font-size="10" fill="#777" font-weight="bold">BED / STRETCHER — SIDE VIEW</text><rect x="30" y="155" width="300" height="12" fill="#9e9e9e" rx="3" stroke="#666"/><rect x="30" y="135" width="170" height="14" fill="#9e9e9e" rx="2"/><line x1="200" y1="149" x2="248" y2="93" stroke="#9e9e9e" stroke-width="14" stroke-linecap="round"/><rect x="48" y="122" width="152" height="12" fill="#bbdefb" stroke="#1565c0" stroke-width="1.5" rx="3"/><line x1="200" y1="145" x2="244" y2="92" stroke="#bbdefb" stroke-width="10" stroke-linecap="round"/><circle cx="251" cy="80" r="11" fill="#fff9c4" stroke="#e65100" stroke-width="1.5"/><text x="262" y="67" font-size="10" fill="#c2185b">Head elevated</text><text x="80" y="183" text-anchor="middle" font-size="9" fill="#555">flat</text><text x="224" y="183" text-anchor="middle" font-size="9" fill="#555">45&#176;&#8211;90&#176; raised</text></svg>',
  opts:["Trendelenburg position","Reverse Trendelenburg position","Fowler's position","Left lateral decubitus"],
  a:2,
  exp:"Fowler's position: the head of the bed is elevated 45–90° while the lower body remains flat. Semi-Fowler's = 30–45°; high Fowler's = 60–90°. Used for respiratory patients, post-op patients, and upright chest X-rays for bed-confined patients.",
  oe:["Trendelenburg tilts the entire table head-DOWN. Fowler's only raises the headboard section.","Reverse Trendelenburg tilts the entire table head-UP. Fowler's raises only the backrest.","Correct. Fowler's = head of bed raised 45–90°. Semi-Fowler's 30–45°. Lower body remains flat or on a footrest.","Left lateral decubitus = patient lies on the left side. This shows a semi-reclined backrest elevation."]
},
{ cat:"Procedures", sub:"Chest",
  q:"Identify the radiographic projection shown in this diagram (top-down view).",
  img:'<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="180" y="14" text-anchor="middle" font-size="10" fill="#777" font-weight="bold">CHEST — PROJECTION (TOP-DOWN VIEW)</text><rect x="140" y="28" width="80" height="14" fill="#c8e6c9" stroke="#388e3c" stroke-width="2" rx="2"/><text x="180" y="22" text-anchor="middle" font-size="9" fill="#388e3c">IMAGE RECEPTOR (IR)</text><ellipse cx="180" cy="115" rx="45" ry="62" fill="#bbdefb" stroke="#1565c0" stroke-width="2"/><text x="180" y="112" text-anchor="middle" font-size="10" fill="#1565c0">PATIENT</text><text x="180" y="127" text-anchor="middle" font-size="9" fill="#1565c0">(faces IR)</text><rect x="150" y="178" width="60" height="16" fill="#ffccbc" stroke="#e64a19" stroke-width="2" rx="3"/><text x="180" y="189" text-anchor="middle" font-size="9" fill="#e64a19">X-RAY TUBE</text><line x1="180" y1="177" x2="180" y2="155" stroke="#e64a19" stroke-width="2.5"/><polygon points="180,147 175,157 185,157" fill="#e64a19"/><text x="180" y="165" text-anchor="middle" font-size="9" fill="#e64a19">beam: P &#8594; A</text></svg>',
  opts:["PA (posteroanterior) projection","AP (anteroposterior) projection","Lateral projection","RAO oblique"],
  a:0,
  exp:"PA (posteroanterior) projection: the X-ray beam travels from posterior to anterior. The patient faces the IR with their anterior chest against the detector. PA chest is preferred for routine radiography — the heart is closer to the IR, reducing cardiac magnification, and the scapulae rotate out of the lung fields.",
  oe:["Correct. PA projection = beam P→A, patient faces IR. Standard for routine chest X-rays — less cardiac magnification and scapular overlap.","AP = beam A→P, tube in front of patient, IR behind. This diagram shows the tube at the BACK (posterior side).","Lateral = beam from the side. This top-down diagram shows a front-to-back (P→A) beam.","RAO = patient rotated 45° right-anterior toward IR. This shows a straight PA orientation."]
},
{ cat:"Procedures", sub:"Chest",
  q:"Which radiographic projection is illustrated in this diagram (top-down view)?",
  img:'<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="180" y="14" text-anchor="middle" font-size="10" fill="#777" font-weight="bold">CHEST — PROJECTION (TOP-DOWN VIEW)</text><rect x="150" y="28" width="60" height="16" fill="#ffccbc" stroke="#e64a19" stroke-width="2" rx="3"/><text x="180" y="38" text-anchor="middle" font-size="9" fill="#e64a19">X-RAY TUBE</text><ellipse cx="180" cy="115" rx="45" ry="62" fill="#bbdefb" stroke="#1565c0" stroke-width="2"/><text x="180" y="110" text-anchor="middle" font-size="10" fill="#1565c0">PATIENT</text><text x="180" y="125" text-anchor="middle" font-size="9" fill="#1565c0">(back to IR)</text><rect x="140" y="178" width="80" height="14" fill="#c8e6c9" stroke="#388e3c" stroke-width="2" rx="2"/><text x="180" y="199" text-anchor="middle" font-size="9" fill="#388e3c">IMAGE RECEPTOR (IR)</text><line x1="180" y1="45" x2="180" y2="66" stroke="#e64a19" stroke-width="2.5"/><polygon points="180,74 175,64 185,64" fill="#e64a19"/><text x="180" y="93" text-anchor="middle" font-size="9" fill="#e64a19">beam: A &#8594; P</text></svg>',
  opts:["PA (posteroanterior) projection","AP (anteroposterior) projection","Lateral projection","LAO oblique"],
  a:1,
  exp:"AP (anteroposterior) projection: the beam travels from anterior to posterior. The patient faces the X-ray tube with their back against the IR. AP chest is used for supine, portable, and trauma exams. Cardiac magnification is greater than PA because the heart is farther from the IR.",
  oe:["PA = tube at back, beam P→A, patient faces IR. This diagram shows the tube at the FRONT (anterior side).","Correct. AP = beam A→P, tube in front, IR behind patient. Used for supine and portable chest radiography.","Lateral = beam from the side. This diagram shows a straight front-to-back beam path.","LAO = left anterior oblique rotation. This is a straight AP with no patient rotation."]
},
{ cat:"Procedures", sub:"Abdomen",
  q:"For which clinical indication is the patient position shown most useful?",
  img:'<svg viewBox="0 0 360 195" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="180" y="14" text-anchor="middle" font-size="10" fill="#777" font-weight="bold">PATIENT POSITION — FRONTAL VIEW</text><rect x="30" y="155" width="290" height="10" fill="#9e9e9e" rx="2"/><ellipse cx="185" cy="118" rx="68" ry="38" fill="#bbdefb" stroke="#1565c0" stroke-width="2"/><circle cx="100" cy="118" r="20" fill="#fff9c4" stroke="#e65100" stroke-width="1.5"/><ellipse cx="225" cy="90" rx="18" ry="9" fill="#e1f5fe" stroke="#0288d1" stroke-width="1.5" stroke-dasharray="4,2"/><text x="225" y="93" text-anchor="middle" font-size="8" fill="#0288d1">free air</text><text x="185" y="150" text-anchor="middle" font-size="9" fill="#c2185b">LEFT SIDE DOWN (dependent)</text><text x="185" y="78" text-anchor="middle" font-size="9" fill="#555">RIGHT SIDE UP &#8594; free air rises here</text><line x1="22" y1="118" x2="42" y2="118" stroke="#e64a19" stroke-width="2" stroke-dasharray="5,3"/><polygon points="42,115 50,118 42,121" fill="#e64a19"/><text x="25" y="110" font-size="8" fill="#e64a19">horiz.</text><text x="25" y="120" font-size="8" fill="#e64a19">beam</text></svg>',
  opts:["Detection of free intraperitoneal air (pneumoperitoneum)","Evaluation of kidney stones","Assessment of pleural effusion","Lumbar spine trauma evaluation"],
  a:0,
  exp:"Left lateral decubitus (left side down, right side up) with a horizontal beam: free intraperitoneal air rises to the highest point — the right subphrenic space — and is visible against the right hemidiaphragm. This is the study of choice when a patient cannot stand upright to detect free air.",
  oe:["Correct. Left lateral decubitus + horizontal beam: free air rises to right subphrenic space. Used when patient cannot stand.","Kidney stones are evaluated with KUB or CT urogram. Decubitus positioning is not specific for stones.","Pleural effusion: right lateral decubitus (left side down) shows right-side effusion layering; free air is the primary indication for left lateral decubitus.","Lumbar spine trauma requires AP/lateral films or CT. Not a decubitus indication."]
},
{ cat:"Procedures", sub:"Chest",
  q:"Which radiographic projection is depicted in this diagram (frontal view)?",
  img:'<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="180" y="14" text-anchor="middle" font-size="10" fill="#777" font-weight="bold">CHEST — PROJECTION (FRONTAL/CORONAL VIEW)</text><rect x="10" y="70" width="14" height="90" fill="#c8e6c9" stroke="#388e3c" stroke-width="2" rx="2"/><text x="17" y="65" text-anchor="middle" font-size="8" fill="#388e3c">IR</text><ellipse cx="180" cy="115" rx="50" ry="72" fill="#bbdefb" stroke="#1565c0" stroke-width="2"/><text x="180" y="118" text-anchor="middle" font-size="10" fill="#1565c0">PATIENT</text><rect x="330" y="70" width="20" height="90" fill="#ffccbc" stroke="#e64a19" stroke-width="2" rx="3"/><text x="340" y="64" text-anchor="middle" font-size="8" fill="#e64a19">TUBE</text><line x1="328" y1="115" x2="280" y2="115" stroke="#e64a19" stroke-width="2.5"/><polygon points="272,115 282,111 282,119" fill="#e64a19"/><text x="305" y="108" font-size="9" fill="#e64a19">beam</text><text x="180" y="168" text-anchor="middle" font-size="9" fill="#555">Patient in TRUE LATERAL position</text><text x="180" y="182" text-anchor="middle" font-size="9" fill="#c2185b">Left side against IR</text></svg>',
  opts:["PA (posteroanterior) projection","AP (anteroposterior) projection","Left lateral projection","Right lateral projection"],
  a:2,
  exp:"Left lateral projection: the patient stands with the left side against the IR and the right side toward the X-ray tube. The beam travels from right (tube) to left (IR). For chest radiography, the left lateral is standard because the heart is closest to the IR, minimizing cardiac magnification.",
  oe:["PA = patient faces IR, beam P→A front-to-back. This diagram shows a side-to-side beam path.","AP = patient back to IR, beam A→P front-to-back. This diagram shows a lateral beam, not anterior-to-posterior.","Correct. Left lateral = left side against IR, beam from right to left. Standard for chest lateral views.","Right lateral = right side against IR, beam from left to right. This diagram labels the left side against the IR."]
},
{ cat:"Procedures", sub:"Patient Positioning",
  q:"What oblique position is shown in this diagram (top-down view)?",
  img:'<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="180" y="14" text-anchor="middle" font-size="10" fill="#777" font-weight="bold">OBLIQUE POSITION — TOP-DOWN VIEW</text><rect x="120" y="175" width="120" height="14" fill="#c8e6c9" stroke="#388e3c" stroke-width="2" rx="2"/><text x="180" y="171" text-anchor="middle" font-size="9" fill="#388e3c">IMAGE RECEPTOR</text><ellipse cx="180" cy="105" rx="55" ry="35" fill="#bbdefb" stroke="#1565c0" stroke-width="2" transform="rotate(-45, 180, 105)"/><text x="82" y="76" font-size="9" fill="#c2185b" font-weight="bold">RIGHT ANTERIOR</text><text x="82" y="88" font-size="9" fill="#c2185b">&#8594; toward IR</text><text x="232" y="76" font-size="9" fill="#555">LEFT POSTERIOR</text><text x="232" y="88" font-size="9" fill="#555">away from IR</text><text x="180" y="108" text-anchor="middle" font-size="9" fill="#1565c0">PATIENT</text><path d="M 180 140 A 28 28 0 0 1 200 120" fill="none" stroke="#e64a19" stroke-width="1.5"/><text x="192" y="148" font-size="9" fill="#e64a19">~45&#176;</text></svg>',
  opts:["RAO (right anterior oblique)","LAO (left anterior oblique)","RPO (right posterior oblique)","LPO (left posterior oblique)"],
  a:0,
  exp:"RAO (right anterior oblique): the patient is rotated so the right anterior surface is closest to the IR. Used for esophageal, stomach, duodenum, and cardiac series. The left posterior aspect is farthest from the IR.",
  oe:["Correct. RAO = right anterior surface toward IR. Used for barium swallow, upper GI, and cardiac oblique views.","LAO = left anterior surface closest to IR. This diagram shows the RIGHT anterior toward the IR.","RPO = right posterior surface toward IR (equivalent to LAO from the front). The right side shown here is anterior, not posterior.","LPO = left posterior toward IR (equivalent to RAO from the front). Here it is the right anterior toward IR."]
},
{ cat:"Procedures", sub:"Patient Positioning",
  q:"This diagram shows a cross-section of an MRI bore (viewed from the end of the gantry). What patient position is depicted?",
  img:'<svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="130" y="16" text-anchor="middle" font-size="10" fill="#777" font-weight="bold">MRI BORE — END VIEW (CROSS-SECTION)</text><circle cx="130" cy="138" r="105" fill="#e0e0e0" stroke="#888" stroke-width="3"/><circle cx="130" cy="138" r="75" fill="#f5f5f5" stroke="#aaa" stroke-width="2"/><ellipse cx="130" cy="155" rx="38" ry="18" fill="#bbdefb" stroke="#1565c0" stroke-width="2"/><circle cx="130" cy="127" r="14" fill="#fff9c4" stroke="#e65100" stroke-width="1.5"/><text x="130" y="196" text-anchor="middle" font-size="9" fill="#555">TABLE</text><rect x="105" y="172" width="50" height="6" fill="#9e9e9e" rx="2"/><text x="130" y="245" text-anchor="middle" font-size="9" fill="#c2185b">face UP &#8593;</text></svg>',
  opts:["Supine (face up)","Prone (face down)","Left lateral decubitus","Right lateral decubitus"],
  a:0,
  exp:"Supine position in the MRI bore: the patient lies face up (anterior surface toward the ceiling of the bore). The head/face circle appears at the top of the patient cross-section and the body is centered on the table. Supine is the standard position for most MRI exams.",
  oe:["Correct. Supine = face up. The head is shown at the TOP of the patient cross-section (face pointing up toward the top of the bore).","Prone = face down. In prone, the face/head would appear at the BOTTOM of the patient cross-section.","Left lateral decubitus = patient on left side. In that position, the patient body would be rotated 90° with the left side down.","Right lateral decubitus = patient on right side. The patient body would be rotated 90° with the right side down."]
},
{ cat:"Procedures", sub:"Patient Positioning",
  q:"This cross-section view of an MRI bore shows a patient inside. What position is the patient in?",
  img:'<svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="130" y="16" text-anchor="middle" font-size="10" fill="#777" font-weight="bold">MRI BORE — END VIEW (CROSS-SECTION)</text><circle cx="130" cy="138" r="105" fill="#e0e0e0" stroke="#888" stroke-width="3"/><circle cx="130" cy="138" r="75" fill="#f5f5f5" stroke="#aaa" stroke-width="2"/><ellipse cx="130" cy="122" rx="38" ry="18" fill="#bbdefb" stroke="#1565c0" stroke-width="2"/><circle cx="130" cy="150" r="14" fill="#fff9c4" stroke="#e65100" stroke-width="1.5"/><rect x="105" y="168" width="50" height="6" fill="#9e9e9e" rx="2"/><text x="130" y="185" text-anchor="middle" font-size="9" fill="#555">TABLE</text><text x="130" y="245" text-anchor="middle" font-size="9" fill="#c2185b">face DOWN &#8595;</text></svg>',
  opts:["Supine (face up)","Prone (face down)","Left lateral decubitus","Right lateral decubitus"],
  a:1,
  exp:"Prone position in the MRI bore: the patient lies face down (posterior surface toward the ceiling). The head/face circle appears at the BOTTOM of the patient cross-section (facing the table). Prone MRI is used for specific breast, prostate, and spinal imaging.",
  oe:["Supine = face up. In supine, the head/face would appear at the TOP of the patient cross-section (facing upward).","Correct. Prone = face down. The head is at the BOTTOM of the cross-section, face pointing toward the table.","Left lateral decubitus would show the patient rotated 90° with the left side down.","Right lateral decubitus would show the patient rotated 90° with the right side down."]
},
{ cat:"Procedures", sub:"Patient Positioning",
  q:"In this MRI bore cross-section, which lateral position is the patient in?",
  img:'<svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="130" y="16" text-anchor="middle" font-size="10" fill="#777" font-weight="bold">MRI BORE — END VIEW (CROSS-SECTION)</text><circle cx="130" cy="138" r="105" fill="#e0e0e0" stroke="#888" stroke-width="3"/><circle cx="130" cy="138" r="75" fill="#f5f5f5" stroke="#aaa" stroke-width="2"/><ellipse cx="130" cy="138" rx="18" ry="38" fill="#bbdefb" stroke="#1565c0" stroke-width="2"/><circle cx="156" cy="138" r="14" fill="#fff9c4" stroke="#e65100" stroke-width="1.5"/><rect x="105" y="172" width="50" height="6" fill="#9e9e9e" rx="2"/><text x="130" y="188" text-anchor="middle" font-size="9" fill="#555">TABLE</text><text x="32" y="141" font-size="9" fill="#555">L</text><text x="220" y="141" font-size="9" fill="#555">R</text><text x="130" y="245" text-anchor="middle" font-size="9" fill="#c2185b">Right side UP, Left side DOWN</text></svg>',
  opts:["Supine (face up)","Prone (face down)","Left lateral decubitus","Right lateral decubitus"],
  a:2,
  exp:"Left lateral decubitus: the patient is lying on their LEFT side (left side down/dependent). In this cross-section, the face/head circle is toward the RIGHT side of the bore (right side is up), and the body ellipse is vertical. Left lateral decubitus is used for left-side MRI studies and abdominal imaging.",
  oe:["Supine = face up, body horizontal with face at top. This shows a vertical body orientation — patient is on their side.","Prone = face down, body horizontal with face at bottom. This shows the patient rotated 90° onto their side.","Correct. Left lateral decubitus = left side DOWN, right side UP. The head (face) appears on the right (uppermost) side of the bore.","Right lateral decubitus = right side DOWN, left side UP. In this diagram the left side is DOWN and right side is UP."]
},
{ cat:"Image Production", sub:"X-ray Equipment",
  q:"The diagram shows a central ray (CR) angle for a radiographic projection. What type of angulation is this?",
  img:'<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="180" y="14" text-anchor="middle" font-size="10" fill="#777" font-weight="bold">CENTRAL RAY ANGULATION — SIDE VIEW</text><rect x="40" y="140" width="280" height="10" fill="#bdbdbd" rx="2"/><text x="180" y="168" text-anchor="middle" font-size="9" fill="#555">Patient / Table</text><rect x="155" y="22" width="50" height="30" fill="#ffccbc" stroke="#e64a19" stroke-width="2" rx="4"/><text x="180" y="41" text-anchor="middle" font-size="9" fill="#e64a19">X-RAY TUBE</text><line x1="180" y1="52" x2="140" y2="138" stroke="#e64a19" stroke-width="2.5"/><polygon points="140,138 133,128 148,130" fill="#e64a19"/><line x1="180" y1="52" x2="180" y2="140" stroke="#e64a19" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/><path d="M 180 80 A 25 25 0 0 0 166 90" fill="none" stroke="#333" stroke-width="1.5"/><text x="155" y="75" font-size="10" fill="#333" font-weight="bold">15&#176;</text><text x="110" y="125" font-size="9" fill="#c2185b">CR angled toward HEAD</text></svg>',
  opts:["Caudal (caudad) angulation","Cephalad (cranial) angulation","Perpendicular (0°) projection","Tangential projection"],
  a:1,
  exp:"Cephalad (cranial) angulation: the central ray is angled toward the patient's head. This is used for many skull, spine, and extremity projections — for example, the AP axial skull (Towne method) uses 30–37° cephalad angulation, and the AP axial clavicle uses 15–25° cephalad.",
  oe:["Caudal angulation = CR angled toward the FEET. This diagram shows the beam angled toward the HEAD.","Correct. Cephalad (cranial) angulation = CR directed toward the head. Used for Towne skull, AP clavicle, and other projections.","Perpendicular = 0° angle, beam goes straight down at 90° to the IR. This diagram shows a clear angled beam.","Tangential = beam is parallel to the surface being imaged, not angled toward head or feet."]
},
{ cat:"Image Production", sub:"X-ray Equipment",
  q:"What type of central ray (CR) angulation is depicted in this diagram?",
  img:'<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="180" y="14" text-anchor="middle" font-size="10" fill="#777" font-weight="bold">CENTRAL RAY ANGULATION — SIDE VIEW</text><rect x="40" y="140" width="280" height="10" fill="#bdbdbd" rx="2"/><text x="180" y="168" text-anchor="middle" font-size="9" fill="#555">Patient / Table</text><rect x="155" y="22" width="50" height="30" fill="#ffccbc" stroke="#e64a19" stroke-width="2" rx="4"/><text x="180" y="41" text-anchor="middle" font-size="9" fill="#e64a19">X-RAY TUBE</text><line x1="180" y1="52" x2="220" y2="138" stroke="#e64a19" stroke-width="2.5"/><polygon points="220,138 213,128 226,131" fill="#e64a19"/><line x1="180" y1="52" x2="180" y2="140" stroke="#e64a19" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/><path d="M 180 80 A 25 25 0 0 1 194 90" fill="none" stroke="#333" stroke-width="1.5"/><text x="190" y="75" font-size="10" fill="#333" font-weight="bold">15&#176;</text><text x="215" y="125" font-size="9" fill="#c2185b">CR angled toward FEET</text></svg>',
  opts:["Caudal (caudad) angulation","Cephalad (cranial) angulation","Perpendicular (0°) projection","Tangential projection"],
  a:0,
  exp:"Caudal (caudad) angulation: the central ray is angled toward the patient's feet. This is used for projections such as the PA axial skull (Caldwell at 15° caudal), AP sacrum, AP axial coccyx (10° caudal), and some shoulder/clavicle projections.",
  oe:["Correct. Caudal angulation = CR directed toward the FEET. Used for Caldwell skull, AP sacrum, coccyx, and select shoulder projections.","Cephalad angulation = CR toward the HEAD. This diagram shows the beam angled toward the FEET.","Perpendicular = beam goes straight down at 90° to the IR with no angulation. This diagram shows a clear angle.","Tangential = beam parallel to a curved surface. Not the same as a caudal tilt."]
},
{ cat:"Safety", sub:"Radiation Protection",
  q:"Where should a radiation monitoring dosimeter badge be worn during fluoroscopy when a lead apron is used?",
  img:'<svg viewBox="0 0 260 310" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="130" y="16" text-anchor="middle" font-size="10" fill="#777" font-weight="bold">DOSIMETER BADGE PLACEMENT</text><ellipse cx="130" cy="55" rx="28" ry="32" fill="#fff9c4" stroke="#e65100" stroke-width="2"/><rect x="88" y="82" width="84" height="110" fill="#c8e6c9" stroke="#388e3c" stroke-width="2" rx="6"/><text x="130" y="143" text-anchor="middle" font-size="9" fill="#388e3c">LEAD APRON</text><rect x="30" y="192" width="72" height="100" fill="#bbdefb" stroke="#1565c0" stroke-width="1.5" rx="4"/><rect x="158" y="192" width="72" height="100" fill="#bbdefb" stroke="#1565c0" stroke-width="1.5" rx="4"/><rect x="118" y="192" width="24" height="100" fill="#bbdefb" stroke="#1565c0" stroke-width="1" rx="2"/><rect x="100" y="86" width="22" height="14" fill="#c2185b" stroke="#880e4f" stroke-width="2" rx="3"/><text x="111" y="96" text-anchor="middle" font-size="8" fill="white" font-weight="bold">BADGE</text><line x1="122" y1="93" x2="175" y2="93" stroke="#c2185b" stroke-width="1.5" stroke-dasharray="4,3"/><text x="178" y="97" font-size="9" fill="#c2185b">collar level</text><text x="178" y="109" font-size="9" fill="#c2185b">OUTSIDE apron</text></svg>',
  opts:["At collar level, outside the lead apron","At waist level, inside the lead apron","On the wrist of the dominant hand","At collar level, under the lead apron"],
  a:0,
  exp:"During fluoroscopy, the dosimeter badge should be worn at collar level (thyroid area) on the OUTSIDE of the lead apron. This location best measures dose to the head, neck, lens of the eye, and thyroid — unprotected areas. The reading outside the apron represents the highest exposure and is used to calculate effective dose. If a thyroid shield is worn, the badge goes above it.",
  oe:["Correct. Badge at collar level, OUTSIDE the apron. This measures dose to the unshielded head/neck/thyroid and is used for regulatory reporting.","Wearing the badge inside the apron would underestimate the dose to unprotected body parts — the collar reading is needed.","Wrist dosimeters are used when the hands receive significant exposure (e.g., interventional procedures), but the primary badge belongs at the collar.","Under the apron would shield the badge from scattered radiation reaching the neck/head area, severely underestimating dose to those regions."]
},
{ cat:"Patient Care", sub:"Patient Transfer & Positioning",
  q:"When transferring a patient from a wheelchair to the X-ray table, the wheelchair should be positioned at approximately what angle to the table?",
  img:'<svg viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="150" y="16" text-anchor="middle" font-size="10" fill="#777" font-weight="bold">WHEELCHAIR-TO-TABLE TRANSFER</text><rect x="30" y="120" width="240" height="18" fill="#9e9e9e" rx="3" stroke="#666" stroke-width="1.5"/><text x="150" y="153" text-anchor="middle" font-size="9" fill="#555">X-RAY TABLE</text><g transform="rotate(-45, 80, 118)"><rect x="50" y="108" width="60" height="35" fill="#bbdefb" stroke="#1565c0" stroke-width="2" rx="4"/><text x="80" y="130" text-anchor="middle" font-size="8" fill="#1565c0">W/C</text></g><path d="M 80 118 A 40 40 0 0 1 118 80" fill="none" stroke="#c2185b" stroke-width="2"/><text x="68" y="88" font-size="10" fill="#c2185b" font-weight="bold">~45&#176;</text><text x="150" y="210" text-anchor="middle" font-size="9" fill="#333">Footrests removed; patient</text><text x="150" y="223" text-anchor="middle" font-size="9" fill="#333">pivots from locked wheelchair</text><text x="150" y="236" text-anchor="middle" font-size="9" fill="#333">to table edge.</text></svg>',
  opts:["45° angle to the table","90° (perpendicular) to the table","Parallel to the table","180° (opposite side of table)"],
  a:0,
  exp:"The wheelchair should be positioned at approximately 45° to the X-ray table, with the footrests removed and the chair locked. This angle allows the patient to pivot with minimal lateral movement, reducing the risk of falls. The strong side leads the pivot. The radiographer assists and ensures the transfer is safe.",
  oe:["Correct. 45° angle facilitates a safe pivot transfer with minimal lateral movement. Lock the chair, remove footrests, patient pivots to table.","90° perpendicular placement requires more lateral movement and increases fall risk during transfer.","Parallel placement makes it very difficult for the patient to pivot onto the table.","180° (opposite side) is unsafe — the patient would have to walk around, defeating the purpose of a pivot transfer."]
},
{ cat:"Procedures", sub:"Patient Positioning",
  q:"This diagram shows the patient position for a specific skull projection. Which method uses this positioning?",
  img:'<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="180" y="14" text-anchor="middle" font-size="10" fill="#777" font-weight="bold">SKULL PROJECTION — SIDE VIEW</text><rect x="30" y="150" width="300" height="10" fill="#bdbdbd" rx="2"/><text x="180" y="178" text-anchor="middle" font-size="9" fill="#555">Table / IR</text><ellipse cx="180" cy="115" rx="55" ry="45" fill="#fff9c4" stroke="#e65100" stroke-width="2"/><text x="180" y="118" text-anchor="middle" font-size="9" fill="#555">SKULL (AP axial)</text><text x="180" y="132" text-anchor="middle" font-size="8" fill="#555">OML &#8869; table</text><rect x="155" y="22" width="50" height="28" fill="#ffccbc" stroke="#e64a19" stroke-width="2" rx="4"/><text x="180" y="39" text-anchor="middle" font-size="9" fill="#e64a19">X-RAY TUBE</text><line x1="180" y1="50" x2="143" y2="148" stroke="#e64a19" stroke-width="2.5"/><polygon points="143,148 137,138 152,140" fill="#e64a19"/><path d="M 180 75 A 30 30 0 0 0 157 88" fill="none" stroke="#333" stroke-width="1.5"/><text x="148" y="72" font-size="10" fill="#333" font-weight="bold">30&#176;</text><text x="55" y="115" font-size="9" fill="#c2185b">CR: 30&#176;&#8211;37&#176; cephalad</text></svg>',
  opts:["Caldwell method (PA axial)","Towne method (AP axial)","Waters method (PA)","Lateral skull projection"],
  a:1,
  exp:"Towne method (AP axial): the patient is supine or erect facing the tube, orbitomeatal line (OML) perpendicular to the IR, with the CR angled 30° cephalad (or 37° if using IOML). This projection demonstrates the occipital bone, foramen magnum, and posterior skull. The reverse Towne uses a PA approach.",
  oe:["Caldwell method = PA axial with 15° CAUDAL angulation. This diagram shows a cephalad (upward toward head) angle from the AP direction.","Correct. Towne method = AP axial with 30–37° CEPHALAD angle. OML perpendicular to IR. Shows occipital bone and foramen magnum.","Waters method = PA with the OML at 37° to the IR and NO tube angulation. It is used for facial bones/sinuses, not with cephalad CR tilt.","Lateral skull = patient in true lateral, CR horizontal. This diagram shows an AP/axial projection with cephalad angulation."]
},

];





