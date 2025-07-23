
import './DeleteBtn.css'

const DeleteBtn = ({ mood, updateMoodState }) => {
    const DeleteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><path d="M10 11v6"></path><path d="M14 11v6"></path></svg>

    const handleDelete = () => {
        if (mood && updateMoodState) {
            updateMoodState(mood);
        } else {
            console.error('DeleteBtn: missing mood or updateMoodState prop');
        }
    }
    return (
        <div className="delete-btn"
            onClick={handleDelete} >
            <DeleteIcon />

        </div>
    )
}

export default DeleteBtn   