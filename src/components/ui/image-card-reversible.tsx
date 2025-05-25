import React from "react"

interface TeamCardProps {
  name: string
  role: string
  description: string
  image: string
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  description,
  image,
}) => (
  <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
    <img
      className="object-cover w-full h-56 md:h-64 xl:h-80"
      src={image}
      alt={name}
    />
    <div className="absolute inset-0 flex flex-col justify-center px-[var(--card-padding-x)] py-[var(--card-padding-y)] text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-90">
      <p className="mb-1 text-lg font-bold text-white">{name}</p>
      <p className="mb-4 text-xs text-white">{role}</p>
      <p className="mb-4 text-xs tracking-wide text-white">{description}</p>
    </div>
  </div>
)

interface ImageCardReversibleProps {
  heading: React.ReactNode
  subtitle: string
  description: string
  members: TeamCardProps[]
}

export const ImageCardReversible: React.FC<ImageCardReversibleProps> = ({
  heading,
  subtitle,
  description,
  members,
}) => {
  return (
    <div
      id="first-section"
      className="px-[var(--section-padding-x)] py-[var(--section-padding-y)] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <p className="inline-block px-3 py-2 mb-4 text-xs font-semibold tracking-wider text-[var(--primary)] uppercase rounded-full bg-[color-mix(in srgb, var(--primary) 10%, transparent)]">
          {subtitle}
        </p>
        <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-[var(--foreground)] sm:text-4xl md:mx-auto">
          {heading}
        </h2>
        <p className="text-base text-[var(--muted-foreground)] md:text-lg">
          {description}
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </div>
  )
}
