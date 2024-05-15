export const drawCircle = (ctx, x, y) => {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.strokeStyle = "red"; 
  ctx.lineWidth = 2; 
  ctx.stroke();
};
