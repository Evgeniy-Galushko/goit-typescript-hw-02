import s from "./BtnDown.module.css";

interface BtnDownProps {
  children: React.ReactElement;
}

const BtnDown: React.FC<BtnDownProps> = ({ children }) => {
  return (
    <a href="#down" className={s.btnNavDown}>
      {children}
    </a>
  );
};

export default BtnDown;
