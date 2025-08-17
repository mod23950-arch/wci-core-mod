import { Button } from "@/components/ui/button";
import { Leaf, Heart, Sprout } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary-glow blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-primary-glow blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary-glow blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand Section */}
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-16 bg-primary-foreground rounded-full flex items-center justify-center">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-3xl font-bold text-primary-foreground">WCI</h1>
                <p className="text-primary-foreground/80">by CoreNetwork</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="animate-fade-in animation-delay-200">
            <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              ผลิตภัณฑ์เพื่อ
              <br />
              <span className="text-primary-glow">สุขภาพที่ดี</span>
            </h2>
            
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              สินค้าคุณภาพสูงจากธรรมชาติ เพื่อสุขภาพที่แข็งแรง 
              และการเกษตรยั่งยืน
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="lg" className="text-lg">
                ดูสินค้าทั้งหมด
              </Button>
              <Button variant="category" size="lg" className="text-lg bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20">
                เกี่ยวกับเรา
              </Button>
            </div>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in animation-delay-400">
            <div className="flex flex-col items-center text-primary-foreground/90">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">สุขภาพดี</h3>
              <p className="text-sm text-center">อาหารเสริมจากธรรมชาติ</p>
            </div>
            
            <div className="flex flex-col items-center text-primary-foreground/90">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                <Sprout className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">การเกษตร</h3>
              <p className="text-sm text-center">ผลิตภัณฑ์เกษตรยั่งยืน</p>
            </div>
            
            <div className="flex flex-col items-center text-primary-foreground/90">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">ธรรมชาติ</h3>
              <p className="text-sm text-center">100% จากธรรมชาติ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};