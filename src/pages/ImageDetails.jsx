import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../component/NavBar";

export default function ImageDetails() {
    const [photos, setPhotos] = useState([]);
    const params = useParams();
    const { id } = params;

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const res = await axios.get(`https://thtsusa.com/api/images/${id}`, {
                    headers: { "Content-Type": "application/json" },
                });
                setPhotos(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchPhotos();
    }, [id]);

 
    return (
        <Fragment>
            <div className="bg-[#d1d1d1] h-screen relative">
                <div className="absolute w-full flex justify-center top-8">
                    <NavBar />
                </div>

                <div className="container mx-auto p-4 pt-32">
                    <div className="flex justify-center items-center">
                        <div
                            key={photos.id}
                            className="border rounded shadow p-2 justify-center items-center "
                        >
                            <img
                                src={photos.url}
                                alt={photos.title}
                                className="w-full mb-2 h-60"
                            />
                            <h2 className="text-sm font-semibold">{photos.title}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
