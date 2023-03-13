"use client";

import { FC, useRef, useState, useEffect } from "react";
import { canada } from "../../lib/map/canada";
import { Three } from "../../lib/map/three";
import { Geocoder } from "../../lib/map/geocoder";
import { useRouter } from "next/router";

import Map, { Source, NavigationControl, GeolocateControl } from "react-map-gl";

import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from "maplibre-gl";

export default function MapSection() {
  const mapRef: any = useRef();

  const places = canada.provinces.ON.cities.Ottawa.places;
  // const [three, setThree] = useState(Three(places.Carleton_University));
  const three = Three(places.Carleton_University);

  const geocoderControl = Geocoder();

  // Get shared position
  const router = useRouter();
  console.log(router.isReady, router.query);

  const [viewState, setViewState] = useState({
    zoom: router.query.zoom ? Number(router.query.zoom) : 12,
    bearing: router.query.bearing ? Number(router.query.bearing) : 0,
    pitch: router.query.pitch ? Number(router.query.pitch) : 45,
    longitude: router.query.lng ? Number(router.query.lng) : -75.69435,
    latitude: router.query.lat ? Number(router.query.lat) : 45.38435,
  });

  return (
    <section id="map" className="">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="maplibregl-map -mx-4 flex flex-wrap items-center">
            <Map
              mapLib={maplibregl}
              // {...viewState}
              initialViewState={viewState}
              // onMove={onMoveChange}
              ref={mapRef}
              onLoad={(map) => {
                if (geocoderControl) {
                  map.target.addControl(geocoderControl);
                }
                // if (three) map.target.addLayer(three);
              }}
              maxPitch={60}
              minZoom={3}
              maxBounds={[
                [-141.1, 41.5],
                [-52, 83.4],
              ]}
              mapStyle={`./assets/map/styles/satellite.json`}
              style={{ width: "100vw", height: "100vh" }}
              terrain={{ source: "terrainSource", exaggeration: 0.05 }}
            >
              <Source
                id="terrainSource"
                type="raster-dem"
                url="./assets/map/terrain/terrain.json"
                tileSize={256}
              ></Source>
              <NavigationControl position="bottom-left" visualizePitch={true} />
              <GeolocateControl position="bottom-left" />
            </Map>
          </div>
        </div>
      </div>
    </section>
  );
}
