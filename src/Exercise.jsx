import React from "react";
import UserCard from "./UserCard";

function Exercise() {

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <UserCard 
          name="Dhilla"
          email="dhilla@gmail.com"
          city="Semarang" 
          address="Jl. Mawar No. 123"
          />
          <UserCard
           name="John Doe" 
           email="john@gmail.com"
           city="Semarang" 
           address="Jl. Melati No. 456"
           />
          <UserCard 
          name="Jane Smith" 
          email="jane@gmail.com" 
          city="Jakarta"
          address="Jl. Anggrek No. 789"
          />
        </div>
      </div>
    </>
  );
}

export default Exercise;