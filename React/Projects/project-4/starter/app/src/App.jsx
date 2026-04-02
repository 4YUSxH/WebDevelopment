import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 
  const [filteredData, setFilteredData] = useState(null) // For Searching
  const [selectedBtn, setSelectedBtn] = useState("all") // For Selecting

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);

      try {
        const res = await fetch(BASE_URL);
        const resJson = await res.json();

        setData(resJson);
        setFilteredData(resJson)
        setLoading(false);
        console.log(resJson);
      } catch (err) {
        setError("Unable to fetch data");
      }
    };

    fetchFoodData();
  }, []);

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  // Searching
  const searchFood = (evt) => {
    const searchValue = evt.target.value

    if(searchValue === "") setFilteredData(null)

    const filter = data?.filter((value) => value.name.toLowerCase().includes(searchValue.toLowerCase()))
    setFilteredData(filter)
  }

  // Selecting
  const selectFood = (type) => {
    if(type === "all"){
      setFilteredData(data)
      setSelectedBtn("all")
      return 
    }

    const filter = data?.filter((value) => value.type.toLowerCase().includes(type.toLowerCase()))
    setFilteredData(filter)
    setSelectedBtn(type)
  }

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.svg" />
          </div>

          <div className="search">
            <input onChange={searchFood} type="text" placeholder="Search food" />
          </div>
        </TopContainer>

        <FilterContainer>
          <Button onClick={() => selectFood("all")}>All </Button>
          <Button onClick={() => selectFood("breakfast")}>Breakfast </Button>
          <Button onClick={() => selectFood("lunch")}>Lunch </Button>
          <Button onClick={() => selectFood("dinner")}>Dinner </Button>
        </FilterContainer>

      </Container>
        <SearchResult data={filteredData} />
    </>
  );
};

export default App;

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .search {
    input {
      background-color: transparent;
      color: whitesmoke;
      border: 1px solid red;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: whitesmoke;
  cursor: pointer;
  &:hover{
    background-color: #ea6161;
  }
`;
