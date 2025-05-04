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
        <div className="intro-layout">
            <div className="intro-content">
                <p className="intro-text">Press Enter to continue</p>
                <div className="intro-picture">
                    <img
                        src="MediaContent/epa-smaller.png"
                        alt="Energy Star Logo"
                    />
                </div>
            </div>
        </div>
    );
}
export default IntroPage;