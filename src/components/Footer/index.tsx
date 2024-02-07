import { 
    Play, 
    Shuffle, 
    SkipBack, 
    SkipForward, 
    Repeat,
    Mic2,
    LayoutList,
    Volume,
    Laptop2,
    Maximize2
} from 'lucide-react';

export function Footer () {
    return (
        <footer className="flex items-center justify-between bg-zinc-800 border-t border-zinc-700 px-6 py-3">

        <div className="flex items-center gap-4">
          <img src="/images/album.jpg" width={56} height={56}  alt="Album"/>
          <div className="flex flex-col">
            <strong className="font-normal">Nova Forma</strong>
            <span className="text-xs text-zinc-400">Fraternidade SJPII</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">

          <div className="flex items-center gap-6">
            <Shuffle  size={24} className="text-zinc-200"/>
            <SkipBack size={24} className="text-zinc-200"/>
            <button type="button" className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-white text-black ml-auto">
              <Play />
            </button>
            <SkipForward  size={24} className="text-zinc-200"/>
            <Repeat  size={24} className="text-zinc-200"/>
          </div>

          <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-400">0:32</span>
              <div className="h-1 rounded-full w-96 bg-zinc-600">
                <div className="h-1 rounded-full w-40 bg-white"></div>
              </div>
              <span className="text-xs text-zinc-400">2:14</span>
          </div>

          

        </div>

        

        <div className="flex item-center gap-4">
            <Mic2 size={20} />
            <LayoutList size={20} />
            <Laptop2 size={20} />
            <div className="flex items-center gap-4">
              <Volume size={20} />
              <div className="h-1 rounded-full w-24 bg-zinc-600">
                <div className="h-1 rounded-full w-12 bg-white"></div>
              </div>
            </div>
            <Maximize2 size={20} />
          </div>
      </footer>
    )
}