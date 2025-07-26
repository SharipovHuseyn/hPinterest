// import "./Cart.css";
// import { ImFolderDownload } from "react-icons/im";
// import { BiSolidLike } from "react-icons/bi";
// import { useState, useEffect } from "react";
// import Loading from "../Loading/Loading";

// export default function Cart({ image, header, link }) {
//   const [isLoading, setIsLoading] = useState(true);
//   const [imgSrc, setImgSrc] = useState("");

//   useEffect(() => {
//     const img = new Image();
//     img.src = image;
    
//     img.onload = () => {
//       setIsLoading(false);
//       setImgSrc(image);
//     };
    
//     img.onerror = () => {
//       setIsLoading(false);
//       setImgSrc("path/to/default/image.jpg");
//     };
//   }, [image]);

//   async function downloadImage(imageSrc, header) {
//     if (!imageSrc || !imageSrc.startsWith('http')) {
//       throw new Error('Invalid image URL');
//     }
//     try {
//       const response = await fetch(imageSrc);
//       const imageBlob = await response.blob();
//       const imageURL = URL.createObjectURL(imageBlob);

//       const link = document.createElement("a");
//       link.href = imageURL;
//       link.download = header || "hPinterest";
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
      
//       // Освобождаем память
//       URL.revokeObjectURL(imageURL);
//     } catch (error) {
//       console.error("Download failed:", error);
//     }
//   }

//   return (
//     <div className="cart">
//       <a className="image-link">
//         {isLoading ? (
//           <Loading />
//         ) : (
//           <>
//             <img src={imgSrc} alt={header} onLoad={() => setIsLoading(false)} />
//             <button 
//               className="folder-download" 
//               onClick={() => downloadImage(image, header)}
//               aria-label="Download image"
//             >
//               <ImFolderDownload color="#5b5b5b" />
//             </button>
//             <button className="solid-like" aria-label="Like">
//               <BiSolidLike color="#5b5b5b" />
//             </button>
//           </>
//         )}
//       </a>
//       {!isLoading && <p>{header}</p>}
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import "./Cart.css";
import { ImFolderDownload } from "react-icons/im";
import { BiSolidLike } from "react-icons/bi";

export default function Cart({ image, header, link }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    
    img.onload = () => {
      setIsLoading(false);
      // Добавляем небольшую задержку для плавного появления
      setTimeout(() => setIsLoaded(true), 100);
    };
    
    img.onerror = () => {
      setIsLoading(false);
      setIsLoaded(true);
    };
  }, [image]);

  async function downloadImage(imageSrc, header) {
    try {
      const response = await fetch(imageSrc);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = header || "download";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download error:", error);
    }
  }

  return (
    <div className="cart">
      <div className="image-link">
        {isLoading && <div className="loading" />}
        <img
          src={image}
          alt={header}
          className={isLoaded ? "loaded" : ""}
          onLoad={() => setIsLoaded(true)}
        />
        <button 
          className="folder-download"
          onClick={() => downloadImage(image, header)}
          aria-label="Download"
        >
          <ImFolderDownload size={16} color="#5b5b5b" />
        </button>
        <button className="solid-like" aria-label="Like">
          <BiSolidLike size={16} color="#5b5b5b" />
        </button>
      </div>
      <p>{header}</p>
    </div>
  );
}