import ShipmentsTableCarrier from "@/components/carrier/ShipmentsTableCarrier";
import InsideHeader from "@/components/header/InsideHeader";

/**
 * El componente MainCarrier representa la página principal para los transportistas donde pueden ver y editar el estado de sus envíos transportados.
 * 
 * @component
 */
export default function MainCarrier() {

  return (
    <>
      <InsideHeader role="carrier" />
      
      <div className="flex flex-col px-6 py-8">
        
        {/* Título de la página */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Tus pedidos transportados</h1>
        </div>

        <ShipmentsTableCarrier />
        
      </div>
    
    </>
  );
}
