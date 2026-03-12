import { Layout, Pointer, Zap } from "lucide-react";

import { Feature108 } from "@/components/blocks/shadcnblocks-com-feature108-3d"

const demoData = {
  badge: "Prototype Showcase",
  heading: "Organic Fertilizer Manufacturing System 3D Models",
  description: "Explore the digital twins of our key hardware components.",
  tabs: [
    {
      value: "tab-1",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Fermentation Tank",
      content: {
        badge: "Smart Processing",
        title: "Automated Bio-Reactor",
        description:
          "Advanced fermentation unit designed for optimal microbial activity. Features automated temperature control, agitation systems, and gas release mechanisms to accelerate the conversion of organic waste into nutrient-rich liquid fertilizer.",
        buttonText: "View Specs",
        modelPath: "/assets/models/fermentation-tank/tripo_convert_c4c9bc6b-e3ef-4e73-bb15-18b1c844c584.obj",
        mtlPath: "/assets/models/fermentation-tank/tripo_convert_c4c9bc6b-e3ef-4e73-bb15-18b1c844c584.mtl",
        imageAlt: "3D Model of Fermentation Tank",
      },
    },
    {
      value: "tab-2",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: "NPK Sensor Kit",
      content: {
        badge: "Precision Analysis",
        title: "Digital Nutrient Analyzer",
        description:
          "Portable handheld device equipped with electrochemical sensors to detect Nitrogen, Phosphorus, and Potassium levels in real-time. Includes an LCD display for instant readings and USB connectivity for data logging.",
        buttonText: "View Specs",
        modelPath: "/assets/models/npk-kit/tripo_convert_5f2d6804-5106-46c4-81f4-9f17e558c625.obj",
        mtlPath: "/assets/models/npk-kit/tripo_convert_5f2d6804-5106-46c4-81f4-9f17e558c625.mtl",
        imageAlt: "3D Model of NPK Kit",
      },
    },
    {
      value: "tab-3",
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: "Manufacturing Plant",
      content: {
        badge: "Full System",
        title: "Integrated Production Line",
        description:
          "A comprehensive view of the entire manufacturing process, linking the raw material intake, fermentation tanks, filtration units, and the final bottling station into a cohesive, automated system.",
        buttonText: "View Specs",
        imageSrc:
          "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop",
        imageAlt: "Complete manufacturing plant layout",
      },
    },
  ],
};

function Feature108Demo() {
  return <Feature108 {...demoData} />;
}

export { Feature108Demo };
