import { XCircle } from "lucide-react";
import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-background border border-border rounded-2xl shadow-lg p-8 text-center space-y-6">
        <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <XCircle className="w-10 h-10" />
        </div>
        
        <h1 className="text-3xl font-extrabold tracking-tight">Payment Cancelled</h1>
        <p className="text-muted-foreground">
          It looks like you cancelled the checkout process. Your card was not charged. If you experienced any issues, please try again.
        </p>

        <div className="pt-6 border-t border-border mt-8 flex flex-col gap-3">
          <Link 
            href="/"
            className="inline-flex items-center justify-center w-full py-3 px-4 bg-foreground text-background font-semibold rounded-xl hover:bg-foreground/90 transition-colors"
          >
            Return to Store
          </Link>
        </div>
      </div>
    </div>
  );
}
