import React, { useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

import Layout from "../../components/layout";
import ToggleSearch from "../../components/ToggleSearch";
import ListView from "../../components/ListView";

const position = [-6.2441985, 106.8029644];
const position2 = [-6.240299, 106.8009648];
const position3 = [-6.248098, 106.808964];

const Search = () => {
  const [view, setView] = useState("map");

  if (typeof window == "undefined") return null;

  return (
    <Layout>
      <ToggleSearch view={view} toggleView={view => setView(view)} />
      {view === "map" ? (
        <Map
          style={{ position: "fixed", top: 64 }}
          className="h-full w-screen left-0"
          center={position}
          zoom={15}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>Text1</Popup>
          </Marker>
          <Marker position={position2}>
            <Popup>Text2</Popup>
          </Marker>
          <Marker position={position3}>
            <Popup>Text3</Popup>
          </Marker>
        </Map>
      ) : (
        <ListView />
      )}
    </Layout>
  );
};

export default Search;