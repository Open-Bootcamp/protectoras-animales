import { useState, useEffect, createContext } from "react";

export const CenterContext = createContext();

export default function CenterProvider({ children }) {
  const initFilters = { centerName: "", radius: "100" };
  const [filters, setFilters] = useState(initFilters);
  const [data, setData] = useState([]);
  const [userLocation, setUserLocation] = useState([0, 0]);

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setUserLocation([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  useEffect(() => {
    (async () => {
      try {
        await fetch(
          `http://localhost:3333/centers/filterBy?centerName=${filters.centerName}&radius=${filters.radius}&coordinates=${userLocation}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            setData(res.results);
          });
      } catch (e) {
        console.log(e);
      }
    })();
  }, [filters]);

  return (
    <CenterContext.Provider
      value={{ data, userLocation, filters, handleChange }}
    >
      {children}
    </CenterContext.Provider>
  );
}
