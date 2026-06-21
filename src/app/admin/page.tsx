import { Package, DollarSign, Users, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-background rounded-xl border border-border p-6 shadow-sm">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Total Revenue</h3>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-xs text-muted-foreground mt-1">+20.1% from last month</p>
        </div>
        
        <div className="bg-background rounded-xl border border-border p-6 shadow-sm">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Products</h3>
            <Package className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">+2350</div>
          <p className="text-xs text-muted-foreground mt-1">+180 new products</p>
        </div>
        
        <div className="bg-background rounded-xl border border-border p-6 shadow-sm">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Active Customers</h3>
            <Users className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">+12,234</div>
          <p className="text-xs text-muted-foreground mt-1">+19% from last month</p>
        </div>
        
        <div className="bg-background rounded-xl border border-border p-6 shadow-sm">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Active Now</h3>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">+573</div>
          <p className="text-xs text-muted-foreground mt-1">+201 since last hour</p>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="bg-background rounded-xl border border-border p-6 shadow-sm lg:col-span-4 h-[400px] flex items-center justify-center">
          <p className="text-muted-foreground text-sm">Revenue Chart (Coming Soon)</p>
        </div>
        <div className="bg-background rounded-xl border border-border p-6 shadow-sm lg:col-span-3 h-[400px] flex items-center justify-center">
          <p className="text-muted-foreground text-sm">Recent Sales Activity</p>
        </div>
      </div>
    </div>
  );
}
