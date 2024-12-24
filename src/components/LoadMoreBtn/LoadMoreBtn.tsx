import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
  children: React.ReactNode;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick, children }) => {
  return (
    <button className={s.btn} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default LoadMoreBtn;
