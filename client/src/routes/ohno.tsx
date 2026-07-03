import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ohno')({
  component: yourbad,
})

function yourbad() {
  return <div className="flex justify-start h-fit items-center mt-15 mb-15 max-w-md mx-auto bg-blue-50 border-3 border-dotted border-blue-200 text-blue-900 p-8 rounded-xl shadow-inner">
          <p className="leading-relaxed italic">
                We are (not) sorry to inform you, but our brand allignment strategy at this juncture is only focused on partnering up with A-list celebrities with maximum cultural equity.
                Regrettably, your enterprise currently registers as an irrelevant business with sub-optimal demographic leverage.
                Let's face it: you are nowhere near the calibre of a key figure as someone like Kid Rock, Logan Paul or one of those NFL players (we don't know any, but names are placeholders next to their massive capital streams channeling towards our revenue inflow).
                However, we do maintain a dynamic onboarding pipeline for high-net-worth crypto-natives, so in that case you should perform immediate liquidity injection of 10 bitcoins as early consideration fee for our partner program.
                Our wallet address is: 1W7e52Lo67ve69Pro1f123i808t321s9!5

          </p>
        </div>
}
