interface PackageExplanationProps {
    name: string;
    description: string;
  }
  
export const PackageExplanation: React.FC<PackageExplanationProps> = ({ name, description }) => {
    return (
      <div>
        <h3 className="text-lg font-medium">{name}</h3>
        <p>{description}</p>
      </div>
    );
  };