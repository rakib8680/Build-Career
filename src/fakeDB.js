const addToDb = (id) => {
  let jobCart = {};

  // add to cart 
  const storedJob = localStorage.getItem("stored-job");
  if (storedJob) {
    jobCart = JSON.parse(storedJob);
  }
  jobCart[id] = 1;
  localStorage.setItem("stored-job", JSON.stringify(jobCart));
};

// get item from cart
const getJobCart = () => {
  let jobCart = {};
  const storedJob = localStorage.getItem("stored-job");
  if (storedJob) {
    jobCart = JSON.parse(storedJob);
  }
  return jobCart;
};
export { addToDb, getJobCart };