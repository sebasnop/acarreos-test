import LogInForm from "@/components/LogInForm";
import LandingHeader from "@/components/header/LandingHeader";

export default function LogInCarrier() {
  return (
    <>
      <LandingHeader />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <h2 className="text-center text-2xl font-bold leading-tight tracking-tight text-gray-900 mt-10">
            Inicia sesión en tu cuenta de transportista
          </h2>
        </div>
        <LogInForm />
      </div>
    </>
  );
}