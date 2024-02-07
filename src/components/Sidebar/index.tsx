import { Home, Search, Library } from 'lucide-react';
  
export function Sidebar () {
    return (
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
            <a className="text-sn text-zinc-400 hover:text-zinc-100" href="">Grupo Jesus</a>
            <a className="text-sn text-zinc-400 hover:text-zinc-100" href="">Treino</a>
            <a className="text-sn text-zinc-400 hover:text-zinc-100" href="">LoFi</a>
            <a className="text-sn text-zinc-400 hover:text-zinc-100" href="">Trabalho</a>
            <a className="text-sn text-zinc-400 hover:text-zinc-100" href="">Católicas</a>
          </nav>
        </aside>

    )
}