//import { useState } from 'react'
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, TrendingUp, TrendingDown, Dog, Users, Copyright } from "lucide-react" 


export default function App() {
  const contentRef = useRef(null)

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" })
  }

    return (
    <div className="flex flex-col bg-zinc-50">
      {/* SECTION 1: The Hook */}
      <div className="h-screen flex flex-col items-center justify-center p-6 text-center bg-zinc-950 text-white relative">
        <div className="font-mono text-xs pt-10 uppercase tracking-[0.3em] mb-8 opacity-60">
          Experience of a lifetime: Unlike anything you have encountered
        </div>
        <div className="font-bold text-3xl md:text-5xl max-w-4xl leading-tight tracking-tight">
          Personally branded, game-changing, state-of-the-art: The next big thing in <span className="text-zinc-400 italic">disruptive convo sync journeys. leveraging industry-leading, seamless communication.</span>
        </div>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={scrollToContent}
          className="mt-20 animate-bounce rounded-full size-12 border-zinc-700 bg-transparent text-white hover:bg-white/10 hover:text-white"
        >
          <ChevronDown className="size-6" />
        </Button>
      </div>

      {/* SECTION 2: The Pitch */}
      <div ref={contentRef} className="min-h-screen flex flex-col items-center py-24 px-6 text-center bg-zinc-100">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tighter md:text-6xl lg:text-7xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-600 from-yellow-400">
            Corporate-Synergized
          </span>
          <br /> Interactive Social Platform
        </h1>
        <p className="text-zinc-500 mb-10 text-lg font-medium">(Value-Added)</p>
       
        <div className="flex gap-4 mb-16">
          <Button size="lg" className="font-bold uppercase tracking-widest px-8 shadow-xl">
            Onboard into the Ecosystem
          </Button>
          <Button variant="outline" size="lg" className="border-zinc-300">
            Request Partner Status
          </Button>
        </div>
       
        <div className="bg-blue-50 border-2 border-dotted border-blue-200 text-blue-900 p-8 rounded-xl max-w-2xl shadow-inner mb-24">
          <p className="leading-relaxed italic">
                It brings you certified AI slop, cross-functional corporate gratification & the absolute value for the shareholders (sustainable share growth, no need for strategic pivots). 
        A truly enshittificated idea-sharing session network that oozes our motto: "max profits, low customer satisfaction!" in an 
        unprecedented paradigm shift yet to be seen in the world of innovative software artifacts! 
          </p>
        </div>

        {/* Why Choose Us Grid */}
        <div className="max-w-6xl w-full">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-zinc-800">Why scale with us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="secondary" className="h-auto p-6 flex items-start gap-4 justify-start bg-white border border-zinc-200 hover:border-orange-500 transition-all">
              <TrendingUp className="size-6 text-orange-600 shrink-0" /> 
              <div className="text-left">
                <div className="font-bold">Optimize Shareholder Value</div>
                <div className="text-xs font-normal opacity-70">KPIs mapped to moon-bound trajectories.</div>
              </div>
            </Button>

            <Button variant="secondary" className="h-auto p-6 flex items-start gap-4 justify-start bg-white border border-zinc-200">
              <Users className="size-6 text-blue-600 shrink-0" /> 
              <div className="text-left">
                <div className="font-bold">Unify Business Partners</div>
                <div className="text-xs font-normal opacity-70">Cross-pollinate vertical silos or whatever.</div>
              </div>
            </Button>

            <Button variant="secondary" className="h-auto p-6 flex items-start gap-4 justify-start bg-white border border-zinc-200 opacity-50 grayscale">
              <TrendingDown className="size-6 text-zinc-400 shrink-0" /> 
              <div className="text-left">
                <div className="font-bold text-zinc-400 line-through">Value to the customers</div>
                <div className="text-xs font-normal opacity-70">Deprioritized for fiscal year 2026 (& every other year as well).</div>
              </div>
            </Button>

            <Button variant="secondary" className="h-auto p-6 flex items-start gap-4 justify-start bg-white border border-zinc-200">
              <Dog className="size-6 text-orange-600 shrink-0" /> 
              <div className="text-left">
                <div className="font-bold">Meet our office dog: Rufus™ (made by Unitree Robotics)</div>
                <div className="text-xs font-normal opacity-70">Money saved on dog treats = bigger share value for the investors!</div>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* FOOTER: The Legal Void */}
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
            <a href="#" className="hover:text-white transition-colors">Terms of you own nothing & be happy</a>
            <a href="#" className="hover:text-white transition-colors">Exit Scam Plans 2030</a>
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
              <a href="#" className="hover:text-white transition-colors">4 option so the footer is symmetrical</a>
          </div>
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
    </div>
  )
}
