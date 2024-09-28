"use client";
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const profile = () => {
  const containerStyle = {
    width: "100%",
    height: "35rem",
  };
  const center = {
    lat: 35.6895, // Tokyo latitude
    lng: 139.6917, // Tokyo longitude
  };
  return (
    <div className="pt-32 px-3">
      <section className="grid md:flex justify-evenly items-center">
        <div className="mr-4 mb-14 md:mb-0 text-base lg:text-lg">
          <p className="font-bold mb-2">会社概要</p>
          <p className="mb-2">会社名：御殿場石川酒蔵株式会社</p>
          <p className="mb-2">蔵　名：御厨榮酒造（みくりやさかえしゅぞう）</p>
          <p className="mb-2">住　所：〒412-0008　静岡県御殿場市印野1388-37</p>
          <p className="mb-2">TEL/FAX</p>
          <p>MAIL</p>
        </div>
        <div className="text-base lg:text-lg">
          <p className="font-bold mb-2">Company Profile</p>
          <p className="mb-2">
            Company Name：Gotemba Ishikawa Sake Brewery Co., Ltd.
          </p>
          <p className="mb-2">Brewery Name：Mikuriya Sakae Sake Brewery</p>
          <p className="mb-2">
            Address：1388-37 Inno, Gotemba City, Shizuoka Prefecture, 412-0008
          </p>
          <p className="mb-2">TEL/FAX</p>
          <p>MAIL</p>
        </div>
      </section>

      <div className="grid place-items-center mt-20 mb-20 border-4 border-red-500">
        <LoadScript
          googleMapsApiKey="AIzaSyDq8q3YcsgGWmZOty9F5zgmceAocbBtItA" // Replace with your API key
          language="ja" // Japanese language
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
          >
            {/* Additional map features */}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default profile;