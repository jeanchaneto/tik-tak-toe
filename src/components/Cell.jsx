const Cell = ({ id, cells, cell, setCells, go, setGo, winningMessage }) => {
  const handleCLick = (e) => {
    const taken =
      e.target.firstChild.classList.contains("circle") ||
      e.target.firstChild.classList.contains("cross");
    if (winningMessage) return;
    if (!taken) {
      if (go === "circle") {
        e.target.firstChild.classList.add("circle");
        handleCellChange("circle");
        setGo("cross");
      }
      if (go === "cross") {
        e.target.firstChild.classList.add("cross");
        handleCellChange("cross");
        setGo("circle");
      }
    }
  };

  const handleCellChange = (className) => {
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return className;
      } else {
        return cell;
      }
    });
    setCells(nextCells);
  };

  return (
    <div className="square" id={id} onClick={handleCLick}>
      <div className={cell}></div>
    </div>
  );
};

export default Cell;
