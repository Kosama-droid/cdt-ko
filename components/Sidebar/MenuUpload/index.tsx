import React from "react";
import { useState, FC } from "react";
import { UploadObjects } from "./uploadObjects";
import { UploadPlaces } from "./uploadPlaces";
import { DragDropFile } from "./dragDrop";

export default function MenuUpload() {
  const [openPlace, setOpenPlace] = useState(false);
  const [openObject, setOpenObject] = useState(false);

  const handleClickPlace = () => {
    if (openPlace) {
      setOpenPlace(false);
    } else {
      setOpenPlace(true);
    }
  };

  const handleClickObjects = () => {
    if (openObject) {
      setOpenObject(false);
    } else {
      setOpenObject(true);
    }
  };

  return (
    <>
      <div id="upload-container" title="Upload" className="right-menu-body">
        <button onClick={handleClickPlace}>Places</button>
        {openPlace && <UploadPlaces />}

        <button onClick={handleClickObjects}>Objects</button>
        {openObject && <UploadObjects />}

        <span id="dragDrop-container" title="DragDrop" className="right-menu-body">
          <DragDropFile></DragDropFile>
        </span>
      </div>

    </>
  );
}
