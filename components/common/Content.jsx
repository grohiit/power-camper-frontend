import {
  AirplaneIcon,
  BagIcon,
  BinocularsIcon,
  BonfireIcon,
  BulbIcon,
  CameraIcon,
  CapsIcon,
  Cloud,
  CloudIcon,
  CloudsIcon,
  CompassIcon,
  DogIcon,
  FireIcon,
  FlashlightIcon,
  ForestIcon,
  MapIcon,
  PawIcon,
  PetsAmenityIcon,
  PocketKnifeIcon,
  RVTrailerIcon,
  ShoesIcon,
  ShowerGreenAmenityIcon,
  ShowerIcon,
  StarIcon,
  SunglassesIcon,
  SunIcon,
  SwimmingIcon,
  TicketIcon,
  TreeIcon,
} from "./Icons";

export const activitiesData = [
  {
    icon: <PawIcon />,
    title: "Quis quam porta ornare fermentum lectus tincidunt.",
  },
  {
    icon: <SwimmingIcon />,
    title: "Rm is morbi iaculiscommodo senectus quam sed massa.",
  },
  {
    icon: <FireIcon />,
    title: "Quis quam porta ornare fermentum lectus tincidunt.",
  },
  {
    icon: <Cloud />,
    title: "Ultrices amet purus velit.",
  },
  // {
  //   icon: <CapIcon />,
  //   title: "Ultrices amet purus velit nunc lectus",
  // },
];
export const rulesData = [
  {
    subtitle: "12 days",
    iconCondition: false,
    title: "Max. Length of Stayx",
  },
  {
    subtitle: "8",
    iconCondition: false,
    title: "Max. People per Site",
  },
  {
    subtitle: "2",
    iconCondition: false,
    title: "Max. Vehicles per Site",
  },
  {
    subtitle: "",
    iconCondition: true,
    title: "RV/Trailers Allowed?",
  },
  {
    subtitle: "40ft",
    iconCondition: false,
    title: "RV/Trailer Max Length",
  },
  {
    subtitle: "",
    iconCondition: false,
    title: "Group Camping Allowed",
  },
  {
    subtitle: "",
    iconCondition: true,
    title: "Pets Allowed?",
  },
  {
    subtitle: "Only in designated fire rings",
    iconCondition: false,
    title: "Fires Allowed?",
  },
];
export const costData = [
  {
    title: "Site Type",
    subtitle: "Nightly Fee",
  },
  {
    title: "Site w/ Electrical Hook-up",
    subtitle: "$31",
  },
  {
    title: "Site w/ Electrical Hook-up",
    subtitle: "$26",
  },
  {
    title: "Group Site",
    subtitle: "$50",
  },
  {
    title: "Walk-in Sites",
    subtitle: "$22",
  },
];

export const weatherData = [
  {
    icon: <BulbIcon />,
    title: "Sunday",
    date: "03/07/2022",
    degree: "70°",
  },
  {
    icon: <CloudsIcon />,
    title: "Monday",
    date: "04/07/2022",
    degree: "70°",
  },
  {
    icon: <BulbIcon />,
    title: "Tuesday",
    date: "05/07/2022",
    degree: "70°",
  },
  {
    icon: <CloudsIcon />,
    title: "Wednesday",
    date: "06/07/2022",
    degree: "70°",
  },
  {
    icon: <BulbIcon />,
    title: "Thuresday",
    date: "07/07/2022",
    degree: "70°",
  },

  {
    icon: <CloudsIcon />,
    title: "Friday",
    date: "08/07/2022",
    degree: "70°",
  },
  {
    icon: <BulbIcon />,
    title: "Saturday",
    date: "09/07/2022",
    degree: "70°",
  },
];

export const showImg = [
  {
    image: "/img/png/slider/sliderImg1.png",
  },
  {
    image: "/img/png/slider/sliderImg2.png",
  },
  {
    image: "/img/png/slider/sliderImg3.png",
  },
  {
    image: "/img/png/slider/sliderImg1.png",
  },
  {
    image: "/img/png/slider/sliderImg2.png",
  },
  {
    image: "/img/png/slider/sliderImg3.png",
  },
];

export const amenitiesData = [
  {
    icon: <RVTrailerIcon />,
    title: "RV/Trailers",
    isActive: true,
  },
  {
    icon: <FlashlightIcon />,
    title: "Hookups",
    isActive: true,
  },
  {
    icon: <CameraIcon />,
    title: "Pull Through Spots",
    isActive: true,
  },
  {
    icon: <PetsAmenityIcon />,
    title: "Pet Friendly",
    isActive: true,
  },
  {
    icon: <SunIcon />,
    title: "ADA Sites",
    isActive: true,
  },
  {
    icon: <ShowerGreenAmenityIcon />,
    title: "Showers",
    isActive: true,
  },
];
export const amenitiesSecondData = [
  {
    icon: <CapsIcon />,
    title: "caps",
    isActive: true,
  },
  {
    icon: <CompassIcon />,
    title: "compass",
    isActive: true,
  },
  {
    icon: <BonfireIcon />,
    title: "bonfire",
    isActive: true,
  },
  {
    icon: <SunglassesIcon />,
    title: "sunglasses",
    isActive: true,
  },
  {
    icon: <MapIcon />,
    title: "map",
    isActive: true,
  },
  {
    icon: <TicketIcon />,
    title: "ticket",
    isActive: true,
  },
  {
    icon: <AirplaneIcon />,
    title: "airplane",
    isActive: true,
  },
  {
    icon: <BagIcon />,
    title: "bag",
    isActive: true,
  },
  {
    icon: <ForestIcon />,
    title: "forest",
    isActive: true,
  },
  {
    icon: <ShoesIcon />,
    title: "shoes",
    isActive: true,
  },
  {
    icon: <CloudIcon />,
    title: "cloud",
    isActive: true,
  },
  {
    icon: <TreeIcon />,
    title: "tree",
    isActive: true,
  },
  {
    icon: <BinocularsIcon />,
    title: "binoculars",
    isActive: true,
  },
  {
    icon: <PocketKnifeIcon />,
    title: "pocket Knife",
    isActive: true,
  },
];

export const RatingSummaryData = [
  {
    star: [
      {
        starValue: <StarIcon />,
        starActive: "star_active",
      },
      { starValue: <StarIcon />, starActive: "star_active" },
      { starValue: <StarIcon />, starActive: "star_active" },
      { starValue: <StarIcon />, starActive: "star_active" },
      { starValue: <StarIcon />, starActive: " " },
    ],
  },
];

export const starData = [
  {
    imageUrl: <StarIcon />,
  },
  {
    imageUrl: <StarIcon />,
  },
  {
    imageUrl: <StarIcon />,
  },
  {
    imageUrl: <StarIcon />,
  },
  {
    imageUrl: <StarIcon />,
  },
];
export const heroData = {
  heading: " Platte River Campground",
  title: " Among Top 50 campgrounds in California",
  address: `5685 Lake Michigan Rd, Honor, MI 49640, United States`,
  contact: "+1 231 326 5134",
  email: " www.example.com",
  star: [
    { starValue: <StarIcon />, starActive: "star_active" },
    { starValue: <StarIcon />, starActive: "star_active" },
    { starValue: <StarIcon />, starActive: "star_active" },
    { starValue: <StarIcon />, starActive: "star_active" },
    { starValue: <StarIcon />, starActive: "star_active" },
  ],
  circleBoxText: [
    { title: "174", subtitle: "Total Sites" },
    { title: "All year", subtitle: "Season" },
    { title: "45", subtitle: "Nightly cost" },
  ],
  circleBoxIcon: [
    { icon: <DogIcon />, isActive: false },
    { icon: <ShowerIcon />, isActive: false },
    { icon: "RV/Trailers", isActive: false },
  ],
};

// export const data = {
//   list: [
//     "Doheny State Beach is Californias first state beach, located in Dana Point, where HWY 1 and I-5 meet",
//     "It features over a mile of pristine sand and attracts thousands of surfers and day-use visitors each year",
//     "he Doheny Campground is open year-round and offers 118 campsite locations for RVs, Trailers, and other vehicles up to 35 feet in length, as well as tent camping",
//     "All campsites have a maximum capacity of 8 people, except there is 1 group site available that support up to 40 people.",
//     "The campground does not offer any hookup capabilities, only a waste dump for RVs - so plan your trip accordingly!",
//   ],
// };

// export const first = {
//   value: `<ul> Doheny State Beach is Californias first state beach, located in Dana Point, where HWY 1 and I-5 meet. It features over a mile of pristine sand and attracts thousands of surfers and day-use visitors each year. The Doheny Campground is open year-round and offers 118 campsite locations for RVs, Trailers, and other vehicles up to 35 feet in length, as well as tent camping. All campsites have a maximum capacity of 8 people, except there is 1 group site available that support up to 40 people.The campground does not offer any hookup capabilities, only a waste dump for RVs - so plan your trip accordingly! Pets are allowed on a 6" leash. **Some bold text** * Bullet item 1 * Bullet item 2 * Bullet item 3 Some more text about the campground. 1. List item 1 2. List item 2 3. List item 3</ul>`,
// };
