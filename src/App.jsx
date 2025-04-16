import AudioPlayer from "./Components/Player/AudioPlayer.jsx";
function App() {


  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white
    text-sm sm:text-base'>
      <div>
        <AudioPlayer />
      </div>
    </main>
  )
}

export default App
