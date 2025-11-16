// import { useEffect, useState } from 'react'
import { useLoaderData } from "react-router";
import PlantCard from "../Components/PlantCard";

const Home = () => {
  const { plants } = useLoaderData();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-8 px-12">
        {plants.map((plant) => (
          <PlantCard key={plant?.id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default Home;
