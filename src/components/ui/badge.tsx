import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-gradient-primary text-primary-foreground hover:shadow-glow",
        secondary:
          "border-transparent bg-gradient-secondary text-secondary-foreground hover:shadow-glow",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground border-border",
        health: "border-transparent bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-soft",
        agriculture: "border-transparent bg-gradient-to-r from-green-400 to-emerald-400 text-white shadow-soft",
        household: "border-transparent bg-gradient-to-r from-blue-400 to-cyan-400 text-white shadow-soft",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
