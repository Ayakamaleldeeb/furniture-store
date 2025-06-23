"use client";
import { SubCategoriesComponent } from "@/components/category/sucCategoryPage";
import { useParams } from "next/navigation";

const FurnitureItem = () => {
  const { id } = useParams();

  return <SubCategoriesComponent categoryId={id} />;
};
export default FurnitureItem;
