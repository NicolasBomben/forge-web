import { useTranslation } from "react-i18next";

import {
    FileText,
    Building,
    ShoppingCart,
    Layout,
    Search,
    Settings,
} from "lucide-react";


export const services = [

    
    {
      title: "Landin Pages",
      description:
        "Landing Pages de alto rendimiento diseñadas para captar clientes potenciales a través de formularios o agendar reuniones.",
      icon: FileText,
    },
    {
      title: "Sitios Web Profesionales",
      description:
        "Sitios web profesionales ideales para fábricas y negocios que buscan establecer su presencia online.",
      icon: Building,
    },
    {
      title: "E-commerce",
      description:
        "Tiendas online completas y funcionales con procesamiento de pagos seguro y gestión de inventario.",
      icon: ShoppingCart,
    },
    {
      title: "Diseño Web y UX/UI",
      description:
        "Diseño atractivo y experiencia de usuario optimizada para hacer destacar tu sitio web.",
      icon: Layout,
    },
    {
      title: "SEO",
      description:
        "Optimización para motores de búsqueda y soporte técnico para mantener tu sitio web funcionando sin problemas.",
      icon: Search,
    },
    {
      title: "Mantenimiento",
      description:
        "Actualizaciones continuas, parches de seguridad y soporte técnico para mantener tu sitio web funcionando sin inconvenientes.",
      icon: Settings,
    },
  
  ];