import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  pv: number;
  category: string;
  image: string;
  benefits: string[];
}

interface ProductGridProps {
  products: Product[];
}

const categories = [
  { name: 'ทั้งหมด', value: 'all' },
  { name: 'อาหารเสริม', value: 'อาหารเสริม' },
  { name: 'การเกษตร', value: 'การเกษตร' },
  { name: 'ของใช้ในบ้าน', value: 'ของใช้ในบ้าน' }
];

export const ProductGrid = ({ products }: ProductGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const getCategoryVariant = (category: string) => {
    switch (category) {
      case 'อาหารเสริม':
        return 'health';
      case 'การเกษตร':
        return 'agriculture';
      case 'ของใช้ในบ้าน':
        return 'household';
      default:
        return 'default';
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            สินค้าของเรา
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ผลิตภัณฑ์คุณภาพสูงเพื่อสุขภาพและการเกษตรที่ดี
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "hero" : "category"}
              onClick={() => setSelectedCategory(category.value)}
              className="min-w-0"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">
              {products.filter(p => p.category === 'อาหารเสริม').length}
            </div>
            <div className="text-muted-foreground">อาหารเสริม</div>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">
              {products.filter(p => p.category === 'การเกษตร').length}
            </div>
            <div className="text-muted-foreground">ผลิตภัณฑ์เกษตร</div>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">
              {products.filter(p => p.category === 'ของใช้ในบ้าน').length}
            </div>
            <div className="text-muted-foreground">ของใช้ในบ้าน</div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">ไม่พบสินค้าในหมวดหมู่นี้</p>
          </div>
        )}
      </div>
    </section>
  );
};