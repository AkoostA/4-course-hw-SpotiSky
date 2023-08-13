const formatTime = (valueInDuration) => {
  const min = Math.floor(valueInDuration / 60);
  const sec = `0${valueInDuration % 60}`.slice(-2);
  return `${min}:${sec}`;
};

export default formatTime;
