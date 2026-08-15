export type Lang = "mr" | "hi" | "en";

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "mr", label: "मराठी", short: "मरा" },
  { code: "hi", label: "हिंदी", short: "हिं" },
  { code: "en", label: "English", short: "EN" },
];

export type BusinessCopy = {
  name: string;
  tagline: string;
  description: string;
  items: string[];
};

export type Content = {
  htmlLang: string;
  brand: string;
  brandSub: string;
  address: string;
  hours: string;
  nav: { home: string; about: string; services: string; gallery: string; faq: string; contact: string };
  common: {
    call: string;
    callNow: string;
    whatsapp: string;
    askOnWhatsapp: string;
    viewServices: string;
    proprietor: string;
    language: string;
    openNow: string;
    closedNow: string;
    todayHours: string;
    closedToday: string;
  };
  home: {
    title: string;
    description: string;
    keywords: string;
    badge: string;
    h1: string;
    intro: string;
    heroAlt: string;
    features: { t: string; d: string }[];
    businessesHeading: string;
    businessesSub: string;
    testimonialsHeading: string;
    ctaHeading: string;
    ctaCall: string;
    ctaForm: string;
    independenceDay: string;
  };
  about: {
    title: string;
    description: string;
    h1: string;
    p1: string;
    p2: string;
    familyHeading: string;
    valuesHeading: string;
    values: { t: string; d: string }[];
    addressLabel: string;
  };
  services: { title: string; description: string; h1: string; intro: string };
  gallery: { title: string; description: string; h1: string; intro: string; areaAlt: string };
  faq: { title: string; description: string; h1: string };
  contact: {
    title: string;
    description: string;
    h1: string;
    intro: string;
    name: string;
    namePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    subject: string;
    other: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    waGreeting: string;
    waName: string;
    waPhone: string;
    waSubject: string;
    waMessage: string;
  };
  map: { heading: string; iframeTitle: string; openInMaps: string };
  footer: { businessesHeading: string; linksHeading: string; hoursLabel: string; rights: string; visitorsLabel: string };
  businesses: Record<string, BusinessCopy>;
  testimonials: { name: string; place: string; text: string }[];
  faqs: { q: string; a: string }[];
};

const mrAddress =
  "दत्ता निवास, गव्हर्नमेंट रेस्ट हाऊसच्या समोर, भापडा मेन रोडच्या कडेला, जारावंडी, पो. जारावंडी, ता. एटापल्ली, जि. गडचिरोली (महा.) – ४४२६०६";
const hiAddress =
  "दत्ता निवास, गवर्नमेंट रेस्ट हाउस के सामने, भापड़ा मेन रोड के किनारे, जारावंडी, पो. जारावंडी, ता. एटापल्ली, जि. गढ़चिरौली (महा.) – ४४२६०६";
const enAddress =
  "Datta Niwas, opposite Government Rest House, on Bhapda Main Road, Jarawandi, Post Jarawandi, Tal. Etapalli, Dist. Gadchiroli, Maharashtra – 442606";

const mr: Content = {
  htmlLang: "mr",
  brand: "दत्ता कुटुंब व्यवसाय समूह",
  brandSub: "जारावंडी, ता. एटापल्ली",
  address: mrAddress,
  hours: "दुकानानुसार वेळ — सोम-शनि ९:०० ते २०:००",
  nav: {
    home: "मुख्यपृष्ठ",
    about: "आमच्याविषयी",
    services: "सेवा व उत्पादने",
    gallery: "गॅलरी",
    faq: "प्रश्नोत्तरे",
    contact: "संपर्क",
  },
  common: {
    call: "कॉल करा",
    callNow: "आत्ताच कॉल करा",
    whatsapp: "WhatsApp",
    askOnWhatsapp: "WhatsApp वर विचारा",
    viewServices: "सेवा पहा",
    proprietor: "प्रोप्रायटर",
    language: "भाषा",
    openNow: "आत्ता उघडे",
    closedNow: "सध्या बंद",
    todayHours: "आजची वेळ",
    closedToday: "आज बंद",
  },
  home: {
    title: "दत्ता कुटुंब व्यवसाय समूह | CSC सेवा, बांगडी भंडार, शू शॉप, टेलरिंग – जारावंडी",
    description:
      "जारावंडी, ता. एटापल्ली येथे CSC ऑनलाइन सेवा, बांगड्या व लेडीज अ‍ॅक्सेसरीज, स्वस्त व दर्जेदार चप्पल-जोडे आणि टेलरिंग-विणकाम सेवा — एकाच कुटुंबाच्या विश्वासाने.",
    keywords:
      "CSC केंद्र जारावंडी, ऑनलाइन फॉर्म एटापल्ली, बांगडी दुकान गडचिरोली, चप्पल दुकान जारावंडी, टेलरिंग शॉप एटापल्ली, दत्ता सर्व्हिसेस",
    badge: "जारावंडी, ता. एटापल्ली, जि. गडचिरोली",
    h1: "जारावंडी येथे CSC सेवा केंद्र, बांगडी भंडार, पादत्राणे व टेलरिंग — दत्ता कुटुंब व्यवसाय समूह",
    intro:
      "डिजिटल व शासकीय सेवा, सणासुदीच्या बांगड्या व अ‍ॅक्सेसरीज, परवडणारी पादत्राणे आणि मापाप्रमाणे शिवणकाम — दत्ता कुटुंबाच्या आपुलकीच्या सेवेसह.",
    heroAlt: "जारावंडी येथील दत्ता कुटुंबाची दुकाने",
    features: [
      { t: "विश्वासार्ह सेवा", d: "१०+ वर्षांचा अनुभव" },
      { t: "दररोज सुरू", d: "सकाळी ९ ते रात्री ८" },
      { t: "परवडणारे दर", d: "गावकऱ्यांसाठी खास" },
    ],
    businessesHeading: "आमचे चार व्यवसाय",
    businessesSub:
      "प्रत्येक व्यवसाय कुटुंबातील सदस्य स्वतः सांभाळतात — त्यामुळे दर्जा आणि विश्वास दोन्ही कायम.",
    testimonialsHeading: "ग्राहक काय म्हणतात",
    ctaHeading: "आजच भेट द्या किंवा फोन करा",
    ctaCall: "9404884450 वर कॉल करा",
    ctaForm: "संपर्क फॉर्म भरा",
    independenceDay: "स्वातंत्र्य दिनाच्या हार्दिक शुभेच्छा! 🇮🇳",
  },
  about: {
    title: "आमच्याविषयी | दत्ता कुटुंब व्यवसाय समूह, जारावंडी",
    description:
      "जारावंडी येथील दत्ता कुटुंबाची चार दुकाने — CSC सेवा केंद्र, बांगडी भंडार, शू शॉप आणि टेलरिंग शॉप. आमचा प्रवास, मूल्ये आणि कुटुंबातील सदस्यांची ओळख.",
    h1: "आमच्याविषयी",
    p1: "दत्ता कुटुंब व्यवसाय समूह म्हणजे जारावंडी व परिसरातील गावकऱ्यांच्या रोजच्या गरजा एका ठिकाणी पूर्ण करणारा कुटुंबीय उपक्रम. सुरुवात एका छोट्या दुकानापासून झाली आणि आज आमच्या चार सेवा-दुकानांवर परिसरातील शेकडो कुटुंबे विश्वास ठेवतात.",
    p2: "आमचे तत्त्व साधे आहे — प्रामाणिक व्यवहार, वाजवी दर आणि वेळेत सेवा. प्रत्येक दुकान कुटुंबातील सदस्य स्वतः सांभाळतात, त्यामुळे ग्राहकांना नेहमी थेट आणि आपुलकीची सेवा मिळते.",
    familyHeading: "आमचे कुटुंब, आमचे व्यवसाय",
    valuesHeading: "आमची मूल्ये",
    values: [
      { t: "प्रामाणिकपणा", d: "स्पष्ट दर, लपवलेले शुल्क नाही." },
      { t: "गुणवत्ता", d: "तपासलेला माल आणि नीटनेटके काम." },
      { t: "आपुलकी", d: "प्रत्येक ग्राहक आमच्या कुटुंबाचा भाग." },
    ],
    addressLabel: "पत्ता",
  },
  services: {
    title: "सेवा व उत्पादने | CSC, बांगड्या, चप्पल, टेलरिंग – जारावंडी",
    description:
      "दत्ता सर्व्हिसेसच्या ऑनलाइन व शासकीय सेवा, साराचं बांगडी भंडारमधील अ‍ॅक्सेसरीज, दत्ता अँड सन्समधील चप्पल-जोडे आणि सारा टेलरिंगचे शिवणकाम — संपूर्ण यादी व दर विचारणा.",
    h1: "सेवा व उत्पादने",
    intro:
      "खालील प्रत्येक विभागात संबंधित मालकांचा थेट संपर्क क्रमांक दिला आहे — कॉल करा किंवा WhatsApp वर विचारणा करा.",
  },
  gallery: {
    title: "फोटो गॅलरी | दत्ता कुटुंब व्यवसाय समूह, जारावंडी",
    description:
      "आमच्या CSC सेवा केंद्र, बांगडी भंडार, शू शॉप आणि टेलरिंग शॉपचे फोटो — दुकानातील माल, सेवा आणि वातावरणाची झलक.",
    h1: "फोटो गॅलरी",
    intro: "आमच्या दुकानांची आणि सेवांची झलक. नवीन माल आल्यावर फोटो अपडेट केले जातात.",
    areaAlt: "जारावंडी येथील आमचा परिसर",
  },
  faq: {
    title: "वारंवार विचारले जाणारे प्रश्न | दत्ता कुटुंब व्यवसाय समूह",
    description:
      "दुकानाची वेळ, CSC सेवा, शिवणकामाचा कालावधी, ऑर्डर व पेमेंट पर्याय आणि पत्ता — ग्राहकांच्या नेहमीच्या प्रश्नांची उत्तरे.",
    h1: "वारंवार विचारले जाणारे प्रश्न",
  },
  contact: {
    title: "संपर्क करा | दत्ता कुटुंब व्यवसाय समूह, जारावंडी",
    description:
      "जारावंडी, ता. एटापल्ली येथील दत्ता कुटुंब व्यवसाय समूहाशी संपर्क साधा — फोन, WhatsApp, पत्ता, नकाशा आणि चौकशी फॉर्म.",
    h1: "संपर्क करा",
    intro:
      "चौकशीसाठी थेट कॉल करा किंवा खालील फॉर्म भरून WhatsApp वर संदेश पाठवा — आम्ही लवकरात लवकर उत्तर देऊ.",
    name: "आपले नाव",
    namePlaceholder: "उदा. सुरेश मडावी",
    phone: "मोबाईल नंबर",
    phonePlaceholder: "१० अंकी नंबर",
    subject: "कोणत्या सेवेबाबत?",
    other: "इतर चौकशी",
    message: "आपला संदेश",
    messagePlaceholder: "आपली गरज थोडक्यात लिहा",
    submit: "WhatsApp वर पाठवा",
    waGreeting: "नमस्कार",
    waName: "नाव",
    waPhone: "मोबाईल",
    waSubject: "विषय",
    waMessage: "संदेश",
  },
  map: {
    heading: "आमचे ठिकाण",
    iframeTitle: "दत्ता कुटुंब व्यवसाय समूह – नकाशा",
    openInMaps: "Google Maps वर उघडा",
  },
  footer: {
    businessesHeading: "आमचे व्यवसाय",
    linksHeading: "दुवे",
    hoursLabel: "वेळ",
    rights: "सर्व हक्क राखीव.",
    visitorsLabel: "एकूण भेटी:",
  },
  businesses: {
    "datta-services": {
      name: "दत्ता सर्व्हिसेस (CSC सेवा केंद्र)",
      tagline: "गावातच सर्व शासकीय व डिजिटल सेवा — एका छताखाली",
      description:
        "बँकेत रांग नको, तालुक्याला हेलपाटे नकोत. दत्ता सर्व्हिसेसमध्ये पैसे जमा करणे व पाठवणे, ऑनलाइन अर्ज, प्रमाणपत्रे, शासकीय व खाजगी ऑनलाइन सेवा जलद, अचूक आणि विश्वासाने केल्या जातात.",
      items: [
        "पैसे जमा करणे व पाठवणे (AEPS / मनी ट्रान्सफर)",
        "ऑनलाइन फॉर्म व अर्ज भरणे",
        "शासकीय दाखले व प्रमाणपत्रे",
        "आधार, पॅन, विमा व इतर सेवा",
        "प्रिंट, स्कॅन व झेरॉक्स",
      ],
    },
    "sara-bangdi-bhandar": {
      name: "साराचं बांगडी भंडार",
      tagline: "प्रत्येक सणाला साजेशा बांगड्या आणि नाजूक अ‍ॅक्सेसरीज",
      description:
        "रंगीबेरंगी काचेच्या व मेटल बांगड्या, कानातील टॉप्स, आकर्षक लेडीज अ‍ॅक्सेसरीज आणि नवनवीन फॅशन वस्तू — माफक दरात, भरपूर व्हरायटी आणि आपुलकीची सेवा.",
      items: [
        "काचेच्या व फॅन्सी बांगड्या",
        "कानातील टॉप्स व झुमके",
        "लेडीज अ‍ॅक्सेसरीज",
        "फॅशन ज्वेलरी व सणासुदीच्या वस्तू",
        "गिफ्ट व शृंगार साहित्य",
      ],
    },
    "datta-and-sons-shoe-shop": {
      name: "दत्ता अँड सन्स शू शॉप",
      tagline: "कमी किमतीत टिकाऊ चप्पल व जोडे",
      description:
        "शाळकरी मुलांपासून ते मोठ्यांपर्यंत — रोजच्या वापरासाठी मजबूत चप्पल, सणासाठी स्टायलिश जोडे आणि कामासाठी टिकाऊ पादत्राणे. दर्जा तपासून, किंमत परवडणारी.",
      items: [
        "पुरुषांचे व महिलांचे चप्पल",
        "शाळेचे व फॉर्मल शूज",
        "स्पोर्ट्स व कॅज्युअल शूज",
        "पावसाळी व कामाची पादत्राणे",
        "लहान मुलांचे फूटवेअर",
      ],
    },
    "sara-tailoring-shop": {
      name: "सारा टेलरिंग शॉप",
      tagline: "मापाप्रमाणे परिपूर्ण शिवणकाम व विणकाम",
      description:
        "ब्लाउज, ड्रेस, कुर्ता व लहान मुलांचे कपडे मापाप्रमाणे शिवून मिळतील. लोकर विणकाम, स्वेटर आणि कपड्यांचे अल्टरेशन — वेळेत आणि नीटनेटके.",
      items: [
        "ब्लाउज, ड्रेस व कुर्ता शिवणकाम",
        "लहान मुलांचे कपडे",
        "लोकर विणकाम व स्वेटर",
        "कपड्यांचे अल्टरेशन व दुरुस्ती",
        "फॉल-पिको व फिनिशिंग कामे",
      ],
    },
  },
  testimonials: [
    {
      name: "सुरेश मडावी",
      place: "जारावंडी",
      text: "पैसे पाठवण्यासाठी आता तालुक्याला जावं लागत नाही. कृष्णाभाऊ काम लगेच आणि नीट करून देतात.",
    },
    {
      name: "मंगला कोडापे",
      place: "भापडा",
      text: "बांगड्यांची व्हरायटी खूप छान आहे. सणाला लागणारं सगळं इथेच मिळतं आणि दरही परवडणारे.",
    },
    {
      name: "अनिल आत्राम",
      place: "एटापल्ली",
      text: "मुलांच्या शाळेचे बूट इथून घेतले, वर्षभर टिकले. किंमतही कमी आणि दर्जा चांगला.",
    },
    {
      name: "वैशाली गेडाम",
      place: "जारावंडी",
      text: "ब्लाउजचं माप एकदम बरोबर बसतं. पौर्णिमाताई वेळेत काम करून देतात.",
    },
  ],
  faqs: [
    {
      q: "दुकान कोणत्या वेळेत उघडे असते?",
      a: "आमची चारही दुकाने सोमवार ते रविवार सकाळी ९:०० ते रात्री ८:०० या वेळेत सुरू असतात. सणासुदीला वेळ वाढवली जाते.",
    },
    {
      q: "CSC केंद्रात कोणकोणत्या सेवा मिळतात?",
      a: "पैसे जमा करणे व पाठवणे, ऑनलाइन अर्ज व फॉर्म, शासकीय दाखले, आधार व पॅन संबंधित सेवा, विमा, प्रिंट-स्कॅन अशा सर्व डिजिटल सेवा मिळतात.",
    },
    {
      q: "शिवणकामासाठी किती दिवस लागतात?",
      a: "साधारण ब्लाउज किंवा ड्रेससाठी ३ ते ५ दिवस लागतात. गरज असल्यास तातडीची ऑर्डरही स्वीकारली जाते.",
    },
    {
      q: "ऑर्डर फोनवर देता येते का?",
      a: "होय. WhatsApp वर फोटो व माप पाठवून ऑर्डर देता येते, किंवा थेट कॉल करून विचारणा करता येते.",
    },
    { q: "दुकानाचा पत्ता कुठे आहे?", a: mrAddress },
    { q: "ऑनलाइन पेमेंट स्वीकारले जाते का?", a: "होय, UPI व रोख दोन्ही पर्याय उपलब्ध आहेत." },
  ],
};

const hi: Content = {
  htmlLang: "hi",
  brand: "दत्ता परिवार व्यवसाय समूह",
  brandSub: "जारावंडी, ता. एटापल्ली",
  address: hiAddress,
  hours: "दुकान अनुसार समय — सोम-शनि ९:०० से २०:०० तक",
  nav: {
    home: "मुख्य पृष्ठ",
    about: "हमारे बारे में",
    services: "सेवाएँ व उत्पाद",
    gallery: "गैलरी",
    faq: "सामान्य प्रश्न",
    contact: "संपर्क",
  },
  common: {
    call: "कॉल करें",
    callNow: "अभी कॉल करें",
    whatsapp: "WhatsApp",
    askOnWhatsapp: "WhatsApp पर पूछें",
    viewServices: "सेवाएँ देखें",
    proprietor: "प्रोपराइटर",
    language: "भाषा",
    openNow: "अभी खुला",
    closedNow: "अभी बंद",
    todayHours: "आज का समय",
    closedToday: "आज बंद",
  },
  home: {
    title: "दत्ता परिवार व्यवसाय समूह | CSC सेवा, चूड़ी भंडार, शू शॉप, टेलरिंग – जारावंडी",
    description:
      "जारावंडी, ता. एटापल्ली में CSC ऑनलाइन सेवाएँ, चूड़ियाँ व लेडीज़ एक्सेसरीज़, किफ़ायती व टिकाऊ चप्पल-जूते तथा सिलाई-बुनाई सेवाएँ — एक ही परिवार के भरोसे के साथ।",
    keywords:
      "CSC केंद्र जारावंडी, ऑनलाइन फॉर्म एटापल्ली, चूड़ी दुकान गढ़चिरौली, जूते की दुकान जारावंडी, टेलरिंग शॉप एटापल्ली, दत्ता सर्विसेज",
    badge: "जारावंडी, ता. एटापल्ली, जि. गढ़चिरौली",
    h1: "जारावंडी में CSC सेवा केंद्र, चूड़ी भंडार, जूते-चप्पल और टेलरिंग — दत्ता परिवार व्यवसाय समूह",
    intro:
      "डिजिटल व सरकारी सेवाएँ, त्योहारों की चूड़ियाँ व एक्सेसरीज़, किफ़ायती फुटवेयर और नाप के अनुसार सिलाई — दत्ता परिवार की आत्मीय सेवा के साथ।",
    heroAlt: "जारावंडी स्थित दत्ता परिवार की दुकानें",
    features: [
      { t: "भरोसेमंद सेवा", d: "१०+ वर्षों का अनुभव" },
      { t: "प्रतिदिन खुला", d: "सुबह ९ से रात ८ बजे तक" },
      { t: "किफ़ायती दाम", d: "गाँववालों के लिए खास" },
    ],
    businessesHeading: "हमारे चार व्यवसाय",
    businessesSub:
      "हर व्यवसाय परिवार के सदस्य स्वयं संभालते हैं — इसलिए गुणवत्ता और भरोसा दोनों बने रहते हैं।",
    testimonialsHeading: "ग्राहक क्या कहते हैं",
    ctaHeading: "आज ही आएँ या फोन करें",
    ctaCall: "9404884450 पर कॉल करें",
    ctaForm: "संपर्क फॉर्म भरें",
    independenceDay: "स्वतंत्रता दिवस की हार्दिक शुभकामनाएँ! 🇮🇳",
  },
  about: {
    title: "हमारे बारे में | दत्ता परिवार व्यवसाय समूह, जारावंडी",
    description:
      "जारावंडी स्थित दत्ता परिवार की चार दुकानें — CSC सेवा केंद्र, चूड़ी भंडार, शू शॉप और टेलरिंग शॉप। हमारा सफ़र, मूल्य और परिवार के सदस्यों का परिचय।",
    h1: "हमारे बारे में",
    p1: "दत्ता परिवार व्यवसाय समूह जारावंडी और आसपास के गाँववालों की रोज़मर्रा की ज़रूरतें एक ही जगह पूरी करने वाला पारिवारिक उपक्रम है। शुरुआत एक छोटी दुकान से हुई और आज हमारी चार दुकानों पर सैकड़ों परिवार भरोसा करते हैं।",
    p2: "हमारा सिद्धांत सरल है — ईमानदार व्यवहार, उचित दाम और समय पर सेवा। हर दुकान परिवार का सदस्य स्वयं संभालता है, इसलिए ग्राहकों को हमेशा सीधी और आत्मीय सेवा मिलती है।",
    familyHeading: "हमारा परिवार, हमारे व्यवसाय",
    valuesHeading: "हमारे मूल्य",
    values: [
      { t: "ईमानदारी", d: "स्पष्ट दाम, कोई छिपा शुल्क नहीं।" },
      { t: "गुणवत्ता", d: "परखा हुआ सामान और साफ़-सुथरा काम।" },
      { t: "आत्मीयता", d: "हर ग्राहक हमारे परिवार का हिस्सा।" },
    ],
    addressLabel: "पता",
  },
  services: {
    title: "सेवाएँ व उत्पाद | CSC, चूड़ियाँ, जूते, टेलरिंग – जारावंडी",
    description:
      "दत्ता सर्विसेज की ऑनलाइन व सरकारी सेवाएँ, सारा चूड़ी भंडार की एक्सेसरीज़, दत्ता एंड संस के चप्पल-जूते और सारा टेलरिंग की सिलाई — पूरी सूची और दाम की जानकारी।",
    h1: "सेवाएँ व उत्पाद",
    intro:
      "नीचे हर विभाग में संबंधित मालिक का सीधा संपर्क नंबर दिया गया है — कॉल करें या WhatsApp पर पूछें।",
  },
  gallery: {
    title: "फोटो गैलरी | दत्ता परिवार व्यवसाय समूह, जारावंडी",
    description:
      "हमारे CSC सेवा केंद्र, चूड़ी भंडार, शू शॉप और टेलरिंग शॉप की तस्वीरें — सामान, सेवाओं और माहौल की झलक।",
    h1: "फोटो गैलरी",
    intro: "हमारी दुकानों और सेवाओं की झलक। नया सामान आने पर तस्वीरें अपडेट की जाती हैं।",
    areaAlt: "जारावंडी में हमारा परिसर",
  },
  faq: {
    title: "अक्सर पूछे जाने वाले प्रश्न | दत्ता परिवार व्यवसाय समूह",
    description:
      "दुकान का समय, CSC सेवाएँ, सिलाई में लगने वाला समय, ऑर्डर व भुगतान विकल्प और पता — ग्राहकों के सामान्य प्रश्नों के उत्तर।",
    h1: "अक्सर पूछे जाने वाले प्रश्न",
  },
  contact: {
    title: "संपर्क करें | दत्ता परिवार व्यवसाय समूह, जारावंडी",
    description:
      "जारावंडी, ता. एटापल्ली स्थित दत्ता परिवार व्यवसाय समूह से संपर्क करें — फोन, WhatsApp, पता, नक्शा और पूछताछ फॉर्म।",
    h1: "संपर्क करें",
    intro:
      "पूछताछ के लिए सीधे कॉल करें या नीचे फॉर्म भरकर WhatsApp पर संदेश भेजें — हम जल्द ही उत्तर देंगे।",
    name: "आपका नाम",
    namePlaceholder: "जैसे सुरेश मडावी",
    phone: "मोबाइल नंबर",
    phonePlaceholder: "१० अंकों का नंबर",
    subject: "किस सेवा के बारे में?",
    other: "अन्य पूछताछ",
    message: "आपका संदेश",
    messagePlaceholder: "अपनी ज़रूरत संक्षेप में लिखें",
    submit: "WhatsApp पर भेजें",
    waGreeting: "नमस्कार",
    waName: "नाम",
    waPhone: "मोबाइल",
    waSubject: "विषय",
    waMessage: "संदेश",
  },
  map: {
    heading: "हमारा स्थान",
    iframeTitle: "दत्ता परिवार व्यवसाय समूह – नक्शा",
    openInMaps: "Google Maps में खोलें",
  },
  footer: {
    businessesHeading: "हमारे व्यवसाय",
    linksHeading: "लिंक",
    hoursLabel: "समय",
    rights: "सर्वाधिकार सुरक्षित।",
    visitorsLabel: "कुल विज़िट:",
  },
  businesses: {
    "datta-services": {
      name: "दत्ता सर्विसेज (CSC सेवा केंद्र)",
      tagline: "गाँव में ही सभी सरकारी व डिजिटल सेवाएँ — एक ही छत के नीचे",
      description:
        "बैंक की कतार नहीं, तालुका के चक्कर नहीं। दत्ता सर्विसेज में पैसे जमा करना व भेजना, ऑनलाइन आवेदन, प्रमाणपत्र तथा सरकारी व निजी ऑनलाइन सेवाएँ तेज़, सही और भरोसे के साथ की जाती हैं।",
      items: [
        "पैसे जमा करना व भेजना (AEPS / मनी ट्रांसफर)",
        "ऑनलाइन फॉर्म व आवेदन भरना",
        "सरकारी प्रमाणपत्र व दस्तावेज़",
        "आधार, पैन, बीमा व अन्य सेवाएँ",
        "प्रिंट, स्कैन व फोटोकॉपी",
      ],
    },
    "sara-bangdi-bhandar": {
      name: "सारा चूड़ी भंडार",
      tagline: "हर त्योहार के लिए सुंदर चूड़ियाँ और नाज़ुक एक्सेसरीज़",
      description:
        "रंग-बिरंगी काँच व मेटल की चूड़ियाँ, कान के टॉप्स, आकर्षक लेडीज़ एक्सेसरीज़ और नई-नई फैशन वस्तुएँ — किफ़ायती दाम, भरपूर वैरायटी और आत्मीय सेवा।",
      items: [
        "काँच व फैंसी चूड़ियाँ",
        "कान के टॉप्स व झुमके",
        "लेडीज़ एक्सेसरीज़",
        "फैशन ज्वेलरी व त्योहारी वस्तुएँ",
        "गिफ्ट व श्रृंगार सामग्री",
      ],
    },
    "datta-and-sons-shoe-shop": {
      name: "दत्ता एंड संस शू शॉप",
      tagline: "कम दाम में टिकाऊ चप्पल व जूते",
      description:
        "स्कूली बच्चों से लेकर बड़ों तक — रोज़ाना के लिए मज़बूत चप्पल, त्योहारों के लिए स्टाइलिश जूते और काम के लिए टिकाऊ फुटवेयर। गुणवत्ता परखी हुई, कीमत किफ़ायती।",
      items: [
        "पुरुषों व महिलाओं की चप्पलें",
        "स्कूल व फॉर्मल जूते",
        "स्पोर्ट्स व कैज़ुअल शूज़",
        "बरसाती व काम के फुटवेयर",
        "बच्चों के फुटवेयर",
      ],
    },
    "sara-tailoring-shop": {
      name: "सारा टेलरिंग शॉप",
      tagline: "नाप के अनुसार बेहतरीन सिलाई व बुनाई",
      description:
        "ब्लाउज, ड्रेस, कुर्ता और बच्चों के कपड़े नाप के अनुसार सिलकर मिलेंगे। ऊन की बुनाई, स्वेटर और कपड़ों की अल्टरेशन — समय पर और साफ़-सुथरी।",
      items: [
        "ब्लाउज, ड्रेस व कुर्ता सिलाई",
        "बच्चों के कपड़े",
        "ऊन की बुनाई व स्वेटर",
        "कपड़ों की अल्टरेशन व मरम्मत",
        "फॉल-पिको व फिनिशिंग कार्य",
      ],
    },
  },
  testimonials: [
    {
      name: "सुरेश मडावी",
      place: "जारावंडी",
      text: "पैसे भेजने के लिए अब तालुका जाना नहीं पड़ता। कृष्णा भाऊ काम तुरंत और सही कर देते हैं।",
    },
    {
      name: "मंगला कोडापे",
      place: "भापड़ा",
      text: "चूड़ियों की वैरायटी बहुत अच्छी है। त्योहार का सारा सामान यहीं मिल जाता है और दाम भी किफ़ायती।",
    },
    {
      name: "अनिल आत्राम",
      place: "एटापल्ली",
      text: "बच्चों के स्कूल के जूते यहीं से लिए, साल भर चले। कीमत कम और गुणवत्ता अच्छी।",
    },
    {
      name: "वैशाली गेडाम",
      place: "जारावंडी",
      text: "ब्लाउज का नाप एकदम सही बैठता है। पौर्णिमा ताई समय पर काम कर देती हैं।",
    },
  ],
  faqs: [
    {
      q: "दुकान किस समय खुली रहती है?",
      a: "हमारी चारों दुकानें सोमवार से रविवार सुबह ९:०० से रात ८:०० तक खुली रहती हैं। त्योहारों पर समय बढ़ा दिया जाता है।",
    },
    {
      q: "CSC केंद्र में कौन-कौन सी सेवाएँ मिलती हैं?",
      a: "पैसे जमा करना व भेजना, ऑनलाइन आवेदन व फॉर्म, सरकारी प्रमाणपत्र, आधार व पैन संबंधी सेवाएँ, बीमा, प्रिंट-स्कैन जैसी सभी डिजिटल सेवाएँ मिलती हैं।",
    },
    {
      q: "सिलाई में कितने दिन लगते हैं?",
      a: "सामान्य ब्लाउज या ड्रेस के लिए ३ से ५ दिन लगते हैं। ज़रूरत होने पर तत्काल ऑर्डर भी स्वीकार किया जाता है।",
    },
    {
      q: "क्या फोन पर ऑर्डर दिया जा सकता है?",
      a: "हाँ। WhatsApp पर फोटो व नाप भेजकर ऑर्डर दिया जा सकता है, या सीधे कॉल करके पूछताछ की जा सकती है।",
    },
    { q: "दुकान का पता कहाँ है?", a: hiAddress },
    { q: "क्या ऑनलाइन भुगतान स्वीकार किया जाता है?", a: "हाँ, UPI और नकद दोनों विकल्प उपलब्ध हैं।" },
  ],
};

const en: Content = {
  htmlLang: "en",
  brand: "Datta Family Business Group",
  brandSub: "Jarawandi, Tal. Etapalli",
  address: enAddress,
  hours: "Hours vary by shop — Mon-Sat 9:00 to 20:00",
  nav: {
    home: "Home",
    about: "About Us",
    services: "Services & Products",
    gallery: "Gallery",
    faq: "FAQ",
    contact: "Contact",
  },
  common: {
    call: "Call Now",
    callNow: "Call Now",
    whatsapp: "WhatsApp",
    askOnWhatsapp: "Ask on WhatsApp",
    viewServices: "View Services",
    proprietor: "Proprietor",
    language: "Language",
    openNow: "Open now",
    closedNow: "Closed now",
    todayHours: "Today",
    closedToday: "Closed today",
  },
  home: {
    title: "Datta Family Business Group | CSC Services, Bangles, Shoes, Tailoring – Jarawandi",
    description:
      "CSC online services, bangles and ladies accessories, affordable durable footwear and tailoring in Jarawandi, Tal. Etapalli — trusted service from one family.",
    keywords:
      "CSC centre Jarawandi, online forms Etapalli, bangle shop Gadchiroli, shoe shop Jarawandi, tailoring shop Etapalli, Datta Services",
    badge: "Jarawandi, Tal. Etapalli, Dist. Gadchiroli",
    h1: "CSC Centre, Bangle Store, Footwear & Tailoring in Jarawandi — Datta Family Businesses",
    intro:
      "Digital and government services, festive bangles and accessories, affordable footwear and made-to-measure tailoring — with the warm service of the Datta family.",
    heroAlt: "The Datta family shops in Jarawandi",
    features: [
      { t: "Trusted service", d: "10+ years of experience" },
      { t: "Open every day", d: "9 AM to 8 PM" },
      { t: "Affordable prices", d: "Special for villagers" },
    ],
    businessesHeading: "Our four businesses",
    businessesSub:
      "Each business is run personally by a family member — so quality and trust always stay intact.",
    testimonialsHeading: "What our customers say",
    ctaHeading: "Visit us today or give us a call",
    ctaCall: "Call 9404884450",
    ctaForm: "Fill the contact form",
    independenceDay: "Happy Independence Day! 🇮🇳",
  },
  about: {
    title: "About Us | Datta Family Business Group, Jarawandi",
    description:
      "Four shops of the Datta family in Jarawandi — CSC service centre, bangle store, shoe shop and tailoring shop. Our journey, values and the family behind them.",
    h1: "About Us",
    p1: "The Datta Family Business Group is a family venture that meets the everyday needs of Jarawandi and the surrounding villages in one place. It began with a single small shop, and today hundreds of families trust our four shops.",
    p2: "Our principle is simple — honest dealing, fair prices and service on time. Every shop is run by a family member, so customers always get direct and caring service.",
    familyHeading: "Our family, our businesses",
    valuesHeading: "Our values",
    values: [
      { t: "Honesty", d: "Clear prices, no hidden charges." },
      { t: "Quality", d: "Checked goods and neat workmanship." },
      { t: "Warmth", d: "Every customer is part of our family." },
    ],
    addressLabel: "Address",
  },
  services: {
    title: "Services & Products | CSC, Bangles, Footwear, Tailoring – Jarawandi",
    description:
      "Online and government services at Datta Services, accessories at Sara Bangle Store, footwear at Datta and Sons, and tailoring at Sara Tailoring — full list and price enquiries.",
    h1: "Services & Products",
    intro:
      "Each section below lists the direct contact number of the owner — call or ask us on WhatsApp.",
  },
  gallery: {
    title: "Photo Gallery | Datta Family Business Group, Jarawandi",
    description:
      "Photos of our CSC service centre, bangle store, shoe shop and tailoring shop — a glimpse of the goods, services and atmosphere.",
    h1: "Photo Gallery",
    intro: "A glimpse of our shops and services. Photos are updated when new stock arrives.",
    areaAlt: "Our premises in Jarawandi",
  },
  faq: {
    title: "Frequently Asked Questions | Datta Family Business Group",
    description:
      "Shop timings, CSC services, tailoring turnaround, ordering and payment options, and our address — answers to common customer questions.",
    h1: "Frequently Asked Questions",
  },
  contact: {
    title: "Contact Us | Datta Family Business Group, Jarawandi",
    description:
      "Get in touch with the Datta Family Business Group in Jarawandi, Tal. Etapalli — phone, WhatsApp, address, map and enquiry form.",
    h1: "Contact Us",
    intro:
      "Call us directly, or fill in the form below to send a WhatsApp message — we will reply as soon as possible.",
    name: "Your name",
    namePlaceholder: "e.g. Suresh Madavi",
    phone: "Mobile number",
    phonePlaceholder: "10-digit number",
    subject: "Which service is it about?",
    other: "Other enquiry",
    message: "Your message",
    messagePlaceholder: "Briefly describe what you need",
    submit: "Send on WhatsApp",
    waGreeting: "Hello",
    waName: "Name",
    waPhone: "Mobile",
    waSubject: "Subject",
    waMessage: "Message",
  },
  map: {
    heading: "Our location",
    iframeTitle: "Datta Family Business Group – map",
    openInMaps: "Open in Google Maps",
  },
  footer: {
    businessesHeading: "Our businesses",
    linksHeading: "Links",
    hoursLabel: "Hours",
    rights: "All rights reserved.",
    visitorsLabel: "Total visits:",
  },
  businesses: {
    "datta-services": {
      name: "Datta Services (CSC Service Centre)",
      tagline: "All government and digital services in the village — under one roof",
      description:
        "No bank queues, no trips to the taluka. At Datta Services, cash deposits and money transfers, online applications, certificates and government or private online services are handled quickly, accurately and reliably.",
      items: [
        "Cash deposit and money transfer (AEPS)",
        "Filling online forms and applications",
        "Government certificates and documents",
        "Aadhaar, PAN, insurance and other services",
        "Printing, scanning and photocopying",
      ],
    },
    "sara-bangdi-bhandar": {
      name: "Sara Bangle Store",
      tagline: "Beautiful bangles and delicate accessories for every festival",
      description:
        "Colourful glass and metal bangles, ear tops, attractive ladies accessories and the latest fashion items — reasonable prices, plenty of variety and friendly service.",
      items: [
        "Glass and fancy bangles",
        "Ear tops and jhumkas",
        "Ladies accessories",
        "Fashion jewellery and festive items",
        "Gifts and beauty accessories",
      ],
    },
    "datta-and-sons-shoe-shop": {
      name: "Datta and Sons Shoe Shop",
      tagline: "Durable sandals and shoes at low prices",
      description:
        "From school children to adults — sturdy sandals for daily use, stylish shoes for festivals and hard-wearing footwear for work. Quality checked, prices affordable.",
      items: [
        "Men's and women's sandals",
        "School and formal shoes",
        "Sports and casual shoes",
        "Monsoon and work footwear",
        "Kids' footwear",
      ],
    },
    "sara-tailoring-shop": {
      name: "Sara Tailoring Shop",
      tagline: "Perfect made-to-measure stitching and knitting",
      description:
        "Blouses, dresses, kurtas and children's clothes stitched to your measurements. Woollen knitting, sweaters and clothing alterations — on time and neatly finished.",
      items: [
        "Blouse, dress and kurta stitching",
        "Children's clothing",
        "Woollen knitting and sweaters",
        "Alterations and repairs",
        "Fall-pico and finishing work",
      ],
    },
  },
  testimonials: [
    {
      name: "Suresh Madavi",
      place: "Jarawandi",
      text: "I no longer have to travel to the taluka to send money. Krishna bhau gets the work done quickly and correctly.",
    },
    {
      name: "Mangala Kodape",
      place: "Bhapda",
      text: "The variety of bangles is lovely. Everything needed for a festival is available here, and the prices are affordable.",
    },
    {
      name: "Anil Atram",
      place: "Etapalli",
      text: "I bought my children's school shoes here and they lasted a whole year. Low price and good quality.",
    },
    {
      name: "Vaishali Gedam",
      place: "Jarawandi",
      text: "The blouse fits perfectly. Pournima tai always finishes the work on time.",
    },
  ],
  faqs: [
    {
      q: "What are the shop timings?",
      a: "All four of our shops are open Monday to Sunday from 9:00 AM to 8:00 PM. Timings are extended during festivals.",
    },
    {
      q: "Which services are available at the CSC centre?",
      a: "Cash deposits and money transfers, online applications and forms, government certificates, Aadhaar and PAN related services, insurance, printing and scanning — all digital services.",
    },
    {
      q: "How long does tailoring take?",
      a: "A regular blouse or dress takes 3 to 5 days. Urgent orders are accepted when needed.",
    },
    {
      q: "Can I place an order over the phone?",
      a: "Yes. You can send photos and measurements on WhatsApp, or simply call us with your enquiry.",
    },
    { q: "Where is the shop located?", a: enAddress },
    { q: "Do you accept online payments?", a: "Yes, both UPI and cash are accepted." },
  ],
};

export const translations: Record<Lang, Content> = { mr, hi, en };
