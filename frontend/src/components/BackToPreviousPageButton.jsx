function BackToPreviousPageButton() {
    const goBack = () => {
        window.history.back(); // Navigates back to the previous page
    };

    return (
        <button
            onClick={goBack}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-20 "
        >
            Revenir à la page précédente
        </button>
    );
}

export default BackToPreviousPageButton;