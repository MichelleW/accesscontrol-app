
import './DeleteBtn.css'

const DeleteBtn = ({
    item,
    onDelete,
    size = 'small',
    className = '',
    title = 'Delete',
    showConfirmation = false,
    confirmationMessage = 'Are you sure you want to delete this item?'
}) => {
    const DeleteIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size === 'small' ? 16 : size === 'medium' ? 20 : 24}
            height={size === 'small' ? 16 : size === 'medium' ? 20 : 24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-trash-2"
        >
            <path d="M3 6h18"></path>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <path d="M10 11v6"></path>
            <path d="M14 11v6"></path>
        </svg>
    );

    const handleDelete = () => {
        if (showConfirmation) {
            const confirmed = window.confirm(confirmationMessage);
            if (!confirmed) return;
        }

        if (item && onDelete) {
            onDelete(item);
        } else {
            console.error('DeleteBtn: missing item or onDelete prop');
        }
    };
    return (
        <div
            className={`delete-btn size-${size} ${className}`}
            onClick={handleDelete}
            title={title}
        >
            <DeleteIcon />
        </div>
    );
}

export default DeleteBtn   