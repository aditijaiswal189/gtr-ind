import { Plane } from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface CtaWith4FeaturesProps {
  features: FeatureItem[];
  imageUrl?: string;
}
interface FeatureBoxProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ icon, title, description }) => (
  <div>
    <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-primary/20 text-primary">
      {icon ?? <Plane className="w-6 h-6" />}
    </div>
    <h6 className="mb-2 font-semibold leading-5 text-foreground">{title}</h6>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);
export const CtaWith4Features: React.FC<CtaWith4FeaturesProps> = ({
  features,
  imageUrl = "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
}) => {
  return (
    <section className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 z-0 w-full h-full bg-muted lg:w-3/4" />
      </div>
      <div className="relative z-10">
        <div className="grid gap-4 row-gap-8 lg:grid-cols-2">
          <div className="grid gap-12 row-gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <FeatureBox
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
          <div className="flex items-center justify-center">
  <img
    className="object-contain max-h-[400px] w-full rounded shadow-lg"
    src={imageUrl}
    alt="CTA Visual"
  />
</div>
        </div>
      </div>
    </section>
  );
};
