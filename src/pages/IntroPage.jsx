import React, {useEffect} from "react";

function IntroPage({onContinue}) {
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                onContinue();
            }
        };
        window.addEventListener('keydown', handleKeyPress);

        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [onContinue]);

    return (
        <div className="h-screen w-screen bg-black flex items-center justify-center text-white text-2xl">
            Press Enter to continue
        </div>
    );
};

export default IntroPage;