import React from 'react'
import { cn } from '@/lib/utils'

export interface FeatureItemData {
  title: string
  description: string
  icon: React.ReactElement<{ className?: string }>
}

interface FeatureItemProps extends FeatureItemData {
  index: number
  total: number
  columns: number
}

/**
 * Renders one “feature” box, with:
 *  • responsive right/bottom borders
 *  • hover-overlay gradient (up on first row, down on others)
 *  • icon (sized & coloured via CSS vars)
 *  • animated indicator bar + title slide
 */
export const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  icon,
  index,
  total,
  columns,
}) => {
  const row = Math.floor(index / columns)
  const col = index % columns
  const rows = Math.ceil(total / columns)

  const hasRightBorder = col < columns - 1
  const hasBottomBorder = row < rows - 1

  return (
    <div
      className={cn(
        'flex flex-col py-10 relative group',
        hasRightBorder && 'lg:border-r border-[var(--border)]',
        hasBottomBorder && 'border-b border-[var(--border)]'
      )}
    >
      {/* hover overlay */}
      <div
        className={cn(
          'absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none',
          row === 0
            ? 'bg-gradient-to-t from-[var(--card)] to-transparent'
            : 'bg-gradient-to-b from-[var(--card)] to-transparent'
        )}
      />

      {/* icon */}
      <div className="mb-4 relative z-10 px-10 text-primary">
        {React.cloneElement(icon, {
          className: 'w-6 h-6 stroke-primary',
        })}
      </div>

      {/* title + indicator */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="
          absolute left-0 inset-y-0 h-6 group-hover:h-8 w-1
          rounded-tr-full rounded-br-full
          bg-primary group-hover:bg-[--primary]
          transition-all duration-200 origin-center
        " />
        <span className="
          inline-block transition-transform duration-200
          group-hover:translate-x-2 text-[var(--foreground)]
        ">
          {title}
        </span>
      </div>

      {/* description */}
      <p className="text-sm text-[var(--muted-foreground)] max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  )
}


export interface FeatureGridProps {
    title: string
    description: string
  features: FeatureItemData[]
  /** default 4. You can pass 2 or 3 if you want fewer columns on lg. */
  columns?: number
}

/**
 * Renders a responsive grid of FeatureItems.
 * • 1 col on mobile, 2 on md, `columns` on lg
 */
export const FeatureGrid4: React.FC<FeatureGridProps> = ({
    title,
    description,
  features,
  columns = 4,
}) => {
  // only supports up to 4 right now; adjust if you need 5+
  const lgColsClass = {
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  }[columns]

  return (
    <>
     <div className="max-w-2xl  sm:mx-auto text-center">
    
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-muted-foreground text-base">{description}</p>
        )}
        
      </div>
      <div
      className={`
        grid grid-cols-1 md:grid-cols-2 ${lgColsClass}
        py-10 max-w-7xl mx-auto
      `}
    >
      {features.map((f, i) => (
        <FeatureItem
          key={f.title}
          {...f}
          index={i}
          total={features.length}
          columns={columns}
        />
      ))}
    </div>
    </>
  )
}
