export const SALON_NAME = process.env.NEXT_PUBLIC_SALON_NAME || "Bella Salon";
export const SALON_PHONE = process.env.NEXT_PUBLIC_SALON_PHONE || "+36 1 234 5678";
export const SALON_EMAIL = "info@bellasalon.hu";
export const SALON_ADDRESS = process.env.NEXT_PUBLIC_SALON_ADDRESS || "1051 Budapest, Váci utca 12.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bellasalon.hu";

export const OPENING_HOURS = [
  { day: "Hétfő", hours: "09:00 - 19:00" },
  { day: "Kedd", hours: "09:00 - 19:00" },
  { day: "Szerda", hours: "09:00 - 19:00" },
  { day: "Csütörtök", hours: "09:00 - 20:00" },
  { day: "Péntek", hours: "09:00 - 20:00" },
  { day: "Szombat", hours: "09:00 - 16:00" },
  { day: "Vasárnap", hours: "Zárva" },
];

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/bellasalon",
  instagram: "https://instagram.com/bellasalon",
  tiktok: "https://tiktok.com/@bellasalon",
};

export const NAV_LINKS = [
  { href: "/", label: "Főoldal" },
  { href: "/szolgaltatasok", label: "Szolgáltatások" },
  { href: "/galeria", label: "Galéria" },
  { href: "/rolunk", label: "Rólunk" },
  { href: "/kapcsolat", label: "Kapcsolat" },
  { href: "/foglaljas", label: "Foglalás", highlight: true },
];

export const SERVICES = [
  {
    id: "hajvagas",
    category: "Hajvágás",
    icon: "Scissors",
    items: [
      { name: "Női hajvágás", price: "8 500 Ft", duration: "45 perc", description: "Konzultáció, hajmosás, vágás és szárítás" },
      { name: "Frufru igazítás", price: "2 500 Ft", duration: "15 perc", description: "Gyors frufru formázás" },
      { name: "Gyermek hajvágás", price: "5 000 Ft", duration: "30 perc", description: "14 éves kor alatt" },
      { name: "Száraz vágás", price: "7 000 Ft", duration: "30 perc", description: "Vágás mosás nélkül" },
    ],
  },
  {
    id: "festes",
    category: "Festés & Színezés",
    icon: "Palette",
    items: [
      { name: "Teljes festés", price: "15 000 Ft-tól", duration: "120 perc", description: "Komplett hajfestés a kívánt árnyalatban" },
      { name: "Melírozás", price: "18 000 Ft-tól", duration: "150 perc", description: "Fóliás vagy sapkás melír" },
      { name: "Balayage", price: "25 000 Ft-tól", duration: "180 perc", description: "Természetes, napszítta hatás" },
      { name: "Ombre / Sombre", price: "22 000 Ft-tól", duration: "150 perc", description: "Fokozatos színátmenet" },
      { name: "Tőfestés", price: "10 000 Ft-tól", duration: "90 perc", description: "Kinőtt hajszín felfrissítése" },
    ],
  },
  {
    id: "kezelesek",
    category: "Kezelések",
    icon: "Sparkles",
    items: [
      { name: "Olaplex kezelés", price: "8 000 Ft", duration: "45 perc", description: "Mély hajszerkezet-javító kezelés" },
      { name: "Keratin kezelés", price: "25 000 Ft-tól", duration: "120 perc", description: "Tartós simítás és regenerálás" },
      { name: "Botox hajkezelés", price: "12 000 Ft", duration: "60 perc", description: "Intenzív hidratáló és erősítő kezelés" },
      { name: "Fejbőr kezelés", price: "6 000 Ft", duration: "30 perc", description: "Tisztító és tápláló fejbőr terápia" },
    ],
  },
  {
    id: "styling",
    category: "Styling & Formázás",
    icon: "Wind",
    items: [
      { name: "Berakás / Lokni", price: "6 000 Ft-tól", duration: "45 perc", description: "Vasalás vagy göndörítés" },
      { name: "Alkalmi frizura", price: "12 000 Ft-tól", duration: "60 perc", description: "Különleges alkalmakra" },
      { name: "Hajszárítás & Styling", price: "4 500 Ft", duration: "30 perc", description: "Professzionális szárítás formázással" },
    ],
  },
  {
    id: "eskuvoi",
    category: "Esküvői szolgáltatások",
    icon: "Heart",
    items: [
      { name: "Menyasszonyi frizura", price: "30 000 Ft-tól", duration: "90 perc", description: "Próba + esküvő napi frizura" },
      { name: "Menyasszonyi próba", price: "10 000 Ft", duration: "60 perc", description: "Frizura próba konzultációval" },
      { name: "Koszorúslány frizura", price: "15 000 Ft-tól", duration: "60 perc", description: "Elegáns alkalmi frizura" },
    ],
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Kovács Anna",
    role: "Vezető fodrász & Tulajdonos",
    bio: "15 éves tapasztalattal rendelkező fodrász, akinek szívügye a modern színtechnikák.",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=500&fit=crop",
    specialties: ["Balayage", "Festés", "Esküvői frizurák"],
  },
  {
    name: "Nagy Eszter",
    role: "Senior fodrász",
    bio: "Kreativitása és precizitása révén minden vendég álomfrizurát kap.",
    image: "https://images.unsplash.com/photo-1595959183082-7b570b7e1e6b?w=400&h=500&fit=crop",
    specialties: ["Hajvágás", "Styling", "Kezelések"],
  },
  {
    name: "Szabó Laura",
    role: "Colorista",
    bio: "Nemzetközi tapasztalattal rendelkező színszakértő, a trendek úttörője.",
    image: "https://images.unsplash.com/photo-1614644147724-2d4785d69962?w=400&h=500&fit=crop",
    specialties: ["Melírozás", "Ombre", "Fantasy színek"],
  },
  {
    name: "Tóth Réka",
    role: "Junior fodrász",
    bio: "Fiatal, lelkes tehetség, aki mindig naprakész a legújabb trendekkel.",
    image: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=400&h=500&fit=crop",
    specialties: ["Hajvágás", "Szárítás", "Berakás"],
  },
];

export const TESTIMONIALS = [
  {
    name: "Molnár Katalin",
    text: "Évek óta a Bella Salon a kedvenc fodrászatom. Anna csodálatos munkát végez a hajammal, és mindig kényeztető az élmény!",
    rating: 5,
    service: "Balayage",
  },
  {
    name: "Horváth Zsuzsa",
    text: "Az esküvői frizurám tökéletes volt! A próba alapos volt, és a nagy napon minden úgy sikerült, ahogy álmodtam.",
    rating: 5,
    service: "Menyasszonyi frizura",
  },
  {
    name: "Kiss Petra",
    text: "Az Olaplex kezelés után a hajam teljesen megújult. Selymes és fényes, mint még soha! Nagyon ajánlom.",
    rating: 5,
    service: "Olaplex kezelés",
  },
  {
    name: "Varga Dóra",
    text: "Barátságos légkör, profi csapat. Mindig pontosak és figyelnek a részletekre. A legjobb szalon Budapesten!",
    rating: 5,
    service: "Női hajvágás",
  },
  {
    name: "Fehér Anita",
    text: "Laura fantasztikus melírt készített nekem. Természetes, mégis feltűnő – pont, amit kértem!",
    rating: 5,
    service: "Melírozás",
  },
];

export const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=800&fit=crop", alt: "Szalon belső tér", category: "Szalon" },
  { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=800&fit=crop", alt: "Balayage hajfestés", category: "Festés" },
  { src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=400&fit=crop", alt: "Szőke melír", category: "Festés" },
  { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=800&fit=crop", alt: "Elegáns frizura", category: "Styling" },
  { src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=400&fit=crop", alt: "Hajvágás munka közben", category: "Hajvágás" },
  { src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&h=800&fit=crop", alt: "Hajápolás", category: "Kezelések" },
  { src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&h=400&fit=crop", alt: "Szalon munkahely", category: "Szalon" },
  { src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&h=800&fit=crop", alt: "Gyönyörű hajszín", category: "Festés" },
  { src: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=600&h=400&fit=crop", alt: "Esküvői frizura", category: "Esküvői" },
  { src: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600&h=800&fit=crop", alt: "Fodrász munka közben", category: "Hajvágás" },
  { src: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&h=400&fit=crop", alt: "Hullámos haj", category: "Styling" },
  { src: "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?w=600&h=800&fit=crop", alt: "Hajformázás", category: "Styling" },
];

export const DEPOSIT_AMOUNT = 3000; // Ft
export const DEPOSIT_AMOUNT_STRIPE = 300000; // fillér (Stripe centben/fillérben számol)
