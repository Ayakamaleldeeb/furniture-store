"use client";

export function ProductCard({ product, hasOffer }: any) {
  return (
    <div
      className={`relative   ${
        hasOffer ? "border-red-600 border-2 rounded-2xl shadow-sm" : ""
      }   bg-white text-gray-900  overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105 hover:rounded-xl`}
      onClick={() => (window.location.href = `/furniture/${product.id}`)}
    >
      {hasOffer && (
        <div className="absolute top-0 left-0 bg-red-600 text-white py-1 px-10 transform -rotate-45 translate-x-[-32%] translate-y-[10%] z-10 text-lg font-bold">
          SALE
        </div>
      )}

      <div className="aspect-square overflow-hidden">
        <img
          src={product.pictureUrl}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-4 text-center gap-1">
        <h3 className="font-medium text-lg">{product.description}</h3>
        <span className="text-sm text-gray-500 ">{product.name}</span>
        <div className="mt-2 flex flex-col items-center  ">
          <span className="text-xl font-bold">${product.price}</span>
          {hasOffer && product.price && (
            <span className="text-sm text-gray-500 line-through">
              ${product.price}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}







// "use client";
// import { useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

// export function ProductCard({ product, hasOffer }: any) {
//   const [model, setModel] = useState(null);

//   useEffect(() => {
//     const loader = new FBXLoader();
//     loader.load("/12.fbx", (object) => {
//       setModel(object);
//     }, undefined, (error) => {
//       console.error("Error loading FBX model:", error);
//     });
//   }, []);
//   return (
//     <div
//       className={`relative ${
//         hasOffer ? "border-red-600 border-2 rounded-2xl shadow-sm" : ""
//       } bg-white text-gray-900 overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105 hover:rounded-xl`}
//       onClick={() => (window.location.href = `/furniture/${product.id}`)}
//     >
//       {hasOffer && (
//         <div className="absolute top-0 left-0 bg-red-600 text-white py-1 px-10 transform -rotate-45 translate-x-[-32%] translate-y-[10%] z-10 text-lg font-bold">
//           SALE
//         </div>
//       )}

//       <div className="aspect-square overflow-hidden">
//         <Canvas className="w-full h-96 rounded-xl shadow-lg">
//           <ambientLight intensity={0.5} />
//           <directionalLight position={[2, 2, 2]} />
//           <OrbitControls />
//           {model && <primitive object={model} scale={0.01} />}
//         </Canvas>
//       </div>

//       <div className="p-4 text-center gap-1">
//         <h3 className="font-medium text-lg">{product.description}</h3>
//         <span className="text-sm text-gray-500">{product.name}</span>
//         <div className="mt-2 flex flex-col items-center">
//           <span className="text-xl font-bold">${product.price}</span>
//           {hasOffer && product.price && (
//             <span className="text-sm text-gray-500 line-through">
//               ${product.price}
//             </span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }











// "use client";
// import { useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { Group } from "three";

// export function ProductCard({ product, hasOffer }: any) {
//   const [model, setModel] = useState<Group | null>(null);

//   useEffect(() => {
//     if (product.pictureUrl) {
//       const loader = new GLTFLoader();
//       loader.load(
//         product.pictureUrl,
//         (gltf) => {
//           setModel(gltf.scene);
//         },
//         undefined,
//         (error) => {
//           console.error("Error loading GLB model:", error);
//         }
//       );
//     } else {
//       console.error("Invalid furniture model URL:", product.pictureUrl);
//     }
//   }, [product.pictureUrl]);

//   return (
//     <div
//       className={`relative ${
//         hasOffer ? "border-red-600 border-2 rounded-2xl shadow-sm" : ""
//       } bg-white text-gray-900 overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105 hover:rounded-xl`}
//       onClick={() => (window.location.href = `/furniture/${product.id}`)}
//     >
//       {hasOffer && (
//         <div className="absolute top-0 left-0 bg-red-600 text-white py-1 px-10 transform -rotate-45 translate-x-[-32%] translate-y-[10%] z-10 text-lg font-bold">
//           SALE
//         </div>
//       )}

//       <div className="aspect-square overflow-hidden">
//         <Canvas className="w-full h-96 rounded-xl shadow-lg">
//           <ambientLight intensity={0.5} />
//           <directionalLight position={[2, 2, 2]} />
//           <OrbitControls />
//           {model && <primitive object={model} scale={0.01} />}
//         </Canvas>
//       </div>

//       <div className="p-4 text-center gap-1">
//         <h3 className="font-medium text-lg">{product.description}</h3>
//         <span className="text-sm text-gray-500">{product.name}</span>
//         <div className="mt-2 flex flex-col items-center">
//           <span className="text-xl font-bold">${product.price}</span>
//           {hasOffer && product.price && (
//             <span className="text-sm text-gray-500 line-through">
//               ${product.price}
//             </span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }




// "use client";
// import { useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
// import { Group } from "three";

// export function ProductCard({ product, hasOffer }: any) {
//   const [model, setModel] = useState<Group | null>(null);

//   useEffect(() => {
//     const loader = new FBXLoader();
//     const localModelPath = '/public/images/12.FBX'; 
//     loader.load(
//       localModelPath,
//       (fbx: Group) => {
//         setModel(fbx);
//       },
//       undefined,
//       (error: ErrorEvent) => {
//         console.error("Error loading FBX model:", error);
//       }
//     );
//   }, []);

//   return (
//     <div
//       className={`relative ${
//         hasOffer ? "border-red-600 border-2 rounded-2xl shadow-sm" : ""
//       } bg-white text-gray-900 overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105 hover:rounded-xl`}
//       onClick={() => (window.location.href = `/furniture/${product.id}`)}
//     >
//       {hasOffer && (
//         <div className="absolute top-0 left-0 bg-red-600 text-white py-1 px-10 transform -rotate-45 translate-x-[-32%] translate-y-[10%] z-10 text-lg font-bold">
//           SALE
//         </div>
//       )}

//       <div className="aspect-square overflow-hidden">
//         <Canvas className="w-full h-96 rounded-xl shadow-lg">
//           <ambientLight intensity={0.5} />
//           <directionalLight position={[2, 2, 2]} />
//           <OrbitControls />
//           {model && <primitive object={model} scale={0.01} />}
//         </Canvas>
//       </div>

//       <div className="p-4 text-center gap-1">
//         <h3 className="font-medium text-lg">{product.description}</h3>
//         <span className="text-sm text-gray-500">{product.name}</span>
//         <div className="mt-2 flex flex-col items-center">
//           <span className="text-xl font-bold">${product.price}</span>
//           {hasOffer && product.price && (
//             <span className="text-sm text-gray-500 line-through">
//               ${product.price}
//             </span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }