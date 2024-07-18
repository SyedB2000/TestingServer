import React, { Fragment, useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage] = useState(5);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://thtsusa.com/api/images", {
          headers: { "Content-Type": "application/json" },
        });
        setPhotos(res.data);
        setLoading(false);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPhotos();
  }, []);

  useEffect(() => {
    if (!loading) {
      window.scrollTo({
        top: document.querySelector(".photo-grid").offsetTop,
        behavior: "smooth",
      });
    }
  }, [loading, currentPage]);

  // Get current photos
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Fragment>
      <div className="bg-[#d1d1d1] h-screen relative">
        <div className="absolute w-full flex justify-center top-8">
          <NavBar />
        </div>

        <div className="container mx-auto p-4 pt-32">
          <div className="photo-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {currentPhotos.map((photo) => (
              <div
                key={photo?.id}
                className="border rounded shadow p-2"
                onClick={() => navigate(`/gallery/image/${photo?.id}`)}
              >
                <img
                  src={photo?.url}
                  alt={photo?.title}
                  className="w-full mb-2"
                />
                <h2 className="text-sm font-semibold">{photo?.title}</h2>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-4">
            <div>
              Showing {indexOfFirstPhoto + 1} to{" "}
              {Math.min(indexOfLastPhoto, photos?.length)} of {photos?.length}
              photos
            </div>
            <div className="flex items-center">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 mx-2 bg-black hover:bg-gray-950 text-white rounded disabled:opacity-50"
              >
                Prev
              </button>
              <span className="px-4 py-2 mx-2 bg-gray-200 rounded">
                {currentPage}
              </span>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={indexOfLastPhoto >= photos.length}
                className="px-4 py-2 mx-2 bg-black hover:bg-gray-950 text-white rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Gallery;
