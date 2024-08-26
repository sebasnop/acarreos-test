import ExampleForm from "@/components/ExampleForm";
import LandingHeader from "@/components/header/LandingHeader";
import PriceQuoteForm from "@/components/request/PriceQuoteForm";



export default function PriceQuotePage() {
  return (
    <>
      <LandingHeader />
      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-6 sm:py-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:text-center">
            Cotizar Servicio
          </h2>
          <PriceQuoteForm />
          {/*
          <ExampleForm />
          */}
        </div>
      </main>
    </>
  );
}