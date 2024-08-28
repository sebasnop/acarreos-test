import InsideHeader from "@/components/header/InsideHeader";
import RequestServiceForm from "@/components/request/RequestServiceForm";

export default function RequestServicePage() {
  return (
    <>
      <InsideHeader role="user" />
      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-6 sm:py-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:text-center">
            Solicite un servicio
          </h2>
          <RequestServiceForm />
        </div>
      </main>
    </>
  );
}