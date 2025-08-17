import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

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

interface ProductCardProps {
  product: Product;
}

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

export const ProductCard = ({ product }: ProductCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className="group overflow-hidden animate-fade-in">
      <div className="aspect-video overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg font-bold leading-tight">
            {product.name}
          </CardTitle>
          <Badge variant={getCategoryVariant(product.category)}>
            {product.category}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          {product.description}
        </p>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex items-center justify-between mb-4">
          <div className="space-y-1">
            <p className="text-2xl font-bold text-primary">
              ฿{product.price}
            </p>
            <p className="text-sm text-muted-foreground">
              PV: {product.pv} คะแนน
            </p>
          </div>
        </div>

        <Button
          variant="category"
          className="w-full justify-between"
          onClick={() => setShowDetails(!showDetails)}
        >
          <span>ดูสรรพคุณ</span>
          {showDetails ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>

        {showDetails && (
          <div className="mt-4 space-y-2 animate-scale-in">
            <h4 className="font-semibold text-primary">สรรพคุณ:</h4>
            <ul className="space-y-1">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};