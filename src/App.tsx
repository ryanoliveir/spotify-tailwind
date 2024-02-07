import { 
  Home, 
  Search, 
  Library, 
  ChevronRight, 
  ChevronLeft, 
  Play
} from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className="h-screen bg-zinc-900 text-zinc-50 flex flex-col">
      <div className="flex flex-1">

        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-bold text-3xl mt-10" >Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-6">
            <a href="#"  className="bg-white/10 group rounded group overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <img src="/images/album.jpg" width={104} height={104}  alt="Album"/>
              <strong></strong>
              <strong>Nova Forma</strong>
              <button type="button" className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <img src="/images/album.jpg" width={104} height={104}  alt="Album" />
              <strong>Nova Forma</strong>
              <button type="button" className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a> 
            <a href="#" className="bg-white/10 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <img src="/images/album.jpg" width={104} height={104}  alt="Album" />
              <strong>Nova Forma</strong>
              <button type="button" className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <img src="/images/album.jpg" width={104} height={104}  alt="Album" />
              <strong>Nova Forma</strong>
              <button type="button" className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <img src="/images/album.jpg" width={104} height={104}  alt="Album" />
              <strong>Nova Forma</strong>
              <button type="button" className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <img src="/images/album.jpg" width={104} height={104}  alt="Album" />
              <strong>Nova Forma</strong>
              <button type="button" className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
        
          </div>


          <h2 className="font-bold text-3xl mt-10" >Good Afternoon</h2>
          <div className="grid grid-cols-8 gap-4 mt-4">
              <a href="#" className="bg-white/5 p-4 flex flex-col gap-2 rounded-md hover:bg-white/10">
                <img src="/images/album.jpg" className="w-full" width={104} height={104}  alt="Album"/>
                <strong className="font-semibold">Fraternidade SJPII</strong>
                <span className="text-xs text-zinc-500">Fraternidade</span>
              </a>
              <a href="#" className="bg-white/5 p-4 flex flex-col gap-2 rounded-md hover:bg-white/10">
                <img src="/images/album.jpg" className="w-full" width={104} height={104}  alt="Album"/>
                <strong className="font-semibold">Fraternidade SJPII</strong>
                <span className="text-xs text-zinc-500">Fraternidade</span>
              </a>
              <a href="#" className="bg-white/5 p-4 flex flex-col gap-2 rounded-md hover:bg-white/10">
                <img src="/images/album.jpg" className="w-full" width={104} height={104}  alt="Album"/>
                <strong className="font-semibold">Fraternidade SJPII</strong>
                <span className="text-xs text-zinc-500">Fraternidade</span>
              </a>
              <a href="#" className="bg-white/5 p-4 flex flex-col gap-2 rounded-md hover:bg-white/10">
                <img src="/images/album.jpg" className="w-full" width={104} height={104}  alt="Album"/>
                <strong className="font-semibold">Fraternidade SJPII</strong>
                <span className="text-xs text-zinc-500">Fraternidade</span>
              </a>
              <a href="#" className="bg-white/5 p-4 flex flex-col gap-2 rounded-md hover:bg-white/10">
                <img src="/images/album.jpg" className="w-full" width={104} height={104}  alt="Album"/>
                <strong className="font-semibold">Fraternidade SJPII</strong>
                <span className="text-xs text-zinc-500">Fraternidade</span>
              </a>
              <a href="#" className="bg-white/5 p-4 flex flex-col gap-2 rounded-md hover:bg-white/10">
                <img src="/images/album.jpg" className="w-full" width={104} height={104}  alt="Album"/>
                <strong className="font-semibold">Fraternidade SJPII</strong>
                <span className="text-xs text-zinc-500">Fraternidade</span>
              </a>
          </div>



        </main>

      </div>
     <Footer />
    </div>
  );
};

export default App;
