export type Place = {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  rating: number;
  description?: string;
};
  
export type Trip = {
  id: string;
  name: string;
  center_latitude: number;
  center_longitude: number;
  zoom_level?: number | 13; 
  places: Place[];
};

export type SearchProgress = {
  query: string;
  done: boolean;
};

export type AgentState = {
  trips: Trip[];
  selected_trip_id: string | null;
  search_progress?: SearchProgress[];
};

export const defaultTrips: Trip[] = [
  {
    id: "1",
    name: "Himalayan Adventure in Manali",
    center_latitude: 32.2396,
    center_longitude: 77.1887,
    places: [
      {
        id: "1",
        name: "Rohtang Pass",
        address: "Leh-Manali Highway, Himachal Pradesh",
        description: "A high mountain pass offering stunning views and adventure activities.",
        latitude: 32.3667,
        longitude: 77.2488,
        rating: 4.8,
      },
      {
        id: "2",
        name: "Solang Valley",
        address: "Manali, Himachal Pradesh",
        description: "A picturesque valley known for adventure sports and skiing.",
        latitude: 32.3166,
        longitude: 77.1666,
        rating: 4.7,
      },
      {
        id: "3",
        name: "Hadimba Temple",
        address: "Old Manali, Himachal Pradesh",
        description: "An ancient wooden temple dedicated to Hidimba Devi.",
        latitude: 32.2433,
        longitude: 77.1887,
        rating: 4.6,
      },
    ],
    zoom_level: 14,
  },
  {
    id: "2",
    name: "Scenic Beauty of Darjeeling",
    center_latitude: 27.0410,
    center_longitude: 88.2638,
    places: [
      {
        id: "1",
        name: "Tiger Hill",
        address: "Darjeeling, West Bengal",
        description: "Famous for stunning sunrise views over Mount Kanchenjunga.",
        latitude: 27.0264,
        longitude: 88.2646,
        rating: 4.9,
      },
      {
        id: "2",
        name: "Batasia Loop",
        address: "Ghoom, Darjeeling",
        description: "A beautiful railway loop with a panoramic view of the mountains.",
        latitude: 27.0183,
        longitude: 88.2621,
        rating: 4.7,
      },
      {
        id: "3",
        name: "Darjeeling Himalayan Railway",
        address: "Darjeeling, West Bengal",
        description: "A UNESCO World Heritage Site known for toy train rides.",
        latitude: 27.0430,
        longitude: 88.2636,
        rating: 4.8,
      },
    ],
    zoom_level: 13,
  },
  {
    id: "3",
    name: "Adventure Trip to Ladakh",
    center_latitude: 34.1526,
    center_longitude: 77.5770,
    places: [
      {
        id: "1",
        name: "Pangong Lake",
        address: "Ladakh",
        description: "A stunning high-altitude lake with ever-changing colors.",
        latitude: 33.7490,
        longitude: 78.4750,
        rating: 4.9,
      },
      {
        id: "2",
        name: "Magnetic Hill",
        address: "Leh-Kargil Highway, Ladakh",
        description: "A gravity-defying hill where vehicles appear to move uphill on their own.",
        latitude: 34.1696,
        longitude: 77.5848,
        rating: 4.6,
      },
      {
        id: "3",
        name: "Shanti Stupa",
        address: "Leh, Ladakh",
        description: "A white-domed stupa offering panoramic views of Leh.",
        latitude: 34.1640,
        longitude: 77.5850,
        rating: 4.8,
      },
    ],
    zoom_level: 12,
  },
];
