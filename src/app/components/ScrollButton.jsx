import { useState } from "react";

export default function ScrollButton(){
    const [showButton, setShowButton] = useState(false)
    function handleScrollToBottom(){
        return null;
    }
    return(
        showButton &&
        <section className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
            <button
                onClick={handleScrollToBottom}
                className="p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
            >
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
        </section>
    );
}