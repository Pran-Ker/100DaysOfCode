function Sidebar({ notes, onAddNote, onDeleteNote }) {
    
    return (
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1> Notion</h1>
                <button onClick={onAddNote}>Add</button>
            </div>
            <div className="app-sidebar-notes">

                {notes.map((note)=> (

                    <div className="app-sidebar-note">
                        <div className="sidebar-note-title">
                            <strong>{note.title}</strong>
                            <button onClick={() => onDeleteNote(note.id)}>  Delete</button>
                        </div>

                        <p>{note.body && note.body.substring(0,100) + "..."}</p>

                        <small className="note-meta"> Last modified {new Date(note.lastModified).toLocaleDateString("en-IN",{
                            hour: '2-digit',
                            minute: '2-digit',
                        })}
                        </small>
                    </div>

                ))}

                
            </div>
        </div>
    );
}

export default Sidebar