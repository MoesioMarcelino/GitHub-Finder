import React, { useEffect, useState } from "react";
import {
  FiArchive,
  FiUsers,
  FiPlusCircle,
  FiStar,
  FiArrowRight,
} from "react-icons/fi";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import Leaflet from "leaflet";

import "leaflet/dist/leaflet.css";

import notFoundImg from "../../assets/not-found.svg";
import openStreetMap from "../../services/api/openStreetMap";

import markerIcon from "../../assets/marker.svg";

import {
  Container,
  SectionInfoContainer,
  UserImage,
  UserInfoContainer,
  UserInfoHeaderContainer,
  UserInfo,
  Nickname,
  LinkContainer,
  Username,
  Bio,
  StatusContainer,
  Status,
  SectionMapContainer,
  NotFoundImg,
} from "./styles";

interface IProps {
  image: any;
  name: string;
  bio: string;
  amount_repositories: number;
  amount_followers: number;
  amount_following: number;
  amount_stars: number;
  location: string;
  html_url: string;
  login: string;
}

interface ICoordinates {
  lat: number;
  lng: number;
}

const mapIcon = Leaflet.icon({
  iconUrl: markerIcon,
  iconAnchor: [20, 60],
  popupAnchor: [0, -65],
});

const CardBio: React.FC<IProps> = ({
  image,
  name = "-",
  bio = "-",
  amount_repositories,
  amount_followers,
  amount_following,
  amount_stars,
  location,
  html_url,
  login,
}) => {
  const [loading, setLoading] = useState(false);
  const [coordinates, setCoordinates] = useState<ICoordinates>(() => {
    const storagedStars = localStorage.getItem("@GreenmileFinder:coordinates");

    if (storagedStars) {
      return JSON.parse(storagedStars);
    }

    return {} as ICoordinates;
  });

  useEffect(() => {
    async function getCoordinates() {
      setLoading(true);
      const { data: locationData } = await openStreetMap.get<
        { lat: string; lon: string }[]
      >("", {
        params: {
          q: location || "Brazil",
        },
      });

      setCoordinates({ lat: +locationData[0].lat, lng: +locationData[0].lon });
      setLoading(false);
    }

    getCoordinates();
  }, [location]);

  useEffect(() => {
    localStorage.setItem(
      "@GreenmileFinder:coordinates",
      JSON.stringify(coordinates)
    );
  }, [coordinates]);

  return (
    <Container>
      <SectionInfoContainer>
        <UserImage src={image} />
        <UserInfoContainer>
          <UserInfoHeaderContainer>
            <UserInfo>
              <Username>{name}</Username>
              <Nickname>@{login}</Nickname>
            </UserInfo>
            <LinkContainer href={html_url} target="_blank">
              Go
              <FiArrowRight size={18} />
            </LinkContainer>
          </UserInfoHeaderContainer>
          <Bio>{bio}</Bio>
          <StatusContainer>
            <Status>
              <FiArchive size={16} />
              <span>{amount_repositories}</span>
            </Status>
            <Status>
              <FiUsers size={16} />
              <span>{amount_followers}</span>
            </Status>
            <Status>
              <FiPlusCircle size={16} />
              <span>{amount_following}</span>
            </Status>
            <Status>
              <FiStar size={16} />
              <span>{amount_stars}</span>
            </Status>
          </StatusContainer>
        </UserInfoContainer>
      </SectionInfoContainer>
      <SectionMapContainer>
        {coordinates.lat && !loading ? (
          <MapContainer
            center={[coordinates.lat, coordinates.lng]}
            zoom={location === "Brasil" ? 2 : 7}
            minZoom={location === "Brasil" ? 2 : 5}
            style={{ height: "600px", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {/* <TileLayer
              url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
            /> */}
            <Marker
              icon={mapIcon}
              position={[coordinates.lat, coordinates.lng]}
            >
              <Popup closeButton={false} minWidth={240} maxWidth={240}>
                {name} - {location}
              </Popup>
            </Marker>
          </MapContainer>
        ) : (
          <>
            <NotFoundImg src={notFoundImg} />
            <span>Location not found</span>
          </>
        )}
      </SectionMapContainer>
    </Container>
  );
};

export default CardBio;
