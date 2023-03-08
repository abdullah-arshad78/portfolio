import React from "react";
import Map, { Marker } from "react-map-gl";

import useDarkMode from "../hooks/useDarkMode";
import "mapbox-gl/dist/mapbox-gl.css";

const MyMap = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={`md:w-[80vw] w-full ${
        isDarkMode ? "drop-shadow-dark" : "shadow"
      } rounded h-[30rem]`}
    >
      <Map
        initialViewState={{
          longitude: -8.65,
          latitude: 52.66,
          zoom: 10,
        }}
        mapboxAccessToken="pk.eyJ1IjoiYWJkdWxsYWgtYXJzaGFkNzgiLCJhIjoiY2tzYXE1b3R6MGd0cTJubjMwcWRmMjBudCJ9.KPBHeTfvtKKbWClKq32P4g"
        style={{ width: "100%", height: "100%" }}
        mapStyle={
          isDarkMode
            ? "mapbox://styles/mapbox/dark-v11"
            : "mapbox://styles/mapbox/streets-v12"
        }
      >
        <Marker longitude={-8.65} latitude={52.66}></Marker>
      </Map>
    </div>
  );
};

// mapboxgl.accessToken =
//   "pk.eyJ1IjoiYWJkdWxsYWgtYXJzaGFkNzgiLCJhIjoiY2tzYXE1b3R6MGd0cTJubjMwcWRmMjBudCJ9.KPBHeTfvtKKbWClKq32P4g";

// const Map = () => {
//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const [lng, setLng] = useState(-8.65);
//   const [lat, setLat] = useState(52.66);
//   const [zoom, setZoom] = useState(9);

//   const { isDarkMode } = useDarkMode();

//   useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: "mapbox://styles/mapbox/streets-v12",
//       center: [lng, lat],
//       zoom: zoom,
//     });
//     // const marker = new mapboxgl.Marker().setLngLat([-8.65, 52.66]).addTo(map);
//   });

//   useEffect(() => {
//     if (!map.current) return; // wait for map to initialize
//     map.current.on("move", () => {
//       setLng(map.current.getCenter().lng.toFixed(4));
//       setLat(map.current.getCenter().lat.toFixed(4));
//       setZoom(map.current.getZoom().toFixed(2));
//     });
//   });

//   useEffect(() => {
//     map.current.setStyle(
//       isDarkMode
//         ? "mapbox://styles/mapbox/dark-v11"
//         : "mapbox://styles/mapbox/streets-v12"
//     );
//   }, [isDarkMode]);
//   return (
//     <div
//       className={`md:w-[80vw] w-full ${
//         isDarkMode ? "drop-shadow-dark" : "shadow"
//       } rounded mt-[3rem]`}
//     >
//       <div ref={mapContainer} className="h-[400px] w-full rounded" />
//     </div>
//   );
// };

export default MyMap;
