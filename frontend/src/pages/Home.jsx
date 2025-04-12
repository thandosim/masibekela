import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";

function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [images, setImages] = useState([]); // Use an array for multiple images

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted!");
                else alert("Failed to delete note.");
                getNotes();
            })
            .catch((error) => alert(error));
    };

    const createNote = (e) => {
        e.preventDefault();

        // Retrieve the access token from localStorage
        const token = localStorage.getItem("access");
        if (!token) {
            alert("You need to be logged in to create a note!");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);

        // Add multiple images to the FormData
        images.forEach((image) => {
            formData.append("images", image);
        });

        api.post("/api/notes/", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`, // Attach the access token
            },
        })
            .then((res) => {
                if (res.status === 201) {
                    alert("Note created!");
                    setTitle(""); // Clear the title field
                    setContent(""); // Clear the content field
                    setImages([]); // Clear the images
                    getNotes(); // Refresh the notes list
                } else {
                    alert("Failed to create note.");
                }
            })
            .catch((err) => {
                console.error("Error:", err.response?.data || err.message);
                alert(err.response?.data || "An error occurred!");
            });
    };

    return (
        <div>
            <div>
                <h2>Notes</h2>
                {notes.map((note) => (
                    <Note note={note} onDelete={deleteNote} key={note.id} />
                ))}
            </div>
            <h2>Create a Note</h2>
            <form onSubmit={createNote}>
                <label htmlFor="title">Title:</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="content">Content:</label>
                <br />
                <textarea
                    id="content"
                    name="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br />
                <label htmlFor="images">Upload Images:</label>
                <br />
                <input
                    type="file"
                    id="images"
                    name="images"
                    multiple // Allow multiple image selection
                    onChange={(e) => setImages([...e.target.files])} // Convert FileList to Array
                />
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Home;