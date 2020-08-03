export default function getCurrentSquare(e, canvasRef, resolution) {
  let bound = canvasRef.current.getBoundingClientRect();
  const currentCoord = {
    x: e.clientX - bound.left - ((e.clientX - bound.left) % resolution),
    y: e.clientY - bound.top - ((e.clientY - bound.top) % resolution),
  };
  return currentCoord;
}
