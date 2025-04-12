import React, { useState } from "react";
import "../styles/Note.css";

function Note({ note, onDelete }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null); // Track the clicked image

    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

    return (
        <div className="note-container">
            <p className="note-title">{note.title}</p>
            <p className="note-content">{note.content}</p>

            {/* Render multiple images */}
            {note.images && note.images.length > 0 && (
                <div className="note-images">
                    {note.images.map((image) => (
                        <img
                            key={image.id}
                            src={image.image}
                            alt={`Note ${note.title}`}
                            className="note-image"
                            onClick={() => {
                                setSelectedImage(image.image); // Set the clicked image
                                setIsModalOpen(true); // Open modal
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Modal for full-size image */}
            {isModalOpen && (
                <div className="modal" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content">
                        <img
                            src={selectedImage} // Display the selected image
                            alt={`Note ${note.title}`}
                            className="full-size-image"
                        />
                    </div>
                </div>
            )}

            <p className="note-date">{formattedDate}</p>
            <button className="delete-button" onClick={() => onDelete(note.id)}>
                Delete
            </button>
        </div>
    );
}

export default Note;