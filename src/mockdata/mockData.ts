import { Item } from "@/store/zustandStore";

export const features = [
  {
    title: "Feature One",
    description:
      "This is a description for Feature One. It highlights the main benefit and value for users.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=800&q=80",
    extraInfo:
      "Extra details about Feature One, such as use cases, statistics, or a testimonial.",
    highlights: [
      "Seamless integration with your workflow",
      "User-friendly interface for all ages",
      "24/7 customer support",
      "Highly customizable settings",
    ],
  },
  {
    title: "Feature Two",
    description:
      "Feature Two offers another great advantage, making your experience even better.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=800&q=80",
    extraInfo: "Feature Two is trusted by thousands of users worldwide.",
    highlights: [
      "Advanced security and privacy",
      "Lightning-fast performance",
      "Regular updates and improvements",
    ],
  },
  {
    title: "Feature Three",
    description:
      "Discover how Feature Three can help you achieve your goals faster and easier.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=800&q=80",
    extraInfo: "Feature Three integrates seamlessly with your workflow.",
    highlights: [
      "AI-powered recommendations",
      "Easy data import/export",
      "Mobile and desktop compatibility",
    ],
  },
  {
    title: "Feature Four",
    description:
      "Feature Four brings everything together for a seamless experience.",
    image:
      "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=facearea&w=800&q=80",
    extraInfo: "Get started with Feature Four in just a few clicks!",
    highlights: [
      "One-click setup",
      "Comprehensive analytics dashboard",
      "Cloud backup and sync",
    ],
  },
];

export const products: Item[] = [
  {
    id: "p1",
    title: "Product One",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=256&q=80",
  },
  {
    id: "p2",
    title: "Product Two",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=256&q=80",
  },
  {
    id: "p3",
    title: "Product Three",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=256&q=80",
  },
  {
    id: "p4",
    title: "Product Four",
    image:
      "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=facearea&w=256&q=80",
  },
];

export const featureIcons = [
  { icon: "🚀", title: "Free Shipping", desc: "For all orders $200" },
  { icon: "🔄", title: "1 & 1 Returns", desc: "Cancellation after 1 day" },
  {
    icon: "🛡️",
    title: "100% Secure Payments",
    desc: "Guarantee secure payments",
  },
  { icon: "💬", title: "24/7 Dedicated Support", desc: "Anywhere & anytime" },
];
