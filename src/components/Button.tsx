import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isLoading: boolean;
  onClick: () => void;
};

const Button = ({ children, isLoading, onClick }: Props) => {
  return (
    <div>
      <button
        type="button"
        className={`btn btn-${isLoading ? "secondary" : "primary"}`}
        disabled={isLoading}
        onClick={onClick}
      >
        {isLoading ? "cargando" : children}
      </button>
    </div>
  );
};

export default Button;
