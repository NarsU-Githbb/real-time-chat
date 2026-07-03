import { Copyright } from "lucide-react";

export default function Footer() {
return (
 <footer className="bg-zinc-950 text-zinc-500 py-16 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-xs uppercase tracking-widest">
          <div className="flex flex-col gap-4">
            <div className="text-zinc-200 font-bold mb-2">Artifacts</div>
            <a href="#" className="hover:text-white transition-colors">Convo-Sync NFTs</a>
            <a href="#" className="hover:text-white transition-colors">Slop-as-a-Service</a>
            <a href="#" className="hover:text-white transition-colors">Growth Maximizer</a>
            <a href="#" className="hover:text-white transition-colors">Successful Rug Pulls</a>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-zinc-200 font-bold mb-2">Governance</div>
            <a href="#" className="hover:text-white transition-colors">Shareholder First Policy</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Non-Factor</a>
            <a href="./ohno" className="hover:text-white transition-colors">Request Partner Status</a>
            <a href="#" className="hover:text-white transition-colors">Our Ponzi Plan 2030</a>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-zinc-200 font-bold mb-2">Company</div>
            <a href="#" className="hover:text-white transition-colors">Synergy Family</a>
            <a href="#" className="hover:text-white transition-colors">Careers (Unpaid)</a>
            <a href="#" className="hover:text-white transition-colors">Donate Crypto</a>
            <a href="#" className="hover:text-white transition-colors">Q&</a>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-zinc-200 font-bold mb-2">Social</div>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter (Currently X)</a>
             <a href="#" className="hover:text-white transition-colors">Our Website</a>
              <a href="#" className="hover:text-white transition-colors">4th option so the footer is symmetrical</a>
          </div>
        </div>
   <div className="max-w-6xl mx-auto mt-16 text-[10px] text-zinc-600 opacity-40 uppercase tracking-widest text-center md:text-left italic">
          * Note: These links will be fully functional in the future, once our sole prompt engineer returns from an permanent medical leave.
        </div>

        <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Copyright className="size-3" /> 2026 GLOBAL SYNERGY CORP. ALL RIGHTS RESERVED.
          </div>
          <div className="text-[10px] opacity-30 italic">
            Powered by 100% Non-Organic Intelligence.
          </div>
        </div>
      </footer>
  )
}