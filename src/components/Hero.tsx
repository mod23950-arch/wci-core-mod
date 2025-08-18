import { Button } from "@/components/ui/button";
import { Leaf, Heart, Sprout } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-accent blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-secondary blur-xl animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-primary blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-10 w-24 h-24 rounded-full bg-gradient-accent blur-lg animate-bounce"></div>
        <div className="absolute bottom-1/3 left-10 w-36 h-36 rounded-full bg-gradient-secondary blur-xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand Section */}
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow border border-primary/20">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-3xl font-bold text-foreground bg-gradient-primary bg-clip-text text-transparent">WCI</h1>
                <p className="text-muted-foreground">by CoreNetwork</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="animate-fade-in animation-delay-200">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              ผลิตภัณฑ์คุณภาพของ WCI
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              สินค้าคุณภาพสูงจากธรรมชาติ เพื่อสุขภาพที่แข็งแรง 
              และการเกษตรยั่งยืน
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="lg" className="text-lg">
                ดูสินค้าทั้งหมด
              </Button>
              <Button variant="outline" size="lg" className="text-lg border-primary/30 text-primary hover:bg-primary hover:text-white">
                เกี่ยวกับเรา
              </Button>
            </div>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in animation-delay-400">
            <div className="flex flex-col items-center text-foreground group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 shadow-soft group-hover:shadow-glow transition-all duration-300 transform group-hover:scale-110">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">สุขภาพดี</h3>
              <p className="text-sm text-center text-muted-foreground">อาหารเสริมจากธรรมชาติ</p>
            </div>
            
            <div className="flex flex-col items-center text-foreground group">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mb-4 shadow-soft group-hover:shadow-glow transition-all duration-300 transform group-hover:scale-110">
                <Sprout className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">การเกษตร</h3>
              <p className="text-sm text-center text-muted-foreground">ผลิตภัณฑ์เกษตรยั่งยืน</p>
            </div>
            
            <div className="flex flex-col items-center text-foreground group">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mb-4 shadow-soft group-hover:shadow-glow transition-all duration-300 transform group-hover:scale-110">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">ธรรมชาติ</h3>
              <p className="text-sm text-center text-muted-foreground">100% จากธรรมชาติ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};