
/*const TOTAL_COUNT = 200;

export const susolvkaCoords = { lat: 60.814305, lng: 47.051773 };

export const markersData = [...Array(TOTAL_COUNT)].fill(0) // fill(0) for loose mode
  .map((__, index) => ({
    id: index,
    lat: susolvkaCoords.lat +
      0.01 * index *
      Math.sin(30 * Math.PI * index / 180) *
      Math.cos(50 * Math.PI * index / 180) + Math.sin(5 * index / 180),
    lng: susolvkaCoords.lng +
      0.01 * index *
      Math.cos(70 + 23 * Math.PI * index / 180) *
      Math.cos(50 * Math.PI * index / 180) + Math.sin(5 * index / 180),
  }));*/

//const TOTAL_COUNT = 1;

export const susolvkaCoords = { lat: 15.9129, lng: 79.7480 };

export const markersData = [
  {
    id: 0,
    lat: 15.9129,
    lng: 79.7480,
  }, {
    id: 1,
    lat: 16.9129,
    lng: 80.7480,
  }, {
    id: 2,
    lat: 14.1715428,
    lng: 77.62720279999996,
  }, {
    id: 3,
    lat: 13.5239394,
    lng: 79.9569698,
  }, {
    id: 4,
    lat: 13.5176909,
    lng: 79.9732776,
  }
];


