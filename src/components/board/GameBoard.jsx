import "../../assets/game.css";

export const GameBoard = ({ status, moves }) => {
  return (
    <div className="text-white font-redHatMono card-body">
      <div className="text-justify card-container">
        <span className="text-xl">Game Board</span>
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
