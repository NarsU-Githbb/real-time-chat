import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ohno')({
  component: yourbad,
})

function yourbad() {
  return <div className="flex justify-start h-fit items-center mt-15 mb-15 max-w-md mx-auto bg-blue-50 border-3 border-dotted border-blue-200 text-blue-900 p-8 rounded-xl shadow-inner">
          <p className="leading-relaxed italic">
                We are (not) sorry to inform you, but we are only looking to partner up with A-list celebrities & not an avarage worthless business owner like yourself.
                Like excuse me: you are nowhere near the calibre of a star as someone like Kid Rock, Logan Paul or one of those NFL players who no-one remembers, but hey they still make shit ton of money.
                We can make exceptions if you are rich with crypto - in that case you should give us 10 bitcoins as early consideration fee to 1Y7o52ua67reD6umba1s1sBI123t321ch9

          </p>
        </div>
}
