"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Axios from "@/helpers/Axios";
import { motion } from "framer-motion";
// import { Package2, Tag, Battery as Category, Building2 } from "lucide-react";
import { Package2,  Battery as Category, Building2 } from "lucide-react";

// import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Group } from "three";
import { Minus, Plus } from 'lucide-react';
import usePostAddCart from "@/use-apis/cart/usePostAddCart";
import toast from "react-hot-toast";
const FurnitureItem = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [model, setModel] = useState<Group | null>(null);
  const [modelError, setModelError] = useState<string | null>(null);
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };
  const {mutate  }=usePostAddCart()
  const onSubmit = () => {
    // console.log("count", count);
    if (count === 0) {
      toast.error("Please select a quantity");
      return;
    }
    mutate({
      furnitureId: id,
      quantity: count,
    
    },{
      onSuccess: () => {
        toast.success("Item added to cart");
      }
    })
    // Add your logic to add the item to the cart here

  };
  // console.log(data)
  useEffect(() => {
    if (!id) return;

    const fetchFurniture = async () => {
      try {
        const { data } = await Axios.get(`/api/Furniture/${id}`);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching furniture item:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFurniture();
  }, [id]);
  // const x= "https://web-api.ikea.com/dimma/assets/1.2/10572824/LPT_S01_NV01/rqp3/glb_draco/6fb60eab6ae8161613d3360fe0c7ca97-10572824_LPT_S01_NV01_RQP3_4.0.glb"
  //   useEffect(() => {
  //     if (!product) return;
  //   if (product.furnitureModel) {
  //     const loader = new GLTFLoader();
  //     loader.load(
  //       product?.furnitureModel,
  //       (gltf) => {
  //         setModel(gltf.scene);
  //       },
  //       undefined,
  //       (error) => {
  //         console.error("Error loading GLB model:", error);
  //       }
  //     );
  //   } else {
  //     console.error("Invalid furniture model URL:", product?.furnitureModel);
  //   }
  // }, [product?.furnitureModel, product]);
  useEffect(() => {
    if (!product?.furnitureModel) return;

    const loader = new GLTFLoader();
    loader.load(
      product.furnitureModel,
      (gltf) => {
        setModel(gltf.scene);
      },
      undefined,
      (error) => {
        console.error("Error loading GLB model:", error);
        setModelError("Failed to load 3D model.");
      }
    );
  }, [product?.furnitureModel]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center mt-10">Furniture item not found</div>;
  }

  return (
    (!!product &&(
      <div className="min-h-screen bg-background p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square rounded-lg overflow-hidden bg-muted"
          >
            {product?.pictureUrl ? (
              <div className="relative w-full h-full">
                {/* <img
                  src={product?.pictureUrl}
                  alt={product?.name || "Product Image"}
                  // fill
                  className="object-cover bg-slate-100 h-full rounded-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  // priority
                /> */}
                {modelError ? (
            <div className="text-center text-red-500">{modelError}</div>
          ) : (
            <Canvas className="w-full h-96 rounded-xl shadow-lg">
              <ambientLight intensity={0.5} />
              <directionalLight position={[2, 2, 2]} />
              <OrbitControls />
              {model && <primitive object={model} scale={0.01} />}
            </Canvas>
          )}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <Package2 className="w-20 h-20 text-muted-foreground" />
              </div>
            )}
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl font-bold mb-2">{product?.name || "Unnamed Product"}</h1>
              <p className="text-2xl font-semibold text-primary">
                ${product?.price.toFixed(2)}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building2 className="w-5 h-5" />
                <span>{product?.brand?.name || "Unknown Brand"}</span>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground">
                <Category className="w-5 h-5" />
                <span>{product?.category?.name || "Uncategorized"}</span>
              </div>

              {/* {product?.furnitureModel && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Tag className="w-5 h-5" />
                  <span>Model: {product?.furnitureModel}</span>
                </div>
              )} */}
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="text-muted-foreground">
                {product?.description || "No description available"}
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-2">
      <motion.button
        className="h-8 w-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
        onClick={handleDecrement}
      >
        <Minus className="h-4 w-4" />
      </motion.button>
      <span className="text-lg font-semibold">{count}</span>
      <motion.button
        className="h-8 w-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
        onClick={handleIncrement}
      >
        <Plus className="h-4 w-4" />
      </motion.button>
    </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onSubmit}
              className=" md:w-auto px-8 py-3 bg-black text-white rounded-lg font-medium hover:opacity-80 transition-colors"
            >
              Add to Cart
            </motion.button>
            
          </motion.div>
        </div>
      </motion.div>
    </div>
    ))
  );
};
export default FurnitureItem;