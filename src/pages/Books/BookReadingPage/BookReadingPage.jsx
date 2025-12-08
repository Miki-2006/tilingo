import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useParams } from "react-router-dom";
import { ReactReader } from "react-reader";
import supabase from "../../../services/supabase";

const BookReadingPage = () => {
  const [location, setLocation] = useState(null);
  const [bookUrl, setBookUrl] = useState(null);
  const { id } = useParams();

  const locationChangeHandler = (epubcifi) => {
    setLocation(epubcifi);
  };

  useEffect(() => {
    async function fetchBookUrl() {
      try {
        // await fetch(`http://localhost:3000/books/${id}`)
        //   .then((response) => response.json())
        //   .then((data) => setBookUrl(data.fileUrl));
        const { data, error } = await supabase.storage
          .from("books")
          .createSignedUrl(
            "book-files/WashingtonIrving_TheLegendofSleepyHollow.epub",
            3600
          );
        if (error) {
          throw error;
        }
        const response = await fetch(data.signedUrl);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(new Blob([blob], { type: "application/epub+zip" }));

        setBookUrl(blobUrl);
        console.log(blobUrl);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    }
    fetchBookUrl();
  }, [id]);

  return (
    <div style={{ height: "100vh" }}>
      <ReactReader
        location={location}
        locationChanged={locationChangeHandler}
        url={bookUrl}
      />
    </div>
  );
};

export default BookReadingPage;
