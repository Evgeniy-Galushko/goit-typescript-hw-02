import s from "./BtnUp.module.css";

interface BtnUpProps {
  children: React.ReactElement;
}

const BtnUp: React.FC<BtnUpProps> = ({ children }) => {
  return (
    <a href="#up" className={s.btnNavUp}>
      {children}
    </a>
  );
};

export default BtnUp;
