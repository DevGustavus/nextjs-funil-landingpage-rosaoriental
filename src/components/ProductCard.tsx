import { Product } from "@/types/product";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/produtos/${product.id}`} className="block group">
      <div className="bg-surface-container-lowest rounded-[16px] shadow-bloom p-6 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
        <div className="aspect-square bg-surface-container-low rounded-lg mb-stack-md overflow-hidden relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={product.name}
            className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
            src={product.imageSrc}
          />
        </div>
        <h3 className="font-title-sm text-title-sm text-wine-accent mb-stack-sm flex-grow">{product.name}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">{product.description}</p>
        <div className="mt-auto pt-stack-sm border-t border-surface-container-highest">
          <button className="w-full bg-[#C97A8F] text-white px-4 py-3 rounded-lg font-label-bold text-label-bold hover:bg-opacity-90 transition-colors shadow-sm active:scale-95 duration-150 cursor-pointer pointer-events-none">
            Ver Detalhes
          </button>
        </div>
      </div>
    </Link>
  );
}
