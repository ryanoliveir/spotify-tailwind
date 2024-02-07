import { Home, Search, Library, ChevronRight, ChevronLeft, Play } from 'lucide-react';

const App = () => {
  return (
    <div className="h-screen bg-zinc-900 text-zinc-50 flex flex-col">
      <div className="flex flex-1">

        <aside className="bg-zinc-950 w-72 p-6 space-y-8">
          <div className="flex items-center gap-2 space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"/>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
              <div className="w-3 h-3 bg-green-500 rounded-full"/>
          </div>
          <nav className="space-y-5">
            <a className="flex text-xs items-center gap-3 font-semibold text-zinc-200" href="" >
              <Home />
              Home
            </a>
            <a className="flex text-xs items-center gap-3 font-semibold text-zinc-200" href="">
              <Search />
              Search
            </a>
            <a className="flex text-xs items-center gap-3 font-semibold text-zinc-200" href="">
              <Library />
              Your Library
            </a>
          </nav>

          <nav className="mt-10 pt-10 border-t border-zinc-100 flex flex-col gap-1 ">
            <a className="text-sn text-zinc-400 hover:text-zinc-100" href="">PlayList 1</a>
            <a className="text-sn text-zinc-400 hover:text-zinc-100" href="">PlayList 2</a>
            <a className="text-sn text-zinc-400 hover:text-zinc-100" href="">PlayList 3</a>
            <a className="text-sn text-zinc-400 hover:text-zinc-100" href="">PlayList 4</a>
            <a className="text-sn text-zinc-400 hover:text-zinc-100" href="">PlayList 5</a>
          </nav>


        </aside>

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
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">footer</footer>
    </div>
  );
};

export default App;
