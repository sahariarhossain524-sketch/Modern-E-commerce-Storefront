import { Globe, Mail, MessageCircle, Phone, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tighter">NEXA</h3>
            <p className="text-muted-foreground max-w-xs">
              Elevating your everyday essentials with premium quality and timeless design.
            </p>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors">
                <Globe className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors">
                <MessageCircle className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors">
                <Phone className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Shop</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#" className="hover:text-background transition-colors">Men's Collection</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Women's Collection</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-background transition-colors">New Arrivals</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#" className="hover:text-background transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <div className="flex items-center bg-background/10 rounded-full p-1">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent text-background px-4 py-2 outline-none w-full placeholder:text-muted-foreground"
              />
              <button className="bg-background text-foreground p-3 rounded-full hover:bg-background/90 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 NEXA Store. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
