"use client";

import { Separator } from "@/components/ui/separator";

const PoliticPrivacity = () => {
  return (
    <>
      <div className="flex flex-col content-center text-balance text-center text-picton-blue-950">
        <section>
          <h2 className="font-bold text-lg">Introducción</h2>
          <p>
            En <strong>Promar.top</strong> (en adelante, "el Sitio"), respetamos
            y protegemos la privacidad de nuestros usuarios. Esta política de
            privacidad explica cómo manejamos los datos personales
            proporcionados al realizar pedidos a través de nuestra plataforma.
            Es importante destacar que no almacenamos información del cliente en
            bases de datos ni servidores. Todos los pedidos se gestionan
            mediante WhatsApp.
          </p>
        </section>
        <Separator />
        <section className="py-4">
          <h2 className="font-bold text-lg">Datos Recolectados</h2>
          <p>
            Para procesar su pedido, recopilamos los siguientes datos que usted
            proporciona voluntariamente:
          </p>
          <ul>
            <li>
              <strong>Nombre</strong>: Necesario para identificar al cliente y
              personalizar el servicio.
            </li>
            <li>
              <strong>RUT</strong>: Requerido en algunos casos para fines de
              verificación y cumplimiento.
            </li>
            <li>
              <strong>Teléfono</strong>: Necesario para comunicarnos sobre el
              pedido y gestionar la entrega.
            </li>
            <li>
              <strong>Dirección</strong>: Necesaria para realizar entregas
              correctas.
            </li>
          </ul>
        </section>
        <Separator />
        <section className="py-4">
          <h2 className="font-bold text-lg">Uso de la Información</h2>
          <p>
            La información proporcionada se utiliza exclusivamente para los
            siguientes propósitos:
          </p>
          <ol>
            <li>
              <strong>Procesar pedidos</strong>: Los datos se envían a través de
              WhatsApp al realizar un pedido.
            </li>
            <li>
              <strong>Comunicación</strong>: Contactar al cliente en caso de
              consultas sobre el pedido o problemas con la entrega.
            </li>
            <li>
              <strong>Entrega de productos</strong>: Asegurar que el pedido
              llegue a la dirección proporcionada.
            </li>
          </ol>
        </section>
        <section className="py-4">
          <h2>No Almacenamos Datos</h2>
          <p>Es importante subrayar que:</p>
          <ul>
            <li>No guardamos su información en bases de datos.</li>
            <li>
              Los datos proporcionados se envían directamente a través de
              WhatsApp y no se retienen en nuestros sistemas.
            </li>
          </ul>
        </section>
        <Separator />
        <section className="py-4">
          <h2 className="font-bold text-lg">Seguridad</h2>
          <p>
            Aunque no almacenamos datos, tomamos medidas para garantizar que la
            información transmitida a través de WhatsApp sea segura. Sin
            embargo, le recomendamos no compartir información sensible
            adicional.
          </p>
        </section>
        <section className="py-4">
          <h2>Terceros</h2>
          <p>
            El Sitio no comparte, vende ni alquila información personal a
            terceros. Los datos se utilizan únicamente para la gestión del
            pedido a través de WhatsApp.
          </p>
        </section>
        <section className="py-4">
          <h2>Consentimiento</h2>
          <p>
            Al realizar un pedido en el Sitio, usted acepta esta política de
            privacidad y autoriza el uso de los datos proporcionados
            exclusivamente para los fines descritos.
          </p>
        </section>
        <Separator />
        <section className="py-4">
          <h2 className="font-bold text-lg">Cambios a esta Política</h2>
          <p>
            Nos reservamos el derecho de actualizar esta política de privacidad
            en cualquier momento. Cualquier cambio se notificará en esta misma
            página.
          </p>
          <p>
            <strong>Fecha de última actualización:</strong> 20 - 12 - 2024
          </p>
        </section>
        <section className="py-4">
          <h2>Contacto</h2>
          <p>
            Si tiene preguntas o inquietudes sobre esta política de privacidad,
            puede contactarnos a través de nuestro canal de WhatsApp:{" "}
            <strong>+56 9 9076 7752</strong>.
          </p>
        </section>
      </div>
    </>
  );
};

export default PoliticPrivacity;
