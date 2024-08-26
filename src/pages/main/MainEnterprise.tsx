import InsideHeader from "@/components/header/InsideHeader";
import React from "react";
import { BisonsTable } from "@/database/BisonsTable";

export default function MainEnterprise() {
  return (
    <>
      <InsideHeader role="admin" />
      <div className="flex flex-col px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Inventario de Bisontes</h1>
        </div>

        <div className="hidden sm:block overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow-md sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-200">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
                    >
                      Nombre del bisonte
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
                    >
                      Descripción
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider"
                    >
                      Estado
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider"
                    >
                      Finalización descanso
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider"
                    >
                      Km recorridos
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {BisonsTable.map((bison) => (
                    <tr key={bison.idBison} className="bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {bison.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {bison.description}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-center">
                        <span
                          className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${getStatusColor(
                            bison.status
                          )}`}
                        >
                          {bison.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-500">
                        {bison.endRestDate || "N/A"}
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-500">
                        {bison.kilometersTraveled} km
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Vista tipo tarjeta para dispositivos pequeños */}
        <div className="grid grid-cols-1 gap-6 sm:hidden">
          {BisonsTable.map((bison) => (
            <div
              key={bison.idBison}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-900">
                  Bisonte: {bison.name}
                </h2>
                <span
                  className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${getStatusColor(
                    bison.status
                  )}`}
                >
                  {bison.status}
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-500">{bison.description}</p>
              <p className="mt-2 text-sm text-gray-500">
                Finalización descanso: {bison.endRestDate || "N/A"}
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Km recorridos: {bison.kilometersTraveled} km
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function getStatusColor(status: string) {
  switch (status) {
    case "Descansando":
      return "bg-gray-300 text-gray-800";
    case "Disponible":
      return "bg-green-300 text-green-800";
    case "En tránsito":
      return "bg-blue-300 text-blue-800";
    default:
      return "bg-gray-300 text-gray-800";
  }
}
