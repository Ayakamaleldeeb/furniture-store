"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Axios from "@/helpers/Axios";

const FurnitureItem = () => {
  const { id } = useParams();
  const [furniture, setFurniture] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchFurniture = async () => {
        try {
          const { data } = await Axios.get(`/api/Furniture/${id}`);
          setFurniture(data);
        } catch (error) {
          console.error("Error fetching furniture item:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchFurniture();
    }
  }, [id]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!furniture) {
    return <div className="text-center mt-10">Furniture item not found</div>;
  }

  return (
    <div className="container h-screen mx-auto p-4">
      <div
        className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4"
        role="alert"
      >
        <p className="font-bold">Page Under Development </p>
        <p>
          This page is currently under development. Some features may not be
          available.
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* <img
          src={furniture.pictureUrl}
          alt={furniture.name}
          className="w-full h-auto object-cover"
        /> */}
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4"> {furniture?.description}</h1>
          <p className="text-gray-700 mb-4">{furniture?.name}</p>
          <p className="text-xl font-bold mb-4">${furniture?.price}</p>
        </div>
      </div>
    </div>
  );
};

export default FurnitureItem;
