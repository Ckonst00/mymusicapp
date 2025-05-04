import React, {useState} from "react";
import AudioPlayer from "./Components/Player/AudioPlayer.jsx";
import IntroPage from "./pages/IntroPage.jsx";


function App() {
    const [introPage, setIntroPage] = useState(true);

    const handleIntroPage = () => {
        setIntroPage(false);
    }
    return (
        <div className='app-container'>
            {introPage ? (
                <IntroPage onContinue={handleIntroPage}/>
            ) : (
                <>
                    {/* Background video */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className='video-bg'
                    >
                        <source src="/StyleContent/space-meteor-bg.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <div className="video-overlay"></div>

                    {/* Foreground content */}
                    <main className='main'>
                        <div>
                            <AudioPlayer/>
                        </div>
                    </main>
                </>
            )}
        </div>
    );

}
export default App
