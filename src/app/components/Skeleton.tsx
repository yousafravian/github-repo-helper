import {cn} from "../shared/utils"
import * as React from 'react';

function Skeleton({
                    className,
                    ...props
                  }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export {Skeleton}
